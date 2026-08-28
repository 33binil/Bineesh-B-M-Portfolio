import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Camera, Sparkles, Sliders } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData.js';

export const FeaturedWorkSection = ({
  onSelectProject,
  onViewAllProjects
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-between"
    >
      {/* Title */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#ded8ce] tracking-wide leading-none">
            FEATURED WORK
          </h3>
          <div className="w-12 h-0.5 bg-[#e05a47] mt-2" />
        </div>

        <button
          onClick={onViewAllProjects}
          className="group flex items-center gap-2 text-sm sm:text-base font-semibold tracking-wider text-[#b8b0a6] hover:text-[#e05a47] uppercase transition-colors"
        >
          <span>ALL PROJECTS ({FEATURED_PROJECTS.length})</span>
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* 2x2 Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {FEATURED_PROJECTS.map((project, idx) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              onClick={() => onSelectProject(project)}
              className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#121115] border border-[#26222b] hover:border-[#e05a47] transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-[0_8px_30px_rgba(224,90,71,0.15)]"
            >
              {/* Image Preview Container */}
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-3.5 bg-[#0d0c0f] border border-[#1f1b24]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                  <Camera className="w-3 h-3 text-[#e05a47]" />
                  <span>{project.category.split('&')[0]}</span>
                </div>

                {/* Year Pill */}
                <div className="absolute top-2.5 right-2.5 z-10 px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-md text-xs font-mono text-[#c4bcb3] border border-white/5">
                  {project.year}
                </div>

                {/* Hover Quick Action Indicator */}
                <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e05a47] text-white text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-lg">
                  <span>VIEW SPECS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bebas text-2xl sm:text-3xl text-[#ded8ce] tracking-wide leading-none group-hover:text-white transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-xs sm:text-sm text-[#e05a47] font-semibold tracking-wider uppercase font-mono">
                    {project.metrics[0].value}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#aba39a] font-normal leading-snug line-clamp-2">
                  {project.tagline}
                </p>

                {/* Photography Details: Gear & Editing Software */}
                <div className="pt-2.5 flex flex-wrap items-center gap-2 border-t border-[#1f1c24] text-xs text-[#ded8ce]">
                  <div className="flex items-center gap-1.5 text-[#b5ada5]">
                    <Sliders className="w-3.5 h-3.5 text-[#e05a47]" />
                    <span className="truncate max-w-[150px] font-mono text-xs">{project.editingSoftware.split('&')[0]}</span>
                  </div>

                  {/* Color Harmony Palette Dots */}
                  <div className="ml-auto flex items-center gap-1.5">
                    {project.colorPalette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-3 h-3 rounded-full border border-black/40 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={`Color: ${color}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
