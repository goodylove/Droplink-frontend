import axios from "axios";

const BaseURL = process.env.NEXT_PUBLIC_API_URL;

const API = axios.create({
  baseURL: BaseURL,
  withCredentials: true,
});

API.interceptors.request.use((req) => {
  if (req.data && req.data instanceof FormData) {
    return req;
  }
  if (req.method === "post" || req.method === "put") {
    req.headers["Content-Type"] = "application/json";
  }
  return req;
});

API.interceptors.response.use(
  (req) => req,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // Handle unauthorized access, e.g., redirect to login
        console.error("Unauthorized access - redirecting to login");
        window.location.href = "/login";
      }
      if (error.response.status === 500) {
        console.error("Internal server error - please try again later");
      }

      return Promise.reject(error);
    }
  }
);

export default API;
