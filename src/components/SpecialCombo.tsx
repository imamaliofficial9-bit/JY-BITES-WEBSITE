import React from 'react';
import { ArrowRight, CheckCircle2, Flame, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/menuData';
import { MenuItem } from '../types';

interface SpecialComboProps {
  onOrderCombo: (comboItem: MenuItem) => void;
}

export const SpecialCombo: React.FC<SpecialComboProps> = ({ onOrderCombo }) => {
  const comboItem: MenuItem = {
    id: 'the-jybites-combo',
    name: 'The Ultimate JYBITES Combo',
    category: 'burgers',
    description: 'Double Angus Smash Burger, golden hand-cut crispy fries, 4 pc spicy chicken bites, signature dipping sauce & cold craft soda.',
    price: 18.99,
    image: ASSETS.comboFeast,
    badge: 'Popular',
    calories: '1,240 kcal',
    prepTime: '10-12 min',
    ingredients: ['JY Smash Burger', 'Loaded Hand-Cut Fries', 'Spicy Bites (4pc)', 'Cold Beverage', 'Signature Sauce'],
  };

  return (
    <section id="combos" className="py-24 bg-[#0d0d12] relative overflow-hidden">
      {/* Warm accent background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#f35c16]/15 via-[#f59e0b]/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#16161d] via-[#141419] to-[#121217] rounded-3xl border border-[#f35c16]/30 p-8 sm:p-12 lg:p-16 shadow-[0_20px_70px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          {/* Subtle diagonal stripe accent */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#f35c16]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Col: Offer details & CTAs */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f35c16]/20 border border-[#f35c16]/40 text-xs font-black uppercase tracking-widest text-[#f35c16] mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>COMBO DEAL · SAVE $6.00</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-[1.08] mb-4 text-balance">
                THE JYBITES COMBO
              </h2>

              {/* Copy */}
              <p className="text-base sm:text-lg text-[#c4c0b8] leading-relaxed mb-6">
                Your favorite burger, crispy fries, and a refreshing drink — all in one seriously satisfying meal. Upgrade your bite without breaking your budget.
              </p>

              {/* Combo includes list */}
              <div className="space-y-3 mb-8 w-full">
                {[
                  'Double Prime Smash Burger or Crispy Chicken Burger',
                  'Fresh hand-cut seasoned russet fries with sea salt',
                  'Crispy spicy buttermilk chicken bites (4 pcs)',
                  'Choice of handcrafted craft soda or iced refresher',
                  'Two house-made dipping sauces (JY Secret Sauce + Garlic Aioli)',
                ].map((perk, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#ede8e1]">
                    <CheckCircle2 className="w-4 h-4 text-[#f35c16] shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              {/* Price & Action */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/[0.08] w-full">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-[#f35c16] tabular-nums">
                      $18.99
                    </span>
                    <span className="font-mono text-base text-[#78756e] line-through tabular-nums">
                      $24.99
                    </span>
                  </div>
                  <span className="text-[11px] text-[#9e9a94] uppercase tracking-wider font-semibold">
                    Complete Feast Value
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onOrderCombo(comboItem)}
                  className="px-8 py-3.5 rounded-xl bg-[#f35c16] hover:bg-[#ff722c] text-[#0b0b0e] font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_4px_20px_rgba(243,92,22,0.4)] flex items-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <span>Order Combo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Col: High-impact Food Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#1a1a22] shadow-[0_16px_40px_rgba(0,0,0,0.7)] group aspect-[16/10] sm:aspect-[16/11]">
                <img
                  src={ASSETS.comboFeast}
                  alt="The Ultimate JYBITES Combo feast featuring burger, loaded fries, chicken bites and iced beverage"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13]/80 via-transparent to-transparent" />

                {/* Floating promo badge */}
                <div className="absolute bottom-4 right-4 bg-[#0b0b0e]/90 backdrop-blur-md border border-[#f35c16]/40 px-4 py-2 rounded-xl flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f35c16] animate-pulse" />
                  <span className="text-xs font-black tracking-wide text-white uppercase">Most Ordered Bundle</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
