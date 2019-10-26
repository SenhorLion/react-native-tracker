import axios from "axios";

// NB: For local testing, use ngrok if connecting to a device
// const BASE_URL = "http://localhost:3003";
const BASE_URL = "http://7e46f175.ngrok.io";

export default axios.create({
  baseURL: BASE_URL
});
