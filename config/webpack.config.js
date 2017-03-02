const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSassPlugin = new ExtractTextPlugin({
    filename: "style.css", //Output css for production
    disable: process.env.NODE_ENV !== "production"
});
const copyWebpackPlugin = new CopyWebpackPlugin([
  {
    context: "./src/static",
    from: "**/*"
  }
]);

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.scss$/,
        loader: extractSassPlugin.extract({
          use: [{
            loader: "css-loader" //Allow loading css via require
          }, {
            loader: "sass-loader" //Compile scss -> css
          }],
          // use style-loader in development
          fallback: "style-loader" //inline style for development
        })
      }
    ]
  },
  plugins: [
    copyWebpackPlugin,
    extractSassPlugin
  ]
};
