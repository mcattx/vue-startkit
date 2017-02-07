import { resolve } from './utils'

module.exports = {
	entry: {
		app: './src/main.js'
	},
	resolve: {
		modules: [
			resolve('src'),
			resolve('node_modules')
		],
		alias: {
			'vue$': 'vue/dist/vue.js',
			'src': resolve('src'),
			'components': resolve('src/components')
		},
		extensions: ['.js', '.vue', '.json']
	},
	module: {
		rules: [
			{
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				enforce: "pre",
				include: [resolve('src'), resolve('test')]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test')]
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
		        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        query: {
		          limit: 10000
		        }
		    }
		]
	}
}
