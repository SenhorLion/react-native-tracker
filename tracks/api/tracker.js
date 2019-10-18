import axios from 'axios';

const BASE_URL = 'http://40e1daa2.ngrok.io';

export default axios.create({
  baseURL: BASE_URL,
});
