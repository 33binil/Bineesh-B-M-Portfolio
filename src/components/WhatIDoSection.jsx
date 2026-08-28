import React from 'react';
import { motion } from 'motion/react';
import { Camera, Sparkles, Video, Layers, Palette, ArrowUpRight, Film, Radio, Disc3, Sliders } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData.js';

const MARQUEE_TAGS = [
  'PORTRAIT & EDITORIAL',
  '4K 60FPS CINEMA',
  'EVENT COVERAGE',
  'VIRAL REELS & SHORT-FORM',
  'COLOR GRADING & LUTs',
  'HIGH-END RETOUCHING',
  'NATURAL & STUDIO LIGHTING',
  'BRAND CAMPAIGNS',
  'DRONE 4K AERIALS',
  'CREATIVE DIRECTION'
];

export const WhatIDoSection = ({ onServiceSelect }) => {
  
  // Custom Continuous Animated Visual for each service type
  const renderContinuousIcon = (iconName, isHigh) => {
    switch (iconName) {
      case 'camera':
        return (
          <div className="relative flex items-center justify-center w-6 h-6">
            {/* Continuous rotating focus reticle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-1.5 border border-dashed border-[#e05a47]/40 rounded-full pointer-events-none"
            />
            {/* Center camera with subtle scale breath */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Camera className={`w-5 h-5 ${isHigh ? 'text-[#e05a47]' : 'text-[#a69f98] group-hover:text-[#e05a47]'}`} />
            </motion.div>
            {/* Pulsing red live dot */}
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.2, 0.9] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#e05a47] shadow-[0_0_6px_#e05a47]"
            />
          </div>
        );

      case 'sparkles':
        return (
          <div className="relative flex items-center justify-center w-6 h-6">
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.15, 0.95, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className={`w-5 h-5 ${isHigh ? 'text-[#e05a47]' : 'text-[#a69f98] group-hover:text-[#e05a47]'}`} />
            </motion.div>
            {/* Twinkling ambient micro sparkles */}
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }}
              className="absolute -top-1.5 -left-1 w-1.5 h-1.5 bg-[#e8c07d] rounded-full blur-[0.5px]"
            />
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
              className="absolute -bottom-1 -right-1.5 w-1.5 h-1.5 bg-[#e05a47] rounded-full blur-[0.5px]"
            />
          </div>
        );

      case 'video':
        return (
          <div className="relative flex items-center justify-center w-6 h-6">
            <Video className={`w-5 h-5 ${isHigh ? 'text-[#e05a47]' : 'text-[#a69f98] group-hover:text-[#e05a47]'}`} />
            {/* Continuous jumping audio waveform frequency bars */}
            <div className="absolute -bottom-1.5 flex items-end gap-[2px] h-3 pointer-events-none">
              <motion.div
                animate={{ height: ['3px', '10px', '4px', '12px', '3px'] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-[2px] bg-[#e05a47] rounded-full"
              />
              <motion.div
                animate={{ height: ['7px', '3px', '12px', '5px', '7px'] }}
                transition={{ duration: 1.0, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                className="w-[2px] bg-[#e05a47] rounded-full"
              />
              <motion.div
                animate={{ height: ['4px', '11px', '3px', '9px', '4px'] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="w-[2px] bg-[#e05a47] rounded-full"
              />
              <motion.div
                animate={{ height: ['8px', '4px', '10px', '2px', '8px'] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="w-[2px] bg-[#e05a47] rounded-full"
              />
            </div>
          </div>
        );

      case 'layers':
        return (
          <div className="relative flex items-center justify-center w-6 h-6">
            {/* Continuous floating floating layered sheets */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Layers className={`w-5 h-5 ${isHigh ? 'text-[#e05a47]' : 'text-[#a69f98] group-hover:text-[#e05a47]'}`} />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.85, 1.05, 0.85] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute inset-0 bg-[#e05a47]/10 rounded-md -z-10"
            />
          </div>
        );

      case 'palette':
        return (
          <div className="relative flex items-center justify-center w-6 h-6">
            {/* Continuous color wheel rotation */}
            <motion.div
              animate={{ rotate: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Palette className={`w-5 h-5 ${isHigh ? 'text-[#e05a47]' : 'text-[#a69f98] group-hover:text-[#e05a47]'}`} />
            </motion.div>
            {/* Continuous subtle color sweep halo */}
            <motion.div
              animate={{ 
                background: [
                  'radial-gradient(circle, rgba(224,90,71,0.3) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(232,192,125,0.3) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(122,28,20,0.3) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(224,90,71,0.3) 0%, transparent 70%)'
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-1.5 rounded-full pointer-events-none -z-10"
            />
          </div>
        );

      default:
        return <Camera className={`w-5 h-5 ${isHigh ? 'text-[#e05a47]' : 'text-[#a69f98] group-hover:text-[#e05a47]'}`} />;
    }
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 border-t border-[#1e1b22]/70 overflow-hidden relative">
      
      {/* 1. Continuous Ambient Floating Background Glows */}
      <motion.div
        animate={{
          x: ['-10%', '30%', '-10%'],
          y: ['0%', '15%', '0%'],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/3 w-[450px] h-[350px] rounded-full bg-[#7a1c14] blur-[120px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          x: ['20%', '-20%', '20%'],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-10 right-1/4 w-[400px] h-[300px] rounded-full bg-[#c84b31] blur-[110px] pointer-events-none -z-10"
      />

      {/* 2. Header Row with Live Status Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-[11px] font-semibold text-[#c84b31] tracking-[0.25em] uppercase flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#c84b31]"
              />
              CREATIVE DISCIPLINES
            </span>
          </div>
          <h3 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#ded8ce] tracking-wide leading-none">
            WHAT I DO
          </h3>
          <div className="w-14 h-0.5 bg-[#e05a47] mt-2 relative overflow-hidden">
            {/* Continuous sliding light highlight on title bar */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-8 bg-white/80"
            />
          </div>
        </motion.div>

        {/* Live Studio Capabilities Tag */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16141a]/90 border border-[#26212b] text-xs font-mono text-[#9e968d]">
          <Disc3 className="w-3.5 h-3.5 text-[#e05a47] animate-spin" style={{ animationDuration: '6s' }} />
          <span>PRODUCTION-READY WORKFLOW</span>
        </div>
      </div>

      {/* 3. Continuous Infinite Cinematic Marquee Ticker */}
      <div className="relative w-full overflow-hidden mb-8 py-2.5 border-y border-[#221e28]/80 bg-[#110f14]/50 select-none">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#0b0b0e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#0b0b0e] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-8 items-center w-max"
        >
          {/* Double list for seamless loop */}
          {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
            <div key={i} className="flex items-center gap-4 text-xs sm:text-sm font-mono tracking-widest text-[#a8a198]">
              <span className="hover:text-white transition-colors">{tag}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c84b31]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 4. 5-Card Horizontal Grid with Continuous Dynamic Visuals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 w-full">
        {SERVICES_DATA.map((service, idx) => {
          const serviceNum = `0${idx + 1}`;
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              onClick={() => onServiceSelect && onServiceSelect(service)}
              className={`group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl transition-all duration-400 cursor-pointer overflow-hidden ${
                service.isHighlighted
                  ? 'bg-[#151318] border border-[#e05a47]/60 shadow-[0_4px_25px_rgba(224,90,71,0.14)] hover:border-[#e05a47] hover:shadow-[0_8px_30px_rgba(224,90,71,0.22)]'
                  : 'bg-[#121115] border border-[#26222a] hover:border-[#42394a] hover:bg-[#16141a]'
              }`}
            >
              {/* Continuous subtle shimmer line sweeping across highlighted card */}
              {service.isHighlighted && (
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.8 }}
                  className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12 pointer-events-none"
                />
              )}

              {/* Top row: Animated Icon + Step Counter + Arrow */}
              <div className="flex items-center justify-between mb-6 z-10">
                <div
                  className={`p-3 rounded-xl ${
                    service.isHighlighted
                      ? 'bg-[#e05a47]/15 border border-[#e05a47]/30'
                      : 'bg-[#1a1820] border border-[#2a2430] group-hover:border-[#e05a47]/40 group-hover:bg-[#e05a47]/10'
                  } transition-all duration-300`}
                >
                  {renderContinuousIcon(service.iconName, !!service.isHighlighted)}
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#6e6774] group-hover:text-[#ded8ce] font-semibold transition-colors">
                    {serviceNum}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#18161e] border border-[#2a2530] flex items-center justify-center group-hover:border-[#e05a47]/50 group-hover:bg-[#e05a47] transition-all duration-300">
                    <ArrowUpRight
                      className="w-3.5 h-3.5 text-[#736c78] group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom info: Title + Description */}
              <div className="z-10 mt-2">
                <h4 className="font-bebas text-2xl sm:text-3xl text-[#ded8ce] tracking-wider mb-2.5 leading-tight group-hover:text-white transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#aba39a] font-normal group-hover:text-[#ded8ce] transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Bottom continuous animated accent glow bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1a1820] overflow-hidden">
                <motion.div
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 3 + idx * 0.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.4
                  }}
                  className={`w-1/2 h-full rounded-full ${
                    service.isHighlighted
                      ? 'bg-[#e05a47] shadow-[0_0_8px_#e05a47]'
                      : 'bg-gradient-to-r from-transparent via-[#e05a47]/60 to-transparent'
                  }`}
                />
              </div>

              {/* Ambient corner light on hover */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#e05a47]/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

