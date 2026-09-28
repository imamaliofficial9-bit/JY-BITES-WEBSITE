import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface ContactSectionProps {
  onOpenDirections: () => void;
  onOrderNowClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenDirections,
  onOrderNowClick,
}) => {
  return (
    <section id="contact" className="py-24 bg-[#0d0d12] border-t border-white/[0.05] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#f35c16] mb-2 block">
            COME SAY HELLO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            VISIT & CONNECT
          </h2>
          <div className="w-12 h-1 bg-[#f35c16] mx-auto mt-4 mb-3" />
          <p className="text-sm sm:text-base text-[#9e9a94]">
            Fresh grill, cold drinks, and fast service waiting for you daily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left card: Info cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Visit Us */}
            <div className="bg-[#131319] p-6 rounded-2xl border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f35c16]/10 flex items-center justify-center text-[#f35c16] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">Visit Us</h3>
                <p className="text-sm text-[#c4c0b8] leading-relaxed">
                  {RESTAURANT_INFO.address}<br />
                  {RESTAURANT_INFO.city}
                </p>
                <div className="mt-3 text-[11px] text-[#9e9a94]">
                  Corner of Lexington &amp; 4th St · Free customer parking
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenDirections}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#f35c16] hover:text-[#ff722c] transition-colors uppercase tracking-wider cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </button>
            </div>

            {/* Call Us */}
            <div className="bg-[#131319] p-6 rounded-2xl border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f35c16]/10 flex items-center justify-center text-[#f35c16] mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">Call Us</h3>
                <p className="text-sm text-[#c4c0b8] leading-relaxed">
                  Direct Line: {RESTAURANT_INFO.displayPhone}<br />
                  Takeaway &amp; Inquiries: {RESTAURANT_INFO.phone}
                </p>
                <div className="mt-3 text-[11px] text-[#9e9a94]">
                  Phone orders accepted during opening hours
                </div>
              </div>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#f35c16] hover:text-[#ff722c] transition-colors uppercase tracking-wider"
              >
                <span>Call Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Hours */}
            <div className="bg-[#131319] p-6 rounded-2xl border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f35c16]/10 flex items-center justify-center text-[#f35c16] mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">Opening Hours</h3>
                <div className="space-y-1.5 text-xs sm:text-sm text-[#c4c0b8]">
                  <p className="flex justify-between gap-2">
                    <span className="text-[#9e9a94]">Mon – Thu:</span>
                    <span className="font-mono font-medium text-white">11:00 AM – 11:00 PM</span>
                  </p>
                  <p className="flex justify-between gap-2">
                    <span className="text-[#9e9a94]">Fri – Sun:</span>
                    <span className="font-mono font-medium text-white">11:00 AM – 12:00 AM</span>
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.04] text-[11px] font-bold text-[#10b981] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span>Kitchen Open Today</span>
              </div>
            </div>

            {/* Email & Catering */}
            <div className="bg-[#131319] p-6 rounded-2xl border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f35c16]/10 flex items-center justify-center text-[#f35c16] mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">Email & Catering</h3>
                <p className="text-sm text-[#c4c0b8] leading-relaxed">
                  General: {RESTAURANT_INFO.email}<br />
                  Party Packs &amp; Large Orders
                </p>
                <div className="mt-3 text-[11px] text-[#9e9a94]">
                  We reply within 2 business hours
                </div>
              </div>

              <a
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#f35c16] hover:text-[#ff722c] transition-colors uppercase tracking-wider"
              >
                <span>Send Message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right card: Interactive Visual Map & Quick Action (5 cols) */}
          <div className="lg:col-span-5 bg-[#14141b] rounded-2xl border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Visual stylized mini map graphic */}
            <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden border border-white/[0.06] bg-[#0d0d12] mb-6 flex items-center justify-center">
              {/* Map grid lines */}
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `linear-gradient(#f35c16 1px, transparent 1px), linear-gradient(90deg, #f35c16 1px, transparent 1px)`,
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="absolute inset-0 bg-radial from-transparent to-[#0d0d12]/90" />
              
              {/* Center Map Pin with pulse */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#f35c16]/30 animate-ping absolute inset-0" />
                  <div className="w-12 h-12 rounded-full bg-[#f35c16] flex items-center justify-center shadow-[0_0_20px_#f35c16] relative z-10 text-[#0b0b0e]">
                    <MapPin className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
                <div className="mt-3 bg-[#16161f] border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                  JYBITES HQ
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Order Ahead for Quick Pickup
              </h3>
              <p className="text-xs sm:text-sm text-[#9e9a94] mb-6 leading-relaxed">
                Skip the line! Place your order through our website and your fresh, sizzling order will be ready at our dedicated express pickup counter in under 15 minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={onOrderNowClick}
                className="flex-1 py-3.5 px-4 rounded-xl bg-[#f35c16] hover:bg-[#ff722c] text-[#0b0b0e] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md text-center cursor-pointer"
              >
                Order Now
              </button>
              <button
                type="button"
                onClick={onOpenDirections}
                className="py-3.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#f35c16]" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
