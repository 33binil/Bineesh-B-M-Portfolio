import React from 'react';
import { Instagram, Linkedin, MessageCircle, Globe } from 'lucide-react';

export const QRCodeDisplay = ({
  type,
  label,
  url,
  onOpen,
  size = 'md',
  image = null
}) => {
  const isSmall = size === 'sm';

  const renderBadge = () => {
    switch (type) {
      case 'instagram':
        return (
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-sm">
            <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
        );
      case 'linkedin':
        return (
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#0077b5] text-white flex items-center justify-center font-bold text-[10px] sm:text-xs shadow-sm">
            in
          </div>
        );
      case 'whatsapp':
        return (
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#25D366] text-white flex items-center justify-center shadow-sm">
            <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
        );
      case 'behance':
      default:
        return (
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#0057ff] text-white flex items-center justify-center font-black text-[10px] sm:text-xs shadow-sm">
            Bē
          </div>
        );
    }
  };

  return (
    <div
      onClick={onOpen}
      className="group flex flex-col items-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 select-none"
      title={`Scan or click to open ${label}`}
    >
      {/* White high-contrast QR Container */}
      <div className={`relative bg-[#f8f7f4] ${isSmall ? 'p-2' : 'p-2.5'} rounded-xl shadow-lg border border-[#3b363a] group-hover:border-[#e05a47] transition-all`}>
        {image ? (
          <img
            src={image}
            alt={label}
            className={`${isSmall ? 'w-18 h-18 sm:w-20 sm:h-20' : 'w-24 h-24 sm:w-28 sm:h-28'} object-contain`}
          />
        ) : (
          <>
        {/* SVG QR Code Pattern */}
        <svg
          viewBox="0 0 100 100"
          className={`${isSmall ? 'w-18 h-18 sm:w-20 sm:h-20' : 'w-24 h-24 sm:w-28 sm:h-28'} text-black`}
          fill="currentColor"
        >
          {/* Top-Left Position Marker */}
          <rect x="0" y="0" width="28" height="28" fill="#000" rx="3" />
          <rect x="4" y="4" width="20" height="20" fill="#fff" rx="2" />
          <rect x="8" y="8" width="12" height="12" fill="#000" rx="1.5" />

          {/* Top-Right Position Marker */}
          <rect x="72" y="0" width="28" height="28" fill="#000" rx="3" />
          <rect x="76" y="4" width="20" height="20" fill="#fff" rx="2" />
          <rect x="80" y="8" width="12" height="12" fill="#000" rx="1.5" />

          {/* Bottom-Left Position Marker */}
          <rect x="0" y="72" width="28" height="28" fill="#000" rx="3" />
          <rect x="4" y="76" width="20" height="20" fill="#fff" rx="2" />
          <rect x="8" y="80" width="12" height="12" fill="#000" rx="1.5" />

          {/* QR Data Grid Matrix */}
          <rect x="36" y="4" width="4" height="4" />
          <rect x="44" y="4" width="8" height="4" />
          <rect x="56" y="4" width="4" height="4" />
          <rect x="64" y="4" width="4" height="4" />

          <rect x="32" y="12" width="8" height="4" />
          <rect x="48" y="12" width="4" height="4" />
          <rect x="60" y="12" width="8" height="4" />

          <rect x="36" y="20" width="4" height="8" />
          <rect x="48" y="20" width="8" height="4" />
          <rect x="60" y="20" width="4" height="8" />

          {/* Middle Band */}
          <rect x="4" y="36" width="8" height="4" />
          <rect x="16" y="36" width="4" height="4" />
          <rect x="24" y="36" width="8" height="4" />
          <rect x="36" y="36" width="4" height="4" />
          <rect x="60" y="36" width="8" height="4" />
          <rect x="72" y="36" width="4" height="4" />
          <rect x="84" y="36" width="12" height="4" />

          <rect x="4" y="44" width="4" height="8" />
          <rect x="16" y="44" width="8" height="4" />
          <rect x="28" y="48" width="4" height="8" />
          <rect x="68" y="44" width="8" height="4" />
          <rect x="80" y="48" width="8" height="8" />

          <rect x="8" y="56" width="8" height="4" />
          <rect x="20" y="60" width="4" height="8" />
          <rect x="68" y="56" width="8" height="8" />
          <rect x="88" y="60" width="8" height="4" />

          {/* Bottom Right Quadrant */}
          <rect x="36" y="72" width="8" height="4" />
          <rect x="48" y="72" width="4" height="8" />
          <rect x="60" y="72" width="8" height="4" />
          <rect x="76" y="72" width="4" height="4" />
          <rect x="88" y="72" width="8" height="4" />

          <rect x="36" y="80" width="4" height="12" />
          <rect x="44" y="84" width="8" height="4" />
          <rect x="56" y="80" width="8" height="4" />
          <rect x="72" y="84" width="12" height="4" />
          <rect x="88" y="80" width="4" height="12" />

          <rect x="48" y="92" width="8" height="4" />
          <rect x="64" y="92" width="8" height="4" />
          <rect x="80" y="92" width="8" height="4" />

          {/* Center Background Plate */}
          <rect x="36" y="36" width="28" height="28" fill="#fff" rx="4" />
        </svg>

        {/* Center Platform Icon Badge */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {renderBadge()}
        </div>
          </>
        )}
      </div>

      {/* Underneath Label */}
      <span className="mt-2 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#aba39a] group-hover:text-[#e05a47] uppercase transition-colors">
        {label}
      </span>
    </div>
  );
};
