import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Edit3, Plus, Sliders } from 'lucide-react';
import { Article, NewsCategory } from '../types';
import { useAuthor } from '../context/AuthorContext';
import { resolveMediaUrl } from '../utils/media';

interface SectionBlockProps {
  title: string;
  category: NewsCategory;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onViewAll?: (category: NewsCategory) => void;
  accentColor?: string;
  isFullWidth?: boolean;
}

export const SectionBlock: React.FC<SectionBlockProps> = ({
  title,
  category,
  articles,
  onSelectArticle,
  onViewAll,
  isFullWidth = false
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isAuthor, openArticleEditor, openAuthorStudio } = useAuthor();

  if (articles.length === 0) return null;

  // Lead story is the first article, followed by secondary articles
  const leadStory = articles[0];
  const secondaryStories = articles.slice(1, 7);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="space-y-4 pt-2 select-none w-full">
      
      {/* 1. Section Header: Title + Red Accent Bar */}
      <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 w-full">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-5 bg-red-600 inline-block rounded-xs"></span>
          <h3 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tight text-slate-950">
            {title}
          </h3>
          {isAuthor && (
            <div className="flex items-center gap-1.5 ml-2">
              <button
                onClick={() => openArticleEditor(null, category)}
                className="px-2 py-0.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded text-xs font-bold font-sans flex items-center gap-1 transition-colors cursor-pointer"
                title={`Add new story directly to ${title}`}
              >
                <Plus className="w-3 h-3 text-emerald-700" />
                <span>+ Add Post</span>
              </button>
              <button
                onClick={() => openAuthorStudio('categories')}
                className="px-1.5 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-bold font-sans flex items-center gap-1 transition-colors cursor-pointer"
                title="Edit category names and settings"
              >
                <Sliders className="w-3 h-3 text-slate-500" />
                <span className="hidden sm:inline">Edit Category</span>
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Scroll controls */}
          <div className="flex items-center gap-1 border border-slate-200 rounded-lg p-0.5 bg-white shadow-2xs">
            <button
              onClick={scrollLeft}
              className="p-1 rounded hover:bg-slate-100 text-slate-600 hover:text-red-600 transition-colors"
              title="Previous posts"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-1 rounded hover:bg-slate-100 text-slate-600 hover:text-red-600 transition-colors"
              title="Next posts"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {onViewAll && (
            <button
              onClick={() => onViewAll(category)}
              className="text-xs font-bold text-red-600 hover:text-red-800 uppercase tracking-wider flex items-center gap-1 group transition-colors ml-1"
            >
              <span className="hidden sm:inline">View All</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Top Lead Story Card (Compact, elegant image sizes — NOT too big!) */}
      {leadStory && (
        <div
          onClick={() => onSelectArticle(leadStory)}
          className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-400 hover:shadow-xs transition-all cursor-pointer group flex flex-col sm:flex-row items-stretch p-3 gap-4 w-full"
        >
          {/* Compact visual image container */}
          <div className="w-full sm:w-64 md:w-80 lg:w-96 h-44 sm:h-48 rounded-lg overflow-hidden bg-slate-100 relative shrink-0">
            <img
              src={resolveMediaUrl(leadStory.imageUrl)}
              alt={leadStory.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
            />
            <span className="absolute top-2 left-2 bg-red-600 text-white font-bold text-[9px] uppercase px-2 py-0.5 rounded-xs shadow-xs">
              {leadStory.categoryLabel}
            </span>
            <span className="absolute bottom-2 right-2 bg-black/80 text-white font-mono text-[9px] px-1.5 py-0.5 rounded">
              {leadStory.readTime}
            </span>
          </div>

          {/* Lead Content Text */}
          <div className="flex-1 flex flex-col justify-between space-y-2 py-0.5">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block">
                {leadStory.kicker}
              </span>
              <h4 className="font-serif font-bold text-base sm:text-lg text-slate-950 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                {leadStory.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
                {leadStory.deck}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <div className="flex items-center gap-2">
                {leadStory.author.avatar && (
                  <img
                    src={resolveMediaUrl(leadStory.author.avatar)}
                    alt={leadStory.author.name}
                    className="w-5 h-5 rounded-full object-cover border border-slate-300"
                  />
                )}
                <span className="font-sans font-medium text-slate-800 truncate max-w-[140px]">
                  {leadStory.author.name}
                </span>
                <span>·</span>
                <span>{leadStory.publishedAt}</span>
              </div>
              <div className="flex items-center gap-2">
                {isAuthor && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openArticleEditor(leadStory);
                    }}
                    className="px-2 py-0.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded text-xs flex items-center gap-1 font-bold font-sans transition-colors"
                    title="Edit story (Author only)"
                  >
                    <Edit3 className="w-3 h-3 text-emerald-700" />
                    <span>Edit</span>
                  </button>
                )}
                <span className="text-red-600 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 font-sans text-xs">
                  Read Story →
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Secondary Posts Grid (3-column layout matching Politics & Governance and Scandals) */}
      <div 
        ref={scrollRef}
        className="grid grid-flow-col auto-cols-[220px] sm:auto-cols-[240px] md:grid-flow-row md:grid-cols-3 gap-3.5 overflow-x-auto pb-1 custom-scrollbar snap-x w-full"
      >
        {secondaryStories.map((story) => (
          <div
            key={story.id}
            onClick={() => onSelectArticle(story)}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-400 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between snap-start"
          >
            <div>
              {/* Compact Thumbnail — NOT too big! */}
              <div className="w-full h-28 overflow-hidden bg-slate-100 relative">
                <img
                  src={resolveMediaUrl(story.imageUrl)}
                  alt={story.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-1.5 left-1.5 bg-slate-900/85 text-white font-bold text-[8px] uppercase px-1.5 py-0.5 rounded-xs">
                  {story.categoryLabel}
                </span>
                <span className="absolute bottom-1.5 right-1.5 bg-black/75 text-white font-mono text-[8px] px-1 py-0.5 rounded">
                  {story.readTime}
                </span>
              </div>

              {/* Title & Small Intercept */}
              <div className="p-2.5 space-y-1">
                <span className="text-[9px] font-bold text-red-600 uppercase tracking-tight block truncate">
                  {story.kicker}
                </span>
                <h5 className="font-serif font-bold text-xs text-slate-950 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                  {story.title}
                </h5>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight">
                  {story.deck}
                </p>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="px-2.5 pb-2 pt-1.5 text-[9px] text-slate-400 font-mono flex items-center justify-between border-t border-slate-100">
              <span className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5 text-slate-400" />
                {story.publishedAt}
              </span>
              <div className="flex items-center gap-1.5">
                {isAuthor && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openArticleEditor(story);
                    }}
                    className="px-1.5 py-0.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded text-[9px] flex items-center gap-0.5 font-bold font-sans transition-colors"
                    title="Edit story (Author only)"
                  >
                    <Edit3 className="w-2.5 h-2.5 text-emerald-700" />
                    <span>Edit</span>
                  </button>
                )}
                <span className="text-red-600 font-bold group-hover:underline">
                  Read →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
