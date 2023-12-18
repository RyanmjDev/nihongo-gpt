import api from './api';
import Cookies from "js-cookie";

import { AUTH_TOKEN_COOKIE_NAME } from './authService';


export const sendMessage = async (userMessage: string) => {
    try {
        const res = await api.post(
            '/chat',
            { message: userMessage }
        );
        return res;
    } catch (error) {
        console.error('Error sending message', error);
        throw error;
    }
}

export const fetchChatMessages = async (): Promise<any> => {
    try {
        const response = await api.get('/chat');
        return response.data;
    } catch (error) {
        console.error('Error loading chat messages', error);
        throw error;
    }
};
