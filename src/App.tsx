import { useState } from 'react'

import './App.css'
import ChatPage from './pages/ChatPage/ChatPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { logoutUser } from './services/authService'
import ConfirmDeleteModal from './components/Modals/DeleteChat/ConfirmDeleteModal'


function App() {

  return (
    <>


       <ChatPage/> 
 


    </>
  )
}

export default App
