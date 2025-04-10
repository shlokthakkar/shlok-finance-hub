
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/6a52a1ab-e90c-42c0-918f-9671fdd350b5.png" 
            alt="Shlok Motors & Finance Logo" 
            className="h-14 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-finance-primary font-medium transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-finance-primary font-medium transition-colors">
            About Us
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-finance-primary font-medium transition-colors">
            Services
          </Link>
          <Link to="/insurance" className="text-gray-700 hover:text-finance-primary font-medium transition-colors">
            Insurance
          </Link>
          <Link to="/inquiry" className="text-gray-700 hover:text-finance-primary font-medium transition-colors">
            Used Cars
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-finance-primary font-medium transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-finance-primary font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-finance-primary font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-finance-primary font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/insurance" 
              className="text-gray-700 hover:text-finance-primary font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Insurance
            </Link>
            <Link 
              to="/inquiry" 
              className="text-gray-700 hover:text-finance-primary font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Used Cars
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-finance-primary font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
