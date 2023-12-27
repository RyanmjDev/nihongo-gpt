import React, {useState, useEffect} from 'react'
import { fetchNotes } from '../../services/chatService'

const NotesPage = () => {
    // const [isLoading, setIsLoading] = useState(true);
    const [messages, setMessages] = useState([]);



    useEffect(() => {
        
        const loadNotes = async () => {
            const notes = await fetchNotes();
            setMessages(notes);
        };
        
        loadNotes();

    }, [])

    useEffect(() => {
        console.log(messages);
    }, [messages]);
    



  return (
    <div>NotesPage</div>
  )
}

export default NotesPage