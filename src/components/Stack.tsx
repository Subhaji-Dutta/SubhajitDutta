
import styles from '../styles/font.module.css';
import { technologies } from '../data/data';
import { motion } from 'motion/react';

export function Stack() {
    return (
        <div className="py-2 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech,index) => (
            <motion.div
              key={tech.category}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                  <tech.icon className="text-red-600" size={24} />
                </div>
                <h3 className={`${styles.logoText} text-xl`}>{tech.category}</h3>
              </div>
              
              <div className="space-y-2">
                {tech.items.map((item) => (
                  <div
                    key={item}
                    className={`${styles.paraText} flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors`}
                  >
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
        
    );
}