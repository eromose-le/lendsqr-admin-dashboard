import axios from "axios";
import config from "./config";

export const LendsqlHttp = axios.create({
  baseURL: config.URL_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const setupInterceptors = () => {
  LendsqlHttp?.interceptors?.request?.use();

  LendsqlHttp?.interceptors?.response?.use();
};

export default LendsqlHttp;
