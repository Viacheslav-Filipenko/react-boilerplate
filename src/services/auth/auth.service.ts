import { authRequest } from "../../config";

authRequest.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

authRequest.interceptors.response.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
