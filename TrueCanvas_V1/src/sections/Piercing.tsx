import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export function Piercing() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const features = [
    {
      title: t('Höchste Standards', 'Highest Standards'),
      description: t(
        'Unsere Partner teilen unsere Werte: höchste Hygiene, Präzision und beste Materialien.',
        'Our partners share our values: highest hygiene, precision and the best materials.'
      ),
    },
    {
      title: t('Vertraute Atmosphäre', 'Familiar Atmosphere'),
      description: t(
        'Genieße die entspannte und professionelle Umgebung, die du bereits von True Canvas kennst.',
        'Enjoy the relaxed and professional environment you already know from True Canvas.'
      ),
    },
    {
      title: t('Ästhetische Beratung', 'Aesthetic Consultation'),
      description: t(
        'Wir helfen dir, das perfekte Piercing zu finden, das deinen individuellen Stil unterstreicht.',
        'We help you find the perfect piercing that accentuates your individual style.'
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { clipPath: 'inset(0 50% 0 50%)' },
          { clipPath: 'inset(0 0% 0 0%)', ease: 'none', scrollTrigger: { trigger: imageRef.current, start: 'top 80%', end: 'top 20%', scrub: true } }
        );
      }

      gsap.from('.piercing-text', {
        opacity: 0, y: 40, duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: '.piercing-text', start: 'top 85%', once: true },
      });

      gsap.from('.piercing-feat', {
        opacity: 0, y: 30, stagger: 0.15, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.piercing-feat', start: 'top 90%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-[#EDECE9]">
      <div ref={imageRef} className="w-full overflow-hidden aspect-[16/7] md:aspect-[21/9] mb-14 md:mb-20">
        <img src="/images/piercing.webp" alt="Piercing bei TrueCanvas" loading="lazy"
          className="w-full h-full object-cover object-center grayscale" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="piercing-text grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <div>
            <p className="text-[11px] tracking-archive uppercase text-charcoal/40 mb-5">
              {t('In Kooperation mit Mayduna', 'In cooperation with Mayduna')}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.06em] uppercase text-charcoal leading-[1.15]">
              {t('Mehr als nur Tattoos: Piercings bei Mayduna', 'More than Tattoos: Piercings by Mayduna')}
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-8">
            <p className="text-charcoal/60 text-sm md:text-base leading-relaxed">
              {t(
                'In Kooperation mit Mayduna bieten wir dir nun auch professionelle Piercings in der gewohnten True Canvas Atmosphäre an. Unser Partner teilt unsere höchsten Standards an Hygiene, Präzision und Ästhetik.',
                'In cooperation with Mayduna, we now also offer professional piercings in the familiar True Canvas atmosphere. Our partner shares our highest standards in hygiene, precision and aesthetics.'
              )}
            </p>
            <a href="https://form.jotform.com/210883790627060" target="_blank" rel="noopener noreferrer"
              className="inline-block self-start px-10 py-4 bg-charcoal text-paper text-[11px] tracking-archive uppercase hover:bg-charcoal/85 transition-all duration-500">
              {t('Termin buchen', 'Book Appointment')}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {features.map((feature, i) => (
            <div key={i} className="piercing-feat">
              <span className="text-[11px] tracking-archive uppercase text-charcoal/30 block mb-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-sm tracking-journal uppercase text-charcoal mb-3" style={{ fontWeight: 400 }}>
                {feature.title}
              </h3>
              <p className="text-sm text-charcoal/55 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
