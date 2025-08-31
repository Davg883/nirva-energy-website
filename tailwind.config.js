/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nirva Energy Brand Colors
        primary: {
          900: '#2c1e4a', // Deep purple - main brand color
          800: '#3a2858',
          700: '#483366',
          600: '#563d74',
          500: '#644882',
          400: '#7a5d99',
          300: '#9073b0',
          200: '#a688c7',
          100: '#bc9ede',
          50: '#d2b3f5',
        },
        accent: {
          500: '#f0b90b', // Gold - accent color
          600: '#d9a509',
          700: '#c29108',
          800: '#ab7e06',
          900: '#946a05',
          400: '#f3c332',
          300: '#f6cd59',
          200: '#f9d780',
          100: '#fce1a7',
          50: '#ffebce',
        },
        // Extended grays for better hierarchy
        gray: {
          950: '#0a0a0a',
          900: '#1a1a1a',
          800: '#2a2a2a',
          700: '#3a3a3a',
          600: '#525252',
          500: '#6a6a6a',
          400: '#8a8a8a',
          300: '#a8a8a8',
          200: '#c5c5c5',
          100: '#e3e3e3',
          50: '#f8f8f8',
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(240, 185, 11, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(240, 185, 11, 0.6)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      // Add smooth transition utilities
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Enable additional utilities
    container: false, // We use custom container
  },
}