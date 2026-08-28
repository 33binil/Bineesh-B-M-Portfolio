import React from 'react';
import { motion } from 'motion/react';
import { Camera, CheckCircle2, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { ABOUT_DATA, TOOLS_DATA, EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData.js';
import { LightroomIcon, PhotoshopIcon, PremiereIcon, CameraGearIcon, DaVinciIcon } from './Icons.jsx';

export const AboutAndToolsSection = () => {
  const getToolIcon = (iconType) => {
    switch (iconType) {
      case 'lr':
        return <LightroomIcon className="w-5 h-5" />;
      case 'ps':
        return <PhotoshopIcon className="w-5 h-5" />;
      case 'pr':
        return <PremiereIcon className="w-5 h-5" />;
      case 'camera':
        return <CameraGearIcon className="w-5 h-5" />;
      case 'davinci':
        return <DaVinciIcon className="w-5 h-5" />;
      default:
        return <Camera className="w-5 h-5 text-[#ded8ce]" />;
    }
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 border-t border-[#1e1b22]/70">
      
      {/* 2-Column Responsive Layout: Left (About & Expertise) + Right (Tools & Background) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full overflow-hidden">
        
        {/* LEFT COLUMN (6 Cols): About Me + Core Strengths */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          
          {/* Section Header */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="flex h-2 w-2 rounded-full bg-[#e05a47]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#e05a47] uppercase">
                PROFILE & CREATIVE VISION
              </span>
            </div>
            <h3 className="font-bebas text-4xl sm:text-5xl text-[#ded8ce] tracking-wide leading-none">
              {ABOUT_DATA.title}
            </h3>
            <div className="w-12 h-0.5 bg-[#e05a47] mt-2.5" />
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-3.5 text-sm sm:text-base text-[#aba39a] leading-relaxed">
            <p>{ABOUT_DATA.description1}</p>
            <p>{ABOUT_DATA.description2}</p>
          </div>

          {/* Key Competencies & Skill Matrix */}
          <div className="pt-2">
            <h4 className="font-bebas text-2xl text-[#ded8ce] tracking-wider mb-3.5 uppercase">
              CORE PHOTOGRAPHY & PRODUCTION SKILLS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ABOUT_DATA.bulletPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#141217] border border-[#231f28] hover:border-[#e05a47]/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#e05a47] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#ded8ce] font-medium tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Software Carousel / Grid */}
          <div className="pt-4">
            <div className="flex items-center justify-between mb-3.5">
              <h4 className="font-bebas text-2xl text-[#ded8ce] tracking-wider uppercase">
                TOOLS & GEAR I USE
              </h4>
              <span className="text-xs text-[#8e8780] uppercase font-mono tracking-wider">
                EDITING & PRODUCTION
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
              {TOOLS_DATA.map((tool, idx) => (
                <div
                  key={idx}
                  className={`group relative flex flex-col items-center justify-center p-3.5 rounded-xl bg-gradient-to-b ${tool.bgGradient} border ${tool.borderColor} hover:scale-105 transition-all duration-300 shadow-md`}
                >
                  <div className="mb-2 p-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/5 group-hover:border-white/20 transition-colors">
                    {getToolIcon(tool.iconType)}
                  </div>
                  <span className="font-bebas text-base sm:text-lg text-[#ded8ce] tracking-wide text-center leading-tight">
                    {tool.name}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#9b948c] uppercase tracking-wider font-mono mt-0.5">
                    {tool.shortCode}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* RIGHT COLUMN (6 Cols): Professional Experience & Education */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          
          {/* Work Experience Section */}
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div>
                <h3 className="font-bebas text-3xl sm:text-4xl text-[#ded8ce] tracking-wide leading-none flex items-center gap-2.5">
                  <Briefcase className="w-5 h-5 text-[#e05a47]" />
                  <span>EXPERIENCE</span>
                </h3>
                <div className="w-12 h-0.5 bg-[#e05a47] mt-2.5" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-[#9b948c] uppercase font-mono">
                2021 — PRESENT
              </span>
            </div>

            {/* Experience Cards */}
            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-[#131116] border border-[#24202a] hover:border-[#352e3d] transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h4 className="font-bebas text-2xl text-white tracking-wider leading-none">
                      {exp.role}
                    </h4>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#1e1a24] text-[#e05a47] font-semibold tracking-wider uppercase self-start sm:self-auto">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#8e8780] font-mono">
                    {exp.location}
                  </p>

                  <p className="text-xs sm:text-sm text-[#b8b0a6] leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-[#1e1b23]">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#9e978f] leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e05a47] mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-3.5">
              <GraduationCap className="w-5 h-5 text-[#e05a47]" />
              <h3 className="font-bebas text-3xl text-[#ded8ce] tracking-wide leading-none">
                EDUCATION
              </h3>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#131116] border border-[#24202a] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
              <div>
                <h4 className="font-bebas text-3xl sm:text-4xl text-white tracking-wider leading-none">
                  {EDUCATION_DATA.degree}
                </h4>
                <p className="text-base font-semibold text-[#e05a47] mt-1.5">
                  {EDUCATION_DATA.institution}
                </p>
                <p className="text-sm sm:text-base text-[#b8b0a6] mt-1">
                  {EDUCATION_DATA.details}
                </p>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-[#1a1720] border border-[#2b2532] text-center shrink-0">
                <span className="text-xs text-[#ded8ce] font-mono uppercase tracking-wider block">
                  GRADUATED
                </span>
                <span className="font-bebas text-lg text-[#e05a47]">
                  COMMERCE
                </span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
};
