/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#282C33',
        'tx-second': '#95EBA8',
      },
    },
  },
  plugins: [],
};
