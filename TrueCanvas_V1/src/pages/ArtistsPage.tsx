import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { artistsConfig } from '../config';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function ArtistsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.artist-card', {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#F7F6F4] min-h-screen font-sans">
      <div ref={containerRef} className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-sans tracking-[0.1em] uppercase mb-8">
            {t('Unsere Artists', 'Our Artists')}
          </h2>
          <p className="max-w-2xl mx-auto font-serif italic text-xl text-charcoal/60 leading-relaxed">
            {t(
              'True Canvas ist ein Kollektiv aus zehn Resident Artists, die technisches Fachwissen mit künstlerischer Leidenschaft verbinden.',
              'True Canvas is a collective of ten resident artists who combine technical expertise with artistic passion.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {artistsConfig.artists.map((artist) => (
            <div key={artist.name} className="artist-card flex flex-col items-center group">
              <div className="aspect-[3/4] w-full bg-[#E5E5E5] mb-6 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                <img
                  src={artist.image} alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center');
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-charcoal/20 uppercase tracking-[0.2em] font-sans">${artist.name}</span>`;
                  }}
                />
              </div>
              <h3 className="text-2xl tracking-[0.1em] uppercase mb-4">{artist.name}</h3>
              <div className="flex flex-col gap-2 items-center text-xs tracking-[0.2em] uppercase">
                {artist.instagram && (
                  <a href={`https://www.instagram.com/${artist.instagram.replace('@', '')}/`}
                    target="_blank" rel="noreferrer"
                    className="text-charcoal/60 hover:text-charcoal transition-colors underline underline-offset-4">
                    {t('Portfolio ansehen', 'View Portfolio')}
                  </a>
                )}
                <a href="https://form.jotform.com/210883790627060" target="_blank" rel="noreferrer"
                  className="text-charcoal/60 hover:text-charcoal transition-colors">
                  {t('Jetzt anfragen', 'Book Now')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
