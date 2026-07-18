package me.rerere.rikkahub.ui.pages.setting

import android.os.Build
import java.text.DateFormat
import java.util.Date
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Check
import androidx.compose.material.icons.rounded.KeyboardArrowDown
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentWidth
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.FilledTonalButton
import androidx.compose.material3.Icon
import androidx.compose.material3.LargeTopAppBar
import androidx.compose.material3.LinearWavyProgressIndicator
import androidx.compose.material3.ListItem
import androidx.compose.material3.ListItemDefaults
import androidx.compose.material3.LocalTextStyle
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Slider
import me.rerere.rikkahub.ui.components.ui.HapticSwitch
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import me.rerere.rikkahub.R
import me.rerere.rikkahub.data.datastore.DisplaySetting
import me.rerere.rikkahub.data.datastore.TtsAutoplayMode
import me.rerere.rikkahub.data.ai.models.ModelCatalogSource
import me.rerere.rikkahub.data.ai.models.ModelCatalogStatus
import me.rerere.rikkahub.ui.components.nav.BackButton
import me.rerere.rikkahub.ui.components.nav.OneUITopAppBar
import me.rerere.rikkahub.ui.components.richtext.MarkdownBlock
import me.rerere.rikkahub.ui.components.ui.Select
import me.rerere.rikkahub.ui.components.ui.ToastType
import me.rerere.rikkahub.ui.components.ui.permission.PermissionManager
import me.rerere.rikkahub.ui.components.ui.permission.PermissionNotification
import me.rerere.rikkahub.ui.components.ui.permission.rememberPermissionState
import me.rerere.rikkahub.ui.context.LocalToaster
import me.rerere.rikkahub.ui.hooks.HapticPattern
import me.rerere.rikkahub.ui.hooks.rememberAmoledDarkMode
import me.rerere.rikkahub.ui.hooks.rememberColorMode
import me.rerere.rikkahub.ui.hooks.rememberPremiumHaptics
import me.rerere.rikkahub.ui.hooks.rememberSharedPreferenceBoolean
import me.rerere.rikkahub.ui.pages.setting.components.PresetThemeButtonGroup
import me.rerere.rikkahub.ui.pages.setting.components.SettingsGroup
import me.rerere.rikkahub.ui.pages.setting.components.SettingGroupItem
import me.rerere.rikkahub.ui.pages.setting.components.SettingGroupInputItem
import me.rerere.rikkahub.ui.theme.AppShapes
import me.rerere.rikkahub.ui.theme.ColorMode
import me.rerere.rikkahub.utils.plus
import org.koin.androidx.compose.koinViewModel

@Composable
fun SettingDisplayPage(vm: SettingVM = koinViewModel()) {
    val settings by vm.settings.collectAsStateWithLifecycle()
    val modelCatalogStatus by vm.modelCatalogStatus.collectAsStateWithLifecycle()
    var displaySetting by remember(settings) { mutableStateOf(settings.displaySetting) }
    var amoledDarkMode by rememberAmoledDarkMode()
    val context = LocalContext.current
    val toaster = LocalToaster.current
    val haptics = rememberPremiumHaptics(enabled = settings.displaySetting.enableUIHaptics)

    fun updateDisplaySetting(setting: DisplaySetting) {
        displaySetting = setting
        vm.updateSettings(
            settings.copy(
                displaySetting = setting
            )
        )
    }

    val scrollBehavior = TopAppBarDefaults.exitUntilCollapsedScrollBehavior()
    val lazyListState = rememberLazyListState()

    val permissionState = rememberPermissionState(
        permissions = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) setOf(
            PermissionNotification
        ) else emptySet(),
    )
    PermissionManager(permissionState = permissionState)

    Scaffold(
        topBar = {
            OneUITopAppBar(
                title = stringResource(R.string.setting_display_page_title),
                scrollBehavior = scrollBehavior,
                navigationIcon = {
                    BackButton()
                }
            )
        },
        modifier = Modifier.nestedScroll(scrollBehavior.nestedScrollConnection)
    ) { contentPadding ->
        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            state = lazyListState,
            contentPadding = contentPadding,
            verticalArrangement = Arrangement.spacedBy(0.dp)
        ) {
            // CPU & GPU Usage Control
            item {
                SettingsGroup(
                    title = "CPU & GPU Usage Control"
                ) {
                    SettingGroupItem(
                        title = "Resource Usage Limit",
                        subtitle = "Control maximum CPU and GPU usage allowed for local processing",
                        trailing = {
                            Select(
                                options = me.rerere.rikkahub.data.datastore.ResourceLimitPreset.entries.toList(),
                                selectedOption = settings.resourceLimitPreset,
                                onOptionSelected = { preset ->
                                    vm.updateSettings(settings.copy(resourceLimitPreset = preset))
                                },
                                optionToString = { preset ->
                                    when (preset) {
                                        me.rerere.rikkahub.data.datastore.ResourceLimitPreset.SYSTEM_RECOMMENDED -> "System Recommended / Current Usage"
                                        me.rerere.rikkahub.data.datastore.ResourceLimitPreset.P20 -> "20%"
                                        me.rerere.rikkahub.data.datastore.ResourceLimitPreset.P35 -> "35%"
                                        me.rerere.rikkahub.data.datastore.ResourceLimitPreset.P50 -> "50%"
                                        me.rerere.rikkahub.data.datastore.ResourceLimitPreset.P75 -> "75%"
                                        me.rerere.rikkahub.data.datastore.ResourceLimitPreset.P90 -> "90%"
                                    }
                                },
                                modifier = Modifier.wrapContentWidth()
                            )
                        }
                    )
                }
            }

            // System & App UI Color
            item {
                SettingsGroup(
                    title = "System & App UI Color"
                ) {
                    SettingGroupItem(
                        title = stringResource(R.string.setting_page_dynamic_color),
                        subtitle = stringResource(R.string.setting_page_dynamic_color_desc),
                        trailing = {
                            HapticSwitch(
                                checked = settings.dynamicColor,
                                onCheckedChange = {
                                    vm.updateSettings(
                                        settings.copy(
                                            dynamicColor = it,
                                            customAppUiColorHex = if (it) null else settings.customAppUiColorHex
                                        )
                                    )
                                },
                            )
                        }
                    )

                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp, vertical = 8.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = "Custom UI Color",
                            style = MaterialTheme.typography.bodyMedium
                        )
                        Row(
                            horizontalArrangement = Arrangement.spacedBy(8.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            val presetColors = listOf("#6750A4", "#006A60", "#9A2526", "#006399", "#825500", "#33691E")
                            presetColors.forEach { hex ->
                                val color = me.rerere.rikkahub.ui.theme.parseHexColor(hex)
                                val isSelected = settings.customAppUiColorHex?.equals(hex, ignoreCase = true) == true
                                Box(
                                    modifier = Modifier
                                        .size(28.dp)
                                        .clip(CircleShape)
                                        .background(color)
                                        .clickable {
                                            vm.updateSettings(
                                                settings.copy(
                                                    dynamicColor = false,
                                                    customAppUiColorHex = hex
                                                )
                                            )
                                        },
                                    contentAlignment = Alignment.Center
                                ) {
                                    if (isSelected) {
                                        Icon(
                                            Icons.Rounded.Check,
                                            contentDescription = null,
                                            tint = Color.White,
                                            modifier = Modifier.size(16.dp)
                                        )
                                    }
                                }
                            }
                        }
                    }

                    SettingGroupItem(
                        title = "Restore Default Colors",
                        subtitle = "Instantly restore original default color configuration",
                        trailing = {
                            FilledTonalButton(
                                onClick = {
                                    vm.updateSettings(
                                        settings.copy(
                                            dynamicColor = true,
                                            customAppUiColorHex = null,
                                            themeId = me.rerere.rikkahub.ui.theme.PresetThemes[0].id,
                                            lightSliderValue = 0.0f,
                                            resourceLimitPreset = me.rerere.rikkahub.data.datastore.ResourceLimitPreset.SYSTEM_RECOMMENDED
                                        )
                                    )
                                }
                            ) {
                                Text("Default")
                            }
                        }
                    )
                }
            }

            // Theme Settings & Add Theme
            item {
                val navController = me.rerere.rikkahub.ui.context.LocalNavController.current
                var showAddThemeDialog by remember { mutableStateOf(false) }

                SettingsGroup(
                    title = stringResource(R.string.setting_page_theme_setting)
                ) {
                    var colorMode by rememberColorMode()
                    SettingGroupItem(
                        title = stringResource(R.string.setting_page_color_mode),
                        trailing = {
                            Select(
                                options = ColorMode.entries,
                                selectedOption = colorMode,
                                onOptionSelected = {
                                    colorMode = it
                                },
                                optionToString = {
                                    when (it) {
                                        ColorMode.SYSTEM -> stringResource(R.string.setting_page_color_mode_system)
                                        ColorMode.LIGHT -> stringResource(R.string.setting_page_color_mode_light)
                                        ColorMode.DARK -> stringResource(R.string.setting_page_color_mode_dark)
                                    }
                                },
                                modifier = Modifier.wrapContentWidth()
                            )
                        }
                    )

                    PresetThemeButtonGroup(
                        themeId = settings.themeId,
                        customThemes = settings.customThemes,
                        modifier = Modifier.fillMaxWidth().padding(horizontal = 0.dp, vertical = 8.dp),
                        onAddTheme = { showAddThemeDialog = true },
                        onChangeTheme = {
                            vm.updateSettings(
                                settings.copy(
                                    themeId = it,
                                    dynamicColor = false,
                                    customAppUiColorHex = null
                                )
                            )
                        }
                    )

                    SettingGroupItem(
                        title = stringResource(R.string.setting_fonts_title),
                        subtitle = stringResource(R.string.setting_fonts_app_font_desc),
                        onClick = { navController.navigate(me.rerere.rikkahub.Screen.SettingFonts) }
                    )
                    
                    SettingGroupItem(
                        title = stringResource(R.string.setting_ui_customization_title),
                        subtitle = stringResource(R.string.setting_display_ui_customization_desc),
                        onClick = { navController.navigate(me.rerere.rikkahub.Screen.SettingUICustomization) }
                    )
                }

                if (showAddThemeDialog) {
                    AddThemeDialog(
                        onDismiss = { showAddThemeDialog = false },
                        onConfirm = { name, hex ->
                            val newTheme = me.rerere.rikkahub.data.datastore.CustomThemeData(
                                name = name,
                                primaryColorHex = hex
                            )
                            val updatedThemes = settings.customThemes + newTheme
                            vm.updateSettings(
                                settings.copy(
                                    customThemes = updatedThemes,
                                    themeId = newTheme.id,
                                    dynamicColor = false,
                                    customAppUiColorHex = null
                                )
                            )
                            showAddThemeDialog = false
                        }
                    )
                }
            }

            // Light Slider
            item {
                SettingsGroup(
                    title = "Light"
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp, vertical = 12.dp),
                        verticalArrangement = Arrangement.spacedBy(4.dp)
                    ) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Text(
                                text = "Brightness & Saturation",
                                style = MaterialTheme.typography.titleMedium
                            )
                            val valPct = (settings.lightSliderValue * 100).toInt()
                            Text(
                                text = if (valPct == 0) "Center (Default)" else "${if (valPct > 0) "+" else ""}$valPct%",
                                style = MaterialTheme.typography.labelMedium,
                                color = MaterialTheme.colorScheme.primary
                            )
                        }
                        Text(
                            text = "Moving to the left makes UI darker. Moving to the right makes UI brighter & more saturated.",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                        Slider(
                            value = settings.lightSliderValue,
                            onValueChange = { newValue ->
                                vm.updateSettings(settings.copy(lightSliderValue = newValue))
                            },
                            valueRange = -1.0f..1.0f,
                            steps = 20,
                            modifier = Modifier.fillMaxWidth()
                        )
                    }
                }
            }



            // Basic Settings
            item {
                var createNewConversationOnStart by rememberSharedPreferenceBoolean(
                    "create_new_conversation_on_start",
                    true
                )
                SettingsGroup(
                    title = stringResource(R.string.setting_page_basic_settings)
                ) {
                    SettingGroupItem(
                        title = stringResource(R.string.setting_display_page_create_new_conversation_on_start_title),
                        subtitle = stringResource(R.string.setting_display_page_create_new_conversation_on_start_desc),
                        trailing = {
                            HapticSwitch(
                                checked = createNewConversationOnStart,
                                onCheckedChange = {
                                    createNewConversationOnStart = it
                                }
                            )
                        }
                    )
                    SettingGroupItem(
                        title = stringResource(R.string.setting_display_page_notification_message_generated),
                        subtitle = stringResource(R.string.setting_display_page_notification_message_generated_desc),
                        trailing = {
                            HapticSwitch(
                                checked = displaySetting.enableNotificationOnMessageGeneration,
                                onCheckedChange = {
                                    if (it && !permissionState.allPermissionsGranted) {
                                        permissionState.requestPermissions()
                                    }
                                    updateDisplaySetting(displaySetting.copy(enableNotificationOnMessageGeneration = it))
                                }
                            )
                        }
                    )
                    SettingGroupItem(
                        title = stringResource(R.string.setting_display_check_updates_title),
                        subtitle = stringResource(R.string.setting_display_check_updates_desc),
                        trailing = {
                            HapticSwitch(
                                checked = displaySetting.checkForUpdates,
                                onCheckedChange = {
                                    updateDisplaySetting(displaySetting.copy(checkForUpdates = it))
                                }
                            )
                        }
                    )
                    SettingGroupInputItem(
                        title = stringResource(R.string.setting_display_model_catalog_title),
                        subtitle = buildModelCatalogSubtitle(context, modelCatalogStatus),
                    ) {
                        FilledTonalButton(
                            onClick = {
                                haptics.perform(HapticPattern.Pop)
                                vm.refreshModelCatalog(
                                    onSuccess = {
                                        toaster.show(
                                            context.getString(R.string.setting_display_model_catalog_refresh_success),
                                            type = ToastType.Success,
                                        )
                                    },
                                    onError = { error ->
                                        toaster.show(
                                            context.getString(
                                                R.string.setting_display_model_catalog_refresh_error,
                                                error.message ?: context.getString(R.string.backup_page_unknown_error),
                                            ),
                                            type = ToastType.Error,
                                        )
                                    },
                                )
                            },
                            enabled = !modelCatalogStatus.isRefreshing,
                            modifier = Modifier.fillMaxWidth(),
                            shape = AppShapes.ButtonPill,
                        ) {
                            Text(
                                text = stringResource(R.string.setting_display_model_catalog_refresh_button),
                            )
                        }

                        if (modelCatalogStatus.isRefreshing) {
                            Column(
                                verticalArrangement = Arrangement.spacedBy(4.dp),
                            ) {
                                LinearWavyProgressIndicator(modifier = Modifier.fillMaxWidth())
                                Text(
                                    text = stringResource(R.string.setting_display_model_catalog_refreshing),
                                    style = MaterialTheme.typography.bodyMedium,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                                )
                            }
                        }
                    }
                }
            }

//            item {
//                ListItem(
//                    colors = ListItemDefaults.colors(containerColor = Color.Transparent),
//                    headlineContent = {
//                        Text(stringResource(R.string.setting_display_page_developer_mode))
//                    },
//                    supportingContent = {
//                        Text(stringResource(R.string.setting_display_page_developer_mode_desc))
//                    },
//                    trailingContent = {
//                        HapticSwitch(
//                            checked = settings.developerMode,
//                            onCheckedChange = {
//                                vm.updateSettings(settings.copy(developerMode = it))
//                            }
//                        )
//                    },
//                )
//            }

            // Advanced Settings (RP Optimizations)
            item {
                val navController = me.rerere.rikkahub.ui.context.LocalNavController.current
                SettingsGroup(
                    title = stringResource(R.string.setting_display_advanced)
                ) {
                    SettingGroupItem(
                        title = "TTS Autoplay",
                        subtitle = "Read assistant replies automatically",
                        trailing = {
                            HapticSwitch(
                                checked = settings.ttsAutoplayMode != TtsAutoplayMode.OFF,
                                onCheckedChange = { enabled ->
                                    vm.updateSettings(
                                        settings.copy(
                                            ttsAutoplayMode = if (enabled) {
                                                TtsAutoplayMode.WHILE_GENERATING
                                            } else {
                                                TtsAutoplayMode.OFF
                                            }
                                        )
                                    )
                                }
                            )
                        }
                    )
                    SettingGroupItem(
                        title = stringResource(R.string.setting_rp_optimizations_title),
                        subtitle = stringResource(R.string.setting_display_rp_optimizations_desc),
                        onClick = { navController.navigate(me.rerere.rikkahub.Screen.SettingRpOptimizations) }
                    )
                }
            }
        }
    }
}

private fun buildModelCatalogSubtitle(
    context: android.content.Context,
    status: ModelCatalogStatus,
): String {
    val sourceLabel = when (status.source) {
        ModelCatalogSource.BUNDLED -> context.getString(R.string.setting_display_model_catalog_source_bundled)
        ModelCatalogSource.DOWNLOADED -> context.getString(R.string.setting_display_model_catalog_source_downloaded)
    }
    val lastRefreshLabel = status.lastSuccessfulRefreshAt?.let {
        DateFormat.getDateTimeInstance(DateFormat.MEDIUM, DateFormat.SHORT).format(Date(it))
    }
    return if (status.source == ModelCatalogSource.DOWNLOADED && lastRefreshLabel != null) {
        context.getString(
            R.string.setting_display_model_catalog_subtitle_downloaded,
            sourceLabel,
            status.entryCount,
            lastRefreshLabel,
        )
    } else {
        context.getString(
            R.string.setting_display_model_catalog_subtitle_bundled,
            sourceLabel,
            status.entryCount,
        )
    }
}

@Composable
private fun AddThemeDialog(
    onDismiss: () -> Unit,
    onConfirm: (name: String, hex: String) -> Unit
) {
    var themeName by remember { mutableStateOf("") }
    var colorHex by remember { mutableStateOf("#6750A4") }

    androidx.compose.material3.AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Add Custom Theme") },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                androidx.compose.material3.OutlinedTextField(
                    value = themeName,
                    onValueChange = { themeName = it },
                    label = { Text("Theme Name") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth()
                )
                androidx.compose.material3.OutlinedTextField(
                    value = colorHex,
                    onValueChange = { colorHex = it },
                    label = { Text("Primary Color Hex (e.g. #FF5722)") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth()
                )
            }
        },
        confirmButton = {
            androidx.compose.material3.TextButton(
                onClick = {
                    if (themeName.isNotBlank() && colorHex.isNotBlank()) {
                        onConfirm(themeName.trim(), colorHex.trim())
                    }
                },
                enabled = themeName.isNotBlank() && colorHex.isNotBlank()
            ) {
                Text("Add")
            }
        },
        dismissButton = {
            androidx.compose.material3.TextButton(onClick = onDismiss) {
                Text("Cancel")
            }
        }
    )
}

