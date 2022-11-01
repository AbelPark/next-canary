import axios, { AxiosInstance } from 'axios';
import { sleep } from './fetch';

const $axios: AxiosInstance = axios.create({
  baseURL: 'https://api-dev.willwill.co.kr',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

const responseInterceptor = $axios.interceptors.response.use(async (response) => {
  // add artificial delay for dev env
  if (process.env.NODE_ENV === 'development') {
    await sleep();
  }
  return response;
});

export default $axios;
