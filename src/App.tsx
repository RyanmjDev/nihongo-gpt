import { useState } from 'react'

import './App.css'
import ChatInput from './components/ChatInput/ChatInput'
import ChatList from './components/ChatList/ChatList'

function App() {

  return (
    <>
      <div className='flex flex-col items-center'>
        <ChatList/>

      </div>
      <ChatInput/>

    </>
  )
}

export default App
