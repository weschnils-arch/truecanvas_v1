import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function PiercingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const features = [
    {
      title: t('Höchste Standards', 'Highest Standards'),
      description: t('Unsere Partner teilen unsere Werte: höchste Hygiene, Präzision und beste Materialien.', 'Our partners share our values: highest hygiene, precision and the best materials.'),
    },
    {
      title: t('Vertraute Atmosphäre', 'Familiar Atmosphere'),
      description: t('Genieße die entspannte und professionelle Umgebung, die du bereits von True Canvas kennst.', 'Enjoy the relaxed and professional environment you already know from True Canvas.'),
    },
    {
      title: t('Ästhetische Beratung', 'Aesthetic Consultation'),
      description: t('Wir helfen dir, das perfekte Piercing zu finden, das deinen individuellen Stil unterstreicht.', 'We help you find the perfect piercing that accentuates your individual style.'),
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.piercing-header', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });

      if (imageRef.current) {
        gsap.fromTo(imageRef.current, { clipPath: 'inset(0 50% 0 50%)' },
          { clipPath: 'inset(0 0% 0 0%)', duration: 1.4, ease: 'power3.inOut', scrollTrigger: { trigger: imageRef.current, start: 'top 80%' } });
      }

      gsap.fromTo('.piercing-page-content', { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.piercing-page-content', start: 'top 85%' } });

      gsap.from('.piercing-page-feature', {
        opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.piercing-page-feature', start: 'top 90%', once: true },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-paper min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="piercing-header grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 md:mb-32">
          <div>
            <p className="text-[11px] tracking-archive uppercase text-charcoal/40 mb-6">
              {t('In Kooperation mit Mayduna', 'In cooperation with Mayduna')}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-[0.06em] uppercase text-charcoal leading-none">
              Piercing
            </h1>
          </div>
          <div className="flex items-end">
            <p className="font-serif italic text-lg md:text-xl text-charcoal/60 leading-relaxed max-w-md">
              {t(
                'Professionelle Piercings in der gewohnten True Canvas Atmosphäre. Höchste Standards an Hygiene, Präzision und Ästhetik.',
                'Professional piercings in the familiar True Canvas atmosphere. Highest standards in hygiene, precision and aesthetics.'
              )}
            </p>
          </div>
        </div>

        <div className="piercing-page-content grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 md:mb-40">
          <div>
            <p className="text-charcoal/60 text-sm md:text-base leading-[1.9]">
              {t(
                'In Kooperation mit Mayduna bieten wir dir nun auch professionelle Piercings in der gewohnten True Canvas Atmosphäre an. Unser Partner teilt unsere höchsten Standards an Hygiene, Präzision und Ästhetik. Egal ob du ein neues Piercing planst oder dein bestehendes Setup erweitern möchtest – bei uns bist du in den besten Händen.',
                'In cooperation with Mayduna, we now also offer professional piercings in the familiar True Canvas atmosphere. Our partner shares our highest standards in hygiene, precision and aesthetics. Whether you\'re planning a new piercing or want to expand your existing setup — you\'re in the best hands with us.'
              )}
            </p>
          </div>
          <div>
            <div className="border-t border-charcoal/10 pt-10">
              <p className="text-[11px] tracking-archive uppercase text-charcoal/40 mb-6">{t('Dein Partner', 'Your Partner')}</p>
              <h3 className="text-xl md:text-2xl tracking-[0.1em] uppercase text-charcoal mb-8">Mayduna</h3>
              <a href="https://mayduna.de/termin/" target="_blank" rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-charcoal text-paper text-[11px] tracking-archive uppercase hover:bg-charcoal/85 transition-all duration-500">
                {t('Piercing Termin buchen', 'Book Piercing Appointment')}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-32 md:mb-40">
          {features.map((feature, i) => (
            <div key={i} className="piercing-page-feature">
              <span className="text-[11px] tracking-archive uppercase text-charcoal/30 block mb-4">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-sm tracking-journal uppercase text-charcoal mb-3" style={{ fontWeight: 400 }}>{feature.title}</h3>
              <p className="text-sm text-charcoal/55 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-32 md:mb-40">
          <div ref={imageRef} className="w-full overflow-hidden" style={{ clipPath: 'inset(0 50% 0 50%)' }}>
            <img src="/images/piercing.webp" alt="Piercing bei TrueCanvas" className="w-full aspect-[21/9] object-cover object-center" loading="lazy" />
          </div>
        </div>

        <div className="text-center mb-16 border-t border-charcoal/8 pt-16">
          <p className="font-serif italic text-lg text-charcoal/60 mb-8">
            {t('Fragen zum Piercing? Schreib uns.', 'Questions about piercings? Write to us.')}
          </p>
          <a href="mailto:info@truecanvas.at" className="text-lg font-serif italic text-charcoal hover:text-charcoal/60 transition-colors border-b border-charcoal/20 pb-1">
            info@truecanvas.at
          </a>
        </div>
      </div>
    </div>
  );
}
