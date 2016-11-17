module.exports = {
  entry : "./example.js",
  output : {
    path : "./js",
    publicPath : "./",
    filename : "output.js"
  },
  module : {
    loaders : [{
        test : /\.js$/,
        loader : 'babel',
        exclude : /node_modules/,
        query : {
          presets : ['es2015']
        }
      }
    ]
  }
}
