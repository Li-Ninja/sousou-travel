const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#26A69A',
      'primary-hover': '#498C8C',
      accent: '#F57C2C',
      dark: '#2E2D2C',
      'grey-1': '#EDEAE5',
      'grey-2': '#CCC9C4',
      'grey-3': '#B3B0AC',
      'cyan-4': '#26A69A',
      'dark-orange': '#EB6522'
    }
  },
  plugins: []
};
