module.exports = {
  mode: 'jit',
  purge: [
    './_site/**/*.js',
    './_site/**/*.html',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
