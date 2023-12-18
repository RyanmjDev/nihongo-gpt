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
        <nav className=" bg-zinc-950" style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    <div className="flex items-center">
                    <Logo/>
                        <div className="hidden md:block">
                         <NavLinks handleLogout={handleLogout}/>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                       <MobileMenuToggle isOpen={isOpen} toggleMenu={toggleMenu}/>
                    </div>
                </div>
            </div>

            {isOpen && (
             <MobileMenu isOpen={isOpen} handleLogout={handleLogout}/>
            )}
        </nav>
    );
};

export default NavBar;
