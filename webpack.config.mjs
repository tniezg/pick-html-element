import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'
import webpack from 'webpack'
import ProgressBar from './webpack-plugins/ProgressBar.mjs'
import DeleteBeforeEmit from './webpack-plugins/DeleteBeforeEmit.mjs'
import { isDevelopment } from './src/utilities/buildEnvironment.mjs'

// Redefining __dirname is a temporary solution, due to https://github.com/nodejs/help/issues/2907
const __dirname = dirname(fileURLToPath(import.meta.url))
const { WatchIgnorePlugin } = webpack
const baseDirectory = __dirname
const srcDirectory = resolve(baseDirectory, 'src')
const distDirectory = resolve(baseDirectory, 'dist')

export default {
  context: baseDirectory,
  plugins: [
    new ProgressBar(),
    new DeleteBeforeEmit(resolve(baseDirectory, 'types')),
    new WatchIgnorePlugin({ paths: [resolve(baseDirectory, 'types')] })
  ],
  devtool: isDevelopment() ? 'inline-source-map' : 'cheap-source-map',
  entry: resolve(srcDirectory, 'index.ts'),
  target: ['web', 'es6'],
  mode: isDevelopment() ? 'development' : 'production',
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
        include: srcDirectory,
        options: {
          configFile: resolve(baseDirectory, 'tsconfig.json'),
          onlyCompileBundledFiles: true
        }
      }
    ]
  },
  resolve: {
    symlinks: false,
    extensions: ['.tsx', '.ts', '.js']
  }
}
