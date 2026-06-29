const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    externals: {
      'libphonenumber-js': 'libphonenumber-js',
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'src/assets/component.css'), to: 'css/' },
          { from: path.resolve(__dirname, 'src/assets/sprite.css'), to: 'css/' },
        ]
      })
    ]
  },
}
