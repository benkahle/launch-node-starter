const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const extractSassPlugin = new ExtractTextPlugin({
    filename: "style.css", //Output css file
    disable: process.env.NODE_ENV !== "production" //Disable this during Dev (use inline-fallback)
});
const copyWebpackPlugin = new CopyWebpackPlugin([
  {
    context: "./src/static", //Folder to be copied as is to the output directory
    from: "**/*"
  }
]);

const common = {
  entry: {
    main: './src/scripts/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  module: {
    rules: [
      {
        test: /.js?$/, // Process all js* files through babel (configured in .babelrc)
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
    ],
  },
  plugins: [
    copyWebpackPlugin,
    extractSassPlugin
  ]
};

if(TARGET === 'start') {
  module.exports = merge.smart(common, {
    devtool: 'cheap-module-source-map' // Separate source map file
  });
} else if(TARGET === 'build') {
  module.exports = merge.smart(common, {
    cache: true, // Cache build files in memory for quicker re-builds
    devtool: 'inline-source-map'
  });
}
