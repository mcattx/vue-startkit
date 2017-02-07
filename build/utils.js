import { join } from 'path'

function resolve(dir) {
	return join(__dirname, '..', dir)
}

export { resolve }
