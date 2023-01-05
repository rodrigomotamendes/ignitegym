import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.2:3333',
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log('INTERCEPTOR RESPONSE ERROR', error);
    return Promise.reject(error);
  }
);

export { api };
