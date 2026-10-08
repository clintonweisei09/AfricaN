import React, { useEffect, useState } from 'react';
import { Edit3, RefreshCw, Zap } from 'lucide-react';
import { SidebarUpdateItem } from '../types';
import { useAuthor } from '../context/AuthorContext';
import { resolveMediaUrl } from '../utils/media';

interface LiveUpdatesSidebarProps {
  onSelectUpdate: (articleId: string) => void;
}

export const LiveUpdatesSidebar: React.FC<LiveUpdatesSidebarProps> = ({ onSelectUpdate }) => {
  const { sidebarUpdates, isAuthor, openAuthorStudio } = useAuthor();
  const [freshUpdates, setFreshUpdates] = useState<SidebarUpdateItem[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const updates = [...freshUpdates, ...sidebarUpdates];

  const refreshUpdates = () => {
    setIsRefreshing(true);
    window.setTimeout(() => {
      const freshUpdate: SidebarUpdateItem = {
        id: `fresh-${Date.now()}`,
        timestamp: '',
        title: 'Special audit subcommittee summons regional revenue collector over digital platform levies',
        category: 'Scandals',
        tag: 'JUST IN',
        badgeColor: 'bg-red-600',
        articleId: 'scandal-tender-1',
        isUrgent: true,
        imageUrl: '/AfricaN/images/african_politics_summit_1791231284594.jpg',
        excerpt: 'Subcommittee questions discrepancy in cross-border e-commerce duty remittances.'
      };

      setFreshUpdates((previous) => [freshUpdate, ...previous.slice(0, 3)]);
      setIsRefreshing(false);
    }, 350);
  };

  useEffect(() => {
    const timer = window.setInterval(refreshUpdates, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border-2 border-red-600 bg-white shadow-xs">
      <div className="flex items-center justify-between bg-red-600 px-3.5 py-2.5 text-white">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 fill-yellow-300 text-yellow-300" />
          <h3 className="font-sans text-sm font-black uppercase tracking-wide">
            Live Updates
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          {isAuthor && (
            <button
              onClick={() => openAuthorStudio('wire')}
              className="flex cursor-pointer items-center gap-0.5 rounded bg-black/50 px-1.5 py-0.5 text-[10px] font-bold text-yellow-300 transition-colors hover:bg-black/80"
              title="Edit Wire Bulletins (Author)"
            >
              <Edit3 className="h-3 w-3 text-yellow-400" />
              <span>Edit Wire</span>
            </button>
          )}
          <span className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase text-yellow-300">
            Live Wire
          </span>
          <button
            onClick={refreshUpdates}
            disabled={isRefreshing}
            className={`rounded p-1 text-white transition-colors hover:bg-red-700 ${
              isRefreshing ? 'animate-spin' : ''
            }`}
            title="Refresh Live Updates"
            aria-label="Refresh Live Updates"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="border-b border-red-100 bg-red-50/80 px-3.5 py-1.5 text-[10px] font-bold text-red-950">
        Continuous Real-Time Dispatches & News Desk Bulletins
      </div>

      <div className="divide-y divide-slate-100 p-3">
        {updates.slice(0, 4).map((item, index) => (
          <button
            key={item.id}
            onClick={() => onSelectUpdate(item.articleId)}
            className="group w-full cursor-pointer pt-2.5 text-left transition-all first:pt-0"
          >
            <div className="mb-1 flex justify-end">
              <span className={`rounded-xs px-1.5 py-0.5 text-[9px] font-bold uppercase text-white ${
                index === 0 ? 'animate-pulse bg-red-600' : item.badgeColor || 'bg-slate-800'
              }`}>
                {index === 0 ? 'NEW' : item.tag}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              {item.imageUrl && (
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-slate-100">
                  <img
                    src={resolveMediaUrl(item.imageUrl)}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h4 className="line-clamp-2 text-xs font-bold leading-snug text-slate-900 transition-colors group-hover:text-red-600">
                  {item.title}
                </h4>
                {item.excerpt && (
                  <p className="mt-0.5 line-clamp-1 text-[10px] text-slate-500">
                    {item.excerpt}
                  </p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-slate-900 px-3 py-1.5 text-center font-mono text-[10px] text-white">
        The AfricaN Live Wire · Real-Time Coverage
      </div>
    </div>
  );
};
