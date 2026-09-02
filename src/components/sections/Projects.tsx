import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Selected Projects" subtitle="Work" />
        
        <div className="space-y-24 md:space-y-32 mt-16">
          {projects.map((project, index) => (
            <AnimatedReveal key={project.id} delay={0.1} className="relative group">
              <div className={`flex flex-col gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
                
                {/* Visual */}
                <div className="w-full lg:w-3/5">
                  <motion.div 
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-video rounded-2xl overflow-hidden bg-secondary-background border border-white/10 group-hover:border-white/20 transition-colors cursor-pointer"
                    data-cursor="VIEW"
                  >
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background to-secondary-background">
                        <div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center">
                          <span className="text-white/20 font-mono tracking-widest text-sm uppercase">Coming Soon</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-2/5 flex flex-col items-start">
                  <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    {project.liveDemo && (
                      <Button href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="group/btn" data-cursor="OPEN">
                        Live Demo
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                    )}
                    {project.github && (
                      <Button href={project.github} variant="outline" target="_blank" rel="noopener noreferrer" data-cursor="CODE">
                        <Code className="mr-2 w-4 h-4" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
