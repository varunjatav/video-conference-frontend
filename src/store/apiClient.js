import axios from "axios";
// create a Axios client which is also called instance which can be configured with default
// settings and reused accross your application ...

// const api = "http://localhost:3000/api";
// console.log(process.env.API);
// console.log(import.meta.env.VITE_API_KEY);
export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_KEY,
  });
  
  // Add a request interceptor to attach the token
  // which allow us to intercept and modify the request or response before they are handled;
  /**
   * Here we wiil get the token from local storage and store it in config.headers.Authorizations = `Beeare ${token}`
   *
   */
  apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Beare ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  /**
   * Step 3: Implement Token Refresh Logic
  When the token expires, we need to use the refreshToken to get a new access token. You can add a response interceptor to handle token refreshing automatically:
   */
  apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (
        error.response &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem("refreshToken");
        try {
          const response = await axios.post(`${api}/user/refresh`, {
            token: refreshToken,
          });
          const newToken = response.data.token;
  
          // Save the new token
          localStorage.setItem("token", newToken);
  
          // Update the authorization header with the new token and retry the original request
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return apiClient(originalRequest);
        } catch (err) {
          console.error("Refresh token failed:", err);
          // Handle refresh token failure, e.g., log the user out
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    }
  );
  
  
  
  export default apiClient;