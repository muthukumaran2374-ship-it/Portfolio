import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedReveal } from '../ui/AnimatedReveal';
import { Button } from '../ui/Button';

export const About: React.FC = () => {
  const { introduction } = portfolioData.about;

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="About Me" subtitle="Introduction" />

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">

          <div className="md:col-span-5">
            <AnimatedReveal>
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight">
                Driven by curiosity, focused on building impactful digital
                experiences.
              </h3>
            </AnimatedReveal>
          </div>

          <div className="md:col-span-7">
            <AnimatedReveal delay={0.2}>
              <div className="prose prose-invert prose-lg max-w-none text-text-secondary leading-relaxed">
                <p>{introduction}</p>

                <p className="mt-6">
                  My academic journey has provided me with a strong foundation
                  in core computer science principles. Beyond the classroom, I
                  actively seek out opportunities to expand my skill set,
                  whether through online courses, practical projects, or
                  exploring the latest design trends.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal
              delay={0.3}
              className="mt-12 grid grid-cols-2 gap-8 border-t border-white/5 pt-8"
            >
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-widest mb-2 font-medium">
                  Location
                </p>
                <p className="text-white">Salem, Tamil Nadu</p>
              </div>

              <div>
                <p className="text-xs text-text-secondary uppercase tracking-widest mb-2 font-medium">
                  Languages
                </p>
                <p className="text-white">Tamil, English</p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal
              delay={0.4}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              {/* View Resume */}
              <Button
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="VIEW"
              >
                View Resume
              </Button>

              {/* Download Resume */}
              <a
                href="/resume.pdf"
                download="Muthukumaran-S-Resume.pdf"
              >
                <Button
                  variant="outline"
                  data-cursor="DOWNLOAD"
                >
                  Download Resume
                </Button>
              </a>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};