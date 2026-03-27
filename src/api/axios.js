import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

// 🔥 TOKEN HEADER SETTER
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = token; // ❗ Bearer YOK
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export default api;
