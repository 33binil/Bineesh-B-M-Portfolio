import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { COLLABORATE_DATA } from '../data/portfolioData.js';

export const ContactModal = ({
  isOpen,
  onClose,
  onShowToast
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Portrait & Lifestyle Shoot');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      onShowToast('Please fill in your name and email');
      return;
    }

    const text = [
      `Hi Bineesh! I'd like to book/inquire a project.`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Service / Shoot Type: ${projectType}`,
      location ? `Location / Details: ${location}` : null,
      message ? `Project Brief & Date: ${message}` : null
    ].filter(Boolean).join('\n');

    const phone = COLLABORATE_DATA.phone.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      window.open(url, '_blank', 'noopener,noreferrer');
      onShowToast('Opening WhatsApp to send your inquiry!');
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-lg bg-[#121115] border border-[#2d2833] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#252029] bg-[#16141a]">
          <div>
            <h3 className="font-bebas text-3xl text-[#ded8ce] tracking-wide leading-none">
              BOOK A SHOOT / INQUIRY
            </h3>
            <p className="text-xs text-[#9b948d] tracking-wider uppercase mt-1">
              Available for Freelance, Events & Content Creation
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#201d24] hover:bg-[#2c2733] text-[#a69f98] hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center space-y-3"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/20">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="font-bebas text-3xl text-white tracking-wide">
                INQUIRY RECEIVED
              </h4>
              <p className="text-sm text-[#aba39a] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name}</strong>. Bineesh will review your shoot or project requirements and reply to <strong className="text-white">{email}</strong> within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold tracking-wider text-[#aba39a] uppercase block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-lg bg-[#18161d] border border-[#2d2833] focus:border-[#e05a47] focus:outline-none text-sm text-white placeholder-[#5e5750]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold tracking-wider text-[#aba39a] uppercase block mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#18161d] border border-[#2d2833] focus:border-[#e05a47] focus:outline-none text-sm text-white placeholder-[#5e5750]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold tracking-wider text-[#aba39a] uppercase block mb-1.5">
                    Shoot / Service Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-[#18161d] border border-[#2d2833] focus:border-[#e05a47] focus:outline-none text-sm text-white"
                  >
                    <option value="Portrait & Lifestyle Shoot">Portrait & Lifestyle Shoot</option>
                    <option value="Event / Celebration Coverage">Event / Celebration Coverage</option>
                    <option value="Videography & Social Media Reels">Videography & Social Media Reels</option>
                    <option value="Content Creation Campaign">Content Creation Campaign</option>
                    <option value="Commercial & Brand Photography">Commercial & Brand Photography</option>
                    <option value="Photo Editing & Color Grading">Photo Editing & Color Grading</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold tracking-wider text-[#aba39a] uppercase block mb-1.5">
                    Location / Details
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Kochi, Kerala or On-Location"
                    className="w-full px-4 py-3 rounded-lg bg-[#18161d] border border-[#2d2833] focus:border-[#e05a47] focus:outline-none text-sm text-white placeholder-[#5e5750]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold tracking-wider text-[#aba39a] uppercase block mb-1.5">
                  Project Brief & Date
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your concept, preferred shoot date, location, or content goals..."
                  className="w-full px-4 py-3 rounded-lg bg-[#18161d] border border-[#2d2833] focus:border-[#e05a47] focus:outline-none text-sm text-white placeholder-[#5e5750] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 rounded-xl bg-[#e05a47] hover:bg-[#c84b31] text-white font-bebas text-xl tracking-wider transition-colors shadow-lg shadow-[#e05a47]/20 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSending ? (
                  <span>SENDING INQUIRY...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE TO BINEESH</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </motion.div>
    </motion.div>
  );
};
