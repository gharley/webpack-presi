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
    })
  ]
}

if (TARGET === 'start') {
  module.exports = merge(common, {
      devServer : {
        historyApiFallback : true,
        hot : true,
        inline : true,
        stats : 'errors-only',
        host : process.env.HOST,
        port : process.env.PORT
      },
      devtool : 'eval-source-map',
      module : {
        rules : [{
            test : /\.css$/,
            loader : 'style-loader!css-loader',
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
        rules : [
          // Extract CSS during build
          {
            test : /\.css$/,
            loader : ExtractTextPlugin.extract({
              use: 'css-loader'
            }),
          }
        ]
      },
      plugins : [
        // Output extracted CSS to a file
        new ExtractTextPlugin({
          filename: '[name].css',
          allChunks : true
        }),
      ]
    });
}
