
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Shlok Motors & Finance</h3>
            <p className="text-gray-300 mb-4">
              Providing excellent car financing solutions and insurance advisory services since 1996.
            </p>
            <div className="flex space-x-4">
              <a href="https://m.facebook.com/ShlokMotorsAndFinance/" className="text-gray-300 hover:text-finance-secondary">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/shlokmotorsandfinance" className="text-gray-300 hover:text-finance-secondary">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="text-gray-300 hover:text-white transition-colors">
                  Insurance Reminder
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#car-loans" className="text-gray-300 hover:text-white transition-colors">
                  Car Loans
                </Link>
              </li>
              <li>
                <Link to="/services#used-car-finance" className="text-gray-300 hover:text-white transition-colors">
                  Used Car Finance
                </Link>
              </li>
              <li>
                <Link to="/services#mortgage-loan-solutions" className="text-gray-300 hover:text-white transition-colors">
                  Mortgage Loans
                </Link>
              </li>
              <li>
                <Link to="/services#emi-options" className="text-gray-300 hover:text-white transition-colors">
                  EMI Options
                </Link>
              </li>
              <li>
                <Link to="/services#insurance-advisory" className="text-gray-300 hover:text-white transition-colors">
                  Insurance Advisory
                </Link>
              </li>
              <li>
                <Link to="/services#used-car-buy-sell" className="text-gray-300 hover:text-white transition-colors">
                  Used Car Buy/Sell
                </Link>
              </li>
              <li>
                <Link to="/services#refinancing-solutions" className="text-gray-300 hover:text-white transition-colors">
                  Refinancing Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#documentation-assistance" className="text-gray-300 hover:text-white transition-colors">
                  Documentation Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-finance-secondary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  Dev Prime, Makarba, Ahmedabad, Gujarat – 380015
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-finance-secondary flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  +91 9979916000 / +91 9825014189
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-finance-secondary flex-shrink-0" size={18} />
                <a href="mailto:shlokmfin@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  shlokmfin@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shlok Motors & Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
