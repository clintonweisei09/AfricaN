import React, { useState, useEffect } from 'react';
import { Zap, Sparkles, Clock, ArrowRight, ShieldCheck, Tag, Flame } from 'lucide-react';

interface AnimatedFlashAdProps {
  isAdFreeMode: boolean;
  onOpenMonetization: () => void;
}

interface FlashDeal {
  id: string;
  badge: string;
  brand: string;
  dealTitle: string;
  tagline: string;
  discount: string;
  expiresIn: string;
  ctaText: string;
  accentGradient: string;
  cardBgGradient: string;
  outerBorderGradient: string;
}

const FLASH_DEALS: FlashDeal[] = [
  {
    id: 'starlink-deal',
    badge: 'EXCLUSIVE FLASH OFFER',
    brand: 'Starlink Africa',
    dealTitle: 'High-Speed Low-Latency Satellite Internet',
    tagline: 'Order Kit with 40% Regional Subsidy & Unlimited Data Across the Continent',
    discount: '40% OFF',
    expiresIn: '02h : 18m : 45s',
    ctaText: 'Claim Subsidy Kit',
    accentGradient: 'from-amber-600 via-orange-600 to-red-600',
    cardBgGradient: 'from-amber-950 via-slate-900 to-red-950',
    outerBorderGradient: 'from-amber-500 via-yellow-400 to-red-600'
  },
  {
    id: 'solar-grid-deal',
    badge: 'SUSTAINABLE ENERGY GRANTS',
    brand: 'Africa Solar Tech',
    dealTitle: '10kW Hybrid Inverter + Lithium Battery Storage',
    tagline: 'Zero-Deposit Commercial Solar Financing for SME Factories & Estates',
    discount: 'ZERO DEPOSIT',
    expiresIn: '04h : 35m : 12s',
    ctaText: 'Apply for Grant',
    accentGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    cardBgGradient: 'from-emerald-950 via-teal-950 to-slate-950',
    outerBorderGradient: 'from-emerald-400 via-teal-300 to-cyan-500'
  },
  {
    id: 'qatar-airways-deal',
    badge: 'LIMITED BUSINESS TRAVEL',
    brand: 'Qatar Airways Privilege',
    dealTitle: 'Companion Fly-Free Business Class Pass',
    tagline: 'Book Nairobi, Lagos or Johannesburg to London, Paris, Tokyo',
    discount: '2-FOR-1 FARE',
    expiresIn: '01h : 42m : 08s',
    ctaText: 'Unlock Companion Fare',
    accentGradient: 'from-purple-600 via-pink-600 to-rose-600',
    cardBgGradient: 'from-purple-950 via-fuchsia-950 to-slate-950',
    outerBorderGradient: 'from-purple-400 via-pink-400 to-rose-500'
  },
  {
    id: 'cloud-compute-deal',
    badge: 'ENTERPRISE CLOUD DEAL',
    brand: 'African Cloud & Sovereign Compute',
    dealTitle: '50TB Tier-4 Data Center Sovereign Storage',
    tagline: '99.999% SLA Local Data Residency for Banks & Fintech Operators',
    discount: '60% OFF',
    expiresIn: '03h : 15m : 30s',
    ctaText: 'Claim Cloud Credit',
    accentGradient: 'from-blue-600 via-indigo-600 to-cyan-600',
    cardBgGradient: 'from-blue-950 via-indigo-950 to-slate-950',
    outerBorderGradient: 'from-blue-400 via-cyan-300 to-indigo-500'
  }
];

export const AnimatedFlashAd: React.FC<AnimatedFlashAdProps> = ({
  isAdFreeMode,
  onOpenMonetization
}) => {
  const [dealIndex, setDealIndex] = useState(0);

  // Auto-switch deals every 5 seconds
  useEffect(() => {
    if (isAdFreeMode) return;
    const interval = setInterval(() => {
      setDealIndex((prev) => (prev + 1) % FLASH_DEALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAdFreeMode]);

  if (isAdFreeMode) return null;

  const deal = FLASH_DEALS[dealIndex];

  return (
    <div className="w-full my-6 select-none">
      {/* Animated Glowing Outer Wrapper with deal's own border gradient */}
      <div 
        onClick={onOpenMonetization}
        className={`relative overflow-hidden rounded-2xl p-[2px] bg-gradient-to-r ${deal.outerBorderGradient} shadow-xl cursor-pointer group transition-all duration-500 transform hover:-translate-y-0.5`}
      >
        {/* Deal Card with its OWN background color! */}
        <div className={`bg-gradient-to-r ${deal.cardBgGradient} rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-500`}>
          
          {/* Left Block: Animated Badge, Brand & Offer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
            
            {/* Animated Discount Orb */}
            <div className={`shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${deal.accentGradient} flex flex-col items-center justify-center text-white font-black shadow-md animate-pulse`}>
              <span className="text-[10px] uppercase font-mono tracking-tighter">SAVE</span>
              <span className="text-xs font-sans tracking-tight text-center leading-none px-1">
                {deal.discount}
              </span>
            </div>

            {/* Deal Text info */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white font-mono font-black text-[9px] uppercase px-2 py-0.5 rounded flex items-center gap-1 shadow-xs">
                  <Flame className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                  {deal.badge}
                </span>
                <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider font-mono">
                  {deal.brand}
                </span>
                <span className="text-[10px] text-white/70 font-mono">· Sponsored</span>
              </div>

              <h4 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-yellow-300 transition-colors leading-snug">
                {deal.dealTitle}
              </h4>
              
              <p className="text-xs text-slate-300 line-clamp-1 leading-relaxed">
                {deal.tagline}
              </p>
            </div>

          </div>

          {/* Right Block: Live Countdown Timer & Pulsing CTA */}
          <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-white/10 pt-3 sm:pt-0">
            <div className="text-left sm:text-right">
              <span className="text-[9px] uppercase font-mono text-slate-300 block">Offer Closes In</span>
              <div className="flex items-center gap-1 font-mono text-xs font-bold text-yellow-400">
                <Clock className="w-3.5 h-3.5 text-red-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>{deal.expiresIn}</span>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenMonetization();
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md group-hover:scale-103 transition-transform"
            >
              <span>{deal.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
