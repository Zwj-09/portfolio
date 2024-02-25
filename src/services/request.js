import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const request = axios.create({
  baseURL: "http://codercba.com:1888/airbnb/api",
  timeout: 10000
});

request.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
