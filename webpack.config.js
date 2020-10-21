const path = require('path')
const { isDevelopment } = require('./src/utilities/buildEnvironment')

const baseDirectory = __dirname
const srcDirectory = path.resolve(baseDirectory, 'src')
const distDirectory = path.resolve(baseDirectory, 'dist')

module.exports = {
  devtool: isDevelopment ? 'inline-source-map' : 'cheap-source-map',
  entry: path.resolve(srcDirectory, 'index.ts'),
  target: 'web',
  mode: isDevelopment ? 'development' : 'production',
  output: {
    path: distDirectory,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(baseDirectory, 'tsconfig.json'),
          onlyCompileBundledFiles: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
