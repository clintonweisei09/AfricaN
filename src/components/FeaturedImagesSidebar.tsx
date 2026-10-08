import React, { useState, useEffect } from 'react';
import { Camera, MapPin, ChevronRight, RefreshCw, Eye } from 'lucide-react';
import { resolveMediaUrl } from '../utils/media';

interface FeaturedImageItem {
  id: string;
  title: string;
  imageUrl: string;
  location: string;
  photographer: string;
  category: string;
}

const FEATURED_IMAGES_POOL: FeaturedImageItem[] = [
  {
    id: 'fimg-1',
    title: 'East Africa High-Speed Standard Gauge Rail Testing',
    imageUrl: '/src/assets/images/african_politics_summit_1791231284594.jpg',
    location: 'Nairobi Terminus, Kenya',
    photographer: 'Clinton Weisei',
    category: 'Infrastructure'
  },
  {
    id: 'fimg-2',
    title: 'Silicon Savannah 2nm Semiconductor Testing Cleanroom',
    imageUrl: '/src/assets/images/african_fintech_hub_1791232334696.jpg',
    location: 'Konza Technopolis',
    photographer: 'Clinton Weisei',
    category: 'Technology'
  },
  {
    id: 'fimg-3',
    title: 'Olkaria Geothermal Turbine Hall at Sunset',
    imageUrl: '/src/assets/images/green_energy_grid_1791229322913.jpg',
    location: 'Rift Valley, Naivasha',
    photographer: 'Clinton Weisei',
    category: 'Clean Energy'
  },
  {
    id: 'fimg-4',
    title: 'Continental Football Qualifiers: 60,000 Fans Roar',
    imageUrl: '/src/assets/images/sports_stadium_championship_1791229879952.jpg',
    location: 'Kasarani Stadium',
    photographer: 'Clinton Weisei',
    category: 'Sports Arena'
  },
  {
    id: 'fimg-5',
    title: 'Supreme Court Deliberates Landmark Sovereign Protocol',
    imageUrl: '/src/assets/images/corridors_court_judge_1791231272938.jpg',
    location: 'Supreme Court, Nairobi',
    photographer: 'Clinton Weisei',
    category: 'Corridors of Power'
  },
  {
    id: 'fimg-6',
    title: 'Pan-African Creative Arts & Red Carpet Gala',
    imageUrl: '/src/assets/images/african_entertainment_awards_1791231296253.jpg',
    location: 'Carnivore Grounds',
    photographer: 'Clinton Weisei',
    category: 'Culture & Entertainment'
  }
];

interface FeaturedImagesSidebarProps {
  onSelectImage?: (item: FeaturedImageItem) => void;
}

export const FeaturedImagesSidebar: React.FC<FeaturedImagesSidebarProps> = ({ onSelectImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Auto-change featured images smoothly every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % FEATURED_IMAGES_POOL.length);
        setIsFading(false);
      }, 250);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const currentItem = FEATURED_IMAGES_POOL[currentIndex];

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % FEATURED_IMAGES_POOL.length);
      setIsFading(false);
    }, 150);
  };

  return (
    <div className="border-2 border-red-600 bg-white rounded-xl overflow-hidden shadow-xs select-none">
      
      {/* Red Header Bar (Signature Corridors of Power Design) */}
      <div className="bg-red-600 text-white px-3.5 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          <h3 className="font-sans font-black text-sm uppercase tracking-wide text-white">
            Featured Images
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-mono bg-black/40 px-1.5 py-0.5 rounded uppercase font-bold text-yellow-300 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping"></span>
            Spotlight
          </span>
          <button
            onClick={handleNext}
            className="text-white p-1 hover:bg-red-700 rounded transition-colors"
            title="Next featured image"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Subtitle */}
      <div className="bg-red-50/80 px-3.5 py-1.5 border-b border-red-100 text-[10px] text-red-950 font-bold">
        Live Photojournalism & Breaking Field Visuals
      </div>

      {/* Main Changing Featured Image Card */}
      <div className="p-3 space-y-2.5">
        <div 
          onClick={() => onSelectImage?.(currentItem)}
          className="relative rounded-lg overflow-hidden bg-slate-900 border border-slate-200 aspect-16/10 group cursor-pointer"
        >
          <img
            src={resolveMediaUrl(currentItem.imageUrl)}
            alt={currentItem.title}
            className={`w-full h-full object-cover transition-all duration-300 transform group-hover:scale-105 ${
              isFading ? 'opacity-30' : 'opacity-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

          {/* Top Badges */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
            <span className="bg-red-600 text-white font-mono text-[9px] font-bold uppercase px-1.5 py-0.5 rounded shadow-xs">
              {currentItem.category}
            </span>
            <span className="bg-black/70 text-slate-200 font-mono text-[9px] px-1.5 py-0.5 rounded flex items-center gap-1 border border-white/10">
              <MapPin className="w-2.5 h-2.5 text-red-400" />
              <span className="truncate max-w-[120px]">{currentItem.location}</span>
            </span>
          </div>

          {/* Bottom Title Overlay */}
          <div className="absolute bottom-2 left-2 right-2 space-y-0.5">
            <h4 className="text-xs font-bold text-white group-hover:text-yellow-300 transition-colors leading-tight line-clamp-2">
              {currentItem.title}
            </h4>
            <div className="flex items-center justify-between text-[9px] text-slate-300 font-mono pt-0.5">
              <span>Photo: {currentItem.photographer}</span>
              <span className="text-yellow-300 font-bold flex items-center gap-0.5">
                <span>View</span>
                <ChevronRight className="w-2.5 h-2.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-0.5">
          {FEATURED_IMAGES_POOL.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-11 h-8 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                idx === currentIndex
                  ? 'border-red-600 ring-1 ring-red-400 scale-105'
                  : 'border-slate-200 opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={resolveMediaUrl(item.imageUrl)}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white px-3 py-1.5 text-center text-[10px] font-mono flex items-center justify-between">
        <span>The AfricaN Visual Wire</span>
        <span className="text-yellow-400 font-bold">Field Dispatch</span>
      </div>
    </div>
  );
};
