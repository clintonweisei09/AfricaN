import React, { useState } from 'react';
import { X, ExternalLink, Zap } from 'lucide-react';
import { resolveMediaUrl } from '../utils/media';

interface FloatingAdProps {
  isAdFreeMode: boolean;
  onOpenMonetization: () => void;
}

export const FloatingAd: React.FC<FloatingAdProps> = ({
  isAdFreeMode,
  onOpenMonetization
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isAdFreeMode || isDismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 hidden sm:block select-none animate-in slide-in-from-bottom-5 duration-300">
      <div className="w-72 bg-white rounded-xl shadow-2xl border-2 border-red-600 overflow-hidden">
        
        {/* Floating Ad Header */}
        <div className="bg-red-600 text-white px-3 py-1 flex items-center justify-between text-[10px] font-bold">
          <span className="flex items-center gap-1 uppercase tracking-wider">
            <Zap className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>Featured Partner</span>
          </span>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-0.5 hover:bg-red-700 rounded text-white"
            title="Close floating ad"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Floating Content */}
        <div className="p-3 space-y-2">
          <div className="aspect-16/9 rounded bg-slate-900 overflow-hidden relative border border-slate-200">
            <img
              src={resolveMediaUrl('/AfricaN/images/african_entertainment_awards_1791231296253.jpg')}
              alt="Sponsor Ad"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1 right-1 bg-black/70 text-white font-mono text-[9px] px-1 rounded">
              Ad · Safaricom
            </div>
          </div>

          <div>
            <h5 className="font-sans font-bold text-xs text-slate-900 leading-tight">
              Safaricom 5G & M-Pesa Global
            </h5>
            <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
              Zero-fee continental mobile money transfers & enterprise fiber broadband.
            </p>
          </div>

          <button
            onClick={onOpenMonetization}
            className="w-full py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1 shadow-xs"
          >
            <span>Claim Free Enterprise Trial</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
};
