const path = require("path");
const CleanWeppackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = {
  entry: {
    index: "./src/index.js",
    polyfills: "./src/polyfills.js",
    anonther: "./src/another-module.js"
  },
  plugins: [
    new CleanWeppackPlugin(["dist"]),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      title: "product",
      template: "index.html"
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
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH)
    })
    // new ExtractTextPlugin( "styles.css"),
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
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[hash:base64:6]"
              }
            },          
            {
              loader: "postcss-loader"
            },
            {
              loader: "resolve-url-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "less-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.css$/, 
        include: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          }
        ],
      
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
