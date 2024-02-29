import axios from "axios";
import config from "../configs/config";
// import config from "../config/config";
export const API = axios.create({ baseURL: config.BASE_URL });

API.interceptors.request.use((req: any) => {
  if (localStorage.getItem("token")) {
    const token: any = localStorage.getItem("token")
    // const token: any = JSON.parse(header);

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
      // req.headers.uid = uid;
    }

    if (req.customHeaders) {
      for (const headerName in req.customHeaders) {
        // If the header value is `null`, remove the header
        if (req.customHeaders[headerName] === null) {
          delete req.headers[headerName];
        }
      }
    }
  }

  return req;
});

// Add a response interceptor
API.interceptors.response.use(
  (response) => {
    // If the request was successful, return the response
    return response;
  },
  (error) => {
    // If the request resulted in a 401 Unauthorized response
    if (error.response && error.response.status === 401 && localStorage.getItem("user_id") && localStorage.getItem("token")) {
      localStorage.removeItem("user_id");
      localStorage.removeItem("token")
      window.location.reload();
      // Handle unauthorized access, e.g., redirect to login page
      console.log('Unauthorized access. Redirecting to login page.');
    }

    // Return any errors for further handling
    return Promise.reject(error);
  }
);

export default API;