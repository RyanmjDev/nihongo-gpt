import React from 'react'
import Links from './Links'
import { IoSettingsOutline } from "react-icons/io5";


  interface NavLinksProps {
    handleLogout: () => void;
  }

  const NavLinks: React.FC<NavLinksProps> = ({ handleLogout }) => (
    <div className="ml-10 flex items-baseline space-x-4">

{/*       
      {Links.map((link) => (
        <a
          key={link.label}
          href={link.path}
          className="text-gray-300 hover:bg-zinc-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          {link.label}
        </a>
      )
      )} */}

    <button  className="text-gray-300 hover:bg-zinc-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
    <IoSettingsOutline />
        </button>

        <button onClick={handleLogout} className="text-gray-300 hover:bg-zinc-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Logout
        </button>

    </div>
);

export default NavLinks