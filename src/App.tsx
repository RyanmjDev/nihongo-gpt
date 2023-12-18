import { useState } from 'react'

import './App.css'
import ChatPage from './pages/ChatPage/ChatPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { logoutUser } from './services/authService'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
    <NavBar/>

       <ChatPage/> 


    </>
  )
}

export default App
