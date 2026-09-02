import React from 'react';
import { AnimatedReveal } from './AnimatedReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'left' 
}) => {
  return (
    <div className={`mb-16 md:mb-24 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <AnimatedReveal>
          <span className="text-accent font-medium tracking-wider uppercase text-sm mb-3 block">
            {subtitle}
          </span>
        </AnimatedReveal>
      )}
      <AnimatedReveal delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          {title}
        </h2>
      </AnimatedReveal>
      
      <AnimatedReveal delay={0.2}>
        <div className={`h-px w-full bg-gradient-to-r from-white/20 to-transparent mt-8 ${alignment === 'center' ? 'via-white/20 from-transparent to-transparent' : ''}`} />
      </AnimatedReveal>
    </div>
  );
};
