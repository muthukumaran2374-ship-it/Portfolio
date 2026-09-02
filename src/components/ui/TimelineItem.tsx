import React from 'react';
import { AnimatedReveal } from './AnimatedReveal';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date?: string;
  description?: string;
  delay?: number;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  date,
  description,
  delay = 0,
  isLast = false
}) => {
  return (
    <AnimatedReveal delay={delay} className="relative pl-8 md:pl-0">
      
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-12 gap-8 items-start relative">
        <div className="col-span-3 text-right pt-1">
          {date && (
            <span className="text-sm font-mono text-text-secondary uppercase tracking-wider">{date}</span>
          )}
        </div>
        
        <div className="col-span-1 flex flex-col items-center justify-start h-full relative">
          <div className="w-4 h-4 rounded-full bg-secondary-background border-2 border-accent z-10 mt-1.5" />
          {!isLast && (
            <div className="absolute top-5 bottom-[-4rem] left-1/2 -translate-x-1/2 w-px bg-white/10" />
          )}
        </div>
        
        <div className="col-span-8 pb-16">
          <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
          <span className="text-accent text-sm font-medium mb-4 block">{subtitle}</span>
          {description && (
            <p className="text-text-secondary leading-relaxed max-w-2xl">{description}</p>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative pb-12">
        <div className="absolute left-[-1.75rem] top-1.5 w-3 h-3 rounded-full bg-secondary-background border-2 border-accent z-10" />
        {!isLast && (
          <div className="absolute left-[-1.4rem] top-4 bottom-[-1rem] w-px bg-white/10" />
        )}
        
        {date && (
          <span className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2 block">{date}</span>
        )}
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <span className="text-accent text-sm font-medium mb-3 block">{subtitle}</span>
        {description && (
          <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
        )}
      </div>
    </AnimatedReveal>
  );
};
