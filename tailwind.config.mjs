/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        hog: {
          purple: '#3D2A6D',
          purpleLight: '#5B3E96',
          gold: '#D4AF37',
          goldBright: '#F0C94A',
          magenta: '#B81B62',
          text: '#F5F1E6',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
