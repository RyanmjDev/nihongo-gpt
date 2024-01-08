import React from 'react';
import { logoutUser } from '../../services/authService';
import Logo from './Logo'
import NavLinks from './NavLinks';
import MobileMenuToggle from './MobileMenuToggle';
import MobileMenu from './MobileMenu';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
       logoutUser();
    };

    return (
  <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 ">

      <div className="flex items-center">
        <Logo />
      </div>


      <div className="hidden md:flex items-center">
        <NavLinks handleLogout={handleLogout} />
      </div>

      {/* Mobile menu button */}
      <div className="-mr-2 flex md:hidden">
        <MobileMenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  </div>

  {/* Mobile menu */}
  {isOpen && (
    <MobileMenu isOpen={isOpen} handleLogout={handleLogout} />
  )}
</nav>
    );
};

export default NavBar;
