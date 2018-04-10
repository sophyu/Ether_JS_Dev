var path = require('path');
module.exports = {
  entry: ["babel-polyfill","./src/js/index.js"],
  output: {
    path: __dirname,
    filename: "./src/output/bundle.js"
  },
  module: {
    loaders: [
        {
            test: /\.js?$/, 
            loader: 'babel-loader',
            exclude: /node_modules/, 
            include: path.resolve(__dirname, 'src/js') 
        }
    ]
  },
}