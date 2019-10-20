import axios from 'axios';

const BASE_URL = 'http://cc150056.ngrok.io';

export default axios.create({
  baseURL: BASE_URL,
});
