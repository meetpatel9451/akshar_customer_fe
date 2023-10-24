import axios from "axios";
import config from "../configs/config";
// import config from "../config/config";
export const API = axios.create({ baseURL: config.BASE_URL });
 console.log("config.BASE_URL ", config);

API.interceptors.request.use((req: any) => {
  if (localStorage.getItem("token")) {
    const header: any = localStorage.getItem("token")
    const token: any = JSON.parse(header);

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

export default API;