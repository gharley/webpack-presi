const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
		    loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : './index.html'
    }), new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
  ]
}
