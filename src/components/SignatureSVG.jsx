import React from 'react';

export const SignatureSVG = ({
  className = 'w-36 h-10',
  color = '#ded8ce'
}) => {
  return (
    <svg
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 42C28 36 45 15 58 12C66 10 68 22 55 35C45 45 32 48 38 48C52 48 78 30 92 28C104 26 108 36 99 42C88 50 115 32 135 25C155 18 168 28 152 38C138 47 172 26 195 24C212 22 228 32 232 40"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 300,
          strokeDashoffset: 0,
          opacity: 0.88
        }}
      />
      <path
        d="M25 46C60 48 115 44 175 42C195 41 215 42 228 44"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        style={{ opacity: 0.6 }}
      />
    </svg>
  );
};
