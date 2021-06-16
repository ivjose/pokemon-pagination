module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          darkest: '#1c1d1f',
          dark: '#2c2f36',
          DEFAULT: '#3b3e45',
          light: '#484d57',
          lightest: '#3f404b',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
