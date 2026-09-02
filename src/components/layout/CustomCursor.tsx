import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    // Check if device is mobile or touch
    const checkMobile = () => {
      const matchMedia = window.matchMedia('(pointer: coarse)');
      setIsMobile(matchMedia.matches || window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
        if (target.dataset.cursor) {
          setCursorText(target.dataset.cursor);
        } else if (target.closest('[data-cursor]')) {
          setCursorText((target.closest('[data-cursor]') as HTMLElement).dataset.cursor || "");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering && !cursorText ? 0 : 1,
          opacity: cursorText ? 0 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      
      {/* Hover ring / Text container */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99] flex items-center justify-center text-[10px] font-bold tracking-wider text-background"
        animate={{
          x: mousePosition.x - (cursorText ? 32 : 16),
          y: mousePosition.y - (cursorText ? 32 : 16),
          width: cursorText ? 64 : 32,
          height: cursorText ? 64 : 32,
          backgroundColor: cursorText ? '#f9fafb' : 'transparent',
          border: cursorText ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
          scale: isHovering && !cursorText ? 1.5 : 1,
          borderRadius: '50%'
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      >
        {cursorText}
      </motion.div>
    </>
  );
};
