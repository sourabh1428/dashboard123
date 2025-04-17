import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'Features', 
    path: '/features',
    submenu: [
      { name: 'Invoicing', path: '/features/invoicing' },
      { name: 'Inventory', path: '/features/inventory' },
      { name: 'Reporting', path: '/features/reporting' },
    ]
  },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/lead' }
];

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Track scroll position for sticky styling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-md shadow-purple-500/5' 
          : 'bg-transparent'
      }`}
      data-section="navigation"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
      <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a 
              href="/" 
              className="flex items-center gap-2 outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              <img 
                src="https://img.icons8.com/fluency/50/bill.png" 
                alt="Easibill Logo" 
                className="h-8 w-auto" 
                width={32} 
                height={32}
                fetchpriority="high"
              />
              <span className="text-white font-bold text-xl">Easibill</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 h-full">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group h-full flex items-center">
                {link.submenu ? (
                  <div className="h-full">
                    <button 
                      className={`flex items-center px-3 py-2 text-sm font-medium h-full
                        ${isActivePath(link.path) 
                          ? 'text-purple-400' 
                          : 'text-gray-300 hover:text-white'
                        }
                        transition-colors relative group`}
                      onClick={() => toggleSubmenu(index)}
                      aria-expanded={activeSubmenu === index}
                      aria-controls={`submenu-${index}`}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                      
                      {/* Active indicator */}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform group-hover:scale-x-100 ${
                        isActivePath(link.path) ? 'scale-x-100' : ''
                      }`}></span>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeSubmenu === index && (
                        <motion.div
                          id={`submenu-${index}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-0 w-48 bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg shadow-purple-500/20 overflow-hidden z-50"
                        >
                          <div className="py-2">
                            {link.submenu.map((sublink, subIndex) => (
                              <a
                                key={subIndex}
                                href={sublink.path}
                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-900/50 hover:text-white transition-colors"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(sublink.path);
                                  setActiveSubmenu(null);
                                }}
                              >
                                {sublink.name}
                              </a>
                            ))}
                          </div>
      </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={link.path}
                    className={`flex items-center px-3 py-2 text-sm font-medium h-full
                      ${isActivePath(link.path) 
                        ? 'text-purple-400' 
                        : 'text-gray-300 hover:text-white'
                      }
                      transition-colors relative`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.path);
                    }}
                  >
                    {link.name}
                    
                    {/* Active indicator */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform hover:scale-x-100 ${
                      isActivePath(link.path) ? 'scale-x-100' : ''
                    }`}></span>
                  </a>
                )}
      </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              onClick={() => navigate('/login')}
              variant="outline"
              className="px-3 py-1.5 border-purple-500/30 text-purple-300 hover:bg-purple-900/20 hover:text-white rounded-md text-sm"
              data-conversion-button="login"
            >
              Log In
            </Button>
            <Button
              onClick={() => navigate('/lead')}
              variant="outline"
              className="px-3 py-1.5 border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/20 hover:text-white rounded-md text-sm"
              data-conversion-button="demo"
            >
              Request Demo
            </Button>
            <Button
              onClick={() => navigate('/lead')}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-md shadow-md text-sm"
              data-conversion-button="get-started"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500"
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
            </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <div key={index} className="w-full">
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className={`w-full flex justify-between items-center rounded-md px-3 py-2 text-base font-medium 
                          ${isActivePath(link.path) 
                            ? 'bg-purple-900/50 text-white' 
                            : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                          }`}
                        aria-expanded={activeSubmenu === index}
                        aria-controls={`mobile-submenu-${index}`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeSubmenu === index && (
                          <motion.div
                            id={`mobile-submenu-${index}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-1"
                          >
                            {link.submenu.map((sublink, subIndex) => (
                              <a
                                key={subIndex}
                                href={sublink.path}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-800/50 hover:text-white"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(sublink.path);
                                  setIsOpen(false);
                                }}
                              >
                                {sublink.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={link.path}
                      className={`block rounded-md px-3 py-2 text-base font-medium 
                        ${isActivePath(link.path) 
                          ? 'bg-purple-900/50 text-white' 
                          : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                        }`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(link.path);
                        setIsOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="px-5 py-4 border-t border-gray-800 space-y-3">
                <button
                  onClick={() => {
                    navigate('/login');
                    setIsOpen(false);
                  }}
                  className="w-full text-center block px-4 py-2 rounded-md border border-purple-500/30 text-purple-300 hover:bg-purple-900/20 hover:text-white"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    navigate('/lead');
                    setIsOpen(false);
                  }}
                  className="w-full text-center block px-4 py-2 rounded-md border border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/20 hover:text-white"
                >
                  Request Demo
                </button>
                <button
                  onClick={() => {
                    navigate('/lead');
                    setIsOpen(false);
                  }}
                  className="w-full text-center block px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;

