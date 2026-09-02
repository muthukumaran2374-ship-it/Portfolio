import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Highlights } from './components/sections/Highlights';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Courses } from './components/sections/Courses';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Interests } from './components/sections/Interests';
import { ValueProposition } from './components/sections/ValueProposition';
import { Contact } from './components/sections/Contact';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate minimal loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter text-white mb-4"
            >
              MS
            </motion.div>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full bg-accent"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <main className="flex-grow">
              <Hero />
              <About />
              <Highlights />
              <Skills />
              <Education />
              <Courses />
              <Experience />
              <Projects />
              <Interests />
              <ValueProposition />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
