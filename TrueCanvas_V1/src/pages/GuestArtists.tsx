import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const guestArtists = [
  { name: 'ophelia.tattoo', style: 'Blackwork / Illustrativ', dates: '2.3. – 12.3.', image: '/images/guests/ophelia.tattoo.webp', instagram: 'https://instagram.com/ophelia.tattoo' },
  { name: 'shavelkina', style: 'Neo Traditional / Realismus', dates: '2.3. – 8.3.', image: '/images/guests/shavelkina-1.webp', instagram: 'https://instagram.com/shavelkina' },
  { name: 'mannytatt', style: 'Fineline / Abstrakt', dates: '2.3. – 8.3.', image: '/images/guests/mannytatt.webp', instagram: 'https://instagram.com/mannytatt' },
  { name: 'ruby.tattooist', style: 'Illustrativ / Concept Art', dates: '5.3. – 8.3.', image: '/images/guests/ruby__lights.webp', instagram: 'https://instagram.com/ruby.tattooist' },
  { name: 'osmanergin_', style: 'Fineline / Sketchy', dates: '6.3. – 9.3.', image: '/images/guests/osmanergin_.webp', instagram: 'https://instagram.com/osmanergin_' },
  { name: 'gizemgunertattoo', style: 'Floral / Watercolor', dates: '6.3. – 8.3.', image: '/images/guests/gizemgunertatto.webp', instagram: 'https://instagram.com/gizemgunertattoo' },
  { name: 'canerimozen', style: 'Blackwork / Geometrisch', dates: '6.3. – 8.3.', image: '/images/guests/canerimozen.webp', instagram: 'https://instagram.com/canerimozen' },
  { name: 'annamaria.tattoo', style: 'Illustrativ / Dark Art', dates: '9.3. – 15.3.', image: '/images/guests/annamaria.tattoo.webp', instagram: 'https://instagram.com/annamaria.tattoo' },
  { name: 'talala_tattoo', style: 'Realismus / Fineline', dates: '9.3. – 15.3.', image: '/images/guests/talala_tattoo.webp', instagram: 'https://instagram.com/talala_tattoo' },
  { name: 'vlada.s.tattoo', style: 'Floral / Ornamental', dates: '9.3. – 15.3.', image: '/images/guests/vlada.s.tattoo.webp', instagram: 'https://instagram.com/vlada.s.tattoo' },
];

export default function GuestArtists() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.guest-header', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.guest-card', {
        y: 60, opacity: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.guest-grid', start: 'top 85%' },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#F7F6F4] min-h-screen font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="guest-header text-center mb-16 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] text-charcoal/40 uppercase font-sans mb-4">
            {t('Internationale Künstler in Wien', 'International Artists in Vienna')}
          </p>
          <h1 className="text-4xl md:text-5xl font-sans tracking-[0.15em] uppercase text-charcoal mb-6">
            Guest Artists
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-charcoal/50 max-w-2xl mx-auto leading-relaxed">
            {t(
              'Regelmäßig begrüßen wir internationale Gastkünstler in unserem Studio. Jeder bringt seinen eigenen Stil und seine eigene Perspektive mit.',
              'We regularly welcome international guest artists to our studio. Each one brings their own style and unique perspective.'
            )}
          </p>
        </div>

        <div className="mb-10">
          <p className="text-[11px] tracking-[0.2em] text-charcoal/30 uppercase font-sans">
            {t('März 2026', 'March 2026')}
          </p>
          <div className="w-full h-[0.5px] bg-charcoal/10 mt-3" />
        </div>

        <div className="guest-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
          {guestArtists.map((artist, i) => (
            <a key={i} href={artist.instagram} target="_blank" rel="noopener noreferrer" className="guest-card group">
              <div className="overflow-hidden bg-[#E5E5E5] mb-3">
                <img src={artist.image} alt={artist.name}
                  className="w-full aspect-square object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale-[20%]"
                  loading="lazy" />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[13px] font-sans text-charcoal/90 tracking-wide group-hover:text-charcoal transition-colors">
                    @{artist.name}
                  </p>
                  <p className="text-[11px] text-charcoal/50 mt-0.5">{artist.dates}</p>
                </div>
                <Instagram className="w-3.5 h-3.5 text-charcoal/20 group-hover:text-charcoal/50 transition-colors mt-0.5 shrink-0" />
              </div>
              <p className="text-[11px] text-charcoal/40 mt-1 tracking-wide">{artist.style}</p>
            </a>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-serif text-charcoal/40 text-base mb-6">
            {t('Du möchtest als Guest Artist bei uns arbeiten?', 'Want to work as a guest artist with us?')}
          </p>
          <a href="https://form.jotform.com/210883790627060" target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-3 border border-charcoal/15 text-[11px] tracking-[0.2em] text-charcoal/60 uppercase hover:bg-charcoal hover:text-white transition-all duration-500">
            {t('Jetzt bewerben', 'Apply Now')}
          </a>
        </div>
      </div>
    </div>
  );
}
