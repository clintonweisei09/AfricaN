import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight, Bookmark, Edit3 } from 'lucide-react';
import { Article } from '../types';
import { useAuthor } from '../context/AuthorContext';

interface MainSliderProps {
  sliderArticles: Article[];
  trendingArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onToggleBookmark: (articleId: string) => void;
  savedArticleIds: string[];
}

export const MainSlider: React.FC<MainSliderProps> = ({
  sliderArticles,
  trendingArticles,
  onSelectArticle,
  onToggleBookmark,
  savedArticleIds
}) => {
  const { isAuthor, openArticleEditor } = useAuthor();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Smooth auto-slide transition every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying || sliderArticles.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % sliderArticles.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, sliderArticles.length]);

  const activeArticle = sliderArticles[currentIdx] || sliderArticles[0];
  if (!activeArticle) return null;

  const isSaved = savedArticleIds.includes(activeArticle.id);

  return (
    <section className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs select-none">
      
      {/* India.com Layout: 2/3 Main Hero Slider + 1/3 Trending Stories Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Main 2/3 Feature Slider with Smooth Cross-Fade Transition */}
        <div className="lg:col-span-8 relative aspect-16/9 sm:aspect-16/10 min-h-[360px] sm:min-h-[440px] bg-slate-950 group overflow-hidden">
          
          {/* Slides with Smooth CSS Transitions */}
          {sliderArticles.map((article, idx) => {
            const isCurrent = idx === currentIdx;
            return (
              <div
                key={article.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isCurrent 
                    ? 'opacity-100 scale-100 z-10 pointer-events-auto' 
                    : 'opacity-0 scale-105 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {/* Cinematic Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent"></div>
              </div>
            );
          })}

          {/* Slider Tag & Controls Top */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
            <span className="bg-red-600 text-white font-black text-xs uppercase px-2.5 py-1 rounded-sm shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              {activeArticle.kicker}
            </span>

            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xs rounded px-2.5 py-1">
              <span className="text-xs font-mono text-slate-200 font-bold">
                {currentIdx + 1} / {sliderArticles.length}
              </span>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-slate-300 hover:text-white"
                title={isAutoPlaying ? 'Pause slider' : 'Play slider'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Slider Content Overlay with Fade */}
          <div className="absolute bottom-6 left-4 right-4 sm:left-6 sm:right-6 text-white z-20 space-y-2">
            <h2
              onClick={() => onSelectArticle(activeArticle)}
              className="font-serif font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white hover:text-yellow-300 transition-colors cursor-pointer leading-[1.2]"
            >
              {activeArticle.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 font-sans leading-relaxed">
              {activeArticle.deck}
            </p>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="font-semibold text-white">{activeArticle.author.name}</span>
                <span>·</span>
                <span>{activeArticle.publishedAt}</span>
              </div>

              <div className="flex items-center gap-2">
                {isAuthor && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openArticleEditor(activeArticle);
                    }}
                    className="p-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1 text-xs font-bold"
                    title="Edit this slide as author"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-yellow-300" />
                    <span>Edit</span>
                  </button>
                )}
                <button
                  onClick={() => onToggleBookmark(activeArticle.id)}
                  className="p-1.5 rounded bg-black/40 hover:bg-black/70 text-white"
                  title="Save story"
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
                <button
                  onClick={() => onSelectArticle(activeArticle)}
                  className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1 shadow-md"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Arrow Controls */}
          <button
            onClick={() => setCurrentIdx((prev) => (prev - 1 + sliderArticles.length) % sliderArticles.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/80 text-white z-20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentIdx((prev) => (prev + 1) % sliderArticles.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/80 text-white z-20 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* 1/3 Trending Stories Side-Stack */}
        <div className="lg:col-span-4 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-3 sm:p-4 flex flex-col justify-between divide-y divide-slate-200">
          <div className="flex items-center justify-between pb-2">
            <span className="font-black text-xs uppercase tracking-wider text-red-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Trending Highlights
            </span>
            <span className="text-[10px] font-mono text-slate-400">HOT NEWS</span>
          </div>

          {trendingArticles.slice(0, 3).map((story) => (
            <div
              key={story.id}
              onClick={() => onSelectArticle(story)}
              className="py-3 flex items-start gap-3 cursor-pointer group"
            >
              <div className="w-20 h-16 rounded overflow-hidden bg-slate-200 shrink-0 border border-slate-300">
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-red-600 uppercase block leading-none mb-1">
                  {story.categoryLabel}
                </span>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                  {story.title}
                </h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] text-slate-400 font-mono">
                    {story.publishedAt}
                  </span>
                  {isAuthor && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openArticleEditor(story);
                      }}
                      className="text-[10px] font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-100 hover:bg-emerald-200 px-1.5 py-0.5 rounded flex items-center gap-0.5"
                      title="Edit this trending story"
                    >
                      <Edit3 className="w-2.5 h-2.5" />
                      <span>Edit</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="pt-2 text-center">
            <span className="text-[10px] font-mono text-slate-500">
              The AfricaN Continuous Editorial Desk
            </span>
          </div>
        </div>

      </div>

    </section>
  );
};
