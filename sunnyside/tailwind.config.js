/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        blueOrangeMobile: ('url(./assets/mobile/image-header.jpg)'),
        blueOrangeDesktop: ('url(./assets/desktop/image-header.jpg)'),
      },

      fontFamily: {
        frau: ['Fraunces, serif'],
        barlow: ['Barlow', 'sans-serif']
      }
    },
  },
  plugins: [],
}