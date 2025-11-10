import axios from "axios";

export const API_BASE_URL = "https://my-project-1-vvrp.onrender.com"; 

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
