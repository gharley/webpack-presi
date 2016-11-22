const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const common = {
  entry : {
    app : "./example.js",
    style : "./main.css"
  },
  output : {
    path : path.resolve(__dirname, "build"),
    publicPath : "/",
    filename : "js/[name].js"
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : './index.html'
    }), new ExtractTextPlugin('[name].css', {
      allCkunks : true
    }),
  ]
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
      devServer : {
        historyApiFallback : true,
        hot : true,
        inline : true,
        progress : true,
        stats : 'errors-only',
        host : process.env.HOST,
        port : process.env.PORT
      },
      devtool : 'eval-source-map',
      module : {
        loaders : [{
            test : /\.s?css$/,
            loaders : ['style', 'css'],
            // Include accepts either a path or an array of paths.
            include : path.resolve('./')
          },
        ]
      },
      plugins : [
        new webpack.HotModuleReplacementPlugin()
      ]
    });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
      module : {
        loaders : [
          // Extract CSS during build
          {
            test : /\.s?css$/,
            loader : ExtractTextPlugin.extract('style', 'css'),
            include : path.resolve('./')
          }
        ]
      },
      plugins : [
        // Output extracted CSS to a file
        new ExtractTextPlugin('[name].css', {
          allCkunks : true
        }),
      ]
    });
}
