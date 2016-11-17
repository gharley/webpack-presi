const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : "./example.js",
  output : {
    path : "./js",
    publicPath : "./",
    filename : "output.js"
  },
  plugins : [new HtmlWebpackPlugin({template: './index.html'})]
}
