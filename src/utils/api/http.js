import axios from "axios";
import authService from "../../services/auth.service";
import { BASE_ENDPOINT } from "./endpoints";

const http = axios.create({
  baseURL: BASE_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  async (config) => {
    const token = await authService.getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Token ${token}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      authService.signout();
    }
    return Promise.reject(error);
  }
);

export default http;
