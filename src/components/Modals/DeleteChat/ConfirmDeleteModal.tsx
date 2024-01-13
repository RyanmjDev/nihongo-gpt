import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

interface ConfirmDeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({isOpen, onClose, onDelete,}) => {
    if (!isOpen) {
        return null;
    }

    const handleDelete = () => {
        onDelete();
        onClose();
    };

    return (
        <div className="flex justify-center items-center
        fixed inset-0 z-50 overflow-y-auto overflow-x-hidden  
        w-full md:h-auto">
          <div className=" relative p-4 w-full max-w-md h-full md:h-auto">
            <div className=" relative rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-lg w-8 h-8 flex items-center justify-center  dark:hover:text-white"
                onClick={onClose}
              > <IoCloseSharp/>

                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <h3 className="mb-5 text-lg font-normal">
                     Are you sure you want to delete your chat history? This action is irreversible
                </h3>
                <button
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 mr-2 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                  onClick={onClose}
                >
                  No, cancel
                </button>

                <button
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={handleDelete}
                >
                  Yes, I'm sure
                </button>

              </div>
            </div>
          </div>
        </div>
      );
    };

export default ConfirmDeleteModal;
