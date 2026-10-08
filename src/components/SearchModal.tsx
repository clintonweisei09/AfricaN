import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  bulletins?: any[];
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.deck.toLowerCase().includes(query.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      a.author.name.toLowerCase().includes(query.toLowerCase()) ||
      (a.courtDetail && a.courtDetail.courtName.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-300 overflow-hidden flex flex-col max-h-[80vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search The AfricaN: court trials, politics, gossip, scandals..."
            className="w-full text-sm text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-slate-500 hover:text-slate-900 font-semibold px-2 py-1 rounded bg-slate-200 shrink-0"
          >
            Esc
          </button>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
          {query.trim() === '' ? (
            <div className="space-y-4 py-4 text-center">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                Trending Searches on The AfricaN
              </span>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Supreme Court Ruling', 'Tender Scandal', 'Celebrity Romance', 'Afcon Final', 'PAPSS Fintech'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded text-xs text-slate-700 font-medium transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">
                Matching Stories & Investigations ({filteredArticles.length})
              </h4>
              {filteredArticles.length > 0 ? (
                <div className="space-y-2">
                  {filteredArticles.map((art) => (
                    <button
                      key={art.id}
                      onClick={() => {
                        onSelectArticle(art);
                        onClose();
                      }}
                      className="w-full text-left p-3 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-all group flex items-start justify-between gap-3 shadow-2xs"
                    >
                      <div>
                        <span className="text-[10px] font-mono uppercase text-red-600 font-bold">
                          {art.categoryLabel}
                        </span>
                        <h5 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug mt-0.5">
                          {art.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-sans">
                          {art.deck}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic py-2">No matching news articles found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
