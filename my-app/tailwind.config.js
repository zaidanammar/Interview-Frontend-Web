const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(230,250,255,255)',
      }
    },
  },
  plugins: [
    plugin(function ({
      addBase,
      theme
    }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: 900
        },
        'h2': {
          fontSize: theme('fontSize.xl'),
          fontWeight: 700
        },
        'h3': {
          fontSize: theme('fontSize.md'),
          fontWeight: 700
        },
        'h4': {
          fontSize: theme('fontSize.base'),
          fontWeight: 600
        },
        'h5': {
          fontSize: theme('fontSize.sm'),
          fontWeight: 600
        },
        'h6': {
          fontSize: theme('fontSize.xs'),
          fontWeight: 500
        },

      })
    })
  ]
}