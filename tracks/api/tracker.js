import axios from "axios";
import { AsyncStorage } from "react-native";

// NB: For local testing, use ngrok if connecting to a device
// const BASE_URL = "http://localhost:3003";
const BASE_URL = "http://b988d33b.ngrok.io";

const instance = axios.create({
  baseURL: BASE_URL
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
