import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import ChatBubble from '../ChatBubble/ChatBubble';
import TypingIndicator from './TypingIndicator';
import { fetchChatMessages } from '../../services/chatService';
import { addMessage } from '../../features/chat/chatSlice';

import { ChatMessage } from '../../types/types'
import './ChatList.css';


const ChatList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const messages = useSelector((state: RootState) => state.chat.messages);
  const isBotTyping = useSelector((state: RootState) => state.chat.isBotTyping);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  // Load chat history on initial mount
  useEffect(() => {
    const loadChatHistory = async () => {
      try {
        const chatHistory = await fetchChatMessages();
        chatHistory.forEach((message: ChatMessage) => {
          dispatch(addMessage(message));
        });
      } catch (error) {
        console.error('Error loading chat messages', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadChatHistory();
  }, [dispatch]);

  // Scroll to bottom after messages have been updated
  useEffect(() => {
    if (!isLoading) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
    }
  }, [isLoading, messages.length]);

  // Scroll to bottom smoothly for new messages after initial load
  useEffect(() => {
    if (!isLoading) {
      const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

      scrollToBottom();
    }
  }, [messages]);

  return (
    <div className='chat-list'>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {messages.map((message, index) => (
            <ChatBubble key={index} message={message.message} isUser={message.isUser} />
          ))}
          <div ref={messagesEndRef} />

          {isBotTyping && <TypingIndicator />}
        </>
      )}
    </div>
  );
};

export default ChatList