import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo with favicon */}
          <div className="flex items-center">
            <img 
              src="/favicon.ico" 
              alt="Stackvibe Logo"
              className="h-8 w-8 -mr-1.5" 
            />
            <span className="text-2xl font-bold text-[#6b5ac0]">tackvibe</span>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-[#6b5ac0]-600 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-700 hover:text-indigo-600 font-medium">Services</a>
          <a href="#projects" className="text-gray-700 hover:text-indigo-600 font-medium">Projects</a>
          <a href="#team" className="text-gray-700 hover:text-indigo-600 font-medium">Team</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-2">
            <a href="#services" className="text-gray-700 hover:text-indigo-600 font-medium py-2" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 font-medium py-2" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#team" className="text-gray-700 hover:text-indigo-600 font-medium py-2" onClick={() => setIsOpen(false)}>Team</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium py-2" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;