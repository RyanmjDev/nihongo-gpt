
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import ChatBubble from '../ChatBubble/ChatBubble';

const ChatList = () => {
  const messages = useSelector((state: RootState) => state.chat.messages);

  return (
    <>
      {messages.map((message, index) => (
        <ChatBubble key={index} message={message.message} isUser={message.isUser} />
      ))}
    </>
  );
};

export default ChatList;
