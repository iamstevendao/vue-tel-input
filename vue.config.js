const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  lintOnSave: true,
  configureWebpack: {
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
