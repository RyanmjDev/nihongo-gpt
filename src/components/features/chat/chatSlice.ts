import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ChatMessage } from '../../../types/types'


interface ChatState {
    messages: ChatMessage[];
}

const initialState: ChatState = {
    messages: [
        {message: "Hello! How can I help you learn Japanese today?" , isUser: false},
        {message: "How do I say hello?" , isUser: true}
    ],
}


export const chatSlice = createSlice ({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<ChatMessage>) =>{
            state.messages.push(action.payload);
        },


    },
});


export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;