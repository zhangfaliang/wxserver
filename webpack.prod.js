const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require('webpack')

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",//将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法，
          chunks: "all"
        }
      }
    },
    runtimeChunk: "single"//webpack 提供了一个优化功能，可以根据提供的选项将运行时代码拆分成单独的块，直接将 optimization.runtimeChunk 设置为 single，就能创建单个运行时 bundle(one runtime bundle)：
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('production')
    }),
     new webpack.HashedModuleIdsPlugin(),

  ]
});
