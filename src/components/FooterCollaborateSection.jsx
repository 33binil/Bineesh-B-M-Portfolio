import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Linkedin, MessageCircle, Globe, Sparkles, Send } from 'lucide-react';
import { COLLABORATE_DATA, TESTIMONIAL_DATA, FOOTER_SIGN } from '../data/portfolioData.js';
import { QRCodeDisplay } from './QRCodeDisplay.jsx';
import { ASSETS } from '../assets/assets.js';

export const FooterCollaborateSection = ({
  onShowToast,
  onOpenContact
}) => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COLLABORATE_DATA.email);
    onShowToast('Email copied to clipboard!');
  };

  const handleOpenInstagram = () => {
    window.open('https://www.instagram.com/framesbybineesh/', '_blank', 'noopener,noreferrer');
  };

  const handleOpenLinkedIn = () => {
    window.open('https://linkedin.com', '_blank', 'noopener,noreferrer');
  };

  const handleOpenWhatsApp = () => {
    window.open(`https://wa.me/${COLLABORATE_DATA.phone.replace(/[^0-9]/g, '')}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 border-t border-[#1e1a22] overflow-hidden">
      
      {/* 3-Column Modern Balanced Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 w-full">
        
        {/* LEFT COLUMN (4 Cols): Testimonial & Value Statement */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 space-y-6"
        >
          
          <div className="p-6 rounded-2xl bg-[#121115] border border-[#26212b] relative overflow-hidden">
            <span className="font-serif font-black text-6xl text-[#e05a47]/25 leading-none block select-none mb-2">
              “
            </span>
            <p className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-[#ded8ce] tracking-wide leading-tight uppercase relative z-10">
              {TESTIMONIAL_DATA.quote}
            </p>
            <div className="w-12 h-0.5 bg-[#e05a47] my-4" />
            <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#9e978f] uppercase">
              {TESTIMONIAL_DATA.author}
            </p>
          </div>

          {/* Social Quick Links */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleOpenInstagram}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141217] hover:bg-[#1f1a24] border border-[#2b2532] text-xs sm:text-sm font-semibold text-[#ded8ce] hover:text-[#e05a47] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#e05a47]" />
              <span>@framesbybineesh</span>
            </button>

            <button
              onClick={handleOpenWhatsApp}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141217] hover:bg-[#1f1a24] border border-[#2b2532] text-xs sm:text-sm font-semibold text-[#ded8ce] hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </button>
          </div>

        </motion.div>

        {/* CENTER COLUMN (4 Cols): Direct Contact Info & Booking */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 space-y-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="flex h-2 w-2 rounded-full bg-[#e05a47] animate-ping" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#e05a47] uppercase">
                DIRECT INQUIRY & BOOKINGS
              </span>
            </div>
            <h3 className="font-bebas text-3xl sm:text-4xl text-[#ded8ce] tracking-wide leading-none">
              {COLLABORATE_DATA.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#9e978f] mt-1.5 leading-relaxed">
              {COLLABORATE_DATA.subtitle}
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            <div
              onClick={handleCopyEmail}
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#131116] border border-[#241f2a] hover:border-[#e05a47]/50 cursor-pointer group transition-colors"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-[#e05a47]/10 flex items-center justify-center text-[#e05a47]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] uppercase tracking-wider text-[#8e8780] block font-mono">
                    EMAIL ADDRESS
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#e05a47] transition-colors truncate block">
                    {COLLABORATE_DATA.email}
                  </span>
                </div>
              </div>
              <span className="text-xs text-[#8e8780] group-hover:text-white uppercase font-mono tracking-wider shrink-0">
                COPY
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#131116] border border-[#241f2a]">
              <div className="w-9 h-9 rounded-lg bg-[#e05a47]/10 flex items-center justify-center text-[#e05a47]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8e8780] block font-mono">
                  DIRECT PHONE / WHATSAPP
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white font-mono">
                  {COLLABORATE_DATA.phone}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#131116] border border-[#241f2a]">
              <div className="w-9 h-9 rounded-lg bg-[#e05a47]/10 flex items-center justify-center text-[#e05a47]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8e8780] block font-mono">
                  LOCATION & STUDIO
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {COLLABORATE_DATA.location}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="w-full py-3.5 rounded-xl bg-[#e05a47] hover:bg-[#c84b31] text-white font-bebas text-xl tracking-wider transition-all shadow-lg hover:shadow-[0_4px_20px_rgba(224,90,71,0.4)] flex items-center justify-center gap-2"
          >
            <span>SEND INQUIRY OR SHOOT BRIEF</span>
            <Send className="w-4 h-4" />
          </button>
        </motion.div>

        {/* RIGHT COLUMN (4 Cols): QR Scan to Connect - Triangle Layout */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#121115] border border-[#26212b] text-center relative overflow-hidden shadow-xl"
        >
          
          <div className="mb-4">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#e05a47] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#e05a47] uppercase font-mono">
                INSTANT CONNECT
              </span>
            </div>
            <h4 className="font-bebas text-3xl text-white tracking-wide">
              SCAN TO VIEW PROFILES
            </h4>
          </div>

          {/* 2x2 QR Code Grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-[270px] justify-items-center">
            <QRCodeDisplay
              type="instagram"
              label="BINEESH B M"
              url="https://www.instagram.com/b_i_n_e_e_s_h_b_m?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
              image={ASSETS.qrBineeshBM}
              onOpen={handleOpenInstagram}
              size="sm"
            />
            <QRCodeDisplay
              type="instagram"
              label="FOR YOUR SMILES"
              url="https://www.instagram.com/for.your.smiless?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
              image={ASSETS.qrForYourSmiles}
              onOpen={handleOpenInstagram}
              size="sm"
            />
            <QRCodeDisplay
              type="instagram"
              label="FRAMES BY BINEESH"
              url="https://www.instagram.com/framesbybineesh?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
              image={ASSETS.qrFramesByBineesh}
              onOpen={handleOpenInstagram}
              size="sm"
            />
            <QRCodeDisplay
              type="instagram"
              label="REELO FILMS"
              url="https://www.instagram.com/reelo_films_?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
              image={ASSETS.qrReeloFilms}
              onOpen={handleOpenInstagram}
              size="sm"
            />
          </div>

          <span className="text-[11px] text-[#8e8780] font-mono mt-4 uppercase tracking-wider">
            CAMERA / QR SCANNER READY
          </span>
        </motion.div>

      </div>

      {/* Massive Bold Sign-Off Typography: CAPTURING MOMENTS. CREATING STORIES. */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-[#1e1b23] pt-8 pb-4 text-center select-none overflow-hidden w-full"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1 font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-[6.5vw] leading-[0.9] tracking-tight text-[#1c1822] hover:text-[#282230] transition-colors duration-500 w-full">
          {FOOTER_SIGN.lines.map((line, idx) => (
            <span key={idx} className={idx % 2 === 1 ? 'text-[#e05a47]/30' : ''}>
              {line}
            </span>
          ))}
        </div>
      </motion.div>

    </footer>
  );
};
