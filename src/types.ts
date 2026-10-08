export type NewsCategory = 
  | 'top-stories'
  | 'politics'
  | 'scandals'
  | 'gossip'
  | 'entertainment'
  | 'technology'
  | 'sports'
  | 'science-health'
  | 'arts-culture'
  | 'club-madness'
  | 'world'
  | 'climate-energy'
  | 'opinion'
  | 'corridors-of-power'
  | (string & {});

export interface CategoryConfig {
  id: NewsCategory;
  label: string; // The display name on navigation bars, menus, and section headers
  sectionTitle?: string; // The large section block title e.g. "Politics & Governance"
  description?: string;
  isHighlight?: boolean;
  enabled?: boolean;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  verified?: boolean;
}

export interface CourtCaseDetail {
  courtName: string;
  caseNumber: string;
  presidingJudge: string;
  rulingDate: string;
  status: 'In Progress' | 'Verdict Delivered' | 'Hearing Scheduled' | 'Constitutional Appeal';
  keyLitigants: string;
}

export interface Article {
  id: string;
  title: string;
  kicker: string;
  deck: string;
  category: NewsCategory;
  categoryLabel: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  imageCaption: string;
  views: number;
  commentsCount: number;
  isLead?: boolean;
  isTrending?: boolean;
  isFeaturedInSlider?: boolean;
  isSponsored?: boolean;
  sponsorName?: string;
  tags: string[];
  keyPoints?: string[];
  courtDetail?: CourtCaseDetail;
  content: string[];
}

export interface NewsTickerItem {
  id: string;
  title: string;
  timeAgo: string;
  category: string;
  tag: string;
  articleId: string;
}

export interface SidebarUpdateItem {
  id: string;
  timestamp: string;
  title: string;
  category: string;
  tag: string;
  badgeColor?: string;
  articleId: string;
  isUrgent?: boolean;
  imageUrl?: string;
  excerpt?: string;
}

export interface AdUnit {
  id: string;
  format: 'leaderboard' | 'skyscraper' | 'companion' | 'infeed' | 'mobile_sticky' | 'midpage';
  sponsor: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  cpmRate: string;
  imageUrl?: string;
}

export interface CommentItem {
  id: string;
  authorName: string;
  authorRole: string;
  timestamp: string;
  text: string;
  upvotes: number;
}

export interface InPicturesItem {
  id: string;
  photoUrl: string;
  photoTitle: string;
  caption: string;
  location: string;
  authorCredit: string;
  uploadedAt: string;
  videoTitle: string;
  videoUrl: string;
  videoThumbnail?: string;
  videoDuration: string;
}

export interface ClubTrend {
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
