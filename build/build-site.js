import webpack from 'webpack'
import { rm } from 'shelljs'
import config from './prod.conf.js'
import { resolve } from './utils.js'

process.env.NODE_ENV = 'production'

webpack(config, (err, stats) => {
	if(err) { throw err}
	/* eslint-disable no-console */
	console.info(stats.toString({
	    colors: true,
	    modules: false,
	    children: false,
	    chunks: false,
	    chunkModules: false,
	}))
})