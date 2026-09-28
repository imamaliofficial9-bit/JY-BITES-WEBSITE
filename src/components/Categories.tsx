import React from 'react';
import { ArrowUpRight, Flame, Drumstick, UtensilsCrossed, Sandwich } from 'lucide-react';
import { CATEGORIES } from '../data/menuData';
import { CategoryType } from '../types';

interface CategoriesProps {
  onSelectCategory: (categoryId: CategoryType) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'burgers':
        return <Flame className="w-5 h-5 text-[#f35c16]" />;
      case 'chicken':
        return <Drumstick className="w-5 h-5 text-[#f35c16]" />;
      case 'fries':
        return <UtensilsCrossed className="w-5 h-5 text-[#f35c16]" />;
      case 'wraps':
        return <Sandwich className="w-5 h-5 text-[#f35c16]" />;
      default:
        return <Flame className="w-5 h-5 text-[#f35c16]" />;
    }
  };

  return (
    <section className="py-20 bg-[#0d0d10] border-y border-white/[0.05] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#f35c16] mb-2 block">
            EXPLORE OUR FLAVORS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight mb-4 text-balance">
            WHAT ARE YOU CRAVING?
          </h2>
          <div className="w-12 h-1 bg-[#f35c16] mx-auto mb-4" />
          <p className="text-base sm:text-lg text-[#9e9a94]">
            Pick your favorite. We’ll handle the rest.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as CategoryType)}
              className="group relative bg-[#14141a] hover:bg-[#181822] rounded-2xl border border-white/[0.08] hover:border-[#f35c16]/50 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a22]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14141a] via-[#14141a]/30 to-transparent opacity-90" />
                
                {/* Category Count */}
                <div className="absolute top-3 right-3 bg-[#0d0d11]/80 backdrop-blur-sm border border-white/[0.08] px-2.5 py-1 rounded-md text-[11px] font-medium text-[#c4c0b8]">
                  {cat.itemCount}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-[#f35c16]/10">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#f35c16] transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9e9a94] leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-[#f35c16] uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
                  <span>Explore Menu</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
