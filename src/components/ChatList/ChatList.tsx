// ChatList.tsx

import React, { useEffect, useRef } from 'react';
import ChatBubble from '../ChatBubble/ChatBubble';
import TypingIndicator from './TypingIndicator';
import { ChatMessage } from '../../types/types'
import './ChatList.css';

interface ChatListProps {
  messages: ChatMessage[];
  isLoading: boolean;
  isBotTyping: boolean;
}

const ChatList: React.FC<ChatListProps> = ({ messages, isLoading, isBotTyping }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom after messages have been updated
  useEffect(() => {
    if (!isLoading) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isLoading, messages]);

  return (
    <div className='chat-list'>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {messages.map((message, index) => (
            <ChatBubble key={index} message={message.message} messageId={message._id} isUser={message.isUser} />
          ))}
          <div ref={messagesEndRef} />

          

          {isBotTyping && <TypingIndicator />}
        </>
      )}
    </div>
  );
};

export default ChatList;
