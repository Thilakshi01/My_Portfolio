import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  const socialLinks = [
    { name: 'Facebook', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-portfolio-background to-portfolio-accent1/5">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="portfolio-divider mx-auto w-24 mb-8"></div>
          <p className="text-portfolio-muted max-w-2xl mx-auto">
            Have a project in mind or want to say hello? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-medium">Let's Connect</h3>
            <p className="text-portfolio-muted">
              I'm currently looking for internship opportunities in software engineering and development. Feel free to reach out if you think we can work together.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-portfolio-accent2 mr-4" size={20} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-portfolio-muted">Wanigasekara Place, Field View, Kapugama Road, Matara</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-portfolio-accent2 mr-4" size={20} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-portfolio-muted">
                    <a href="mailto:mathawanigasekara2001@gmail.com" className="hover:text-portfolio-accent2 transition-colors">
                      mathawanigasekara2001@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-portfolio-accent2 mr-4" size={20} />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-portfolio-muted">0742523714</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Linkedin className="text-portfolio-accent2 mr-4" size={20} />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-portfolio-muted">
                    <a href="https://www.linkedin.com/in/malsha-wanigasekara" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent2 transition-colors">
                      linkedin.com/in/malsha-wanigasekara
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Github className="text-portfolio-accent2 mr-4" size={20} />
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-portfolio-muted">
                    <a href="https://github.com/Thilakshi01" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent2 transition-colors">
                      github.com/Thilakshi01
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-portfolio-accent1/10 p-6 rounded-lg">
              <h4 className="text-xl font-medium mb-3">Achievements</h4>
              <ul className="text-portfolio-muted space-y-3">
                <li>• National Sports Festival - 2016 (Inter district sports competition - Wushu second place)</li>
                <li>• Wushu championship - 2018 (Inter school Senior girls group event)</li>
                <li>• Wushu 1st place under 18 girls' event (Thaigiquan) - 2018</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-portfolio-muted">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-portfolio-background border-portfolio-accent1/30 focus-visible:ring-portfolio-accent2"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-portfolio-muted">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-portfolio-background border-portfolio-accent1/30 focus-visible:ring-portfolio-accent2"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-portfolio-muted">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  className="bg-portfolio-background border-portfolio-accent1/30 focus-visible:ring-portfolio-accent2"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-portfolio-muted">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={5}
                  className="bg-portfolio-background border-portfolio-accent1/30 focus-visible:ring-portfolio-accent2 resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-portfolio-foreground text-portfolio-background hover:bg-portfolio-foreground/90 flex items-center w-full md:w-auto"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </Button>
            </form>
            
            <div className="mt-10 p-6 bg-portfolio-accent2/10 rounded-lg">
              <h4 className="text-xl font-medium mb-4">Extracurricular Activities</h4>
              <ul className="space-y-3 text-portfolio-muted">
                <li className="flex items-start">
                  <span className="inline-block mr-2">•</span>
                  <span>Participated HaXtreme 3.0 organized by Faculty of Engineering, University of Ruhuna (2024)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mr-2">•</span>
                  <span>Participated in HULTPRIZE (2024-2025)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mr-2">•</span>
                  <span>Participated in Xtreme Encode, conducted by ENCIDE MACE in collaboration with IEEXTREME 18.0 Region 10 (2024-2025)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mr-2">•</span>
                  <span>Former team leader of school wushu team (Mar 2019 - Mar 2020)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
