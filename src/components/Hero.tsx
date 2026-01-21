import { Code,Linkedin, Github, ChevronLeft,ChevronRight,Sparkles} from 'lucide-react';
import styles from '../styles/font.module.css';
import hero2 from './../assets/gallery/hero2.png';
import hero from './../assets/gallery/hero.png';
import { motion} from 'motion/react';
import { useEffect, useRef } from 'react';
import Typed from "typed.js";
import { tech } from '../data/data';
import ParticlesBackground from '../assets/ParticlesBackground';

export function Hero() {
const typedInstance = useRef<Typed | null>(null);
const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
  if (el.current) {
    typedInstance.current = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Full-Stack Developer",
        "UI/UX Designer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  }

  return () => {
    typedInstance.current?.destroy();
  };
}, []);

  return (
    <div className="relative min-h-screen pt-24" id="home">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>
    <div className="absolute inset-0 overflow-hidden">
  <ParticlesBackground />
</div>
      {/* Content */}
      <section className="relative z-10 w-full flex items-center py-20 md:py-28" style={{"overflowX":"hidden"}}>
        <div className="w-full min-h-[calc(100vh-6rem)] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 mb:gap-16 items-center">
    
            {/* LEFT – Text Content */}
          <div className="max-w-2xl flex flex-col justify-center md:justify-center">
            <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            >
              
              <span className={`${styles.logoText} text-red-600 text-5xl md:text-6xl tracking-wider`}>
               Hi
              </span>
              <Sparkles className="text-red-600" size={32} />
            </motion.div>

            <motion.h1 
            className={`${styles.logoText} text-5xl md:text-6xl mb-4`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm <br />Subhajit Dutta
            </motion.h1>

            <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            >
              <ChevronLeft className="text-red-600" size={32} />
              <span className={`${styles.logoText} text-red-600 tracking-wider`} ref={el}>
                {el.current ? el.current.textContent : "Web Developer"}
              </span>
              <ChevronRight className="text-red-600" size={32} />
            </motion.div>

            <motion.p 
            className={`${styles.paraText} text-lg md:text-xl text-gray-300 max-w-xl mb-6`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            >
              A passionate web developer specializing in modern JavaScript frameworks, scalable backend systems,
              and intuitive user interfaces. Transforming ideas into powerful web applications.
            </motion.p>

            <motion.div 
            className="flex gap-3 mb-6 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            >
              {tech.map((tech) => (
                <div key={tech} className="px-4 py-2 bg-gray-900/80 rounded backdrop-blur-sm hover:bg-red-600/30 transition-colors">
                  <span className={`${styles.logoText} text-red-600`}>{tech}</span>
                </div>
              ))}
            </motion.div>

      <motion.div 
      className="flex flex-wrap gap-4 items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      >
        <a href="https://www.linkedin.com/in/duttasubhajit956/"><Linkedin className="text-red-600" size={28} /></a>
        <a href="https://github.com/Subhaji-Dutta"><Github className="text-red-600" size={28} /></a>
        {/* <a href="#contact"><Twitter className="text-red-600" size={28} /></a> */}

        <a className={`${styles.logoText} flex items-center gap-2 bg-white text-black px-8 py-3 rounded hover:bg-white/90`}>
          <Code size={20} />
          Resume
        </a>
      </motion.div>
    </div>

{/* RIGHT – Glowing Developer Sphere */}
        <motion.div 
        className="relative w-full flex justify-center md:justify-end items-center pr-0 md:pr-16"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        >

  {/* Glow container */}
  <div className="relative flex items-center justify-center pointer-events-none">

    {/* Outer glow */}
    <div
      className="absolute rounded-full"
      style={{
        width: "clamp(320px, 50vw, 600px)",
    height: "clamp(320px, 50vw, 600px)",
    background: "#e50914",
    opacity: 0.18,
    filter: "blur(clamp(80px, 10vw, 160px))",
      }}
    />
    {/* Ring */}
<div
  className="relative z-30 flex items-center justify-center"
  style={{
    width: "clamp(180px, 28vw, 320px)",
    height: "clamp(180px, 28vw, 320px)",
  }}
>
  
  {/* Base ring */}
  <motion.div
    className="absolute inset-0 rounded-full"
    style={{
      border: "clamp(6px, 1.2vw, 14px) solid #e50914",
      background: "rgba(229,9,20,0.05)",
      boxSizing: "border-box",
      zIndex: 5,
    }}
    animate={{ y: [12, 20, 12] }}
                    transition={{ duration: 6, repeat: Infinity }}
  />

  {/* Image ON TOP of ring */}
  <div
    className="absolute rounded-full overflow-hidden"
    style={{
      width: "clamp(220px, 34vw, 380px)",   // 🔥 bigger than ring
      height: "clamp(220px, 34vw, 380px)",
      zIndex: 20,
    }}
  >
    <img
      src={hero2}
      alt="Hero"
      className="w-full h-full object-cover"
    />
  </div>
</div>
   {/* < */}
   
   <div
  className="absolute z-[1000] pointer-events-none select-none"
  style={{
    top: "15%",
    left: "-15%",
    transform: "translate(-50%, -50%)",
    fontSize: "clamp(80px, 10vw, 180px)",
    WebkitTextStroke: "4px #ff0000",
    color: "transparent",
    textShadow: "0 0 30px rgba(255,0,0,0.6)",
  }}
>
  &lt;
</div>

          {/* > */}
         <div
  className="absolute z-[1000] pointer-events-none select-none"
  style={{
    bottom: "15%",
    right: "-15%",
    transform: "translate(50%, 50%)",
    fontSize: "clamp(80px, 10vw, 180px)",
    WebkitTextStroke: "4px #ff0000",
    color: "transparent",
    textShadow: "0 0 30px rgba(255,0,0,0.6)",
  }}
>
  &gt;
</div>



</div>
  </motion.div>
  </div></div>
</section>


      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}