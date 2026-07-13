import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F7',
        sage: {
          DEFAULT: '#6B8F71',
          light: '#8FAF94',
          dark: '#4F6F54',
        },
        stone: {
          DEFAULT: '#2C2C2C',
          muted: '#5A5A5A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(44, 44, 44, 0.08)',
        card: '0 8px 32px rgba(44, 44, 44, 0.06)',
      },
    },
  },
  plugins: [typography],
};
