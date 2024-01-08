import React from 'react';
import { ChatMessage } from '../../types/types';
import SaveToNotes from './SaveToNotes';




const ChatBubble: React.FC<ChatMessage> = ({ message, messageId, isUser }) => {
  const userStyles = "bg-blue-500 text-right rounded-bl-xl";
  const aiStyles = "bg-gray-700 text-left rounded-br-xl";

  // Adjusted styles for padding and max-width
  const bubbleStyles = `text-white text-lg px-4 py-2 rounded-tl-xl rounded-tr-xl mb-2 ${
    isUser ? userStyles : aiStyles
  }`;

  return (
    <>
      <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div className={`${bubbleStyles} ${isUser ? 'mr-4' : 'ml-4'} max-w-xs lg:max-w-md`}>
          {message}
        </div>
        {/* {!isUser && <SaveToNotes message={message} messageId={messageId}/>} */}
      </div>
    </>
  );
};


export default ChatBubble;
