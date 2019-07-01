import { authRequest } from "../../config";

authRequest.interceptors.request.use(
	(config: any) => {
		return config;
	},
	(error: any) => {
		return Promise.reject(error);
	},
);

authRequest.interceptors.response.use(
	(config: any) => {
		return config;
	},
	(error: any) => {
		return Promise.reject(error);
	},
);
