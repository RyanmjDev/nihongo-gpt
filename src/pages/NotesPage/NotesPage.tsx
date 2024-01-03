import React, {useState, useEffect} from 'react'
import { fetchNotes } from '../../services/chatService'
import ChatList from '../../components/ChatList/ChatList';
import '../../App.css'

const NotesPage = () => {
     const [isLoading, setIsLoading] = useState(true);
    const [messages, setMessages] = useState([]);



    useEffect(() => {
        
        const loadNotes = async () => {
            const notes = await fetchNotes();
            setMessages(notes);
            setIsLoading(false);
        };
        
        loadNotes();

    }, [])

    useEffect(() => {
        console.log(messages);
    }, [messages]);
    



  return (
    <div className='chat flex flex-col items-center'>
    <ChatList messages={messages} isLoading={isLoading} isBotTyping={false} />
    </div>
  )
}

export default NotesPage