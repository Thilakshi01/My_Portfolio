
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'CHEAP-CHASER - Trip Planning System',
    description: 'A system that helps travelers get a trip plan according to their budget. Built the front-end part using React.js.',
    tags: ['React.js', 'JavaScript', 'Frontend Development'],
    link: '#',
    color: 'bg-portfolio-accent1/20',
    role: 'Group Leader'
  },
  {
    title: 'Zero Waste Zero Hunger',
    description: 'Web design and development project using HTML, CSS, and JavaScript. Created home page and feedback form in common template with navigation bar, footer, and logo.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    color: 'bg-portfolio-accent2/20',
    role: 'Team Member'
  },
  {
    title: 'Plane Management System',
    description: 'Successfully completed plane management project including 2D arrays.',
    tags: ['Java', 'Data Structures', 'Individual Project'],
    link: '#',
    color: 'bg-portfolio-accent1/20',
    role: 'Individual Project'
  },
  {
    title: 'Real-time Event Ticketing System',
    description: 'A full-stack system with multithreading and concurrency.',
    tags: ['OOP', 'Multithreading', 'Concurrency'],
    link: '#',
    color: 'bg-portfolio-accent2/20',
    role: 'Individual Project'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gradient-to-b from-portfolio-background to-portfolio-accent1/5">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="portfolio-divider mx-auto w-24 mb-8"></div>
          <p className="text-portfolio-muted max-w-2xl mx-auto">
            Showcasing my academic and personal projects developed throughout my education journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className={cn("h-16 flex items-center justify-center", project.color)}>
                  <div className="text-portfolio-muted text-center px-4">
                    <p>{project.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <a 
                      href={project.link} 
                      className="text-portfolio-muted hover:text-portfolio-foreground transition-colors"
                      aria-label={`View ${project.title} project`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <p className="text-portfolio-muted mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-portfolio-accent1/10 hover:bg-portfolio-accent1/20 text-portfolio-muted border-portfolio-accent1/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
