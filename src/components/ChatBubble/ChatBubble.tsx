import React from 'react';
import { ChatMessage } from '../../types/types';



const ChatBubble: React.FC<ChatMessage> = ({ message, isUser }) => {
  const userStyles = "bg-blue-500 text-right rounded-bl-xl";
  const aiStyles = "bg-gray-700 text-left rounded-br-xl";

  const bubbleStyles = `text-white text-xl px-2 py-1 max-w-xs lg:max-w-md rounded-tl-xl rounded-tr-xl mb-2 ${
    isUser ? userStyles : aiStyles
  }`;

  return (
    <div className={`flex ${isUser ? 'justify-end' : ''}`}>
      <div className={bubbleStyles} >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
