import React, { useState } from 'react';
import { 
  X, Plus, Edit3, Trash2, Search, Sliders, Database, 
  ShieldCheck, Check, Sparkles, RefreshCw, FileText, 
  Calendar, Layers, Filter, Type, Zap, Music, Radio, User, Save,
  Tag, Eye, EyeOff
} from 'lucide-react';
import { useAuthor, MastheadStyleType } from '../context/AuthorContext';
import { NewsCategory, Article, NewsTickerItem, ClubTrend, SidebarUpdateItem, CategoryConfig } from '../types';
import { resolveMediaUrl } from '../utils/media';

export const AuthorStudioModal: React.FC = () => {
  const { 
    isAuthorStudioOpen, 
    closeAuthorStudio, 
    authorStudioTab,
    articles, 
    openArticleEditor, 
    deleteArticle, 
    resetArticlesToDefault,
    mastheadTitle,
    mastheadTagline,
    mastheadFontStyle,
    updateMastheadSettings,
    categoriesConfig,
    updateCategoryConfig,
    addCategoryConfig,
    deleteCategoryConfig,
    resetCategoriesConfig,
    tickerHeadlines,
    updateTickerHeadline,
    addTickerHeadline,
    deleteTickerHeadline,
    clubTrends,
    updateClubTrend,
    addClubTrend,
    deleteClubTrend,
    sidebarUpdates,
    updateSidebarUpdate,
    addSidebarUpdate,
    deleteSidebarUpdate,
    authorName, 
    authorRole,
    updateAuthorProfile 
  } = useAuthor();

  const [activeTab, setActiveTab] = useState<'articles' | 'categories' | 'title-styling' | 'ticker' | 'clubs' | 'wire' | 'profile'>(authorStudioTab || 'articles');

  // Articles Tab State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [confirmReset, setConfirmReset] = useState(false);
  const [deleteIdConfirm, setDeleteIdConfirm] = useState<string | null>(null);

  // Categories Tab State (Author Category Management Privileges)
  const [editingCatId, setEditingCatId] = useState<NewsCategory | null>(null);
  const [editCatLabel, setEditCatLabel] = useState('');
  const [editCatSectionTitle, setEditCatSectionTitle] = useState('');
  const [editCatHighlight, setEditCatHighlight] = useState(false);
  const [editCatEnabled, setEditCatEnabled] = useState(true);
  const [isAddingNewCat, setIsAddingNewCat] = useState(false);
  const [newCatIdInput, setNewCatIdInput] = useState('');
  const [newCatLabelInput, setNewCatLabelInput] = useState('');
  const [newCatSectionTitleInput, setNewCatSectionTitleInput] = useState('');
  const [newCatHighlightInput, setNewCatHighlightInput] = useState(false);
  const [categoryFilterSearch, setCategoryFilterSearch] = useState('');
  const [categorySavedNotice, setCategorySavedNotice] = useState<string | null>(null);
  const [confirmResetCategories, setConfirmResetCategories] = useState(false);

  // Masthead Tab State
  const [titleInput, setTitleInput] = useState(mastheadTitle);
  const [taglineInput, setTaglineInput] = useState(mastheadTagline);
  const [fontStyleInput, setFontStyleInput] = useState<MastheadStyleType>(mastheadFontStyle);
  const [titleSavedNotice, setTitleSavedNotice] = useState(false);

  // Ticker Tab State
  const [newTickerTitle, setNewTickerTitle] = useState('');
  const [newTickerCat, setNewTickerCat] = useState('Breaking');
  const [editingTickerId, setEditingTickerId] = useState<string | null>(null);

  // Club Trend Tab State
  const [newClubName, setNewClubName] = useState('');
  const [newClubLoc, setNewClubLoc] = useState('');
  const [newClubHeadline, setNewClubHeadline] = useState('');
  const [newClubVibe, setNewClubVibe] = useState('🔥 VIP NIGHT');

  // Profile Tab State
  const [profileNameInput, setProfileNameInput] = useState(authorName);
  const [profileRoleInput, setProfileRoleInput] = useState(authorRole);
  const [profileSavedNotice, setProfileSavedNotice] = useState(false);

  if (!isAuthorStudioOpen) return null;

  // Sync when studio opens
  const handleOpenTab = (tab: 'articles' | 'categories' | 'title-styling' | 'ticker' | 'clubs' | 'wire' | 'profile') => {
    setActiveTab(tab);
  };

  const startEditCategory = (cat: CategoryConfig) => {
    setEditingCatId(cat.id);
    setEditCatLabel(cat.label);
    setEditCatSectionTitle(cat.sectionTitle || cat.label);
    setEditCatHighlight(!!cat.isHighlight);
    setEditCatEnabled(cat.enabled !== false);
  };

  const handleSaveCategory = (id: NewsCategory) => {
    updateCategoryConfig(id, {
      label: editCatLabel.trim() || id,
      sectionTitle: editCatSectionTitle.trim() || editCatLabel.trim() || id,
      isHighlight: editCatHighlight,
      enabled: editCatEnabled
    });
    setEditingCatId(null);
    setCategorySavedNotice(`Category "${editCatLabel.trim()}" successfully updated!`);
    setTimeout(() => setCategorySavedNotice(null), 2500);
  };

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatLabelInput.trim()) return;
    const generatedId = (newCatIdInput.trim() || newCatLabelInput.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')) as NewsCategory;
    addCategoryConfig({
      id: generatedId,
      label: newCatLabelInput.trim(),
      sectionTitle: newCatSectionTitleInput.trim() || newCatLabelInput.trim(),
      isHighlight: newCatHighlightInput,
      enabled: true
    });
    setIsAddingNewCat(false);
    setNewCatIdInput('');
    setNewCatLabelInput('');
    setNewCatSectionTitleInput('');
    setNewCatHighlightInput(false);
    setCategorySavedNotice(`New category "${newCatLabelInput.trim()}" created!`);
    setTimeout(() => setCategorySavedNotice(null), 2500);
  };

  const handleSaveMasthead = (e: React.FormEvent) => {
    e.preventDefault();
    updateMastheadSettings(titleInput.trim() || 'The AfricaN', taglineInput.trim(), fontStyleInput);
    setTitleSavedNotice(true);
    setTimeout(() => setTitleSavedNotice(false), 2000);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateAuthorProfile(profileNameInput.trim() || 'Clinton Weisei', profileRoleInput.trim());
    setProfileSavedNotice(true);
    setTimeout(() => setProfileSavedNotice(false), 2000);
  };

  const handleAddTicker = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTickerTitle.trim()) return;
    const newItem: NewsTickerItem = {
      id: `tick-${Date.now()}`,
      title: newTickerTitle.trim(),
      category: newTickerCat.trim() || 'Breaking',
      timeAgo: 'Just now',
      tag: 'FLASH',
      articleId: 'case-supreme-court-1'
    };
    addTickerHeadline(newItem);
    setNewTickerTitle('');
  };

  const handleAddClub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClubName.trim() || !newClubHeadline.trim()) return;
    const newTrend: ClubTrend = {
      id: `club-${Date.now()}`,
      clubName: newClubName.trim(),
      location: newClubLoc.trim() || 'Nairobi',
      trendHeadline: newClubHeadline.trim(),
      vibe: newClubVibe.trim() || '🔥 VIP NIGHT',
      highlight: 'VIP reservations trending on social media',
      imageUrl: '/src/assets/images/celebrity_vip_whisper_1791232322737.jpg',
      bestDay: 'Weekend Special',
      isHot: true
    };
    addClubTrend(newTrend);
    setNewClubName('');
    setNewClubLoc('');
    setNewClubHeadline('');
  };

  const filteredArticles = articles.filter((art) => {
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.deck.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (art.tags || []).some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCat = selectedCat === 'all' || art.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  const categoriesList: { id: string; label: string }[] = [
    { id: 'all', label: 'All Posts' },
    { id: 'top-stories', label: 'Top Stories' },
    { id: 'politics', label: 'Politics & Governance' },
    { id: 'scandals', label: 'Scandals & Whistleblowers' },
    { id: 'gossip', label: 'Gossip & Whispers' },
    { id: 'entertainment', label: 'Entertainment & Celebrity' },
    { id: 'technology', label: 'Technology & Innovation' },
    { id: 'sports', label: 'Sports Arena & Football' },
    { id: 'science-health', label: 'Science & Health' },
    { id: 'arts-culture', label: 'Arts & Culture' },
    { id: 'club-madness', label: 'Club Madness' },
    { id: 'world', label: 'World News' },
    { id: 'climate-energy', label: 'Climate & Energy' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeAuthorStudio();
      }}
    >
      <div 
        className="relative w-full max-w-5xl bg-white text-slate-900 shadow-2xl rounded-2xl border-2 border-red-600 overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Studio Top Header */}
        <div className="bg-slate-900 text-white px-5 sm:px-6 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center shadow-md">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans font-black text-base sm:text-lg tracking-tight uppercase">
                  Author Control & Editorial Studio
                </h3>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                  Full Privileges Active
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Editor-in-Chief: <span className="text-yellow-400 font-bold">{authorName}</span> · {authorRole}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                closeAuthorStudio();
                openArticleEditor(null);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-yellow-300" />
              <span>New Story</span>
            </button>
            <button
              onClick={closeAuthorStudio}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Close Author Studio"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Studio Primary Navigation Tabs */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 sm:px-6 flex items-center gap-1.5 overflow-x-auto scrollbar-none py-2">
          {[
            { id: 'articles', label: '📰 Articles & Posts', count: articles.length },
            { id: 'categories', label: '🏷️ Categories & Sections', count: categoriesConfig.length },
            { id: 'title-styling', label: '🔤 Title & Font Style' },
            { id: 'ticker', label: '⚡ Flash Ticker', count: tickerHeadlines.length },
            { id: 'clubs', label: '🍸 Club Madness', count: clubTrends.length },
            { id: 'wire', label: '📡 Fast Wire Dispatches', count: sidebarUpdates.length },
            { id: 'profile', label: '👤 Author Profile' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleOpenTab(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <span>{tab.label}</span>
              {typeof tab.count === 'number' && (
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  activeTab === tab.id ? 'bg-black/30 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* TAB 1: ARTICLES MANAGEMENT */}
        {activeTab === 'articles' && (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Control Toolbar */}
            <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by title, deck, tags..."
                  className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-600"
                />
              </div>

              <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto scrollbar-none py-1">
                <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-1" />
                {categoriesList.slice(0, 6).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCat(cat.id)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap transition-colors ${
                      selectedCat === cat.id
                        ? 'bg-red-600 text-white shadow-2xs'
                        : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="text-xs font-mono text-slate-600 shrink-0">
                <span className="font-bold text-slate-900 bg-slate-200 px-2.5 py-1 rounded-md">
                  {filteredArticles.length} Stories Found
                </span>
              </div>
            </div>

            {/* Articles List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 custom-scrollbar">
              {filteredArticles.length === 0 ? (
                <div className="text-center py-12 text-slate-500 space-y-2">
                  <FileText className="w-10 h-10 text-slate-300 mx-auto" />
                  <p className="text-sm font-semibold">No stories match your filter.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCat('all');
                    }}
                    className="text-xs text-red-600 font-bold hover:underline"
                  >
                    Clear Search Filters
                  </button>
                </div>
              ) : (
                filteredArticles.map((art) => (
                  <div
                    key={art.id}
                    className="border border-slate-200 rounded-xl p-3 sm:p-4 bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
                  >
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      {art.imageUrl && (
                        <div className="w-16 h-14 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                          <img
                            src={resolveMediaUrl(art.imageUrl)}
                            alt={art.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 bg-red-100 text-red-700 text-[9px] font-bold uppercase rounded">
                            {art.categoryLabel || art.category}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {art.publishedAt}
                          </span>
                          {art.isLead && (
                            <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[9px] font-bold uppercase rounded">
                              ★ Lead Story
                            </span>
                          )}
                        </div>
                        <h4 className="font-serif font-bold text-sm text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1">
                          {art.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1 font-sans">
                          {art.deck}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <button
                        onClick={() => {
                          closeAuthorStudio();
                          openArticleEditor(art);
                        }}
                        className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                        title="Edit story"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Edit Story</span>
                      </button>

                      {deleteIdConfirm === art.id ? (
                        <div className="flex items-center gap-1.5 animate-in fade-in">
                          <button
                            onClick={() => {
                              deleteArticle(art.id);
                              setDeleteIdConfirm(null);
                            }}
                            className="px-2.5 py-1.5 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 cursor-pointer"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => setDeleteIdConfirm(null)}
                            className="px-2 py-1.5 bg-slate-200 text-slate-700 rounded-lg text-xs cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeleteIdConfirm(art.id)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          title="Delete article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 2: TITLE & FONT STYLING */}
        {activeTab === 'title-styling' && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 custom-scrollbar">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs uppercase font-bold tracking-widest text-red-600">Masthead Customization</span>
              <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                Website Title & Font Style Settings
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Customize the name <strong>The AfricaN</strong>, adjust typography formats, and preview changes across all headers and footers.
              </p>
            </div>

            {titleSavedNotice && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Website title and font style updated successfully across the publication!</span>
              </div>
            )}

            {/* Live Masthead Preview Card */}
            <div className="p-6 bg-slate-50 border-2 border-slate-200 rounded-2xl space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Live Masthead Typography Preview
              </span>
              <div className="py-2">
                <div className="flex items-baseline gap-2 leading-none">
                  {titleInput.toLowerCase().startsWith('the ') && (
                    <span 
                      className="font-serif italic font-extrabold text-red-600 text-lg sm:text-xl tracking-wider"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      The
                    </span>
                  )}
                  <span 
                    className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight"
                    style={{
                      fontFamily: 
                        fontStyleInput === 'cinzel' 
                          ? "'Cinzel', Georgia, serif" 
                          : fontStyleInput === 'cormorant' 
                          ? "'Cormorant Garamond', Georgia, serif"
                          : fontStyleInput === 'cyber'
                          ? "'Unbounded', 'Syne', sans-serif"
                          : "'Playfair Display', Georgia, serif"
                    }}
                  >
                    {titleInput.toLowerCase().startsWith('the ') ? titleInput.slice(4).trim() : titleInput}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-red-600 inline-block mb-1 animate-pulse"></span>
                </div>
                <p className="text-xs font-mono uppercase text-slate-400 tracking-widest font-bold mt-2">
                  ● {taglineInput}
                </p>
              </div>
            </div>

            <form onSubmit={handleSaveMasthead} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Website Name / Brand Title
                </label>
                <input
                  type="text"
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                  placeholder="e.g. The AfricaN"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Choose Format Font Style
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      id: 'imperial',
                      name: 'Imperial Broadsheet Serif (Default)',
                      desc: 'Regal, high-contrast Playfair Display serif — authentic classic newspaper style',
                      fontFamily: "'Playfair Display', Georgia, serif"
                    },
                    {
                      id: 'cinzel',
                      name: 'Cinzel Classical Roman Serif',
                      desc: 'Prestigious engraved Roman capitals with classical editorial presence',
                      fontFamily: "'Cinzel', Georgia, serif"
                    },
                    {
                      id: 'cormorant',
                      name: 'Cormorant Heritage Broadsheet',
                      desc: 'Literary, historic journalistic broadsheet with deep heritage',
                      fontFamily: "'Cormorant Garamond', Georgia, serif"
                    },
                    {
                      id: 'cyber',
                      name: 'Unbounded Modern Cyber Display',
                      desc: 'Contemporary geometric sans with sharp cyber-continental flair',
                      fontFamily: "'Unbounded', sans-serif"
                    }
                  ].map((style) => (
                    <div
                      key={style.id}
                      onClick={() => setFontStyleInput(style.id as MastheadStyleType)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        fontStyleInput === style.id
                          ? 'border-red-600 bg-red-50/50 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-xs text-slate-900">{style.name}</span>
                        {fontStyleInput === style.id && (
                          <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                        )}
                      </div>
                      <div 
                        className="text-lg font-black text-slate-950 mb-1"
                        style={{ fontFamily: style.fontFamily }}
                      >
                        The AfricaN
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug">{style.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Sub-Masthead Tagline
                </label>
                <input
                  type="text"
                  value={taglineInput}
                  onChange={(e) => setTaglineInput(e.target.value)}
                  placeholder="e.g. Digital Continental Broadsheet · Nairobi Bureau"
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-xs font-mono"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Save className="w-4 h-4 text-yellow-300" />
                <span>Save & Apply Masthead Changes</span>
              </button>
            </form>
          </div>
        )}

        {/* TAB 2: CATEGORIES & SECTIONS PRIVILEGE MANAGEMENT */}
        {activeTab === 'categories' && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 custom-scrollbar">
            
            {/* Header info */}
            <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-red-600">Newsroom Architecture</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                    Author Privileges Enabled
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-0.5">
                  Editorial Categories & Section Titles
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Customize category names, homepage section titles, navigation bar order, and visibility. Changes take effect instantly across all article feeds and navigation bars.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsAddingNewCat(!isAddingNewCat)}
                  className="px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-yellow-300" />
                  <span>{isAddingNewCat ? 'Close Form' : '+ New Category'}</span>
                </button>

                {confirmResetCategories ? (
                  <div className="flex items-center gap-1.5 bg-red-50 border border-red-200 p-1 rounded-xl">
                    <span className="text-[11px] font-bold text-red-700 px-1">Reset all?</span>
                    <button
                      type="button"
                      onClick={() => {
                        resetCategoriesConfig();
                        setConfirmResetCategories(false);
                        setCategorySavedNotice('All categories successfully reset to editorial defaults!');
                        setTimeout(() => setCategorySavedNotice(null), 2500);
                      }}
                      className="px-2 py-1 bg-red-600 text-white text-[11px] font-bold rounded cursor-pointer"
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmResetCategories(false)}
                      className="px-2 py-1 bg-slate-200 text-slate-700 text-[11px] font-bold rounded cursor-pointer"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setConfirmResetCategories(true)}
                    className="p-2 border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-900 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                    title="Restore default categories"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Reset Defaults</span>
                  </button>
                )}
              </div>
            </div>

            {/* Notification alert */}
            {categorySavedNotice && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fadeIn">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{categorySavedNotice}</span>
              </div>
            )}

            {/* Add New Category Form */}
            {isAddingNewCat && (
              <form onSubmit={handleCreateCategory} className="p-4 sm:p-5 bg-slate-50 border-2 border-red-500/30 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Tag className="w-4 h-4 text-red-600" />
                    <span>Create New Editorial Category</span>
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono">Will be immediately available for articles & navigation</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Nav Label (Short) *
                    </label>
                    <input
                      type="text"
                      value={newCatLabelInput}
                      onChange={(e) => setNewCatLabelInput(e.target.value)}
                      placeholder="e.g. Arts & Culture"
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-900 focus:ring-1 focus:ring-red-600"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Section Title (Full)
                    </label>
                    <input
                      type="text"
                      value={newCatSectionTitleInput}
                      onChange={(e) => setNewCatSectionTitleInput(e.target.value)}
                      placeholder="e.g. Arts, Heritage & Culture"
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:ring-1 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Category Identifier (Slug)
                    </label>
                    <input
                      type="text"
                      value={newCatIdInput}
                      onChange={(e) => setNewCatIdInput(e.target.value)}
                      placeholder="e.g. arts-culture"
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono text-slate-600"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newCatHighlightInput}
                      onChange={(e) => setNewCatHighlightInput(e.target.checked)}
                      className="rounded text-red-600 focus:ring-red-500"
                    />
                    <span>Highlight Badge (e.g. HOT / SPECIAL on Navbar)</span>
                  </label>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingNewCat(false)}
                      className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-lg cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-xs cursor-pointer flex items-center gap-1.5"
                    >
                      <Save className="w-3.5 h-3.5 text-yellow-300" />
                      <span>Save Category</span>
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* Search / Filter toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="relative w-full sm:w-72">
                <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={categoryFilterSearch}
                  onChange={(e) => setCategoryFilterSearch(e.target.value)}
                  placeholder="Filter categories..."
                  className="w-full pl-9 pr-3 py-1.5 border border-slate-300 rounded-lg text-xs bg-white focus:outline-none focus:ring-1 focus:ring-red-600"
                />
              </div>

              <div className="text-xs text-slate-500 font-mono">
                Showing {categoriesConfig.filter(c => !categoryFilterSearch || c.label.toLowerCase().includes(categoryFilterSearch.toLowerCase()) || (c.sectionTitle || '').toLowerCase().includes(categoryFilterSearch.toLowerCase())).length} of {categoriesConfig.length} Categories
              </div>
            </div>

            {/* List of all categories */}
            <div className="space-y-3">
              {categoriesConfig
                .filter(c => !categoryFilterSearch || c.label.toLowerCase().includes(categoryFilterSearch.toLowerCase()) || (c.sectionTitle || '').toLowerCase().includes(categoryFilterSearch.toLowerCase()))
                .map((cat) => {
                  const isEditingThis = editingCatId === cat.id;
                  const matchingCount = articles.filter(a => a.category === cat.id).length;

                  if (isEditingThis) {
                    return (
                      <div key={cat.id} className="p-4 bg-yellow-50/70 border-2 border-yellow-400 rounded-xl space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-yellow-900 bg-yellow-200/80 px-2 py-0.5 rounded">
                            Editing: {cat.id}
                          </span>
                          <span className="text-[11px] text-slate-500 font-mono">Live Sync</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                              Navbar Label *
                            </label>
                            <input
                              type="text"
                              value={editCatLabel}
                              onChange={(e) => setEditCatLabel(e.target.value)}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 bg-white"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                              Section Block Title *
                            </label>
                            <input
                              type="text"
                              value={editCatSectionTitle}
                              onChange={(e) => setEditCatSectionTitle(e.target.value)}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 bg-white"
                              required
                            />
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-yellow-200">
                          <div className="flex items-center gap-4">
                            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={editCatEnabled}
                                onChange={(e) => setEditCatEnabled(e.target.checked)}
                                className="rounded text-red-600"
                              />
                              <span>Visible in Top Navbar</span>
                            </label>

                            <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={editCatHighlight}
                                onChange={(e) => setEditCatHighlight(e.target.checked)}
                                className="rounded text-red-600"
                              />
                              <span>Highlight Badge (HOT)</span>
                            </label>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setEditingCatId(null)}
                              className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-lg cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSaveCategory(cat.id)}
                              className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-xs cursor-pointer flex items-center gap-1.5"
                            >
                              <Save className="w-3.5 h-3.5 text-yellow-300" />
                              <span>Save Changes</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div 
                      key={cat.id} 
                      className="p-3.5 sm:p-4 bg-white border border-slate-200 hover:border-slate-300 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors shadow-2xs"
                    >
                      <div className="flex items-start sm:items-center gap-3">
                        <span className="w-2.5 h-8 bg-red-600 rounded-xs shrink-0 self-center hidden sm:block"></span>
                        
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-serif font-bold text-base text-slate-950">
                              {cat.sectionTitle || cat.label}
                            </h4>

                            <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-bold">
                              id: {cat.id}
                            </span>

                            {cat.enabled !== false ? (
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                Visible
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">
                                Hidden
                              </span>
                            )}

                            {cat.isHighlight && (
                              <span className="text-[9px] font-bold uppercase bg-red-600 text-white px-1.5 py-0.5 rounded">
                                HOT
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-3 text-xs text-slate-500">
                            <span>Navbar Display: <strong className="text-slate-800">{cat.label}</strong></span>
                            <span>·</span>
                            <span className="font-mono text-slate-600">{matchingCount} Stories Active</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                        <button
                          type="button"
                          onClick={() => {
                            closeAuthorStudio();
                            openArticleEditor(null, cat.id);
                          }}
                          className="px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                          title={`Add new article directly to ${cat.label}`}
                        >
                          <Plus className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="hidden md:inline">+ Add Story</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            updateCategoryConfig(cat.id, { enabled: cat.enabled === false ? true : false });
                            setCategorySavedNotice(`Category "${cat.label}" visibility updated!`);
                            setTimeout(() => setCategorySavedNotice(null), 2000);
                          }}
                          className="p-1.5 hover:bg-slate-100 text-slate-600 rounded-lg transition-colors border border-slate-200 cursor-pointer"
                          title={cat.enabled !== false ? 'Hide from navbar' : 'Show on navbar'}
                        >
                          {cat.enabled !== false ? <Eye className="w-4 h-4 text-emerald-600" /> : <EyeOff className="w-4 h-4 text-slate-400" />}
                        </button>

                        <button
                          type="button"
                          onClick={() => startEditCategory(cat)}
                          className="px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                          title="Edit category name and settings"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-yellow-300" />
                          <span>Edit</span>
                        </button>

                        {/* Can delete non-core custom categories */}
                        {!['top-stories', 'politics', 'scandals'].includes(cat.id) && (
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Remove category "${cat.label}"?`)) {
                                deleteCategoryConfig(cat.id);
                              }
                            }}
                            className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                            title="Delete category"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>

          </div>
        )}

        {/* TAB 3: FLASH NEWS TICKER MANAGEMENT */}
        {activeTab === 'ticker' && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 custom-scrollbar">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-red-600">Real-Time News Wire</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-0.5">
                  Breaking News Ticker Headlines
                </h3>
              </div>
              <span className="bg-red-100 text-red-700 text-xs font-bold font-mono px-2.5 py-1 rounded-lg">
                {tickerHeadlines.length} Live Items
              </span>
            </div>

            {/* Add New Ticker Item Form */}
            <form onSubmit={handleAddTicker} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <h4 className="font-bold text-xs uppercase text-slate-800 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-red-600" />
                <span>Add Live Flash Headline</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                <input
                  type="text"
                  value={newTickerTitle}
                  onChange={(e) => setNewTickerTitle(e.target.value)}
                  placeholder="Breaking headline text..."
                  className="sm:col-span-3 px-3 py-2 border border-slate-300 rounded-lg text-xs"
                  required
                />
                <select
                  value={newTickerCat}
                  onChange={(e) => setNewTickerCat(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg text-xs bg-white font-bold"
                >
                  <option value="Breaking">Breaking</option>
                  <option value="Corridors of Power">Corridors of Power</option>
                  <option value="Politics">Politics</option>
                  <option value="Scandals">Scandals</option>
                  <option value="Sports">Sports</option>
                  <option value="Gossip">Gossip</option>
                  <option value="Technology">Technology</option>
                </select>
              </div>
              <button
                type="submit"
                className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Publish to Flash Ticker</span>
              </button>
            </form>

            {/* Existing Ticker Items */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">Active Live Headlines</h4>
              {tickerHeadlines.map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-3 shadow-2xs group"
                >
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <span className="px-2 py-0.5 bg-red-600 text-white font-mono text-[9px] font-bold uppercase rounded shrink-0">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-slate-900 truncate">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono shrink-0">
                      ({item.timeAgo})
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTickerHeadline(item.id)}
                    className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer shrink-0"
                    title="Delete ticker headline"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CLUB MADNESS MANAGEMENT */}
        {activeTab === 'clubs' && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 custom-scrollbar">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-red-600">Nightlife Intelligence</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-0.5">
                  Kenyan Club Madness & VIP Trends
                </h3>
              </div>
              <span className="bg-amber-100 text-amber-800 text-xs font-bold font-mono px-2.5 py-1 rounded-lg">
                {clubTrends.length} Active Venues
              </span>
            </div>

            {/* Add Club Form */}
            <form onSubmit={handleAddClub} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <h4 className="font-bold text-xs uppercase text-slate-800 flex items-center gap-1.5">
                <Music className="w-4 h-4 text-red-600" />
                <span>Add Trending Club / Lounge</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <input
                  type="text"
                  value={newClubName}
                  onChange={(e) => setNewClubName(e.target.value)}
                  placeholder="Club Name (e.g. Quiver Lounge)..."
                  className="px-3 py-2 border border-slate-300 rounded-lg text-xs"
                  required
                />
                <input
                  type="text"
                  value={newClubLoc}
                  onChange={(e) => setNewClubLoc(e.target.value)}
                  placeholder="Location (e.g. Westlands, Nairobi)..."
                  className="px-3 py-2 border border-slate-300 rounded-lg text-xs"
                />
                <input
                  type="text"
                  value={newClubVibe}
                  onChange={(e) => setNewClubVibe(e.target.value)}
                  placeholder="Vibe tag (e.g. 🔥 VIP BOTTLES)..."
                  className="px-3 py-2 border border-slate-300 rounded-lg text-xs"
                />
              </div>
              <input
                type="text"
                value={newClubHeadline}
                onChange={(e) => setNewClubHeadline(e.target.value)}
                placeholder="Trend headline / what went down this weekend..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                required
              />
              <button
                type="submit"
                className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Club Madness</span>
              </button>
            </form>

            {/* Existing Clubs */}
            <div className="space-y-2.5">
              {clubTrends.map((club) => (
                <div
                  key={club.id}
                  className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-3 shadow-2xs"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-xs text-red-600">{club.clubName}</span>
                      <span className="text-[10px] text-slate-400 font-mono">📍 {club.location}</span>
                      <span className="text-[9px] bg-slate-900 text-yellow-300 font-mono px-1.5 py-0.2 rounded">
                        {club.vibe}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 line-clamp-1">{club.trendHeadline}</p>
                  </div>
                  <button
                    onClick={() => deleteClubTrend(club.id)}
                    className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer shrink-0"
                    title="Delete club trend"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: WIRE FAST UPDATES MANAGEMENT */}
        {activeTab === 'wire' && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 custom-scrollbar">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-red-600">Continuous Wire</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-0.5">
                  Sidebar Fast Wire Bulletins
                </h3>
              </div>
              <span className="bg-purple-100 text-purple-800 text-xs font-bold font-mono px-2.5 py-1 rounded-lg">
                {sidebarUpdates.length} Bulletins
              </span>
            </div>

            <div className="space-y-2.5">
              {sidebarUpdates.map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-white border border-slate-200 rounded-xl flex items-start justify-between gap-3"
                >
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-red-600 font-bold">{item.timestamp}</span>
                      <span className="text-[9px] font-bold px-1.5 py-0.2 bg-slate-800 text-white rounded">
                        {item.category}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-slate-900 line-clamp-1">{item.title}</h5>
                    {item.excerpt && <p className="text-[11px] text-slate-500 line-clamp-1">{item.excerpt}</p>}
                  </div>
                  <button
                    onClick={() => deleteSidebarUpdate(item.id)}
                    className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer shrink-0"
                    title="Delete wire update"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: AUTHOR & EDITORIAL PROFILE */}
        {activeTab === 'profile' && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 custom-scrollbar">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs uppercase font-bold tracking-widest text-red-600">Editorial Byline & Credentials</span>
              <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                Author & Editor-in-Chief Profile
              </h3>
            </div>

            {profileSavedNotice && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Author credentials updated successfully!</span>
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="space-y-4 max-w-xl">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Lead Author Name
                </label>
                <input
                  type="text"
                  value={profileNameInput}
                  onChange={(e) => setProfileNameInput(e.target.value)}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm font-bold text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Editorial Title / Designation
                </label>
                <input
                  type="text"
                  value={profileRoleInput}
                  onChange={(e) => setProfileRoleInput(e.target.value)}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-xs"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Save className="w-4 h-4 text-yellow-300" />
                <span>Save Author Credentials</span>
              </button>
            </form>
          </div>
        )}

        {/* Footer with Reset and Database Tools */}
        <div className="p-3.5 sm:p-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <Database className="w-4 h-4 text-slate-500" />
            <span>Persistent Newsroom Database (LocalStorage synchronized)</span>
          </div>

          <div className="flex items-center gap-2">
            {confirmReset ? (
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-bold">Reset site and restore original defaults?</span>
                <button
                  onClick={() => {
                    resetArticlesToDefault();
                    setConfirmReset(false);
                  }}
                  className="px-2.5 py-1 bg-red-600 text-white rounded font-bold hover:bg-red-700 cursor-pointer"
                >
                  Yes, Reset
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  className="px-2 py-1 bg-slate-300 text-slate-700 rounded cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmReset(true)}
                className="text-slate-500 hover:text-slate-800 underline text-[11px] cursor-pointer"
              >
                Restore Default Newsroom Seed Data
              </button>
            )}

            <button
              onClick={closeAuthorStudio}
              className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors ml-2 cursor-pointer"
            >
              Done / Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
