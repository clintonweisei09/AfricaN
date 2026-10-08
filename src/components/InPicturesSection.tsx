import React, { useState, useEffect } from 'react';
import { 
  Camera, Play, Pause, ChevronLeft, ChevronRight, Video, 
  MapPin, Film, Sparkles, X
} from 'lucide-react';
import { InPicturesItem } from '../types';
import { useAuthor } from '../context/AuthorContext';
import { resolveMediaUrl } from '../utils/media';

export const InPicturesSection: React.FC = () => {
  const { inPicturesItems } = useAuthor();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeVideoModal, setActiveVideoModal] = useState<InPicturesItem | null>(null);

  const totalItems = inPicturesItems.length;
  const currentItem = inPicturesItems[currentIndex] || inPicturesItems[0];
  const nextIndex = (currentIndex + 1) % Math.max(1, totalItems);
  const nextItem = inPicturesItems[nextIndex] || currentItem;

  // Auto-slide every 3.5 seconds smoothly without any layout shifts
  useEffect(() => {
    if (!isPlaying || totalItems <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPlaying, totalItems]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  if (!currentItem) return null;

  return (
    <section className="w-full bg-[#0B0F17] text-white rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 select-none">
      
      {/* 1. Header Bar: Minimal, Stylish, Clean (Removed auto 3.5s, counter, and +author uploaded) */}
      <div className="bg-gradient-to-r from-red-600 via-rose-700 to-red-800 px-4 sm:px-6 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-black/30 backdrop-blur-md flex items-center justify-center">
            <Camera className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          </div>
          <div>
            <h3 className="font-sans font-black text-sm sm:text-base uppercase tracking-wider text-white leading-tight flex items-center gap-2">
              <span>In Pictures</span>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
            </h3>
          </div>
        </div>

        {/* Minimal Controls: Simple Prev/Next + Play/Pause only */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 rounded-md bg-black/30 hover:bg-black/50 text-white/90 hover:text-white transition-colors"
            title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 text-yellow-300" />
            ) : (
              <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            )}
          </button>
          <div className="w-px h-3.5 bg-white/20 mx-0.5"></div>
          <button
            onClick={handlePrev}
            className="p-1 rounded-md bg-black/30 hover:bg-black/50 text-white transition-colors"
            title="Previous picture"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded-md bg-black/30 hover:bg-black/50 text-white transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Main Body Container: Fixed Heights to Guarantee Zero Movement / Shaking */}
      <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* LEFT COLUMN: Main Picture Display (Strict Fixed Dimensions to prevent CLS) */}
        <div className="lg:col-span-7 flex flex-col justify-between h-[420px]">
          
          {/* Main Photo Frame (Fixed Height: 350px) */}
          <div className="relative h-[348px] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner group">
            <img
              src={resolveMediaUrl(currentItem.photoUrl)}
              alt={currentItem.photoTitle}
              className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              loading="eager"
            />
            
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
              <span className="bg-red-600/90 backdrop-blur-md text-white font-sans font-black text-[10px] uppercase px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                <span>Featured Dispatch</span>
              </span>

              <span className="bg-black/75 backdrop-blur-md text-slate-200 font-mono text-[10px] px-2 py-0.5 rounded flex items-center gap-1 border border-white/10">
                <MapPin className="w-3 h-3 text-red-400" />
                <span className="truncate max-w-[160px]">{currentItem.location}</span>
              </span>
            </div>

            {/* Bottom Caption Overlay: Strictly constrained height (72px) to prevent layout shifts */}
            <div className="absolute bottom-3 left-3 right-3 h-[72px] overflow-hidden flex flex-col justify-end pointer-events-none">
              <h4 className="text-sm sm:text-base font-serif font-black text-white leading-tight line-clamp-1 drop-shadow-md">
                {currentItem.photoTitle}
              </h4>
              <p className="text-[11px] text-slate-300 line-clamp-2 leading-snug mt-1 opacity-90 drop-shadow-sm">
                {currentItem.caption}
              </p>
            </div>
          </div>

          {/* Thumbnail Scrubber Strip: Fixed Height (48px) */}
          <div className="h-[48px] flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            {inPicturesItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPlaying(false);
                }}
                className={`relative w-16 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-red-500 ring-2 ring-red-400/50 scale-102'
                    : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                }`}
                title={item.photoTitle}
              >
                <img
                  src={resolveMediaUrl(item.photoUrl)}
                  alt={item.photoTitle}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Next Video Spotlight (Strict Fixed Dimensions: 420px total) */}
        <div className="lg:col-span-5 h-[420px] flex flex-col justify-between bg-slate-900/60 rounded-xl p-4 border border-slate-800/80">
          
          <div className="space-y-2">
            {/* Header: Next Video Spotlight */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-red-500" />
                <span className="font-sans font-black text-xs uppercase tracking-wider text-white">
                  Next Video Spotlight
                </span>
              </div>
              <span className="text-[10px] font-mono text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20">
                HD Footage
              </span>
            </div>

            {/* Video Player Card / Preview: Fixed Height (180px) */}
            <div 
              onClick={() => setActiveVideoModal(currentItem)}
              className="relative h-[180px] w-full rounded-xl overflow-hidden bg-black border border-slate-700/80 group cursor-pointer shadow-lg"
            >
              <img
                src={resolveMediaUrl(currentItem.photoUrl)}
                alt={currentItem.videoTitle}
                className="w-full h-full object-cover opacity-75 group-hover:scale-104 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20"></div>

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all border-2 border-white/80">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black/85 backdrop-blur-md text-white font-mono text-[10px] px-2 py-0.5 rounded flex items-center gap-1 border border-white/20">
                <Video className="w-3 h-3 text-red-400" />
                <span>{currentItem.videoDuration}</span>
              </div>

              <div className="absolute top-2 left-2 bg-red-600 text-white font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded shadow-xs">
                EXCLUSIVE
              </div>
            </div>

            {/* Video Title and Context: Fixed Height (68px) to Prevent Shaking */}
            <div className="h-[68px] overflow-hidden flex flex-col justify-start space-y-0.5 pt-1">
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide block">
                🎥 Investigative Reel
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400 transition-colors leading-snug line-clamp-1">
                {currentItem.videoTitle}
              </h4>
              <p className="text-[11px] text-slate-400 line-clamp-1">
                Watch full verified dispatch from {currentItem.location}.
              </p>
            </div>
          </div>

          {/* Next Video in Queue: Fixed Height (64px) */}
          <div className="h-[64px] border-t border-slate-800 pt-2 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] font-mono leading-none mb-1">
              <span className="text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-yellow-300" />
                Next Up in Queue:
              </span>
              <span className="text-red-400 font-bold">{nextItem.videoDuration}</span>
            </div>
            
            <div 
              onClick={() => setCurrentIndex(nextIndex)}
              className="p-1.5 bg-slate-950/80 hover:bg-slate-950 rounded-lg border border-slate-800 cursor-pointer group flex items-center gap-2.5 transition-colors"
            >
              <div className="w-10 h-7 rounded overflow-hidden bg-slate-800 shrink-0 border border-slate-700">
                <img
                  src={resolveMediaUrl(nextItem.photoUrl)}
                  alt={nextItem.videoTitle}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-slate-300 group-hover:text-yellow-300 truncate transition-colors leading-tight">
                  {nextItem.videoTitle}
                </p>
                <span className="text-[9px] text-slate-500 font-mono block truncate">
                  📍 {nextItem.location}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 3. Cinema Video Player Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-red-500" />
                <h3 className="font-sans font-bold text-sm text-white truncate max-w-md">
                  {activeVideoModal.videoTitle}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Frame */}
            <div className="aspect-16/9 bg-black w-full relative">
              <iframe
                src={`${activeVideoModal.videoUrl}?autoplay=1`}
                title={activeVideoModal.videoTitle}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Footer */}
            <div className="p-4 bg-slate-950 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div>
                <p className="font-bold text-white">{activeVideoModal.photoTitle}</p>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  Authored by {activeVideoModal.authorCredit} · {activeVideoModal.location}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                  Duration: {activeVideoModal.videoDuration}
                </span>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
