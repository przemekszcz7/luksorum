import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

interface AboutAgencyProps {
  onContactClick: () => void;
}

export default function AboutAgency({ onContactClick }: AboutAgencyProps) {
  return (
    <section className="py-20 bg-[#FAF9F6] text-[#0F1520]" id="about-section">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Header Column */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-gold-650 font-semibold">O Luksorum</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light leading-tight">
              Ekspertyza <br />
              <span className="font-semibold text-gold-600 block mt-1">i zaufanie</span>
            </h2>
          </div>

          {/* Description Content Column */}
          <div className="w-full md:w-2/3 flex flex-col gap-6 text-stone-600 text-sm font-light leading-relaxed">
            <p className="text-stone-800 text-base font-normal">
              Specjalizujemy się wyłącznie w obrocie nieruchomościami komercyjnymi w Radomiu i regionie. 
              Zapewniamy transakcje oparte na precyzyjnych analizach rynkowych i pełnym bezpieczeństwie prawnym.
            </p>
            <p>
              Zarówno dla inwestorów komercyjnych poszukujących lokali biurowych, handlowych czy gruntów, 
              jak i właścicieli szukających rzetelnych partnerów – oferujemy bezpośrednie i indywidualnie dopasowane doradztwo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
