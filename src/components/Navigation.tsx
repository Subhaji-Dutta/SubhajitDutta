import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from '../styles/font.module.css';
import {motion, AnimatePresence} from 'framer-motion';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = ['home', 'projects', 'about', 'contact'];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button 
            onClick={() => handleNavClick('home')}
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`${styles.logoText} text-red-600 tracking-wider`}>SUBHAJIT DUTTA</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((page, index) => (
              <motion.button
                onClick={() => handleNavClick(page)}
                className={`hover:text-gray-300 transition-colors ${
                  currentPage === page ? 'text-red-600' : ''
                }${styles.logoText}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{scale: 0.9}}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
          className="md:hidden bg-black/95 backdrop-blur-sm pb-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((page, index) => (
                <motion.button
                  onClick={() => handleNavClick(page)}
                  className={`hover:text-gray-300 transition-colors text-left ${
                    currentPage === page ? 'text-red-600' : ''
                  }${styles.logoText}`}
                  key={page}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}