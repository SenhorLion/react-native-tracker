import axios from "axios";

// NB: For local testing, use ngrok if connecting to a device
const BASE_URL = "http://localhost:3003";

export default axios.create({
  baseURL: BASE_URL
});
