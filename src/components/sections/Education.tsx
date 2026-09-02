import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { TimelineItem } from '../ui/TimelineItem';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 md:py-32 bg-secondary-background/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Education" subtitle="Academic Background" alignment="center" />
        
        <div className="max-w-4xl mx-auto mt-12 md:mt-20">
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.degree}
              subtitle={item.institution}
              date={item.period}
              description={item.description}
              delay={index * 0.2}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
