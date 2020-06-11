const tailwindcss = require('tailwindcss');
const inProduction = (process.env.NODE_ENV == 'production');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

const DEV_PLUGINS = [
  require('postcss-import')(),
  tailwindcss(),
  require('autoprefixer')()
]

const PROD_PLUGINS = [
  require('postcss-import')(),
  tailwindcss(),
  require('autoprefixer')(),
  require('postcss-purgecss')({
    content: [
      __dirname + '/../source/**/*.html',
      __dirname + '/../source/**/*.erb'
    ],
    whitelist: ['blockquote'],
    whitelistPatterns: [/^overflow/, /^scrolling/, /^inset/],
    extractors: [{
      extractor: TailwindExtractor,
      extensions: ['html', 'js', 'erb', 'html.erb']
    }]
  }),
  require('cssnano')()
]


module.exports = {
  plugins: inProduction ? PROD_PLUGINS : DEV_PLUGINS
}
