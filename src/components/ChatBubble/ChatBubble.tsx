import React from 'react';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser }) => {
  const userStyles = "bg-blue-500 ml-auto text-right rounded-bl-xl";
  const aiStyles = "bg-gray-700 mr-auto text-left rounded-br-xl";

  const bubbleStyles = `text-white text-xl px-2 py-1 max-w-xs lg:max-w-md rounded-tl-xl rounded-tr-xl mb-2 ${
    isUser ? userStyles : aiStyles
  }`;

  return (
    <div className={bubbleStyles} >
      {message}
    </div>
  );
};

export default ChatBubble;
