import { useState } from 'react'

import './App.css'
import ChatBubble from './components/ChatBubble/ChatBubble'
import ChatInput from './components/ChatInput/ChatInput'

function App() {

  return (
    <>
      <div className='flex flex-col items-center'>
        <ChatBubble message={'Hello AI!'} isUser={true} />
        <ChatBubble message={'As a machine language model I cannot blah blah'} isUser={false} />
        <ChatBubble message={'Unfortunate :|!'} isUser={true} />

      </div>
      <ChatInput/>

    </>
  )
}

export default App
