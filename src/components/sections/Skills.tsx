import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const SkillCategory = ({ title, items, delay }: { title: string, items: string[], delay: number }) => (
    <AnimatedReveal delay={delay} className="flex flex-col">
      <h3 className="text-xl font-medium text-white mb-6 flex items-center">
        <span className="w-8 h-px bg-accent/50 mr-4" />
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-text-secondary hover:text-white transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </AnimatedReveal>
  );

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="Skills & Arsenal" subtitle="Expertise" />

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <SkillCategory title="Technical" items={skills.technical} delay={0.1} />
          <SkillCategory title="Productivity" items={skills.productivity} delay={0.2} />
          <SkillCategory title="Professional" items={skills.professional} delay={0.3} />
        </div>
      </div>
    </section>
  );
};
