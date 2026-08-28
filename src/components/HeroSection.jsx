import React from 'react';
import { motion } from 'motion/react';
import { Camera, Layers, Heart } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData.js';
import { RotatingBadge } from './RotatingBadge.jsx';
import { ASSETS } from '../assets/assets.js';

export const HeroSection = ({ onQuoteClick, startAnimation }) => {
  const start = !!startAnimation;
  return (
    <section className="relative w-full overflow-hidden pt-0 pb-6 sm:pb-1">
      
      {/* 1. Full-Width Edge-to-Edge Display Title: PORTFOLIO */}
      <div className="w-full flex justify-center items-center pointer-events-none select-none px-0 overflow-hidden mb-2 sm:mb-4 pt-2 sm:pt-4">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={start ? { opacity: 0.95, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-bebas text-[24vw] leading-[0.88] tracking-[0.015em] text-[#e8e4dc] opacity-95 text-center transition-transform duration-700 w-full whitespace-nowrap"
        >
          PORTFOLIO
        </motion.h1>
      </div>

      {/* 2. Hero 3-Column Content Stage directly aligned under PORTFOLIO */}
      <div className="relative w-full px-4 sm:px-8 lg:px-12 xl:px-16 mt-4 sm:mt-6 lg:mt-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-end w-full">
          
          {/* LEFT COLUMN: PHOTO / VIDEO / CONTENT + Philosophy Quote & Signature */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            animate={start ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-end space-y-6 z-10 order-2 lg:order-1 text-left pb-2"
          >
            
            {/* Title & Roles */}
            <div className="space-y-2">
              <h2 className="font-bebas text-5xl sm:text-6xl lg:text-[52px] xl:text-[58px] text-[#e8e4dc] tracking-wider leading-[0.88]">
                {HERO_DATA.leftTitle}
              </h2>
              <div className="space-y-1.5 pt-1.5">
                {HERO_DATA.leftSubtitles.map((sub, index) => (
                  <p
                    key={index}
                    className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#9b948c] uppercase"
                  >
                    {sub}
                  </p>
                ))}
              </div>
            </div>

            {/* Red Separator Line */}
            <div className="w-12 h-[2px] bg-[#c84b31]" />

            {/* Quote Block with Red Quote Symbol */}
            <div 
              onClick={onQuoteClick}
              className="space-y-3 group cursor-default"
            >
              <span className="font-serif font-black text-5xl sm:text-6xl text-[#c84b31] leading-none block select-none">
                “
              </span>
              <p className="font-bebas text-2xl sm:text-3xl lg:text-[26px] xl:text-3xl text-[#ded8ce] tracking-wider leading-[1.15] uppercase max-w-sm">
                {HERO_DATA.quote}
              </p>
              
              <div className="pt-2">
                <img
                  src={ASSETS.signature}
                  alt="Signature"
                  className="w-52 sm:w-64 h-16 object-contain"
                />
              </div>
            </div>

          </motion.div>

          {/* CENTER COLUMN: BINEESH PORTRAIT + CRIMSON DISC + ROTATING STAMP BADGE */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={start ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 1.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 relative flex flex-col items-center justify-end order-1 lg:order-2 z-20"
          >
            <div className="relative w-full max-w-[310px] sm:max-w-[360px] lg:max-w-[420px] xl:max-w-[450px] flex items-center justify-center">
              
              {/* Solid Dark Crimson Circular Disc - Finely Balanced for Desktop */}
              <div className="absolute top-[12%] sm:top-[12%] lg:top-[10%] xl:top-[9%] left-1/2 -translate-x-1/2 w-[270px] sm:w-[320px] lg:w-[360px] xl:w-[395px] h-[270px] sm:h-[320px] lg:h-[360px] xl:h-[395px] rounded-full bg-[#7a1c14] -z-10 shadow-[0_0_50px_rgba(122,28,20,0.4)] lg:shadow-[0_0_70px_rgba(122,28,20,0.5)] pointer-events-none" />

              {/* Rotating Circular Stamp Badge */}
              <div className="absolute top-2 -right-4 sm:top-4 sm:-right-6 lg:top-3 lg:-right-6 xl:top-4 xl:-right-7 z-30 pointer-events-auto">
                <RotatingBadge />
              </div>

              {/* Main Portrait */}
              <div className="relative w-full overflow-hidden group">
                <img
                  src={ASSETS.arjunPortrait}
                  alt={`${HERO_DATA.name} - ${HERO_DATA.role}`}
                  className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-700 select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle soft edge gradient blending into canvas */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0b0b0e] to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: BINEESH B M + BIO + 3 STATS */}
          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            animate={start ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 1.4, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-end space-y-6 z-10 order-3 text-left pb-2"
          >
            
            {/* Name & Title */}
            <div className="space-y-1.5">
              <h2 className="font-bebas text-5xl sm:text-6xl lg:text-[56px] xl:text-[64px] text-[#e8e4dc] tracking-tight leading-[0.85]">
                {HERO_DATA.name}
              </h2>
              <p className="text-xs sm:text-sm font-bold tracking-[0.24em] text-[#c84b31] uppercase pt-1">
                {HERO_DATA.role}
              </p>
              
              <p className="text-sm sm:text-[15px] leading-relaxed text-[#aba39a] pt-2 max-w-sm font-normal">
                {HERO_DATA.bio}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 pt-2">
              {HERO_DATA.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#121115]/90 border border-[#26212b] hover:border-[#c84b31]/50 transition-all text-center group"
                >
                  <div className="w-8 h-8 rounded-full border border-[#3b323e] flex items-center justify-center text-[#8e8780] group-hover:text-[#c84b31] group-hover:border-[#c84b31] transition-colors mb-1.5">
                    {idx === 0 && <Camera className="w-4 h-4" />}
                    {idx === 1 && <Layers className="w-4 h-4" />}
                    {idx === 2 && <Heart className="w-4 h-4" />}
                  </div>
                  <span className="font-bebas text-3xl sm:text-4xl text-[#ded8ce] group-hover:text-[#c84b31] transition-colors leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#9b948c] uppercase mt-1.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
