import React, { useState } from 'react';
import { Phone, Mail, MapPin, Building2, Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onOffersClick: () => void;
  onAboutClick: () => void;
}

export default function Navbar({ onContactClick, onOffersClick, onAboutClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-900/95 backdrop-blur-md shadow-lg border-b border-gold-500/10 text-white transition-all duration-300">
      {/* Upper bar with direct contacts */}
      <div className="hidden md:flex w-full bg-[#121824] border-b border-gold-500/10 py-2.5 text-xs text-stone-300">
        <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 transition-colors hover:text-gold-500">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              ul. Miła 17, Radom 26-600
            </span>
            <a href="mailto:monikarumniak@gmail.com" className="flex items-center gap-1.5 transition-colors hover:text-gold-500">
              <Mail className="w-3.5 h-3.5 text-gold-500" />
              monikarumniak@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">Agencja Nieruchomości Komercyjnych</span>
            <div className="w-1 h-1 rounded-full bg-gold-500"></div>
            <a href="tel:+48500283333" className="flex items-center gap-1.5 font-medium transition-colors text-gold-200 hover:text-white">
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              500 283 333
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative flex items-center justify-center w-11 h-11 rounded-lg border border-gold-500 bg-brand-800 transition-all duration-300 group-hover:bg-gold-500/10">
            <Building2 className="w-6 h-6 text-gold-500 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500 to-transparent rounded-lg opacity-20 blur-sm group-hover:opacity-40 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider uppercase text-white leading-none">
              Luksorum
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-gold-500 font-medium">
              Nieruchomości Komercyjne
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-medium text-stone-200">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-gold-500 cursor-pointer transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
          >
            Start
          </button>
          <button 
            onClick={onOffersClick}
            className="hover:text-gold-500 cursor-pointer transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
          >
            Oferty
          </button>
          <button 
            onClick={onAboutClick}
            className="hover:text-gold-500 cursor-pointer transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
          >
            O Nas
          </button>
          <button 
            onClick={onContactClick}
            className="hover:text-gold-500 cursor-pointer transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
          >
            Kontakt
          </button>
        </nav>

        {/* Call To Action Direct Button */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+48500283333"
            className="px-5 py-2.5 rounded-md border border-gold-500/40 text-gold-500 hover:bg-gold-500 hover:text-brand-900 transition-all duration-300 text-sm font-semibold flex items-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4" />
            Zadzwoń Teraz
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-md border border-stone-700 text-stone-300 hover:text-white hover:bg-brand-800 transition-all"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Panel */}
      {isOpen && (
        <div className="md:hidden w-full border-t border-gold-500/10 bg-brand-900 text-white flex flex-col px-6 py-6 gap-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="text-left py-2 border-b border-stone-800 hover:text-gold-500 transition-colors"
            >
              Start
            </button>
            <button
              onClick={() => {
                onOffersClick();
                setIsOpen(false);
              }}
              className="text-left py-2 border-b border-stone-800 hover:text-gold-500 transition-colors"
            >
              Oferty
            </button>
            <button
              onClick={() => {
                onAboutClick();
                setIsOpen(false);
              }}
              className="text-left py-2 border-b border-stone-800 hover:text-gold-500 transition-colors"
            >
              O Nas
            </button>
            <button
              onClick={() => {
                onContactClick();
                setIsOpen(false);
              }}
              className="text-left py-2 border-b border-stone-800 hover:text-gold-500 transition-colors"
            >
              Kontakt
            </button>
          </div>

          <div className="flex flex-col gap-3 py-4 border-t border-stone-800">
            <div className="flex items-center gap-3 text-sm text-stone-300">
              <Phone className="w-4 h-4 text-gold-500" />
              <a href="tel:+48500283333" className="hover:text-gold-500 transition-colors">500 283 333</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-stone-300">
              <Mail className="w-4 h-4 text-gold-500" />
              <a href="mailto:monikarumniak@gmail.com" className="hover:text-gold-500 transition-colors">monikarumniak@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-gold-500" />
              <span>ul. Miła 17, Radom 26-600</span>
            </div>
          </div>

          <a
            href="tel:+48500283333"
            className="w-full text-center py-3 rounded bg-gradient-to-r from-gold-600 to-gold-500 text-brand-900 font-bold tracking-wide transition-all shadow-md active:bg-gold-700"
          >
            Zadzwoń: 500 283 333
          </a>
        </div>
      )}
    </header>
  );
}
