import axios, { AxiosInstance } from 'axios';
import Cookies from "js-cookie";
import { LoginCredentials, UserState } from '../types/types';
import api from './api';

export const AUTH_TOKEN_COOKIE_NAME = 'authToken';

export const checkLoggedIn = () => {
    return Cookies.get(AUTH_TOKEN_COOKIE_NAME)
}

export const loginUser = async (credentials: LoginCredentials): Promise<UserState> => {
    try {
        const response = await api.post<UserState>('/users/login', credentials);
        // Set the authentication token cookie
        Cookies.set(AUTH_TOKEN_COOKIE_NAME, response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        window.location.href = '/';
        return response.data;
    } catch (error) {
        console.error('Login error', error);
        throw error;
    }
};

export const logoutUser = () => {
    Cookies.remove(AUTH_TOKEN_COOKIE_NAME);
    window.location.href = '/login';
}
