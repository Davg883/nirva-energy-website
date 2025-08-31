import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes efficiently
 * Follows invisible design principle of maintaining consistent styling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Design tokens for consistent spacing following invisible design
 */
export const spacing = {
  section: 'py-16 lg:py-24',
  container: 'mx-auto max-w-7xl px-6 lg:px-8',
  cardPadding: 'p-6 lg:p-8',
  buttonPadding: 'px-6 py-3',
} as const

/**
 * Typography scale following modular design approach
 */
export const typography = {
  hero: 'text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight',
  section: 'text-3xl lg:text-4xl font-bold tracking-tight',
  card: 'text-xl lg:text-2xl font-semibold tracking-tight',
  bodyLarge: 'text-lg lg:text-xl leading-relaxed',
  body: 'text-base leading-relaxed',
  caption: 'text-sm text-gray-400',
} as const

/**
 * Animation variants for Framer Motion
 */
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
} as const

/**
 * Color utilities for maintaining brand consistency
 */
export const colors = {
  primary: {
    main: '#2c1e4a',
    light: '#483366',
    dark: '#1a1230',
  },
  accent: {
    main: '#f0b90b',
    light: '#f3c332',
    dark: '#d9a509',
  },
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  }
} as const