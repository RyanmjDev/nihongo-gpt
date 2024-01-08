// ChatPage.tsx

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import ChatList from '../../components/ChatList/ChatList';
import ChatInput from '../../components/ChatInput/ChatInput';
import { fetchChatMessages } from '../../services/chatService';
import { addMessage, clearMessages } from '../../features/chat/chatSlice';
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
      return; // Return here to prevent further execution if not logged in
    }

    const loadChatHistory = async () => {
      setIsLoading(true);
      try {
        const chatHistory = await fetchChatMessages();
        dispatch(clearMessages()); // Clear previous messages before adding new ones
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

    // Cleanup function to clear messages when the component unmounts
    return () => {
      dispatch(clearMessages());
    };

  }, [dispatch]); 

  return (
    <>
      {checkLoggedIn() && (
<div style={{ height: '90vh' }} className="flex justify-center items-center h-screen ">
    <div style={{ height: '80vh' }} className='flex flex-col items-center justify-center w-full md:w-3/4 lg:w-1/2 lg:max-h-2xl max-w-7xl bg-zinc-800 rounded-lg shadow-xl'>
        <ChatList messages={messages} isLoading={isLoading} isBotTyping={isBotTyping} />
        <ChatInput />
    </div>
</div>

      )}
    </>
  );
}

export default ChatPage;
