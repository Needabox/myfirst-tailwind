const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      '25': '.10',
      '75' : '.15',
    },
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "100" : "#03ecfc",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
