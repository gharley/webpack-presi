const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : "./example.js",
  output : {
    path : "./build",
    publicPath : "./",
    filename : "js/output.js"
  },
  plugins : [new HtmlWebpackPlugin({template: './index.html'})]
}
