import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Heart, MessageCircle, Eye, Music2, Instagram, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { REELS_DATA } from '../data/portfolioData.js';

export const ReelsSection = ({ onSelectReel }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleReels = showAll ? REELS_DATA : REELS_DATA.slice(0, 5);

  const handleOpenInsta = (e) => {
    e.stopPropagation();
    window.open('https://www.instagram.com/framesbybineesh/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-14 border-t border-[#1e1b22]/70 overflow-hidden">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#242028]"
      >
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex h-2 w-2 rounded-full bg-[#e05a47] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#e05a47] uppercase">
              CONTENT CREATOR & REELS
            </span>
          </div>
          <h3 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-[#e8e4dc] tracking-wider leading-none">
            FEATURED INSTAGRAM REELS
          </h3>
          <p className="text-sm sm:text-base text-[#aba39a] max-w-2xl mt-2 leading-relaxed">
            Dynamic visual storytelling, viral short-form video edits, promotional campaigns, and cinematic frames crafted for high social engagement.
          </p>
        </div>

        {/* Instagram Profile Link */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleOpenInsta}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#17141d] hover:bg-[#221c2a] border border-[#2e2736] hover:border-[#e05a47]/50 transition-all text-sm font-semibold text-[#ded8ce] group"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-sm">
              <Instagram className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] text-[#8e8780] tracking-wider uppercase leading-tight font-mono">
                FOLLOW ON INSTAGRAM
              </span>
              <span className="block text-xs sm:text-sm font-bold text-white group-hover:text-[#e05a47] transition-colors leading-tight">
                @framesbybineesh
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-[#736c64] group-hover:text-white transition-colors ml-1" />
          </button>
        </div>
      </motion.div>

      {/* 5-Column Responsive Reels Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5 w-full">
        {visibleReels.map((reel, idx) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            onClick={() => onSelectReel(reel)}
            className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-[#141218] border border-[#27222d] hover:border-[#e05a47] transition-all duration-500 shadow-md hover:shadow-[0_8px_30px_rgba(224,90,71,0.25)] flex flex-col justify-between p-3.5 select-none"
          >
            {/* Background Thumbnail Image with Gradient Overlays */}
            <div className="absolute inset-0 z-0">
              <img
                src={reel.thumbnailUrl}
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:contrast-110"
                referrerPolicy="no-referrer"
              />
              {reel.videoUrl && (
                <video
                  className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  src={reel.videoUrl}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseOver={(e) => e.currentTarget.play().catch(() => {})}
                  onMouseOut={(e) => e.currentTarget.pause()}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              <div className={`absolute inset-0 bg-gradient-to-br ${reel.videoGradient} opacity-30 group-hover:opacity-50 transition-opacity duration-300 mix-blend-overlay`} />
            </div>

            {/* Top Bar: Category Pill & Reels Glyph & Duration */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <span className="text-[10px] sm:text-xs font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white uppercase">
                {reel.category}
              </span>
              
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs text-[#ded8ce] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e05a47]" />
                {reel.duration}
              </div>
            </div>

            {/* Center: Play Icon with Pulse on Hover */}
            <div className="relative z-10 self-center opacity-75 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-115">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 group-hover:border-[#e05a47] flex items-center justify-center text-white group-hover:text-[#e05a47] shadow-xl group-hover:shadow-[0_0_20px_rgba(224,90,71,0.5)] transition-all">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
            </div>

            {/* Bottom Content: Views, Likes, Title & Audio Track */}
            <div className="relative z-10 space-y-2 pt-2">
              
              {/* Engagement Stats */}
              <div className="flex items-center justify-between text-xs text-[#ded8ce] font-semibold">
                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded border border-white/5">
                  <Eye className="w-3.5 h-3.5 text-[#e05a47]" />
                  <span>{reel.views}</span>
                </div>
                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded border border-white/5">
                  <Heart className="w-3.5 h-3.5 text-[#ff4b4b]" />
                  <span>{reel.likes}</span>
                </div>
              </div>

              {/* Reel Title */}
              <h4 className="font-bebas text-lg sm:text-xl text-white tracking-wide leading-tight line-clamp-2 drop-shadow-md group-hover:text-[#ff8d7d] transition-colors">
                {reel.title}
              </h4>

              {/* Audio Track marquee / ticker */}
              <div className="flex items-center gap-1.5 text-xs text-[#c4bcb3] overflow-hidden">
                <Music2 className="w-3 h-3 text-[#e05a47] shrink-0 animate-bounce" />
                <span className="truncate tracking-tight font-mono">
                  {reel.audioTrack}
                </span>
              </div>

            </div>

          </motion.div>
        ))}
      </div>

      {/* Bottom Action Bar: Show More / Show Less & Direct CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >

        {/* View All on Instagram */}
        <button
          onClick={handleOpenInsta}
          className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#e05a47]/20 to-[#9e1c14]/20 hover:from-[#e05a47]/30 hover:to-[#9e1c14]/30 border border-[#e05a47]/40 hover:border-[#e05a47] text-xs sm:text-sm font-bold tracking-[0.18em] text-white uppercase transition-all duration-300"
        >
          <Instagram className="w-4 h-4 text-[#e05a47]" />
          <span>VIEW FULL FEED ON INSTAGRAM</span>
        </button>

      </motion.div>

    </section>
  );
};
