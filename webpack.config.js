const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack')

module.exports = {
  entry: {
    app:'./src/index.js'
  },
  output: {
    filename: "[name].bundel.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'

  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: ["file-loader", "url-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|jpe)$/,
        use: ["file-loader", "url-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Output Management"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "inline-source-map",
};
