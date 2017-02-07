import { resolve } from './utils'
import baseWebpackConfig from './base.conf.js'

import webpack from 'webpack'
import merge from 'webpack-merge'
import HTMLWebapckPlugin from 'html-webpack-plugin'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'


module.exports = merge(baseWebpackConfig, {
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HTMLWebapckPlugin({
			filename: 'index.html',
			template: resolve('src/index.html'),
			inject: true
		}),
		new FriendlyErrorsPlugin()
	],

	devtool: '#eval-source-map'
})
