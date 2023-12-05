import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ChatMessage } from '../../../types/types'


interface ChatState {
    messages: ChatMessage[],
    isBotTyping: boolean; 
}

const initialState: ChatState = {
    messages: [
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true},
        
        
    ],
    isBotTyping: false,
}


export const chatSlice = createSlice ({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<ChatMessage>) =>{
            state.messages.push(action.payload);
        },
        setBotTyping: (state, action: PayloadAction<boolean>) => {
            state.isBotTyping = action.payload;
        }

    },
});


export const {addMessage, setBotTyping} = chatSlice.actions;
export default chatSlice.reducer;