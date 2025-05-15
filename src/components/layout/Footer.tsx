import { Link } from 'react-router-dom';
import { Mail, MapPin, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-dark-800 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-300 max-w-xs">
              AI-powered marketing solutions for home-office product brands.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#about" className="text-gray-300 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#process" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="text-gray-300 hover:text-primary-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Ai Services
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Paid Ads
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Unit Economics
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-2 text-primary-500" />
                <span className="text-gray-300">contact@023agency.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-2 text-primary-500" />
                <span className="text-gray-300">Uzbekistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 023 Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;