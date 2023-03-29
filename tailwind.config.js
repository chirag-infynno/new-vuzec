/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MontserratVariable', 'sans-serif'],
      },
      dropShadow: {
        dropsUpcomig: 'drop-shadow(0px 8px 50px rgba(0, 0, 0, 0.1))',
      },
      backgroundImage: {
        upcomingDrops:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
        presale: "url('../assets/images/presale.png')",
        home: "url('../assets/images/home.png')",
        graceBg:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #000000 100%),url('../assets/images/grace-bg.png')",
      },
      boxShadow: {
        btn: '0px 8px 16px rgba(183, 21, 68, 0.14)',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
}
