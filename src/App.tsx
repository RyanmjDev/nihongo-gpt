import { useState } from 'react'

import './App.css'
import ChatInput from './components/ChatInput/ChatInput'
import ChatList from './components/ChatList/ChatList'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {

  return (
    <>
      {/* <div className='flex flex-col items-center'>
        <ChatList/>

      </div>
      <ChatInput/> */}

      <LoginPage/>

    </>
  )
}

export default App
