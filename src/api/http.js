import axios from 'axios';

const dev = process.env.NODE_ENV !== 'production';
const http = axios.create({
	baseURL: dev ? 'https://reveur-ballot-dev.herokuapp.com/api/v1' : 'https://reveurballot-api.com/api/v1'
});

http.interceptors.request.use(
	config => {
		const userHeaders = {};

		config.headers = {
			...config.headers,
			...userHeaders
		};
		return config;
	},
	error => Promise.reject(error)
);

http.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		throw error;
	}
);

export default http;
