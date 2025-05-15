import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/Logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#0A0A0F] text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
  <img
    src={logo}
    alt="Logo"
    className="rounded-full w-[60px] h-[65px] md:w-[70px] md:h-[65px]"
  />
</a>


          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-orange-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition"
            >
              Book a Demo
            </a>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 backdrop-blur-md text-white flex flex-col px-6 py-10">
          {/* Close Icon */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Links */}
          <nav className="flex flex-col items-center gap-6 mt-16 text-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-400 transition"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full transition"
            >
              Book a Demo
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
