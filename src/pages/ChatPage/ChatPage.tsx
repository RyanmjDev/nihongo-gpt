// ChatPage.tsx

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import ChatList from '../../components/ChatList/ChatList';
import ChatInput from '../../components/ChatInput/ChatInput';
import { fetchChatMessages } from '../../services/chatService';
import { addMessage } from '../../features/chat/chatSlice';
import { checkLoggedIn } from '../../services/authService';
import '../../App.css';
import { ChatMessage } from '../../types/types';

const ChatPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.chat.messages);
  const isBotTyping = useSelector((state: RootState) => state.chat.isBotTyping);

  useEffect(() => {
    if (!checkLoggedIn()) {
      window.location.href = '/Login';
    } else {
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
    }
  }, [dispatch]);

  return (
    <>
      {checkLoggedIn() && (
        <div className='chat flex flex-col items-center'>
          <ChatList messages={messages} isLoading={isLoading} isBotTyping={isBotTyping} />
          <ChatInput />
        </div>
      )}
    </>
  );
}

export default ChatPage;
