import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, ArrowRight, ExternalLink, Camera, Sliders, CheckCircle2, Sparkles, Layers, Palette } from 'lucide-react';
import { InstagramEmbed } from './InstagramEmbed.jsx';

export const ProjectModal = ({
  project,
  onClose,
  onContactClick
}) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md select-none"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#121115] border border-[#2d2833] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-[#252028] bg-[#151319]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-3 py-1 rounded bg-[#e05a47]/10 text-[#e05a47] border border-[#e05a47]/20 uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs sm:text-sm text-[#9b948d] font-mono">// {project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#201d24] hover:bg-[#2c2733] text-[#a69f98] hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Scroll */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Main Visual Image Showcase */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-[#26212b]">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-xs sm:text-sm font-mono text-[#e05a47] uppercase tracking-wider block mb-1">
                {project.subtitle}
              </span>
              <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2.5 border-b border-[#242028] pb-2.5">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                activeTab === 'overview'
                  ? 'bg-[#e05a47] text-white'
                  : 'text-[#9b948d] hover:text-white bg-[#17151c]'
              }`}
            >
              Overview & Concept
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                activeTab === 'specs'
                  ? 'bg-[#e05a47] text-white'
                  : 'text-[#9b948d] hover:text-white bg-[#17151c]'
              }`}
            >
              Color & Gear Specs
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h4 className="font-bebas text-2xl text-[#ded8ce] tracking-wider mb-2">
                  PROJECT NARRATIVE & CONCEPT
                </h4>
                <p className="text-sm sm:text-base text-[#aba39a] leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3.5">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#17151c] border border-[#282330] text-center">
                    <span className="text-xs text-[#8e8780] uppercase tracking-wider block font-mono">
                      {metric.label}
                    </span>
                    <span className="font-bebas text-2xl sm:text-3xl text-[#ded8ce] mt-1 block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="font-bebas text-xl sm:text-2xl text-[#ded8ce] tracking-wider mb-2.5 uppercase">
                  KEY ASSETS & DELIVERABLES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#16141a] border border-[#242028]">
                      <CheckCircle2 className="w-4 h-4 text-[#e05a47] shrink-0" />
                      <span className="text-xs sm:text-sm text-[#ded8ce]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Instagram Post */}
              {project.instagramEmbed && (
                <div>
                  <h4 className="font-bebas text-xl sm:text-2xl text-[#ded8ce] tracking-wider mb-2.5 uppercase">
                    VIEW LIVE INSTAGRAM POST
                  </h4>
                  <div className="flex justify-center py-2">
                    <InstagramEmbed url={project.instagramEmbed} />
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Tab 2: Specs */}
          {activeTab === 'specs' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              
              {/* Gear & Software Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#17151c] border border-[#282330] space-y-2">
                  <div className="flex items-center gap-2 text-[#e05a47]">
                    <Camera className="w-4 h-4" />
                    <span className="text-xs sm:text-sm font-bold tracking-wider uppercase font-mono">CAMERA & LENS SETUP</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    {project.cameraGear}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#17151c] border border-[#282330] space-y-2">
                  <div className="flex items-center gap-2 text-[#e05a47]">
                    <Sliders className="w-4 h-4" />
                    <span className="text-xs sm:text-sm font-bold tracking-wider uppercase font-mono">POST-PRODUCTION WORKFLOW</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    {project.editingSoftware}
                  </p>
                </div>
              </div>

              {/* Color Harmony Palette */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#17151c] border border-[#282330] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#e05a47]">
                    <Palette className="w-4 h-4" />
                    <span className="text-xs sm:text-sm font-bold tracking-wider uppercase font-mono">COLOR HARMONY PALETTE</span>
                  </div>
                  <span className="text-xs text-[#8e8780] font-mono">HEX HARMONY</span>
                </div>

                <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                  {project.colorPalette.map((color, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div
                        className="w-full h-11 rounded-md border border-white/10 shadow-inner"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs font-mono text-[#ded8ce]">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RAW Transformation Note */}
              <div className="p-4 rounded-xl bg-[#151319] border border-[#252028] text-xs sm:text-sm text-[#aba39a] leading-relaxed">
                <strong className="text-[#e05a47] uppercase font-mono block mb-1">Color Grading Notes:</strong>
                {project.beforeAfterDescription}
              </div>

            </motion.div>
          )}

        </div>

        {/* Footer Action */}
        <div className="flex items-center justify-between px-6 py-4.5 border-t border-[#252028] bg-[#151319]">
          <span className="text-xs sm:text-sm text-[#8e8780] font-mono">
            CLIENT: <strong className="text-white">{project.client}</strong>
          </span>

          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e05a47] hover:bg-[#c84b31] text-xs sm:text-sm font-bold tracking-wider text-white uppercase transition-all shadow-md"
          >
            <span>INQUIRE ABOUT SIMILAR SHOOT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </motion.div>
    </motion.div>
  );
};
