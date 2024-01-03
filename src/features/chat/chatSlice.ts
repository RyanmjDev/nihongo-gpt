import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ChatMessage } from '../../types/types'


interface ChatState {
    messages: ChatMessage[],
    isBotTyping: boolean; 
}

const initialState: ChatState = {
    messages: [
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},        
        
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
        clearMessages: (state) => {
            state.messages = []; // Reset messages to an empty array
          },
        setBotTyping: (state, action: PayloadAction<boolean>) => {
            state.isBotTyping = action.payload;
        }

    },
});


export const {addMessage, clearMessages, setBotTyping} = chatSlice.actions;
export default chatSlice.reducer;