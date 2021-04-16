import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'
import webpack from 'webpack'
import config from 'config'
import ProgressBar from './webpack-plugins/ProgressBar.mjs'
import DeleteBeforeEmit from './webpack-plugins/DeleteBeforeEmit.mjs'

// Redefining __dirname is a temporary solution, due to https://github.com/nodejs/help/issues/2907
const __dirname = dirname(fileURLToPath(import.meta.url))
const { WatchIgnorePlugin, DefinePlugin } = webpack
const baseDirectory = __dirname
const srcDirectory = resolve(baseDirectory, 'src')
const distDirectory = resolve(baseDirectory, 'dist')
const webDistDirectory = resolve(distDirectory, 'web')

console.log('sjdfjakshdf', config.get('browserGlobal'))

export default {
  context: baseDirectory,
  plugins: [
    new ProgressBar(),
    new DeleteBeforeEmit(resolve(baseDirectory, 'types')),
    new WatchIgnorePlugin({ paths: [resolve(baseDirectory, 'types')] }),
    new DefinePlugin({ CONFIG: JSON.stringify(config.util.toObject()) })
  ],
  devtool: 'source-map',
  entry: resolve(srcDirectory, 'index.ts'),
  // TODO: Change target when building node version.
  // TODO: Create two separate Webpack configs: for node and for browser.
  target: ['web', 'es6'],
  mode: 'production',
  output: {
    library: {
      name: config.get('browserGlobal'),
      type: 'var'
    },
    path: webDistDirectory,
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
