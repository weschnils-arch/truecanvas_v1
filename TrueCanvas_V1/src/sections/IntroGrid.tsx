import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function Counter({ end, shouldAnimate }: { end: number; shouldAnimate: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldAnimate) return;
    const duration = 2200;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(end);
    };
    requestAnimationFrame(tick);
  }, [end, shouldAnimate]);
  return <span>{count}</span>;
}

const gallery = [
  { image: '/images/gallery/realism.webp', style: 'Realismus', artist: 'Max' },
  { image: '/images/gallery/fineline-floral.webp', style: 'Fineline Floral', artist: 'Rita' },
  { image: '/images/gallery/anime.webp', style: 'Anime', artist: 'Hera' },
  { image: '/images/gallery/botanical.webp', style: 'Botanical', artist: 'Rita' },
  { image: '/images/gallery/cartoon.webp', style: 'Cartoon', artist: 'Hera' },
  { image: '/images/gallery/skull-graphic.webp', style: 'Skull Graphic', artist: 'Roli' },
  { image: '/images/gallery/floral-arm.webp', style: 'Floral Arm', artist: 'Vroni' },
];

export function IntroGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { t } = useLanguage();

  const stats = [
    { value: 7, label: t('Jahre', 'Years'), sub: t('Erfahrung', 'Experience') },
    { value: 2500, label: t('Unikate', 'Unique Tattoos'), sub: t('auf eurer Haut', 'on your skin') },
    { value: 50, label: t('Guests', 'Guests'), sub: t('aus aller Welt', 'worldwide') },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intro-headline', {
        opacity: 0, y: 50, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      });

      gsap.from('.intro-desc', {
        opacity: 0, y: 30, duration: 1, delay: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.intro-desc', start: 'top 85%', once: true },
      });

      ScrollTrigger.create({
        trigger: '.stat-row',
        start: 'top 88%',
        onEnter: () => setShouldAnimate(true),
        once: true,
      });

      gsap.from('.stat-block', {
        y: 30, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.stat-row', start: 'top 88%', once: true },
      });

      const galleryItems = sectionRef.current?.querySelectorAll('.gallery-item');
      if (galleryItems) {
        gsap.from(galleryItems, {
          y: 70, opacity: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-grid', start: 'top 90%', once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Headline + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20">
          <div className="lg:col-span-5">
            <h2 className="intro-headline font-serif italic text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]" style={{ fontWeight: 400, letterSpacing: '0.02em', textTransform: 'none' }}>
              {t('Kunst, die bleibt', 'Art that lasts')}
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="intro-desc text-charcoal/55 text-base md:text-lg leading-relaxed max-w-xl">
              {t(
                'Ein Tattoo ist mehr als nur ein Bild – es ist ein Teil deiner Identität. Jedes Piece erzählt seine eigene Geschichte, gefertigt mit höchster Präzision und dem Blick für das Detail.',
                'A tattoo is more than just an image – it\'s a part of your identity. Every piece tells its own story, crafted with the highest precision and an eye for detail.'
              )}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="stat-row flex flex-wrap gap-12 md:gap-20 mb-14 md:mb-20 border-t border-b border-charcoal/8 py-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-block">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl text-charcoal tracking-tight">
                  <Counter end={stat.value} shouldAnimate={shouldAnimate} />
                </span>
                <span className="text-charcoal/30 text-lg">+</span>
              </div>
              <p className="text-[11px] tracking-journal uppercase text-charcoal/50 mt-1">{stat.label}</p>
              <p className="text-[10px] text-charcoal/30 tracking-wide">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Gallery — all 7 images in one grid */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {gallery.map((item, i) => (
            <Link to="/artists" key={i} className={`gallery-item group ${i === 1 || i === 4 ? 'md:mt-8' : ''}`}>
              <div className="overflow-hidden bg-charcoal/5">
                <img src={item.image} alt={`${item.style} by ${item.artist}`}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="flex items-center justify-between py-3">
                <p className="text-[12px] text-charcoal/60 tracking-wide">{item.style}</p>
                <p className="text-[11px] text-charcoal/30">{item.artist}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
