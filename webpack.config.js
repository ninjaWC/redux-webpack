const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry:"./src/index.js",
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(js)$/, use: {
        loader:'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      }}
    ]
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename :'index__bundle.js'
  } ,
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production': 'development',
}