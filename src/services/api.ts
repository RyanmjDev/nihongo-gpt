import axios from 'axios';
import { LoginCredentials, UserState } from '../types/types';
const API_BASE_URL = 'http://localhost:3000'; 



export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
    try {
        const response = await axios.post<UserState>(`${API_BASE_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Login error', error);
        throw error;
    }
};
