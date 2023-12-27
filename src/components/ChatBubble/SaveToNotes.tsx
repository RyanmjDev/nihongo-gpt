import React from 'react'
import { TbNotes } from "react-icons/tb";
import { saveToNotes } from '../../services/chatService';

interface SaveToNotesProps {
    message: string;
}

const SaveToNotes: React.FC<SaveToNotesProps> = ({message}) => {

    const handleSaveToNotes = () => {
        saveToNotes(message);
    }

  return (
    <div>
        <button 
        className=" text-white text-xl px-2 py-1 mb-2"
        onClick={handleSaveToNotes}
        >
            <TbNotes/>
        </button>
    </div>
    
  )
}

export default SaveToNotes