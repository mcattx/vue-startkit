import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import opn from 'opn'
import config from './dev.conf.js'

process.env.NODE_ENV = 'development'

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
	stats: { colors: true },
	hot: true
})

server.listen(8080, 'localhost', () => {
	opn('http://localhost:8080')
})