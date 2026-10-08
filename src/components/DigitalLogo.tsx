import React from 'react';
import { useAuthor } from '../context/AuthorContext';

interface DigitalLogoProps {
  size?: 'normal' | 'small' | 'large';
  lightText?: boolean;
}

export const DigitalLogo: React.FC<DigitalLogoProps> = ({ size = 'normal', lightText = false }) => {
  const { mastheadTitle, mastheadTagline, mastheadFontStyle } = useAuthor();

  // Helper to determine exact font-family
  const getFontFamilyStyle = () => {
    switch (mastheadFontStyle) {
      case 'cinzel':
        return "'Cinzel', Georgia, serif";
      case 'cormorant':
        return "'Cormorant Garamond', Georgia, serif";
      case 'cyber':
        return "'Unbounded', 'Syne', sans-serif";
      case 'imperial':
      default:
        return "'Playfair Display', Georgia, serif";
    }
  };

  // Helper to split "The AfricaN" into "The" and "Africa" + "N"
  // Handles custom titles as well gracefully
  const titleString = mastheadTitle || 'The AfricaN';
  const hasThe = titleString.toLowerCase().startsWith('the ');
  const mainPart = hasThe ? titleString.slice(4).trim() : titleString;
  
  // Extract trailing 'N' or last character for distinct styling
  const endsWithN = mainPart.endsWith('N');
  const baseName = endsWithN ? mainPart.slice(0, -1) : mainPart;
  const suffixChar = endsWithN ? 'N' : '';

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group select-none">
      {/* High-Tech Digital Monogram Emblem */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-rose-700 to-slate-950 shadow-md border border-red-500/40 group-hover:shadow-red-500/30 group-hover:scale-105 transition-all duration-300 shrink-0 ${
        size === 'small' ? 'w-8 h-8' : size === 'large' ? 'w-14 h-14' : 'w-11 h-11'
      }`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-yellow-400/25 to-transparent"></div>
        
        {/* Geometric Stylized Continental Signal 'A' */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`${size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-7 h-7' : 'w-5 h-5'} text-yellow-300 transform group-hover:rotate-3 transition-transform`}
        >
          <path
            d="M12 2L3 21H7.5L9.5 16H14.5L16.5 21H21L12 2Z"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M10.2 14L12 9L13.8 14H10.2Z"
            fill="#FEF08A"
            stroke="#FEF08A"
            strokeWidth="1"
          />
          <circle cx="12" cy="5" r="1.6" fill="#EF4444" className="animate-ping" />
          <circle cx="12" cy="5" r="1.3" fill="#FDE047" />
        </svg>

        {/* Live Digital Beacon */}
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 border border-white"></span>
        </span>
      </div>

      {/* Brand Title: The AfricaN in dignified newspaper masthead typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 leading-none">
          {/* 'The' in classic broadsheet italic serif */}
          {hasThe && (
            <span 
              className={`font-serif italic font-extrabold tracking-wider ${
                lightText ? 'text-red-400' : 'text-red-600'
              } ${size === 'small' ? 'text-xs' : size === 'large' ? 'text-xl' : 'text-sm sm:text-base'}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The
            </span>
          )}

          {/* 'AfricaN' in prestigious broadsheet masthead font */}
          <span 
            className="tracking-tight select-none font-black flex items-baseline"
            style={{ fontFamily: getFontFamilyStyle() }}
          >
            <span className={`font-black tracking-tight ${
              lightText 
                ? 'text-white' 
                : 'text-slate-950 group-hover:text-slate-800'
            } transition-colors ${
              size === 'small' ? 'text-lg' : size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[30px]'
            }`}>
              {baseName}
            </span>

            {/* Distinctive Capital 'N' Jewel Accent */}
            {suffixChar && (
              <span className={`font-black text-red-600 drop-shadow-xs ${
                size === 'small' ? 'text-lg' : size === 'large' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[30px]'
              } ml-0.5 inline-block`}>
                {suffixChar}
              </span>
            )}
          </span>

          {/* Beacon dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block mb-1 ml-0.5 animate-pulse"></span>
        </div>

        {/* Tagline / Subtitle */}
        <span className="text-[8px] sm:text-[9px] font-mono tracking-widest uppercase font-bold text-slate-400 mt-0.5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block"></span>
          <span>{mastheadTagline || 'Digital Continental Broadsheet · Nairobi Bureau'}</span>
        </span>
      </div>
    </div>
  );
};
