import React from 'react'
import './ChatList.css'

const TypingIndicator = () => {

  return (

      <div className='typing-indicator
       bg-gray-700 mr-auto text-left rounded-br-xl
          max-w-xs lg:max-w-md rounded-tl-xl rounded-tr-xl'>
          <div className="dot"></div>   
          <div className="dot"></div>
          <div className="dot"></div>
      </div>
  )
}


export default TypingIndicator