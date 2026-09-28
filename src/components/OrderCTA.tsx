import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { ASSETS } from '../data/menuData';

interface OrderCTAProps {
  onOrderNowClick: () => void;
  onViewMenuClick: () => void;
}

export const OrderCTA: React.FC<OrderCTAProps> = ({ onOrderNowClick, onViewMenuClick }) => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#09090b]">
      {/* Background food image with measured dark contrast scrim */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.heroBurger}
          alt="JYBITES Gourmet Fast Food Craving"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#09090c]/88 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-[#09090c]/60 to-[#09090c]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Flame badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f35c16]/20 border border-[#f35c16]/40 text-xs font-black uppercase tracking-widest text-[#f35c16] mb-6 shadow-md">
          <Flame className="w-4 h-4 fill-current" />
          <span>SERVED HOT & FRESH</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-[1.05] mb-6">
          HUNGRY YET?
        </h2>

        {/* Copy */}
        <p className="text-lg sm:text-xl text-[#c4c0b8] max-w-2xl mx-auto leading-relaxed mb-10">
          Your next favorite bite is waiting. Order your JYBITES favorites and make your craving count. Available for dine-in, fast takeaway, or rapid local delivery.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOrderNowClick}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#f35c16] hover:bg-[#ff722c] text-[#0b0b0e] font-extrabold text-base uppercase tracking-wider transition-all duration-200 shadow-[0_4px_25px_rgba(243,92,22,0.45)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span>Order Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={onViewMenuClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-[#ede8e1] font-bold text-base transition-colors cursor-pointer"
          >
            View Full Menu
          </button>
        </div>

      </div>
    </section>
  );
};
