const path = require('path');

module.exports = {
  target: 'web',
  entry: path.resolve(__dirname, './src/index.js'),
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
    filename: 'webvideocanvas.js',
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
    minimize: false,
  },
};
