import devEnv from './dev.env.js'
import prodEnv from './prod.env.js'


module.exports = {
	dev: {
		env: devEnv,
		port: 8080,
		autoOpenBrowser: true,
		proxyTable: {},
		cssSourceMap: false
	},
	build: {
		env: prodEnv,
		productionSourceMao: true,
		productionGzip: false,
		productionGzipExtensions: ['js', 'css']
	}
}