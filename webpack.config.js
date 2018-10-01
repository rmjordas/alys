const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '.scss',
      '.js',
      '.jsx',
      '.json',
      '.png',
      '.gif',
      '.jpg',
      '.svg',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
    filename: 'alys.js',
    libraryTarget: 'umd',
  },
};
