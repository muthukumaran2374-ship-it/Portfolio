import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { AnimatedReveal } from '../ui/AnimatedReveal';

export const Highlights: React.FC = () => {
  const { highlights } = portfolioData;

  return (
    <section className="py-12 md:py-24 border-y border-white/5 bg-secondary-background/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-x divide-white/5">
          {highlights.map((item, index) => (
            <AnimatedReveal 
              key={index} 
              delay={index * 0.1}
              className={`flex flex-col items-center text-center px-4 ${index === 0 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <span className="text-xs text-text-secondary uppercase tracking-widest font-medium mb-3 block">
                {item.title}
              </span>
              <span className="text-white font-medium text-lg md:text-base">
                {item.description}
              </span>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
