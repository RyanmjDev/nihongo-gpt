import React from 'react';

const ChatInput = () => {
  return (
    <div className='fixed inset-x-0 bottom-3 mx-auto max-w-lg md:w-full h-8 flex 
    justify-between '>
        
        <input type="text"
               className='bg-slate-700 text-white w-full p-2 box-border rounded-2xl'
        />
    </div>
  );
}

export default ChatInput;
