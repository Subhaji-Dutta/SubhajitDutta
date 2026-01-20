import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, Filter } from 'lucide-react';
import { allProjects } from '../data/projects';
import styles from '../styles/font.module.css';
import { motion } from 'framer-motion';

const categories = ["Full-Stack", "Frontend","UI Design", "All"];

interface ProjectsPageProps {
  onProjectClick: (projectId: number) => void;
}

export function ProjectsPage({ onProjectClick }: ProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="relative h-64 md:h-80 flex items-center justify-center mb-12">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop"
            alt="Projects header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
          className={`${styles.logoText} text-5xl md:text-6xl mb-4`}
          initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >Projects</motion.h1>
          <motion.p 
          className={`${styles.paraText} text-xl text-gray-300 max-w-2xl mx-auto`}
          initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore my diverse portfolio spanning web development, data analytics, design, and robotics
          </motion.p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div 
        className="flex flex-col md:flex-row gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Search */}
          <div className="relative flex--1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
            />
          </div>
          <div className="relative flex-1"></div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded px-3">
            <Filter size={20} className="text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-900 border border-gray-800 rounded px-4 py-3 text-white focus:outline-none focus:border-red-600 cursor-pointer"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project,index) => (
            <motion.div
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <div className={`${styles.logoText} text-red-600 text-sm mb-2`}>{project.category}</div>
                <h3 className={`${styles.headText} mb-2`}>{project.title}</h3>
                <p className={`${styles.paraText} text-gray-400 text-sm mb-4`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
