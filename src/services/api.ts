import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; 

interface LoginCredentials {
    username: string;
    password: string;
}

interface User {
    id: string;
    username: string;
}

export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
    try {
        const response = await axios.post<User>(`${API_BASE_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Login error', error);
        throw error;
    }
};
