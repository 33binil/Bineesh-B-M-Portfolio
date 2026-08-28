import React from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

export const Header = ({ onContactClick, onReplayIntro }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="w-full flex items-center justify-between py-5 sm:py-6 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-[#201d22]/60 select-none"
    >
      <div className="flex items-center gap-2.5 sm:gap-3">
        <span className="text-sm sm:text-base font-bold tracking-[0.25em] text-[#e8e4dc] uppercase">
          BINEESH B M
        </span>
        <span className="text-xs sm:text-sm text-[#635c55] font-mono">//</span>
        <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#9b948d] uppercase hidden sm:inline-block">
          PHOTOGRAPHER & CONTENT CREATOR
        </span>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">

        <button
          onClick={onContactClick}
          className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#16141a] hover:bg-[#1f1b24] border border-[#2b2630] hover:border-[#e05a47]/50 transition-all duration-300"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#c2bbb3] group-hover:text-white uppercase transition-colors">
            AVAILABLE FOR SHOOTS & FREELANCE
          </span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e05a47] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e05a47] shadow-[0_0_8px_#e05a47]"></span>
          </span>
        </button>
      </div>
    </motion.header>
  );
};

