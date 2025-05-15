
import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const technicalSkills = [
  { name: 'Java', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Python', level: 75 },
  { name: 'JavaScript', level: 85 },
  { name: 'SQL', level: 70 },
];

const softSkills = [
  'Team Work', 
  'Time Management', 
  'Leadership', 
  'Hard Working'
];

const languages = [
  'English', 'Sinhala', 'Tamil'
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="portfolio-divider mx-auto w-24 mb-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-medium mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-portfolio-foreground">{skill.name}</span>
                    <span className="text-sm text-portfolio-muted">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-portfolio-accent1/20">
                    <div 
                      className="h-full bg-gradient-to-r from-portfolio-accent2 to-portfolio-accent1 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </Progress>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-medium mb-6">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    className="bg-portfolio-accent2/10 hover:bg-portfolio-accent2/20 px-4 py-2 rounded-lg text-portfolio-muted transition-colors"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                  >
                    {language}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-medium mb-8">Soft Skills</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-portfolio-accent1/10 hover:bg-portfolio-accent1/20 px-4 py-2 rounded-lg text-portfolio-muted transition-colors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="text-2xl font-medium mb-6">Education</h3>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-6 border-l-2 border-portfolio-accent2"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-portfolio-accent2"></div>
                  <h4 className="text-lg font-medium">BEng. (Hons) Software Engineering</h4>
                  <p className="text-portfolio-muted">University of Westminster | Oct 2023 - Present</p>
                  <p className="text-sm text-portfolio-muted mt-1">Informatic Institute of Technology Sri Lanka affiliated with University of Westminster, Colombo</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative pl-6 border-l-2 border-portfolio-accent1"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-portfolio-accent1"></div>
                  <h4 className="text-lg font-medium">Certificate course in Computer Science</h4>
                  <p className="text-portfolio-muted">NIBM, Matara | 2023</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative pl-6 border-l-2 border-portfolio-accent2"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-portfolio-accent2"></div>
                  <h4 className="text-lg font-medium">G.C.E.(A/L)</h4>
                  <p className="text-portfolio-muted">ST. Mary's Convent, Matara | 2023</p>
                  <p className="text-sm text-portfolio-muted mt-1">Physical Science Stream</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
