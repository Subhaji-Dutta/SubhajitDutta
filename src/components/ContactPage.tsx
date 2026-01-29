import { useState } from 'react';
import { Mail, Phone, MapPin, Send} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import styles from '../styles/font.module.css';
import {motion} from 'motion/react';
import { socialLinks} from '../data/data';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="relative h-64 md:h-80 flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop"
            alt="Contact header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
          className={`${styles.logoText} text-5xl md:text-6xl mb-4`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h1>
          <motion.p 
          initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          className={`${styles.headText} text-xl text-gray-300 max-w-2xl mx-auto`}>
            Let's discuss your next project or just say hello
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`${styles.logoText} mb-6`}>Contact Information</h2>
            <p className={`${styles.paraText} text-gray-300 mb-8`}>
              Feel free to reach out through any of these channels. I'm always open to discussing 
              new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6 mb-10">
              <motion.div 
              className="flex items-start gap-4"
               initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}>

                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-red-600" size={24} />
                </div>
                <div>
                  <div className={`${styles.logoText} mb-1`}>Email</div>
                  <a href="mailto:duttasubhajit956@gmail.com" className={`${styles.paraText} text-gray-400 hover:text-red-600 transition-colors`}>
                    duttasubhajit956@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}>

                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-red-600" size={24} />
                </div>
                <div>
                  <div className={`${styles.logoText} mb-1`}>Phone</div>
                  <a href="tel:+918274932405" className={`${styles.paraText} text-gray-400 hover:text-red-600 transition-colors`}>
                    +91 8274932405
                  </a>
                </div>
              </motion.div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <div className={`${styles.logoText} mb-1`}>Location</div>
                  <p className={`${styles.paraText} text-gray-400`}>Kolkata,WB, INDIA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
             initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className={`${styles.logoText} mb-4`}>Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) =>(
                          <motion.a
                            key={link.Label}
                            href={link.href}
                            className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors" 
                            target="_blank"
                             rel="noopener noreferrer"
                             whileHover={{ scale: 1.2, y: -2 }}
                                  whileTap={{ scale: 0.9 }}
                                  initial={{ opacity: 0, scale:1 }}
                                  whileInView={{ opacity: 1, scale:1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3 }}
                            >
                              <link.icon size={24} />
                          </motion.a>
                        ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className={`${styles.logoText} mb-2 pt-2`}>Availability</h3>
              <p className={`${styles.paraText} text-gray-400 text-sm mb-4`}>
                Currently accepting new projects and freelance opportunities
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className={`${styles.logoText} text-green-500 text-sm`}>Available for hire</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
          initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className={`${styles.logoText} mb-6`}>Send a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-600/20 border border-green-600 rounded-lg text-green-500">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black border border-gray-800 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className={`${styles.logoText} w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded flex items-center justify-center gap-2 transition-colors`}
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map or Additional Info */}
        <motion.div 
        className="mt-16 h-64 md:h-96 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&h=600&fit=crop"
            alt="Office location"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
