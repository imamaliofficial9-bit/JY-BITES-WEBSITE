import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/menuData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOrderNowClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOrderNowClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Menu', href: '#menu' },
    { label: 'Combos', href: '#combos' },
    { label: 'About', href: '#about' },
    { label: 'Specials', href: '#specials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0c0f]/95 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5'
            : 'bg-transparent border-b border-white/[0.04] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single element Brand Wordmark */}
            <a href="#" className="flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f35c16]">
              <Logo size="md" />
            </a>

            {/* Zone 2: Navigation Links (single line, subtle hover) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#c4c0b8]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f35c16] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions (Cart + Order Now) */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-2.5 rounded-lg bg-[#181820] hover:bg-[#22222c] border border-white/[0.08] text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f35c16]"
                aria-label={`Open shopping cart, ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5 text-[#f35c16]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-[#f35c16] text-[#0b0b0e] font-bold text-xs flex items-center justify-center shadow-lg font-mono">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={onOrderNowClick}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold tracking-wide uppercase text-[#0b0b0e] bg-[#f35c16] hover:bg-[#ff722c] active:scale-[0.98] rounded-lg transition-all duration-200 shadow-[0_2px_14px_rgba(243,92,22,0.35)] whitespace-nowrap"
              >
                Order Now
              </button>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-[#181820] text-[#c4c0b8] hover:text-white border border-white/[0.08]"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-[65px] left-0 right-0 bg-[#121217] border-b border-white/[0.1] shadow-2xl p-6 flex flex-col gap-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#ede8e1] hover:bg-white/[0.05] hover:text-[#f35c16] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOrderNowClick();
                }}
                className="w-full py-3 text-center font-bold tracking-wide uppercase text-[#0b0b0e] bg-[#f35c16] hover:bg-[#ff722c] rounded-lg transition-colors shadow-lg"
              >
                Order Now
              </button>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#c4c0b8] hover:text-white"
              >
                <Phone className="w-4 h-4 text-[#f35c16]" />
                <span>Call to Order: {RESTAURANT_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
