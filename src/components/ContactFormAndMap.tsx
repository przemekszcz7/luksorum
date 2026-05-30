import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Building, Calendar, ShieldCheck } from 'lucide-react';

interface ContactFormAndMapProps {
  prefilledPropertyTitle?: string | null;
  onClearPrefilledTitle?: () => void;
}

export default function ContactFormAndMap({ prefilledPropertyTitle, onClearPrefilledTitle }: ContactFormAndMapProps) {
  useEffect(() => {
    if (prefilledPropertyTitle) {
      const contactEl = document.getElementById('contact-section');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [prefilledPropertyTitle]);

  return (
    <section className="py-24 bg-white text-[#0F1520]" id="contact-section">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Sleek Minimalist Title */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-widest text-gold-600 font-bold block mb-3">Dane kontaktowe i lokalizacja</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight pb-3">
            Skontaktuj się ze <span className="font-semibold italic text-gold-500">Mną</span>
          </h2>
          <p className="text-stone-550 text-xs sm:text-sm font-light leading-relaxed">
            Siedziba biura znajduje się w Radomiu przy ul. Miłej 17. Zachęcam do kontaktu telefonicznego w celu ustalenia terminu spotkania.
          </p>
        </div>

        {/* Dynamic Prefilled Property Banner */}
        {prefilledPropertyTitle && (
          <div className="mb-12 max-w-3xl mx-auto p-4 bg-gold-500/5 border border-gold-500/20 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 text-stone-800">
              <div className="w-8 h-8 rounded bg-gold-500/10 flex items-center justify-center text-gold-700 flex-shrink-0">
                <Building className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-stone-400 font-semibold block">Wybrana oferta do zapytania</span>
                <span className="font-medium text-stone-900">{prefilledPropertyTitle}</span>
              </div>
            </div>
            <button 
              onClick={() => {
                if (onClearPrefilledTitle) onClearPrefilledTitle();
              }}
              className="px-3 py-1.5 bg-[#0F1520] hover:bg-[#0F1520]/90 text-white text-[10px] uppercase tracking-widest font-semibold rounded cursor-pointer transition-colors"
            >
              Wyczyść wybór
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Cards Hub */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <div className="bg-stone-50 border border-stone-200/40 rounded-xl p-6 flex flex-col justify-between h-full">
              <div>
                {/* Agent Profile Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-200/50">
                  <div className="w-14 h-14 rounded-full bg-[#0F1520] overflow-hidden flex-shrink-0 border-2 border-gold-500/20">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" 
                      alt="Monika Rumniak" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-stone-905">Monika Rumniak</h3>
                    <p className="text-[10px] uppercase tracking-wider text-gold-650 font-bold mt-0.5">Licencjonowany Broker</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Phone Call */}
                  <a 
                    href="tel:+48500283333" 
                    className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white border border-transparent hover:border-stone-200/60 transition-all group"
                  >
                    <div className="w-9 h-9 rounded bg-gold-500/10 flex items-center justify-center text-gold-700 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#9CA3AF] font-bold block leading-none mb-1">Zadzwoń bezpośrednio</span>
                      <span className="font-serif text-base font-semibold text-stone-900 group-hover:text-gold-600 transition-colors">
                        500 283 333
                      </span>
                    </div>
                  </a>

                  {/* Mail Contact */}
                  <a 
                    href={prefilledPropertyTitle ? `mailto:monikarumniak@gmail.com?subject=Zapytanie: ${encodeURIComponent(prefilledPropertyTitle)}` : "mailto:monikarumniak@gmail.com"}
                    className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white border border-transparent hover:border-stone-200/60 transition-all group"
                  >
                    <div className="w-9 h-9 rounded bg-gold-500/10 flex items-center justify-center text-gold-700 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#9CA3AF] font-bold block leading-none mb-1">Napisz e-mail</span>
                      <span className="font-serif text-sm font-semibold text-stone-900 group-hover:text-gold-600 transition-colors truncate block">
                        monikarumniak@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Physical Address */}
                  <div className="flex items-start gap-3.5 p-3 rounded-lg">
                    <div className="w-9 h-9 rounded bg-gold-500/10 flex items-center justify-center text-gold-700 flex-shrink-0">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#9CA3AF] font-bold block leading-none mb-1">Adres Kancelarii</span>
                      <span className="font-serif text-xs font-semibold text-stone-900">
                        ul. Miła 17, 26-600 Radom
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal License info foot */}
              <div className="mt-8 pt-6 border-t border-stone-200/50 flex items-center gap-3.5 text-stone-450">
                <div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-600">
                  <ShieldCheck className="w-4.2" />
                </div>
                <div className="text-[10px] leading-tight text-stone-500 font-light">
                  <span className="font-semibold text-stone-700 block mb-0.5">Gwarancja Bezpieczeństwa</span>
                  Państwowa licencja pośrednika w obrocie nieruchomościami.
                </div>
              </div>

            </div>

          </div>

          {/* Map Block */}
          <div className="lg:col-span-7 h-full min-h-[350px]">
            {/* Google map iframe wrapper */}
            <div className="relative w-full h-full min-h-[350px] bg-stone-100 rounded-xl overflow-hidden border border-stone-200 shadow-xs">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.7303844250514!2d21.15634327707084!3d51.40800851795891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47185ed3e2916db7%3A0x49122460d81a1523!2sMi%C5%82a%2017%2C%2026-610%20Radom!5e0!3m2!1spl!2spl!4v1780129619514!5m2!1spl!2spl" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
