import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/", // Replace with your server's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const getStatistics = (data) => api.get("/analyze-data", data);
export const postPersonalInfo = (data) => api.post("/register-user", data);
export const postFeedback = (data) => api.post("/feedback", data);
