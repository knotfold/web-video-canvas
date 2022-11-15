const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
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
    },
  },
  devServer: {
    static: path.resolve(__dirname, './build'),
  },
  optimization: {
    minimize: false,
  },
  mode: 'production',
};
