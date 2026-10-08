import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw, ChevronRight } from 'lucide-react';
import { Article } from '../types';
import { useAuthor } from '../context/AuthorContext';
import { resolveMediaUrl } from '../utils/media';

interface FeaturedNewsSidebarProps {
  onSelectArticle?: (article: Article) => void;
  onSelectUpdate: (articleId: string) => void;
}

export const FeaturedNewsSidebar: React.FC<FeaturedNewsSidebarProps> = ({
  onSelectArticle,
  onSelectUpdate
}) => {
  const { articles } = useAuthor();

  // Pool of high-impact curated featured articles
  const featuredPool = articles.filter(
    (a) => a.category === 'top-stories' || a.category === 'politics' || a.category === 'technology' || a.category === 'scandals'
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Auto-refreshes after 3 seconds without any visible seconds countdown timer!
  useEffect(() => {
    const timer = setInterval(() => {
      setIsRefreshing(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.max(1, featuredPool.length - 4));
        setIsRefreshing(false);
      }, 250);
    }, 3000);

    return () => clearInterval(timer);
  }, [featuredPool.length]);

  const displayedPosts = featuredPool.slice(currentIndex, currentIndex + 5);
  // If fewer than 5, fill from the beginning
  const safePosts = displayedPosts.length >= 5 
    ? displayedPosts 
    : [...displayedPosts, ...featuredPool.slice(0, 5 - displayedPosts.length)];

  const handlePostClick = (article: Article) => {
    if (onSelectArticle) {
      onSelectArticle(article);
    } else {
      onSelectUpdate(article.id);
    }
  };

  const manualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 2) % Math.max(1, featuredPool.length - 4));
      setIsRefreshing(false);
    }, 250);
  };

  return (
    <div className="border-2 border-red-600 bg-white rounded-xl overflow-hidden shadow-xs select-none">
      
      {/* Red Header Bar (Signature Corridors of Power Design) */}
      <div className="bg-red-600 text-white px-3.5 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          <h3 className="font-sans font-black text-sm uppercase tracking-wide text-white">
            Featured News
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-mono bg-black/40 px-1.5 py-0.5 rounded uppercase font-bold text-yellow-300">
            Editor's Pick
          </span>
          <button
            onClick={manualRefresh}
            disabled={isRefreshing}
            className={`text-white p-1 hover:bg-red-700 rounded transition-colors ${
              isRefreshing ? 'animate-spin' : ''
            }`}
            title="Refresh Featured News"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Subtitle */}
      <div className="bg-red-50/80 px-3.5 py-1.5 border-b border-red-100 text-[10px] text-red-950 font-bold">
        Continental Lead Dispatches & Exclusive Investigative Reports
      </div>

      {/* 5 Posts that refresh after 3 seconds */}
      <div className={`p-3 space-y-3 divide-y divide-slate-100 transition-opacity duration-300 ${isRefreshing ? 'opacity-30' : 'opacity-100'}`}>
        {safePosts.slice(0, 5).map((post) => (
          <div
            key={post.id}
            onClick={() => handlePostClick(post)}
            className="pt-2.5 first:pt-0 cursor-pointer group text-left transition-colors"
          >
            <div className="flex gap-2.5 items-start">
              {post.imageUrl && (
                <div className="w-14 h-12 rounded-md overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                  <img
                    src={resolveMediaUrl(post.imageUrl)}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold text-red-600 uppercase block truncate">
                  {post.kicker}
                </span>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h4>
                <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>{post.readTime}</span>
                  <span className="text-red-600 font-bold group-hover:underline flex items-center gap-0.5">
                    <span>Read Story</span>
                    <ChevronRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white px-3 py-1.5 text-center text-[10px] font-mono">
        The AfricaN Curated Desk · Real-Time Coverage
      </div>
    </div>
  );
};
