import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { addMessage, setBotTyping } from '../../features/chat/chatSlice';
import axios from 'axios';
import Cookies from 'js-cookie';

import { sendMessage } from '../../services/chatService';

import { IoSend } from "react-icons/io5";

const ChatInput = () => {
const [input, setInput] = useState ('');
const dispatch = useDispatch();

const submitMessage = async (userMessage: string): Promise<string | undefined> => {
  try {
      dispatch(setBotTyping(true));
      const response = await sendMessage(userMessage);
      dispatch(addMessage({ message: response.data.message, isUser: false }));
      dispatch(setBotTyping(false));
      return response.data.message;
  } catch (error) {
      console.error("Error sending message:", error);
  }
}


const handleSubmit = () => {
try {
    console.log("Submitted!")  
    if(input.trim())
    {
      dispatch(addMessage({message: input, isUser:true}));
      submitMessage(input)
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
  <div className='flex justify-between m-2 mx-auto max-w-lg w-full p-2 bg-slate-700 rounded-2xl'>
    <input type="text"
           className='bg-transparent text-white flex-1 focus:outline-none px-2'
           value={input}
           onChange={(e) => setInput(e.target.value)}
           onKeyPress={handleKeyPress}
           placeholder="Type a message..."
    />
    <button onClick={handleSubmit} className="shrink-0 ml-2 text-white">
      <IoSend />
    </button>
  </div>
);
}

export default ChatInput;
