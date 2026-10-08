import React, { useState, useEffect } from 'react';
import { Flame, ChevronLeft, ChevronRight, Pause, Play, Zap, Edit3 } from 'lucide-react';
import { NewsTickerItem } from '../types';
import { useAuthor } from '../context/AuthorContext';

interface NewsTickerProps {
  headlines?: NewsTickerItem[];
  onSelectHeadline: (articleId: string) => void;
}

export const NewsTicker: React.FC<NewsTickerProps> = ({
  headlines: propHeadlines,
  onSelectHeadline
}) => {
  const { tickerHeadlines, isAuthor, openAuthorStudio } = useAuthor();
  const headlines = propHeadlines || tickerHeadlines;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 4.5 seconds
  useEffect(() => {
    if (isPaused || headlines.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, headlines.length]);

  const currentItem = headlines[currentIndex] || headlines[0];

  return (
    <div className="bg-red-600 text-white select-none shadow-xs">
      <div className="max-w-[1780px] mx-auto px-4 lg:px-6 py-1.5 flex items-center justify-between gap-3">
        
        {/* Left Badge: India.com Style High-Impact Flash Tag */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="bg-yellow-400 text-slate-950 px-2.5 py-0.5 rounded font-black text-[11px] uppercase tracking-wider flex items-center gap-1 shadow-xs">
            <Zap className="w-3.5 h-3.5 fill-slate-950" />
            <span>FLASH NEWS</span>
          </div>
          <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-white/70"></span>
        </div>

        {/* Center: Headline Content */}
        {currentItem && (
          <div className="flex-1 overflow-hidden flex items-center gap-2">
            <span className="hidden sm:inline bg-black/25 text-white/90 px-1.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold shrink-0">
              {currentItem.category}
            </span>
            <button
              onClick={() => onSelectHeadline(currentItem.articleId)}
              className="truncate text-left font-bold text-xs sm:text-sm text-white hover:text-yellow-200 transition-colors w-full cursor-pointer"
              title={currentItem.title}
            >
              {currentItem.title}
            </button>
            <span className="text-[10px] text-red-100 shrink-0 font-medium hidden sm:inline">
              ({currentItem.timeAgo})
            </span>
          </div>
        )}

        {/* Right: Controls + Author Edit Ticker Button */}
        <div className="flex items-center gap-2 shrink-0">
          {isAuthor && (
            <button
              onClick={() => openAuthorStudio('ticker')}
              className="bg-black/40 hover:bg-black/60 text-yellow-300 hover:text-white px-2 py-0.5 rounded text-[11px] font-bold font-sans flex items-center gap-1 transition-colors cursor-pointer"
              title="Edit breaking news ticker (Author only)"
            >
              <Edit3 className="w-3 h-3 text-yellow-400" />
              <span className="hidden sm:inline">Edit Ticker</span>
            </button>
          )}

          <div className="flex items-center gap-1 bg-red-700/60 rounded px-1.5 py-0.5">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1 hover:text-yellow-200 transition-colors cursor-pointer"
              title={isPaused ? 'Resume ticker' : 'Pause ticker'}
            >
              {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + headlines.length) % headlines.length)}
              className="p-1 hover:text-yellow-200 transition-colors cursor-pointer"
              title="Previous"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % headlines.length)}
              className="p-1 hover:text-yellow-200 transition-colors cursor-pointer"
              title="Next"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
