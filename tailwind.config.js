/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'pomelo-red': '#e95829',
        'pomelo-yellow': '#e5cb86',
        'pomelo-grey': '#ebebeb',
      },
    },
  },
  plugins: [],
  safelist: [
    'pomelo-red',
    'pomelo-yellow',
    'pomelo-grey',
  ]
}
