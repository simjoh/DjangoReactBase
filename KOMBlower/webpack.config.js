var path = require('path');
//webpack is not needed since I removed it from plugins
const webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var WriteFilePlugin =require('write-file-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', ]
      },
      { 
        test: /\.svg$/, 
        loader: 'react-svg-loader' 
      } 
    ]
  },
  entry: [
          './frontend/src/index',
          ],
  output: {
    path: path.join(__dirname, './frontend/static/frontend'),
    // Changing the name from "[name]-[hash].js" to not get 1000 files in the static folder.
    filename: 'hotreloadfile.js'
  },
  plugins: [
    //This line writes the file on each hot reload
    new WriteFilePlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({filename: './webpack-stats.json'})
  ],
  mode:'development',
  //devServer: {
  //  contentBase: './dist',
  //  hot: true
  //}
  //devServer: {
    //contentBase: 'frontend/static/frontend/',//'./webpack_bundles/'
    //hot:true
  //},

};
