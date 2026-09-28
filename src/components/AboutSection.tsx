import React from 'react';
import { ASSETS } from '../data/menuData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0d] border-t border-white/[0.05] relative overflow-hidden">
      
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#f35c16]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Primary Image: Crispy Chicken Burger */}
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] bg-[#14141a] shadow-2xl aspect-[4/3] w-full max-w-lg">
                <img
                  src={ASSETS.crispyChicken}
                  alt="Crispy Chicken Burger with golden seasoning and purple slaw"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Secondary Overlapping Image: Loaded Fries */}
              <div className="absolute -bottom-10 -right-4 sm:-bottom-8 sm:right-4 w-3/5 rounded-2xl overflow-hidden border border-white/[0.15] bg-[#1a1a24] shadow-[0_20px_50px_rgba(0,0,0,0.9)] aspect-[4/3] hidden sm:block">
                <img
                  src={ASSETS.loadedFries}
                  alt="Hot loaded fries with cheese drip and bacon bits"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Decorative accent card */}
              <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-6 bg-[#16161d]/90 backdrop-blur-md border border-[#f35c16]/30 px-5 py-3 rounded-xl shadow-xl">
                <div className="text-[#f35c16] font-display font-black text-2xl">450°F</div>
                <div className="text-[11px] uppercase tracking-wider text-[#c4c0b8] font-bold">Cast Iron Sear</div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-6 flex flex-col items-start pt-6 sm:pt-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#f35c16]" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#f35c16]">
                OUR KITCHEN PHILOSOPHY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-[1.08] mb-6 text-balance">
              MADE FOR SERIOUS CRAVINGS.
            </h2>

            {/* Thin decorative rule */}
            <div className="h-[2px] w-16 bg-[#f35c16] mb-6" />

            <p className="text-base sm:text-lg text-[#c4c0b8] leading-relaxed mb-6">
              At JYBITES, fast food is all about big flavor, fresh preparation, and satisfying every craving. From loaded burgers to crispy chicken and irresistible sides, every bite is made to hit the spot.
            </p>

            <p className="text-sm sm:text-base text-[#9e9a94] leading-relaxed mb-8">
              We never cut corners. Our patties are seared hot on custom planchas to lock in the juices, chicken breasts undergo a 24-hour buttermilk brine before getting double-dredged in signature spice flour, and every single sauce is whisked fresh daily in small batches.
            </p>

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08] w-full">
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-black text-white tabular-nums">
                  100%
                </div>
                <div className="text-xs text-[#9e9a94] mt-0.5 font-medium">Fresh Daily Cuts</div>
              </div>

              <div>
                <div className="font-mono text-2xl sm:text-3xl font-black text-[#f35c16] tabular-nums">
                  24h
                </div>
                <div className="text-xs text-[#9e9a94] mt-0.5 font-medium">Buttermilk Brine</div>
              </div>

              <div>
                <div className="font-mono text-2xl sm:text-3xl font-black text-white tabular-nums">
                  &lt;12m
                </div>
                <div className="text-xs text-[#9e9a94] mt-0.5 font-medium">Average Prep Time</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
