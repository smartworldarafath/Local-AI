package me.rerere.rikkahub.ui.theme

import androidx.compose.ui.graphics.Color

data class ExtendColors(
    val red1: Color,
    val red2: Color,
    val red3: Color,
    val red4: Color,
    val red5: Color,
    val red6: Color,
    val red7: Color,
    val red8: Color,
    val red9: Color,
    val red10: Color,
    val orange1: Color,
    val orange2: Color,
    val orange3: Color,
    val orange4: Color,
    val orange5: Color,
    val orange6: Color,
    val orange7: Color,
    val orange8: Color,
    val orange9: Color,
    val orange10: Color,
    val green1: Color,
    val green2: Color,
    val green3: Color,
    val green4: Color,
    val green5: Color,
    val green6: Color,
    val green7: Color,
    val green8: Color,
    val green9: Color,
    val green10: Color,
    val blue1: Color,
    val blue2: Color,
    val blue3: Color,
    val blue4: Color,
    val blue5: Color,
    val blue6: Color,
    val blue7: Color,
    val blue8: Color,
    val blue9: Color,
    val blue10: Color,
    val gray1: Color,
    val gray2: Color,
    val gray3: Color,
    val gray4: Color,
    val gray5: Color,
    val gray6: Color,
    val gray7: Color,
    val gray8: Color,
    val gray9: Color,
    val gray10: Color,
)

fun lightExtendColors(): ExtendColors = ExtendColors(
    red1 = Color(255, 236, 232),
    red2 = Color(253, 205, 197),
    red3 = Color(251, 172, 163),
    red4 = Color(249, 137, 129),
    red5 = Color(247, 101, 96),
    red6 = Color(245, 63, 63),
    red7 = Color(203, 39, 45),
    red8 = Color(161, 21, 30),
    red9 = Color(119, 8, 19),
    red10 = Color(77, 0, 10),
    orange1 = Color(255, 247, 232),
    orange2 = Color(255, 228, 186),
    orange3 = Color(255, 207, 139),
    orange4 = Color(255, 182, 93),
    orange5 = Color(255, 154, 46),
    orange6 = Color(255, 125, 0),
    orange7 = Color(210, 95, 0),
    orange8 = Color(166, 69, 0),
    orange9 = Color(121, 46, 0),
    orange10 = Color(77, 27, 0),
    green1 = Color(232, 255, 234),
    green2 = Color(175, 240, 181),
    green3 = Color(123, 225, 136),
    green4 = Color(76, 210, 99),
    green5 = Color(35, 195, 67),
    green6 = Color(0, 180, 42),
    green7 = Color(0, 154, 41),
    green8 = Color(0, 128, 38),
    green9 = Color(0, 102, 34),
    green10 = Color(0, 77, 28),
    blue1 = Color(232, 247, 255),
    blue2 = Color(195, 231, 254),
    blue3 = Color(159, 212, 253),
    blue4 = Color(123, 192, 252),
    blue5 = Color(87, 169, 251),
    blue6 = Color(52, 145, 250),
    blue7 = Color(32, 108, 207),
    blue8 = Color(17, 75, 163),
    blue9 = Color(6, 48, 120),
    blue10 = Color(0, 26, 77),
    gray1 = Color(247, 248, 250),
    gray2 = Color(242, 243, 245),
    gray3 = Color(229, 230, 235),
    gray4 = Color(201, 205, 212),
    gray5 = Color(169, 174, 184),
    gray6 = Color(134, 144, 156),
    gray7 = Color(107, 119, 133),
    gray8 = Color(78, 89, 105),
    gray9 = Color(39, 46, 59),
    gray10 = Color(29, 33, 41),
)

fun darkExtendColors(): ExtendColors = ExtendColors(
    red1 = Color(77, 0, 10),
    red2 = Color(119, 6, 17),
    red3 = Color(161, 22, 31),
    red4 = Color(203, 46, 52),
    red5 = Color(245, 78, 78),
    red6 = Color(247, 105, 101),
    red7 = Color(249, 141, 134),
    red8 = Color(251, 176, 167),
    red9 = Color(253, 209, 202),
    red10 = Color(255, 240, 236),
    orange1 = Color(77, 27, 0),
    orange2 = Color(121, 48, 4),
    orange3 = Color(166, 75, 10),
    orange4 = Color(210, 105, 19),
    orange5 = Color(255, 141, 31),
    orange6 = Color(255, 150, 38),
    orange7 = Color(255, 179, 87),
    orange8 = Color(255, 205, 135),
    orange9 = Color(255, 227, 184),
    orange10 = Color(255, 247, 232),
    green1 = Color(0, 77, 28),
    green2 = Color(4, 102, 37),
    green3 = Color(10, 128, 45),
    green4 = Color(18, 154, 55),
    green5 = Color(29, 180, 64),
    green6 = Color(39, 195, 70),
    green7 = Color(80, 210, 102),
    green8 = Color(126, 225, 139),
    green9 = Color(178, 240, 183),
    green10 = Color(235, 255, 236),
    blue1 = Color(0, 26, 77),
    blue2 = Color(5, 47, 120),
    blue3 = Color(19, 76, 163),
    blue4 = Color(41, 113, 207),
    blue5 = Color(70, 154, 250),
    blue6 = Color(90, 170, 251),
    blue7 = Color(125, 193, 252),
    blue8 = Color(161, 213, 253),
    blue9 = Color(198, 232, 254),
    blue10 = Color(234, 248, 255),
    gray1 = Color(23, 23, 26),
    gray2 = Color(46, 46, 48),
    gray3 = Color(72, 72, 73),
    gray4 = Color(95, 95, 96),
    gray5 = Color(120, 120, 122),
    gray6 = Color(146, 146, 147),
    gray7 = Color(171, 171, 172),
    gray8 = Color(197, 197, 197),
    gray9 = Color(223, 223, 223),
    gray10 = Color(246, 246, 246),
)

fun parseHexColor(hex: String, fallback: Color = Color(0xFF6750A4)): Color {
    val cleanHex = hex.removePrefix("#").trim()
    return runCatching {
        val colorInt = when (cleanHex.length) {
            6 -> android.graphics.Color.parseColor("#FF$cleanHex")
            8 -> android.graphics.Color.parseColor("#$cleanHex")
            else -> android.graphics.Color.parseColor(hex)
        }
        Color(colorInt)
    }.getOrDefault(fallback)
}

fun Color.adjustLightnessAndSaturation(sliderValue: Float): Color {
    if (sliderValue == 0f) return this

    val r = red
    val g = green
    val b = blue
    val a = alpha

    val max = maxOf(r, g, b)
    val min = minOf(r, g, b)
    var h: Float
    var s: Float
    var l = (max + min) / 2f

    if (max == min) {
        h = 0f
        s = 0f
    } else {
        val d = max - min
        s = if (l > 0.5f) d / (2f - max - min) else d / (max + min)
        h = when (max) {
            r -> (g - b) / d + (if (g < b) 6f else 0f)
            g -> (b - r) / d + 2f
            else -> (r - g) / d + 4f
        } / 6f
    }

    if (sliderValue < 0f) {
        l *= (1f + sliderValue * 0.45f).coerceIn(0.05f, 1.0f)
    } else {
        l = (l + sliderValue * 0.25f).coerceIn(0.0f, 1.0f)
        s = (s * (1f + sliderValue * 0.5f)).coerceIn(0.0f, 1.0f)
    }

    fun hueToRgb(p: Float, q: Float, tInput: Float): Float {
        var t = tInput
        if (t < 0f) t += 1f
        if (t > 1f) t -= 1f
        if (t < 1f / 6f) return p + (q - p) * 6f * t
        if (t < 1f / 2f) return q
        if (t < 2f / 3f) return p + (q - p) * (2f / 3f - t) * 6f
        return p
    }

    val newR: Float
    val newG: Float
    val newB: Float

    if (s == 0f) {
        newR = l
        newG = l
        newB = l
    } else {
        val q = if (l < 0.5f) l * (1f + s) else l + s - l * s
        val p = 2f * l - q
        newR = hueToRgb(p, q, h + 1f / 3f)
        newG = hueToRgb(p, q, h)
        newB = hueToRgb(p, q, h - 1f / 3f)
    }

    return Color(newR.coerceIn(0f, 1f), newG.coerceIn(0f, 1f), newB.coerceIn(0f, 1f), a)
}

fun androidx.compose.material3.ColorScheme.applyLightSlider(sliderValue: Float): androidx.compose.material3.ColorScheme {
    if (sliderValue == 0f) return this
    return copy(
        primary = primary.adjustLightnessAndSaturation(sliderValue),
        onPrimary = onPrimary.adjustLightnessAndSaturation(sliderValue),
        primaryContainer = primaryContainer.adjustLightnessAndSaturation(sliderValue),
        onPrimaryContainer = onPrimaryContainer.adjustLightnessAndSaturation(sliderValue),
        secondary = secondary.adjustLightnessAndSaturation(sliderValue),
        onSecondary = onSecondary.adjustLightnessAndSaturation(sliderValue),
        secondaryContainer = secondaryContainer.adjustLightnessAndSaturation(sliderValue),
        onSecondaryContainer = onSecondaryContainer.adjustLightnessAndSaturation(sliderValue),
        tertiary = tertiary.adjustLightnessAndSaturation(sliderValue),
        onTertiary = onTertiary.adjustLightnessAndSaturation(sliderValue),
        tertiaryContainer = tertiaryContainer.adjustLightnessAndSaturation(sliderValue),
        onTertiaryContainer = onTertiaryContainer.adjustLightnessAndSaturation(sliderValue),
        background = background.adjustLightnessAndSaturation(sliderValue),
        onBackground = onBackground.adjustLightnessAndSaturation(sliderValue),
        surface = surface.adjustLightnessAndSaturation(sliderValue),
        onSurface = onSurface.adjustLightnessAndSaturation(sliderValue),
        surfaceVariant = surfaceVariant.adjustLightnessAndSaturation(sliderValue),
        onSurfaceVariant = onSurfaceVariant.adjustLightnessAndSaturation(sliderValue),
        surfaceTint = surfaceTint.adjustLightnessAndSaturation(sliderValue),
        inverseSurface = inverseSurface.adjustLightnessAndSaturation(sliderValue),
        inverseOnSurface = inverseOnSurface.adjustLightnessAndSaturation(sliderValue),
        error = error.adjustLightnessAndSaturation(sliderValue),
        onError = onError.adjustLightnessAndSaturation(sliderValue),
        errorContainer = errorContainer.adjustLightnessAndSaturation(sliderValue),
        onErrorContainer = onErrorContainer.adjustLightnessAndSaturation(sliderValue),
        outline = outline.adjustLightnessAndSaturation(sliderValue),
        outlineVariant = outlineVariant.adjustLightnessAndSaturation(sliderValue),
    )
}

fun createColorSchemeFromHex(hex: String, dark: Boolean): androidx.compose.material3.ColorScheme {
    val primary = parseHexColor(hex)
    return if (dark) {
        androidx.compose.material3.darkColorScheme(
            primary = primary,
            primaryContainer = primary.copy(alpha = 0.3f),
            onPrimaryContainer = Color.White,
            secondary = primary.copy(alpha = 0.8f),
            background = Color(0xFF121212),
            surface = Color(0xFF1E1E1E),
        )
    } else {
        androidx.compose.material3.lightColorScheme(
            primary = primary,
            primaryContainer = primary.copy(alpha = 0.15f),
            onPrimaryContainer = primary,
            secondary = primary.copy(alpha = 0.8f),
            background = Color(0xFFF8F9FA),
            surface = Color(0xFFFFFFFF),
        )
    }
}

