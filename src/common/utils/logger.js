/* eslint-disable no-console */
const dev = process.env.NODE_ENV !== 'production';

export const logger = {

	info() {
		if (dev) {
			console.log.apply(window, arguments);
		}
	},

	error() {
		if (dev) {
			console.error.apply(window, arguments);
		}
	},

	warn() {
		if (dev) {
			console.warn.apply(window, arguments);
		}
	}
};
