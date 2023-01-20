/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        oma: {
          light: '#e2e8f0',
          DEFAULT: '#475569',
          shock: '#67e8f9',
          dark: '#334155',
        },
      },
    },
  },
  plugins: [],
};
