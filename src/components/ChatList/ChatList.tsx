import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const messagesStartRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null); // Ref for the chat list container
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!isLoading && !isLoadingPrev) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'instant'});
    }
  }, [isLoading, messages]);

  const loadMoreMessages = useCallback(async () => {
    if (isLoadingPrev) {
      // If we are already loading, don't start loading more messages
      return;
    }
    setIsLoadingPrev(true);
    try {
      const chatHistory = await fetchChatMessages(page);
      if (chatHistory.length > 0) {
        chatHistory.forEach((message: ChatMessage) => {
          dispatch(loadPrevMessage(message));
        });
        setPage(prevPage => prevPage + 1);
      } else {
        // If there are no more messages, we can disconnect the observer
        if (observer.current) {
          observer.current.disconnect();
        }
      }
    } catch (error) {
      console.error('Error loading chat messages', error);
    }
    setIsLoadingPrev(false);
  }, [dispatch, page, isLoadingPrev]);
  

  
  useEffect(() => {
    if (!messagesStartRef.current || isLoading || isLoadingPrev) {
      return;
    }
  
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreMessages();
        }
      },
      { threshold: 0.1 }
    );
  
    observer.current.observe(messagesStartRef.current);
  
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loadMoreMessages, isLoading, isLoadingPrev]);
  
  

  return (
    <div className='chat-list' ref={listRef}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
        <div ref={messagesStartRef} />
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
