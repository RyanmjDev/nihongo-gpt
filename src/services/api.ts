import axios, { AxiosInstance } from 'axios';
import { AUTH_TOKEN_COOKIE_NAME } from './authService';
import Cookies from "js-cookie";

// const API_BASE_URL = 'http://localhost:3000'; 
const API_BASE_URL = 'http://192.168.0.149:3000';


const api:AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

api.interceptors.request.use((config) => {
    const token = Cookies.get(AUTH_TOKEN_COOKIE_NAME);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });



export default api;