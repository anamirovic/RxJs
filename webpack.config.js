const path = require('path');

module.exports = {
  entry: './src/index.ts', 
  devtool: 'inline-source-map', //ili devtool
  mode: 'development',
  experiments: {
    topLevelAwait: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',   
  },
};

