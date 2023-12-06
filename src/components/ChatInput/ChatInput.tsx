import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { addMessage, setBotTyping } from '../../features/chat/chatSlice';
import axios from 'axios';

import { IoSend } from "react-icons/io5";

const ChatInput = () => {
const [input, setInput] = useState ('');
const dispatch = useDispatch();


const sendMessage = async (userMessage: string) => {
  try {
    dispatch(setBotTyping(true))
      const response = await axios.post('http://localhost:3000/chat', { message: userMessage });
      dispatch(addMessage({message: response.data.message, isUser:false}));
    dispatch(setBotTyping(false))
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

const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === 'Enter') {
    handleSubmit();
  }
};


return (
  <div className='fixed inset-x-0 bottom-3 mx-auto max-w-lg md:w-full flex justify-between p-2 bg-slate-700 rounded-2xl'>
    <input type="text"
           className='bg-transparent text-white w-full focus:outline-none'
           value={input}
           onChange={(e) => setInput(e.target.value)}
           onKeyPress={handleKeyPress}
           placeholder="Type a message..."
    />
    <button onClick={handleSubmit} className="ml-2">
    <IoSend />
    </button>
  </div>
);
}

export default ChatInput;
