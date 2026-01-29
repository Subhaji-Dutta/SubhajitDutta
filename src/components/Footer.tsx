
import styles from '../styles/font.module.css';
import {motion} from 'motion/react';
import { socialLinks } from '../data/data';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{ duration: 0.5 }}>

            <h3 className={`${styles.logoText} text-red-600 mb-4`}>SUBHAJIT DUTTA</h3>
            <p className={`${styles.paraText} text-gray-400 text-sm`}>
              Creating exceptional digital experiences through innovative design and development.
            <br/>
            <a href="mailto:duttasubhajit956@gmail.com" className="text-gray-400 hover:text-red-600 transition-colors">
                    duttasubhajit956@gmail.com
            </a>
            <br/>
            <a href="tel:+918274932405" className="text-gray-400 hover:text-red-600 transition-colors">
                    +91 8274932405
            </a>
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className={`${styles.logoText} mb-4`}>Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className={`${styles.logoText} text-gray-400 hover:text-white transition-colors`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('projects')}
                  className={`${styles.logoText} text-gray-400 hover:text-white transition-colors`}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className={`${styles.logoText} text-gray-400 hover:text-white transition-colors`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`${styles.logoText} text-gray-400 hover:text-white transition-colors`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className={`${styles.logoText} mb-4`}>Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.Label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.Label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale:1 }}
                  whileInView={{ opacity: 1, scale:1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  target="_blank"
                   rel="noopener noreferrer"
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
        className="pt-8 border-t border-gray-900 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>© 2025 Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}