import React from 'react';
import { Clock, Flame, ArrowRight, Zap } from 'lucide-react';
import { MenuItem } from '../types';
import { ASSETS } from '../data/menuData';

interface CrunchHourSpecialProps {
  onTrySpecial: (item: MenuItem) => void;
}

export const CrunchHourSpecial: React.FC<CrunchHourSpecialProps> = ({ onTrySpecial }) => {
  const specialItem: MenuItem = {
    id: 'crunch-hour-box',
    name: 'Crunch Hour Crave Box',
    category: 'chicken',
    description: 'Golden double-crunch chicken tenders, hot honey drizzle, loaded seasoned fries, and twin garlic dips.',
    price: 11.99,
    image: ASSETS.crispyChicken,
    badge: 'Chef Choice',
    spicyLevel: 2,
    calories: '810 kcal',
    prepTime: '7-9 min',
    ingredients: ['Buttermilk Tenders', 'Hot Honey Glaze', 'Seasoned Fries', 'Garlic Aioli'],
  };

  return (
    <section id="specials" className="py-14 bg-[#0a0a0d] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121217] rounded-2xl border border-[#f35c16]/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.5)] relative overflow-hidden">
          
          {/* Subtle amber gradient line on top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f35c16] to-transparent" />

          {/* Left: Info */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-[#f35c16]/15 border border-[#f35c16]/30 items-center justify-center shrink-0 text-[#f35c16]">
              <Zap className="w-7 h-7 fill-current" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded bg-[#f35c16]/20 text-[#f35c16] text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  DAILY 3:00 PM – 6:00 PM
                </span>
                <span className="text-xs text-[#9e9a94]">Limited Daily Batch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                CRUNCH HOUR
              </h3>
              <p className="text-sm sm:text-base text-[#c4c0b8] mt-1">
                Extra crispy. Extra loaded. Extra satisfying. Enjoy <span className="text-[#f35c16] font-bold">20% off</span> our signature Crave Box during happy hours.
              </p>
            </div>
          </div>

          {/* Right: Price & CTA */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-white/[0.06]">
            <div className="text-left md:text-right">
              <span className="text-xs text-[#9e9a94] block uppercase font-medium">Crunch Hour Price</span>
              <div className="font-mono font-black text-2xl text-white">
                $11.99 <span className="text-xs text-[#78756e] line-through font-normal">$14.99</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onTrySpecial(specialItem)}
              className="px-6 py-3 rounded-xl bg-[#f35c16] hover:bg-[#ff722c] text-[#0b0b0e] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer active:scale-[0.98] whitespace-nowrap"
            >
              <span>Try Today&apos;s Special</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
