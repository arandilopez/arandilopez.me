const path = require('path');
const loaders = require('./webpack/loaders.js');
const plugins = require('./webpack/plugins.js');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    site: ['./source/javascripts/site.js', './source/stylesheets/site.scss']
  },
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CSSLoader
    ]
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
  ],
  output: {
    filename: 'javascripts/[name].js',
    path: path.resolve(__dirname, '.tmp/dist')
  }
};
