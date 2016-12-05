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
    loaders : [{
        test : /\.css$/,
		    loader: ExtractTextPlugin.extract('style', 'css'),
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : './index.html'
    }), new ExtractTextPlugin('[name].css', {
      allCkunks : true
    }),
  ]
}
