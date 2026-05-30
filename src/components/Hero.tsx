import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreOffers: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreOffers, onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#0F1520] overflow-hidden text-white">
      {/* Dynamic Background Image with soft dark vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
          alt="Luksorum Radom"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1520] via-[#0F1520]/95 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#faf9f6]/100 to-[#faf9f6]/0"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 py-20 flex flex-col items-center text-center gap-6">
        {/* Elegant Minimalist Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight leading-none max-w-3xl"
        >
          Nieruchomości <span className="font-semibold italic text-gold-500">Komercyjne</span>
        </motion.h1>

        {/* Focused Subdesc */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-stone-300 text-sm sm:text-base font-light max-w-xl leading-relaxed mt-2"
        >
          Precyzyjnie dobrane lokalizacje handlowe, biurowe i przemysłowe na terenie Radomia. 
          Profesjonalne doradztwo licencjonowanego eksperta Moniki Rumniak.
        </motion.p>

        {/* Clear Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6"
        >
          <button
            onClick={onExploreOffers}
            className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-[#0F1520] font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            Zobacz oferty
          </button>
          <button
            onClick={onContactClick}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
          >
            Kontakt z agentem
          </button>
        </motion.div>
      </div>

      {/* Bounce Button */}
      <button 
        onClick={onExploreOffers}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
      >
        <ArrowDown className="w-4.5 h-4.5 text-gold-500 animate-bounce" />
      </button>
    </section>
  );
}
