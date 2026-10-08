import React, { useState, useEffect } from 'react';
import { Scale, Flame, ChevronRight, Gavel, RefreshCw, Clock, Sparkles } from 'lucide-react';
import { Article } from '../types';
import { CORRIDORS_OF_POWER_CASES, POPULAR_POSTS } from '../data/mockNewsData';
import { AdBanner } from './AdBanner';
import { FloatingCubeAd } from './FloatingCubeAd';
import { useAuthor } from '../context/AuthorContext';

interface RightSidebarProps {
  onSelectArticle: (article: Article) => void;
  isAdFreeMode: boolean;
  onOpenMonetization: () => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  onSelectArticle,
  isAdFreeMode,
  onOpenMonetization
}) => {
  const { articles } = useAuthor();
  const [stories, setStories] = useState<Article[]>(() => articles.slice(0, 5));
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isPopularRefreshing, setIsPopularRefreshing] = useState(false);
  const [popularStories, setPopularStories] = useState<typeof POPULAR_POSTS>(POPULAR_POSTS);

  // Sync stories if articles change
  useEffect(() => {
    setStories(articles.slice(0, 5));
  }, [articles]);

  // Auto-refresh right sidebar every 5 seconds silently without any countdown or seconds display
  useEffect(() => {
    const timer = setInterval(() => {
      triggerRefresh();
    }, 5000);

    return () => clearInterval(timer);
  }, [articles]);

  const triggerRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setStories(() => {
        const shuffled = [...articles].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5);
      });
      setIsRefreshing(false);
    }, 350);
  };

  const triggerPopularRefresh = () => {
    setIsPopularRefreshing(true);
    setTimeout(() => {
      setPopularStories((prev) => {
        const shuffled = [...prev].sort(() => 0.5 - Math.random());
        return shuffled;
      });
      setIsPopularRefreshing(false);
    }, 350);
  };

  const handleSelectById = (id: string) => {
    const found = articles.find((a) => a.id === id);
    if (found) {
      onSelectArticle(found);
    }
  };

  return (
    <aside className="w-full space-y-6 select-none">
      
      {/* 1. TOP: Most Read Today (Enclosed in Signature Corridors of Power Red Design!) */}
      <div className="border-2 border-red-600 bg-white rounded-xl overflow-hidden shadow-xs">
        
        {/* Red Header Bar */}
        <div className="bg-red-600 text-white px-3.5 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <h3 className="font-sans font-black text-sm uppercase tracking-wide text-white">
              Most Read Today
            </h3>
          </div>
          
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono bg-black/40 px-1.5 py-0.5 rounded uppercase font-bold text-yellow-300">
              Trending
            </span>
            <button
              onClick={triggerRefresh}
              disabled={isRefreshing}
              className={`text-white p-1 hover:bg-red-700 rounded transition-colors ${
                isRefreshing ? 'animate-spin' : ''
              }`}
              title="Refresh Most Read feed"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <div className="bg-red-50/80 px-3.5 py-1.5 border-b border-red-100 text-[10px] text-red-950 font-bold">
          High-Traffic Dispatches & Continental Reader Favorites
        </div>

        {/* Stories list with images and titles (NO numbers displayed) */}
        <div className="p-3.5 space-y-3.5 divide-y divide-slate-100">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => onSelectArticle(story)}
              className="w-full flex items-start gap-3 pt-3 first:pt-0 text-left group transition-colors"
            >
              {/* Image thumbnail */}
              {story.imageUrl && (
                <div className="w-16 h-14 rounded-md overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold text-red-600 uppercase block mb-0.5 tracking-tight">
                  {story.categoryLabel}
                </span>
                <p className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                  {story.title}
                </p>
                <div className="text-[10px] text-slate-400 font-mono mt-1 flex items-center justify-between">
                  <span>{story.readTime}</span>
                  <span className="text-red-600 font-bold group-hover:underline">Read Story →</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-slate-900 text-white px-3 py-1.5 text-center text-[10px] font-mono">
          The AfricaN Trending Desk · Real-Time Coverage
        </div>
      </div>

      {/* 2. MIDDLE: Monetized Companion Ad Unit (Right Rail with its own background color!) */}
      <AdBanner
        slot="companion"
        isAdFreeMode={isAdFreeMode}
        onOpenMonetization={onOpenMonetization}
      />

      {/* 3. CORRIDORS OF POWER (Dedicated Court Cases & Judicial Battles Docket) */}
      <div className="border-2 border-red-600 bg-white rounded-xl overflow-hidden shadow-xs">
        
        {/* Red Header Bar */}
        <div className="bg-red-600 text-white px-3.5 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <h3 className="font-sans font-black text-sm uppercase tracking-wide text-white">
              Corridors of Power
            </h3>
          </div>
          <span className="text-[9px] font-mono bg-black/40 px-1.5 py-0.5 rounded uppercase font-bold text-yellow-300">
            Court Docket
          </span>
        </div>

        {/* Subtitle */}
        <div className="bg-red-50/80 px-3.5 py-1.5 border-b border-red-100 text-[10px] text-red-950 font-bold">
          High-Profile Court Cases, Supreme Court Petitions & Graft Trials
        </div>

        {/* Court Cases List */}
        <div className="p-3.5 space-y-3.5 divide-y divide-slate-100">
          {CORRIDORS_OF_POWER_CASES.map((courtCase) => (
            <div
              key={courtCase.id}
              onClick={() => onSelectArticle(courtCase)}
              className="pt-3 first:pt-0 cursor-pointer group text-left"
            >
              {courtCase.courtDetail && (
                <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] mb-1">
                  <span className="font-mono font-bold text-red-600 truncate max-w-[160px]">
                    {courtCase.courtDetail.caseNumber}
                  </span>
                  <span className="bg-slate-900 text-white font-bold px-1.5 py-0.2 rounded-xs text-[9px] uppercase">
                    {courtCase.courtDetail.status}
                  </span>
                </div>
              )}

              <h4 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                {courtCase.title}
              </h4>

              {courtCase.courtDetail && (
                <div className="mt-1.5 p-2 bg-slate-50 border border-slate-200 rounded text-[10px] text-slate-600 space-y-0.5">
                  <p><strong>Bench:</strong> {courtCase.courtDetail.presidingJudge}</p>
                  <p className="text-red-700 font-bold">{courtCase.courtDetail.rulingDate}</p>
                </div>
              )}

              <div className="mt-1.5 flex items-center justify-between text-[10px] text-red-600 font-bold">
                <span className="flex items-center gap-1">
                  <Gavel className="w-3 h-3" />
                  <span>View Court Hearing</span>
                </span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white px-3 py-1.5 text-center text-[10px] font-mono">
          The AfricaN Judicial Desk · Real-Time Case Coverage
        </div>
      </div>

      {/* 4. BELOW CORRIDORS OF POWER: 3D ROTATING & CHANGING FLOATING CUBE AD UNIT (Spins in all directions: up, down, left, right, with own background colors!) */}
      <FloatingCubeAd
        isAdFreeMode={isAdFreeMode}
        onOpenMonetization={onOpenMonetization}
      />

      {/* 5. JUST BELOW THE 3D CUBE AD: POPULAR POSTS SIDEBAR (Enclosed in Red Just Like Corridors of Power, NO numbers!) */}
      <div className="border-2 border-red-600 bg-white rounded-xl overflow-hidden shadow-xs">
        
        {/* Red Header Bar */}
        <div className="bg-red-600 text-white px-3.5 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <h3 className="font-sans font-black text-sm uppercase tracking-wide text-white">
              Popular Posts
            </h3>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono bg-black/40 px-1.5 py-0.5 rounded uppercase font-bold text-yellow-300">
              Viral
            </span>
            <button
              onClick={triggerPopularRefresh}
              disabled={isPopularRefreshing}
              className={`text-white p-1 hover:bg-red-700 rounded transition-colors ${
                isPopularRefreshing ? 'animate-spin' : ''
              }`}
              title="Refresh Popular Posts"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <div className="bg-red-50/80 px-3.5 py-1.5 border-b border-red-100 text-[10px] text-red-950 font-bold">
          Most Shared & Discussed Dispatches Across Social Networks
        </div>

        {/* Popular Posts List */}
        <div className="p-3.5 space-y-3.5 divide-y divide-slate-100">
          {popularStories.map((post) => (
            <div
              key={post.id}
              onClick={() => handleSelectById(post.id)}
              className="pt-3 first:pt-0 cursor-pointer group text-left transition-colors"
            >
              <div className="flex gap-3">
                {/* Thumbnail Image */}
                <div className="w-18 h-18 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Content details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-red-600 uppercase tracking-wider block mb-0.5">
                      {post.categoryLabel}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h4>
                    {/* Small intercept / excerpt */}
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight mt-1">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {post.publishedAt}
                    </span>
                    <span className="font-bold text-red-600 group-hover:underline">
                      Read Post →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white px-3 py-1.5 text-center text-[10px] font-mono">
          The AfricaN Editorial Desk · Viral Engagement
        </div>
      </div>

      {/* 5. ANIMATED DIGITAL 3D AD (Placed directly below Popular Posts as requested!) */}
      <FloatingCubeAd
        variant="digital3d"
        isAdFreeMode={isAdFreeMode}
        onOpenMonetization={onOpenMonetization}
      />

    </aside>
  );
};
