const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const inProduction = (process.env.NODE_ENV == 'production');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  entry: {
    site: [
      __dirname + '/source/javascripts/site.js',
      __dirname + '/source/stylesheets/site.scss'
    ],
  },
  output: {
    path: __dirname + '/.tmp/dist', // middleman output dir
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // sass or scss
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: () => { // post css plugins, can be exported to postcss.config.js
                return [
                  tailwindcss('./tailwind.js'),
                  require('precss'),
                  require('autoprefixer'),
                  purgecss({
                    content: ['./source/**/*.html.erb', './source/**/*.html'],
                    whitelistPatterns: [/^overflow/, /^scrolling/, /^pin/],
                    extractors: [
                      {
                        extractor: TailwindExtractor,
                        extensions: ["html", "erb", "html.erb", "js", "vue"]
                      }
                    ]
                  }),
                ];
              }
            }
          }, 'sass-loader']
        })
      },
      // Load plain-ol' vanilla CSS
      { test: /\.css$/, loader: "style!css" },
      // fonts
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),

    new ExtractTextPlugin("[name].css"),

    new webpack.LoaderOptionsPlugin({
      minimize: inProduction
    })
  ],
}

if (inProduction) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  )
}
