package me.rerere.rikkahub.utils

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Environment
import androidx.core.content.FileProvider
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.withContext
import me.rerere.rikkahub.BuildConfig
import okhttp3.OkHttpClient
import okhttp3.Request
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.io.FileOutputStream
import java.io.InputStream
import java.util.concurrent.TimeUnit

data class LocalAiRelease(
    val tagName: String,
    val cleanVersion: String,
    val name: String,
    val body: String,
    val publishedAt: String,
    val apkDownloadUrl: String?,
    val apkFileName: String?,
    val apkSize: Long,
)

sealed class UpdateStatus {
    data object Idle : UpdateStatus()
    data object Checking : UpdateStatus()
    data class UpToDate(val currentVersion: String) : UpdateStatus()
    data class UpdateAvailable(val release: LocalAiRelease) : UpdateStatus()
    data class Downloading(
        val release: LocalAiRelease,
        val progressPercent: Int,
        val speedText: String,
        val downloadedBytes: Long,
        val totalBytes: Long,
    ) : UpdateStatus()
    data class Downloaded(val release: LocalAiRelease, val file: File) : UpdateStatus()
    data class Error(val message: String) : UpdateStatus()
}

class AppUpdateManager(
    private val context: Context,
    private val httpClient: OkHttpClient = OkHttpClient.Builder()
        .connectTimeout(30, TimeUnit.SECONDS)
        .readTimeout(60, TimeUnit.SECONDS)
        .followRedirects(true)
        .build()
) {
    companion object {
        const val REPO_OWNER = "smartworldarafath"
        const val REPO_NAME = "Local-AI"
        const val RELEASES_API = "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/releases"
        const val RELEASES_WEB = "https://github.com/$REPO_OWNER/$REPO_NAME/releases"
    }

    private val _updateStatus = MutableStateFlow<UpdateStatus>(UpdateStatus.Idle)
    val updateStatus: StateFlow<UpdateStatus> = _updateStatus.asStateFlow()

    val currentVersion: String
        get() = BuildConfig.VERSION_NAME

    /**
     * Checks whether remoteVersion is strictly greater than localVersion.
     * e.g., "2.4" > "2.3", "1.3.0" > "1.2", "v2.0" > "1.9"
     */
    fun isNewerVersion(remote: String, current: String): Boolean {
        return compareVersions(remote, current) > 0
    }

    fun compareVersions(v1: String, v2: String): Int {
        val p1 = cleanVersionParts(v1)
        val p2 = cleanVersionParts(v2)
        val maxLen = maxOf(p1.size, p2.size)
        for (i in 0 until maxLen) {
            val num1 = p1.getOrElse(i) { 0 }
            val num2 = p2.getOrElse(i) { 0 }
            if (num1 != num2) {
                return num1.compareTo(num2)
            }
        }
        return 0
    }

    private fun cleanVersionParts(version: String): List<Int> {
        val cleaned = version.lowercase()
            .removePrefix("v")
            .removePrefix("release")
            .trim()
        val parts = cleaned.split(".", "-", "_")
        return parts.mapNotNull { it.toIntOrNull() }
    }

    private fun getUpdateFile(cleanVersion: String): File {
        val dir = context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS)
            ?: File(context.cacheDir, "updates").apply { mkdirs() }
        return File(dir, "LocalAI_update_$cleanVersion.apk")
    }

    /**
     * Check GitHub for available releases
     */
    suspend fun checkForUpdates(): UpdateStatus = withContext(Dispatchers.IO) {
        _updateStatus.value = UpdateStatus.Checking
        try {
            val request = Request.Builder()
                .url(RELEASES_API)
                .header("Accept", "application/vnd.github.v3+json")
                .header("User-Agent", "LocalAI-Android/${BuildConfig.VERSION_NAME}")
                .build()

            val response = httpClient.newCall(request).execute()
            if (!response.isSuccessful) {
                val error = "Failed to fetch releases: HTTP ${response.code}"
                _updateStatus.value = UpdateStatus.Error(error)
                return@withContext UpdateStatus.Error(error)
            }

            val body = response.body?.string() ?: ""
            val jsonArray = JSONArray(body)
            if (jsonArray.length() == 0) {
                val status = UpdateStatus.UpToDate(currentVersion)
                _updateStatus.value = status
                return@withContext status
            }

            // Find latest non-draft release
            var latestRelease: LocalAiRelease? = null
            for (i in 0 until jsonArray.length()) {
                val obj = jsonArray.getJSONObject(i)
                if (obj.optBoolean("draft", false)) continue

                val tagName = obj.optString("tag_name", "")
                val cleanVer = tagName.removePrefix("v").removePrefix("V").trim()
                val name = obj.optString("name", tagName)
                val notes = obj.optString("body", "")
                val publishedAt = obj.optString("published_at", "")

                // Look for an APK asset
                var apkUrl: String? = null
                var apkName: String? = null
                var apkSize: Long = 0L

                val assets = obj.optJSONArray("assets")
                if (assets != null) {
                    for (j in 0 until assets.length()) {
                        val asset = assets.getJSONObject(j)
                        val aName = asset.optString("name", "")
                        if (aName.endsWith(".apk", ignoreCase = true)) {
                            apkUrl = asset.optString("browser_download_url")
                            apkName = aName
                            apkSize = asset.optLong("size", 0L)
                            break
                        }
                    }
                }

                latestRelease = LocalAiRelease(
                    tagName = tagName,
                    cleanVersion = cleanVer,
                    name = name,
                    body = notes,
                    publishedAt = publishedAt,
                    apkDownloadUrl = apkUrl,
                    apkFileName = apkName,
                    apkSize = apkSize
                )
                break
            }

            if (latestRelease == null) {
                val status = UpdateStatus.UpToDate(currentVersion)
                _updateStatus.value = status
                return@withContext status
            }

            // Check if remote version is strictly newer than current version
            if (isNewerVersion(latestRelease.cleanVersion, currentVersion)) {
                // Check if file is already downloaded
                val targetFile = getUpdateFile(latestRelease.cleanVersion)
                if (targetFile.exists() && targetFile.length() > 0 &&
                    (latestRelease.apkSize == 0L || targetFile.length() == latestRelease.apkSize)
                ) {
                    val status = UpdateStatus.Downloaded(latestRelease, targetFile)
                    _updateStatus.value = status
                    return@withContext status
                }

                val status = UpdateStatus.UpdateAvailable(latestRelease)
                _updateStatus.value = status
                return@withContext status
            } else {
                val status = UpdateStatus.UpToDate(currentVersion)
                _updateStatus.value = status
                return@withContext status
            }
        } catch (e: Exception) {
            val error = UpdateStatus.Error(e.message ?: "Failed to check for updates")
            _updateStatus.value = error
            return@withContext error
        }
    }

    /**
     * Download the APK release with real-time speed and progress monitoring
     */
    suspend fun downloadUpdate(release: LocalAiRelease): Boolean = withContext(Dispatchers.IO) {
        val downloadUrl = release.apkDownloadUrl ?: return@withContext false
        val targetFile = getUpdateFile(release.cleanVersion)

        // Check if already downloaded
        if (targetFile.exists() && (release.apkSize == 0L || targetFile.length() == release.apkSize)) {
            _updateStatus.value = UpdateStatus.Downloaded(release, targetFile)
            return@withContext true
        }

        val tempFile = File(targetFile.parentFile, "${targetFile.name}.tmp")
        if (tempFile.exists()) tempFile.delete()

        try {
            val request = Request.Builder().url(downloadUrl).build()
            val response = httpClient.newCall(request).execute()
            if (!response.isSuccessful) {
                _updateStatus.value = UpdateStatus.Error("Download failed with HTTP ${response.code}")
                return@withContext false
            }

            val body = response.body ?: throw Exception("Empty response body")
            val totalBytes = if (release.apkSize > 0) release.apkSize else body.contentLength()

            var downloadedBytes = 0L
            var lastUpdateTime = System.currentTimeMillis()
            var bytesSinceLastUpdate = 0L
            var currentSpeedText = "0 KB/s"

            val buffer = ByteArray(8192)
            val inputStream: InputStream = body.byteStream()
            val outputStream = FileOutputStream(tempFile)

            outputStream.use { out ->
                inputStream.use { input ->
                    var bytesRead: Int
                    while (input.read(buffer).also { bytesRead = it } != -1) {
                        out.write(buffer, 0, bytesRead)
                        downloadedBytes += bytesRead
                        bytesSinceLastUpdate += bytesRead

                        val now = System.currentTimeMillis()
                        val timeDelta = now - lastUpdateTime
                        if (timeDelta >= 500) { // Update speed calculation every 500ms
                            val speedBytesPerSec = (bytesSinceLastUpdate * 1000.0) / timeDelta
                            currentSpeedText = formatSpeed(speedBytesPerSec)
                            lastUpdateTime = now
                            bytesSinceLastUpdate = 0L

                            val percent = if (totalBytes > 0) {
                                ((downloadedBytes * 100) / totalBytes).toInt().coerceIn(0, 100)
                            } else 0

                            _updateStatus.value = UpdateStatus.Downloading(
                                release = release,
                                progressPercent = percent,
                                speedText = currentSpeedText,
                                downloadedBytes = downloadedBytes,
                                totalBytes = totalBytes
                            )
                        }
                    }
                }
            }

            // Move temp file to target
            if (tempFile.renameTo(targetFile)) {
                _updateStatus.value = UpdateStatus.Downloaded(release, targetFile)
                return@withContext true
            } else {
                tempFile.copyTo(targetFile, overwrite = true)
                tempFile.delete()
                _updateStatus.value = UpdateStatus.Downloaded(release, targetFile)
                return@withContext true
            }
        } catch (e: Exception) {
            tempFile.delete()
            _updateStatus.value = UpdateStatus.Error("Download failed: ${e.message}")
            return@withContext false
        }
    }

    private fun formatSpeed(bytesPerSec: Double): String {
        return when {
            bytesPerSec >= 1024 * 1024 -> String.format("%.2f MB/s", bytesPerSec / (1024 * 1024))
            bytesPerSec >= 1024 -> String.format("%.1f KB/s", bytesPerSec / 1024)
            else -> String.format("%.0f B/s", bytesPerSec)
        }
    }

    /**
     * Launch package installer to install the downloaded APK
     */
    fun installApk(file: File) {
        try {
            val uri = FileProvider.getUriForFile(
                context,
                "${context.packageName}.fileprovider",
                file
            )
            val intent = Intent(Intent.ACTION_VIEW).apply {
                setDataAndType(uri, "application/vnd.android.package-archive")
                addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            }
            context.startActivity(intent)
        } catch (e: Exception) {
            _updateStatus.value = UpdateStatus.Error("Failed to launch package installer: ${e.message}")
        }
    }
}
