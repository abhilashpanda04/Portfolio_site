/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#05050a',
        surface: '#0c0c14',
        'surface-hover': '#11111c',
        border: '#1e1e2e',
        'border-strong': '#2a2a3e',
        'text-primary': '#ffffff',
        'text-body': '#b0b0c0',
        'text-muted': '#6b6b8a',
        accent: '#ffffff',
        'accent-soft': '#6b6b8a',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        display: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        headline: ['2rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        title: ['1.25rem', { lineHeight: '1.3' }],
        body: ['1rem', { lineHeight: '1.65' }],
        caption: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        34: '8.5rem',
      },
      maxWidth: {
        content: '1200px',
        prose: '720px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'hero-name': 'heroName 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'orb-float': 'orbFloat 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        heroName: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(40px, -30px)' },
        },
      },
    },
  },
  plugins: [],
};
