module.exports = {
  entry : "./example.js",
  output : {
    path : "./js",
    publicPath : "./",
    filename : "output.js"
  },
  module : {
    rules : [{
        test : /\.js$/,
        loader : 'babel-loader',
        exclude : /node_modules/,
        options : {
          presets : ['es2015']
        }
      }
    ]
  }
}
