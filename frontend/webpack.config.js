const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: process.env.NODE_ENV || 'development',
  devtool: process.env.NODE_ENV ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/env",
              "@babel/react",
              "@babel/typescript"
            ]
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|txt|csv|mmdb|jpg|png|svg|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
  ],
  resolve: {
    extensions: [".js", ".tsx"],
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};