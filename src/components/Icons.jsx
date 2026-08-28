import React from 'react';
import { Camera, Film } from 'lucide-react';

export const LightroomIcon = ({ className = 'w-5 h-5' }) => (
  <div className={`flex items-center justify-center font-bold text-[#31a8ff] text-sm tracking-tight ${className}`}>
    Lr
  </div>
);

export const PhotoshopIcon = ({ className = 'w-5 h-5' }) => (
  <div className={`flex items-center justify-center font-bold text-[#31a8ff] text-sm tracking-tight ${className}`}>
    Ps
  </div>
);

export const PremiereIcon = ({ className = 'w-5 h-5' }) => (
  <div className={`flex items-center justify-center font-bold text-[#ea77ff] text-sm tracking-tight ${className}`}>
    Pr
  </div>
);

export const CameraGearIcon = ({ className = 'w-5 h-5' }) => (
  <Camera className={`text-[#e05a47] ${className}`} />
);

export const DaVinciIcon = ({ className = 'w-5 h-5' }) => (
  <Film className={`text-[#ff9a00] ${className}`} />
);

export const FigmaIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 38 57" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
);

export const AdobeXDIcon = ({ className = 'w-5 h-5' }) => (
  <div className={`flex items-center justify-center font-bold text-[#ff61f6] text-sm tracking-tight ${className}`}>
    Xd
  </div>
);

export const IllustratorIcon = ({ className = 'w-5 h-5' }) => (
  <div className={`flex items-center justify-center font-bold text-[#ff9a00] text-sm tracking-tight ${className}`}>
    Ai
  </div>
);

export const WebflowIcon = ({ className = 'w-5 h-5' }) => (
  <div className={`flex items-center justify-center font-black text-[#146ef5] text-sm tracking-wider ${className}`}>
    W
  </div>
);

export const StarCrossIcon = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L13.8 8.2L22 10L13.8 11.8L12 20L10.2 11.8L2 10L10.2 8.2L12 0Z" />
  </svg>
);
