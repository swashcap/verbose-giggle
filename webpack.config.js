const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const pkg = require('./package.json')

const isEnvProd = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    port: 3000,
  },
  devtool: 'source-map',
  entry: './src/index.web.tsx',
  mode: isEnvProd ? 'production' : 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.join(__dirname, 'tsconfig.web.json'),
            },
          },
        ],
      },
      {
        enforce: 'pre',
        loader: 'source-map-loader',
        test: /\.js$/,
      },
    ],
  },
  output: {
    filename: isEnvProd ? '[name].[hash].bundle.js' : '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      title: pkg.name,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.web.ts', '.web.tsx', '.js', '.json'],
  },
}
