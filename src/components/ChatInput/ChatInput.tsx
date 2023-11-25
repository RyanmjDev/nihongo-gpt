import React from 'react';

const ChatInput = () => {
  return (
    <div className='fixed inset-x-0 bottom-3 mx-auto max-w-lg md:w-full h-8 border-t flex 
    justify-between '>
        
        <input type="text"
               className='bg-slate-400 w-full p-2 box-border rounded-lg'
        />
    </div>
  );
}

export default ChatInput;
