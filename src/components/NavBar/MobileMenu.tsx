import React from 'react'
import Links from './Links';

interface MobileMenuProps {
    isOpen: boolean;
    handleLogout: () => void;
  
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, handleLogout }) => (
    isOpen && (
        <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
 
   
    {Links.map((link) => (
        <a
          key={link.label}
          href={link.path}
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          {link.label}
        </a>
      )
      )}
            <button onClick={handleLogout} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Logout
            </button>
        </div>
    </div>
    )
  );
  

export default MobileMenu