import React from 'react';
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
        <div className="flex items-center ml-2">
            <button 
                className=" hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-full flex items-center justify-center text-xl transition duration-300 ease-in-out"
                onClick={handleSaveToNotes}
            >
                <TbNotes className="text-lg"/>
            </button>
        </div>
    );
}

export default SaveToNotes;
