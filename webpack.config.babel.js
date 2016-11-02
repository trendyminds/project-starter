import path from 'path';
import webpack from 'webpack';
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';

const PROD = process.env.NODE_ENV || 0;

module.exports = {
  devtool: PROD ? false : 'eval',

  entry: {
    app: './app/assets/scripts/App.js',
    vendor: [
      'picturefill',
      './app/assets/_compiled/modernizr'
    ]
  },

  output: {
    path: __dirname + '/app/assets/_compiled',
    publicPath: '/assets/_compiled/',
    filename: '[name].js',
    chunkFilename: '_chunk/[name]_[chunkhash].js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: PROD ? true : false,
      output: {
        comments: false
      }
    }),

    new CommonsChunkPlugin({
      name: "common",
      minChunks: 3
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
