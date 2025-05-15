
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-portfolio-accent1/10"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-portfolio-accent2/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-portfolio-accent1/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-portfolio-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Thilakshi <span className="text-portfolio-muted">Wanigasekara</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-portfolio-muted max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Software Engineering Undergraduate at University of Westminster
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              asChild
              className="bg-portfolio-foreground text-portfolio-background hover:bg-portfolio-foreground/90"
            >
              <a href="#projects">View My Projects</a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-portfolio-accent2 text-portfolio-muted hover:bg-portfolio-accent2/20 hover:text-portfolio-foreground"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-portfolio-muted hover:text-portfolio-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="animate-bounce w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
