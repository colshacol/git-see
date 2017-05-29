const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const paths = {
  entry: path.resolve(__dirname, 'client/index.js'),
  output: path.resolve(__dirname, 'public/js/'),
  modules: path.resolve(__dirname, 'node_modules')
}

module.exports = {
  entry: paths.entry,
  output: {
    path: paths.output,
    filename: 'app.bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: 'babel-loader'
    }, {
      test: /\.(styl|css)$/,
      exclude: /(node_modules)/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path]___[name]-[local]_local'
            }
          },
          { loader: 'postcss-loader' },
          {
            loader: 'stylus-loader',
            options: {
              import: [path.resolve(__dirname, 'client/styles/utils/*.styl')]
            }
          }
        ]
      })
    }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      { test: /\.(jpg|png|woff|woff2|eot|ttf|svg|css)$/, loader: 'file-loader?name=[path][name].[ext]?[hash]' },
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/local.css'),
  ],
  resolve: {
    extensions: ['.js', '.pcss'],
    alias: {
      '@api': path.resolve(__dirname, './client/api'),
      '@comps': path.resolve(__dirname, './client/comps'),
      '@utils': path.resolve(__dirname, './client/utils')
    },
    modules: [paths.modules]
  }
}
