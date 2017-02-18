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
        use :{
          loader: 'babel-loader',
          options : {
            presets : ['es2015']
          }
        },
        exclude : /node_modules/
      }
    ]
  }
}
