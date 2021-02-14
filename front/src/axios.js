import axios from 'axios';
import { ZOOX_API_BASE_URL, TIMEOUT } from './helper/const';

export const zoox = axios.create({
  baseURL: ZOOX_API_BASE_URL,
});

zoox.defaults.timeout = TIMEOUT;

export default {
  zoox,
};
