import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import ChatBubble from '../ChatBubble/ChatBubble';
import TypingIndicator from './TypingIndicator';
import { fetchChatMessages } from '../../services/chatService';
import { addMessage } from '../../features/chat/chatSlice';

import { ChatMessage } from '../../types/types'
import './ChatList.css';

const ChatList = () => {
  const messages = useSelector((state: RootState) => state.chat.messages);
  const isBotTyping = useSelector((state: RootState) => state.chat.isBotTyping);
  const messagesEndRef = useRef(null);

  const dispatch = useDispatch();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const loadChatHistory = async () => {
      try {
        const chatHistory = await fetchChatMessages();
        chatHistory.forEach((message: ChatMessage) => {
          dispatch(addMessage(message));
        });
      } catch (error) {
        console.error('Error loading chat messages', error);
      }
    };

    loadChatHistory();
    scrollToBottom(); // Currently not working
  }, [dispatch]);


  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className='chat-list'>
      {messages.map((message, index) => (
        <ChatBubble key={index} message={message.message} isUser={message.isUser} />
      ))}

      {isBotTyping && <TypingIndicator />}
    </div>
  );
};

export default ChatList;
