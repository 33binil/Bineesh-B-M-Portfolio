/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen.jsx';
import { Header } from './components/Header.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { WhatIDoSection } from './components/WhatIDoSection.jsx';
import { ProcessSection } from './components/ProcessSection.jsx';
import { FeaturedWorkSection } from './components/FeaturedWorkSection.jsx';
import { ReelsSection } from './components/ReelsSection.jsx';
import { AboutAndToolsSection } from './components/AboutAndToolsSection.jsx';
import { FooterCollaborateSection } from './components/FooterCollaborateSection.jsx';
import { ProjectModal } from './components/ProjectModal.jsx';
import { ReelModal } from './components/ReelModal.jsx';
import { ContactModal } from './components/ContactModal.jsx';
import { Toast } from './components/Toast.jsx';
import { FEATURED_PROJECTS } from './data/portfolioData.js';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedReel, setSelectedReel] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleLoadingComplete = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setIsLoading(false);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 3000);
  };

  const handleServiceSelect = (service) => {
    showToast(`Exploring ${service.title} capabilities`);
    // Find matching project or open inquiry
    const matchingProject = FEATURED_PROJECTS.find(p => p.category.includes(service.title.split(' ')[0]));
    if (matchingProject) {
      setSelectedProject(matchingProject);
    } else {
      setIsContactOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#ded8ce] flex flex-col items-center justify-start relative selection:bg-[#c84b31] selection:text-white">
      
      {/* 3D Camera Loading Screen with Shutter Flash Transition */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loading-screen"
            onComplete={handleLoadingComplete}
          />
        )}
      </AnimatePresence>

      {/* Background Subtle Ambient Grain Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.025] z-50 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Main Full-Width Portfolio Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex flex-col relative z-10"
      >
        
        {/* 1. Top Bar */}
        <Header 
          onContactClick={() => setIsContactOpen(true)} 
          onReplayIntro={() => setIsLoading(true)}
        />

        {/* 2. Hero Section (Huge PORTFOLIO, Portrait, Rotating Badge, Left & Right columns) */}
        <HeroSection onQuoteClick={() => showToast('Design Philosophy: Intuitive, Beautiful & Impactful')} startAnimation={!isLoading} />

        {/* 3. ABOUT ME & TOOLS I USE Section (Profile, Skills, Experience & Education) */}
        <AboutAndToolsSection />

        {/* 4. WHAT I DO Section (5 Cards horizontal row) */}
        <WhatIDoSection onServiceSelect={handleServiceSelect} />

        {/* 5. Two-Column Middle Section: MY PROCESS (Left) + FEATURED WORK (Right) */}
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 border-t border-[#1e1b22]/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            {/* Left 5 Cols: MY PROCESS */}
            <div className="lg:col-span-5">
              <ProcessSection />
            </div>

            {/* Right 7 Cols: FEATURED WORK */}
            <div className="lg:col-span-7">
              <FeaturedWorkSection
                onSelectProject={(project) => setSelectedProject(project)}
                onViewAllProjects={() => setSelectedProject(FEATURED_PROJECTS[0])}
              />
            </div>
          </div>
        </section>

        {/* 6. INSTAGRAM REELS (Short-form social content & viral video showcases) */}
        <ReelsSection
          onSelectReel={(reel) => setSelectedReel(reel)}
        />

        {/* 7. Footer Section: LET'S COLLABORATE + SCAN TO CONNECT + BRANDING SIGN-OFF */}
        <FooterCollaborateSection
          onShowToast={showToast}
          onOpenContact={() => setIsContactOpen(true)}
        />

      </motion.div>

      {/* Interactive Lightboxes & Modals with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key="project-modal"
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onContactClick={() => setIsContactOpen(true)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedReel && (
          <ReelModal
            key="reel-modal"
            reel={selectedReel}
            onClose={() => setSelectedReel(null)}
            onBookShoot={() => setIsContactOpen(true)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContactOpen && (
          <ContactModal
            key="contact-modal"
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
            onShowToast={showToast}
          />
        )}
      </AnimatePresence>

      {/* Feedback Toast */}
      <Toast message={toastMessage} />

    </div>
  );
}
