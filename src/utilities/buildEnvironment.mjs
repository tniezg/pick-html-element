/* eslint-disable no-undef */

// This file must be written in JavaScript instead of TypeScript, because it's used in Webpack.
const nodeEnvironment = process.env.NODE_ENV
const isDevelopment = () => nodeEnvironment !== 'production'
const getEnvironment = () => nodeEnvironment ? 'development' : 'production'

export { isDevelopment, getEnvironment }
