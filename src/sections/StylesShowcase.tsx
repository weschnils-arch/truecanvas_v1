import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const styles = [
  { name: 'Blackwork', artist: '@ophelia.tattoo', image: '/images/guests/ophelia.tattoo.webp' },
  { name: 'Illustrativ', artist: '@annamaria.tattoo', image: '/images/guests/annamaria.tattoo.webp' },
  { name: 'Fineline', artist: '@mannytatt', image: '/images/guests/mannytatt.webp' },
  { name: 'Floral', artist: '@vlada.s.tattoo', image: '/images/guests/vlada.s.tattoo.webp' },
  { name: 'Realismus', artist: '@talala_tattoo', image: '/images/guests/talala_tattoo.webp' },
  { name: 'Neo Traditional', artist: '@shavelkina', image: '/images/guests/shavelkina-1.webp' },
];

export function StylesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.showcase-head',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );

      gsap.fromTo('.showcase-card',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.showcase-card', start: 'top 88%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 md:py-36 bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="showcase-head flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <p className="text-[11px] tracking-archive uppercase text-charcoal/40 mb-5">
              {t('Vielfalt in Perfektion', 'Diversity in Perfection')}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.06em] uppercase text-charcoal">
              {t('Stile & Künstler', 'Styles & Artists')}
            </h2>
          </div>
          <Link to="/artists"
            className="inline-block px-10 py-4 border border-charcoal/15 text-[11px] tracking-archive uppercase text-charcoal hover:bg-charcoal hover:text-paper transition-all duration-500 self-start md:self-auto">
            {t('Alle Artists entdecken', 'Discover All Artists')}
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          <div className="showcase-card col-span-2 md:col-span-1 md:row-span-2">
            <div className="group relative overflow-hidden h-full">
              <img src={styles[0].image} alt={styles[0].name}
                className="w-full h-full min-h-[400px] md:min-h-0 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="text-paper/60 text-[10px] tracking-journal uppercase mb-1">{styles[0].artist}</p>
                <p className="text-paper text-sm md:text-base tracking-archive uppercase">{styles[0].name}</p>
              </div>
            </div>
          </div>

          {styles.slice(1, 5).map((style, i) => (
            <div key={i} className="showcase-card">
              <div className="group relative overflow-hidden">
                <img src={style.image} alt={style.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 md:p-6">
                  <p className="text-paper/60 text-[10px] tracking-journal uppercase mb-1">{style.artist}</p>
                  <p className="text-paper text-xs md:text-sm tracking-archive uppercase">{style.name}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="showcase-card col-span-2 md:col-span-1">
            <div className="group relative overflow-hidden">
              <img src={styles[5].image} alt={styles[5].name}
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 md:p-6">
                <p className="text-paper/60 text-[10px] tracking-journal uppercase mb-1">{styles[5].artist}</p>
                <p className="text-paper text-xs md:text-sm tracking-archive uppercase">{styles[5].name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
