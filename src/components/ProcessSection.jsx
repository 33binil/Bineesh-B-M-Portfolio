import React from 'react';
import { motion } from 'motion/react';
import { Compass, FileText, Camera, Monitor, Send } from 'lucide-react';
import { PROCESS_DATA } from '../data/portfolioData.js';

export const ProcessSection = () => {
  const getProcessIcon = (iconName) => {
    const iconClass = 'w-4 h-4 text-[#ded8ce] group-hover:text-[#e05a47] transition-colors';
    switch (iconName) {
      case 'compass':
        return <Compass className={iconClass} />;
      case 'file-text':
        return <FileText className={iconClass} />;
      case 'camera':
        return <Camera className={iconClass} />;
      case 'monitor':
        return <Monitor className={iconClass} />;
      case 'send':
        return <Send className={iconClass} />;
      default:
        return <Compass className={iconClass} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-between"
    >
      {/* Title */}
      <div className="mb-6">
        <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#ded8ce] tracking-wide leading-none">
          MY PROCESS
        </h3>
        <div className="w-12 h-0.5 bg-[#e05a47] mt-2" />
      </div>

      {/* 5 Process Rows */}
      <div className="space-y-4">
        {PROCESS_DATA.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.1, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 4, transition: { duration: 0.25 } }}
            className="group flex items-start gap-4 p-4 sm:p-4.5 rounded-xl bg-[#121115]/60 hover:bg-[#151419] border border-[#221f26] hover:border-[#2f2935] transition-all duration-200"
          >
            {/* Number 01-05 */}
            <span className="font-bebas text-3xl sm:text-4xl text-[#e05a47] leading-none pt-0.5 select-none w-8 text-left">
              {step.number}
            </span>

            {/* Icon Bubble */}
            <div className="w-9 h-9 rounded-full border border-[#2e2933] group-hover:border-[#e05a47]/50 bg-[#16141a] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
              {getProcessIcon(step.iconName)}
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <h4 className="font-bebas text-2xl sm:text-3xl text-[#ded8ce] tracking-wider leading-none mb-1 group-hover:text-white transition-colors">
                {step.title}
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#9e978f] font-normal">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
