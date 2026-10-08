import React, { useState, useEffect } from 'react';
import { Sparkles, ExternalLink, ChevronRight, Zap } from 'lucide-react';

interface AnimatedHeader3DAdProps {
  isAdFreeMode?: boolean;
  onOpenMonetization: () => void;
}

interface HeaderAdCampaign {
  id: string;
  brand: string;
  badge: string;
  headline: string;
  subtext: string;
  ctaText: string;
  badgeColor: string;
  accentColor: string;
  gradientBg: string;
  glowColor: string;
  icon: string;
}

const HEADER_3D_ADS: HeaderAdCampaign[] = [
  {
    id: 'h-ad-starlink',
    brand: 'Starlink Africa',
    badge: '3D ULTRA SATELLITE',
    headline: '10 Gbps Orbital High-Speed Enterprise Kit',
    subtext: '40% Subsidy · Instant Setup in 54 Countries',
    ctaText: 'Deploy Now',
    badgeColor: 'bg-cyan-400 text-slate-950',
    accentColor: 'text-cyan-300',
    gradientBg: 'from-slate-950 via-cyan-950 to-blue-950',
    glowColor: 'rgba(34, 211, 238, 0.35)',
    icon: '🛰️'
  },
  {
    id: 'h-ad-safaricom',
    brand: 'Safaricom 5G + M-Pesa',
    badge: '4D BORDERLESS FINTECH',
    headline: 'Zero-Fee Continental Mobile Money Rails',
    subtext: 'Instant Multi-Currency Liquidity & 5G Broadband',
    ctaText: 'Claim 5G Offer',
    badgeColor: 'bg-emerald-400 text-slate-950',
    accentColor: 'text-emerald-300',
    gradientBg: 'from-slate-950 via-emerald-950 to-teal-950',
    glowColor: 'rgba(52, 211, 153, 0.35)',
    icon: '💳'
  },
  {
    id: 'h-ad-mercedes',
    brand: 'Mercedes-AMG EQ',
    badge: 'LUXURY SHOWCASE',
    headline: 'Vision AMG Electric · 0-100 km/h in 2.2s',
    subtext: 'VIP Test Drives Open in Nairobi, Lagos & Joburg',
    ctaText: 'Book VIP Drive',
    badgeColor: 'bg-yellow-400 text-slate-950',
    accentColor: 'text-yellow-300',
    gradientBg: 'from-slate-950 via-purple-950 to-indigo-950',
    glowColor: 'rgba(234, 179, 8, 0.35)',
    icon: '🏎️'
  },
  {
    id: 'h-ad-solar',
    brand: 'Africa Solar Grids',
    badge: 'MEGAWATT CLEAN ENERGY',
    headline: '10kW Hybrid Commercial Battery Storage',
    subtext: 'Zero CapEx Deposit · Save 45% Monthly Power Costs',
    ctaText: 'Get Audit',
    badgeColor: 'bg-amber-400 text-slate-950',
    accentColor: 'text-amber-300',
    gradientBg: 'from-slate-950 via-amber-950 to-stone-950',
    glowColor: 'rgba(251, 191, 36, 0.35)',
    icon: '⚡'
  },
  {
    id: 'h-ad-qatar',
    brand: 'Qatar Airways Privilege',
    badge: 'GLOBAL PRESTIGE',
    headline: 'Fly-Free Companion Business Class Suite',
    subtext: 'Nairobi & Lagos to London, Paris, Tokyo',
    ctaText: 'Unlock Fare',
    badgeColor: 'bg-rose-400 text-slate-950',
    accentColor: 'text-rose-300',
    gradientBg: 'from-slate-950 via-rose-950 to-pink-950',
    glowColor: 'rgba(244, 63, 94, 0.35)',
    icon: '✈️'
  }
];

export const AnimatedHeader3DAd: React.FC<AnimatedHeader3DAdProps> = ({
  isAdFreeMode = false,
  onOpenMonetization
}) => {
  const [adIndex, setAdIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  // Continually flip 3D/4D ads every 3.5 seconds
  useEffect(() => {
    if (isAdFreeMode) return;
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setAdIndex((prev) => (prev + 1) % HEADER_3D_ADS.length);
        setIsFlipping(false);
      }, 400); // mid-point of 3D flip animation
    }, 3800);

    return () => clearInterval(interval);
  }, [isAdFreeMode]);

  if (isAdFreeMode) return null;

  const currentAd = HEADER_3D_ADS[adIndex];

  return (
    <div 
      className="hidden md:flex items-center flex-1 max-w-[420px] lg:max-w-[480px] xl:max-w-[560px] mx-2 lg:mx-4 select-none cursor-pointer"
      onClick={onOpenMonetization}
      title="Click to explore advertiser offer or partner with The AfricaN"
      style={{ perspective: '1000px' }}
    >
      {/* 3D / 4D Animated Container */}
      <div
        className={`w-full relative rounded-xl border border-white/20 shadow-md bg-gradient-to-r ${currentAd.gradientBg} p-2 lg:px-3 lg:py-2 transition-all duration-500 ease-out group overflow-hidden`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipping ? 'rotateX(85deg) scale(0.95)' : 'rotateX(0deg) scale(1)',
          boxShadow: `0 4px 20px ${currentAd.glowColor}`,
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease'
        }}
      >
        {/* Holographic 4D Ambient Shimmer Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          style={{ transform: 'skewX(-20deg)' }}
        />

        <div className="flex items-center justify-between gap-2.5 relative z-10">
          
          {/* Left: 3D Hologram Badge + Icon */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xl lg:text-2xl filter drop-shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
              {currentAd.icon}
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className={`text-[8px] lg:text-[9px] font-black uppercase font-mono px-1.5 py-0.5 rounded tracking-wider shadow-2xs ${currentAd.badgeColor}`}>
                  {currentAd.badge}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <span className="text-[10px] font-bold text-slate-300 font-mono tracking-tight truncate max-w-[90px] lg:max-w-[120px]">
                {currentAd.brand}
              </span>
            </div>
          </div>

          {/* Center: Dynamic Headline & Subtext */}
          <div className="flex-1 min-w-0 pr-1">
            <h5 className="text-[11px] lg:text-xs font-bold text-white group-hover:text-yellow-300 transition-colors truncate leading-tight">
              {currentAd.headline}
            </h5>
            <p className={`text-[9px] lg:text-[10px] font-medium ${currentAd.accentColor} truncate leading-tight mt-0.5`}>
              {currentAd.subtext}
            </p>
          </div>

          {/* Right: Interactive 3D CTA Button */}
          <div className="shrink-0 flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenMonetization();
              }}
              className="px-2 lg:px-2.5 py-1 bg-white hover:bg-yellow-300 text-slate-950 font-black text-[9px] lg:text-[10px] uppercase tracking-wider rounded-lg flex items-center gap-0.5 shadow-sm transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <span>{currentAd.ctaText}</span>
              <ChevronRight className="w-2.5 h-2.5 text-slate-950" />
            </button>
            <span className="hidden xl:inline text-[8px] font-mono text-white/50 uppercase">
              Ad
            </span>
          </div>

        </div>

        {/* Dynamic 4D Edge Light Strip */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-75 animate-pulse" />
      </div>
    </div>
  );
};
