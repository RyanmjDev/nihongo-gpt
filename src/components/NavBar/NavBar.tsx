import React, {useState} from 'react';
import { logoutUser } from '../../services/authService';
import Logo from '../common/Logo'
import { IoSettingsOutline } from "react-icons/io5";
import ConfirmDeleteModal from '../Modals/DeleteChat/ConfirmDeleteModal';
import { deleteAllChatMessages } from '../../services/chatService';




const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logoutUser(); // Implement logout logic
  };

  const handleClearChat = () => {
    setIsDeleteModalOpen(true);
  };


  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false); // Close the modal
  };

  const deleteChat = () => {
    deleteAllChatMessages();
  };


  return (
    <>
    <nav className=" p-4 flex justify-between items-start lg:items-center">
      <div className="flex item-start lg:items-center">
        <Logo />
      </div>
      <div className="relative">
        <button onClick={toggleDropdown} className="text-white focus:outline-none">
          <IoSettingsOutline className="h-6 w-6" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 py-2 bg-black rounded-md shadow-xl z-20
            w-80 lg:w-48 ">
            <a
              href="#"
              className="block px-4 py-2  capitalize text-red-400 font-semibold hover:bg-slate-800 "
              onClick={handleClearChat}
            >
            Clear Chat 
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm capitalize text-white hover:bg-slate-800"
              onClick={handleLogout}
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
    <ConfirmDeleteModal 
        isOpen={isDeleteModalOpen} 
        onClose={closeDeleteModal} 
        onDelete={deleteChat} 
      />
    </>
  );
};

export default Navbar;