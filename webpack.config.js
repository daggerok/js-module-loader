const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./app/main.js`,
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      `${__dirname}/node_modules`,
    ],
  },
  mode: process.env.NODE_ENV || 'production',
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
