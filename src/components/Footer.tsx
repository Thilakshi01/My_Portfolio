
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-portfolio-foreground text-portfolio-background">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-semibold mb-2">Thilakshi Wanigasekara</div>
            <p className="text-portfolio-background/70 text-sm">
              Software Engineering Undergraduate
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Thilakshi01" target="_blank" rel="noopener noreferrer" className="text-portfolio-background/70 hover:text-portfolio-background transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/malsha-wanigasekara" target="_blank" rel="noopener noreferrer" className="text-portfolio-background/70 hover:text-portfolio-background transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:mathawanigasekara2001@gmail.com" className="text-portfolio-background/70 hover:text-portfolio-background transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-portfolio-background/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-portfolio-background/70">
            © {currentYear} Thilakshi Wanigasekara. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <li>
                <a href="#about" className="text-portfolio-background/70 hover:text-portfolio-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-portfolio-background/70 hover:text-portfolio-background transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-portfolio-background/70 hover:text-portfolio-background transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-portfolio-background/70 hover:text-portfolio-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
