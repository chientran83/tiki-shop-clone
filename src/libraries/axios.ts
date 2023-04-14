import axios from "axios";
import { getAccessToken } from "../utilities/method";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    if (config.headers) {
      config.headers = {
        ...config.headers,
        Authorization: "Bearer " + getAccessToken(),
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      //return logout
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
