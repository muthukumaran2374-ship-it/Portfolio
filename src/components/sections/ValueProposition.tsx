import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { AnimatedReveal } from '../ui/AnimatedReveal';

export const ValueProposition: React.FC = () => {
  const { valueProposition } = portfolioData;

  return (
    <section className="py-24 md:py-32 relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 md:order-1 space-y-12">
            {valueProposition.map((value, index) => (
              <AnimatedReveal key={index} delay={index * 0.1}>
                <div className="flex gap-6 group">
                  <span className="text-2xl font-mono font-bold text-white/20 group-hover:text-accent transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <div className="order-1 md:order-2">
            <AnimatedReveal direction="left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Why work <br/><span className="text-text-secondary">with me?</span>
              </h2>
              <p className="text-xl text-text-secondary">
                I bring a combination of academic foundation, practical problem-solving skills, and a strong drive for continuous improvement.
              </p>
            </AnimatedReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
};
