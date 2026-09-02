import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-white/5 bg-secondary-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col space-y-2">
          <span className="text-xl font-bold tracking-tight text-white">{portfolioData.personal.name}</span>
          <span className="text-sm text-text-secondary max-w-sm">
            B.Sc. Computer Science | Technology • Design • Learning
          </span>
        </div>

        <div className="flex flex-col md:items-end space-y-4 md:space-y-2">
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <a href="#about" className="text-text-secondary hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-text-secondary hover:text-white transition-colors">Projects</a>
            <a href={`mailto:${portfolioData.personal.email}`} className="text-text-secondary hover:text-white transition-colors">Email</a>
          </div>
          <span className="text-xs text-text-secondary/60">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex justify-end">
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-white/30 transition-all group"
          aria-label="Back to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
