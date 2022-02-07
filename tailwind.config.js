const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    content: ['./public/**/*.html', './src/**/*.{astro,js,ts}'],
    options: {
      safelist: ['dark'],
    },
  },
  theme: {
    colors: {
      /*
      dark80: "#070D10",
      dark60: "#3A4043",
      dark40: "#6D7376",
      dark20: "#A0A6A9",
      dark0: "#D3D9DC",
      */
      ...colors,
      // Shades-of-X
      // keep one group of colors enabled at a time

      primary: '#1E90FF',
      primaryDark: '#2a282d',
      primarySecondary: '#FFFFFF',
      primarySecondaryDark: '#6D7376',
      secondaryDark: '#3A4043',

      // primary: colors.pink[700],
      // primaryDark: colors.pink[300],
      // primarySecondary: colors.pink[800],
      // primarySecondaryDark: colors.pink[500],

      // primary: colors.orange[700],
      // primaryDark: colors.orange[300],
      // primarySecondary: colors.orange[800],
      // primarySecondaryDark: colors.orange[500],

      // primary: colors.amber[700],
      // primaryDark: colors.amber[300],
      // primarySecondary: colors.amber[800],
      // primarySecondaryDark: colors.amber[500],

      // primary: colors.lime[700],
      // primaryDark: colors.lime[300],
      // primarySecondary: colors.lime[800],
      // primarySecondaryDark: colors.lime[500],

      // primary: colors.indigo[700],
      // primaryDark: colors.indigo[300],
      // primarySecondary: colors.indigo[800],
      // primarySecondaryDark: colors.indigo[500],

      // primary: colors.rose[700],
      // primaryDark: colors.rose[300],
      // primarySecondary: colors.rose[800],
      // primarySecondaryDark: colors.rose[500],
    },
    fontFamily: {
      sans: ['Pro Regular', ...fontFamily.sans],
    },
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            a: {
              color: theme('colors.primarySecondaryDark'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            blockquote: {
              color: theme('colors.primarySecondary'),
              borderColor: theme('colors.primarySecondary'),
            },
            'blockquote > p::before, p::after': {
              color: theme('colors.primarySecondary'),
            },
            h1: {
              color: theme('colors.primarySecondary'),
            },
            h2: {
              color: theme('colors.primarySecondary'),
            },
            h3: {
              color: theme('colors.primarySecondary'),
            },
            h4: {
              color: theme('colors.primarySecondary'),
            },
          },
        },
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.secondaryDark'),
              '&:hover': {
                color: theme('colors.primarySecondary'),
              },
            },
            blockquote: {
              color: theme('colors.primaryDark'),
              borderColor: theme('colors.primaryDark'),
            },
            'blockquote > p::before, p::after': {
              color: theme('colors.primaryDark'),
            },
            h1: {
              color: theme('colors.primaryDark'),
            },
            h2: {
              color: theme('colors.primaryDark'),
            },
            h3: {
              color: theme('colors.primaryDark'),
            },
            h4: {
              color: theme('colors.primaryDark'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ['dark'] },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
