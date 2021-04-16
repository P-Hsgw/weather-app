var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',

};