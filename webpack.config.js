const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const inProduction = (process.env.NODE_ENV == 'production');

module.exports = {
  entry: {
    site: [
      __dirname + '/source/javascripts/site.js',
      __dirname + '/source/stylesheets/site.scss'
    ]
  },
  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: () => { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, 'sass-loader']
        })
      },
      // Load plain-ol' vanilla CSS
      { test: /\.css$/, loader: "style!css" },

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
