import React, { useState } from 'react';
import { Plus, SlidersHorizontal, Search, Flame } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { CategoryType, MenuItem } from '../types';

interface MenuSectionProps {
  selectedCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
  onQuickAdd: (item: MenuItem) => void;
  onOpenCustomize: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onQuickAdd,
  onOpenCustomize,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySpicy, setOnlySpicy] = useState(false);

  const categories: { label: string; value: CategoryType }[] = [
    { label: 'All Bites', value: 'all' },
    { label: 'Burgers', value: 'burgers' },
    { label: 'Chicken', value: 'chicken' },
    { label: 'Fries', value: 'fries' },
    { label: 'Wraps', value: 'wraps' },
    { label: 'Sides', value: 'sides' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSpicy = !onlySpicy || (item.spicyLevel && item.spicyLevel > 0);

    return matchesCategory && matchesSearch && matchesSpicy;
  });

  return (
    <section id="menu" className="py-24 bg-[#0a0a0d] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#f35c16]/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#f59e0b]/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#f35c16]" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#f35c16]">
                HANDCRAFTED STREET CRAVINGS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
              JYBITES FAVORITES
            </h2>
            <p className="text-base text-[#9e9a94] mt-2">
              The bites our customers keep coming back for.
            </p>
          </div>

          {/* Search & Spicy filter */}
          <div className="flex items-center gap-3">
            <div className="relative min-w-[200px] sm:min-w-[240px]">
              <Search className="w-4 h-4 text-[#9e9a94] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search burger, spicy, truffle..."
                className="w-full bg-[#14141a] text-sm text-white placeholder-[#78756e] pl-9 pr-4 py-2.5 rounded-xl border border-white/[0.08] focus:outline-none focus:border-[#f35c16] transition-colors"
              />
            </div>

            <button
              type="button"
              onClick={() => setOnlySpicy(!onlySpicy)}
              className={`p-2.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                onlySpicy
                  ? 'bg-[#f35c16]/20 border-[#f35c16] text-[#f35c16]'
                  : 'bg-[#14141a] border-white/[0.08] text-[#9e9a94] hover:text-white'
              }`}
              title="Filter spicy items"
            >
              <Flame className="w-4 h-4" />
              <span className="hidden sm:inline">Spicy</span>
            </button>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => onSelectCategory(cat.value)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-[#f35c16] text-[#0b0b0e] shadow-[0_2px_12px_rgba(243,92,22,0.35)]'
                  : 'bg-[#14141a] text-[#c4c0b8] hover:text-white hover:bg-[#1a1a24] border border-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid: 3 cols desktop, 2 tablet, 1 mobile */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-[#121217] rounded-2xl border border-white/[0.06]">
            <p className="text-lg font-bold text-white mb-2">No matching bites found</p>
            <p className="text-sm text-[#9e9a94] mb-6">Try clearing your search query or selecting another category.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setOnlySpicy(false);
                onSelectCategory('all');
              }}
              className="px-5 py-2.5 bg-[#f35c16] text-[#0b0b0e] font-bold text-xs uppercase tracking-wider rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#131318] hover:bg-[#171720] rounded-2xl border border-white/[0.08] hover:border-[#f35c16]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden"
              >
                {/* Image Container with 4:3 Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181822]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-106 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131318] via-transparent to-black/20 opacity-80" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {item.badge && (
                      <span className="bg-[#0b0b0e]/85 backdrop-blur-md border border-white/[0.12] text-[#ede8e1] px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide">
                        {item.badge}
                      </span>
                    )}
                    {item.spicyLevel && item.spicyLevel > 0 ? (
                      <span className="bg-[#f35c16]/90 backdrop-blur-md text-[#0b0b0e] px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                        <Flame className="w-3 h-3 fill-current" />
                        {item.spicyLevel === 3 ? 'Extra Hot' : item.spicyLevel === 2 ? 'Hot' : 'Mild Heat'}
                      </span>
                    ) : null}
                  </div>

                  {/* Calories / Prep info */}
                  {item.calories && (
                    <div className="absolute bottom-3 right-3 text-[11px] font-mono text-[#c4c0b8] bg-[#0b0b0e]/80 backdrop-blur-sm px-2 py-0.5 rounded">
                      {item.calories}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category kicker */}
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#f35c16] mb-1">
                      {item.category}
                    </div>

                    {/* Food Name & Price */}
                    <div className="flex items-baseline justify-between gap-3 mb-2.5">
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-[#f35c16] transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-mono font-bold text-[#f35c16] text-xl tabular-nums shrink-0">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#9e9a94] leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Ingredients list pills / quiet tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.ingredients.slice(0, 3).map((ing, i) => (
                        <span key={i} className="text-[11px] text-[#78756e]">
                          {ing}{i < Math.min(item.ingredients.length, 3) - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Quick Add + Customize */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onQuickAdd(item)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#f35c16] hover:bg-[#ff722c] text-[#0b0b0e] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-md active:scale-[0.98] cursor-pointer"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                      <span>Order Now</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenCustomize(item)}
                      className="py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-[#c4c0b8] hover:text-white border border-white/[0.08] text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                      title="Customize sauces and extras"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Customize</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
