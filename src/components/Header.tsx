import React from 'react';
import { Sparkles, Lock, Edit3, Plus, LogOut, ShieldCheck, Search, LayoutDashboard } from 'lucide-react';
import { NewsCategory } from '../types';
import { useAuthor } from '../context/AuthorContext';
import { DigitalLogo } from './DigitalLogo';
import { AnimatedHeader3DAd } from './AnimatedHeader3DAd';

interface HeaderProps {
  activeCategory: NewsCategory;
  onSelectCategory: (category: NewsCategory) => void;
  onOpenMonetization: () => void;
  onOpenSearch?: () => void;
  onOpenPolicy?: (tab: 'about' | 'contact' | 'privacy' | 'terms') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenMonetization,
  onOpenSearch,
  onOpenPolicy
}) => {
  const { 
    isAuthor, 
    authorName, 
    openLoginModal, 
    logoutAuthor, 
    openArticleEditor, 
    openAuthorStudio,
    categoriesConfig 
  } = useAuthor();

  // Dynamic homepage category pages driven by author's editable categoriesConfig
  const topPages = categoriesConfig.filter((c) => c.enabled !== false);

  const handleNavClick = (catId: NewsCategory) => {
    onSelectCategory(catId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Return to front landing / home page and scroll smoothly to top
    onSelectCategory('top-stories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white border-b border-slate-200 shadow-xs select-none">
      
      {/* Brand Bar */}
      <div className="max-w-[1780px] mx-auto px-4 lg:px-6 py-3 flex items-center justify-between gap-4">
        
        {/* Brand Digital Logo: AfricaN + Continually Changing 3D/4D Animated Ad Banner */}
        <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
          <a
            href="#top"
            onClick={handleLogoClick}
            className="flex items-center gap-1 group transition-transform hover:opacity-95 shrink-0 cursor-pointer"
            title="Return to The AfricaN Front Page / Home"
          >
            <DigitalLogo size="normal" />
          </a>

          {/* Continually Animated 3D/4D Ad Banner perfectly filling the right white space next to the website name */}
          <AnimatedHeader3DAd onOpenMonetization={onOpenMonetization} />
        </div>

        {/* Right Action: Search, Author Status & Advertise CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-red-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              title="Search news stories"
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          {isAuthor ? (
            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 rounded-lg px-2.5 py-1">
              <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="hidden sm:inline">Author:</span> {authorName}
              </span>
              <button
                onClick={() => openAuthorStudio()}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-900 hover:bg-black text-white rounded text-[11px] font-bold transition-colors cursor-pointer"
                title="Open Author Studio (Manage all articles & posts)"
              >
                <LayoutDashboard className="w-3 h-3 text-yellow-300" />
                <span className="hidden lg:inline">Studio</span>
              </button>
              <button
                onClick={() => openArticleEditor(null)}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded text-[11px] font-bold transition-colors cursor-pointer"
                title="Create New Story as Author"
              >
                <Plus className="w-3 h-3" />
                <span className="hidden md:inline">New Story</span>
              </button>
              <button
                onClick={logoutAuthor}
                className="p-1 hover:bg-emerald-200 text-emerald-800 rounded transition-colors cursor-pointer"
                title="Log Out Author"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={openLoginModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold transition-colors border border-slate-300 cursor-pointer"
              title="Site is editable only by author Clinton Weisei. Click to authenticate."
            >
              <Lock className="w-3.5 h-3.5 text-red-600" />
              <span className="hidden sm:inline">Author Access</span>
              <span className="sm:hidden">Author</span>
            </button>
          )}

          <button
            onClick={onOpenMonetization}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span className="hidden sm:inline">Advertise with Us</span>
            <span className="sm:hidden">Advertise</span>
          </button>
        </div>
      </div>

      {/* Author Active Ribbon */}
      {isAuthor && (
        <div className="bg-emerald-600 text-white text-[11px] font-bold py-1 px-4 flex items-center justify-between">
          <div className="flex items-center justify-between max-w-[1780px] mx-auto w-full">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
              <span>
                Author Editorial Mode Enabled: You have exclusive permissions to create, edit, and delete all posts across the website.
              </span>
            </div>
            <button
              onClick={() => openAuthorStudio()}
              className="underline hover:text-yellow-200 text-[11px] font-bold ml-2 cursor-pointer"
            >
              Open Full Author Studio →
            </button>
          </div>
        </div>
      )}

      {/* Top Pages Navigation Bar */}
      <nav className="bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-[1780px] mx-auto px-4 lg:px-6 overflow-x-auto scrollbar-none flex items-center gap-1 sm:gap-1.5 py-1.5">
          {topPages.map((page) => {
            const isActive = activeCategory === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-all rounded-md ${
                  isActive
                    ? 'bg-red-600 text-white shadow-xs'
                    : page.isHighlight
                    ? 'text-yellow-400 hover:text-white hover:bg-slate-800 font-extrabold'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800'
                }`}
              >
                {page.label}
              </button>
            );
          })}
        </div>
      </nav>

    </header>
  );
};
