import React from 'react';
import { X, MapPin, Navigation, Car, Train, Clock, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectionsModal: React.FC<DirectionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#14141a] rounded-3xl border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 bg-[#181822] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Navigation className="w-5 h-5 text-[#f35c16]" />
            <h3 className="font-display font-black text-xl text-white">
              Directions to JYBITES
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#9e9a94] hover:text-white hover:bg-white/[0.06]"
            aria-label="Close directions modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-sm">
          {/* Main Address */}
          <div className="p-4 rounded-2xl bg-[#1b1b24] border border-white/[0.08] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#f35c16]/15 flex items-center justify-center text-[#f35c16] shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-base">
                {RESTAURANT_INFO.name} Flagship
              </div>
              <p className="text-[#c4c0b8] text-xs sm:text-sm mt-0.5">
                {RESTAURANT_INFO.address}<br />
                {RESTAURANT_INFO.city}
              </p>
              <span className="text-[11px] text-[#f35c16] font-semibold block mt-1">
                Corner of Lexington Blvd &amp; 4th Avenue
              </span>
            </div>
          </div>

          {/* Transportation Details */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-xs text-[#c4c0b8]">
              <Car className="w-4 h-4 text-[#f35c16] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">By Car &amp; Parking</span>
                <span>Dedicated customer parking lot located behind the restaurant on 4th Ave. 45-minute validation with any meal purchase.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-[#c4c0b8]">
              <Train className="w-4 h-4 text-[#f35c16] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Public Transit</span>
                <span>Lexington Station (Line 4, 5, 6) — Exit North, 2-minute walking distance toward Food District.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-[#c4c0b8]">
              <Clock className="w-4 h-4 text-[#f35c16] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Service Hours</span>
                <span>Mon-Thu 11am-11pm · Fri-Sun 11am-12am Midnight</span>
              </div>
            </div>
          </div>

          {/* Action links */}
          <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="py-3.5 px-4 rounded-xl bg-[#f35c16] hover:bg-[#ff722c] text-[#0b0b0e] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>

            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="py-3.5 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#f35c16]" />
              <span>Call Host: {RESTAURANT_INFO.displayPhone}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
