import React from 'react';
import { Building2, Phone, Mail, MapPin, ArrowUp, Award } from 'lucide-react';

interface FooterProps {
  onOffersClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

export default function Footer({ onOffersClick, onAboutClick, onContactClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f1520] text-stone-300 pt-16 pb-8 border-t border-gold-500/10 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-12">
        
        {/* Logo & Description */}
        <div className="md:col-span-4 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={scrollToTop}>
            <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-gold-500 bg-brand-800 transition-colors">
              <Building2 className="w-5.5 h-5.5 text-gold-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wider uppercase text-white leading-none">
                Luksorum
              </span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-gold-500 font-medium">
                Nieruchomości Komercyjne
              </span>
            </div>
          </div>

          <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
            Ekskluzywne i profesjonalne doradztwo w zakresie komercyjnego rynku nieruchomości w Radomiu. Pomagamy firmom i inwestorom osiągać najlepsze wyniki z najmu i inwestycji gruntowo-lokalowych.
          </p>

          <div className="flex items-center gap-2 mt-2 px-3 py-1.5 rounded bg-brand-800/50 border border-white/5 text-[10px] text-stone-400">
            <Award className="w-3.5 h-3.5 text-gold-500" />
            <span>Licencjonowany pośrednik nr 24892</span>
          </div>
        </div>

        {/* Quick navigation */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-gold-500 pl-2">
            Nawigacja strony
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={scrollToTop} className="hover:text-gold-500 transition-colors cursor-pointer text-left py-0.5">
                Strona główna / Start
              </button>
            </li>
            <li>
              <button onClick={onOffersClick} className="hover:text-gold-500 transition-colors cursor-pointer text-left py-0.5">
                Oferty Lokali i Działek
              </button>
            </li>
            <li>
              <button onClick={onAboutClick} className="hover:text-gold-500 transition-colors cursor-pointer text-left py-0.5">
                O Naszej Agencji
              </button>
            </li>
            <li>
              <button onClick={onContactClick} className="hover:text-gold-500 transition-colors cursor-pointer text-left py-0.5">
                Dane i formularz kontaktowy
              </button>
            </li>
          </ul>
        </div>

        {/* Real address & details requested */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-gold-500 pl-2">
            Luksorum Nieruchomości
          </h4>
          <div className="space-y-3.5 text-xs text-stone-400 font-light">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
              <span>
                ul. Miła 17,<br />
                26-600 Radom
              </span>
            </div>
            
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <a href="tel:+48500283333" className="hover:text-white transition-colors">
                500 283 333
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <a href="mailto:monikarumniak@gmail.com" className="hover:text-white transition-colors break-all">
                monikarumniak@gmail.com
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Corporate disclaimer and Back-Of-Page navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-stone-500 uppercase tracking-widest font-semibold">
        <span>
          &copy; {new Date().getFullYear()} LUKSORUM NIERUCHOMOŚCI RADOM. Wszystkie prawa zastrzeżone.
        </span>
        <div className="flex items-center gap-4">
          <button 
            onClick={scrollToTop}
            className="p-2.5 bg-brand-800 hover:bg-gold-500 text-stone-350 hover:text-brand-900 rounded-lg transition-all duration-300 cursor-pointer shadow-md"
            title="Przejdź na górę strony"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
