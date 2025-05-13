import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Navbar = () => {
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);
  
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-maroon-700 flex items-center justify-center text-white font-bold text-lg">SCH</div>
          <span className={`ml-2 font-bold text-xl ${scrolled ? 'text-maroon-700' : 'text-white'}`}>
            Sri Lanka School
          </span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-maroon-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke={scrolled ? "currentColor" : "white"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                ${location.pathname === link.path
                  ? 'font-bold text-maroon-700 border-b-2 border-maroon-700'
                  : `${scrolled ? 'text-gray-700' : 'text-white'} hover:text-maroon-600`}
                transition-colors duration-300
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  block py-2
                  ${location.pathname === link.path
                    ? 'font-bold text-maroon-700 border-b-2 border-maroon-700'
                    : 'text-gray-700 hover:text-maroon-600'}
                  transition-colors duration-300
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;