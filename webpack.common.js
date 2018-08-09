const path = require("path");
const CleanWeppackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: {
    index: "./src/index.js",
    polyfills: "./src/polyfills.js",
    anonther: "./src/another-module.js"
  },
  plugins: [
    new CleanWeppackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "product"
    }),
    new webpack.ProvidePlugin({
      _: "lodash"
    })
  ],
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      // {
      //   test: require.resolve('./src/index.js'),
      //   use:'imports-loader?this=>window' 改变this
      // },
      {
        test: require.resolve("./src/globals.js"),
        use: "exports-loader?file,parse=helpers.parse"
      },
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
  }
};
