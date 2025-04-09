
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">Shlok Motors & Finance</span>
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
          <Link to="/contact" className="text-gray-700 hover:text-finance-primary font-medium transition-colors">
            Contact
          </Link>
          <Button asChild className="bg-finance-primary hover:bg-finance-primary/90">
            <Link to="/inquiry">Get a Quote</Link>
          </Button>
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
              to="/contact" 
              className="text-gray-700 hover:text-finance-primary font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-finance-primary hover:bg-finance-primary/90">
              <Link to="/inquiry" onClick={toggleMenu}>Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
