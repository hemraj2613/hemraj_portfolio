import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalScrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollY / totalScrollHeight) * 100));
        setScrollProgress(progress);
      }

      if (currentScrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40"
        >
          <button
            id="btn-scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Go to top"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0a0a] hover:bg-[#1e293b] border-2 border-[#38bdf8]/50 hover:border-[#38bdf8] text-[#38bdf8] hover:text-white shadow-xl shadow-[#38bdf8]/10 hover:shadow-[#38bdf8]/30 transition-all duration-300 cursor-pointer"
          >
            {/* SVG Circular Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-15"
              />
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray={132}
                strokeDashoffset={132 - (132 * scrollProgress) / 100}
                strokeLinecap="round"
                className="transition-all duration-150"
              />
            </svg>

            {/* Up Arrow Icon with hover float */}
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 relative z-10" />

            {/* Quick label tooltip on hover */}
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-[#0a0a0a] border border-[#1e293b] text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
              Top ({Math.round(scrollProgress)}%)
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
