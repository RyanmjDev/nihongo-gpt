import { useEffect } from 'react'
import ChatList from '../../components/ChatList/ChatList'
import ChatInput from '../../components/ChatInput/ChatInput'
import { checkLoggedIn } from '../../services/authService';
import '../../App.css'


const ChatPage = () => {

  useEffect(() => {
    if(!checkLoggedIn()) {
      window.location.href = '/Login';
    }
  }, []);

  return (
    <>
      {checkLoggedIn() ? (
        <>
          <div className='chat flex flex-col items-center'>
            <ChatList/>
          </div>
          <ChatInput/>
        </>
      ) : ''}
    </>
  );
  
}

export default ChatPage