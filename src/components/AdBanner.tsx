import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, X, Zap } from 'lucide-react';
import { AdUnit } from '../types';
import { resolveMediaUrl } from '../utils/media';

interface AdBannerProps {
  slot: 'leaderboard' | 'skyscraper' | 'companion' | 'mobile_sticky' | 'midpage';
  isAdFreeMode?: boolean;
  onOpenMonetization?: () => void;
  className?: string;
}

interface RichAdUnit extends AdUnit {
  bgGradient: string;
  borderAccent: string;
  badgeColor: string;
  highlightText: string;
  categoryTag: string;
}

// Every ad has its own unique background color!
const ROTATING_ADS: RichAdUnit[] = [
  {
    id: 'ad-safaricom',
    format: 'leaderboard',
    sponsor: 'Safaricom 5G & M-Pesa Global',
    tagline: 'Connect Across the Continent with Lightning Speed',
    description: 'Experience ultra-fast 5G enterprise broadband and zero-fee continental mobile money transfers.',
    ctaText: 'Claim 5G Offer',
    ctaLink: '#monetization',
    cpmRate: '$38.50 CPM',
    imageUrl: '/src/assets/images/african_fintech_hub_1791232334696.jpg',
    bgGradient: 'from-emerald-950 via-teal-950 to-slate-950',
    borderAccent: 'border-emerald-500/50 hover:border-emerald-400',
    badgeColor: 'bg-emerald-400 text-slate-950',
    highlightText: 'text-emerald-300',
    categoryTag: '5G TELECOM & FINTECH'
  },
  {
    id: 'ad-ethiopian',
    format: 'leaderboard',
    sponsor: 'Ethiopian Airlines Star Alliance',
    tagline: 'Connecting 130+ Global Destinations Across Africa & the World',
    description: 'Fly with Africa\'s premier carrier. Book business class with award-winning luxury hospitality.',
    ctaText: 'Book Flight Deals',
    ctaLink: '#monetization',
    cpmRate: '$34.00 CPM',
    imageUrl: '/src/assets/images/world_diplomacy_summit_1791229858035.jpg',
    bgGradient: 'from-blue-950 via-indigo-950 to-slate-950',
    borderAccent: 'border-blue-500/50 hover:border-blue-400',
    badgeColor: 'bg-blue-400 text-slate-950',
    highlightText: 'text-blue-300',
    categoryTag: 'GLOBAL AVIATION & TRAVEL'
  },
  {
    id: 'ad-law-school',
    format: 'skyscraper',
    sponsor: 'Pan-African Law & Governance Institute',
    tagline: '2027 Executive Master of Laws Scholarships',
    description: 'Advance your career in Constitutional Litigation, International Arbitration & Mineral Rights.',
    ctaText: 'Apply for Scholarship',
    ctaLink: '#monetization',
    cpmRate: '$29.00 CPM',
    imageUrl: '/src/assets/images/corridors_court_judge_1791231272938.jpg',
    bgGradient: 'from-purple-950 via-fuchsia-950 to-slate-950',
    borderAccent: 'border-purple-500/50 hover:border-purple-400',
    badgeColor: 'bg-purple-400 text-slate-950',
    highlightText: 'text-purple-300',
    categoryTag: 'LEGAL EDUCATION & RESEARCH'
  },
  {
    id: 'ad-equity-bank',
    format: 'companion',
    sponsor: 'Equity Continental Commercial Bank',
    tagline: 'Cross-Border SME Working Capital Loans',
    description: 'Instant mobile business credit lines up to $500,000 within 24 hours with zero paperwork.',
    ctaText: 'Open Account',
    ctaLink: '#monetization',
    cpmRate: '$26.00 CPM',
    imageUrl: '/src/assets/images/african_fintech_hub_1791232334696.jpg',
    bgGradient: 'from-amber-950 via-orange-950 to-stone-950',
    borderAccent: 'border-amber-500/50 hover:border-amber-400',
    badgeColor: 'bg-amber-400 text-slate-950',
    highlightText: 'text-amber-300',
    categoryTag: 'COMMERCIAL SME BANKING'
  },
  {
    id: 'ad-rwanda-eco',
    format: 'leaderboard',
    sponsor: 'Rwanda Eco-Tourism & Gorilla Expeditions',
    tagline: 'Exclusive Volcanoes National Park Luxury Lodges',
    description: 'Track endangered mountain gorillas in their pristine natural habitat with private naturalist guides.',
    ctaText: 'Plan Safari',
    ctaLink: '#monetization',
    cpmRate: '$32.00 CPM',
    imageUrl: '/src/assets/images/green_energy_grid_1791229322913.jpg',
    bgGradient: 'from-teal-950 via-cyan-950 to-slate-950',
    borderAccent: 'border-teal-500/50 hover:border-teal-400',
    badgeColor: 'bg-teal-400 text-slate-950',
    highlightText: 'text-teal-300',
    categoryTag: 'ECO-TOURISM & SAFARI'
  },
  {
    id: 'ad-lagos-tech',
    format: 'midpage',
    sponsor: 'Lagos Tech & Sovereign AI Summit 2027',
    tagline: '15,000 Founders, Engineers and Capital Allocators',
    description: 'Join the premier gathering of African venture capital, deep tech builders and sovereign fund managers.',
    ctaText: 'Register Passes',
    ctaLink: '#monetization',
    cpmRate: '$35.00 CPM',
    imageUrl: '/src/assets/images/tech_semiconductor_ai_1791229310782.jpg',
    bgGradient: 'from-rose-950 via-red-950 to-slate-950',
    borderAccent: 'border-rose-500/50 hover:border-rose-400',
    badgeColor: 'bg-rose-400 text-white',
    highlightText: 'text-rose-300',
    categoryTag: 'TECH VENTURE & SUMMIT'
  }
];

export const AdBanner: React.FC<AdBannerProps> = ({
  slot,
  isAdFreeMode = false,
  onOpenMonetization,
  className = ''
}) => {
  const [adIndex, setAdIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  // Rotate changing adverts smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setAdIndex((prev) => (prev + 1) % ROTATING_ADS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  if (isAdFreeMode || isDismissed) {
    return null;
  }

  const currentAd = ROTATING_ADS[adIndex] || ROTATING_ADS[0];

  // 1. Leaderboard / Midpage Animated Changing Banner (With its OWN background color, NO time count!)
  if (slot === 'leaderboard' || slot === 'midpage') {
    return (
      <div className={`w-full my-4 select-none ${className}`}>
        {/* Top Label */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-400 mb-1 px-1">
          <span className="flex items-center gap-1.5 font-bold text-red-600">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
            <span>SPONSORED</span>
          </span>
          <button
            onClick={() => setIsDismissed(true)}
            className="hover:text-slate-900 transition-colors text-slate-400"
            title="Hide this ad"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3D Animated Card Container with Each Ad's OWN Background Color! */}
        <div 
          onClick={onOpenMonetization}
          className={`relative border-2 ${currentAd.borderAccent} bg-gradient-to-r ${currentAd.bgGradient} text-white rounded-2xl overflow-hidden p-3.5 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl transition-all duration-500 transform hover:-translate-y-0.5 cursor-pointer group`}
        >
          {/* Animated Glow Ribbon */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-amber-500 text-slate-950 font-black text-[9px] uppercase px-3 py-0.5 rounded-bl shadow-xs flex items-center gap-1">
            <Zap className="w-3 h-3 fill-slate-950" />
            <span>FEATURED PARTNER</span>
          </div>

          <div className="flex items-center gap-4 flex-1">
            {currentAd.imageUrl && (
              <div className="w-24 h-16 sm:w-32 sm:h-20 rounded-xl bg-slate-900 overflow-hidden shrink-0 border border-white/20 shadow-md">
                <img
                  src={resolveMediaUrl(currentAd.imageUrl)}
                  alt={currentAd.sponsor}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className={`text-[9px] font-black uppercase font-mono px-1.5 py-0.2 rounded ${currentAd.badgeColor}`}>
                  {currentAd.categoryTag}
                </span>
                <h4 className="font-serif font-black text-white text-base sm:text-lg group-hover:text-yellow-300 transition-colors">
                  {currentAd.sponsor}
                </h4>
              </div>
              <p className={`text-xs font-bold ${currentAd.highlightText}`}>
                {currentAd.tagline}
              </p>
              <p className="text-xs text-slate-300 max-w-2xl line-clamp-2 leading-relaxed">
                {currentAd.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenMonetization) onOpenMonetization();
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg group-hover:scale-103 whitespace-nowrap animate-pulse"
            >
              <span>{currentAd.ctaText}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Skyscraper (Left Rail Changing Ad with Its Own Background Color!)
  if (slot === 'skyscraper') {
    return (
      <div className={`w-full select-none ${className}`}>
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-400 mb-1 px-1">
          <span className="font-bold text-red-600">Sponsored</span>
          <button onClick={() => setIsDismissed(true)} className="hover:text-slate-900 text-slate-400">
            <X className="w-3 h-3" />
          </button>
        </div>

        {/* Unique Gradient Background */}
        <div 
          onClick={onOpenMonetization}
          className={`border-2 ${currentAd.borderAccent} bg-gradient-to-b ${currentAd.bgGradient} text-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer text-left group`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-[9px] font-black uppercase font-mono px-1.5 py-0.5 rounded ${currentAd.badgeColor}`}>
              {currentAd.categoryTag}
            </span>
            <span className="text-[9px] bg-yellow-400 text-slate-950 font-black px-1.5 py-0.2 rounded uppercase">
              VERIFIED
            </span>
          </div>

          {currentAd.imageUrl && (
            <div className="w-full aspect-16/9 rounded-xl bg-slate-900 overflow-hidden mb-2.5 border border-white/20 shadow-md">
              <img
                src={resolveMediaUrl(currentAd.imageUrl)}
                alt={currentAd.sponsor}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          )}

          <h5 className="font-serif font-black text-white text-sm leading-snug group-hover:text-yellow-300 transition-colors">
            {currentAd.sponsor}
          </h5>
          <p className="text-xs text-slate-200 mt-1 leading-relaxed line-clamp-3">
            {currentAd.description}
          </p>

          <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-mono">Premium Partner</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenMonetization) onOpenMonetization();
              }}
              className="px-3.5 py-1.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white rounded-lg text-[11px] font-bold uppercase transition-all shadow-md"
            >
              {currentAd.ctaText}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. Companion (Right Rail Changing Ad with Its Own Background Color!)
  if (slot === 'companion') {
    return (
      <div className={`w-full select-none ${className}`}>
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-400 mb-1 px-1">
          <span className="font-bold text-red-600">Sponsored</span>
          <button onClick={() => setIsDismissed(true)} className="hover:text-slate-900 text-slate-400">
            <X className="w-3 h-3" />
          </button>
        </div>

        {/* Distinctive Dark Background per Ad */}
        <div 
          onClick={onOpenMonetization}
          className={`border-2 ${currentAd.borderAccent} bg-gradient-to-b ${currentAd.bgGradient} text-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span>EXECUTIVE PARTNER</span>
            </div>
            <span className={`text-[8px] font-black uppercase font-mono px-1.5 py-0.2 rounded ${currentAd.badgeColor}`}>
              {currentAd.categoryTag}
            </span>
          </div>

          {currentAd.imageUrl && (
            <div className="w-full h-24 rounded-xl bg-slate-900 overflow-hidden mb-2.5 border border-white/20">
              <img
                src={resolveMediaUrl(currentAd.imageUrl)}
                alt={currentAd.sponsor}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          )}

          <h5 className="font-serif font-black text-white text-sm mt-1 group-hover:text-amber-300 transition-colors">
            {currentAd.sponsor}
          </h5>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed line-clamp-2">
            {currentAd.description}
          </p>

          <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10">
            <span className="text-[10px] font-mono text-slate-400">{currentAd.cpmRate}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenMonetization) onOpenMonetization();
              }}
              className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1 shadow-md"
            >
              <span>Explore</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 4. Mobile Sticky Bottom Anchor
  if (slot === 'mobile_sticky') {
    return (
      <div className={`fixed bottom-14 left-0 right-0 z-40 bg-gradient-to-r ${currentAd.bgGradient} text-white border-t border-red-500/40 px-3 py-2 shadow-2xl lg:hidden max-h-[60px] flex items-center justify-between select-none`}>
        <div className="flex items-center gap-2 overflow-hidden flex-1">
          <span className="text-[9px] uppercase tracking-widest bg-red-600 text-white font-bold px-1.5 py-0.5 rounded shrink-0">
            Sponsored
          </span>
          <div className="truncate">
            <p className="text-[11px] font-bold truncate text-white leading-tight">
              {currentAd.sponsor} — {currentAd.tagline}
            </p>
            <p className="text-[10px] text-slate-300 truncate">
              {currentAd.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-2">
          <button
            onClick={onOpenMonetization}
            className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold rounded transition-colors whitespace-nowrap animate-pulse"
          >
            {currentAd.ctaText}
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-slate-400 hover:text-white"
            title="Close ad"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  return null;
};
