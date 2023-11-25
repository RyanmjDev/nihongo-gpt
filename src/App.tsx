import { useState } from 'react'

import './App.css'
import ChatBubble from './components/ChatBubble/ChatBubble'
import ChatInput from './components/ChatInput/ChatInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center'>
        <ChatBubble/>
     

      </div>
      <ChatInput/>

    </>
  )
}

export default App
