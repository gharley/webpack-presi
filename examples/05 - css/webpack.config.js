const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : {
    app : "./example.js",
    style : "./main.css"
  },
  output : {
    path : "./build",
    publicPath : "./",
    filename : "js/[name].js"
  },
  module : {
    loaders : [{
        test : /\.css$/,
        loaders : ['style-loader', 'css-loader']
      }
    ]
  },
  plugins : [new HtmlWebpackPlugin({
      template : './index.html'
    })]
}
