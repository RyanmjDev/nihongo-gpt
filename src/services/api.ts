import axios from 'axios';
import { LoginCredentials, UserState } from '../types/types';
import Cookies from "js-cookie";

const API_BASE_URL = 'http://localhost:3000'; 

const AUTH_TOKEN_COOKIE_NAME = 'authToken';

export const loginUser = async (credentials: LoginCredentials): Promise<UserState> => {
    try {
        const response = await axios.post<UserState>(`${API_BASE_URL}/login`, credentials);
        // Set the authentication token cookie
        Cookies.set(AUTH_TOKEN_COOKIE_NAME, response.data.token);
        return response.data;
    } catch (error) {
        console.error('Login error', error);
        throw error;
    }
};

// Check if the user is logged in based on the presence of the authentication token cookie
export const isLoggedIn = (): boolean => {
    return !!Cookies.get(AUTH_TOKEN_COOKIE_NAME);
};
