const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : {
    app : "./example.js",
    style : "./main.css"
  },
  output : {
    path : path.resolve(__dirname, "build"),
    publicPath : "./",
    filename : "js/[name].js"
  },
  module : {
    rules : [{
        test : /\.css$/,
        use : ['style-loader', 'css-loader']
      }
    ]
  },
  plugins : [new HtmlWebpackPlugin({
      template : './index.html'
    })]
}
