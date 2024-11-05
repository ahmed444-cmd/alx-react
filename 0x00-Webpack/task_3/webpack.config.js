const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
     entry: {
    header: './modules/header/header.js',  // Existing entry
    body: './modules/body/body.js',        // Add this line
    footer: './modules/footer/footer.js',  // Add this line
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  optimization: {
    splitChunks: {
    chunks: 'all',  // This allows for splitting chunks for all types of modules
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
      template: './src/index.html',
    }),
  ],
  devServer: {
  port: 8564,
  static: './public',
  hot: true,
  // open: true,
},
  devtool: 'inline-source-map', // Source mapping for debugging
};
