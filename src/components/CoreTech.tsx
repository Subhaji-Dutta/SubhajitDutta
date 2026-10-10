import { Code2, Database, BarChart3, LineChart, TrendingUp, Sparkles } from 'lucide-react';
import { Cpu, Cog, Eye, Zap, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '../styles/font.module.css';
import { useState } from 'react';
import { allProjects } from '../data/projects';
import { coreSkills } from '../data/data';




const SkillChip = ({ skill, isCore = false }: { skill: string, isCore?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const relatedProjects = allProjects.filter(p => 
    p.technologies.some(t => t.toLowerCase().includes(skill.toLowerCase())) ||
    p.tags.some(t => t.toLowerCase().includes(skill.toLowerCase()))
  );

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-help flex items-center gap-2 ${
        isCore 
          ? "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
          : "bg-gray-900 border-gray-800 text-gray-400 hover:text-gray-200 hover:border-gray-600 hover:bg-gray-800"
      }`}>
        {skill} 
        {relatedProjects.length > 0 && (
          <span className={`text-xs px-1.5 py-0.5 rounded-full ${isCore ? 'bg-gray-700 text-gray-300' : 'bg-gray-800'}`}>
            {relatedProjects.length}
          </span>
        )}
      </div>
      
      {/* Tooltip */}
      {isHovered && relatedProjects.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl text-xs pointer-events-none"
        >
          <div className={`text-gray-400 mb-2 font-semibold flex justify-between items-center ${styles.logoText}`}>
            <span>Used in Projects</span>
            <Layers size={12} />
          </div>
          <ul className="space-y-1.5">
            {relatedProjects.slice(0, 4).map(p => (
              <li key={p.id} className={`${styles.paraText} text-gray-200 flex items-start gap-2`}>
                <span className="text-red-500 mt-0.5">•</span>
                <span className="truncate flex-1">{p.title}</span>
              </li>
            ))}
            {relatedProjects.length > 4 && (
              <li className={`${styles.paraText} text-gray-500 italic mt-2 pt-1 border-t border-gray-800 text-center`}>
                +{relatedProjects.length - 4} more projects
              </li>
            )}
          </ul>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-gray-700" />
        </motion.div>
      )}
    </div>
  );
};

export function CoreTech() {
  return (
    <div className="py-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="text-red-600" size={32} />
            <h2 className={`text-4xl md:text-5xl ${styles.logoText}`}>Skills & Expertise</h2>
          </div>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto ${styles.paraText}`}>
            Hover over a skill to see the associated projects from my portfolio.
          </p>
        </motion.div>

        {/* Core Skills Highlight */}
        <motion.div
          className="mb-16 bg-gray-900/30 border border-red-900/20 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className={`flex flex-wrap justify-center gap-3 ${styles.headText}`}>
            {coreSkills.map(skill => (
              <SkillChip key={`core-${skill}`} skill={skill} isCore={true} />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}