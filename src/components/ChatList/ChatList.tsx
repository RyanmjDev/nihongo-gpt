import React, { useState, useEffect, useRef } from 'react';
import ChatBubble from '../ChatBubble/ChatBubble';
import TypingIndicator from './TypingIndicator';
import { useDispatch } from 'react-redux';
import { ChatMessage } from '../../types/types'
import { fetchChatMessages } from '../../services/chatService';
import { loadPrevMessage } from '../../features/chat/chatSlice';
import './ChatList.css';

interface ChatListProps {
  messages: ChatMessage[];
  isLoading: boolean;
  isBotTyping: boolean;
}

const ChatList: React.FC<ChatListProps> = ({ messages, isLoading, isBotTyping }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLoadingPrev, setIsLoadingPrev] = useState(false); // State to track if loading previous messages
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null); // Ref for the chat list container

  useEffect(() => {
    if (!isLoading && !isLoadingPrev) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isLoading, messages]);

  useEffect(() => {
    
    const currentList = listRef.current;
    if (currentList) {
      currentList.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentList) {
        currentList.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const loadMoreMessages = async () => {
    try {
      setIsLoadingPrev(true);
      const chatHistory = await fetchChatMessages(page);
      chatHistory.forEach((message: ChatMessage) => {
        dispatch(loadPrevMessage(message));
      });
      setPage(page + 1);
      setIsLoadingPrev(false);
    } catch (error) {
      console.error('Error loading chat messages', error);
      setIsLoadingPrev(false);
    }
  };

  const handleScroll = () => {
    const currentList = listRef.current;
    if (currentList) {
      // Check if the scroll position is near the top of the list
      const isNearTop = currentList.scrollTop < 50; // 50px threshold

      if (isNearTop && !isLoadingPrev) {
        loadMoreMessages();
      }
    }
  };

  return (
    <div className='chat-list' ref={listRef}>
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
