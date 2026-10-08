import React, { useState, useEffect } from 'react';
import { resolveMediaUrl } from './utils/media';
import { 
  TICKER_HEADLINES, 
  MAIN_SLIDER_ARTICLES
} from './data/mockNewsData';
import { Article, NewsCategory } from './types';
import { Header } from './components/Header';
import { NewsTicker } from './components/NewsTicker';
import { MainSlider } from './components/MainSlider';
import { LeftSidebar } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';
import { SectionBlock } from './components/SectionBlock';
import { AdBanner } from './components/AdBanner';
import { FloatingAd } from './components/FloatingAd';
import { AnimatedFlashAd } from './components/AnimatedFlashAd';
import { ArticleModal } from './components/ArticleModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { MonetizationDrawer } from './components/MonetizationDrawer';
import { AuthorLoginModal } from './components/AuthorLoginModal';
import { ArticleEditorModal } from './components/ArticleEditorModal';
import { AuthorStudioModal } from './components/AuthorStudioModal';
import { PolicyPagesModal, PolicyTab } from './components/PolicyPagesModal';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { SearchModal } from './components/SearchModal';
import { DigitalLogo } from './components/DigitalLogo';
import { useAuthor } from './context/AuthorContext';
import { Sparkles, Edit3, Plus, Search, ShieldCheck } from 'lucide-react';

export default function App() {
  const { articles, isAuthor, openArticleEditor, getCategorySectionTitle, getCategoryLabel } = useAuthor();
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('top-stories');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isMonetizationOpen, setIsMonetizationOpen] = useState(false);
  const [isAdFreeMode, setIsAdFreeMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [policyInitialTab, setPolicyInitialTab] = useState<PolicyTab>('about');
  const [categoryPageLimit, setCategoryPageLimit] = useState(12);
  const [categorySearchQuery, setCategorySearchQuery] = useState('');

  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('african_saved_stories');
      return stored ? JSON.parse(stored) : ['slider-politics-summit'];
    } catch {
      return ['slider-politics-summit'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('african_saved_stories', JSON.stringify(savedArticleIds));
    } catch {
      // ignore storage errors
    }
  }, [savedArticleIds]);

  const handleToggleBookmark = (articleId: string) => {
    setSavedArticleIds((prev) => 
      prev.includes(articleId) ? prev.filter((id) => id !== articleId) : [...prev, articleId]
    );
  };

  const handleSelectArticleById = (articleId: string) => {
    const found = articles.find((a) => a.id === articleId);
    if (found) {
      setSelectedArticle(found);
    }
  };

  // Helper filters for homepage sections (returns 7 posts per section from author state)
  const getArticlesByCategory = (cat: NewsCategory) => {
    return articles.filter((a) => a.category === cat).slice(0, 7);
  };

  const isBrowsingSpecificCategory = activeCategory !== 'top-stories';
  const allCategoryArticles = articles.filter((a) => {
    if (a.category !== activeCategory) return false;
    if (!categorySearchQuery.trim()) return true;
    const q = categorySearchQuery.toLowerCase();
    return (
      a.title.toLowerCase().includes(q) ||
      a.deck.toLowerCase().includes(q) ||
      (a.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  });
  const paginatedCategoryArticles = allCategoryArticles.slice(0, categoryPageLimit);

  return (
    <div id="top" className="min-h-screen bg-[#F8F9FA] text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      
      {/* 1. Header (Brand Logo "AfricaN" + Top Pages) */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setCategoryPageLimit(12);
          setCategorySearchQuery('');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenMonetization={() => setIsMonetizationOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPolicy={(tab) => {
          setPolicyInitialTab(tab);
          setIsPolicyModalOpen(true);
        }}
      />

      {/* 2. India.com Style Flash News Ticker */}
      <NewsTicker
        headlines={TICKER_HEADLINES}
        onSelectHeadline={handleSelectArticleById}
      />

      {/* 3. Top Changing Leaderboard Banner Ad */}
      <div className="max-w-[1780px] mx-auto px-4 lg:px-6 w-full">
        <AdBanner
          slot="leaderboard"
          isAdFreeMode={isAdFreeMode}
          onOpenMonetization={() => setIsMonetizationOpen(true)}
        />
      </div>

      {/* 4. UPPER SECTION: Three-Column Layout with Sidebars
          - Left Sidebar: Fast Updates + Sponsored Ad + Club Madness (scrolls 5s) + 3D Ad Cube
          - Center Column: Top Stories + Politics & Governance + [1 Ad: AnimatedFlashAd] + Scandals & Whistleblowers
          - Right Sidebar: Most Read + Companion ad + CORRIDORS OF POWER + 3D Ad Cube + Popular Posts
      */}
      <div className="max-w-[1780px] mx-auto px-4 lg:px-6 w-full flex-1 pb-10">
        
        {isBrowsingSpecificCategory ? (
          /* Specific Category Dedicated View - Handles dozens/hundreds of posts effortlessly */
          <div className="space-y-6">
            <div className="pb-3 border-b-2 border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-red-600">News Desk Archive</span>
                  <span className="bg-slate-200 text-slate-800 text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                    {allCategoryArticles.length} Stories Published
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-slate-950 capitalize mt-0.5">
                  {getCategorySectionTitle(activeCategory)}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* Search in this category */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                  <input
                    type="text"
                    value={categorySearchQuery}
                    onChange={(e) => setCategorySearchQuery(e.target.value)}
                    placeholder={`Filter ${activeCategory}...`}
                    className="pl-8 pr-3 py-1 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-600 w-44"
                  />
                </div>

                {isAuthor && (
                  <button
                    onClick={() => openArticleEditor(null, activeCategory)}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    title="Add new story to this category"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>+ Add Story</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    setActiveCategory('top-stories');
                    setCategorySearchQuery('');
                  }}
                  className="text-xs uppercase font-bold text-red-600 hover:text-red-800 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                >
                  ← All Sections
                </button>
              </div>
            </div>

            {paginatedCategoryArticles.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
                <p className="text-slate-600 text-sm">No stories found matching your filter in this category.</p>
                {isAuthor && (
                  <button
                    onClick={() => openArticleEditor(null)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl"
                  >
                    Create the First Story for {activeCategory}
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {paginatedCategoryArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => setSelectedArticle(art)}
                    className="border border-slate-200 rounded-2xl p-4 bg-white hover:border-slate-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between relative"
                  >
                    <div className="space-y-2.5">
                      {art.imageUrl && (
                        <div className="aspect-16/10 rounded-xl overflow-hidden bg-slate-100 relative">
                          <img
                            src={resolveMediaUrl(art.imageUrl)}
                            alt={art.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                          />
                          <span className="absolute top-2.5 left-2.5 bg-red-600 text-white font-bold text-[9px] uppercase px-2 py-0.5 rounded-xs shadow-xs">
                            {art.categoryLabel || art.category}
                          </span>
                          <span className="absolute bottom-2 right-2 bg-black/80 text-white font-mono text-[9px] px-1.5 py-0.5 rounded">
                            {art.readTime}
                          </span>
                        </div>
                      )}
                      <span className="text-[10px] font-bold text-red-600 uppercase tracking-tight block">
                        {art.kicker}
                      </span>
                      <h3 className="font-serif font-bold text-base text-slate-950 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                        {art.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {art.deck}
                      </p>
                    </div>

                    <div className="pt-3 text-[11px] text-slate-400 font-mono flex items-center justify-between border-t border-slate-100 mt-3">
                      <span>{art.publishedAt}</span>
                      <div className="flex items-center gap-2">
                        {isAuthor && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openArticleEditor(art);
                            }}
                            className="px-2 py-0.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded text-[11px] font-bold font-sans flex items-center gap-1"
                            title="Edit this story as author"
                          >
                            <Edit3 className="w-3 h-3 text-emerald-700" />
                            <span>Edit</span>
                          </button>
                        )}
                        <span className="text-red-600 font-bold group-hover:translate-x-0.5 transition-transform font-sans">
                          Read Story →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination / Load More Button for high volume of daily posts */}
            {allCategoryArticles.length > categoryPageLimit && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setCategoryPageLimit((prev) => prev + 12)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Load More Stories</span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px] text-yellow-300 font-mono">
                    Showing {paginatedCategoryArticles.length} of {allCategoryArticles.length}
                  </span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Top 3-Column Grid with Left Sidebar, Center Hero & Politics & Scandals, and Right Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* LEFT SIDEBAR (Sticky: 4D Sponsored Cube, Club Madness, Scandals, and Features) */}
              <div className="hidden lg:block lg:col-span-3 sticky top-20 self-start space-y-6">
                <LeftSidebar
                  onSelectUpdate={handleSelectArticleById}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  isAdFreeMode={isAdFreeMode}
                  onOpenMonetization={() => setIsMonetizationOpen(true)}
                />
              </div>

              {/* MAIN CENTER COLUMN (All Editorial Sections with Identical Layouts) */}
              <main className="lg:col-span-6 space-y-10">
                
                {/* 1. TOP STORIES SECTION & MAIN HERO SLIDER */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2">
                    <span className="w-2.5 h-6 bg-red-600 inline-block"></span>
                    <h3 className="font-sans font-black text-xl uppercase tracking-tight text-slate-950">
                      Top Stories
                    </h3>
                  </div>

                  <MainSlider
                    sliderArticles={MAIN_SLIDER_ARTICLES}
                    trendingArticles={articles}
                    onSelectArticle={(art) => setSelectedArticle(art)}
                    onToggleBookmark={handleToggleBookmark}
                    savedArticleIds={savedArticleIds}
                  />

                  {/* Top Stories Section (7 posts: 1 lead + 6 secondary) */}
                  <SectionBlock
                    title="Top Stories Today"
                    category="top-stories"
                    articles={getArticlesByCategory('top-stories')}
                    onSelectArticle={(art) => setSelectedArticle(art)}
                    onViewAll={(cat) => setActiveCategory(cat)}
                  />
                </div>

                {/* 2. POLITICS & GOVERNANCE SECTION (7 posts: 1 lead + 6 secondary in 3-col grid) */}
                <SectionBlock
                  title={getCategorySectionTitle('politics')}
                  category="politics"
                  articles={getArticlesByCategory('politics')}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  onViewAll={(cat) => setActiveCategory(cat)}
                />

                {/* 3. SCANDALS & WHISTLEBLOWERS SECTION (7 posts: 1 lead + 6 secondary in 3-col grid) */}
                <SectionBlock
                  title={getCategorySectionTitle('scandals')}
                  category="scandals"
                  articles={getArticlesByCategory('scandals')}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  onViewAll={(cat) => setActiveCategory(cat)}
                />

                {/* SPONSORED AD DIRECTLY BELOW POLITICS & SCANDALS */}
                <AnimatedFlashAd
                  isAdFreeMode={isAdFreeMode}
                  onOpenMonetization={() => setIsMonetizationOpen(true)}
                />

                {/* 4. GOSSIP & WHISPERS (Recreated with EXACT layout of Scandals & Politics: 7 posts) */}
                <SectionBlock
                  title={getCategorySectionTitle('gossip')}
                  category="gossip"
                  articles={getArticlesByCategory('gossip')}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  onViewAll={(cat) => setActiveCategory(cat)}
                />

                {/* 5. ENTERTAINMENT & CELEBRITY (Recreated with EXACT layout of Scandals & Politics: 7 posts) */}
                <SectionBlock
                  title={getCategorySectionTitle('entertainment')}
                  category="entertainment"
                  articles={getArticlesByCategory('entertainment')}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  onViewAll={(cat) => setActiveCategory(cat)}
                />

                {/* AD PLACED DIRECTLY BELOW ENTERTAINMENT & CELEBRITY */}
                <AdBanner
                  slot="midpage"
                  isAdFreeMode={isAdFreeMode}
                  onOpenMonetization={() => setIsMonetizationOpen(true)}
                />

                {/* 6. TECHNOLOGY & INNOVATION (Recreated with EXACT layout of Scandals & Politics: 7 posts) */}
                <SectionBlock
                  title={getCategorySectionTitle('technology')}
                  category="technology"
                  articles={getArticlesByCategory('technology')}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  onViewAll={(cat) => setActiveCategory(cat)}
                />

                {/* IN-FEED NATIVE SPONSORED STORY */}
                {!isAdFreeMode && (
                  <div 
                    onClick={() => handleSelectArticleById('tech-fintech-1')}
                    className="border-2 border-emerald-500/60 bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-xl cursor-pointer hover:border-yellow-400 transition-all group w-full"
                  >
                    <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-emerald-400 mb-2">
                      <span className="text-yellow-400 font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin" style={{ animationDuration: '6s' }} />
                        <span>SPONSORED ENTERPRISE SPOTLIGHT</span>
                      </span>
                      <span className="font-mono text-emerald-300">Continental Paid Partnership</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                      <div className="flex-1 space-y-1.5">
                        <h4 className="font-serif font-bold text-lg sm:text-2xl text-white group-hover:text-yellow-300 transition-colors leading-snug">
                          Safaricom 5G & M-Pesa Global: Connecting Across the Continent with Lightning Speed
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                          Experience ultra-fast 5G enterprise broadband and zero-fee continental mobile money transfers powering Africa's digital expansion.
                        </p>
                        <div className="flex items-center gap-3 pt-1 text-xs text-emerald-300 font-mono">
                          <span className="font-bold text-white font-sans">Safaricom Enterprise</span>
                          <span>·</span>
                          <span>3 min read</span>
                          <span>·</span>
                          <span className="text-yellow-400 font-bold">Pan-African High Speed</span>
                        </div>
                      </div>

                      <div className="w-full sm:w-48 h-28 rounded-xl bg-slate-900 overflow-hidden shrink-0 border border-white/20 shadow-md">
                        <img
                          src={resolveMediaUrl('/AfricaN/images/african_fintech_hub_1791232334696.jpg')}
                          alt="Sponsor"
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. SPORTS ARENA & FOOTBALL (Recreated with EXACT layout of Scandals & Politics: 7 posts) */}
                <SectionBlock
                  title={getCategorySectionTitle('sports')}
                  category="sports"
                  articles={getArticlesByCategory('sports')}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  onViewAll={(cat) => setActiveCategory(cat)}
                />

                {/* 8. SCIENCE & HEALTH (Recreated with EXACT layout of Scandals & Politics: 7 posts) */}
                <SectionBlock
                  title={getCategorySectionTitle('science-health')}
                  category="science-health"
                  articles={getArticlesByCategory('science-health')}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  onViewAll={(cat) => setActiveCategory(cat)}
                />

                {/* 9. ARTS & CULTURE (Recreated with EXACT layout of Scandals & Politics: 7 posts) */}
                <SectionBlock
                  title={getCategorySectionTitle('arts-culture')}
                  category="arts-culture"
                  articles={getArticlesByCategory('arts-culture')}
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  onViewAll={(cat) => setActiveCategory(cat)}
                />

              </main>

              {/* RIGHT SIDEBAR (Sticky: Most Read Today, Companion ad, CORRIDORS OF POWER, 3D Cube alone to spin, Popular Posts) */}
              <div className="hidden lg:block lg:col-span-3 sticky top-20 self-start space-y-6">
                <RightSidebar
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  isAdFreeMode={isAdFreeMode}
                  onOpenMonetization={() => setIsMonetizationOpen(true)}
                />
              </div>

            </div>
          </>
        )}

      </div>

      {/* 5. Floating Bottom Right Sponsor Widget (Animated) */}
      <FloatingAd
        isAdFreeMode={isAdFreeMode}
        onOpenMonetization={() => setIsMonetizationOpen(true)}
      />

      {/* 6. Mobile Sticky Bottom Ad Banner */}
      <AdBanner
        slot="mobile_sticky"
        isAdFreeMode={isAdFreeMode}
        onOpenMonetization={() => setIsMonetizationOpen(true)}
      />

      {/* 7. Mobile Bottom Dock */}
      <MobileBottomNav
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
        }}
        savedCount={savedArticleIds.length}
        onOpenSaved={() => setActiveCategory('top-stories')}
        leftSidebarElement={
          <LeftSidebar
            onSelectUpdate={handleSelectArticleById}
            onSelectArticle={(art) => setSelectedArticle(art)}
            isAdFreeMode={isAdFreeMode}
            onOpenMonetization={() => setIsMonetizationOpen(true)}
          />
        }
        rightSidebarElement={
          <RightSidebar
            onSelectArticle={(art) => setSelectedArticle(art)}
            isAdFreeMode={isAdFreeMode}
            onOpenMonetization={() => setIsMonetizationOpen(true)}
          />
        }
      />

      {/* 8. Article Reading Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          isBookmarked={savedArticleIds.includes(selectedArticle.id)}
          onToggleBookmark={handleToggleBookmark}
          isAdFreeMode={isAdFreeMode}
          onOpenMonetization={() => setIsMonetizationOpen(true)}
        />
      )}

      {/* 9. Monetization & Ad-Free Subscription Drawer */}
      <MonetizationDrawer
        isOpen={isMonetizationOpen}
        onClose={() => setIsMonetizationOpen(false)}
        isAdFreeMode={isAdFreeMode}
        onToggleAdFree={() => setIsAdFreeMode(!isAdFreeMode)}
      />

      {/* 10. Author Management Modals (Strictly editable only by the author) */}
      <AuthorLoginModal />
      <ArticleEditorModal />
      <AuthorStudioModal />

      {/* 11. Google AdSense Transparency & Legal Compliance Modal */}
      <PolicyPagesModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
        initialTab={policyInitialTab}
      />

      {/* 12. Global News Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={articles}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* 13. AdSense Compliant Cookie & Tracking Consent */}
      <CookieConsentBanner
        onOpenPrivacy={() => {
          setPolicyInitialTab('privacy');
          setIsPolicyModalOpen(true);
        }}
      />

      {/* 14. Modern Newspaper Footer (Compact & Streamlined) */}
      <footer className="border-t border-slate-800 bg-[#090D14] text-white py-4 text-xs select-none">
        <div className="max-w-[1780px] mx-auto px-4 lg:px-6 space-y-3">
          {/* Top Row: Digital Logo & Compact Social Media Icons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory('top-stories');
                  setCategoryPageLimit(12);
                  setCategorySearchQuery('');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="cursor-pointer hover:opacity-90 transition-opacity"
                title="Return to The AfricaN Front Page / Home"
              >
                <DigitalLogo size="small" lightText={true} />
              </a>
              <span className="hidden md:inline text-slate-600">|</span>
              <span className="hidden md:inline text-[11px] text-slate-400 font-mono">
                Nairobi · Johannesburg · Lagos · London
              </span>
            </div>

            {/* Compact Social Icons Bar */}
            <div className="flex items-center gap-2">
              <a href="#social-x" className="w-7 h-7 rounded-full bg-slate-800 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 hover:border-red-500 transition-colors" title="X (Twitter)">
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#social-facebook" className="w-7 h-7 rounded-full bg-slate-800 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 transition-colors" title="Facebook">
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#social-instagram" className="w-7 h-7 rounded-full bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 transition-colors" title="Instagram">
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#social-youtube" className="w-7 h-7 rounded-full bg-slate-800 hover:bg-[#FF0000] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 transition-colors" title="YouTube">
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#social-linkedin" className="w-7 h-7 rounded-full bg-slate-800 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 transition-colors" title="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#social-telegram" className="w-7 h-7 rounded-full bg-slate-800 hover:bg-[#229ED9] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 transition-colors" title="Telegram">
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.536-.196 1.006.128.832.942z"/></svg>
              </a>
              <a href="#social-tiktok" className="w-7 h-7 rounded-full bg-slate-800 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 hover:border-cyan-400 transition-colors" title="TikTok">
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>

          {/* Middle Row: AdSense Compliance & Editorial Policy Navigation Links */}
          <div className="py-2.5 border-y border-slate-800/60 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[11px] text-slate-300">
            <button
              onClick={() => { setPolicyInitialTab('about'); setIsPolicyModalOpen(true); }}
              className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
              About AfricaN
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => { setPolicyInitialTab('contact'); setIsPolicyModalOpen(true); }}
              className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Contact Newsroom
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => { setPolicyInitialTab('privacy'); setIsPolicyModalOpen(true); }}
              className="hover:text-yellow-400 transition-colors cursor-pointer text-yellow-300 font-semibold"
            >
              Privacy Policy (AdSense)
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => { setPolicyInitialTab('terms'); setIsPolicyModalOpen(true); }}
              className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => { setPolicyInitialTab('editorial'); setIsPolicyModalOpen(true); }}
              className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Editorial & Fact-Check Policy
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => { setPolicyInitialTab('adsense'); setIsPolicyModalOpen(true); }}
              className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
              AdSense & Ads Transparency
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => setIsMonetizationOpen(true)}
              className="hover:text-yellow-400 transition-colors cursor-pointer text-red-400 font-bold"
            >
              Advertise With Us
            </button>
          </div>

          {/* Bottom Bar: Copyright & Centered Designed by Clinton weisei */}
          <div className="pt-2 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
            <span className="font-mono text-[10px]">
              © 2026 The AfricaN Media Trust. All rights reserved.
            </span>

            {/* Designed by Clinton weisei CENTERED at bottom */}
            <div className="text-xs font-bold text-yellow-400 font-mono tracking-wider flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-yellow-400/20">
              <span className="text-yellow-400">✦</span>
              <span>Designed by Clinton weisei</span>
              <span className="text-yellow-400">✦</span>
            </div>

            <span className="font-mono text-[10px] text-slate-500">
              Editorial Standards · IAB Compliant
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
