import React from 'react'
import ChatList from '../../components/ChatList/ChatList'
import ChatInput from '../../components/ChatInput/ChatInput'

const ChatPage = () => {
  return (
    <>
            <div className='flex flex-col items-center'>
            <ChatList/>

        </div>
        <ChatInput/>
    </>
  )
}

export default ChatPage