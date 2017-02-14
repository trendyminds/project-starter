import path from 'path';
import webpack from 'webpack';
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';

const PROD = process.env.NODE_ENV || 0;

module.exports = {
  devtool: PROD ? false : 'eval-cheap-module-source-map',

  entry: {
    app: './app/assets/scripts/app.js',
    vendor: ['picturefill']
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
      children: true,
      minChunks: 2
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
