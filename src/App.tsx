import { useState } from 'react'

import './App.css'
import ChatBubble from './components/ChatBubble/ChatBubble'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center'>
        <ChatBubble/>

      </div>

    </>
  )
}

export default App
