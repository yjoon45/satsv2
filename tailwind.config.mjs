import defaultTheme from 'tailwindcss/defaultTheme';
import taos from 'taos/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: '20px',
      },
      fontFamily: {
        sans: [
          'Montserrat Variable',
          'bahnschrift',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        dark: '#171717',
        neutral: {
          700: '#636363',
        },
        orange: {
          DEFAULT: '#fda44c',
        },
      },
    },
  },
  plugins: [taos],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
