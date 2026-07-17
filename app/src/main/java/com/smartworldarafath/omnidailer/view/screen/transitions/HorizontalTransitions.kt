package com.smartworldarafath.omnidailer.view.screen.transitions

import androidx.compose.animation.*
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.spring
import androidx.compose.ui.unit.IntOffset
import androidx.navigation.NavBackStackEntry
import com.ramcosta.composedestinations.animations.NavHostAnimatedDestinationStyle

object AppTransitions : NavHostAnimatedDestinationStyle() {
    // Custom spring specifications for smooth slide and fade transitions
    private val slideSpring = spring<IntOffset>(
        dampingRatio = Spring.DampingRatioLowBouncy, // Low bounce for physics feel
        stiffness = Spring.StiffnessMediumLow       // Slightly slower, natural motion
    )
    private val fadeSpring = spring<Float>(
        dampingRatio = Spring.DampingRatioNoBouncy,
        stiffness = Spring.StiffnessMedium
    )

    override val enterTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> EnterTransition = {
        slideInHorizontally(initialOffsetX = { it }, animationSpec = slideSpring)
    }

    override val exitTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> ExitTransition = {
        slideOutHorizontally(targetOffsetX = { -it / 10 }, animationSpec = slideSpring) + 
        fadeOut(animationSpec = fadeSpring, targetAlpha = 0.4f)
    }

    override val popEnterTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> EnterTransition = {
        slideInHorizontally(initialOffsetX = { -it / 10 }, animationSpec = slideSpring) + 
        fadeIn(animationSpec = fadeSpring, initialAlpha = 0.4f)
    }

    override val popExitTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> ExitTransition = {
        slideOutHorizontally(targetOffsetX = { it }, animationSpec = slideSpring)
    }
}

object FadeTransitions : NavHostAnimatedDestinationStyle() {
    private val scaleSpring = spring<Float>(
        dampingRatio = Spring.DampingRatioLowBouncy,
        stiffness = Spring.StiffnessMediumLow
    )
    private val fadeSpring = spring<Float>(
        dampingRatio = Spring.DampingRatioNoBouncy,
        stiffness = Spring.StiffnessMedium
    )

    override val enterTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> EnterTransition = {
        fadeIn(animationSpec = fadeSpring) + scaleIn(initialScale = 0.95f, animationSpec = scaleSpring)
    }
    override val exitTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> ExitTransition = {
        fadeOut(animationSpec = fadeSpring)
    }
    override val popEnterTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> EnterTransition = {
        fadeIn(animationSpec = fadeSpring)
    }
    override val popExitTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> ExitTransition = {
        fadeOut(animationSpec = fadeSpring) + scaleOut(targetScale = 0.95f, animationSpec = scaleSpring)
    }
}

object ZoomTransitions : NavHostAnimatedDestinationStyle() {
    private val scaleSpring = spring<Float>(
        dampingRatio = 0.8f,
        stiffness = Spring.StiffnessMediumLow
    )
    private val fadeSpring = spring<Float>(
        dampingRatio = Spring.DampingRatioNoBouncy,
        stiffness = Spring.StiffnessMedium
    )

    override val enterTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> EnterTransition = {
        scaleIn(initialScale = 0.82f, animationSpec = scaleSpring) + fadeIn(animationSpec = fadeSpring)
    }
    override val exitTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> ExitTransition = {
        scaleOut(targetScale = 1.08f, animationSpec = scaleSpring) + fadeOut(animationSpec = fadeSpring)
    }
    override val popEnterTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> EnterTransition = {
        scaleIn(initialScale = 1.08f, animationSpec = scaleSpring) + fadeIn(animationSpec = fadeSpring)
    }
    override val popExitTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> ExitTransition = {
        scaleOut(targetScale = 0.82f, animationSpec = scaleSpring) + fadeOut(animationSpec = fadeSpring)
    }
}

fun getAppTransition(style: Int): NavHostAnimatedDestinationStyle {
    return when (style) {
        0 -> AppTransitions
        1 -> ZoomTransitions
        2 -> FadeTransitions
        3 -> NoTransitionsDestinationStyle
        else -> AppTransitions
    }
}

object NoTransitionsDestinationStyle : NavHostAnimatedDestinationStyle() {
    override val enterTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> EnterTransition = { EnterTransition.None }
    override val exitTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> ExitTransition = { ExitTransition.None }
    override val popEnterTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> EnterTransition = { EnterTransition.None }
    override val popExitTransition: AnimatedContentTransitionScope<NavBackStackEntry>.() -> ExitTransition = { ExitTransition.None }
}
