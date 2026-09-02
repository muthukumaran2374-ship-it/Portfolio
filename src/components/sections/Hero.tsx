import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Button } from '../ui/Button';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { name, role, heroHeadline, heroDescription } = portfolioData.personal;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-violet-600/10 rounded-full blur-[100px] mix-blend-screen opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Text Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-text-secondary uppercase">{role}</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            {heroHeadline}
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-xl mb-10 leading-relaxed"
          >
            {heroDescription}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Button href="#projects" size="lg" className="group" data-cursor="VIEW">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="#contact" variant="secondary" size="lg" data-cursor="OPEN">
              Let's Connect
            </Button>
          </motion.div>
        </motion.div>

        {/* Portrait / Visual */}
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.9, clipPath: 'inset(100% 0 0 0 rounded-3xl)' }}
          animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0 0 0 rounded-3xl)' }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-secondary-background border border-white/10 group">
            {/* Fallback pattern / gradient if no image */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-background to-[#1a1a2e] opacity-80" />
            
            {/* Minimal Grid Pattern */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-40">
              <span className="text-[120px] font-bold text-white/5 leading-none mb-4 tracking-tighter">MS</span>
              <p className="text-sm font-mono text-white/40 uppercase tracking-widest">{name}</p>
            </div>

            {/* Profile Image */}
            <img src="/profile.png" alt={name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
            {/* Glass overlay effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          {/* Decorative floating element */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-secondary-background border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">26'</span>
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Graduation</p>
                <p className="text-sm text-white font-medium">Class of 2026</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] text-text-secondary uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};
