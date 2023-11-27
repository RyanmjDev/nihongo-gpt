import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { addMessage } from '../features/chat/chatSlice';

const ChatInput = () => {
const [input, setInput] = useState ('')
const dispatch = useDispatch();

const handleSubmit = () => {
  console.log("Submitted!")
  if(input.trim())
  {
    dispatch(addMessage({message: input, isUser:true}));
    setInput('');
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
