const path = require('path');

module.exports = {
  entry: {
    app:'./src/js/app.js',
    firebase: './src/js/firebase.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.scss$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
};
