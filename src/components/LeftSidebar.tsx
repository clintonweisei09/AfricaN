import React, { useState, useEffect, useRef } from 'react';
import { Music, ChevronRight, Sparkles, ShieldAlert, FileText, Edit3, Plus } from 'lucide-react';
import { Article } from '../types';
import { FloatingCubeAd } from './FloatingCubeAd';
import { FeaturedNewsSidebar } from './FeaturedNewsSidebar';
import { FeaturedImagesSidebar } from './FeaturedImagesSidebar';
import { useAuthor } from '../context/AuthorContext';
import { resolveMediaUrl } from '../utils/media';

interface LeftSidebarProps {
  onSelectUpdate: (articleId: string) => void;
  onSelectArticle?: (article: Article) => void;
  isAdFreeMode: boolean;
  onOpenMonetization: () => void;
}

// Popular Kenyan Clubs Trending Data for 'Club Madness'
interface ClubTrend {
  id: string;
  clubName: string;
  location: string;
  trendHeadline: string;
  vibe: string;
  highlight: string;
  imageUrl: string;
  bestDay: string;
  isHot?: boolean;
}

const KENYAN_CLUB_TRENDS: ClubTrend[] = [
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
    trendHeadline: 'Legendary Sunday Sunday madness sets south Nairobi on fire with throwback Old School & Rhumba.',
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
  },
  {
    id: 'club-cavalli',
    clubName: 'Cavalli Lounge & Grill',
    location: 'Lavington, Nairobi',
    trendHeadline: 'International Afrobeat stars spotted at private soundproof VIP lounge hosting impromptu midnight jam.',
    vibe: '🌟 STAR SIGHTINGS',
    highlight: 'Celebrity guest appearances after stadium shows',
    imageUrl: '/src/assets/images/luxury_wealth_ad_1791229333749.jpg',
    bestDay: 'Friday Night Stars'
  }
];

// Colorful Ad Campaigns rotating every 3 seconds - each with its OWN distinct background color!
interface ColorfulAd {
  id: string;
  brand: string;
  category: string;
  headline: string;
  tagline: string;
  ctaText: string;
  gradientBg: string;
  borderColor: string;
  badgeBg: string;
  icon: string;
}

const COLORFUL_3S_ADS: ColorfulAd[] = [
  {
    id: 'cad-1',
    brand: 'Nike Afro-Street Edition',
    category: 'Footwear & Streetwear',
    headline: 'Air Max Pulse Pan-African',
    tagline: 'Limited Gold Brocade Silhouette. Exclusive Drop in Stores.',
    ctaText: 'Shop New Drop',
    gradientBg: 'from-fuchsia-600 via-purple-600 to-indigo-700',
    borderColor: 'border-fuchsia-400',
    badgeBg: 'bg-white text-purple-900',
    icon: '👟'
  },
  {
    id: 'cad-2',
    brand: 'Zuku Gigabit Fibre',
    category: 'Ultra Broadband',
    headline: '1,000 Mbps Home Fibre',
    tagline: 'Stream, Game & Work with Zero Lag. 50% Off First 3 Months.',
    ctaText: 'Get Connected',
    gradientBg: 'from-cyan-500 via-teal-500 to-emerald-600',
    borderColor: 'border-cyan-300',
    badgeBg: 'bg-slate-900 text-cyan-300',
    icon: '🚀'
  },
  {
    id: 'cad-3',
    brand: 'Golden Sun Rooftop Lounge',
    category: 'Nightlife & Dining',
    headline: 'Skyline Sunset Sessions',
    tagline: 'Craft Cocktails & Live Afro-House DJ Sets Every Weekend.',
    ctaText: 'Reserve VIP Table',
    gradientBg: 'from-amber-500 via-orange-600 to-rose-600',
    borderColor: 'border-yellow-300',
    badgeBg: 'bg-black text-amber-400',
    icon: '🍸'
  }
];

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  onSelectUpdate,
  onSelectArticle,
  isAdFreeMode,
  onOpenMonetization
}) => {
  const { articles, clubTrends, isAuthor, openArticleEditor, getCategorySectionTitle } = useAuthor();
  const scandalArticles = articles.filter((a) => a.category === 'scandals');
  const clubMadnessArticles = articles.filter((a) => a.category === 'club-madness');

  // 3-second colorful ad state
  const [colorfulAdIndex, setColorfulAdIndex] = useState(0);

  // Club Madness Scroll Ref & Timer: SCROLLS UP AFTER 5 SECONDS!
  const clubScrollContainerRef = useRef<HTMLDivElement>(null);

  // 2. Club Madness: Scrolls up automatically after 5 seconds!
  useEffect(() => {
    const scrollTimer = setInterval(() => {
      if (clubScrollContainerRef.current) {
        const container = clubScrollContainerRef.current;
        const itemHeight = 100;
        const nextScrollTop = container.scrollTop + itemHeight;

        if (nextScrollTop >= container.scrollHeight - container.clientHeight - 10) {
          container.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ top: itemHeight, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(scrollTimer);
  }, []);

  // 3. Colorful Ad changes every 3 seconds
  useEffect(() => {
    if (isAdFreeMode) return;
    const adTimer = setInterval(() => {
      setColorfulAdIndex((prev) => (prev + 1) % COLORFUL_3S_ADS.length);
    }, 3000);

    return () => clearInterval(adTimer);
  }, [isAdFreeMode]);

  const handleArticleClick = (article: Article) => {
    if (onSelectArticle) {
      onSelectArticle(article);
    } else {
      onSelectUpdate(article.id);
    }
  };

  const currentColorfulAd = COLORFUL_3S_ADS[colorfulAdIndex];

  return (
    <aside className="w-full space-y-5 select-none">

      {/* 3. SCANDALS & WHISTLEBLOWER INVESTIGATIONS SIDEBAR
          - As explicitly requested: "the section of scandals remove it and place it as a sidebar on the left just below the add"
          - Styled in signature Corridors of Power red enclosure!
      */}
      <div className="border-2 border-red-600 bg-white rounded-xl overflow-hidden shadow-xs">
        
        {/* Red Header Bar */}
        <div className="bg-red-600 text-white px-3.5 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-yellow-300 fill-yellow-300 animate-pulse" />
            <h3 className="font-sans font-black text-sm uppercase tracking-wide text-white">
              {getCategorySectionTitle('scandals')}
            </h3>
          </div>
          <div className="flex items-center gap-1.5">
            {isAuthor && (
              <button
                onClick={() => openArticleEditor(null, 'scandals')}
                className="bg-black/50 hover:bg-black/80 text-yellow-300 px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-0.5 transition-colors cursor-pointer"
                title="Create New Scandal Story"
              >
                <Plus className="w-3 h-3 text-yellow-400" />
                <span>Add</span>
              </button>
            )}
            <span className="text-[9px] font-mono bg-black/40 px-1.5 py-0.5 rounded uppercase font-bold text-yellow-300">
              Exposed
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="bg-red-50/80 px-3.5 py-1.5 border-b border-red-100 text-[10px] text-red-950 font-bold">
          High-Stakes Tenders, Leaked Audits & Graft Inquests
        </div>

        {/* Scandals Posts List with Images and Titles */}
        <div className="p-3 space-y-3 divide-y divide-slate-100">
          {scandalArticles.slice(0, 5).map((article) => (
            <div
              key={article.id}
              onClick={() => handleArticleClick(article)}
              className="pt-2.5 first:pt-0 cursor-pointer group text-left transition-colors"
            >
              <div className="flex gap-2.5 items-start">
                {article.imageUrl && (
                  <div className="w-14 h-12 rounded-md overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                    <img
                      src={resolveMediaUrl(article.imageUrl)}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-bold text-red-600 uppercase block truncate">
                    {article.kicker}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>{article.readTime}</span>
                    <span className="text-red-600 font-bold group-hover:underline flex items-center gap-0.5">
                      <span>View Dossier</span>
                      <ChevronRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white px-3 py-1.5 text-center text-[10px] font-mono flex items-center justify-between">
          <span>Whistleblower Secure Wire</span>
          <span className="text-yellow-400 font-bold">The AfricaN Desk</span>
        </div>
      </div>

      {/* 4. CLUB MADNESS SIDEBAR (Placed below Scandals!)
          - Shows latest trends around popular Kenyan clubs (Quiver, Alchemist, Milan, 1824, etc.)
          - Scrolls up after 5 seconds automatically!
      */}
      <div className="border-2 border-red-600 bg-white rounded-xl overflow-hidden shadow-xs">
        
        {/* Red Header Bar */}
        <div className="bg-red-600 text-white px-3.5 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-4 h-4 text-yellow-300 fill-yellow-300 animate-bounce" />
            <h3 className="font-sans font-black text-sm uppercase tracking-wide text-white">
              {getCategorySectionTitle('club-madness')}
            </h3>
          </div>
          <div className="flex items-center gap-1.5">
            {isAuthor && (
              <button
                onClick={() => openArticleEditor(null, 'club-madness')}
                className="bg-black/50 hover:bg-black/80 text-yellow-300 px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-0.5 transition-colors cursor-pointer"
                title="Create New Club Madness Post"
              >
                <Plus className="w-3 h-3 text-yellow-400" />
                <span>Add</span>
              </button>
            )}
            <span className="text-[9px] font-mono bg-black/40 px-1.5 py-0.5 rounded uppercase font-bold text-yellow-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-ping"></span>
              Nairobi Nightlife
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="bg-red-50/80 px-3.5 py-1.5 border-b border-red-100 text-[10px] text-red-950 font-bold">
          Trending Kenyan Clubs, VIP Bottle Wars & Hot DJ Sets
        </div>

        {/* Scrollable Container that Auto-Scrolls UP after 5 Seconds! */}
        <div 
          ref={clubScrollContainerRef}
          className="p-3 max-h-[340px] overflow-y-auto custom-scrollbar space-y-3 divide-y divide-slate-100 transition-all duration-700 scroll-smooth"
        >
          {/* Author Published Club Madness Stories */}
          {clubMadnessArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => handleArticleClick(article)}
              className="pt-2.5 first:pt-0 cursor-pointer group text-left transition-colors"
            >
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className="font-sans font-black text-red-600 text-xs flex items-center gap-1">
                  <span>{article.kicker || 'CLUB DISPATCH'}</span>
                </span>
                <span className="text-[9px] font-mono bg-red-600 text-white font-bold px-1.5 py-0.5 rounded">
                  🔥 NEW REPORT
                </span>
              </div>

              <div className="flex gap-2.5 items-start">
                {article.imageUrl && (
                  <div className="w-14 h-12 rounded-md overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                    <img
                      src={resolveMediaUrl(article.imageUrl)}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2 mt-0.5">
                    {article.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                    {article.deck}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {KENYAN_CLUB_TRENDS.map((club) => (
            <div
              key={club.id}
              className="pt-2.5 first:pt-0 cursor-pointer group text-left transition-colors"
              onClick={() => onSelectUpdate('gossip-celebrity-1')}
            >
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className="font-sans font-black text-red-600 text-xs flex items-center gap-1">
                  <span>{club.clubName}</span>
                </span>
                <span className="text-[9px] font-mono bg-slate-900 text-yellow-300 font-bold px-1.5 py-0.5 rounded">
                  {club.vibe}
                </span>
              </div>

              <div className="flex gap-2.5 items-start">
                {club.imageUrl && (
                  <div className="w-14 h-12 rounded-md overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                    <img
                      src={resolveMediaUrl(club.imageUrl)}
                      alt={club.clubName}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                    📍 {club.location}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2 mt-0.5">
                    {club.trendHeadline}
                  </h4>
                  <p className="text-[10px] text-amber-700 font-semibold line-clamp-1 mt-1 bg-amber-50 px-1.5 py-0.5 rounded">
                    ⚡ {club.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white px-3 py-1.5 text-center text-[10px] font-mono">
          The AfricaN Entertainment Bureau · Live Trends
        </div>
      </div>

      {/* 5. NORMAL, NON-STRETCHING AUTO-CHANGING SPONSOR AD */}
      <FloatingCubeAd
        variant="nightlife"
        isAdFreeMode={isAdFreeMode}
        onOpenMonetization={onOpenMonetization}
      />

      {/* 6. FEATURED NEWS SIDEBAR (Placed at bottom left between/adjacent to ads, 5 posts refreshing after 3s!) */}
      <FeaturedNewsSidebar
        onSelectArticle={onSelectArticle}
        onSelectUpdate={onSelectUpdate}
      />

      {/* 7. COLORFUL AD THAT CHANGES EVERY 3 SECONDS (Each ad has its own unique background color!) */}
      {!isAdFreeMode && (
        <div 
          onClick={onOpenMonetization}
          className={`w-full rounded-2xl p-3.5 cursor-pointer text-white shadow-lg bg-gradient-to-br ${currentColorfulAd.gradientBg} border-2 ${currentColorfulAd.borderColor} transition-all duration-500 transform hover:-translate-y-0.5 select-none relative overflow-hidden`}
        >
          <div className="flex items-center justify-between text-[10px] mb-2 font-mono">
            <span className={`px-2 py-0.5 rounded-full font-black uppercase text-[9px] ${currentColorfulAd.badgeBg}`}>
              {currentColorfulAd.category}
            </span>
            <span className="text-white/90 font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span>SPONSORED</span>
            </span>
          </div>

          <div className="flex items-start gap-2.5 my-1">
            <div className="w-10 h-10 rounded-xl bg-black/30 backdrop-blur-md flex items-center justify-center text-xl shrink-0 border border-white/20">
              {currentColorfulAd.icon}
            </div>

            <div className="space-y-0.5 min-w-0 flex-1">
              <span className="text-[10px] font-bold text-yellow-300 uppercase tracking-wide block">
                {currentColorfulAd.brand}
              </span>
              <h4 className="font-sans font-black text-xs text-white leading-tight">
                {currentColorfulAd.headline}
              </h4>
              <p className="text-[10px] text-white/90 line-clamp-2 leading-snug">
                {currentColorfulAd.tagline}
              </p>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-white/20 flex items-center justify-between">
            <button className="px-2.5 py-1 rounded-lg bg-white text-slate-950 font-black text-[10px] uppercase tracking-wider hover:bg-yellow-300 transition-colors flex items-center gap-1 shadow-xs">
              <span>{currentColorfulAd.ctaText}</span>
              <ChevronRight className="w-3 h-3" />
            </button>
            <span className="text-[9px] text-white/70 font-mono">Sponsored</span>
          </div>
        </div>
      )}

      {/* 8. FEATURED IMAGES SMALL SECTION (Placed below the ad, images smoothly change!) */}
      <FeaturedImagesSidebar
        onSelectImage={(item) => onSelectUpdate('top-story-1')}
      />

    </aside>
  );
};
