/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#282C33',
        'tx-second': '#95EBA8',
        'btn-color': '#96EB95',
        'inp-bg-color': '#D9D9D91A',
        'inp-text': '#D9D9D91A',
        'bg-second': '#FFFFFF0F',
      },
      fontFamily: {
        'mono': ['"Fira Code"', 'ui-monospace', 'SFMono-Regular'],
      },
      borderRadius: {
        'lg': '10px',
        '3xl': '20px',
      },
      width: {
        '44': '171px'
      }
    },
  },
  plugins: [],
};
