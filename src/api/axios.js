// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-backend-zeta-two.vercel.app/",
});

export default api;
