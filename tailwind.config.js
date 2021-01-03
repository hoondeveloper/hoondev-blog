module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        azure: {
          a100: '#2787F5',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark'],
      textOpacity: ['dark'],
    },
  },
  plugins: [],
};
