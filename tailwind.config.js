module.exports = {
  purge: ['./src/**/*.html', './src/**/*.liquid', './src/**/*.md', './frontend/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#e91d63',
          dark: '#bf124d'
        }
      },
      fontFamily: {
        sans: ['"Open Sans"'],
        title: ['Oswald'],
        mono: ['"Fira Mono"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
