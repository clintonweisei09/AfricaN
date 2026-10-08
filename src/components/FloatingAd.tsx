import React, { useEffect, useState } from 'react';
import {
  BatteryCharging,
  ExternalLink,
  Plane,
  Radio,
  Sparkles,
  X,
  Zap
} from 'lucide-react';
import { resolveMediaUrl } from '../utils/media';

interface FloatingAdProps {
  isAdFreeMode: boolean;
  onOpenMonetization: () => void;
}

type AdCreative =
  | { type: 'image'; imageUrl: string; imageAlt: string }
  | { type: 'signal' }
  | { type: 'offer'; discount: string }
  | { type: 'travel'; route: string };

interface PartnerAd {
  id: string;
  brand: string;
  label: string;
  headline: string;
  description: string;
  cta: string;
  theme: string;
  accent: string;
  creative: AdCreative;
}

const PARTNER_ADS: PartnerAd[] = [
  {
    id: 'safaricom',
    brand: 'Safaricom 5G & M-Pesa Global',
    label: '5G · FINTECH',
    headline: 'Move money at the speed of 5G',
    description: 'Explore cross-border payments and enterprise connectivity.',
    cta: 'Explore the offer',
    theme: 'from-emerald-950 via-teal-900 to-slate-950',
    accent: 'text-emerald-300',
    creative: { type: 'image', imageUrl: '/AfricaN/images/african_fintech_hub_1791232334696.jpg', imageAlt: 'Technology and fintech' }
  },
  {
    id: 'solar',
    brand: 'Africa Solar Tech',
    label: 'CLEAN ENERGY',
    headline: 'Power your business with sunshine',
    description: 'Discover commercial solar and battery storage solutions.',
    cta: 'See solar options',
    theme: 'from-amber-950 via-orange-900 to-slate-950',
    accent: 'text-amber-300',
    creative: { type: 'offer', discount: 'ZERO\nDEPOSIT' }
  },
  {
    id: 'qatar-airways',
    brand: 'Qatar Airways Privilege',
    label: 'BUSINESS TRAVEL',
    headline: 'Make room for a little more journey',
    description: 'Find premium fares from Nairobi, Lagos and Johannesburg.',
    cta: 'Discover destinations',
    theme: 'from-rose-950 via-fuchsia-950 to-slate-950',
    accent: 'text-rose-300',
    creative: { type: 'travel', route: 'NBO  →  DOH  →  LHR' }
  },
  {
    id: 'starlink',
    brand: 'Starlink Africa',
    label: 'SATELLITE INTERNET',
    headline: 'A stronger signal, wherever you work',
    description: 'See high-speed satellite internet options for your region.',
    cta: 'Check availability',
    theme: 'from-sky-950 via-blue-950 to-slate-950',
    accent: 'text-sky-300',
    creative: { type: 'signal' }
  }
];

function AdArtwork({ ad }: { ad: PartnerAd }) {
  if (ad.creative.type === 'image') {
    return (
      <img
        src={resolveMediaUrl(ad.creative.imageUrl)}
        alt={ad.creative.imageAlt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    );
  }

  if (ad.creative.type === 'offer') {
    return (
      <div className={`relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br ${ad.theme}`}>
        <span className="absolute -left-5 -top-7 h-24 w-24 rounded-full bg-amber-400/20 blur-xl animate-pulse" />
        <div className="relative flex items-center gap-3">
          <BatteryCharging className={`h-12 w-12 ${ad.accent} animate-bounce`} />
          <div className="rounded-lg border border-amber-300/50 bg-black/30 px-3 py-1.5 text-center shadow-lg backdrop-blur-sm">
            <span className="block whitespace-pre-line font-mono text-sm font-black leading-tight text-white">
              {ad.creative.discount}
            </span>
          </div>
          <Sparkles className="absolute -right-5 -top-3 h-4 w-4 text-yellow-200 animate-ping" />
        </div>
      </div>
    );
  }

  if (ad.creative.type === 'travel') {
    return (
      <div className={`relative flex h-full flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br ${ad.theme} px-4`}>
        <Plane className={`h-8 w-8 ${ad.accent} animate-bounce`} />
        <div className="w-full rounded-md border border-white/25 bg-white/10 px-2 py-1.5 text-center font-mono text-[10px] font-bold tracking-widest text-white backdrop-blur-sm">
          {ad.creative.route}
        </div>
        <span className="absolute -right-4 -top-7 h-20 w-20 rounded-full border border-rose-300/30 animate-ping" />
      </div>
    );
  }

  return (
    <div className={`relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br ${ad.theme}`}>
      <span className="absolute h-14 w-14 rounded-full border border-sky-300/40 animate-ping" />
      <span className="absolute h-10 w-10 rounded-full border border-sky-200/50 animate-pulse" />
      <Radio className={`relative h-9 w-9 ${ad.accent} animate-pulse`} />
      <span className="absolute bottom-2 right-2 rounded bg-black/30 px-1.5 py-0.5 font-mono text-[9px] text-white/80">
        LIVE SIGNAL
      </span>
    </div>
  );
}

export const FloatingAd: React.FC<FloatingAdProps> = ({
  isAdFreeMode,
  onOpenMonetization
}) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [adIndex, setAdIndex] = useState(0);

  useEffect(() => {
    if (isAdFreeMode || isDismissed) return;

    const interval = window.setInterval(() => {
      setAdIndex((index) => (index + 1) % PARTNER_ADS.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isAdFreeMode, isDismissed]);

  if (isAdFreeMode || isDismissed) return null;

  const ad = PARTNER_ADS[adIndex];

  return (
    <div className="fixed bottom-4 right-4 z-40 hidden select-none animate-in slide-in-from-bottom-5 duration-300 sm:block">
      <div className="w-72 overflow-hidden rounded-xl border-2 border-red-600 bg-white shadow-2xl">
        <div className="flex items-center justify-between bg-red-600 px-3 py-1 text-[10px] font-bold text-white">
          <span className="flex items-center gap-1 uppercase tracking-wider">
            <Zap className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>Featured Partner</span>
          </span>
          <button
            onClick={() => setIsDismissed(true)}
            className="rounded p-0.5 text-white hover:bg-red-700"
            title="Close floating ad"
            aria-label="Close featured partner ad"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="space-y-2 p-3" aria-live="polite">
          <div
            key={ad.id}
            className="group relative h-28 overflow-hidden rounded border border-slate-200 animate-in fade-in slide-in-from-right-2 duration-500"
          >
            <AdArtwork ad={ad} />
            <span className="absolute left-1 top-1 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wide text-white">
              {ad.label}
            </span>
          </div>

          <div key={`${ad.id}-copy`} className="animate-in fade-in duration-500">
            <h5 className={`font-sans text-[9px] font-black uppercase tracking-wide ${ad.accent}`}>
              {ad.brand}
            </h5>
            <p className="mt-0.5 text-xs font-bold leading-tight text-slate-900">
              {ad.headline}
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              {ad.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenMonetization}
              className="flex flex-1 items-center justify-center gap-1 rounded bg-red-600 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs transition-colors hover:bg-red-700"
            >
              <span>{ad.cta}</span>
              <ExternalLink className="h-3 w-3" />
            </button>
            <div className="flex items-center gap-1" aria-label="Choose partner ad">
              {PARTNER_ADS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setAdIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === adIndex ? 'w-4 bg-red-600' : 'w-1.5 bg-slate-300 hover:bg-slate-500'
                  }`}
                  aria-label={`Show ${item.brand} ad`}
                  aria-current={index === adIndex ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
