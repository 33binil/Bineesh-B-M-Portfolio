import React from 'react';

export const RotatingBadge = ({
  className = '',
  size
}) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${size ? '' : 'w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] lg:w-[104px] lg:h-[104px] xl:w-[114px] xl:h-[114px]'} ${className}`}
      style={size ? { width: size, height: size } : {}}
    >
      {/* Outer spinning SVG circle with path text */}
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full animate-spin-slow"
        style={{ animationDuration: '22s' }}
      >
        <path
          id="badgeCirclePath"
          d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          fill="none"
        />
        <text
          fill="#c84b31"
          className="text-[11px] font-bold tracking-[0.24em] uppercase"
          style={{ letterSpacing: '0.22em' }}
        >
          <textPath href="#badgeCirclePath" startOffset="0%">
            • CAPTURING AUTHENTIC MOMENTS •
          </textPath>
        </text>
      </svg>

      {/* Center 4-point star motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-[#c84b31] fill-current drop-shadow-[0_0_8px_rgba(200,75,49,0.5)]"
        >
          <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" />
        </svg>
      </div>
    </div>
  );
};
