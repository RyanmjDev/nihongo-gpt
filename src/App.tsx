import { useState } from 'react'

import './App.css'
import ChatPage from './pages/ChatPage/ChatPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { logoutUser } from './services/authService'

function App() {

  return (
    <>
    <div>
       <ChatPage/> 

    </div>

    
    {/* Temporary logout button */}
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={logoutUser}>Logout</button>
    </div>
    </>
  )
}

export default App
