
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="portfolio-divider mx-auto w-24 mb-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/dd44867f-92eb-4e7f-aadf-139bfb379eb6.png" 
                alt="Thilakshi Wanigasekara" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-portfolio-accent2 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-portfolio-accent1 rounded-lg -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-medium text-portfolio-foreground">
              I'm <span className="text-portfolio-muted">Thilakshi Wanigasekara</span>, a Software Engineering Student
            </h3>
            
            <p className="text-portfolio-muted">
              Motivated software engineering undergraduate in my second year at University of Westminster, with a solid foundation in software development and database management. Proficient in Python, Java, with hands-on experience building web-based systems.
            </p>
            
            <p className="text-portfolio-muted">
              Eager to apply my technical skills and learn from experienced professionals during an IT internship to contribute to innovative solutions.
            </p>
            
            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-portfolio-accent2" />
                <a href="mailto:mathawanigasekara2001@gmail.com" className="hover:text-portfolio-accent2 transition-colors">
                  mathawanigasekara2001@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-portfolio-accent2" />
                <span>0742523714</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-portfolio-accent2" />
                <span>Wanigasekara Place, Field View, Kapugama Road, Matara</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={18} className="text-portfolio-accent2" />
                <a href="https://www.linkedin.com/in/malsha-wanigasekara" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent2 transition-colors">
                  linkedin.com/in/malsha-wanigasekara
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github size={18} className="text-portfolio-accent2" />
                <a href="https://github.com/Thilakshi01" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent2 transition-colors">
                  github.com/Thilakshi01
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
