import React, { useState } from 'react';
import { ChatMessage } from '../../types/types';
import ChatBubble from '../ChatBubble/ChatBubble';

const ChatList = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([ // Corrected to an array of ChatMessage
        { message: "Hello! How can I help you learn Japanese today?", isUser: false },
        { message: "I'd like to learn basic greetings.", isUser: true },
    ]);

    return (
        <>
            {messages.map((message, index) => (
                <ChatBubble key={index} message={message.message} isUser={message.isUser} />
            ))}
        </>
    );
};

export default ChatList;
