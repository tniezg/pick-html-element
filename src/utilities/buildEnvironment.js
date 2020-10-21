/* eslint-disable no-undef */

// This file must be written in JavaScript instead of TypeScript, because it's used in Webpack.
const nodeEnv = process.env.NODE_ENV

module.exports = {
  isDevelopment: nodeEnv !== 'production',
  getEnvironment: nodeEnv ? 'development' : 'production'
}
