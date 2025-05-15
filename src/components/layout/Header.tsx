import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../images/Logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Process', path: '/#process' },
    { name: 'Team', path: '/#team' },
    { name: 'FAQ', path: '/#faq' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const headerClass = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
  }`;

  return (
    <header className={headerClass}>
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="z-50">
        <img
  src={Logo}
  alt="Logo"
  className="rounded-full w-[75px] h-[75px] md:w-[90px] md:h-[90px]"
/>

        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-300 hover:text-primary-500 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/booking" 
            className="btn btn-primary"
          >
            Book a Call
          </Link>
        </nav>

        <button 
          className="md:hidden z-50 text-white focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-dark-900/98 z-40 md:hidden flex flex-col"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                  >
                    <Link
                      to={item.path}
                      className="text-2xl text-gray-300 hover:text-primary-500 transition-colors"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={navItems.length}
                >
                  <Link 
                    to="/booking" 
                    className="btn btn-primary text-xl"
                    onClick={closeMenu}
                  >
                    Book a Call
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;