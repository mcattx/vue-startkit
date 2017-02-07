import prodEnv from './prod.env.js'
import merge from 'webpack-merge'


module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})