import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const Token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: "application/json",
    Authorization: Token && `Bearer ${Token}`,
    "Content-Type": "multipart/form-data",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const updatedToken = localStorage.getItem("token");
    config.headers.Authorization = updatedToken && `Bearer ${updatedToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const makeRequest = async (instance, method, url, data = null, contentType) => {
  try {
    const headers = {
      ...instance.defaults.headers,
      "Content-Type": contentType || instance.defaults.headers["Content-Type"],
    };
    const response = await instance({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Response error:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      console.error("Request error:", error.request);
    } else {
    }
    throw error;
  }
};

export const get = async (url) => {
  const instance = axiosInstance;
  return makeRequest(instance, "GET", url);
};
export const post = async (url, data, contentType) => {
  const instance = axiosInstance;
  return makeRequest(instance, "POST", url, data, contentType);
};
export const put = async (url, data) => {
  const instance = axiosInstance;
  return makeRequest(instance, "PUT", url, data);
};
export const del = async (url) => {
  const instance = axiosInstance;
  return makeRequest(instance, "DELETE", url);
};
