import axios from "axios";

// Create an Axios instance with custom configurations
const axios_instance = axios.create({
  baseURL: "http://localhost:5001", // Replace with your API base URL
  timeout: 100000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default axios_instance;
