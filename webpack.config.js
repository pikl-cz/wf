const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const componentName = 'wifr'

module.exports = {
  mode: 'production',
  entry: ['./src/js/index.js', './src/scss/index.scss'],
  output: {
    filename: componentName + '.min.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: componentName + '.min.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/examples'),
    compress: true,
    port: 9000,
  },
}
