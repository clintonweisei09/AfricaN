import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, ChevronRight } from 'lucide-react';

interface FloatingCubeAdProps {
  isAdFreeMode: boolean;
  onOpenMonetization: () => void;
  variant?: 'luxury' | 'nightlife' | 'digital3d';
  className?: string;
}

interface AdSlide {
  id: string;
  sponsor: string;
  category: string;
  tagline: string;
  highlight: string;
  ctaText: string;
  bgGradient: string;
  borderColor: string;
  badgeBg: string;
  icon: string;
}

// 3. Animated Digital 3D Tech & Innovation Slides (Right Rail below Popular Posts)
const DIGITAL_3D_SLIDES: AdSlide[] = [
  {
    id: 'd3d-starlink',
    sponsor: 'Starlink Africa Business 10Gbps',
    category: 'Next-Gen Satellite',
    tagline: 'Ultra-low latency orbital connectivity across 54 African countries',
    highlight: '99.99% Guaranteed Enterprise SLA · Direct Terminal Setup',
    ctaText: 'Deploy Starlink',
    bgGradient: 'from-cyan-900 via-blue-950 to-slate-950',
    borderColor: 'border-cyan-400',
    badgeBg: 'bg-cyan-400 text-slate-950',
    icon: '🛰️'
  },
  {
    id: 'd3d-ai',
    sponsor: 'Nairobi Quantum Compute Lab',
    category: 'AI Supercomputing',
    tagline: 'East Africa’s First 128-Qubit Sovereign Cloud Machine',
    highlight: 'Accelerating African NLP Models & FinTech Encryption',
    ctaText: 'Access Quantum Cloud',
    bgGradient: 'from-purple-900 via-indigo-950 to-slate-950',
    borderColor: 'border-purple-400',
    badgeBg: 'bg-purple-400 text-white',
    icon: '🔮'
  },
  {
    id: 'd3d-solar',
    sponsor: 'SunKing Megawatt Microgrids',
    category: 'Clean Energy',
    tagline: 'Commercial Solar + Battery Storage for Industrial Parks',
    highlight: 'Zero Upfront CapEx · Instant 40% Power Cost Savings',
    ctaText: 'Request Site Audit',
    bgGradient: 'from-amber-700 via-yellow-950 to-stone-950',
    borderColor: 'border-amber-400',
    badgeBg: 'bg-yellow-400 text-slate-950',
    icon: '⚡'
  },
  {
    id: 'd3d-fintech',
    sponsor: 'M-Pesa Global Reserve Gateway',
    category: 'Borderless Payments',
    tagline: 'Instant Multi-Currency Settlements with London & Dubai',
    highlight: 'Direct Real-Time Liquidity Pool · Regulated by CBK',
    ctaText: 'Integrate API',
    bgGradient: 'from-emerald-800 via-teal-950 to-slate-950',
    borderColor: 'border-emerald-400',
    badgeBg: 'bg-emerald-400 text-slate-950',
    icon: '💳'
  }
];

// 1. Luxury & Sovereign Showcase (Right rail ad) - 6 distinct campaigns, EACH with its OWN background color!
const LUXURY_SLIDES: AdSlide[] = [
  {
    id: 'slide-mercedes',
    sponsor: 'Mercedes-AMG Vision EQ',
    category: 'Luxury Automotive',
    tagline: 'Electric Performance Revolution. 0-100 km/h in 2.2s',
    highlight: 'VIP Test Drives Open in Nairobi, Lagos & Johannesburg',
    ctaText: 'Book Test Drive',
    bgGradient: 'from-blue-900 via-indigo-950 to-slate-950',
    borderColor: 'border-blue-400/80',
    badgeBg: 'bg-blue-400 text-slate-950',
    icon: '🏎️'
  },
  {
    id: 'slide-cartier',
    sponsor: 'Cartier African Haute Couture',
    category: 'High Jewellery',
    tagline: 'Ancestral Gold Filigree & Hand-Crafted Chronographs',
    highlight: 'Exclusive Runway Pieces at Flagship Boutiques',
    ctaText: 'View High Jewellery',
    bgGradient: 'from-emerald-800 via-teal-950 to-slate-950',
    borderColor: 'border-emerald-400/80',
    badgeBg: 'bg-emerald-400 text-slate-950',
    icon: '💎'
  },
  {
    id: 'slide-stanchart',
    sponsor: 'Standard Chartered Private Wealth',
    category: 'Private Banking',
    tagline: 'Offshore Family Office Portfolios & Multi-Currency',
    highlight: 'Dedicated Wealth Director · Zero-Fee Remittances',
    ctaText: 'Open Wealth Account',
    bgGradient: 'from-rose-900 via-red-950 to-slate-950',
    borderColor: 'border-rose-400/80',
    badgeBg: 'bg-rose-500 text-white',
    icon: '💳'
  },
  {
    id: 'slide-eko',
    sponsor: 'Eko Atlantic Marina Towers',
    category: 'Ultra-Luxury Real Estate',
    tagline: 'Oceanfront Sky Penthouses with Helipads & Yacht Berths',
    highlight: '12% Guaranteed Annual Yield · Prime Title Deeds',
    ctaText: 'Inquire on Penthouse',
    bgGradient: 'from-amber-700 via-orange-950 to-slate-950',
    borderColor: 'border-amber-400/80',
    badgeBg: 'bg-amber-400 text-black',
    icon: '🏙️'
  },
  {
    id: 'slide-serena',
    sponsor: 'Zanzibar Serena Coral Resort',
    category: 'Island Resorts',
    tagline: 'Private Overwater Island Villas & Coral Reef Sanctuary',
    highlight: 'Complimentary Seaplane Transfer with Stays',
    ctaText: 'Reserve Island Suite',
    bgGradient: 'from-purple-800 via-violet-950 to-slate-950',
    borderColor: 'border-purple-400/80',
    badgeBg: 'bg-purple-400 text-black',
    icon: '🏖️'
  },
  {
    id: 'slide-starbucks',
    sponsor: 'Starbucks Reserve African Roasts',
    category: 'Artisanal Coffee',
    tagline: 'Rare Single-Origin Yirgacheffe & Mount Kenya Lots',
    highlight: 'Nitro Pour-Overs at Flagship Reserve Lounges',
    ctaText: 'Find Reserve Lounge',
    bgGradient: 'from-yellow-800 via-amber-950 to-stone-950',
    borderColor: 'border-yellow-400/80',
    badgeBg: 'bg-yellow-400 text-black',
    icon: '☕'
  }
];

// 2. Nightlife & Beverage Showcase (Left rail ad below Club Madness) - 6 distinct campaigns!
const NIGHTLIFE_SLIDES: AdSlide[] = [
  {
    id: 'night-tusker',
    sponsor: 'Tusker Malt & Premium Cider',
    category: 'Premium Brew',
    tagline: 'Pure 100% African Golden Malt for Club Legends',
    highlight: 'Special Buckets at Quiver, Alchemist & Milan',
    ctaText: 'Order Club Bucket',
    bgGradient: 'from-amber-600 via-yellow-900 to-stone-950',
    borderColor: 'border-amber-400/80',
    badgeBg: 'bg-amber-400 text-slate-950',
    icon: '🍺'
  },
  {
    id: 'night-johnnie',
    sponsor: 'Johnnie Walker Blue Label',
    category: 'Ultra-Luxury Whisky',
    tagline: 'Keep Walking Nairobi. Handcrafted Rare Casks',
    highlight: 'VIP Bottle Service with Custom Ice Sculptures',
    ctaText: 'Reserve VIP Bottle',
    bgGradient: 'from-blue-950 via-slate-900 to-indigo-950',
    borderColor: 'border-cyan-400/80',
    badgeBg: 'bg-cyan-400 text-slate-950',
    icon: '🥃'
  },
  {
    id: 'night-moet',
    sponsor: 'Moët & Chandon Nectar',
    category: 'Champagne Lounge',
    tagline: 'The Crown of Nairobi Nightlife Celebrations',
    highlight: 'Champagne Trains with Sparklers at Midnight',
    ctaText: 'Order Magnum Bottle',
    bgGradient: 'from-yellow-950 via-stone-900 to-black',
    borderColor: 'border-yellow-300/80',
    badgeBg: 'bg-yellow-400 text-black',
    icon: '🍾'
  },
  {
    id: 'night-uber',
    sponsor: 'Uber VIP Black Nairobi',
    category: 'Safe Night Rides',
    tagline: 'Chauffeured Luxury Sedans Ready Outside All Clubs',
    highlight: 'Zero Surge on Pre-Booked Midnight Club Pickups',
    ctaText: 'Book VIP Chauffeur',
    bgGradient: 'from-emerald-950 via-teal-950 to-slate-950',
    borderColor: 'border-emerald-400/80',
    badgeBg: 'bg-emerald-400 text-slate-950',
    icon: '🚘'
  },
  {
    id: 'night-redbull',
    sponsor: 'Red Bull Night Edition',
    category: 'Energy & Mixers',
    tagline: 'Vitalizes Mind & Body for All-Night DJ Sets',
    highlight: 'Available at All Main Bars & Cocktails Stations',
    ctaText: 'Grab Red Bull Mix',
    bgGradient: 'from-rose-900 via-purple-950 to-slate-950',
    borderColor: 'border-rose-400/80',
    badgeBg: 'bg-rose-400 text-white',
    icon: '⚡'
  },
  {
    id: 'night-spotify',
    sponsor: 'Spotify Afro-Beats Live',
    category: 'Club Anthems',
    tagline: 'Stream Tonight’s Kenyan & Amapiano Club Playlists',
    highlight: 'Exclusive Live DJ Sets from Alchemist & 1824',
    ctaText: 'Listen on Spotify',
    bgGradient: 'from-green-800 via-emerald-950 to-black',
    borderColor: 'border-green-400/80',
    badgeBg: 'bg-green-400 text-slate-950',
    icon: '🎧'
  }
];

export const FloatingCubeAd: React.FC<FloatingCubeAdProps> = ({
  isAdFreeMode,
  onOpenMonetization,
  variant = 'luxury',
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const slides = 
    variant === 'nightlife' 
      ? NIGHTLIFE_SLIDES 
      : variant === 'digital3d' 
      ? DIGITAL_3D_SLIDES 
      : LUXURY_SLIDES;

  // Smoothly changes ads every 4 seconds without any 3D vertical stretching or distortion!
  useEffect(() => {
    if (isAdFreeMode) return;

    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setIsFading(false);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAdFreeMode, slides.length]);

  if (isAdFreeMode) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div className={`w-full select-none ${className}`}>
      {/* Top Label */}
      <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-400 mb-1 px-1">
        <span className="font-bold text-red-600 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-red-600" />
          <span>Sponsored</span>
        </span>
        <span className="font-mono text-slate-400">
          {currentIndex + 1} / {slides.length}
        </span>
      </div>

      {/* Normal, Non-Stretching Auto-Changing Ad Card with its OWN Background Color! */}
      <div
        onClick={onOpenMonetization}
        className={`w-full rounded-2xl p-4 cursor-pointer text-white shadow-xl bg-gradient-to-br ${currentSlide.bgGradient} border-2 ${currentSlide.borderColor} hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 select-none relative overflow-hidden group`}
      >
        <div className={`transition-opacity duration-300 ${isFading ? 'opacity-20' : 'opacity-100'}`}>
          {/* Header Row */}
          <div className="flex items-center justify-between mb-2">
            <span className={`text-[9px] font-black uppercase font-mono px-2 py-0.5 rounded ${currentSlide.badgeBg}`}>
              {currentSlide.category}
            </span>
            <span className="text-2xl">{currentSlide.icon}</span>
          </div>

          {/* Headline & Body */}
          <div className="space-y-1">
            <h4 className="font-serif font-black text-sm text-white group-hover:text-yellow-300 transition-colors leading-tight">
              {currentSlide.sponsor}
            </h4>
            <p className="text-xs text-slate-200 line-clamp-2 leading-snug">
              {currentSlide.tagline}
            </p>
            <div className="text-[10px] text-yellow-300 font-mono font-medium pt-0.5">
              {currentSlide.highlight}
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-3.5 pt-2.5 border-t border-white/15 flex items-center justify-between">
            <button className="px-3 py-1 rounded-lg bg-white text-slate-950 font-black text-[11px] uppercase tracking-wider hover:bg-yellow-300 transition-colors flex items-center gap-1 shadow-xs">
              <span>{currentSlide.ctaText}</span>
              <ChevronRight className="w-3 h-3" />
            </button>
            <span className="text-[9px] text-white/70 font-mono">Sponsored</span>
          </div>
        </div>

        {/* Slide Progress Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3 pt-1 border-t border-white/10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-4 bg-yellow-400' : 'w-1.5 bg-white/30 hover:bg-white/60'
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
