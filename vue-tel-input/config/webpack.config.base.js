var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var outputFile = 'vue-tel-input'
var globalName = 'VueTelInput'

var config = require('../package.json')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract('css-loader'),
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(config.version),
    }),
    new ExtractTextPlugin(outputFile + '.css'),
  ],
}
