import React, { useState } from 'react';
import { Newspaper, Scale, Zap, Bookmark, X } from 'lucide-react';
import { NewsCategory } from '../types';

interface MobileBottomNavProps {
  activeCategory: NewsCategory;
  onSelectCategory: (category: NewsCategory) => void;
  savedCount: number;
  onOpenSaved: () => void;
  leftSidebarElement: React.ReactNode;
  rightSidebarElement: React.ReactNode;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeCategory,
  onSelectCategory,
  savedCount,
  onOpenSaved,
  leftSidebarElement,
  rightSidebarElement
}) => {
  const [activeSheet, setActiveSheet] = useState<'none' | 'updates' | 'corridors'>('none');

  return (
    <>
      {/* Mobile Persistent Bottom Dock */}
      <nav 
        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-3 py-1.5 lg:hidden flex items-center justify-around shadow-[0_-4px_12px_rgba(0,0,0,0.08)] select-none"
        aria-label="Mobile Navigation"
      >
        {/* Tab 1: Top News */}
        <button
          onClick={() => {
            setActiveSheet('none');
            onSelectCategory('top-stories');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center py-1 px-3 rounded-lg transition-colors ${
            activeSheet === 'none' && activeCategory === 'top-stories' ? 'text-red-600 font-bold' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Newspaper className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Top News</span>
        </button>

        {/* Tab 2: Corridors of Power (Court Cases) */}
        <button
          onClick={() => setActiveSheet(activeSheet === 'corridors' ? 'none' : 'corridors')}
          className={`flex flex-col items-center py-1 px-3 rounded-lg transition-colors ${
            activeSheet === 'corridors' ? 'text-red-600 font-bold' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Scale className="w-4 h-4 mb-0.5 text-red-600" />
          <span className="text-[10px]">Corridors</span>
        </button>

        {/* Tab 3: Fast Updates (Auto-scrolls up every 5s) */}
        <button
          onClick={() => setActiveSheet(activeSheet === 'updates' ? 'none' : 'updates')}
          className={`relative flex flex-col items-center py-1 px-3 rounded-lg transition-colors ${
            activeSheet === 'updates' ? 'text-red-600 font-bold' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <Zap className="w-4 h-4 mb-0.5 text-yellow-500 fill-yellow-500" />
          <span className="text-[10px]">Live Updates</span>
        </button>

        {/* Tab 4: Saved */}
        <button
          onClick={onOpenSaved}
          className="flex flex-col items-center py-1 px-3 rounded-lg text-slate-500 hover:text-slate-900 relative transition-colors"
        >
          <Bookmark className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Saved</span>
          {savedCount > 0 && (
            <span className="absolute top-0 right-2 w-3.5 h-3.5 rounded-full bg-red-600 text-white text-[9px] flex items-center justify-center font-bold">
              {savedCount}
            </span>
          )}
        </button>
      </nav>

      {/* Slide-up Sheet */}
      {activeSheet !== 'none' && (
        <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex flex-col justify-end lg:hidden animate-in fade-in duration-150">
          <div 
            className="w-full bg-white rounded-t-2xl max-h-[85vh] flex flex-col shadow-2xl border-t border-slate-300"
            role="dialog"
            aria-modal="true"
          >
            {/* Sheet Handle & Header */}
            <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between shrink-0 bg-slate-50 rounded-t-2xl">
              <span className="font-sans font-bold text-sm text-slate-950 uppercase tracking-tight">
                {activeSheet === 'updates' && '⚡ Live Updates Desk · Real-Time Wire'}
                {activeSheet === 'corridors' && '⚖️ Corridors of Power · Court Trials'}
              </span>

              <button
                onClick={() => setActiveSheet('none')}
                className="p-1 rounded-full text-slate-500 hover:text-slate-950"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Independent Scroll Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 overscroll-contain">
              {activeSheet === 'updates' && (
                <div onClick={() => setActiveSheet('none')}>
                  {leftSidebarElement}
                </div>
              )}

              {activeSheet === 'corridors' && (
                <div onClick={() => setActiveSheet('none')}>
                  {rightSidebarElement}
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
};
