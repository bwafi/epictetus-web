const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1080px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-patrick)', ...fontFamily.sans],
      },
      backgroundImage: {
        search: 'url("/svg/search.svg")',
      },
    },
  },
  plugins: [],
};
