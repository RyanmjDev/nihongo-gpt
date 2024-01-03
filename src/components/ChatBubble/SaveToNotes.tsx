import React from 'react';
import { TbNotes } from "react-icons/tb";
import { CiSquareRemove } from "react-icons/ci"
import { saveToNotes, removeFromNotes } from '../../services/chatService';

interface SaveToNotesProps {
    message: string;
    messageId: string;
}

const SaveToNotes: React.FC<SaveToNotesProps> = ({message, messageId}) => {
    const handleSaveToNotes = () => {
        saveToNotes(message);
    }

    const handleRemoveFromNotes = () => {
        console.log(messageId)
        removeFromNotes(messageId);
    }
    

    return (
        <div className="flex items-center ml-2">
            <button 
                className=" hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-full flex items-center justify-center text-xl transition duration-300 ease-in-out"
                onClick={handleSaveToNotes}
            >
                <TbNotes className="text-lg"/>
                </button>

                <button 
                className=" hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-full flex items-center justify-center text-xl transition duration-300 ease-in-out"
                onClick={handleRemoveFromNotes}
            >
              <CiSquareRemove />
            </button>
        </div>
    );
}

export default SaveToNotes;
