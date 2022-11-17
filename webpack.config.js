const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    webvideocanvas: path.resolve(__dirname, './src/index.js'),
    'webvideocanvas.min': path.resolve(__dirname, './src/index.js'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
    library: {
      name: 'WebVideoCanvas',
      type: 'umd',
      umdNamedDefine: true,
    },
    globalObject: 'this',
  },
  devServer: {
    static: path.resolve(__dirname, './build'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
};
