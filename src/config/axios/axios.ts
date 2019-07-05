import axios from "axios";

export const authRequest = axios.create({ baseURL: "/" });

export const apiRequest = axios.create({ baseURL: "/api/" });
