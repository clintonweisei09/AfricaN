import { Article, NewsTickerItem, SidebarUpdateItem, AdUnit } from '../types';

export const TICKER_HEADLINES: NewsTickerItem[] = [
  {
    id: 't-1',
    title: 'Supreme Court 7-Judge Bench to Deliver Landmark Ruling on Constitutional Petitions Tomorrow Morning',
    timeAgo: 'Just now',
    category: 'Corridors of Power',
    tag: 'BREAKING',
    articleId: 'case-supreme-court-1'
  },
  {
    id: 't-2',
    title: 'Afcon Qualifiers: National Team Lands in Cairo for Decisive Group Showdown Tonight',
    timeAgo: '4m ago',
    category: 'Sports',
    tag: 'MATCHDAY',
    articleId: 'sports-afcon-1'
  },
  {
    id: 't-3',
    title: 'Parliamentary Committee Orders Arrest of Fugitive Tender Mogul in $42M Port Audit',
    timeAgo: '12m ago',
    category: 'Scandals',
    tag: 'EXPOSED',
    articleId: 'scandal-tender-1'
  },
  {
    id: 't-4',
    title: 'Grammy Winner & Star Diva Spotted Together at Private Luxury Safari Lodge Amid Secret Romance Rumors',
    timeAgo: '19m ago',
    category: 'Gossip',
    tag: 'WHISPERS',
    articleId: 'gossip-celebrity-1'
  },
  {
    id: 't-5',
    title: 'Continental Fintech Super-App Crosses $12 Billion in Cross-Border Mobile Money Transactions',
    timeAgo: '32m ago',
    category: 'Technology',
    tag: 'INNOVATION',
    articleId: 'tech-fintech-1'
  },
  {
    id: 't-6',
    title: 'High Court Freezes $18M in Off-Shore Bank Accounts Linked to Ministry Procurement Kingpin',
    timeAgo: '45m ago',
    category: 'Corridors of Power',
    tag: 'COURT DOCKET',
    articleId: 'case-corruption-graft'
  },
  {
    id: 't-7',
    title: 'Continental Renewable Energy Capacity Hits Record 45 Gigawatts on New Solar & Geothermal Grids',
    timeAgo: '58m ago',
    category: 'Climate & Energy',
    tag: 'CLEAN ENERGY',
    articleId: 'climate-rift-geothermal'
  }
];

export const SIDEBAR_UPDATES: SidebarUpdateItem[] = [
  {
    id: 'up-1',
    timestamp: '13:24',
    title: 'Anti-Corruption Court rejects bail variation request by indicted state corporation managing director',
    category: 'Court Docket',
    tag: 'COURTROOM',
    badgeColor: 'bg-red-600',
    articleId: 'case-supreme-court-1',
    isUrgent: true,
    imageUrl: '/src/assets/images/corridors_court_judge_1791231272938.jpg',
    excerpt: 'Magistrate cites flight risk and complex overseas asset trails in high-stakes graft proceeding.'
  },
  {
    id: 'up-2',
    timestamp: '13:19',
    title: 'Celebrity stylist spills tea on VIP red carpet dressing room clash at continental music gala',
    category: 'Gossip',
    tag: 'TRENDING',
    badgeColor: 'bg-purple-600',
    articleId: 'gossip-celebrity-1',
    imageUrl: '/src/assets/images/celebrity_vip_whisper_1791232322737.jpg',
    excerpt: 'Tensions flare backstage between chart-topping divas over custom sequin gowns and dressing suites.'
  },
  {
    id: 'up-3',
    timestamp: '13:14',
    title: 'Auditor General issues special red-flag audit finding on unbudgeted expenditures across 8 state departments',
    category: 'Scandals',
    tag: 'SPECIAL AUDIT',
    badgeColor: 'bg-amber-600',
    articleId: 'scandal-tender-1',
    isUrgent: true,
    imageUrl: '/src/assets/images/african_politics_summit_1791231284594.jpg',
    excerpt: 'Over $42M in unauthorized procurement tenders flagged by parliamentary watchdog committee.'
  },
  {
    id: 'up-4',
    timestamp: '13:08',
    title: 'Ruling coalition leaders summon emergency parliamentary group meeting over constitutional amendments',
    category: 'Politics',
    tag: 'CABINET',
    badgeColor: 'bg-blue-600',
    articleId: 'slider-politics-summit',
    imageUrl: '/src/assets/images/african_politics_summit_1791231284594.jpg',
    excerpt: 'Heated caucus convened at State House to align whips ahead of key division vote on fiscal reforms.'
  },
  {
    id: 'up-5',
    timestamp: '13:01',
    title: 'Nollywood box office explodes as sci-fi thriller sets opening weekend record of $4.8M across 300 cinemas',
    category: 'Entertainment',
    tag: 'CINEMA',
    badgeColor: 'bg-pink-600',
    articleId: 'slider-ent-awards',
    imageUrl: '/src/assets/images/african_entertainment_awards_1791231296253.jpg',
    excerpt: 'Indigenous futuristic blockbuster outperforms Hollywood imports in Lagos, Accra, and Nairobi.'
  },
  {
    id: 'up-6',
    timestamp: '12:52',
    title: 'Supreme Court Judge recusal petition officially dismissed by judicial service commission review panel',
    category: 'Court Docket',
    tag: 'VERDICT',
    badgeColor: 'bg-red-700',
    articleId: 'case-supreme-court-1',
    imageUrl: '/src/assets/images/corridors_court_judge_1791231272938.jpg',
    excerpt: 'Bench rules petitioner failed to present credible evidence of bias or conflict of interest.'
  },
  {
    id: 'up-7',
    timestamp: '12:45',
    title: 'Star striker declared 100% fit to lead offensive line for continental championship semi-final in Cairo',
    category: 'Sports',
    tag: 'SQUAD UPDATE',
    badgeColor: 'bg-emerald-600',
    articleId: 'slider-sports-football',
    imageUrl: '/src/assets/images/african_sports_football_1791231306049.jpg',
    excerpt: 'Medical clearance granted following intensive hamstring rehabilitation session at team hotel.'
  },
  {
    id: 'up-8',
    timestamp: '12:38',
    title: 'High Court issues temporary injunction stopping government from dissolving statutory advisory council',
    category: 'Court Docket',
    tag: 'ORDERS',
    badgeColor: 'bg-red-600',
    articleId: 'case-corruption-graft',
    imageUrl: '/src/assets/images/corridors_court_judge_1791231272938.jpg',
    excerpt: 'Preservation order protects employment contracts until inter-partes constitutional hearing.'
  },
  {
    id: 'up-9',
    timestamp: '12:30',
    title: 'Pan-African fintech super app raises $85M Series C round to expand cross-border currency rails',
    category: 'Technology',
    tag: 'FINTECH',
    badgeColor: 'bg-cyan-600',
    articleId: 'tech-fintech-1',
    imageUrl: '/src/assets/images/african_fintech_hub_1791232334696.jpg',
    excerpt: 'Venture backing led by sovereign wealth funds aims to integrate mobile money wallets across 18 countries.'
  },
  {
    id: 'up-10',
    timestamp: '12:21',
    title: 'Geothermal expansion brings 350MW additional baseload to regional power pool',
    category: 'Climate & Energy',
    tag: 'POWER GRID',
    badgeColor: 'bg-emerald-600',
    articleId: 'climate-rift-geothermal',
    imageUrl: '/src/assets/images/green_energy_grid_1791229322913.jpg',
    excerpt: 'Rift Valley steam turbines achieve record thermal efficiency, driving heavy manufacturing growth.'
  }
];

export const CORRIDORS_OF_POWER_CASES: Article[] = [
  {
    id: 'case-supreme-court-1',
    title: 'Supreme Court 7-Judge Bench Retires to Draft Final Verdict on Contested Governance Act',
    kicker: 'Corridors of Power · Constitutional Bench',
    deck: 'Chief Justice and full apex bench conclude five days of oral hearings. At stake is the constitutional boundary between executive decrees and legislative supremacy.',
    category: 'corridors-of-power',
    categoryLabel: 'Corridors of Power',
    author: {
      name: 'Advocate Omondi Wandera',
      role: 'Senior Legal & Judicial Editor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
      verified: true
    },
    publishedAt: 'Today · 12:45 PM',
    readTime: '6 min read',
    imageUrl: '/src/assets/images/corridors_court_judge_1791231272938.jpg',
    imageCaption: 'The Supreme Court bench during final legal submissions in Courtroom No. 1.',
    views: 94200,
    commentsCount: 312,
    courtDetail: {
      courtName: 'The Supreme Court of Kenya / Regional Apex Court',
      caseNumber: 'Pet. No. E041 of 2026',
      presidingJudge: 'Chief Justice & President of the Supreme Court',
      rulingDate: 'Ruling Expected: Tomorrow, 10:00 AM',
      status: 'Verdict Delivered',
      keyLitigants: 'Law Society & Civil Rights Coalition vs. Attorney General & Speaker of Parliament'
    },
    keyPoints: [
      'Seven apex judges scrutinized whether executive orders violated constitutional oversight checks.',
      'Defense argued national emergency clauses justified expedited fiscal restructuring.',
      'Judicial security heightened around the Supreme Court perimeter ahead of tomorrow\'s ruling.'
    ],
    content: [
      'Inside a hushed and heavily secured Courtroom Number 1, the Chief Justice struck the ceremonial gavel at exactly 4:30 PM, bringing five days of marathon oral submissions to an end. The judges announced they will deliver their definitive verdict tomorrow morning.',
      'Senior Counsel representing the petitioning civil society groups argued passionately that bypassing public participation checks threatens the foundational separation of powers enshrined in the constitution.',
      'On the government side, the Solicitor General submitted that the administrative orders were vital for national economic stability, urging the bench to exercise judicial restraint and avoid paralyzing public administrative services.'
    ],
    tags: ['Supreme Court', 'Constitutional Law', 'Judicial Review', 'Chief Justice', 'Separation of Powers']
  },
  {
    id: 'case-corruption-graft',
    title: 'Anti-Corruption Magistrate Freezes $18M in Off-Shore Accounts Linked to Ministry Procurement Kingpin',
    kicker: 'Corridors of Power · Asset Recovery',
    deck: 'Court rules reasonable suspicion exists that state contract funds were layered through Caribbean shell corporations and luxury real estate.',
    category: 'corridors-of-power',
    categoryLabel: 'Corridors of Power',
    author: {
      name: 'Brenda Nanjala',
      role: 'Judicial Bureau Chief',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
      verified: true
    },
    publishedAt: 'Today · 11:15 AM',
    readTime: '4 min read',
    imageUrl: '/src/assets/images/corridors_court_judge_1791231272938.jpg',
    imageCaption: 'Anti-Corruption Court in session as state prosecutors present bank forensic tracing affidavits.',
    views: 76500,
    commentsCount: 184,
    courtDetail: {
      courtName: 'Special Anti-Corruption & Economic Crimes High Court',
      caseNumber: 'ACC Misc. Application No. 182 of 2026',
      presidingJudge: 'Justice Patrick Mumo',
      rulingDate: 'Orders Extended for 90 Days',
      status: 'In Progress',
      keyLitigants: 'Ethics & Anti-Corruption Commission vs. Apex Horizon Holdings & 4 Others'
    },
    content: [
      'Justice Patrick Mumo issued preservation orders freezing 14 domestic bank accounts, three foreign holdings, and seven luxury properties located across affluent residential neighborhoods.',
      'Forensic financial investigators testified that over an eight-month window, routine supply tenders for medical diagnostic machinery were systematically inflated by more than 400%, with proceeds funneled through proxy directors.'
    ],
    tags: ['Anti-Corruption', 'Asset Recovery', 'High Court', 'Graft Trials']
  },
  {
    id: 'case-election-boundaries',
    title: 'Electoral Commission Boundaries Delimitation Challenged at Appellate Court Bench',
    kicker: 'Corridors of Power · Appellate Bench',
    deck: 'Five petitioners claim formula used to redraw 27 parliamentary constituencies violates demographic density requirements.',
    category: 'corridors-of-power',
    categoryLabel: 'Corridors of Power',
    author: {
      name: 'Advocate Omondi Wandera',
      role: 'Senior Legal & Judicial Editor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
      verified: true
    },
    publishedAt: 'Today · 09:30 AM',
    readTime: '4 min read',
    imageUrl: '/src/assets/images/corridors_court_judge_1791231272938.jpg',
    imageCaption: 'Appellate judges listening to oral constitutional submissions.',
    views: 48900,
    commentsCount: 92,
    courtDetail: {
      courtName: 'Court of Appeal Constitutional Division',
      caseNumber: 'Civil Appeal No. 98 of 2026',
      presidingJudge: 'Justice Martha Koome presiding with 2 others',
      rulingDate: 'Submissions Closed · Judgment in 14 Days',
      status: 'In Progress',
      keyLitigants: 'Citizens for Fair Representation vs. Independent Electoral & Boundaries Commission'
    },
    content: [
      'The Appellate Court was asked to declare the newly gazetted electoral map null and void, with petitioners maintaining that population quotas in urban districts were unfairly suppressed.'
    ],
    tags: ['Elections', 'Boundaries', 'Court of Appeal', 'Constitutional Rights']
  },
  {
    id: 'case-commercial-telecom',
    title: 'Commercial Court Arbitrates $120M Spectrum Auction Feud Between Telecom Titans',
    kicker: 'Corridors of Power · Commercial Disputes',
    deck: 'High Court Commercial Division orders interim status quo on 5G frequency allocations pending international arbitration review.',
    category: 'corridors-of-power',
    categoryLabel: 'Corridors of Power',
    author: {
      name: 'Brenda Nanjala',
      role: 'Judicial Bureau Chief',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
      verified: true
    },
    publishedAt: 'Today · 08:00 AM',
    readTime: '5 min read',
    imageUrl: '/src/assets/images/corridors_court_judge_1791231272938.jpg',
    imageCaption: 'Commercial Division courtroom during technical dispute proceedings.',
    views: 52100,
    commentsCount: 74,
    courtDetail: {
      courtName: 'Commercial and Tax Division High Court',
      caseNumber: 'Comm. Suit No. 411 of 2026',
      presidingJudge: 'Lady Justice Grace Nzioka',
      rulingDate: 'Interim Injunction Maintained',
      status: 'Hearing Scheduled',
      keyLitigants: 'Continental Telecom Consortium vs. Communications Authority & 2 Competitors'
    },
    content: [
      'Lady Justice Grace Nzioka ruled that premature deployment of disputed frequencies risked causing irreparable market distortions before the underlying regulatory dispute is adjudicated.'
    ],
    tags: ['Commercial Court', 'Telecom Dispute', 'Spectrum Auction', '5G Regulation']
  }
];

export const MAIN_SLIDER_ARTICLES: Article[] = [
  {
    id: 'slider-politics-summit',
    title: 'The Great Continental Summit: Heads of State Sign Landmark Free Trade & Borderless Currency Treaty',
    kicker: 'Lead Story · Geopolitics & Statecraft',
    deck: 'In an unprecedented 54-nation consensus in Addis Ababa, African leaders ratify unified digital settlement rails, aiming to eliminate $5 billion in annual cross-border transaction fees.',
    category: 'politics',
    categoryLabel: 'Politics & Governance',
    author: {
      name: 'Kofi Mensah',
      role: 'Chief Political Correspondent',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
      verified: true
    },
    publishedAt: '25 mins ago',
    readTime: '5 min read',
    imageUrl: '/src/assets/images/african_politics_summit_1791231284594.jpg',
    imageCaption: 'Heads of state and plenipotentiaries at the historic plenary hall in Addis Ababa.',
    views: 142800,
    commentsCount: 428,
    isLead: true,
    isFeaturedInSlider: true,
    tags: ['AfCFTA', 'Pan-African Trade', 'Digital Currency', 'Addis Ababa', 'Summit'],
    content: [
      'The plenary hall of the African Union erupted in sustained ovation as the 54th signatory inscribed the final gold-embossed seal onto the Pan-African Payment and Settlement System treaty.',
      'Under the historic agreement, intra-African transactions will no longer route through correspondent banks in New York, London, or Paris, cutting clearance settlement times from days down to sub-second transactions.',
      'Presidential delegates emphasized that economic sovereignty begins with monetary autonomy.'
    ]
  },
  {
    id: 'slider-ent-awards',
    title: 'Continental Music & Screen Awards: Red Carpet Glamour, Triumphs, and Unscripted Moments',
    kicker: 'Entertainment · Gala Night',
    deck: 'From Afrobeats legends to breakout Amapiano stars, the star-studded celebration honored indigenous creative arts before a global streaming audience of 40 million viewers.',
    category: 'entertainment',
    categoryLabel: 'Entertainment & Celebrity',
    author: {
      name: 'Zainab Balogun',
      role: 'Culture & Celebrity Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
      verified: true
    },
    publishedAt: '42 mins ago',
    readTime: '4 min read',
    imageUrl: '/src/assets/images/african_entertainment_awards_1791231296253.jpg',
    imageCaption: 'Award winners celebrate on stage with gold statuettes amidst pyrotechnics and confetti.',
    views: 118400,
    commentsCount: 319,
    isFeaturedInSlider: true,
    tags: ['Music Awards', 'Afrobeats', 'Amapiano', 'Red Carpet', 'Celebrity Fashion'],
    content: [
      'Glitz, haute couture, and pulsating rhythms took center stage as the continent celebrated its finest actors, vocalists, and directors in an electrifying three-hour ceremony.',
      'High-fashion designers showcased dramatic silk brocades and modern interpretations of indigenous textiles.'
    ]
  },
  {
    id: 'slider-sports-football',
    title: 'Continental Champions League Epic: Dramatic 94th-Minute Stunner Sends Cairo Giants into Finals',
    kicker: 'Sports Arena · Champions League',
    deck: 'A thunderous 30-yard volley in second-half stoppage time ignites a crowd of 75,000 spectators as the underdogs pull off a stunning tactical upset.',
    category: 'sports',
    categoryLabel: 'Sports Arena',
    author: {
      name: 'Farouk Al-Mansoor',
      role: 'Senior Sports Correspondent',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
      verified: true
    },
    publishedAt: '1 hour ago',
    readTime: '4 min read',
    imageUrl: '/src/assets/images/african_sports_football_1791231306049.jpg',
    imageCaption: 'The winning strike beats the goalkeeper at full stretch under the stadium floodlights.',
    views: 167300,
    commentsCount: 652,
    isFeaturedInSlider: true,
    tags: ['Champions League', 'Football', 'Cairo Stadium', 'Afcon', 'Injury Time Thriller'],
    content: [
      'In a clash of titans that lived up to its high billing, the ninety minutes had ended deadlocked before an electrifying piece of individual brilliance decided the semifinal.',
      'Receiving a headed knockdown on the edge of the box, the 21-year-old midfielder let fly with his left foot, sending the ball ricocheting off the crossbar into the top corner.'
    ]
  },
  {
    id: 'slider-scandal-port',
    title: 'The Ghost Shipments: Whistleblower Dossier Exposes $42M Phantom Fuel Tender Scheme',
    kicker: 'Scandals & Whistleblowers',
    deck: 'Leaked bills of lading, secret offshore shell companies, and satellite maritime logs reveal how zero liters of diesel were delivered despite full state treasury disbursements.',
    category: 'scandals',
    categoryLabel: 'Scandals & Whistleblowers',
    author: {
      name: 'David Ochieng',
      role: 'Investigative Bureau Lead',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80',
      verified: true
    },
    publishedAt: '2 hours ago',
    readTime: '7 min read',
    imageUrl: '/src/assets/images/african_politics_summit_1791231284594.jpg',
    imageCaption: 'Port storage tanks under joint auditor-general and forensic police lock.',
    views: 198500,
    commentsCount: 894,
    isFeaturedInSlider: true,
    tags: ['Scandal', 'Whistleblower', 'Fuel Tender', 'Graft Probe', 'Public Accounts'],
    content: [
      'Months of covert financial tracking and AIS satellite telemetry have uncovered one of the brazen procurement conspiracies in recent port history.',
      'According to customs documents filed with the revenue authority, a supertanker purportedly discharged 45,000 metric tons of low-sulfur diesel at terminal berth number four.'
    ]
  }
];

export const ALL_SECTIONS_ARTICLES: Article[] = [
{
    "id": "top-story-7",
    "title": "Continental Central Banks Launch Unified Instant Reserve Swap System to Shield African Currencies",
    "kicker": "Top Stories \u00b7 Reserve Bank",
    "deck": "The 18-nation pilot eliminates foreign currency middleman costs, reducing cross-border currency conversion margins to near zero.",
    "category": "top-stories",
    "categoryLabel": "Top Stories",
    "author": {
      "name": "Dr. Adebayo Ogunlesi",
      "role": "Macroeconomics Editor",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      "verified": true
    },
    "publishedAt": "18m ago",
    "readTime": "4 min read",
    "imageUrl": "/src/assets/images/african_fintech_hub_1791232334696.jpg",
    "imageCaption": "Governors of African central banks unveil the unified clearing protocol.",
    "views": 112000,
    "commentsCount": 319,
    "tags": [
      "Central Bank",
      "Forex",
      "Economy",
      "Currency Swap"
    ],
    "content": [
      "Eighteen central banks have connected their settlement engines to the continental clearing platform.",
      "The move reduces vulnerability to external balance-of-payments shocks and dollar volatility."
    ]
  },
  {
    "id": "politics-7",
    "title": "Parliamentary Coalition Accord Finalized Ahead of Crucial National Electoral Reform Vote",
    "kicker": "Politics \u00b7 Coalition Front",
    "deck": "Cross-party leaders announce consensus on independent electoral commission appointments following weeks of deadlock.",
    "category": "politics",
    "categoryLabel": "Politics",
    "author": {
      "name": "Fatoumata Traore",
      "role": "Parliamentary Bureau Chief",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      "verified": true
    },
    "publishedAt": "28m ago",
    "readTime": "5 min read",
    "imageUrl": "/src/assets/images/african_politics_summit_1791231284594.jpg",
    "imageCaption": "Bipartisan leadership signs memorandum of understanding.",
    "views": 98400,
    "commentsCount": 240,
    "tags": [
      "Parliament",
      "Elections",
      "Coalition",
      "Democracy"
    ],
    "content": [
      "The bipartisan accord guarantees neutral oversight for the upcoming national ballots.",
      "Civil society observers welcomed the breakthrough as a vital step towards stability."
    ]
  },
  {
    "id": "scandal-7",
    "title": "Customs Duty Evasion Syndicate Busted at Regional Port: $33M in Illicit Luxury Imports Uncovered",
    "kicker": "Scandals \u00b7 Border Syndicate",
    "deck": "Undercover forensic customs auditors intercept falsified shipping manifests routing duty-free shipping containers to phantom shell entities.",
    "category": "scandals",
    "categoryLabel": "Scandals",
    "author": {
      "name": "Kwame Asante",
      "role": "Chief Investigative Correspondent",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      "verified": true
    },
    "publishedAt": "35m ago",
    "readTime": "6 min read",
    "imageUrl": "/src/assets/images/african_politics_summit_1791231284594.jpg",
    "imageCaption": "Customs enforcement officers impound disguised containers at container freight station.",
    "views": 154000,
    "commentsCount": 512,
    "tags": [
      "Customs",
      "Smuggling",
      "Port Audit",
      "Graft"
    ],
    "content": [
      "Forensic revenue inspectors seized 48 high-cube containers filled with untaxed electronics and luxury vehicles.",
      "Four senior port clearing directors have been detained for questioning."
    ]
  },
  {
    "id": "gossip-7",
    "title": "A-List Afrobeat Producer Unfollows Entourage After Luxury Yacht Party Footage Leaks Online",
    "kicker": "Gossip \u00b7 Behind the Velvet Rope",
    "deck": "Insiders reveal secret contract negotiations broke down moments after an unreleased collaboration track was leaked on social platforms.",
    "category": "gossip",
    "categoryLabel": "Gossip",
    "author": {
      "name": "Zuri Mwangi",
      "role": "Culture & Society Columnist",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      "verified": true
    },
    "publishedAt": "42m ago",
    "readTime": "3 min read",
    "imageUrl": "/src/assets/images/celebrity_vip_whisper_1791232322737.jpg",
    "imageCaption": "Paparazzi capture tense exchange at private marina slipway.",
    "views": 204000,
    "commentsCount": 680,
    "tags": [
      "Afrobeat",
      "Celebrity Drama",
      "Yacht Party",
      "Leaked Track"
    ],
    "content": [
      "The superstar producer reportedly scrubbed his Instagram following the unapproved release of a summer anthem demo.",
      "Inner circle sources allege an ex-confidant recorded the private listening session."
    ]
  },
  {
    "id": "entertainment-7",
    "title": "Pan-African Cinema Renaissance: Record 9 Continental Feature Films Enter Global Film Festival Competitions",
    "kicker": "Entertainment \u00b7 Cinema & Screen",
    "deck": "Indigenous storytelling backed by international streaming giants sweeps critical accolades and box office pre-sales across European and North American circuits.",
    "category": "entertainment",
    "categoryLabel": "Entertainment",
    "author": {
      "name": "Nia Okonjo",
      "role": "Arts & Entertainment Editor",
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
      "verified": true
    },
    "publishedAt": "50m ago",
    "readTime": "4 min read",
    "imageUrl": "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    "imageCaption": "African filmmakers celebrate at international festival premiere.",
    "views": 89200,
    "commentsCount": 178,
    "tags": [
      "Cinema",
      "Nollywood",
      "Film Festival",
      "Streaming"
    ],
    "content": [
      "African filmmakers are dominating festival selections with rich historical epics and contemporary urban dramas.",
      "Distribution deals signed this week guarantee theatrical releases across 40 countries."
    ]
  },
  {
    "id": "tech-7",
    "title": "Regional AI Compute Supercluster Activated to Train Open-Source Pan-African Multilingual Language Models",
    "kicker": "Technology \u00b7 Sovereign AI",
    "deck": "The 5,000-accelerator cluster supports real-time translation and clinical diagnostics across 85 indigenous African languages and dialects.",
    "category": "technology",
    "categoryLabel": "Technology",
    "author": {
      "name": "Tariq Al-Mansoor",
      "role": "Technology & Innovation Correspondent",
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
      "verified": true
    },
    "publishedAt": "1h ago",
    "readTime": "5 min read",
    "imageUrl": "/src/assets/images/tech_semiconductor_ai_1791229310782.jpg",
    "imageCaption": "Engineers monitor server rack operations at newly commissioned sovereign compute hub.",
    "views": 134000,
    "commentsCount": 420,
    "tags": [
      "Artificial Intelligence",
      "Sovereign AI",
      "Compute Hub",
      "NLP"
    ],
    "content": [
      "The newly commissioned facility delivers 25 exaflops of AI computation dedicated to African research.",
      "Models trained on the cluster will power healthcare bots and agricultural advisory apps."
    ]
  },
  {
    "id": "world-7",
    "title": "African Union and European Union Forge New Fair Minerals Partnership Mandating Local Value Addition",
    "kicker": "World \u00b7 Strategic Trade",
    "deck": "New bilateral framework bans raw mineral exports, mandating high-grade lithium and cobalt battery component manufacturing within host continental nations.",
    "category": "world",
    "categoryLabel": "World News",
    "author": {
      "name": "Helena Van Der Merwe",
      "role": "Diplomatic Affairs Correspondent",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
      "verified": true
    },
    "publishedAt": "1h ago",
    "readTime": "5 min read",
    "imageUrl": "/src/assets/images/world_diplomacy_summit_1791229858035.jpg",
    "imageCaption": "Delegates shake hands on historic critical minerals agreement.",
    "views": 105000,
    "commentsCount": 310,
    "tags": [
      "Critical Minerals",
      "Diplomacy",
      "Trade Pact",
      "Battery Value Chain"
    ],
    "content": [
      "The partnership ends centuries of unrefined raw ore extraction in favor of domestic battery gigafactories.",
      "Financing mechanisms include European investment guarantees for local chemical processing plants."
    ]
  },
  {
    "id": "sports-7",
    "title": "Continental Club Champions League Draw: Heavyweights Drawn in Epic Group of Death",
    "kicker": "Sports \u00b7 Champions League",
    "deck": "Record 11-time winners face defending champions and dark-horse contenders in what pundits term the fiercest tournament draw in two decades.",
    "category": "sports",
    "categoryLabel": "Sports",
    "author": {
      "name": "Didier Kamau",
      "role": "Chief Sports Writer",
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80",
      "verified": true
    },
    "publishedAt": "1h ago",
    "readTime": "4 min read",
    "imageUrl": "/src/assets/images/sports_stadium_championship_1791229879952.jpg",
    "imageCaption": "Fans create electric atmosphere at packed continental stadium.",
    "views": 178000,
    "commentsCount": 590,
    "tags": [
      "Champions League",
      "Football",
      "CAF",
      "Group of Death"
    ],
    "content": [
      "The draw in Cairo pitted four former champions in Group B, creating a gauntlet for knockout stage qualification.",
      "Matches kickoff next month with live global broadcasts in over 120 countries."
    ]
  },
  {
    "id": "science-7",
    "title": "Breakthrough Malaria Vaccine Manufacturing Facility Commences High-Volume Dosing Production",
    "kicker": "Science & Health \u00b7 Bio-Manufacturing",
    "deck": "The ultra-modern biotechnology hub targets 100 million doses annually, achieving full continental self-reliance for child immunisation programs.",
    "category": "science-health",
    "categoryLabel": "Science & Health",
    "author": {
      "name": "Dr. Amina Tour\u00e9",
      "role": "Health & Bio-Technology Writer",
      "avatar": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=160&q=80",
      "verified": true
    },
    "publishedAt": "2h ago",
    "readTime": "4 min read",
    "imageUrl": "/src/assets/images/medical_science_lab_1791229889394.jpg",
    "imageCaption": "Cleanroom scientists monitor sterile fill-finish operations at pharmaceutical plant.",
    "views": 84500,
    "commentsCount": 192,
    "tags": [
      "Vaccines",
      "Public Health",
      "Malaria",
      "Biotech"
    ],
    "content": [
      "The facility passed rigorous WHO prequalification standards and has shipped its first million test vials.",
      "Health ministers hailed the milestone as a victory for pharmaceutical sovereignty."
    ]
  },
  {
    "id": "arts-7",
    "title": "Restitution Triumph: 32 Ancient Benin Royal Bronzes Returned in Historic Formal Handover Ceremony",
    "kicker": "Arts & Culture \u00b7 Cultural Heritage",
    "deck": "National museums inaugurate bespoke climate-controlled galleries as global institutions speed up the permanent repatriation of sacred artifacts.",
    "category": "arts-culture",
    "categoryLabel": "Arts & Culture",
    "author": {
      "name": "Efua Sutherland",
      "role": "Heritage & Arts Critic",
      "avatar": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=160&q=80",
      "verified": true
    },
    "publishedAt": "2h ago",
    "readTime": "4 min read",
    "imageUrl": "/AfricaN/images/african_entertainment_awards_1791231296253.jpg",
    "imageCaption": "Curators unpack sacred royal bronzes at national museum pavilion.",
    "views": 92300,
    "commentsCount": 265,
    "tags": [
      "Benin Bronzes",
      "Restitution",
      "Heritage",
      "Museums"
    ],
    "content": [
      "The priceless cast bronzes were formally transferred to the royal museum trust in a ceremony attended by cultural leaders.",
      "Negotiations continue for the return of hundreds of additional artifacts held in overseas collections."
    ]
  },
  {
    "id": "climate-7",
    "title": "Cross-Border Green Hydrogen Pipeline Feasibility Study Completed Ahead of Financing Round",
    "kicker": "Climate & Energy \u00b7 Clean Hydrogen",
    "deck": "Consortium of multilateral lenders pledges $4.8B in concessional financing to connect coastal desalination facilities with inland solar fields.",
    "category": "climate-energy",
    "categoryLabel": "Climate & Energy",
    "author": {
      "name": "Dr. Jumaane Kibaki",
      "role": "Renewable Systems Analyst",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      "verified": true
    },
    "publishedAt": "2h ago",
    "readTime": "5 min read",
    "imageUrl": "/src/assets/images/green_energy_grid_1791229322913.jpg",
    "imageCaption": "Solar array installation powering green hydrogen electrolyzer units.",
    "views": 76500,
    "commentsCount": 140,
    "tags": [
      "Green Hydrogen",
      "Solar Grid",
      "Clean Tech",
      "Energy Transition"
    ],
    "content": [
      "The 600km pipeline will transport zero-emission hydrogen to heavy industrial export hubs.",
      "Commercial operations are slated to begin by late 2028."
    ]
  },
  {
    "id": "opinion-7",
    "title": "Why the Continental Single Market Must Prioritize Youth Tech Entrepreneurs Over Monopolies",
    "kicker": "Opinion \u00b7 Continental Column",
    "deck": "Dr. Chimamanda Diallo argues that regulatory harmonisation must tear down non-tariff barriers for agile cross-border startups.",
    "category": "opinion",
    "categoryLabel": "Opinion",
    "author": {
      "name": "Dr. Chimamanda Diallo",
      "role": "Distinguished Economic Fellow",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      "verified": true
    },
    "publishedAt": "3h ago",
    "readTime": "6 min read",
    "imageUrl": "/src/assets/images/lead_story_finance_1791229298739.jpg",
    "imageCaption": "Young founders present at Pan-African technology summit in Kigali.",
    "views": 118000,
    "commentsCount": 380,
    "tags": [
      "Opinion",
      "Startups",
      "Youth",
      "Digital Economy"
    ],
    "content": [
      "Africa cannot afford to replicate 20th-century protectionist monopolies if it hopes to win in the AI era.",
      "Opening cross-border digital licenses is the single greatest economic stimulus available to our policymakers."
    ]
  },
  {
    id: "top-story-1",
    title: "Continental Free Trade Pact Expands to 54 Nations With Unified Mobile Currency Rails",
    kicker: "Top Stories \u00b7 Breaking",
    deck: "Historic summit in Addis Ababa eliminates cross-border tariffs and bypasses Western intermediary correspondent banks for seamless continental trade.",
    category: "top-stories",
    categoryLabel: "Top Stories",
    author: {
      name: "Kofi Mensah",
      role: "Senior Geopolitical Editor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Just now",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/african_politics_summit_1791231284594.jpg",
    imageCaption: "Heads of state celebrate ratification of cross-border payment pact.",
    views: 145000,
    commentsCount: 482,
    tags: ["AfCFTA", "African Trade", "Digital Currency", "Summit"],
    content: [
      "Leaders signed the treaty creating an integrated market of 1.4 billion people with a combined GDP exceeding $3.4 trillion.",
      "The implementation of the instant clearing system is expected to lower regional trade friction by more than 80%."
    ]
  },
  {
    id: "top-story-2",
    title: "Supreme Court Apex Bench Delivers Historic Ruling Restricting Emergency Executive Decrees",
    kicker: "Top Stories \u00b7 Judiciary",
    deck: "A full 7-judge constitutional bench reaffirms parliamentary supremacy and mandates rigorous public participation on major taxation laws.",
    category: "top-stories",
    categoryLabel: "Top Stories",
    author: {
      name: "Advocate Omondi Wandera",
      role: "Senior Legal Analyst",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "15m ago",
    readTime: "6 min read",
    imageUrl: "/src/assets/images/corridors_court_judge_1791231272938.jpg",
    imageCaption: "Chief Justice reads the unanimous apex ruling in packed courtroom.",
    views: 128400,
    commentsCount: 395,
    tags: ["Supreme Court", "Constitutional Law", "Judicial Review"],
    content: [
      "The landmark ruling emphasizes that constitutional checks and balances remain inviolable regardless of administrative exigencies.",
      "Civil society and legal scholars hailed the decision as a definitive victory for institutional rule of law."
    ]
  },
  {
    id: "top-story-3",
    title: "Pan-African Semiconductor Initiative Breaks Ground on Continent's First Advanced Silicon Foundry",
    kicker: "Top Stories \u00b7 Technology",
    deck: "Joint public-private syndicate invests $2.4 billion into domestic chip manufacturing to supply automotive and telecom hardware.",
    category: "top-stories",
    categoryLabel: "Top Stories",
    author: {
      name: "Dr. Amina Tour\u00e9",
      role: "Technology Correspondent",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "35m ago",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/tech_semiconductor_ai_1791229310782.jpg",
    imageCaption: "Engineers inside the high-purity cleanroom testing wafer lithography.",
    views: 96400,
    commentsCount: 241,
    tags: ["Semiconductors", "Silicon Savannah", "Industrialization"],
    content: [
      "The plant will manufacture specialized microcontrollers for regional automotive assembly and smart energy meters.",
      "Over 4,500 direct engineering and technician positions will be created during the initial commissioning phase."
    ]
  },
  {
    id: "top-story-4",
    title: "Afcon Championship: Host Nation Announces Record $1.2B Stadium & High-Speed Transit Overhaul",
    kicker: "Top Stories \u00b7 Sports",
    deck: "Three brand-new ultra-modern stadiums and electric commuter rail links unveiled ahead of next summer's continental football spectacle.",
    category: "top-stories",
    categoryLabel: "Top Stories",
    author: {
      name: "Farouk Al-Mansoor",
      role: "Sports Editor",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "50m ago",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_sports_football_1791231306049.jpg",
    imageCaption: "The newly commissioned 65,000-seat national stadium under sunset lights.",
    views: 88200,
    commentsCount: 312,
    tags: ["Afcon", "Football", "Infrastructure", "Stadiums"],
    content: [
      "CAF inspectors commended the world-class hybrid turf and solar-powered cooling facilities installed across all match venues.",
      "Ticketing records have already surpassed prior editions with fans booking trans-continental chartered flights."
    ]
  },
  {
    id: "top-story-5",
    title: "Rift Valley Geothermal Megaproject Surpasses 1,500MW Clean Baseload Power Milestone",
    kicker: "Top Stories \u00b7 Energy",
    deck: "Volcanic subterranean reservoirs now power over 70% of heavy manufacturing and green fertilizer plants across the region.",
    category: "top-stories",
    categoryLabel: "Top Stories",
    author: {
      name: "Julian Thorne",
      role: "Energy Infrastructure Editor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "1h ago",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/green_energy_grid_1791229322913.jpg",
    imageCaption: "High-pressure geothermal steam wells generating clean electricity.",
    views: 79500,
    commentsCount: 198,
    tags: ["Clean Energy", "Geothermal", "Rift Valley", "Sustainability"],
    content: [
      "The deep drilling project has achieved the lowest cost-per-kilowatt-hour anywhere on the continent.",
      "International development financiers highlighted the project as a premier template for zero-carbon industrialization."
    ]
  },
  {
    id: "top-story-6",
    title: "Special Investigative Audit Flags $42 Million Phantom Procurement in Port Modernization Program",
    kicker: "Top Stories \u00b7 Investigation",
    deck: "Parliamentary watchdog subpoenas port authority executives and banking consortium over undocumented logistics disbursements.",
    category: "top-stories",
    categoryLabel: "Top Stories",
    author: {
      name: "David Ochieng",
      role: "Chief Investigative Reporter",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "2h ago",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/african_politics_summit_1791231284594.jpg",
    imageCaption: "Parliamentary committee in session reviewing procurement audits.",
    views: 112000,
    commentsCount: 532,
    tags: ["Investigative", "Audit", "Port Authority", "Public Accounts"],
    content: [
      "Financial forensic teams uncovered a chain of shell accounts in offshore jurisdictions used to divert container handling funds.",
      "The Director of Public Prosecutions confirmed criminal charges will be filed against indicted directors within 48 hours."
    ]
  },
  {
    id: "politics-cabinet-reshuffle",
    title: "State House Shakeup: Executive Reorganizes Cabinet Ahead of Crucial General Elections",
    kicker: "Politics & State House",
    deck: "Treasury, Energy, and Interior dockets see new leadership as executive aims to accelerate development pledges and unify regional factions.",
    category: "politics",
    categoryLabel: "Politics & Governance",
    author: {
      name: "Kofi Mensah",
      role: "Senior Political Analyst",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 12:15 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_politics_summit_1791231284594.jpg",
    imageCaption: "State House spokesman briefs parliamentary press corps.",
    views: 79200,
    commentsCount: 284,
    tags: ["Cabinet Reshuffle", "State House", "Ministers", "Executive Orders"],
    content: [
      "In a widely anticipated announcement from State House, the Head of State reorganized the executive council.",
      "Technocrats were appointed to spearhead economic digitization and debt sustainability talks."
    ]
  },
  {
    id: "politics-parliament-debate",
    title: "Fiery Parliament Debate: Lawmakers Clash Over Supplementary Budget and County Cash Allocations",
    kicker: "Politics & Parliament",
    deck: "Heated exchanges trigger temporary suspension of parliamentary session as opposition questions revenue sharing formula.",
    category: "politics",
    categoryLabel: "Politics & Governance",
    author: {
      name: "Kofi Mensah",
      role: "Senior Political Analyst",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 10:20 AM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/african_politics_summit_1791231284594.jpg",
    imageCaption: "The National Assembly chamber during the divisive afternoon vote.",
    views: 46800,
    commentsCount: 162,
    tags: ["Parliament", "National Assembly", "Devolution", "Budget"],
    content: [
      "The Speaker intervened repeatedly to restore order as legislators from agrarian counties demanded equal disbursement guarantees.",
      "A compromise resolution was eventually referred to the joint mediation committee."
    ]
  },
  {
    id: "politics-coalition-accord",
    title: "Ruling Coalition Signs Power-Sharing Accord with Regional Governors Ahead of Referendum",
    kicker: "Politics & Coalitions",
    deck: "Five-point manifesto commits 45% of national revenue to devolved county governments to avert political deadlock.",
    category: "politics",
    categoryLabel: "Politics & Governance",
    author: {
      name: "Kofi Mensah",
      role: "Senior Political Analyst",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 08:45 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_politics_summit_1791231284594.jpg",
    imageCaption: "Party leaders sign the joint communique at diplomatic club.",
    views: 52400,
    commentsCount: 178,
    tags: ["Coalitions", "Devolution", "Elections", "Power Sharing"],
    content: [
      "The pact seals a critical legislative majority, allowing key bills on infrastructure and energy tariffs to proceed unimpeded.",
      "Opposition leaders termed the agreement a transactional stopgap that fails to address cost-of-living concerns."
    ]
  },
  {
    id: "politics-electoral-reforms",
    title: "Senate Approves Overhaul of Independent Electoral Commission With Strict Biometric Mandate",
    kicker: "Politics & Legislation",
    deck: "New electoral statute introduces real-time public transmission of scanned polling station result tallies to prevent tampering.",
    category: "politics",
    categoryLabel: "Politics & Governance",
    author: {
      name: "Brenda Nanjala",
      role: "Judicial & Political Bureau",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 07:30 AM",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/corridors_court_judge_1791231272938.jpg",
    imageCaption: "Senators voting electronically during the third reading of the Electoral Bill.",
    views: 61300,
    commentsCount: 204,
    tags: ["Senate", "Elections", "Biometrics", "Democracy"],
    content: [
      "The bipartisan consensus ends three months of protests and legal disputes surrounding commissioner appointments.",
      "Civic oversight groups applauded the inclusion of independent server audits accessible to all accredited parties."
    ]
  },
  {
    id: "politics-foreign-policy",
    title: "Pan-African Foreign Ministers Unveil United Stance on Global Sovereign Debt Restructuring",
    kicker: "Politics & Diplomacy",
    deck: "Ministers call for equitable international financial architecture and cessation of punitive credit rating downgrades.",
    category: "politics",
    categoryLabel: "Politics & Governance",
    author: {
      name: "Kofi Mensah",
      role: "Senior Political Analyst",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 06:15 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/world_diplomacy_summit_1791229858035.jpg",
    imageCaption: "Foreign ministers address the press corps following ministerial council meeting.",
    views: 48900,
    commentsCount: 139,
    tags: ["Foreign Policy", "Sovereign Debt", "IMF", "African Union"],
    content: [
      "The declaration demands that climate vulnerability and natural resource capital be factored into international lending ratings.",
      "A unified delegation will represent the continent at the forthcoming multilateral economic forum."
    ]
  },
  {
    id: "politics-youth-movement",
    title: "Grassroots Youth Movement Wins 14 Parliamentary By-Elections on Anti-Graft Platform",
    kicker: "Politics & Civic Action",
    deck: "Independent young candidates dislodge entrenched political dynasties across key metropolitan and coastal constituencies.",
    category: "politics",
    categoryLabel: "Politics & Governance",
    author: {
      name: "David Ochieng",
      role: "Chief Investigative Reporter",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 04:00 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_politics_summit_1791231284594.jpg",
    imageCaption: "Supporters rally outside municipal tallying hall following landslide victory.",
    views: 71500,
    commentsCount: 318,
    tags: ["Youth Movement", "Elections", "Grassroots", "Change"],
    content: [
      "Relying on mobile micro-donations and viral town halls, the candidates campaigned exclusively on transparent budgeting and job creation.",
      "Political analysts described the results as a tectonic shift in voter demographics."
    ]
  },
  {
    id: "scandal-tender-1",
    title: "The $42 Million Phantom Port Fuel Scheme: Leaked Audits Indict Customs Clearing Conglomerate",
    kicker: "Scandals & Whistleblowers",
    deck: "Internal manifestos reveal state oil marketer paid for 14 bulk shipments that never docked at any regional harbor.",
    category: "scandals",
    categoryLabel: "Scandals & Whistleblowers",
    author: {
      name: "David Ochieng",
      role: "Investigative Bureau Lead",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 11:30 AM",
    readTime: "6 min read",
    imageUrl: "/src/assets/images/african_politics_summit_1791231284594.jpg",
    imageCaption: "Port terminal storage containers subjected to forensic audit seals.",
    views: 94100,
    commentsCount: 421,
    tags: ["Port Scandal", "Fuel Tender", "Whistleblower", "Corruption"],
    content: [
      "Whistleblowers provided authenticated shipping clearance forms bearing duplicate inspection stamps for non-existent diesel tankers.",
      "The anti-graft agency has initiated asset freezing petitions covering multiple offshore accounts."
    ]
  },
  {
    id: "scandal-land-grab",
    title: "Diplomatic Enclave Scandal: Prime State Land Quietly Subdivided and Deeded to Tycoons",
    kicker: "Scandals & Land Frauds",
    deck: "Investigation reveals 40 hectares zoned for regional wildlife sanctuary and university research center transferred to private developers.",
    category: "scandals",
    categoryLabel: "Scandals & Whistleblowers",
    author: {
      name: "David Ochieng",
      role: "Investigative Bureau Lead",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 09:15 AM",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/corridors_court_judge_1791231272938.jpg",
    imageCaption: "Surveyors and court bailiffs inspecting the contested parcels under police escort.",
    views: 68400,
    commentsCount: 275,
    tags: ["Land Grab", "Ministry of Lands", "Whistleblower", "Real Estate"],
    content: [
      "Forged gazette notices dating back to 2021 were used to circumvent parliamentary moratoriums on public land disposal.",
      "The Land and Environment Court has issued an immediate injunction stopping all construction activities."
    ]
  },
  {
    id: "scandal-medical-supplies",
    title: "Counterfeit Malaria & Antibiotic Batches Intercepted at Regional Border Customs Post",
    kicker: "Scandals & Health Safety",
    deck: "Undercover operation uncovers syndicate importing chalk-filled capsules disguised as certified pediatric antibiotics.",
    category: "scandals",
    categoryLabel: "Scandals & Whistleblowers",
    author: {
      name: "Dr. Amina Tour\u00e9",
      role: "Health & Science Editor",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 08:00 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/medical_science_lab_1791229889394.jpg",
    imageCaption: "Toxicology analysts testing seized medicine vials in state laboratory.",
    views: 81200,
    commentsCount: 364,
    tags: ["Counterfeit Drugs", "Health Scandal", "Customs", "Pharmacy Board"],
    content: [
      "The fake consignments originated from an unlicensed warehouse in a neighboring transit corridor before being intercepted by specialized border agents.",
      "Six senior clearing agents and a former health ministry procurement officer have been remanded in custody."
    ]
  },
  {
    id: "scandal-ghost-workers",
    title: "County Audit Unearths 1,400 Ghost Workers Drawing $9.8M Annual Salaries for a Decade",
    kicker: "Scandals & Public Funds",
    deck: "Deceased individuals and fictitious names discovered on municipal payroll while genuine hospital nurses faced salary delays.",
    category: "scandals",
    categoryLabel: "Scandals & Whistleblowers",
    author: {
      name: "David Ochieng",
      role: "Investigative Bureau Lead",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 03:30 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_politics_summit_1791231284594.jpg",
    imageCaption: "Audit documents presented before the County Assembly Public Accounts Committee.",
    views: 62900,
    commentsCount: 241,
    tags: ["Ghost Workers", "County Payroll", "Public Funds", "Audit"],
    content: [
      "Biometric physical headcount revealed that dozens of payroll entries belonged to retirees who passed away years ago.",
      "The Governor ordered the immediate termination of the HR directors involved and the retrieval of disbursed pension payouts."
    ]
  },
  {
    id: "scandal-university-degrees",
    title: "Fake Degree Mill Syndicate Raided: Senior Officials Bought Doctoral Certifications for $5,000",
    kicker: "Scandals & Education",
    deck: "Police swoop down on clandestine printing house producing forged diplomas bearing seals of prestigious UK and US universities.",
    category: "scandals",
    categoryLabel: "Scandals & Whistleblowers",
    author: {
      name: "Zainab Balogun",
      role: "Culture & Society Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 01:20 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Forged academic certificates and embossing presses displayed during police press briefing.",
    views: 74300,
    commentsCount: 318,
    tags: ["Fake Degrees", "Education Scandal", "University", "Fraud"],
    content: [
      "Among the clients implicated in the client ledger are prospective candidates for parliamentary elections and parastatal directors.",
      "The Commission for University Education announced an expedited verification drive covering all public service holders."
    ]
  },
  {
    id: "scandal-crypto-pyramid",
    title: "Fintech Fraud: Ponzi Scheme Disguised as 'AI Crypto Yield Fund' Vanishes with $65M in Savings",
    kicker: "Scandals & Financial Crimes",
    deck: "Promoters promised 30% monthly automated returns before locking customer withdrawals and fleeing the country.",
    category: "scandals",
    categoryLabel: "Scandals & Whistleblowers",
    author: {
      name: "Julian Thorne",
      role: "Financial Crimes Correspondent",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 11:00 AM",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/african_fintech_hub_1791232334696.jpg",
    imageCaption: "Distressed depositors gather outside fintech corporate headquarters.",
    views: 99800,
    commentsCount: 485,
    tags: ["Crypto Scam", "Ponzi", "Financial Crimes", "Fintech Fraud"],
    content: [
      "Interpol red notices have been issued for the three founding directors who transferred digital assets to anonymized mixer wallets.",
      "The Central Bank reiterated warnings regarding unregistered algorithmic investment schemes."
    ]
  },
  {
    id: "gossip-celebrity-1",
    title: "Grammy Winner & Star Diva Spotted Together at Private Safari Lodge Amid Secret Romance Whispers",
    kicker: "Gossip & Whispers",
    deck: "Paparazzi capture exclusive images of the continent's biggest pop duo enjoying candlelit bush dinners under the African stars.",
    category: "gossip",
    categoryLabel: "Gossip & Whispers",
    author: {
      name: "Zainab Balogun",
      role: "Celebrity & Society Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 01:05 PM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/celebrity_vip_whisper_1791232322737.jpg",
    imageCaption: "The pair seen walking hand-in-hand along the private lodge infinity pool.",
    views: 84200,
    commentsCount: 412,
    tags: ["Celebrity Romance", "Music Stars", "Safari Lodge", "Paparazzi"],
    content: [
      "Insiders claim the chart-topping pair have been secretly collaborating on a joint acoustic album while staying at the $3,500-a-night sanctuary.",
      "Neither artist's management has confirmed the relationship, though cryptic social media posts have sent fans into a frenzy."
    ]
  },
  {
    id: "gossip-celebrity-2",
    title: "VIP Dressing Room Drama: Mega Diva Refuses to Perform After Rival Given Center Stage Banner",
    kicker: "Gossip & Backstage Drama",
    deck: "Organizers scramble backstage at sold-out 40,000 capacity music festival as headline acts trade pointed barbs over rider demands.",
    category: "gossip",
    categoryLabel: "Gossip & Whispers",
    author: {
      name: "Zainab Balogun",
      role: "Celebrity & Society Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 10:45 AM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Backstage security team intervening during heated standoff between artist entourages.",
    views: 62400,
    commentsCount: 289,
    tags: ["Diva Drama", "Backstage", "Music Festival", "Celebrity Feud"],
    content: [
      "Eyewitnesses reported champagne flutes being hurled before festival security intervened to separate the two high-profile entourages.",
      "The show eventually started 90 minutes late with revised lighting schedules."
    ]
  },
  {
    id: "gossip-billionaire-wedding",
    title: "The $10M Cape Town Nuptials: Private Jets Fill Airport as Tycoon's Heir Weds Supermodel",
    kicker: "Gossip & High Society",
    deck: "Four-day lavish celebration features custom French couture gowns, Michelin-star banquets, and 30-minute private fireworks spectacle.",
    category: "gossip",
    categoryLabel: "Gossip & Whispers",
    author: {
      name: "Zainab Balogun",
      role: "Celebrity & Society Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 08:30 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/celebrity_vip_whisper_1791232322737.jpg",
    imageCaption: "Guests arrive in black-tie attire at historic Constantia wine estate.",
    views: 71900,
    commentsCount: 305,
    tags: ["High Society", "Luxury Wedding", "Billionaires", "Cape Town"],
    content: [
      "Over 45 chartered business jets touched down from London, Lagos, and Geneva carrying international dignitaries and celebrities.",
      "Guests were asked to sign strict non-disclosure agreements and leave smartphones at the gate."
    ]
  },
  {
    id: "gossip-influencer-fallout",
    title: "Top Beauty Influencer Drops Ex-Fianc\u00e9 After Secret DM Leaks Reveal Double Life in Dubai",
    kicker: "Gossip & Influencer Scene",
    deck: "Viral TikTok expos\u00e9 gathers 8 million views in 24 hours as receipts and voice notes reveal lavish deceptive lifestyle.",
    category: "gossip",
    categoryLabel: "Gossip & Whispers",
    author: {
      name: "Zainab Balogun",
      role: "Celebrity & Society Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 06:00 PM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/celebrity_vip_whisper_1791232322737.jpg",
    imageCaption: "Influencer addresses her 4 million followers in emotional live video stream.",
    views: 93100,
    commentsCount: 542,
    tags: ["Influencers", "Viral Expos\u00e9", "TikTok Drama", "Scandal"],
    content: [
      "The beauty mogul deleted all photos with her luxury car dealer partner after multiple women shared corroborating hotel invoices.",
      "Endorsement brands have paused campaigns with the ex-partner amid the viral fallout."
    ]
  },
  {
    id: "gossip-soccer-star-nightclub",
    title: "National Team Captain Caught on Video at 3:00 AM Nightclub Bash Hours Before Derby",
    kicker: "Gossip & Sports Whispers",
    deck: "Club manager threatens heavy disciplinary fine as footage emerges of star striker enjoying VIP bottle service before crucial match.",
    category: "gossip",
    categoryLabel: "Gossip & Whispers",
    author: {
      name: "Farouk Al-Mansoor",
      role: "Sports & Culture Correspondent",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 02:40 PM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/african_sports_football_1791231306049.jpg",
    imageCaption: "Fans react angrily on sports radio shows following leaked nightclub video clips.",
    views: 68700,
    commentsCount: 311,
    tags: ["Soccer Star", "Nightclub", "Discipline", "Derby Match"],
    content: [
      "The video showed the forward dancing alongside nightlife socialites while holding a bottle of vintage champagne on the eve of the city derby.",
      "Club ultras have gathered outside the training ground demanding the striker be benched."
    ]
  },
  {
    id: "gossip-movie-star-reunion",
    title: "Iconic On-Screen Lovers Spotted at Secret Script Reading for Sequel 15 Years Later",
    kicker: "Gossip & Cinema Rumors",
    deck: "Beloved romantic drama stars break the internet as paparazzi snap them in candid rooftop coffee meeting in Nairobi.",
    category: "gossip",
    categoryLabel: "Gossip & Whispers",
    author: {
      name: "Zainab Balogun",
      role: "Celebrity & Society Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 10:15 AM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/celebrity_vip_whisper_1791232322737.jpg",
    imageCaption: "The veteran actors sharing a laugh while reviewing bound film scripts.",
    views: 54800,
    commentsCount: 192,
    tags: ["Movie Stars", "Cinema Sequel", "Nollywood", "Reunion"],
    content: [
      "Sources close to the studio confirm a major streaming platform has greenlit a $5M sequel to the 2011 blockbuster.",
      "Fans flooded social media expressing nostalgia for the classic romantic pairing."
    ]
  },
  {
    id: "ent-fashion-week",
    title: "Dakar & Lagos Fashion Weeks Merge into Historic Pan-African Haute Couture Collective",
    kicker: "Entertainment & Style",
    deck: "Designers from 18 nations showcase indigenous hand-loomed textiles on international runways, setting new benchmarks for ethical luxury.",
    category: "entertainment",
    categoryLabel: "Entertainment & Celebrity",
    author: {
      name: "Zainab Balogun",
      role: "Culture & Celebrity Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 11:00 AM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Models display avant-garde silk and indigo collections.",
    views: 41200,
    commentsCount: 78,
    tags: ["Fashion Week", "Designers", "African Style", "Haute Couture"],
    content: [
      "Runway showcases blending traditional tie-dye cottons with architectural metallic tailoring drew rapturous applause from international buyers.",
      "Major luxury houses announced talent exchange residencies in Dakar."
    ]
  },
  {
    id: "ent-streaming-record",
    title: "African Cinema Box Office Soars 64% as Continental Streaming Services Surge Ahead of Global Rivals",
    kicker: "Entertainment & Cinema",
    deck: "Locally produced dramas, comedies, and psychological thrillers command majority view-time across mobile subscriber networks.",
    category: "entertainment",
    categoryLabel: "Entertainment & Celebrity",
    author: {
      name: "Zainab Balogun",
      role: "Culture & Celebrity Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 09:30 AM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Film production crew setting up lighting on soundstage.",
    views: 38400,
    commentsCount: 65,
    tags: ["Cinema", "Streaming", "Box Office", "African Movies"],
    content: [
      "Audience appetite for authentic vernacular storytelling has driven unprecedented subscription growth across mobile telecom bundles.",
      "Producers are enjoying higher royalty dividends as local streaming platforms compete for exclusive rights."
    ]
  },
  {
    id: "ent-grammy-nominations",
    title: "Seven African Artists Secure Record 14 Global Music Award Nominations Across Pop and World Genres",
    kicker: "Entertainment & Music",
    deck: "From Johannesburg Amapiano pioneers to Nigerian Afro-fusion innovators, African sounds dominate international awards ballot.",
    category: "entertainment",
    categoryLabel: "Entertainment & Celebrity",
    author: {
      name: "Zainab Balogun",
      role: "Culture & Celebrity Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 07:15 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Nominated artists celebrate with producer teams in recording studio.",
    views: 59200,
    commentsCount: 184,
    tags: ["Grammys", "Music Awards", "Amapiano", "Afrobeats"],
    content: [
      "Music critics hailed the breadth of musical styles represented, ranging from traditional highlife to futuristic electro-Afro beats.",
      "Streaming platforms reported an immediate 400% surge in catalog listens following the announcement."
    ]
  },
  {
    id: "ent-literary-prize",
    title: "Debut Pan-African Sci-Fi Novel Wins Prestigious International Man Booker Crown",
    kicker: "Entertainment & Books",
    deck: "24-year-old author from Kampala crafts speculative climate-fiction epic set in 2150 Great Lakes metropolis.",
    category: "entertainment",
    categoryLabel: "Entertainment & Celebrity",
    author: {
      name: "Prof. Kwesi Appiah",
      role: "Literary Critic & Columnist",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 05:00 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "The novelist holding the golden award statuette at London banquet.",
    views: 45100,
    commentsCount: 112,
    tags: ["Literature", "Sci-Fi", "Booker Prize", "African Authors"],
    content: [
      "The judges praised the book's breathtaking world-building and its poetic integration of ancestral oral mythology with advanced quantum computing.",
      "Film adaptation rights have already ignited a multimillion-dollar bidding war between major studios."
    ]
  },
  {
    id: "ent-animation-festival",
    title: "Continent's First Dedicated Anime & Animation Festival Draws 35,000 Creators and Fans",
    kicker: "Entertainment & Gaming",
    deck: "Indigenous comic books, video games, and animated episodic series take center stage in colorful convention center expo.",
    category: "entertainment",
    categoryLabel: "Entertainment & Celebrity",
    author: {
      name: "Zainab Balogun",
      role: "Culture & Celebrity Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 02:15 PM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Cosplayers showcase warrior costumes inspired by African historical epics.",
    views: 52900,
    commentsCount: 143,
    tags: ["Animation", "Anime", "Gaming", "Comics"],
    content: [
      "Young animators unveiled playable demos of mythological action-adventures based on the Oyo and Zulu empires.",
      "International streaming giants signed distribution deals for three animated series produced entirely in Nairobi and Lagos."
    ]
  },
  {
    id: "ent-theatre-broadway",
    title: "Acclaimed West African Musical Opens on Broadway to Standing Ovations and Sold-Out Season",
    kicker: "Entertainment & Theatre",
    deck: "Vibrant percussion, choral harmonies, and dynamic storytelling earn glowing reviews from notoriously tough New York critics.",
    category: "entertainment",
    categoryLabel: "Entertainment & Celebrity",
    author: {
      name: "Zainab Balogun",
      role: "Culture & Celebrity Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 09:30 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Cast members take their final curtain call to thunderous applause.",
    views: 48300,
    commentsCount: 96,
    tags: ["Broadway", "Theatre", "Musical", "African Art"],
    content: [
      "The production, which originated in an intimate Lagos amphitheatre, features a 30-piece orchestra playing traditional kora, talking drums, and balafons.",
      "Ticket demand has already prompted a 16-week extension into the winter holiday season."
    ]
  },
  {
    id: "tech-fintech-1",
    title: "The Mobile Money Frontier: How Pan-African Instant Payment Switches Bypass Western SWIFT Networks",
    kicker: "Technology & Fintech",
    deck: "Cross-border commerce across 22 African economies surmounts currency exchange hurdles with instantaneous peer-to-peer settlement.",
    category: "technology",
    categoryLabel: "Technology & Innovation",
    author: {
      name: "Dr. Amina Tour\u00e9",
      role: "Technology Correspondent",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 12:45 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_fintech_hub_1791232334696.jpg",
    imageCaption: "Mobile engineers at Nairobi fintech innovation hub monitor live payment throughput.",
    views: 68400,
    commentsCount: 192,
    tags: ["Fintech", "Mobile Money", "Banking", "Silicon Savannah"],
    content: [
      "By eliminating intermediary correspondent fees, informal traders now conduct cross-border transactions at a fraction of a cent per transfer.",
      "Central bank governors praised the platform for expanding digital financial inclusion to over 120 million unbanked citizens."
    ]
  },
  {
    id: "tech-ai-agritech",
    title: "AI Satellite Crop Diagnostics: How Smartphone Algorithms Predict Pest Swarms and Triple Crop Yields",
    kicker: "Technology & Agritech",
    deck: "Over 800,000 smallholder farmers utilize vernacular voice chatbots and infrared drone imagery to protect food security.",
    category: "technology",
    categoryLabel: "Technology & Innovation",
    author: {
      name: "Dr. Amina Tour\u00e9",
      role: "Technology Correspondent",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 10:15 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/tech_semiconductor_ai_1791229310782.jpg",
    imageCaption: "Agronomist testing handheld soil sensor connected to AI cloud system.",
    views: 51200,
    commentsCount: 145,
    tags: ["Agritech", "Artificial Intelligence", "Food Security", "Drones"],
    content: [
      "The computer vision algorithm accurately diagnoses crop blight from simple smartphone camera snapshots with 98% laboratory accuracy.",
      "Micro-insurance payouts are automatically disbursed via mobile wallets whenever satellite drought indices trigger."
    ]
  },
  {
    id: "tech-satellite-launch",
    title: "Third Earth Observation Micro-Satellite Successfully Placed in Orbit from Coastal Spaceport",
    kicker: "Technology & Space Science",
    deck: "Locally designed satellite constellation delivers daily high-resolution weather, mineral exploration, and urban planning data.",
    category: "technology",
    categoryLabel: "Technology & Innovation",
    author: {
      name: "Julian Thorne",
      role: "Space & Tech Editor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 08:30 AM",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/space_exploration_launch_1791229868403.jpg",
    imageCaption: "Night launch of heavy launch vehicle carrying communications payload.",
    views: 76900,
    commentsCount: 264,
    tags: ["Space Science", "Satellite", "Space Agency", "Technology"],
    content: [
      "Telemetry confirmed normal solar panel deployment and orbital insertion 18 minutes after liftoff.",
      "The data stream eliminates the need for expensive commercial satellite subscriptions from foreign providers."
    ]
  },
  {
    id: "tech-ev-buses",
    title: "Public Transit Goes Electric: Nairobi & Kigali Commission 500 Fast-Charging Electric Commuter Buses",
    kicker: "Technology & Mobility",
    deck: "Zero-emission fleet cuts urban operating fuel costs by 60% while reducing hazardous metropolitan air pollution.",
    category: "technology",
    categoryLabel: "Technology & Innovation",
    author: {
      name: "Dr. Amina Tour\u00e9",
      role: "Technology Correspondent",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 04:30 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/tech_semiconductor_ai_1791229310782.jpg",
    imageCaption: "Electric buses lined up at dedicated solar charging terminal.",
    views: 58100,
    commentsCount: 167,
    tags: ["Electric Vehicles", "Clean Transit", "Urban Mobility", "Green Tech"],
    content: [
      "Equipped with locally assembled lithium iron phosphate batteries, the buses run 250 kilometers on a single 30-minute rapid charge.",
      "Commuters pay fares seamlessly via contactless smartcards integrated with mobile money."
    ]
  },
  {
    id: "tech-data-centers",
    title: "Global Cloud Hyperscalers Invest $1.8B in Geothermal-Powered Subsea Data Center Clusters",
    kicker: "Technology & Cloud Infra",
    deck: "Low latency and 100% renewable baseload energy attract premier AI training clusters to the Great Rift Valley.",
    category: "technology",
    categoryLabel: "Technology & Innovation",
    author: {
      name: "Dr. Amina Tour\u00e9",
      role: "Technology Correspondent",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 01:15 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/green_energy_grid_1791229322913.jpg",
    imageCaption: "Interior server racks inside geothermal-cooled data center complex.",
    views: 64700,
    commentsCount: 203,
    tags: ["Data Centers", "Cloud", "Hyperscale", "Renewable Power"],
    content: [
      "Natural ambient geothermal cooling reduces facility power usage effectiveness (PUE) to world-leading efficiency ratings.",
      "Local tech startups now benefit from sub-10 millisecond access to advanced neural network infrastructure."
    ]
  },
  {
    id: "tech-cybersecurity",
    title: "Regional Cyber Defense Shield Neutralizes 40 Million Malicious Banking Attacks in Q3",
    kicker: "Technology & Cybersecurity",
    deck: "Centralized threat intelligence coalition protects critical national banking switches and power grid SCADA networks.",
    category: "technology",
    categoryLabel: "Technology & Innovation",
    author: {
      name: "Julian Thorne",
      role: "Cybersecurity Analyst",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 09:00 AM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/tech_semiconductor_ai_1791229310782.jpg",
    imageCaption: "Security operations center analysts monitoring live attack mitigation telemetry.",
    views: 49500,
    commentsCount: 118,
    tags: ["Cybersecurity", "Fintech", "Threat Defense", "Banking"],
    content: [
      "Automated AI firewalls intercepted synchronized DDoS attacks originating from international botnets targeting treasury accounts.",
      "The collaborative protocol was recognized by the International Telecommunication Union as a regional benchmark."
    ]
  },
  {
    id: "world-summit-climate",
    title: "Geneva Climate Accord: 142 Nations Back Binding Safeguards with $100B Annual Loss-and-Damage Fund",
    kicker: "World News & Diplomacy",
    deck: "Global pact establishes sovereign financial mechanisms to directly compensate developing economies facing extreme climate degradation.",
    category: "world",
    categoryLabel: "World News & Continental Diplomacy",
    author: {
      name: "David Ochieng",
      role: "Foreign Affairs Editor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 01:15 PM",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/world_diplomacy_summit_1791229858035.jpg",
    imageCaption: "Diplomats applaud as treaty gavel drops at Palais des Nations.",
    views: 72100,
    commentsCount: 215,
    tags: ["Geneva", "Climate Accord", "Loss and Damage", "Diplomacy"],
    content: [
      "The agreement legally binds industrialized carbon emitters to replenish the emergency restoration fund starting in January.",
      "African delegates held firm throughout all-night negotiations to ensure direct grant financing rather than debt-creating loans."
    ]
  },
  {
    id: "world-un-security-council",
    title: "Historic UN Security Council Reform Push Secures Two Permanent Veto-Wielding Seats for Africa",
    kicker: "World News & Global Governance",
    deck: "Broad multilateral coalition votes overwhelmingly to correct historic underrepresentation in the highest global security body.",
    category: "world",
    categoryLabel: "World News & Continental Diplomacy",
    author: {
      name: "Kofi Mensah",
      role: "Senior Diplomatic Correspondent",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 10:30 AM",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/world_diplomacy_summit_1791229858035.jpg",
    imageCaption: "The UN General Assembly hall during the landmark procedural vote.",
    views: 89300,
    commentsCount: 394,
    tags: ["United Nations", "Security Council", "Geopolitics", "Africa"],
    content: [
      "The landmark resolution ends three decades of diplomatic lobbying, marking the most substantial structural reform of the UN charter since 1945.",
      "Member states will convene in Addis Ababa to elect the rotating representative nations."
    ]
  },
  {
    id: "world-trade-corridor",
    title: "New Atlantic-Indian Ocean Railway Corridor Signed by Quad-Nation Presidential Consortium",
    kicker: "World News & Infrastructure",
    deck: "3,200km trans-continental railway to link mineral-rich interior basins directly with deep-water Atlantic container ports.",
    category: "world",
    categoryLabel: "World News & Continental Diplomacy",
    author: {
      name: "David Ochieng",
      role: "Foreign Affairs Editor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 08:15 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/world_diplomacy_summit_1791229858035.jpg",
    imageCaption: "Presidents examine detailed topographical railway alignment maps.",
    views: 58200,
    commentsCount: 167,
    tags: ["Railways", "Trade Corridor", "Infrastructure", "Ports"],
    content: [
      "Standard gauge tracks and electric locomotive fleets will reduce transit times for agricultural and mineral exports from 21 days down to 48 hours.",
      "Financed via a syndicated green infrastructure bond, construction will commence across four frontiers simultaneously."
    ]
  },
  {
    id: "world-global-inflation",
    title: "Central Banks Coordinate Interest Rate Cuts as Global Inflation Cools to 3-Year Lows",
    kicker: "World News & Global Markets",
    deck: "Coordinated policy shifts bring relief to emerging market sovereign bonds and stabilize foreign currency reserve buffers.",
    category: "world",
    categoryLabel: "World News & Continental Diplomacy",
    author: {
      name: "Julian Thorne",
      role: "Global Economics Editor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 05:45 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/lead_story_finance_1791229298739.jpg",
    imageCaption: "Trading terminals at international financial exchange showing positive bond yield rally.",
    views: 53800,
    commentsCount: 142,
    tags: ["Inflation", "Central Banks", "Global Economy", "Markets"],
    content: [
      "Lower sovereign debt servicing costs will enable national treasuries to redirect capital towards health and vocational education programs.",
      "Commodity futures for copper, lithium, and agricultural cash crops posted modest gains."
    ]
  },
  {
    id: "world-antarctic-treaty",
    title: "Pan-African Polar Research Expedition Plants Continental Flag at South Pole Station",
    kicker: "World News & Science Diplomacy",
    deck: "Eight-nation scientific delegation completes 60-day deep ice core drilling mission studying historic global paleoclimate cycles.",
    category: "world",
    categoryLabel: "World News & Continental Diplomacy",
    author: {
      name: "Dr. Amina Tour\u00e9",
      role: "Science & Polar Correspondent",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 02:00 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/world_diplomacy_summit_1791229858035.jpg",
    imageCaption: "Scientists gathered around thermal ice drill rig at polar research station.",
    views: 47600,
    commentsCount: 119,
    tags: ["Antarctica", "Polar Research", "Climate Science", "Expedition"],
    content: [
      "The mission gathered 800-meter ice cores providing unmatched data on carbon dioxide concentrations spanning 250,000 years.",
      "The African Union formally ratified consultative party status under the Antarctic Treaty System."
    ]
  },
  {
    id: "world-maritime-security",
    title: "Joint Naval Taskforce Eliminates Piracy Incidents in Gulf of Guinea for Third Consecutive Quarter",
    kicker: "World News & Maritime Security",
    deck: "Integrated radar surveillance, drone patrols, and rapid response gunboats secure vital continental shipping sea lanes.",
    category: "world",
    categoryLabel: "World News & Continental Diplomacy",
    author: {
      name: "David Ochieng",
      role: "Foreign Affairs Editor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 10:30 AM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/world_diplomacy_summit_1791229858035.jpg",
    imageCaption: "Naval patrol vessel executing joint tactical maneuver at sea.",
    views: 44900,
    commentsCount: 98,
    tags: ["Maritime Security", "Gulf of Guinea", "Navy", "Shipping"],
    content: [
      "Commercial cargo war-risk insurance premiums have plummeted by 75%, significantly lowering the landed cost of consumer goods.",
      "The coordinated maritime architecture has become a case study for international coastal law enforcement."
    ]
  },
  {
    id: "sports-afcon-1",
    title: "Afcon Qualifiers: National Team Powers to 3-0 Victory with Stunning Second-Half Masterclass",
    kicker: "Sports Arena \u00b7 Qualifiers",
    deck: "Hat-trick hero silences 60,000 away fans as clinical counter-attacking football secures top seed in continental finals.",
    category: "sports",
    categoryLabel: "Sports Arena",
    author: {
      name: "Farouk Al-Mansoor",
      role: "Senior Football Analyst",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 01:45 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_sports_football_1791231306049.jpg",
    imageCaption: "Striker celebrates third goal sliding towards the corner flag.",
    views: 124000,
    commentsCount: 482,
    tags: ["Afcon", "Football", "Qualifiers", "Hat-Trick"],
    content: [
      "Controlling midfield possession with crisp one-touch passing, the national team broke down a rigid five-man defensive block.",
      "The manager praised the squad's tactical discipline and physical conditioning in challenging high-altitude conditions."
    ]
  },
  {
    id: "sports-athletics-marathon",
    title: "World Athletics Diamond League: 22-Year-Old Phenomenon Smashes 5,000m World Record",
    kicker: "Sports Arena \u00b7 Athletics",
    deck: "Sensational sub-12:35 finish under stadium floodlights brings capacity crowd of 50,000 to a roaring standing ovation.",
    category: "sports",
    categoryLabel: "Sports Arena",
    author: {
      name: "Farouk Al-Mansoor",
      role: "Senior Sports Analyst",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 11:15 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/sports_stadium_championship_1791229879952.jpg",
    imageCaption: "The runner crossing the finish line with arms raised against the digital clock.",
    views: 98500,
    commentsCount: 374,
    tags: ["Athletics", "Diamond League", "World Record", "Running"],
    content: [
      "Running with metronomic 59-second lap splits, the young athlete pulled clear of the pacemaker pack with three laps remaining.",
      "Coaches noted that high-altitude training in the Great Rift Valley provided unmatched aerobic reserves."
    ]
  },
  {
    id: "sports-basketball-bal",
    title: "Basketball Africa League (BAL): Kigali Titans Crowned Continental Champions in Overtime Thriller",
    kicker: "Sports Arena \u00b7 Basketball",
    deck: "Clutch three-pointer at the buzzer seals dramatic 88-86 triumph before roaring home crowd in modern indoor arena.",
    category: "sports",
    categoryLabel: "Sports Arena",
    author: {
      name: "Farouk Al-Mansoor",
      role: "Senior Sports Analyst",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 09:00 AM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/sports_stadium_championship_1791229879952.jpg",
    imageCaption: "Team captain hoists the championship trophy amidst gold confetti showers.",
    views: 65200,
    commentsCount: 218,
    tags: ["Basketball", "BAL", "Kigali Arena", "Champions"],
    content: [
      "The fourth season of the Basketball Africa League set television records across 140 countries worldwide.",
      "NBA scouts in attendance identified five players who received invitations to summer league developmental camps."
    ]
  },
  {
    id: "sports-rugby-sevens",
    title: "Sevens World Series: Continental Blitzboks Stun World Champions to Lift Dubai Sevens Trophy",
    kicker: "Sports Arena \u00b7 Rugby Sevens",
    deck: "Blistering pace and suffocating defensive turnovers power 26-12 victory in breathless final showdown.",
    category: "sports",
    categoryLabel: "Sports Arena",
    author: {
      name: "Farouk Al-Mansoor",
      role: "Senior Sports Analyst",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 06:30 PM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/african_sports_football_1791231306049.jpg",
    imageCaption: "Wing scores diving try in the corner under heavy tackle pressure.",
    views: 51900,
    commentsCount: 163,
    tags: ["Rugby", "Sevens", "Blitzboks", "Dubai Sevens"],
    content: [
      "Speedster wing notched four tries during the knockout stages, confirming his status as the premier finisher on the global circuit.",
      "The victory vaults the squad to the summit of the Olympic qualification rankings."
    ]
  },
  {
    id: "sports-boxing-title",
    title: "Heavyweight World Championship: Undefeated African Champion Retains Belts via 8th-Round KO",
    kicker: "Sports Arena \u00b7 Boxing",
    deck: "Devastating right hook finishes grueling championship bout before 35,000 cheering fans in open-air stadium.",
    category: "sports",
    categoryLabel: "Sports Arena",
    author: {
      name: "Farouk Al-Mansoor",
      role: "Senior Sports Analyst",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 03:00 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/sports_stadium_championship_1791229879952.jpg",
    imageCaption: "Referee waves off the bout as the champion raises both gloved fists in victory.",
    views: 84200,
    commentsCount: 391,
    tags: ["Boxing", "Heavyweight", "World Champion", "Knockout"],
    content: [
      "Weathering an early storm in the third round, the champion systematically broke down his opponent with punishing body punches.",
      "Promoters announced negotiations have commenced for an undisputed four-belt unification fight in Las Vegas."
    ]
  },
  {
    id: "sports-motorsport-safari",
    title: "World Rally Championship: Brutal Safari Mud and Volcanic Dust Crown Historic Home Winner",
    kicker: "Sports Arena \u00b7 Motorsport",
    deck: "Local rally prodigy conquers 360 kilometers of unforgiving gravel tracks to claim first home triumph in 24 years.",
    category: "sports",
    categoryLabel: "Sports Arena",
    author: {
      name: "Farouk Al-Mansoor",
      role: "Senior Sports Analyst",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 11:30 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_sports_football_1791231306049.jpg",
    imageCaption: "Rally car kicking up massive plumes of red volcanic fesh-fesh dust.",
    views: 71400,
    commentsCount: 245,
    tags: ["WRC", "Safari Rally", "Motorsport", "Rallying"],
    content: [
      "Torrential rain on Saturday transformed the scenic stages into treacherous mud baths that caught out experienced European factory drivers.",
      "Over 200,000 spectators lined the spectator viewing points across the Great Rift Valley."
    ]
  },
  {
    id: "science-malaria-vaccine",
    title: "Next-Gen Quadrivalent Malaria Vaccine Achieves 86% Long-Term Efficacy in Phase III Trials",
    kicker: "Science & Health",
    deck: "Clinical trials across four regional medical institutes demonstrate unprecedented immune protection among 15,000 infants.",
    category: "science-health",
    categoryLabel: "Science & Health",
    author: {
      name: "Dr. Amina Tour\u00e9",
      role: "Health & Science Editor",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 12:00 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/medical_science_lab_1791229889394.jpg",
    imageCaption: "Laboratory scientists examining high-resolution monoclonal antibody sequencing data.",
    views: 67200,
    commentsCount: 204,
    tags: ["Malaria Vaccine", "Immunology", "Public Health", "Clinical Trials"],
    content: [
      "The quadrivalent formulation induces robust, durable antibody responses targeting both pre-erythrocytic and blood-stage parasites.",
      "Local manufacturing hubs have been licensed to produce 100 million doses annually at subsidized rates."
    ]
  },
  {
    id: "science-ancient-hominin",
    title: "Paleoanthropology Discovery: 3.8-Million-Year-Old Hominin Skull Unveiled in Afar Basin",
    kicker: "Science & Archaeology",
    deck: "Fossilized cranium with intact dentition bridges critical gap in human ancestral evolutionary timeline.",
    category: "science-health",
    categoryLabel: "Science & Health",
    author: {
      name: "Prof. Kwesi Appiah",
      role: "Evolutionary Anthropologist",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 09:45 AM",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/medical_science_lab_1791229889394.jpg",
    imageCaption: "Archaeologists carefully excavating fossilized sedimentary layers using fine brushes.",
    views: 48900,
    commentsCount: 137,
    tags: ["Paleoanthropology", "Afar Basin", "Fossils", "Evolution"],
    content: [
      "High-resolution micro-CT scans revealed internal cranial nerve pathways that shed light on the emergence of early tool-use and bipedal locomotion.",
      "The specimen will be permanently curated in the National Paleontological Museum."
    ]
  },
  {
    id: "science-sickle-cell",
    title: "CRISPR Gene Editing Therapy for Sickle Cell Disease Successfully Administered to First Patients",
    kicker: "Science & Biotechnology",
    deck: "Breakthrough single-dose cell therapy restores healthy fetal hemoglobin production, freeing patients from debilitating pain crises.",
    category: "science-health",
    categoryLabel: "Science & Health",
    author: {
      name: "Dr. Amina Tour\u00e9",
      role: "Health & Science Editor",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 07:45 AM",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/medical_science_lab_1791229889394.jpg",
    imageCaption: "Biochemists in cleanroom isolating stem cells for viral vector reinfusion.",
    views: 59400,
    commentsCount: 182,
    tags: ["CRISPR", "Gene Therapy", "Sickle Cell", "Biotechnology"],
    content: [
      "Three months post-infusion, all four pediatric trial participants showed complete normalization of red blood cell morphology.",
      "Medical ethicists praised the non-profit patent waiver making the therapy accessible to public teaching hospitals."
    ]
  },
  {
    id: "science-traditional-medicine",
    title: "Pharmacologists Isolate Potent Antiviral Compounds from Indigenous Medicinal Plant Extracts",
    kicker: "Science & Pharmacology",
    deck: "Herbal compound used for centuries by indigenous healers proves effective against respiratory syncytial virus in preclinical models.",
    category: "science-health",
    categoryLabel: "Science & Health",
    author: {
      name: "Dr. Amina Tour\u00e9",
      role: "Health & Science Editor",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 04:15 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/medical_science_lab_1791229889394.jpg",
    imageCaption: "Chromatography equipment separating molecular fractions from botanical samples.",
    views: 42100,
    commentsCount: 95,
    tags: ["Pharmacology", "Medicinal Plants", "Botanicals", "Drug Discovery"],
    content: [
      "Benefit-sharing agreements guarantee that 30% of future pharmaceutical royalties return directly to local forest community trusts.",
      "Toxicology screening confirmed high safety margins with no cellular liver toxicity."
    ]
  },
  {
    id: "science-water-filtration",
    title: "Nanotech Graphene Water Purification Membranes Provide Clean Drinking Water to 500,000 Villagers",
    kicker: "Science & Nanotechnology",
    deck: "Low-cost, gravity-fed filtration units eliminate 99.999% of biological pathogens and industrial chemical contaminants without electricity.",
    category: "science-health",
    categoryLabel: "Science & Health",
    author: {
      name: "Julian Thorne",
      role: "Environmental Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 01:30 PM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/medical_science_lab_1791229889394.jpg",
    imageCaption: "Field technicians assembling modular water purification drums in rural school.",
    views: 39800,
    commentsCount: 84,
    tags: ["Nanotechnology", "Clean Water", "Public Health", "Innovation"],
    content: [
      "The membranes are synthesized from agricultural rice husk waste, creating a circular economy for regional farming cooperatives.",
      "Incidence of waterborne gastrointestinal illnesses dropped by 92% in participating pilot districts."
    ]
  },
  {
    id: "science-astronomy-ska",
    title: "Square Kilometre Array Radio Telescope Captures Deepest View Yet of Cosmic Magnetic Fields",
    kicker: "Science & Astronomy",
    deck: "Giant interlinked radio dishes across the Karoo desert detect primordial gravitational waves from early galactic formation.",
    category: "science-health",
    categoryLabel: "Science & Health",
    author: {
      name: "Julian Thorne",
      role: "Astrophysics Correspondent",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 09:15 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/space_exploration_launch_1791229868403.jpg",
    imageCaption: "Array of giant parabolic radio dishes under the crystalline desert night sky.",
    views: 51300,
    commentsCount: 149,
    tags: ["Astronomy", "SKA Telescope", "Karoo", "Cosmology"],
    content: [
      "Processing petabytes of data per second, the supercomputing facility identified 1,200 previously unknown pulsars in distant galaxies.",
      "International astrophysicists hailed the Karoo observatory as humanity's premier portal onto the deep cosmos."
    ]
  },
  {
    id: "arts-biennale",
    title: "Continental Contemporary Art Biennale Opens with 250 Monumental Sculptures and Digital Murals",
    kicker: "Arts & Culture",
    deck: "Artists from across the diaspora transform historic waterfront warehouses into an immersive tapestry of ancestral memories and futuristic dreams.",
    category: "arts-culture",
    categoryLabel: "Arts & Culture",
    author: {
      name: "Zainab Balogun",
      role: "Visual Arts Critic",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 11:45 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Visitors exploring monumental woven bamboo sculpture in gallery hall.",
    views: 36400,
    commentsCount: 71,
    tags: ["Biennale", "Contemporary Art", "Sculpture", "African Artists"],
    content: [
      "The exhibition explores themes of ecological stewardship, vernacular architecture, and reclaiming stolen cultural treasures.",
      "Over 60,000 international curators and collectors are scheduled to attend during the two-month showcase."
    ]
  },
  {
    id: "arts-bronzes-restitution",
    title: "Historic Royal Bronzes Restituted from European Museums Return to Ceremonial Palace Sanctuary",
    kicker: "Arts & Restitution",
    deck: "Crowds line streets in joyous procession as 120 intricately cast ceremonial artifacts return to their ancestral homeland after 130 years.",
    category: "arts-culture",
    categoryLabel: "Arts & Culture",
    author: {
      name: "Prof. Kwesi Appiah",
      role: "Cultural Heritage Historian",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 09:15 AM",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Traditional ceremonial guards receive the bronze commemorative heads.",
    views: 62800,
    commentsCount: 243,
    tags: ["Restitution", "Benin Bronzes", "Heritage", "Museums"],
    content: [
      "Traditional elders conducted purification rites as the masterworks were placed in a specially commissioned climate-controlled museum pavilion.",
      "Legal historians described the transfer as an irreversible precedent for cultural repatriation worldwide."
    ]
  },
  {
    id: "arts-textile-heritage",
    title: "Reviving the Royal Kente & Mudcloth Looms: Master Weavers Pass Sacred Patterns to Next Generation",
    kicker: "Arts & Living Traditions",
    deck: "Community weaving guilds preserve sacred geometric patterns dating back 600 years while integrating sustainable organic cotton dyes.",
    category: "arts-culture",
    categoryLabel: "Arts & Culture",
    author: {
      name: "Zainab Balogun",
      role: "Visual Arts Critic",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 07:30 AM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Master weaver guiding young apprentice on traditional wooden handloom.",
    views: 29800,
    commentsCount: 52,
    tags: ["Kente", "Textiles", "Living Traditions", "Craftsmanship"],
    content: [
      "Each intricate woven pattern carries specific historical proverbs, philosophical teachings, and royal genealogies.",
      "An international collective has registered intellectual property protections to prevent cheap synthetic counterfeit imports."
    ]
  },
  {
    id: "arts-jazz-festival",
    title: "Cape Town International Jazz Festival Celebrates 25 Years of Legendary Brass and Polyphonic Harmonies",
    kicker: "Arts & Music History",
    deck: "Four outdoor stages feature legends of township jazz alongside avant-garde European and American improvisers.",
    category: "arts-culture",
    categoryLabel: "Arts & Culture",
    author: {
      name: "Zainab Balogun",
      role: "Visual Arts Critic",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 05:15 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Saxophonist performing soulful solo under the festival stage lights.",
    views: 41500,
    commentsCount: 89,
    tags: ["Jazz", "Cape Town", "Township Music", "Music Festival"],
    content: [
      "Tribute performances honored pioneering anti-apartheid musical icons whose songs served as anthems for liberation.",
      "Late-night jam sessions in historic clubs drew impromptu collaborations that lasted until dawn."
    ]
  },
  {
    id: "arts-culinary-renaissance",
    title: "Indigenous Culinary Renaissance: Michelin-Starred Chefs Elevate Ancient Millets, Cassava & Hibiscus",
    kicker: "Arts & Gastronomy",
    deck: "Fine dining restaurants across Dakar, Accra, and Nairobi reimagine ancestral fermentation and wood-smoking techniques.",
    category: "arts-culture",
    categoryLabel: "Arts & Culture",
    author: {
      name: "Zainab Balogun",
      role: "Visual Arts Critic",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 02:45 PM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Artfully plated roasted plantain and fermented locust bean sauce.",
    views: 34200,
    commentsCount: 68,
    tags: ["Culinary", "African Food", "Gastronomy", "Fine Dining"],
    content: [
      "Chefs are partnering directly with female smallholder farmers who cultivate drought-resistant fonio and sorghum grains.",
      "Food critics praised the complex umami notes derived from fermented seed seasonings."
    ]
  },
  {
    id: "arts-vernacular-architecture",
    title: "Modern Vernacular Architecture: Why Raw Earth and Compressed Clay Tiles Outperform Concrete",
    kicker: "Arts & Architecture",
    deck: "Award-winning sustainable architects design climate-resilient schools and civic buildings using compressed earth bricks and natural ventilation.",
    category: "arts-culture",
    categoryLabel: "Arts & Culture",
    author: {
      name: "Julian Thorne",
      role: "Architecture & Urbanism Critic",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 10:00 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_politics_summit_1791231284594.jpg",
    imageCaption: "Curved earth-brick classroom building with natural vaulted airflow canopy.",
    views: 38100,
    commentsCount: 77,
    tags: ["Architecture", "Sustainable Building", "Vernacular", "Clay"],
    content: [
      "The buildings remain 8 degrees cooler than exterior ambient temperatures without requiring energy-draining air conditioning.",
      "The architectural methodology received top honors at the Venice Architecture Biennale."
    ]
  },
  {
    id: "climate-rift-geothermal",
    title: "The Rift Valley Clean Steam Miracle: 1,500MW Geothermal Capacity Drives Zero-Carbon Industrialization",
    kicker: "Climate & Energy",
    deck: "Deep volcanic underground reservoirs provide steady baseload power, making the region a global model for zero-emission industrialization.",
    category: "climate-energy",
    categoryLabel: "Climate & Energy",
    author: {
      name: "Julian Thorne",
      role: "Energy Infrastructure Editor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 06:15 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/green_energy_grid_1791229322913.jpg",
    imageCaption: "Geothermal steam wells generating high-pressure clean electricity.",
    views: 39500,
    commentsCount: 88,
    tags: ["Geothermal", "Clean Energy", "Rift Valley", "Renewables"],
    content: [
      "Plumes of pure geothermal steam rise into the morning sky above the Great Rift Valley, feeding over 90% of daytime industrial electricity requirements.",
      "Closed-loop reinjection wells ensure zero water depletion in surrounding agricultural ecosystems."
    ]
  },
  {
    id: "climate-sahel-greenwall",
    title: "The Great Green Wall Crosses 1,200km Mark: Reviving Desert Soils with Indigenous Acacia Forestry",
    kicker: "Climate & Soil Restoration",
    deck: "Community forestry cooperatives create 40,000 rural agro-ecological livelihoods along the southern edge of the Sahara.",
    category: "climate-energy",
    categoryLabel: "Climate & Energy",
    author: {
      name: "Julian Thorne",
      role: "Energy Infrastructure Editor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 05:30 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/green_energy_grid_1791229322913.jpg",
    imageCaption: "Thriving young acacia forest belt in Senegal restoring degraded topsoil.",
    views: 34200,
    commentsCount: 71,
    tags: ["Great Green Wall", "Reforestation", "Sahel", "Soil Restoration"],
    content: [
      "Satellite vegetation imagery confirms ancient dust-bowl zones have turned green, restoring water tables and allowing agro-pastoral communities to thrive.",
      "Drought-resilient gum arabic trees provide reliable annual commercial harvests for women's cooperatives."
    ]
  },
  {
    id: "climate-solar-desert",
    title: "Mega Solar Park Phase IV Goes Live: 2.2 Gigawatt Photovoltaic Facility Powers 3 Million Homes",
    kicker: "Climate & Solar Power",
    deck: "Vast desert solar tracking panels paired with 800MWh battery storage systems achieve record low tariff of 2.1 cents per kWh.",
    category: "climate-energy",
    categoryLabel: "Climate & Energy",
    author: {
      name: "Julian Thorne",
      role: "Energy Infrastructure Editor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 04:00 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/green_energy_grid_1791229322913.jpg",
    imageCaption: "Rows of solar tracking arrays extending towards the desert horizon.",
    views: 48900,
    commentsCount: 114,
    tags: ["Solar Energy", "Clean Power", "Battery Storage", "Renewables"],
    content: [
      "Equipped with bifacial panels that harvest reflected radiation from desert sands, the installation generates electricity around the clock.",
      "The surplus daytime generation feeds green hydrogen synthesis plants destined for clean export."
    ]
  },
  {
    id: "climate-green-hydrogen",
    title: "Continental Green Hydrogen Corridor Inks $8.5 Billion Export Deal with European Industrial Hubs",
    kicker: "Climate & Green Hydrogen",
    deck: "Zero-carbon ammonia synthesized from coastal desalinated seawater and wind farms to supply steelmaking furnaces.",
    category: "climate-energy",
    categoryLabel: "Climate & Energy",
    author: {
      name: "Julian Thorne",
      role: "Energy Infrastructure Editor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 01:45 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/green_energy_grid_1791229322913.jpg",
    imageCaption: "Industrial electrolyzer facility under construction along coastal windswept plain.",
    views: 41600,
    commentsCount: 89,
    tags: ["Green Hydrogen", "Clean Export", "Renewables", "Decarbonization"],
    content: [
      "The project will displace 6 million metric tons of carbon emissions annually while establishing the continent as a premier clean fuels exporter.",
      "Community trusts hold a 20% equity stake in all export earnings."
    ]
  },
  {
    id: "climate-mangrove-carbon",
    title: "Coastal Blue Carbon: Community Mangrove Restoration Projects Issue $25M in Verified Carbon Credits",
    kicker: "Climate & Blue Carbon",
    deck: "Tidal mangrove forests along the Indian Ocean coastline sequester ten times more carbon per hectare than terrestrial rainforests.",
    category: "climate-energy",
    categoryLabel: "Climate & Energy",
    author: {
      name: "Julian Thorne",
      role: "Energy Infrastructure Editor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 11:15 AM",
    readTime: "3 min read",
    imageUrl: "/src/assets/images/green_energy_grid_1791229322913.jpg",
    imageCaption: "Coastal villagers planting mangrove saplings during morning low tide.",
    views: 36500,
    commentsCount: 64,
    tags: ["Blue Carbon", "Mangroves", "Carbon Credits", "Conservation"],
    content: [
      "Revenue from verified carbon credit auctions is channeled into local solar desalination stations and children's school scholarships.",
      "Marine fishery populations have rebounded by 45% as healthy mangrove root networks shelter juvenile fish."
    ]
  },
  {
    id: "climate-carbon-tax",
    title: "Continental Carbon Border Adjustment Tax Approved to Protect Clean Local Manufacturers",
    kicker: "Climate & Carbon Policy",
    deck: "Tariffs imposed on high-carbon imported steel and cement level playing field for domestic factories operating on green electricity.",
    category: "climate-energy",
    categoryLabel: "Climate & Energy",
    author: {
      name: "Julian Thorne",
      role: "Energy Infrastructure Editor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 08:30 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/green_energy_grid_1791229322913.jpg",
    imageCaption: "Industrial clean steel manufacturing plant powered by renewable electricity.",
    views: 31200,
    commentsCount: 58,
    tags: ["Carbon Tax", "Trade Policy", "Green Industry", "Climate Action"],
    content: [
      "Trade ministers noted that foreign competitors relying on coal-fired grids will no longer be permitted to undercut clean African production.",
      "The proceeds will capitalize a green industrial transition fund for emerging manufacturing enterprises."
    ]
  },
  {
    id: "opinion-democracy-africa",
    title: "Why Judicial Independence in Our Courts Is the Non-Negotiable Soul of the Republic",
    kicker: "Opinion & Hard Talk",
    deck: "When political elites clash and institutions waver, a fearless judiciary upholding constitutional law remains our ultimate democratic bastion.",
    category: "opinion",
    categoryLabel: "Opinion & Hard Talk",
    author: {
      name: "Prof. Kwesi Appiah",
      role: "Distinguished Professor of Constitutional Law",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 05:45 AM",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/corridors_court_judge_1791231272938.jpg",
    imageCaption: "The Supreme Court steps at dawn.",
    views: 61200,
    commentsCount: 228,
    tags: ["Constitutionalism", "Judiciary", "Rule of Law", "Democracy"],
    content: [
      "Democracy is never permanently won; it is defended daily in the quiet integrity of courtroom judgments.",
      "As our courts navigate high-stakes political controversies, the courage of our judges to decide cases strictly according to evidence is what keeps the republic sovereign."
    ]
  },
  {
    id: "opinion-youth-dividend",
    title: "The 2030 Demographic Tsunami: Why Africa's Gen-Z Will Either Transform or Upend the Continent",
    kicker: "Opinion & Hard Talk",
    deck: "With 60% of the population under 25, our political leadership must either build digital economies or prepare for unstoppable civic disruption.",
    category: "opinion",
    categoryLabel: "Opinion & Hard Talk",
    author: {
      name: "Maryam Al-Sharif",
      role: "Youth Economic Policy Fellow",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Today \u00b7 05:15 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_politics_summit_1791231284594.jpg",
    imageCaption: "Young innovators gathered at youth summit.",
    views: 47900,
    commentsCount: 194,
    tags: ["Youth Dividend", "Gen-Z", "Future of Africa", "Jobs"],
    content: [
      "Our young citizens are digitally fluent, impatient with patronage politics, and globally connected.",
      "They do not want empty state hand-outs; they want transparent governance, venture capital, and institutional fairness."
    ]
  },
  {
    id: "opinion-monetary-sovereignty",
    title: "Beyond Western Correspondent Banks: The Case for a Pan-African Settlement Currency",
    kicker: "Opinion & Economics",
    deck: "Why should two African nations settle trade in US dollars when our central banks can operate on sovereign digital clearing rails?",
    category: "opinion",
    categoryLabel: "Opinion & Hard Talk",
    author: {
      name: "Kofi Mensah",
      role: "Senior Economic Columnist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 04:30 PM",
    readTime: "5 min read",
    imageUrl: "/src/assets/images/african_fintech_hub_1791232334696.jpg",
    imageCaption: "Bankers reviewing cross-border settlement charts.",
    views: 55400,
    commentsCount: 219,
    tags: ["Monetary Policy", "De-Dollarization", "AfCFTA", "African Unity"],
    content: [
      "For decades, African trade was artificially constrained by reliance on foreign reserve currencies that extract billions in fees.",
      "The deployment of indigenous instant payment switches is not merely a technical achievement; it is a declaration of economic independence."
    ]
  },
  {
    id: "opinion-education-ai",
    title: "Stop Training for Yesterday's Jobs: Reimagining African Higher Education for the AI Era",
    kicker: "Opinion & Education",
    deck: "Memorizing rote textbooks is obsolete. Our universities must pivot towards applied robotics, synthetic biology, and systems design.",
    category: "opinion",
    categoryLabel: "Opinion & Hard Talk",
    author: {
      name: "Dr. Amina Tour\u00e9",
      role: "Technology & Education Fellow",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 01:00 PM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/tech_semiconductor_ai_1791229310782.jpg",
    imageCaption: "Students in computer engineering lab testing neural network models.",
    views: 43200,
    commentsCount: 161,
    tags: ["Education", "Artificial Intelligence", "Universities", "Future of Work"],
    content: [
      "A degree that awards certificates without hands-on engineering competence is a disservice to the continent's brightest minds.",
      "We must equip students to build algorithms that solve vernacular African challenges rather than serving as passive consumers."
    ]
  },
  {
    id: "opinion-food-sovereignty",
    title: "Africa Has 60% of the World's Uncultivated Arable Land: It Is Time to Feed Ourselves and the World",
    kicker: "Opinion & Agriculture",
    deck: "Spending $45 billion annually on imported wheat and rice while millions of hectares lie fallow is a failure of agricultural statecraft.",
    category: "opinion",
    categoryLabel: "Opinion & Hard Talk",
    author: {
      name: "Julian Thorne",
      role: "Rural Development Specialist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 09:30 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/green_energy_grid_1791229322913.jpg",
    imageCaption: "Lush green irrigation pivot fields in the savannah.",
    views: 49800,
    commentsCount: 178,
    tags: ["Food Sovereignty", "Agriculture", "Rural Economy", "Trade"],
    content: [
      "With smart irrigation, drought-resistant indigenous seed varieties, and fair farmgate pricing, agriculture can become the primary engine of job creation.",
      "Food sovereignty is the ultimate cornerstone of national security."
    ]
  },
  {
    id: "opinion-creative-economy",
    title: "Culture Is Our Greatest Oil: How Creative Arts Can Drive 10% of Continental GDP",
    kicker: "Opinion & Creative Arts",
    deck: "From film studios to music streaming, our narrative power is the continent's most valuable and inexhaustible export resource.",
    category: "opinion",
    categoryLabel: "Opinion & Hard Talk",
    author: {
      name: "Zainab Balogun",
      role: "Culture & Creative Economy Columnist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      verified: true
    },
    publishedAt: "Yesterday \u00b7 07:00 AM",
    readTime: "4 min read",
    imageUrl: "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
    imageCaption: "Sound engineer mixing track on state-of-the-art studio console.",
    views: 38700,
    commentsCount: 114,
    tags: ["Creative Economy", "Culture", "Music", "Soft Power"],
    content: [
      "While raw minerals are extracted once, creative intellectual property generates recurring dividends across generations.",
      "Governments must enforce copyright protection, lower equipment tariffs, and invest in world-class production soundstages."
    ]
  }
,
{
  "id": "top-story-qr-retail",
  "title": "Central Banks Unveil Continental Interoperable QR Payment Standard for Retail Merchants",
  "kicker": "Top Stories \u00b7 Commerce",
  "deck": "Unified payment rail connects 450,000 street vendors and superstores with instant zero-fee settlement.",
  "category": "top-stories",
  "categoryLabel": "Top Stories",
  "author": {
    "name": "Kofi Mensah",
    "role": "Senior Geopolitical Editor",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "45m ago",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/african_fintech_hub_1791232334696.jpg",
  "imageCaption": "Merchant testing QR payment checkout at central market terminal.",
  "views": 84100,
  "commentsCount": 192,
  "tags": [
    "Retail",
    "QR Payments",
    "Fintech",
    "Top Stories"
  ],
  "content": [
    "The regional monetary authority launched standard QR specifications eliminating card swipe reader charges for micro-merchants.",
    "Transactions settle in under two seconds directly between customer accounts regardless of telecom network."
  ]
},
{
  "id": "politics-devolved-health",
  "title": "Governors Council Approves $340M Emergency Fund for County Hospital Upgrades",
  "kicker": "Politics & Devolution",
  "deck": "Bipartisan summit resolves medical staff salary harmonization across 47 devolved regional governments.",
  "category": "politics",
  "categoryLabel": "Politics & Governance",
  "author": {
    "name": "Brenda Nanjala",
    "role": "Judicial & Political Bureau",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 06:30 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/african_politics_summit_1791231284594.jpg",
  "imageCaption": "Governors address the national press corps following consensus talks.",
  "views": 59100,
  "commentsCount": 164,
  "tags": [
    "Health",
    "Devolution",
    "Governors",
    "Counties"
  ],
  "content": [
    "County governors reached unanimous consensus on allocating 30% of equalization funds directly to emergency oncology and pediatric wards.",
    "The legislative framework guarantees ring-fenced budgets immune to political changes."
  ]
},
{
  "id": "scandal-mineral-royalty",
  "title": "Lithium Export Probe: Mining Syndicate Smuggled 12,000 Metric Tons Under Agricultural Licenses",
  "kicker": "Scandals & Extractive Crimes",
  "deck": "Whistleblower manifests expose how battery-grade raw spodumene ore was falsely declared as fertilizer rocks.",
  "category": "scandals",
  "categoryLabel": "Scandals & Whistleblowers",
  "author": {
    "name": "David Ochieng",
    "role": "Investigative Bureau Lead",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 06:15 AM",
  "readTime": "5 min read",
  "imageUrl": "/src/assets/images/corridors_court_judge_1791231272938.jpg",
  "imageCaption": "Seized mineral shipping containers at freight rail yard.",
  "views": 88300,
  "commentsCount": 354,
  "tags": [
    "Lithium",
    "Mining Scandal",
    "Whistleblower",
    "Smuggling"
  ],
  "content": [
    "Mining ministry inspectors assisted by customs intelligence agents intercepted 40 railway wagons carrying unrefined lithium concentrates.",
    "Forensic assays revealed commercial grade lithium oxide valued at over $28 million destined for unregistered overseas buyers."
  ]
},
{
  "id": "gossip-penthouse-party",
  "title": "Secret Rooftop Gala: Film Stars and Foreign Ambassadors Mingle at Tycoon's Sky Garden Soir\u00e9e",
  "kicker": "Gossip & High Society",
  "deck": "Socialites dish on exclusive guest list where cellphones were locked in magnetic pouches at the penthouse elevator.",
  "category": "gossip",
  "categoryLabel": "Gossip & Whispers",
  "author": {
    "name": "Zainab Balogun",
    "role": "Celebrity & Society Editor",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 07:00 AM",
  "readTime": "3 min read",
  "imageUrl": "/src/assets/images/celebrity_vip_whisper_1791232322737.jpg",
  "imageCaption": "Rooftop terrace illuminated by amber fairy lights overlooking the harbor.",
  "views": 67400,
  "commentsCount": 284,
  "tags": [
    "Rooftop Gala",
    "High Society",
    "Celebrity Party",
    "Whispers"
  ],
  "content": [
    "Guests enjoyed vintage champagne while world-class jazz musicians played unannounced sets until the early hours of the morning.",
    "Attendees confirmed witnessing a prominent movie director negotiating a major studio contract with a streaming executive."
  ]
},
{
  "id": "ent-streaming-deal",
  "title": "Pan-African Studio Scores $50M Multi-Picture Deal for Historical Action Epics",
  "kicker": "Entertainment & Hollywood",
  "deck": "Global streaming powerhouse partners with Lagos and Nairobi creatives to bring indigenous warrior dynasties to screens.",
  "category": "entertainment",
  "categoryLabel": "Entertainment & Celebrity",
  "author": {
    "name": "Zainab Balogun",
    "role": "Culture & Celebrity Editor",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 06:45 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
  "imageCaption": "Production crew filming sweeping battlefield sequence with traditional armor.",
  "views": 58900,
  "commentsCount": 142,
  "tags": [
    "Film Deal",
    "Cinema",
    "Streaming",
    "Historical Epic"
  ],
  "content": [
    "The groundbreaking production slate includes three big-budget historical features chronicling 16th-century coastal maritime navigators.",
    "Local artisans and costume designers have been contracted across four countries to supply period-accurate weaponry and ceremonial attire."
  ]
},
{
  "id": "tech-quantum-hub",
  "title": "Continent's First Quantum Cryptography Lab Deployed to Secure Interbank Wire Transfers",
  "kicker": "Technology & Quantum Security",
  "deck": "Researchers test quantum key distribution network guaranteeing mathematically unbreakable encryption for commercial banking.",
  "category": "technology",
  "categoryLabel": "Technology & Innovation",
  "author": {
    "name": "Dr. Amina Tour\u00e9",
    "role": "Technology Correspondent",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 07:15 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/tech_semiconductor_ai_1791229310782.jpg",
  "imageCaption": "Laser optics bench inside the university quantum photonics laboratory.",
  "views": 61200,
  "commentsCount": 156,
  "tags": [
    "Quantum Cryptography",
    "Cybersecurity",
    "Fintech",
    "Innovation"
  ],
  "content": [
    "By transmitting photons over dedicated optical fiber trunks, the system instantly detects any third-party eavesdropping attempt.",
    "Commercial banks plan to integrate quantum security protocols ahead of global post-quantum regulatory deadlines."
  ]
},
{
  "id": "world-critical-minerals-accord",
  "title": "Quad-Continent Critical Minerals Alliance Ratifies Fair Farmgate Value Protocol",
  "kicker": "World News & Global Trade",
  "deck": "Resource-producing nations enforce mandatory domestic processing requirements, banning raw mineral exports without local refining.",
  "category": "world",
  "categoryLabel": "World News & Continental Diplomacy",
  "author": {
    "name": "Kofi Mensah",
    "role": "Senior Diplomatic Correspondent",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 06:00 AM",
  "readTime": "5 min read",
  "imageUrl": "/src/assets/images/world_diplomacy_summit_1791229858035.jpg",
  "imageCaption": "Diplomatic delegates in plenary hall during adoption of the minerals value declaration.",
  "views": 69400,
  "commentsCount": 184,
  "tags": [
    "Critical Minerals",
    "Value Addition",
    "Global Trade",
    "Diplomacy"
  ],
  "content": [
    "The treaty requires multinational consortia to establish domestic smelting and refining facilities before exporting nickel, cobalt, and graphite.",
    "Economic analysts estimate the protocol will retain over $35 billion in high-value manufacturing revenues locally."
  ]
},
{
  "id": "sports-womens-afcon",
  "title": "Women's Continental Cup Final Sets All-Time Attendance Record with 68,000 Fans",
  "kicker": "Sports Arena \u00b7 Women's Football",
  "deck": "Electrifying penalty shootout finale crowns new champions in front of capacity stadium and global TV audience.",
  "category": "sports",
  "categoryLabel": "Sports Arena",
  "author": {
    "name": "Farouk Al-Mansoor",
    "role": "Senior Football Analyst",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 07:30 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/african_sports_football_1791231306049.jpg",
  "imageCaption": "Champions celebrate with gold trophy as confetti cannons illuminate the arena.",
  "views": 89200,
  "commentsCount": 312,
  "tags": [
    "Womens Football",
    "Attendance Record",
    "Champions",
    "Sports"
  ],
  "content": [
    "A masterclass in defensive resilience took the contest all the way to sudden death penalties before the goalkeeper made the decisive save.",
    "Corporate sponsorship investments for women's football leagues have quadrupled following the tournament's unprecedented viewership."
  ]
},
{
  "id": "science-tuberculosis-ai",
  "title": "Mobile AI Diagnostic Vans Detect Early Tuberculosis in 10 Seconds with 97% Accuracy",
  "kicker": "Science & Health",
  "deck": "Solar-powered vans equipped with ultra-low-dose digital X-rays screen remote rural communities without requiring hospital travel.",
  "category": "science-health",
  "categoryLabel": "Science & Health",
  "author": {
    "name": "Dr. Amina Tour\u00e9",
    "role": "Health & Science Editor",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 06:15 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/medical_science_lab_1791229889394.jpg",
  "imageCaption": "Field radiographer reviewing instant computer vision diagnostic chest scans.",
  "views": 54200,
  "commentsCount": 128,
  "tags": [
    "Tuberculosis",
    "AI Diagnostics",
    "Rural Health",
    "Public Health"
  ],
  "content": [
    "The edge-computing device operates completely offline in rural regions with zero cellular connectivity, analyzing chest radiographies instantly.",
    "Patients diagnosed positive receive immediate starter medication packs, cutting transmission chains within families."
  ]
},
{
  "id": "arts-sculpture-park",
  "title": "World's Largest Eco-Sculpture Sanctuary Opens with 500 Basalt and Recycled Bronze Monuments",
  "kicker": "Arts & Eco-Monuments",
  "deck": "Acclaimed sculptors carve ancestral guardians into natural granite boulders along 40 kilometers of restored indigenous forest.",
  "category": "arts-culture",
  "categoryLabel": "Arts & Culture",
  "author": {
    "name": "Zainab Balogun",
    "role": "Visual Arts Critic",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 06:30 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
  "imageCaption": "Monumental stone carving emerging from the lush forest canopy.",
  "views": 41800,
  "commentsCount": 94,
  "tags": [
    "Sculpture",
    "Eco Art",
    "Monument",
    "Culture"
  ],
  "content": [
    "Visitors hike winding forest trails to discover colossal carved ancestral figures integrated directly into living rock outcrops.",
    "All proceeds from park admissions fund the rewilding of indigenous acacia forest and wildlife conservation trusts."
  ]
}
,
{
  "id": "top-story-7-qr",
  "title": "Central Banks Unveil Continental Interoperable QR Payment Standard for Retail Merchants",
  "kicker": "Top Stories \u00b7 Commerce",
  "deck": "Unified payment rail connects 450,000 street vendors and superstores with instant zero-fee settlement.",
  "category": "top-stories",
  "categoryLabel": "Top Stories",
  "author": {
    "name": "Kofi Mensah",
    "role": "Senior Geopolitical Editor",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "45m ago",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/african_fintech_hub_1791232334696.jpg",
  "imageCaption": "Merchant testing QR payment checkout at central market terminal.",
  "views": 84100,
  "commentsCount": 192,
  "tags": [
    "Retail",
    "QR Payments",
    "Fintech",
    "Top Stories"
  ],
  "content": [
    "The regional monetary authority launched standard QR specifications eliminating card swipe reader charges for micro-merchants.",
    "Transactions settle in under two seconds directly between customer accounts regardless of telecom network."
  ]
},
{
  "id": "politics-7-devolved",
  "title": "Governors Council Approves $340M Emergency Fund for County Hospital Upgrades",
  "kicker": "Politics & Devolution",
  "deck": "Bipartisan summit resolves medical staff salary harmonization across 47 devolved regional governments.",
  "category": "politics",
  "categoryLabel": "Politics & Governance",
  "author": {
    "name": "Brenda Nanjala",
    "role": "Judicial & Political Bureau",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 06:30 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/african_politics_summit_1791231284594.jpg",
  "imageCaption": "Governors address the national press corps following consensus talks.",
  "views": 59100,
  "commentsCount": 164,
  "tags": [
    "Health",
    "Devolution",
    "Governors",
    "Counties"
  ],
  "content": [
    "County governors reached unanimous consensus on allocating 30% of equalization funds directly to emergency oncology and pediatric wards.",
    "The legislative framework guarantees ring-fenced budgets immune to political changes."
  ]
},
{
  "id": "scandal-7-mineral",
  "title": "Lithium Export Probe: Mining Syndicate Smuggled 12,000 Metric Tons Under Agricultural Licenses",
  "kicker": "Scandals & Extractive Crimes",
  "deck": "Whistleblower manifests expose how battery-grade raw spodumene ore was falsely declared as fertilizer rocks.",
  "category": "scandals",
  "categoryLabel": "Scandals & Whistleblowers",
  "author": {
    "name": "David Ochieng",
    "role": "Investigative Bureau Lead",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 06:15 AM",
  "readTime": "5 min read",
  "imageUrl": "/src/assets/images/corridors_court_judge_1791231272938.jpg",
  "imageCaption": "Seized mineral shipping containers at freight rail yard.",
  "views": 88300,
  "commentsCount": 354,
  "tags": [
    "Lithium",
    "Mining Scandal",
    "Whistleblower",
    "Smuggling"
  ],
  "content": [
    "Mining ministry inspectors assisted by customs intelligence agents intercepted 40 railway wagons carrying unrefined lithium concentrates.",
    "Forensic assays revealed commercial grade lithium oxide valued at over $28 million destined for unregistered overseas buyers."
  ]
},
{
  "id": "gossip-7-penthouse",
  "title": "Secret Rooftop Gala: Film Stars and Foreign Ambassadors Mingle at Tycoon's Sky Garden Soir\u00e9e",
  "kicker": "Gossip & High Society",
  "deck": "Socialites dish on exclusive guest list where cellphones were locked in magnetic pouches at the penthouse elevator.",
  "category": "gossip",
  "categoryLabel": "Gossip & Whispers",
  "author": {
    "name": "Zainab Balogun",
    "role": "Celebrity & Society Editor",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 07:00 AM",
  "readTime": "3 min read",
  "imageUrl": "/src/assets/images/celebrity_vip_whisper_1791232322737.jpg",
  "imageCaption": "Rooftop terrace illuminated by amber fairy lights overlooking the harbor.",
  "views": 67400,
  "commentsCount": 284,
  "tags": [
    "Rooftop Gala",
    "High Society",
    "Celebrity Party",
    "Whispers"
  ],
  "content": [
    "Guests enjoyed vintage champagne while world-class jazz musicians played unannounced sets until the early hours of the morning.",
    "Attendees confirmed witnessing a prominent movie director negotiating a major studio contract with a streaming executive."
  ]
},
{
  "id": "ent-7-streaming",
  "title": "Pan-African Studio Scores $50M Multi-Picture Deal for Historical Action Epics",
  "kicker": "Entertainment & Hollywood",
  "deck": "Global streaming powerhouse partners with Lagos and Nairobi creatives to bring indigenous warrior dynasties to screens.",
  "category": "entertainment",
  "categoryLabel": "Entertainment & Celebrity",
  "author": {
    "name": "Zainab Balogun",
    "role": "Culture & Celebrity Editor",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 06:45 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
  "imageCaption": "Production crew filming sweeping battlefield sequence with traditional armor.",
  "views": 58900,
  "commentsCount": 142,
  "tags": [
    "Film Deal",
    "Cinema",
    "Streaming",
    "Historical Epic"
  ],
  "content": [
    "The groundbreaking production slate includes three big-budget historical features chronicling 16th-century coastal maritime navigators.",
    "Local artisans and costume designers have been contracted across four countries to supply period-accurate weaponry and ceremonial attire."
  ]
},
{
  "id": "tech-7-quantum",
  "title": "Continent's First Quantum Cryptography Lab Deployed to Secure Interbank Wire Transfers",
  "kicker": "Technology & Quantum Security",
  "deck": "Researchers test quantum key distribution network guaranteeing mathematically unbreakable encryption for commercial banking.",
  "category": "technology",
  "categoryLabel": "Technology & Innovation",
  "author": {
    "name": "Dr. Amina Tour\u00e9",
    "role": "Technology Correspondent",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 07:15 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/tech_semiconductor_ai_1791229310782.jpg",
  "imageCaption": "Laser optics bench inside the university quantum photonics laboratory.",
  "views": 61200,
  "commentsCount": 156,
  "tags": [
    "Quantum Cryptography",
    "Cybersecurity",
    "Fintech",
    "Innovation"
  ],
  "content": [
    "By transmitting photons over dedicated optical fiber trunks, the system instantly detects any third-party eavesdropping attempt.",
    "Commercial banks plan to integrate quantum security protocols ahead of global post-quantum regulatory deadlines."
  ]
},
{
  "id": "world-7-minerals",
  "title": "Quad-Continent Critical Minerals Alliance Ratifies Fair Farmgate Value Protocol",
  "kicker": "World News & Global Trade",
  "deck": "Resource-producing nations enforce mandatory domestic processing requirements, banning raw mineral exports without local refining.",
  "category": "world",
  "categoryLabel": "World News & Continental Diplomacy",
  "author": {
    "name": "Kofi Mensah",
    "role": "Senior Diplomatic Correspondent",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 06:00 AM",
  "readTime": "5 min read",
  "imageUrl": "/src/assets/images/world_diplomacy_summit_1791229858035.jpg",
  "imageCaption": "Diplomatic delegates in plenary hall during adoption of the minerals value declaration.",
  "views": 69400,
  "commentsCount": 184,
  "tags": [
    "Critical Minerals",
    "Value Addition",
    "Global Trade",
    "Diplomacy"
  ],
  "content": [
    "The treaty requires multinational consortia to establish domestic smelting and refining facilities before exporting nickel, cobalt, and graphite.",
    "Economic analysts estimate the protocol will retain over $35 billion in high-value manufacturing revenues locally."
  ]
},
{
  "id": "sports-7-womens",
  "title": "Women's Continental Cup Final Sets All-Time Attendance Record with 68,000 Fans",
  "kicker": "Sports Arena \u00b7 Women's Football",
  "deck": "Electrifying penalty shootout finale crowns new champions in front of capacity stadium and global TV audience.",
  "category": "sports",
  "categoryLabel": "Sports Arena",
  "author": {
    "name": "Farouk Al-Mansoor",
    "role": "Senior Football Analyst",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 07:30 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/african_sports_football_1791231306049.jpg",
  "imageCaption": "Champions celebrate with gold trophy as confetti cannons illuminate the arena.",
  "views": 89200,
  "commentsCount": 312,
  "tags": [
    "Womens Football",
    "Attendance Record",
    "Champions",
    "Sports"
  ],
  "content": [
    "A masterclass in defensive resilience took the contest all the way to sudden death penalties before the goalkeeper made the decisive save.",
    "Corporate sponsorship investments for women's football leagues have quadrupled following the tournament's unprecedented viewership."
  ]
},
{
  "id": "science-7-tb",
  "title": "Mobile AI Diagnostic Vans Detect Early Tuberculosis in 10 Seconds with 97% Accuracy",
  "kicker": "Science & Health",
  "deck": "Solar-powered vans equipped with ultra-low-dose digital X-rays screen remote rural communities without requiring hospital travel.",
  "category": "science-health",
  "categoryLabel": "Science & Health",
  "author": {
    "name": "Dr. Amina Tour\u00e9",
    "role": "Health & Science Editor",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 06:15 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/medical_science_lab_1791229889394.jpg",
  "imageCaption": "Field radiographer reviewing instant computer vision diagnostic chest scans.",
  "views": 54200,
  "commentsCount": 128,
  "tags": [
    "Tuberculosis",
    "AI Diagnostics",
    "Rural Health",
    "Public Health"
  ],
  "content": [
    "The edge-computing device operates completely offline in rural regions with zero cellular connectivity, analyzing chest radiographies instantly.",
    "Patients diagnosed positive receive immediate starter medication packs, cutting transmission chains within families."
  ]
},
{
  "id": "arts-7-sculpture",
  "title": "World's Largest Eco-Sculpture Sanctuary Opens with 500 Basalt and Recycled Bronze Monuments",
  "kicker": "Arts & Eco-Monuments",
  "deck": "Acclaimed sculptors carve ancestral guardians into natural granite boulders along 40 kilometers of restored indigenous forest.",
  "category": "arts-culture",
  "categoryLabel": "Arts & Culture",
  "author": {
    "name": "Zainab Balogun",
    "role": "Visual Arts Critic",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 06:30 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/african_entertainment_awards_1791231296253.jpg",
  "imageCaption": "Monumental stone carving emerging from the lush forest canopy.",
  "views": 41800,
  "commentsCount": 94,
  "tags": [
    "Sculpture",
    "Eco Art",
    "Monument",
    "Culture"
  ],
  "content": [
    "Visitors hike winding forest trails to discover colossal carved ancestral figures integrated directly into living rock outcrops.",
    "All proceeds from park admissions fund the rewilding of indigenous acacia forest and wildlife conservation trusts."
  ]
},
{
  "id": "climate-7-hydro",
  "title": "Grand Cascades Hydroelectric Dam Inaugurates 2,400MW Basin Turbines",
  "kicker": "Climate & Clean Energy",
  "deck": "Massive seasonal river basin project doubles regional clean electricity exports to 6 neighboring countries.",
  "category": "climate-energy",
  "categoryLabel": "Climate & Energy",
  "author": {
    "name": "Julian Thorne",
    "role": "Energy Infrastructure Editor",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 05:00 AM",
  "readTime": "4 min read",
  "imageUrl": "/src/assets/images/green_energy_grid_1791229322913.jpg",
  "imageCaption": "Water cascades through concrete spillway gates powering underground turbine hall.",
  "views": 45100,
  "commentsCount": 112,
  "tags": [
    "Hydroelectric",
    "Clean Energy",
    "Dam",
    "Baseload"
  ],
  "content": [
    "The hydroelectric reservoir provides reliable year-round irrigation to 80,000 hectares of smallholder farms while stabilizing regional power grids.",
    "Automated fish ladders and environmental flow reserves safeguard downstream aquatic ecosystems."
  ]
},
{
  "id": "opinion-7-sovereignty",
  "title": "Why African Tech Sovereignty Begins with Building Our Own Large Language Models and Data Centers",
  "kicker": "Opinion & Technology",
  "deck": "Allowing external corporate monopolies to control our linguistic archives and legal reasoning systems is a modern form of digital surrender.",
  "category": "opinion",
  "categoryLabel": "Opinion & Hard Talk",
  "author": {
    "name": "Dr. Amina Tour\u00e9",
    "role": "Technology Fellow & Columnist",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    "verified": true
  },
  "publishedAt": "Today \u00b7 04:45 AM",
  "readTime": "5 min read",
  "imageUrl": "/src/assets/images/tech_semiconductor_ai_1791229310782.jpg",
  "imageCaption": "Data science lab building indigenous multilingual AI models.",
  "views": 53400,
  "commentsCount": 187,
  "tags": [
    "AI Sovereignty",
    "LLMs",
    "Digital Autonomy",
    "Opinion"
  ],
  "content": [
    "Artificial intelligence is not neutral; it encodes the cultural worldview and historical priorities of its training corpora.",
    "If we do not train foundational models on Swahili, Yoruba, Amharic, and Zulu legal and oral histories, our future institutions will run on algorithms that do not comprehend our values."
  ]
}
];

export interface PopularPostItem {
  id: string;
  title: string;
  imageUrl: string;
  excerpt: string;
  categoryLabel: string;
  views: number;
  readTime: string;
  publishedAt: string;
}

export const POPULAR_POSTS: PopularPostItem[] = [
  {
    id: 'scandal-tender-1',
    title: 'The $42 Million Phantom Port Fuel Scheme: Leaked Audits Indict Customs Clearing Conglomerate',
    imageUrl: '/src/assets/images/african_politics_summit_1791231284594.jpg',
    excerpt: 'State oil marketer paid for 14 bulk fuel shipments that never docked at any regional harbor.',
    categoryLabel: 'Scandals',
    views: 198500,
    readTime: '6 min read',
    publishedAt: '2h ago'
  },
  {
    id: 'case-supreme-court-1',
    title: 'Supreme Court 7-Judge Bench Retires to Draft Final Verdict on Contested Governance Act',
    imageUrl: '/src/assets/images/corridors_court_judge_1791231272938.jpg',
    excerpt: 'Chief Justice and full apex bench conclude five days of marathon oral submissions on executive powers.',
    categoryLabel: 'Corridors of Power',
    views: 182400,
    readTime: '6 min read',
    publishedAt: '3h ago'
  },
  {
    id: 'sports-afcon-1',
    title: 'Afcon Qualifiers: National Team Powers to 3-0 Victory with Stunning Second-Half Masterclass',
    imageUrl: '/src/assets/images/african_sports_football_1791231306049.jpg',
    excerpt: 'Clinical counter-attacking football silences 60,000 away fans and secures top seed in continental finals.',
    categoryLabel: 'Sports',
    views: 167300,
    readTime: '4 min read',
    publishedAt: '1h ago'
  },
  {
    id: 'gossip-celebrity-1',
    title: 'Grammy Winner & Star Diva Spotted Together at Private Safari Lodge Amid Romance Whispers',
    imageUrl: '/src/assets/images/celebrity_vip_whisper_1791232322737.jpg',
    excerpt: 'Paparazzi capture exclusive images of the continent\'s biggest pop duo enjoying private candlelit dinners.',
    categoryLabel: 'Gossip',
    views: 145000,
    readTime: '3 min read',
    publishedAt: '4h ago'
  },
  {
    id: 'tech-fintech-1',
    title: 'The Mobile Money Frontier: How Pan-African Payment Switches Bypass Western SWIFT Networks',
    imageUrl: '/src/assets/images/african_fintech_hub_1791232334696.jpg',
    excerpt: 'Instant settlement rails enable cross-border commerce across 22 countries without foreign currency fees.',
    categoryLabel: 'Technology',
    views: 124800,
    readTime: '4 min read',
    publishedAt: '5h ago'
  },
  {
    id: 'ent-fashion-week',
    title: 'Dakar & Lagos Fashion Weeks Merge into Historic Pan-African Haute Couture Collective',
    imageUrl: '/src/assets/images/african_entertainment_awards_1791231296253.jpg',
    excerpt: 'Designers from 18 nations showcase indigenous hand-loomed textiles on international runways.',
    categoryLabel: 'Entertainment',
    views: 112000,
    readTime: '3 min read',
    publishedAt: '6h ago'
  }
];

export const AD_UNITS: Record<string, AdUnit> = {
  leaderboard: {
    id: 'ad-leaderboard-1',
    format: 'leaderboard',
    sponsor: 'Safaricom 5G & M-Pesa Global',
    tagline: 'Connect Across the Continent with Lightning Speed',
    description: 'Experience ultra-fast 5G enterprise broadband and zero-fee continental mobile money transfers. Powering Africa\'s digital future.',
    ctaText: 'Explore Packages',
    ctaLink: '#monetization',
    cpmRate: '$36.50 CPM'
  },
  skyscraper: {
    id: 'ad-skyscraper-1',
    format: 'skyscraper',
    sponsor: 'Pan-African University of Governance & Law',
    tagline: 'Enroll for 2027 Executive Master of Laws',
    description: 'Specialize in International Commercial Arbitration, Constitutional Litigation & Mineral Rights Jurisprudence.',
    ctaText: 'Apply for Scholarship',
    ctaLink: '#monetization',
    cpmRate: '$28.00 CPM'
  },
  companion: {
    id: 'ad-companion-1',
    format: 'companion',
    sponsor: 'Equity Continental Commercial Bank',
    tagline: 'Unlocking Cross-Border Trade & SME Loans',
    description: 'Access unsecured SME working capital loans up to $500,000 within 24 hours via mobile app.',
    ctaText: 'Open Business Account',
    ctaLink: '#monetization',
    cpmRate: '$24.00 CPM'
  },
  mobile_sticky: {
    id: 'ad-mobile-1',
    format: 'mobile_sticky',
    sponsor: 'The AfricaN Mobile App',
    tagline: 'Download The AfricaN App - Instant Breaking News & Court Verdicts',
    description: 'Fast, data-saving news app for Android and iOS.',
    ctaText: 'Install Free',
    ctaLink: '#monetization',
    cpmRate: '$18.00 CPM'
  }
};
