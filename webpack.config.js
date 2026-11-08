const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: [
    './app/index.js'
  ],

  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: 'main.[contenthash].js'
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader'], include: path.join(__dirname, 'app') },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true,
                silenceDeprecations: [
                  'import',
                  'global-builtin',
                  'if-function',
                  'color-functions',
                  'slash-div'
                ]
              }
            }
          }
        ]
      },
      { test: /\.(css)$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.js$/, use: ['i18next-resource-store-loader'], include: path.join(__dirname, './app/translations') },
      {
        test: /\.(jpe?g|ico|pdf|md|gif|png|svg|woff|ttf|wav|mp3)$/,
        type: 'asset/resource',
        generator: {
          filename: '[path][name][ext]'
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html.ejs',
      inject: 'body',
      filename: 'index.html',
      title: 'Ellen Cecil-Lemkin'
    })
  ],

  optimization: process.env.NODE_ENV === 'production'
    ? { minimizer: ['...', new CssMinimizerPlugin()] }
    : {},

  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'dist')
    },
    historyApiFallback: true
  }
}
