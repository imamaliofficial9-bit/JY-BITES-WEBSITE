import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/menuData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0d] border-t border-white/[0.05] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#f35c16]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#f35c16] mb-2 block">
            REAL FLAVOR STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            THE BITE SPEAKS FOR ITSELF
          </h2>
          <div className="w-12 h-1 bg-[#f35c16] mx-auto mt-4 mb-3" />
          <p className="text-sm sm:text-base text-[#9e9a94]">
            Don’t just take our word for it — hear what hungry burger fans have to say.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#121217] rounded-2xl p-7 border border-white/[0.08] hover:border-[#f35c16]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Header: Stars + Quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10" />
                </div>

                {/* Quote text */}
                <p className="text-sm sm:text-base text-[#c4c0b8] leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#9e9a94]">
                    Favorite: <span className="text-[#ede8e1]">{t.favoriteItem}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-medium text-[#f35c16] bg-[#f35c16]/10 px-2 py-0.5 rounded">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
