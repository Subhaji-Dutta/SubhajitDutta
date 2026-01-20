import { Zap } from 'lucide-react';
import styles from '../styles/font.module.css';
import { motion } from 'motion/react';

export function TechStack() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="text-red-600" size={32} />
            <h2 className={`${styles.logoText} text-4xl md:text-5xl`}>Technology Stack</h2>
          </div>
          <p className={`${styles.paraText} text-gray-400 text-lg max-w-2xl mx-auto`}>
            Leveraging cutting-edge technologies to build scalable, performant, and maintainable web applications
          </p>
        </motion.div>
      </div>
    </div>
  );
}
