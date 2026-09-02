import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedReveal } from '../ui/AnimatedReveal';

export const Interests: React.FC = () => {
  const { interests } = portfolioData;

  return (
    <section className="py-24 md:py-32 bg-secondary-background/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Beyond the Screen" subtitle="Interests & Hobbies" alignment="center" />
        
        <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-4xl mx-auto">
          {interests.map((interest, index) => (
            <AnimatedReveal key={index} delay={index * 0.1}>
              <div className="px-6 py-4 rounded-full bg-background border border-white/10 text-white font-medium hover:border-accent/50 hover:bg-white/5 transition-all cursor-default">
                {interest}
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
