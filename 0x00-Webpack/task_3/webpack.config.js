const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './src/header/header.js',
    body: './src/body/body.js',
    footer: './src/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
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
