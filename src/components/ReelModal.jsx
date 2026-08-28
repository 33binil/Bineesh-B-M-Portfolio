import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { X, Play, Volume2, VolumeX, Heart, MessageCircle, Share2, Bookmark, Instagram, ExternalLink, Film, ArrowRight } from 'lucide-react';

export const ReelModal = ({
  reel,
  onClose,
  onBookShoot
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(15);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!reel) return;
    setIsPlaying(true);
    setProgress(15);

    // Simulate reel progress loop (only when no real local video)
    let interval = null;
    if (!reel.videoUrl) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1.5;
        });
      }, 200);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [reel, onClose]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
    video.muted = isMuted;
  }, [isPlaying, isMuted]);

  if (!reel) return null;

  const handleOpenInstagram = () => {
    window.open(reel.instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md select-none"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#110f15] border border-[#2d2735] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-[#e05a47] border border-white/10 flex items-center justify-center text-white transition-colors"
          title="Close (Esc)"
        >
          <X className="w-4 h-4" />
        </button>

        {/* LEFT / CENTER: 9:16 Interactive Reel Video Frame */}
        <div className="relative md:w-5/12 bg-black flex items-center justify-center aspect-[9/16] md:aspect-auto min-h-[380px] md:min-h-[580px] overflow-hidden group">
          
          {/* Reel Cover / Video Visual */}
          {reel.videoUrl ? (
            <video
              ref={videoRef}
              src={reel.videoUrl}
              poster={reel.thumbnailUrl}
              loop
              playsInline
              className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-105 contrast-105' : 'brightness-75'}`}
              onTimeUpdate={(e) => {
                const v = e.currentTarget;
                if (v.duration) setProgress((v.currentTime / v.duration) * 100);
              }}
              onEnded={() => setIsPlaying(false)}
            />
          ) : (
            <img
              src={reel.thumbnailUrl}
              alt={reel.title}
              className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-105 contrast-105' : 'brightness-75'}`}
              referrerPolicy="no-referrer"
            />
          )}

          {/* Video Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 pointer-events-none" />

          {/* Progress Bar (Top) */}
          <div className="absolute top-2 left-2 right-2 z-20 flex gap-1 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Top Info inside Video */}
          <div className="absolute top-5 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/15 uppercase">
                {reel.category}
              </span>
              <span className="text-[10px] text-white/80 font-mono">
                {reel.duration}
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              className="pointer-events-auto w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:text-[#e05a47] transition-colors"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Center Play/Pause Click Handler */}
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
          >
            {!isPlaying && (
              <div className="w-16 h-16 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl animate-pulse">
                <Play className="w-7 h-7 fill-current ml-1 text-[#e05a47]" />
              </div>
            )}
          </div>

          {/* Floating Action Buttons inside Reel (Right side like Instagram) */}
          <div className="absolute bottom-6 right-3 z-20 flex flex-col items-center gap-4 text-white">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="flex flex-col items-center gap-1 group/btn"
            >
              <div className={`w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center transition-all ${isLiked ? 'text-[#ff4b4b] scale-110' : 'text-white group-hover/btn:text-[#ff4b4b]'}`}>
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </div>
              <span className="text-[10px] font-bold drop-shadow">{reel.likes}</span>
            </button>

            <div className="flex flex-col items-center gap-1">
              <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold drop-shadow">{reel.comments}</span>
            </div>

            <button
              onClick={handleOpenInstagram}
              className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:text-[#e05a47] transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center transition-colors ${isSaved ? 'text-[#e05a47]' : 'text-white'}`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Bottom Title on Reel */}
          <div className="absolute bottom-4 left-3 right-14 z-20 pointer-events-none">
            <p className="font-bebas text-lg text-white tracking-wide drop-shadow-md leading-tight">
              {reel.title}
            </p>
          </div>

        </div>

        {/* RIGHT: Reel Details, Creator Profile, Caption & Engagement Metrics */}
        <div className="md:w-7/12 p-5 sm:p-7 flex flex-col justify-between overflow-y-auto max-h-[500px] md:max-h-none space-y-6">
          
          {/* Creator Profile Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#241f2a]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-0.5">
                  <div className="w-full h-full rounded-full bg-[#16141a] flex items-center justify-center overflow-hidden">
                    <span className="font-bebas text-sm text-[#e8e4dc]">BM</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-sm text-white">
                      bineesh.visuals
                    </h4>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3897f0]" title="Verified Creator" />
                  </div>
                  <span className="text-[11px] text-[#8e8780]">
                    Kochi, Kerala • {reel.date}
                  </span>
                </div>
              </div>

              <button
                onClick={handleOpenInstagram}
                className="px-3 py-1 rounded-full bg-[#e05a47]/10 hover:bg-[#e05a47]/20 border border-[#e05a47]/40 text-xs font-semibold text-[#e05a47] transition-colors flex items-center gap-1"
              >
                <span>Follow</span>
              </button>
            </div>

            {/* Reel Caption */}
            <div className="pt-4 space-y-3">
              <h3 className="font-bebas text-2xl text-[#ded8ce] tracking-wide leading-tight">
                {reel.title}
              </h3>
              <p className="text-xs text-[#a69f98] leading-relaxed">
                {reel.caption}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['#visualstorytelling', '#kochi', '#reelsindia', '#filmmaking', '#cinematic', '#portraitphotography'].map((tag, idx) => (
                  <span key={idx} className="text-[10px] text-[#e05a47] font-mono hover:underline cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specs & Metrics */}
          <div className="space-y-4">
            
            {/* Audio Track Info */}
            <div className="p-3 rounded-xl bg-[#17141d] border border-[#2a2432] flex items-center justify-between">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-7 h-7 rounded-lg bg-[#e05a47]/10 flex items-center justify-center text-[#e05a47] shrink-0">
                  <Film className="w-3.5 h-3.5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[9px] uppercase tracking-wider text-[#7a736c] block font-mono">
                    ORIGINAL AUDIO
                  </span>
                  <p className="text-xs text-white truncate font-medium">
                    {reel.audioTrack}
                  </p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-[#ded8ce] font-mono shrink-0">
                4K 60FPS
              </span>
            </div>

            {/* Metric counters grid */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-[#17141d] border border-[#2a2432]">
                <span className="text-[10px] text-[#7a736c] uppercase tracking-wider block font-mono">VIEWS</span>
                <span className="font-bebas text-xl text-[#ded8ce]">{reel.views}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#17141d] border border-[#2a2432]">
                <span className="text-[10px] text-[#7a736c] uppercase tracking-wider block font-mono">LIKES</span>
                <span className="font-bebas text-xl text-[#ff4b4b]">{reel.likes}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#17141d] border border-[#2a2432]">
                <span className="text-[10px] text-[#7a736c] uppercase tracking-wider block font-mono">SHARES</span>
                <span className="font-bebas text-xl text-[#ded8ce]">4.8K</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleOpenInstagram}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1b1822] hover:bg-[#25202e] border border-[#332b3c] hover:border-[#e05a47]/50 text-xs font-semibold text-white transition-all"
              >
                <Instagram className="w-3.5 h-3.5 text-[#e05a47]" />
                <span>OPEN ON INSTAGRAM</span>
                <ExternalLink className="w-3 h-3 text-[#736c64]" />
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookShoot();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#e05a47] hover:bg-[#c84b31] text-xs font-bold tracking-wider text-white uppercase transition-all shadow-lg hover:shadow-[0_4px_20px_rgba(224,90,71,0.4)]"
              >
                <span>BOOK REEL CAMPAIGN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};
