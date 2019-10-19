import axios from 'axios';

const BASE_URL = 'http://6f340fa5.ngrok.io';

export default axios.create({
  baseURL: BASE_URL,
});
