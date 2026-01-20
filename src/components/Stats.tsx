import { motion } from 'motion/react';
export function Stats() {
  return (
    <motion.div 
    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
    initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.6, delay: 0.3 }}
    >
          <motion.div 
          className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
          whileInView={{ scale: [0.8, 1] }}
            viewport={{ once: false}}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="text-4xl mb-2 text-red-600">5+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </motion.div>
          <motion.div 
          className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
          whileInView={{ scale: [0.8, 1] }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="text-4xl mb-2 text-red-600">50+</div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </motion.div>
          <motion.div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
          whileInView={{ scale: [0.8, 1] }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="text-4xl mb-2 text-red-600">20+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </motion.div>
          <motion.div className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
          whileInView={{ scale: [0.8, 1] }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <div className="text-4xl mb-2 text-red-600">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </motion.div>
    </motion.div> 
        
);}