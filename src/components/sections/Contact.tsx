import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { Button } from '../ui/Button';
import { Mail, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const { email, phone } = portfolioData.personal;

  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <AnimatedReveal>
          <span className="text-accent font-medium tracking-wider uppercase text-sm mb-6 block">
            What's Next?
          </span>
        </AnimatedReveal>
        
        <AnimatedReveal delay={0.1}>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Let's build something <br className="hidden md:block"/> meaningful.
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <p className="text-xl text-text-secondary mb-16 max-w-2xl mx-auto">
            Open to learning opportunities, internships, entry-level roles, and professional collaborations.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button href={`mailto:${email}`} size="lg" className="w-full sm:w-auto text-lg px-10 h-16 group" data-cursor="OPEN">
            <Mail className="mr-3 w-5 h-5 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform" />
            Start a Conversation
          </Button>
          
          <Button href={`tel:${phone.replace(/\s+/g, '')}`} variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-10 h-16 group">
            <Phone className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
            {phone}
          </Button>
        </AnimatedReveal>
      </div>

      {/* Abstract background shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-background to-background" />
      </div>
    </section>
  );
};
