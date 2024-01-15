import axios from 'axios';
import Cookies from "js-cookie";
import { LoginCredentials, RegisterCredentials, UserState } from '../types/types';
import api from './api';

export const AUTH_TOKEN_COOKIE_NAME = 'authToken';

export const checkLoggedIn = () => {
    return Cookies.get(AUTH_TOKEN_COOKIE_NAME)
}

export const loginUser = async (credentials: LoginCredentials): Promise<UserState> => {
    try {
        const response = await api.post<UserState>('/users/login', credentials);
        Cookies.set(AUTH_TOKEN_COOKIE_NAME, response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        window.location.href = '/';
        return response.data;
    } catch (error) {
        console.error('Login error', error);
        throw error;
    }
};

export const loginDemoUser = async (): Promise<UserState> => {
    try {
        const response = await api.post<UserState>('/users/demo');
        Cookies.set(AUTH_TOKEN_COOKIE_NAME, response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        window.location.href = '/';
        return response.data;
    } catch (error) {
        console.error('Login error', error);
        throw error;
    }
}


export const registerUser = async (credentials: RegisterCredentials): Promise<UserState> => {
    try {
        const response = await api.post<UserState>('/users/register', credentials);
        Cookies.set(AUTH_TOKEN_COOKIE_NAME, response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        window.location.href = '/';
        return response.data;
    } catch (error) {
        console.error('Register error', error);
        throw error;
    }
};

export const logoutUser = () => {
    Cookies.remove(AUTH_TOKEN_COOKIE_NAME);
    window.location.href = '/login';
}
