import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedReveal } from '../ui/AnimatedReveal';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary-background/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Experience" subtitle="Practical Work" />
        
        <div className="max-w-4xl mx-auto mt-12">
          {experience.map((exp, index) => (
            <AnimatedReveal key={index} delay={index * 0.1} className="relative">
              <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-8 border-b border-white/10 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    <span className="text-accent text-lg">{exp.company}</span>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-4 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                      <span className="text-text-secondary leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
