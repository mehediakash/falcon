import axios from "axios";

const API = axios.create({
  baseURL: "http://157.230.240.97:9999/api/v1", 
});

export default API;