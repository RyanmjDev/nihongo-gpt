import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { addMessage } from '../features/chat/chatSlice';

import axios from 'axios';

const ChatInput = () => {
const [input, setInput] = useState ('')
const dispatch = useDispatch();


const sendMessage = async (userMessage: string) => {
  try {
    const response = await axios.post('http://localhost:3000/chat', { message: userMessage });
    dispatch(addMessage({message: response.data.message, isUser:false}));
    return response.data.message;
  } catch (error) {
    console.error("Error sending message:", error)
  }
}

const handleSubmit = () => {
try {
    console.log("Submitted!")  
    if(input.trim())
    {
      dispatch(addMessage({message: input, isUser:true}));
      sendMessage(input)
      setInput('');
    }

} catch (error) {
  console.error("Error in submission:", error)
}
};

const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
  if (event.key === 'Enter') {
    handleSubmit();
  }
};

  return (
    <div className='fixed inset-x-0 bottom-3 mx-auto max-w-lg md:w-full h-8 flex 
    justify-between '>
      
        <input type="text"
               className='bg-slate-700 text-white w-full p-2 box-border rounded-2xl'
               value={input}
               onChange={(e) => setInput(e.target.value)}
               onKeyPress={handleKeyPress}
               placeholder="Type a message..."
        />
    </div>
  );
}

export default ChatInput;
