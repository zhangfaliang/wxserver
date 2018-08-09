const path = require("path");
const CleanWeppackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: {
    index: "./src/index.js",
    polyfills: "./src/polyfills.js",
    anonther: "./src/another-module.js",

  },
  plugins: [
    new CleanWeppackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "product"
    }),
    new webpack.ProvidePlugin({
      _: "lodash"
    }),
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助 ServiceWorkers 快速启用
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true
    }),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    }),
  ],
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ASSET_PATH

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
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
        //  presets: ['@babel/preset-env'],
        //  plugins: [require('@babel/plugin-transform-object-rest-spread')]
        }
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
