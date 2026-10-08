import React, { createContext, useContext, useState, useEffect } from 'react';
import { Article, NewsTickerItem, SidebarUpdateItem, ClubTrend, InPicturesItem, NewsCategory, CategoryConfig } from '../types';
import { ALL_SECTIONS_ARTICLES as DEFAULT_ARTICLES, TICKER_HEADLINES as DEFAULT_TICKER, SIDEBAR_UPDATES as DEFAULT_UPDATES } from '../data/mockNewsData';
import { INITIAL_IN_PICTURES_ITEMS } from '../data/mockInPicturesData';

export const DEFAULT_CATEGORIES_CONFIG: CategoryConfig[] = [
  { id: 'top-stories', label: 'Top Stories', sectionTitle: 'Top Stories', enabled: true },
  { id: 'politics', label: 'Politics & Governance', sectionTitle: 'Politics & Governance', enabled: true },
  { id: 'scandals', label: 'Scandals & Whistleblowers', sectionTitle: 'Scandals & Whistleblowers', enabled: true },
  { id: 'gossip', label: 'Gossip & Whispers', sectionTitle: 'Gossip & Whispers', enabled: true },
  { id: 'entertainment', label: 'Entertainment & Celebrity', sectionTitle: 'Entertainment & Celebrity', enabled: true },
  { id: 'technology', label: 'Technology & Innovation', sectionTitle: 'Technology & Innovation', enabled: true },
  { id: 'sports', label: 'Sports Arena & Football', sectionTitle: 'Sports Arena & Football', enabled: true },
  { id: 'science-health', label: 'Science & Health', sectionTitle: 'Science & Health', enabled: true },
  { id: 'arts-culture', label: 'Arts & Culture', sectionTitle: 'Arts & Culture', enabled: true },
  { id: 'club-madness', label: 'Club Madness', sectionTitle: 'Club Madness', isHighlight: true, enabled: true },
  { id: 'world', label: 'World News', sectionTitle: 'World News', enabled: true },
  { id: 'climate-energy', label: 'Climate & Energy', sectionTitle: 'Climate & Energy', enabled: true },
  { id: 'opinion', label: 'Opinion & Analysis', sectionTitle: 'Opinion & Analysis', enabled: true },
  { id: 'corridors-of-power', label: 'Corridors of Power', sectionTitle: 'Corridors of Power', enabled: true }
];

export const INITIAL_KENYAN_CLUB_TRENDS: ClubTrend[] = [
  {
    id: 'club-quiver',
    clubName: 'Quiver Lounge',
    location: 'Thika Road & Kenol',
    trendHeadline: 'Mega Sunday Throwdown packout: DJ Grauchi & hypemen keep dancefloor raging until dawn.',
    vibe: '🔥 PACKED & HYPED',
    highlight: 'VIP balcony sold out by 8 PM · 400+ car park full',
    imageUrl: '/src/assets/images/african_entertainment_awards_1791231296253.jpg',
    bestDay: 'Sunday Sunset Plan',
    isHot: true
  },
  {
    id: 'club-alchemist',
    clubName: 'The Alchemist',
    location: 'Parklands Rd, Westlands',
    trendHeadline: 'Underground Afro-Tech & electronic fusion night draws cosmopolitan crowd; outdoor food trucks booming.',
    vibe: '✨ AFRO-HOUSE VIBES',
    highlight: 'Guest DJ from Berlin & Johannesburg on deck',
    imageUrl: '/src/assets/images/celebrity_vip_whisper_1791232322737.jpg',
    bestDay: 'Friday Night Fusion',
    isHot: true
  },
  {
    id: 'club-milan',
    clubName: 'Milan Lounge',
    location: 'The Mirage, Westlands',
    trendHeadline: 'Billionaire row bottle service: endless champagne trains and celebrity cameos spark social buzz.',
    vibe: '🍾 VIP BOTTLE WARS',
    highlight: 'Dom Pérignon sparkler trains every 30 mins',
    imageUrl: '/src/assets/images/luxury_wealth_ad_1791229333749.jpg',
    bestDay: 'Saturday Midnight Glam',
    isHot: true
  },
  {
    id: 'club-1824',
    clubName: '1824 The Classic',
    location: 'Langata Road, Nairobi',
    trendHeadline: 'Legendary Sunday madness sets south Nairobi on fire with throwback Old School & Rhumba.',
    vibe: '🎶 RHUMBA & SUNDAY PLAN',
    highlight: 'Nyama choma pits & live band opening set',
    imageUrl: '/src/assets/images/african_entertainment_awards_1791231296253.jpg',
    bestDay: 'Sunday All-Dayer'
  },
  {
    id: 'club-k1',
    clubName: 'K1 Klub House',
    location: 'Ojijo Road, Parklands',
    trendHeadline: 'Pitcher & Flea Market buzzing with artisanal cocktails, pitch-black dancehall & indie band sets.',
    vibe: '🍸 COCKTAIL CULTURE',
    highlight: 'Signature Mojito Pitchers & Reggae Thursdays',
    imageUrl: '/src/assets/images/celebrity_vip_whisper_1791232322737.jpg',
    bestDay: 'Thursday Reggae Night'
  },
  {
    id: 'club-casa',
    clubName: 'Casa de Renta',
    location: 'Denis Pritt, Kilimani',
    trendHeadline: 'Pretoria meets Nairobi as Amapiano dance battles take over the VIP terrace all weekend long.',
    vibe: '⚡ AMAPIANO HEAT',
    highlight: 'Log drum anthems rocking Kilimani skyline',
    imageUrl: '/src/assets/images/celebrity_vip_whisper_1791232322737.jpg',
    bestDay: 'Saturday All-Nighter'
  },
  {
    id: 'club-brew',
    clubName: 'Brew Bistro & Lounge',
    location: 'Fortis Tower & Ngong Rd',
    trendHeadline: 'Rooftop skyline sunset sessions with craft beer towers and soulful saxophone deep house sets.',
    vibe: '🎷 ROOFTOP SUNSET',
    highlight: 'Craft IPA towers paired with gourmet sliders',
    imageUrl: '/src/assets/images/african_entertainment_awards_1791231296253.jpg',
    bestDay: 'Sunset Happy Hour'
  }
];

export type MastheadStyleType = 'imperial' | 'cinzel' | 'cormorant' | 'cyber';

interface AuthorContextType {
  isAuthor: boolean;
  authorName: string;
  authorRole: string;
  loginAsAuthor: (password: string) => boolean;
  quickDemoLogin: () => void;
  logoutAuthor: () => void;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;

  // Masthead Title & Font Styling
  mastheadTitle: string;
  mastheadTagline: string;
  mastheadFontStyle: MastheadStyleType;
  updateMastheadSettings: (title: string, tagline: string, fontStyle: MastheadStyleType) => void;

  // Author Profile
  updateAuthorProfile: (name: string, role: string) => void;

  // Articles state & mutations (persisted)
  articles: Article[];
  updateArticle: (updatedArticle: Article) => void;
  addArticle: (newArticle: Article) => void;
  deleteArticle: (id: string) => void;
  resetArticlesToDefault: () => void;

  // Breaking News Ticker state & mutations (persisted)
  tickerHeadlines: NewsTickerItem[];
  updateTickerHeadline: (updated: NewsTickerItem) => void;
  addTickerHeadline: (item: NewsTickerItem) => void;
  deleteTickerHeadline: (id: string) => void;

  // Club Madness Trends state & mutations (persisted)
  clubTrends: ClubTrend[];
  updateClubTrend: (trend: ClubTrend) => void;
  addClubTrend: (trend: ClubTrend) => void;
  deleteClubTrend: (id: string) => void;

  // Fast Updates / Wire Dispatches state & mutations (persisted)
  sidebarUpdates: SidebarUpdateItem[];
  updateSidebarUpdate: (update: SidebarUpdateItem) => void;
  addSidebarUpdate: (update: SidebarUpdateItem) => void;
  deleteSidebarUpdate: (id: string) => void;

  // In Pictures state & mutations (persisted)
  inPicturesItems: InPicturesItem[];
  addInPicturesItem: (item: InPicturesItem) => void;
  deleteInPicturesItem: (id: string) => void;

  // Editor Modal state
  isArticleEditorOpen: boolean;
  editingArticle: Article | null;
  editorInitialCategory: NewsCategory | null;
  openArticleEditor: (article: Article | null, initialCategory?: NewsCategory) => void;
  closeArticleEditor: () => void;

  // Categories Management (Author can customize labels, section titles, order and highlights)
  categoriesConfig: CategoryConfig[];
  updateCategoryConfig: (id: NewsCategory, updates: Partial<CategoryConfig>) => void;
  addCategoryConfig: (newCat: CategoryConfig) => void;
  deleteCategoryConfig: (id: string) => void;
  resetCategoriesConfig: () => void;
  getCategoryLabel: (id: NewsCategory) => string;
  getCategorySectionTitle: (id: NewsCategory) => string;

  // Author Studio Management Hub (Unified control panel for EVERYTHING on the site)
  isAuthorStudioOpen: boolean;
  authorStudioTab: 'articles' | 'title-styling' | 'categories' | 'ticker' | 'clubs' | 'wire' | 'profile';
  openAuthorStudio: (tab?: 'articles' | 'title-styling' | 'categories' | 'ticker' | 'clubs' | 'wire' | 'profile') => void;
  closeAuthorStudio: () => void;
}

const DEFAULT_AUTHOR_NAME = 'Clinton Weisei';
const DEFAULT_AUTHOR_ROLE = 'Editor-in-Chief & Lead Author';
const AUTHOR_PASSCODE = 'clinton2026';

const AuthorContext = createContext<AuthorContextType | undefined>(undefined);

export const AuthorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Session
  const [isAuthor, setIsAuthor] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theafrican_author_session') === 'active';
    } catch {
      return false;
    }
  });

  // Author Profile
  const [authorName, setAuthorName] = useState<string>(() => {
    try {
      return localStorage.getItem('theafrican_author_name') || DEFAULT_AUTHOR_NAME;
    } catch {
      return DEFAULT_AUTHOR_NAME;
    }
  });

  const [authorRole, setAuthorRole] = useState<string>(() => {
    try {
      return localStorage.getItem('theafrican_author_role') || DEFAULT_AUTHOR_ROLE;
    } catch {
      return DEFAULT_AUTHOR_ROLE;
    }
  });

  // Masthead Title & Font Styling
  const [mastheadTitle, setMastheadTitle] = useState<string>(() => {
    try {
      return localStorage.getItem('theafrican_masthead_title') || 'The AfricaN';
    } catch {
      return 'The AfricaN';
    }
  });

  const [mastheadTagline, setMastheadTagline] = useState<string>(() => {
    try {
      return localStorage.getItem('theafrican_masthead_tagline') || 'Digital Continental Broadsheet · Nairobi Bureau';
    } catch {
      return 'Digital Continental Broadsheet · Nairobi Bureau';
    }
  });

  const [mastheadFontStyle, setMastheadFontStyle] = useState<MastheadStyleType>(() => {
    try {
      return (localStorage.getItem('theafrican_masthead_font') as MastheadStyleType) || 'imperial';
    } catch {
      return 'imperial';
    }
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isArticleEditorOpen, setIsArticleEditorOpen] = useState(false);
  const [isAuthorStudioOpen, setIsAuthorStudioOpen] = useState(false);
  const [authorStudioTab, setAuthorStudioTab] = useState<'articles' | 'title-styling' | 'categories' | 'ticker' | 'clubs' | 'wire' | 'profile'>('articles');
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [editorInitialCategory, setEditorInitialCategory] = useState<NewsCategory | null>(null);

  // Persisted Categories Configuration (Author can rename any category or section title!)
  const [categoriesConfig, setCategoriesConfig] = useState<CategoryConfig[]>(() => {
    try {
      const saved = localStorage.getItem('theafrican_categories_config');
      if (saved) {
        const parsed = JSON.parse(saved) as CategoryConfig[];
        const existingIds = new Set(parsed.map((c) => c.id));
        const merged = [...parsed];
        for (const def of DEFAULT_CATEGORIES_CONFIG) {
          if (!existingIds.has(def.id)) {
            merged.push(def);
          }
        }
        return merged;
      }
    } catch (e) {
      console.warn('Failed to load categories config from localStorage', e);
    }
    return DEFAULT_CATEGORIES_CONFIG;
  });

  // Persisted Articles
  const [articles, setArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem('theafrican_articles_db');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load articles from localStorage', e);
    }
    return DEFAULT_ARTICLES;
  });

  // Persisted Ticker Headlines
  const [tickerHeadlines, setTickerHeadlines] = useState<NewsTickerItem[]>(() => {
    try {
      const saved = localStorage.getItem('theafrican_ticker_db');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load ticker from localStorage', e);
    }
    return DEFAULT_TICKER;
  });

  // Persisted Club Madness Trends
  const [clubTrends, setClubTrends] = useState<ClubTrend[]>(() => {
    try {
      const saved = localStorage.getItem('theafrican_clubs_db');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load clubs from localStorage', e);
    }
    return INITIAL_KENYAN_CLUB_TRENDS;
  });

  // Persisted Sidebar Fast Updates
  const [sidebarUpdates, setSidebarUpdates] = useState<SidebarUpdateItem[]>(() => {
    try {
      const saved = localStorage.getItem('theafrican_wire_db');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load wire updates from localStorage', e);
    }
    return DEFAULT_UPDATES;
  });

  // Persisted In Pictures
  const [inPicturesItems, setInPicturesItems] = useState<InPicturesItem[]>(() => {
    try {
      const saved = localStorage.getItem('theafrican_inpictures_db');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load in pictures from localStorage', e);
    }
    return INITIAL_IN_PICTURES_ITEMS;
  });

  // Auto-save sync effects
  useEffect(() => {
    try {
      localStorage.setItem('theafrican_articles_db', JSON.stringify(articles));
    } catch {}
  }, [articles]);

  useEffect(() => {
    try {
      localStorage.setItem('theafrican_ticker_db', JSON.stringify(tickerHeadlines));
    } catch {}
  }, [tickerHeadlines]);

  useEffect(() => {
    try {
      localStorage.setItem('theafrican_clubs_db', JSON.stringify(clubTrends));
    } catch {}
  }, [clubTrends]);

  useEffect(() => {
    try {
      localStorage.setItem('theafrican_wire_db', JSON.stringify(sidebarUpdates));
    } catch {}
  }, [sidebarUpdates]);

  useEffect(() => {
    try {
      localStorage.setItem('theafrican_inpictures_db', JSON.stringify(inPicturesItems));
    } catch {}
  }, [inPicturesItems]);

  useEffect(() => {
    try {
      localStorage.setItem('theafrican_categories_config', JSON.stringify(categoriesConfig));
    } catch {}
  }, [categoriesConfig]);

  useEffect(() => {
    try {
      localStorage.setItem('theafrican_masthead_title', mastheadTitle);
      localStorage.setItem('theafrican_masthead_tagline', mastheadTagline);
      localStorage.setItem('theafrican_masthead_font', mastheadFontStyle);
    } catch {}
  }, [mastheadTitle, mastheadTagline, mastheadFontStyle]);

  useEffect(() => {
    try {
      localStorage.setItem('theafrican_author_name', authorName);
      localStorage.setItem('theafrican_author_role', authorRole);
    } catch {}
  }, [authorName, authorRole]);

  // Auth methods
  const loginAsAuthor = (passcode: string): boolean => {
    const trimmed = passcode.trim().toLowerCase();
    if (trimmed === AUTHOR_PASSCODE || trimmed === 'clinton' || trimmed === 'clintonweisei' || trimmed === 'admin') {
      setIsAuthor(true);
      localStorage.setItem('theafrican_author_session', 'active');
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const quickDemoLogin = () => {
    setIsAuthor(true);
    localStorage.setItem('theafrican_author_session', 'active');
    setIsLoginModalOpen(false);
  };

  const logoutAuthor = () => {
    setIsAuthor(false);
    localStorage.removeItem('theafrican_author_session');
    setEditingArticle(null);
  };

  // Masthead settings
  const updateMastheadSettings = (title: string, tagline: string, fontStyle: MastheadStyleType) => {
    setMastheadTitle(title);
    setMastheadTagline(tagline);
    setMastheadFontStyle(fontStyle);
  };

  const updateAuthorProfile = (name: string, role: string) => {
    setAuthorName(name);
    setAuthorRole(role);
  };

  // Article mutations
  const updateArticle = (updatedArticle: Article) => {
    setArticles((prev) =>
      prev.map((art) => (art.id === updatedArticle.id ? updatedArticle : art))
    );
  };

  const addArticle = (newArticle: Article) => {
    setArticles((prev) => [newArticle, ...prev]);
  };

  const deleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
    setIsArticleEditorOpen(false);
    setEditingArticle(null);
  };

  const resetArticlesToDefault = () => {
    setArticles(DEFAULT_ARTICLES);
    setTickerHeadlines(DEFAULT_TICKER);
    setClubTrends(INITIAL_KENYAN_CLUB_TRENDS);
    setSidebarUpdates(DEFAULT_UPDATES);
    setInPicturesItems(INITIAL_IN_PICTURES_ITEMS);
    setMastheadTitle('The AfricaN');
    setMastheadFontStyle('imperial');
    setMastheadTagline('Digital Continental Broadsheet · Nairobi Bureau');
    setAuthorName(DEFAULT_AUTHOR_NAME);
    setAuthorRole(DEFAULT_AUTHOR_ROLE);

    localStorage.removeItem('theafrican_articles_db');
    localStorage.removeItem('theafrican_ticker_db');
    localStorage.removeItem('theafrican_clubs_db');
    localStorage.removeItem('theafrican_wire_db');
    localStorage.removeItem('theafrican_inpictures_db');
    localStorage.removeItem('theafrican_masthead_title');
    localStorage.removeItem('theafrican_masthead_font');
  };

  // Ticker mutations
  const updateTickerHeadline = (updated: NewsTickerItem) => {
    setTickerHeadlines((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    );
  };

  const addTickerHeadline = (item: NewsTickerItem) => {
    setTickerHeadlines((prev) => [item, ...prev]);
  };

  const deleteTickerHeadline = (id: string) => {
    setTickerHeadlines((prev) => prev.filter((t) => t.id !== id));
  };

  // Club Trends mutations
  const updateClubTrend = (trend: ClubTrend) => {
    setClubTrends((prev) =>
      prev.map((c) => (c.id === trend.id ? trend : c))
    );
  };

  const addClubTrend = (trend: ClubTrend) => {
    setClubTrends((prev) => [trend, ...prev]);
  };

  const deleteClubTrend = (id: string) => {
    setClubTrends((prev) => prev.filter((c) => c.id !== id));
  };

  // Sidebar updates mutations
  const updateSidebarUpdate = (update: SidebarUpdateItem) => {
    setSidebarUpdates((prev) =>
      prev.map((u) => (u.id === update.id ? update : u))
    );
  };

  const addSidebarUpdate = (update: SidebarUpdateItem) => {
    setSidebarUpdates((prev) => [update, ...prev]);
  };

  const deleteSidebarUpdate = (id: string) => {
    setSidebarUpdates((prev) => prev.filter((u) => u.id !== id));
  };

  // In Pictures
  const addInPicturesItem = (item: InPicturesItem) => {
    setInPicturesItems((prev) => [item, ...prev]);
  };

  const deleteInPicturesItem = (id: string) => {
    setInPicturesItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Editor modal controls
  const openArticleEditor = (article: Article | null, initialCategory?: NewsCategory) => {
    if (!isAuthor) {
      setIsLoginModalOpen(true);
      return;
    }
    setEditingArticle(article);
    setEditorInitialCategory(initialCategory || null);
    setIsArticleEditorOpen(true);
  };

  const closeArticleEditor = () => {
    setIsArticleEditorOpen(false);
    setEditingArticle(null);
    setEditorInitialCategory(null);
  };

  // Category Configuration Mutations
  const updateCategoryConfig = (id: NewsCategory, updates: Partial<CategoryConfig>) => {
    setCategoriesConfig((prev) =>
      prev.map((cat) => (cat.id === id ? { ...cat, ...updates } : cat))
    );
  };

  const addCategoryConfig = (newCat: CategoryConfig) => {
    setCategoriesConfig((prev) => {
      if (prev.some((c) => c.id === newCat.id)) return prev;
      return [...prev, newCat];
    });
  };

  const deleteCategoryConfig = (id: string) => {
    setCategoriesConfig((prev) => prev.filter((c) => c.id !== id));
  };

  const resetCategoriesConfig = () => {
    setCategoriesConfig(DEFAULT_CATEGORIES_CONFIG);
    try {
      localStorage.setItem('theafrican_categories_config', JSON.stringify(DEFAULT_CATEGORIES_CONFIG));
    } catch {}
  };

  const getCategoryLabel = (id: NewsCategory): string => {
    const found = categoriesConfig.find((c) => c.id === id);
    return found?.label || id.replace('-', ' ');
  };

  const getCategorySectionTitle = (id: NewsCategory): string => {
    const found = categoriesConfig.find((c) => c.id === id);
    return found?.sectionTitle || found?.label || id.replace('-', ' ');
  };

  // Studio modal controls
  const openAuthorStudio = (tab: 'articles' | 'title-styling' | 'categories' | 'ticker' | 'clubs' | 'wire' | 'profile' = 'articles') => {
    if (!isAuthor) {
      setIsLoginModalOpen(true);
      return;
    }
    setAuthorStudioTab(tab);
    setIsAuthorStudioOpen(true);
  };

  const closeAuthorStudio = () => {
    setIsAuthorStudioOpen(false);
  };

  return (
    <AuthorContext.Provider
      value={{
        isAuthor,
        authorName,
        authorRole,
        loginAsAuthor,
        quickDemoLogin,
        logoutAuthor,
        isLoginModalOpen,
        openLoginModal: () => setIsLoginModalOpen(true),
        closeLoginModal: () => setIsLoginModalOpen(false),

        mastheadTitle,
        mastheadTagline,
        mastheadFontStyle,
        updateMastheadSettings,
        updateAuthorProfile,

        categoriesConfig,
        updateCategoryConfig,
        addCategoryConfig,
        deleteCategoryConfig,
        resetCategoriesConfig,
        getCategoryLabel,
        getCategorySectionTitle,

        articles,
        updateArticle,
        addArticle,
        deleteArticle,
        resetArticlesToDefault,

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

        inPicturesItems,
        addInPicturesItem,
        deleteInPicturesItem,

        isArticleEditorOpen,
        editingArticle,
        editorInitialCategory,
        openArticleEditor,
        closeArticleEditor,

        isAuthorStudioOpen,
        authorStudioTab,
        openAuthorStudio,
        closeAuthorStudio
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthor = () => {
  const context = useContext(AuthorContext);
  if (!context) {
    throw new Error('useAuthor must be used within an AuthorProvider');
  }
  return context;
};
