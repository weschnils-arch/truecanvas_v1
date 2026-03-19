import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const innerImageRef = useRef<HTMLImageElement>(null);
  const { t } = useLanguage();

  const reviews = [
    { name: 'Alex R.', initials: 'AR', date: t('vor 2 Wochen', '2 weeks ago'), rating: 5,
      text: t('Die ruhigste Studio-Atmosphäre, in der ich je war. Das Tattoo ist perfekt geheilt und sieht fantastisch aus. Absolut empfehlenswert!',
        'The calmest studio atmosphere I\'ve ever been in. The tattoo healed perfectly and looks fantastic. Highly recommended!') },
    { name: 'Priya S.', initials: 'PS', date: t('vor 1 Monat', '1 month ago'), rating: 5,
      text: t('Lena hat mir zugehört, Anpassungen vorgenommen und genau das geliefert, was ich mir vorgestellt habe. Professionell und einfühlsam.',
        'Lena listened to me, made adjustments and delivered exactly what I had in mind. Professional and empathetic.') },
    { name: 'Marco T.', initials: 'MT', date: t('vor 3 Wochen', '3 weeks ago'), rating: 5,
      text: t('Saubere Linien, tolle Energie, null Stress. Ich komme definitiv wieder für mein nächstes Tattoo.',
        'Clean lines, great energy, zero stress. I\'ll definitely come back for my next tattoo.') },
    { name: 'Laura M.', initials: 'LM', date: t('vor 2 Wochen', '2 weeks ago'), rating: 5,
      text: t('Mein erstes Tattoo und ich hätte mir kein besseres Studio wünschen können. Max hat sich wirklich Zeit genommen, alles zu erklären.',
        'My first tattoo and I couldn\'t have wished for a better studio. Max really took the time to explain everything.') },
    { name: 'David K.', initials: 'DK', date: t('vor 1 Monat', '1 month ago'), rating: 5,
      text: t('Wahnsinnig detailliertes Fineline-Tattoo. Die Qualität ist auf einem ganz anderen Level als alles, was ich bisher gesehen habe.',
        'Incredibly detailed fineline tattoo. The quality is on a whole other level than anything I\'ve seen before.') },
    { name: 'Sophie W.', initials: 'SW', date: t('vor 3 Monaten', '3 months ago'), rating: 5,
      text: t('Von der Beratung bis zum fertigen Tattoo – alles war perfekt durchdacht. Das Studio ist wunderschön und super sauber.',
        'From consultation to the finished tattoo — everything was perfectly thought through. The studio is beautiful and super clean.') },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.test-head', {
        opacity: 0, y: 30, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      });

      gsap.from('.review-card', {
        opacity: 0, y: 50, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.review-card', start: 'top 85%', once: true },
      });

      if (innerImageRef.current && imageRef.current) {
        gsap.fromTo(innerImageRef.current,
          { yPercent: -8 },
          { yPercent: 8, ease: 'none', scrollTrigger: { trigger: imageRef.current, start: 'top bottom', end: 'bottom top', scrub: true } }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full pt-16 md:pt-24 bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="test-head flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p className="text-[11px] tracking-archive uppercase text-charcoal/40 mb-5">{t('Kundenstimmen', 'Testimonials')}</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.06em] uppercase text-charcoal">
              {t('Ehrliches Feedback', 'Honest Feedback')}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Stars count={5} />
            <span className="text-charcoal/50 text-sm">{t('5.0 auf Google', '5.0 on Google')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 pb-14 md:pb-20">
          {reviews.map((review, i) => (
            <div key={i} className="review-card bg-white border border-charcoal/6 p-8 md:p-10 hover:border-charcoal/12 transition-colors duration-500">
              <Stars count={review.rating} />
              <p className="text-charcoal/60 text-sm leading-relaxed mt-5 mb-8">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-charcoal/5 flex items-center justify-center">
                  <span className="text-[10px] tracking-journal uppercase text-charcoal/60">{review.initials}</span>
                </div>
                <div>
                  <p className="text-xs text-charcoal">{review.name}</p>
                  <p className="text-[10px] text-charcoal/40">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={imageRef} className="w-full overflow-hidden aspect-[16/7] md:aspect-[21/8]">
        <img ref={innerImageRef} src="/images/studio/JollySchwarz-4003.webp" alt="TrueCanvas Studio"
          loading="lazy" className="w-full h-[120%] object-cover" />
      </div>
    </section>
  );
}
