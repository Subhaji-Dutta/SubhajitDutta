import { ImageWithFallback } from './figma/ImageWithFallback';
import {Palette, Zap, Users } from 'lucide-react';
import styles from '../styles/font.module.css';
import {experience } from '../data/data';
import aboutImage from '../assets/gallery/AboutHero.png'
import { Stack } from './Stack';
import { motion } from 'motion/react';



export function AboutPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=800&fit=crop"
            alt="About header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1 
          className={`${styles.logoText} text-5xl md:text-7xl mb-6`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>
          <motion.p 
          className={`${styles.headText} text-xl md:text-2xl text-gray-300`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           From database to interface, I build it end to end.
          </motion.p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`${styles.logoText} mb-6`}>My Story</h2>
            <div className={`${styles.paraText} space-y-4 text-gray-300`}>
              <p>
                I’m Subhajit Dutta, a full-stack developer who builds web products from the interface down to the database. I work mainly with React, Next.js, TypeScript, Node.js and Python, and I care that what I ship is as pleasant to use as it is to maintain.
              </p>
              <p>
                I started with a B.Tech in Electrical Engineering (MAKAUT, 2023) and moved into web development professionally. At Exceed Robtix Solutions I built and taught web development, including LMS portals for 100+ learners. At Madhu Jayanti International I built an inventory system with PHP and MySQL used by 50+ employees.
              </p>
              <p>
                Since 2025 I’ve been freelancing for local businesses and institutions while building my own full-stack projects, including an AI study planner (Next.js, Prisma, Gemini) and a multi-agent travel planner (FastAPI, Groq). I’m also pursuing an MCA at VIT to strengthen my fundamentals.
              </p>
              <p>I’m open to full-time software developer roles in Kolkata, Hyderabad and Bangalore. If you’re building something where the backend and the interface both matter, let’s talk.</p>
            </div>
          </motion.div>
          
          <motion.div 
          className="relative h-[500px] rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImage}
              alt="Workspace"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`${styles.logoText} mb-8 text-center`}>Skills & Expertise</h2>
          <Stack />
        </motion.div>
        

        {/* Experience */}
        <motion.div className="mb-20 pt-8"
        initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`${styles.logoText} mb-8 text-center`}>Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div 
              key={index} 
              className="relative pl-8 pb-12 border-l-2 border-gray-800 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-red-600 rounded-full" />
                <div className={`${styles.logoText} text-red-600 text-sm mb-2`}>{exp.year}</div>
                <h3 className={`${styles.headText} mb-1`}>{exp.title}</h3>
                <div className={`${styles.logoText} text-gray-400 mb-2`}>{exp.company}</div>
                <ul className={`${styles.paraText} text-gray-300 text-sm list-disc ml-5`}>
                    {exp.description.map((point: string, index: number) => (
                      <li key={index}>{point}</li>
                    ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`${styles.logoText} mb-8 text-center`}>What I Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
            className="bg-gray-900 p-8 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Zap className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className={`${styles.headText} mb-3`}>Innovation</h3>
              <p className={`${styles.paraText} text-gray-400 text-sm`}>
                Staying ahead with cutting-edge technologies and creative solutions
              </p>
            </motion.div>
            <motion.div 
            className="bg-gray-900 p-8 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Palette className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className={`${styles.headText} mb-3`}>Design Excellence</h3>
              <p className={`${styles.paraText} text-gray-400 text-sm`}>
                Creating beautiful, intuitive interfaces that users love
              </p>
            </motion.div>
            <motion.div 
            className="bg-gray-900 p-8 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Users className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className={`${styles.headText} mb-3`}>Collaboration</h3>
              <p className={`${styles.paraText} text-gray-400 text-sm`}>
                Working closely with clients and teams to achieve shared goals
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
