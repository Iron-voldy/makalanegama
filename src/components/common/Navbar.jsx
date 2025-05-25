import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import schoolInfo from '../../data/schoolInfo';

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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-red-600/30 py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center group interactive">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-all duration-300 border border-red-500/30">
            <span className="text-xs">MVY</span>
          </div>
          <div className="ml-3">
            <span className="block font-bold text-xl text-white group-hover:text-red-400 transition-colors duration-300">
              {schoolInfo.shortName}
            </span>
            <span className="block text-xs text-gray-400 group-hover:text-red-300 transition-colors duration-300">
              {schoolInfo.location.district}
            </span>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-red-600/20 transition-colors interactive"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 interactive ${
                location.pathname === link.path
                  ? 'text-white bg-gradient-to-r from-red-600 to-red-800 shadow-lg shadow-red-600/30'
                  : 'text-gray-300 hover:text-white hover:bg-red-600/20'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full"></div>
              )}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-red-600/30">
          <div className="container mx-auto py-4">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 interactive ${
                    location.pathname === link.path
                      ? 'text-white bg-gradient-to-r from-red-600 to-red-800 shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;