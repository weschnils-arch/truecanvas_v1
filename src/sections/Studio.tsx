import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { studioConfig } from '../config';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export function Studio() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const innerImageRef = useRef<HTMLImageElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (innerImageRef.current && imageRef.current) {
        gsap.fromTo(innerImageRef.current,
          { yPercent: -10 },
          { yPercent: 10, ease: 'none', scrollTrigger: { trigger: imageRef.current, start: 'top bottom', end: 'bottom top', scrub: true } }
        );
      }

      gsap.fromTo('.studio-label',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: '.studio-label', start: 'top 85%', toggleActions: 'play none none none' } }
      );

      gsap.fromTo('.studio-text-col',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.studio-text-col', start: 'top 85%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const descriptionDe = studioConfig.description;
  const descriptionEn = `When Max founded True Canvas in 2018 in the heart of Vienna, the vision was clear: to create a studio that leaves typical clichés behind. Our space is bright, modern and inviting — a place where you feel safe and understood while we bring your ideas to life.

Here you'll meet a dedicated team of passionate artists and a constantly changing lineup of international guests. What connects us all? The love of precise craftsmanship and the commitment that every tattoo is as unique as the person wearing it.

Come by and experience the special atmosphere at True Canvas for yourself.`;

  const paragraphs = t(descriptionDe, descriptionEn).split('\n\n');

  return (
    <section ref={sectionRef} id="studio" className="w-full py-16 md:py-24 bg-paper">
      <div ref={imageRef} className="w-full overflow-hidden aspect-[16/7] md:aspect-[21/8] mb-14 md:mb-20">
        <img ref={innerImageRef} src={studioConfig.image} alt="TrueCanvas Studio Wien" loading="lazy"
          className="w-full h-[120%] object-cover grayscale" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="studio-label mb-12">
          <p className="text-[11px] tracking-archive uppercase text-charcoal/40 mb-5">
            {t('Das Studio', 'The Studio')}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.06em] uppercase text-charcoal leading-tight">
            {t('Wo Kunst ein Zuhause hat', 'Where Art Finds a Home')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 max-w-5xl">
          {paragraphs.map((p, i) => (
            <p key={i} className="studio-text-col text-charcoal/60 text-sm md:text-base leading-[1.9]">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
