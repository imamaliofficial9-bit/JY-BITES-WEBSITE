import React from 'react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/menuData';
import { CategoryType } from '../types';

interface FooterProps {
  onSelectCategory: (category: CategoryType) => void;
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer className="bg-[#070709] border-t border-white/[0.08] pt-16 pb-12 text-[#9e9a94]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.06]">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-block mb-4">
              <Logo size="md" showSubtext />
            </a>
            <p className="text-sm text-[#9e9a94] leading-relaxed max-w-sm mb-6">
              JYBITES is a premium fast-food destination serving unapologetically bold smash burgers, golden crispy buttermilk chicken, and loaded hand-cut fries crafted fresh to order.
            </p>
            <div className="text-xs text-[#78756e]">
              <p>Kitchen Hours: 11:00 AM – Late Night</p>
              <p className="mt-1">Dine-in · Takeaway · Fast Delivery</p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-[#f35c16] transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#f35c16] transition-colors">Menu</a>
              </li>
              <li>
                <a href="#combos" className="hover:text-[#f35c16] transition-colors">Combos &amp; Deals</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#f35c16] transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#specials" className="hover:text-[#f35c16] transition-colors">Daily Specials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#f35c16] transition-colors">Visit &amp; Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Menu Categories (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Menu
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('burgers');
                    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#f35c16] transition-colors text-left"
                >
                  Burgers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('chicken');
                    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#f35c16] transition-colors text-left"
                >
                  Crispy Chicken
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('fries');
                    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#f35c16] transition-colors text-left"
                >
                  Fries &amp; Loaded Sides
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('wraps');
                    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#f35c16] transition-colors text-left"
                >
                  Wraps &amp; Snacks
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('sides');
                    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#f35c16] transition-colors text-left"
                >
                  Croquettes &amp; Dips
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-[#c4c0b8] font-mono text-xs">
                {RESTAURANT_INFO.phone}
              </li>
              <li>
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-[#f35c16] transition-colors text-xs">
                  {RESTAURANT_INFO.email}
                </a>
              </li>
              <li className="text-xs text-[#78756e] pt-1 leading-normal">
                {RESTAURANT_INFO.address}
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#f35c16] transition-colors flex items-center gap-1.5">
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#f35c16] transition-colors flex items-center gap-1.5">
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-[#f35c16] transition-colors flex items-center gap-1.5">
                  <span>TikTok</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78756e]">
          <div>
            &copy; 2026 JYBITES. All rights reserved. Built for serious cravings.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Nutritional Info</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
