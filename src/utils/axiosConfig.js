import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://entertainment-app-server-0c6b.onrender.com",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios error:", error);
    return Promise.reject(error);
  }
);

const token = localStorage.getItem("token");
if (token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

axiosInstance.defaults.timeout = 20000;

export default axiosInstance;
