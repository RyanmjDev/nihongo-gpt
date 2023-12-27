import React, {useState, useEffect} from 'react'
import { fetchNotes } from '../../services/chatService'
import ChatList from '../../components/ChatList/ChatList';

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
    <>
    <ChatList messages={messages} isLoading={isLoading} isBotTyping={false} />
    </>
  )
}

export default NotesPage