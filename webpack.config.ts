
import * as webpack from 'webpack';
declare var __dirname;
declare var require;
const path = require('path');

const config = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'awesome-typescript-loader',
        options: {
          includePaths: [path.join(__dirname, 'src')],
          configFileName: path.join(__dirname, 'src', 'tsconfig.json')
        }
      }]
    }]
  /*
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['awesome-typescript-loader'],
      include: path.join(__dirname, 'src')
    }]
  */
  }
};

export default config;
