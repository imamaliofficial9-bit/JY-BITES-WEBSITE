import React from 'react';
import { Sparkles, Flame, Clock, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Freshly Made',
      description: 'Food prepared with care, cooked to order, and served steaming hot every time.',
      icon: <Sparkles className="w-5 h-5 text-[#f35c16]" />,
    },
    {
      title: 'Big Flavor',
      description: 'Bold sauces, proprietary seasonings, and intensely satisfying combinations.',
      icon: <Flame className="w-5 h-5 text-[#f35c16]" />,
    },
    {
      title: 'Quick Service',
      description: 'Fast food efficiency without cutting corners or compromising on taste.',
      icon: <Clock className="w-5 h-5 text-[#f35c16]" />,
    },
    {
      title: 'Quality Ingredients',
      description: 'Carefully selected premium cuts, fresh produce, and house-baked brioche buns.',
      icon: <Award className="w-5 h-5 text-[#f35c16]" />,
    },
  ];

  return (
    <section className="py-20 bg-[#0c0c10] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#f35c16] mb-2 block">
            THE JYBITES DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
            WHY CRAVE JYBITES?
          </h2>
          <div className="w-12 h-1 bg-[#f35c16] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#131319] rounded-2xl p-6 border border-white/[0.06] hover:border-[#f35c16]/30 transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#f35c16]/10 flex items-center justify-center mb-5">
                  {feat.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#9e9a94] leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-[#f35c16] uppercase tracking-widest">
                Standard 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
