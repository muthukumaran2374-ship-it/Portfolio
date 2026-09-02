import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export const Courses: React.FC = () => {
  const { courses } = portfolioData;

  return (
    <section id="courses" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Learning & Certifications" subtitle="Continuous Growth" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {courses.map((course, index) => (
            <AnimatedReveal key={index} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors h-full flex flex-col group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen size={18} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                  {course.title}
                </h4>
                <div className="mt-auto pt-6 flex justify-between items-center text-sm">
                  <span className="text-text-secondary">{course.platform}</span>
                  <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-text-secondary font-medium">
                    {course.category}
                  </span>
                </div>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
