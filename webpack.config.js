const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/i,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
}
