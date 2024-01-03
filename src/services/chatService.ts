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
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error loading chat messages', error);
        throw error;
    }
};


export const saveToNotes = async (message: string) => {
    try {
        const res = await api.post(
            '/chat/notes',
            { message: message }
        );
        return res;
    } catch (error) {
        console.error('Error saving note', error);
        throw error;
    }
}

export const removeFromNotes = async (noteId: string) => {
    try {
        const res = await api.delete(`/chat/notes/${noteId}`);
        return res;
    } catch (error) {
        console.error('Error removing note', error);
        throw error;
    }
}



export const fetchNotes = async (): Promise<any> => {
    try {
        const response = await api.get('/chat/notes');
        return response.data;
    } catch (error) {
        console.error('Error loading notes', error);
        throw error;
    }
}