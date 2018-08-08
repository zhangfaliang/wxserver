const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path:path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:  /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: [
          'file-loader',
          'url-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpe)$/,
        use: [
          'file-loader',
          'url-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      }, {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
     
    ]
  }
}