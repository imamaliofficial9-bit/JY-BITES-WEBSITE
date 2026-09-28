import React from 'react';
import { Flame, ArrowRight, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { ASSETS } from '../data/menuData';

interface HeroProps {
  onOrderNowClick: () => void;
  onExploreMenuClick: () => void;
  onAddSignatureToCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOrderNowClick,
  onExploreMenuClick,
  onAddSignatureToCart,
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:py-32 overflow-hidden">
      {/* Dark luxury background glow & radial ember lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#f35c16]/15 via-[#f59e0b]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 right-0 w-[500px] h-[400px] bg-[#f35c16]/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (approx 5-6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c1c24] border border-[#f35c16]/30 text-xs font-bold uppercase tracking-widest text-[#f35c16] mb-6 shadow-sm">
              <Flame className="w-3.5 h-3.5 fill-[#f35c16] text-[#f35c16]" />
              <span>WELCOME TO JYBITES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black font-display text-white tracking-tight leading-[1.04] mb-6 text-balance">
              BIG BITES. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f35c16] via-[#ff7a1a] to-[#f59e0b]">
                BOLD FLAVORS.
              </span>
            </h1>

            {/* Decorative accent divider line */}
            <div className="flex items-center gap-3 mb-6 w-full max-w-md">
              <div className="h-[2px] w-14 bg-[#f35c16]" />
              <div className="h-[1px] flex-1 bg-white/10" />
              <span className="text-[11px] uppercase tracking-wider text-[#9e9a94] font-semibold">Fast Food Redefined</span>
            </div>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl text-[#c4c0b8] leading-relaxed max-w-xl mb-9">
              Fast food made fresh, loaded with flavor, and ready whenever your cravings hit. Double smashed patties, ultra-crispy chicken, and hand-cut loaded sides.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onOrderNowClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold uppercase tracking-wider text-[#0b0b0e] bg-[#f35c16] hover:bg-[#ff722c] active:scale-[0.98] rounded-xl transition-all duration-200 shadow-[0_4px_24px_rgba(243,92,22,0.4)] cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreMenuClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-[#ede8e1] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-[#f35c16]/50 rounded-xl transition-all duration-200 cursor-pointer"
              >
                Explore Menu
              </button>
            </div>

            {/* Trust Markers / Badges (Unboxed metadata style) */}
            <div className="pt-6 border-t border-white/[0.08] w-full flex flex-wrap items-center gap-6 text-xs text-[#9e9a94]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f35c16]" />
                <span className="font-medium text-[#c4c0b8]">100% Fresh Halal Cuts</span>
              </div>
              <span className="hidden sm:inline text-white/20" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#f35c16]" />
                <span className="font-medium text-[#c4c0b8]">15-Min Quick Pickup</span>
              </div>
              <span className="hidden sm:inline text-white/20" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#f35c16]" />
                <span className="font-medium text-[#c4c0b8]">Made Fresh To Order</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Food Photography Showcase (approx 6-7 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center">
            
            {/* Ambient backlight glow */}
            <div className="absolute inset-0 bg-radial from-[#f35c16]/30 via-[#f35c16]/5 to-transparent blur-3xl rounded-full scale-90 -z-10" />

            <div className="relative w-full max-w-xl group">
              {/* Main Food Photography Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#14141a] shadow-[0_20px_60px_rgba(0,0,0,0.8)] aspect-[16/10] sm:aspect-[16/11]">
                <img
                  src={ASSETS.heroBurger}
                  alt="JY Signature Double Smash Burger with melted cheddar, caramelized onions, and signature sauce"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Dark gradient overlay for photographic contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent opacity-60" />

                {/* Corner accent chip */}
                <div className="absolute top-4 left-4 bg-[#0c0c10]/90 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f35c16] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">#1 Best Seller</span>
                </div>
              </div>

              {/* Floating Interactive Product Card */}
              <div className="absolute -bottom-6 -left-4 sm:bottom-4 sm:-left-6 bg-[#16161d]/95 backdrop-blur-md border border-white/[0.12] rounded-2xl p-4 shadow-2xl max-w-[270px] sm:max-w-xs transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-display font-bold text-white text-base">JY Smash Burger</h3>
                    <p className="text-xs text-[#9e9a94] line-clamp-1">Double beef, aged cheddar, JY drip</p>
                  </div>
                  <span className="font-mono font-bold text-[#f35c16] text-lg tabular-nums">$13.99</span>
                </div>
                <button
                  type="button"
                  onClick={onAddSignatureToCart}
                  className="w-full mt-2 py-2 px-3 rounded-lg bg-[#f35c16] hover:bg-[#ff722c] text-[#0b0b0e] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Quick Add to Bag</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quality Seal floating tag */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#181820]/95 backdrop-blur-md border border-white/[0.1] rounded-2xl px-4 py-3 items-center gap-3 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-[#f35c16]/15 flex items-center justify-center text-[#f35c16]">
                  <Flame className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#f35c16]">100% Custom Smash</div>
                  <div className="text-xs font-medium text-[#c4c0b8]">Seared at 450°F</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
