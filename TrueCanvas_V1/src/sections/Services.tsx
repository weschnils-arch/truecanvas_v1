import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const services = [
    {
      title: t('Zeit für dich', 'Time for You'),
      description: t(
        'Bei uns gibt es keine Massenabfertigung. Wir nehmen uns die Zeit, die deine Idee verdient, und sorgen dafür, dass du dich ab der ersten Sekunde bei uns wohlfühlst.',
        'No assembly line here. We take the time your idea deserves and make sure you feel comfortable from the very first second.'
      ),
    },
    {
      title: t('Wahres Handwerk', 'True Craftsmanship'),
      description: t(
        'Tinte ist Präzisionsarbeit. Wir vereinen höchste Qualität mit künstlerischer Leidenschaft. Jeder Nadelstich sitzt, weil wir unser Handwerk nicht nur beherrschen, sondern lieben.',
        'Ink is precision work. We combine the highest quality with artistic passion. Every needle stroke is precise because we don\'t just master our craft — we love it.'
      ),
    },
    {
      title: t('Echtes Vertrauen', 'Real Trust'),
      description: t(
        'Ein Tattoo bleibt für immer. Deshalb setzen wir auf ehrliche Beratung und volle Transparenz. Wir bauen keine Kundenkartei, sondern langfristige Beziehungen.',
        'A tattoo lasts forever. That\'s why we rely on honest advice and full transparency. We don\'t build client lists — we build long-term relationships.'
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-label', {
        opacity: 0, y: 20, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      });

      gsap.from('.service-block', {
        opacity: 0, y: 50, duration: 1, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { trigger: '.service-block', start: 'top 85%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-paper py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <p className="services-label text-[11px] tracking-archive uppercase text-charcoal/40 mb-12 md:mb-16">
          {t('Bei uns stehst du im Mittelpunkt', 'You are our focus')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-block relative py-12 md:py-16 ${
                i < services.length - 1 ? 'border-b md:border-b-0 md:border-r border-charcoal/8' : ''
              } ${i === 0 ? 'md:pr-12 lg:pr-16' : ''} ${i === 1 ? 'md:px-12 lg:px-16' : ''} ${i === 2 ? 'md:pl-12 lg:pl-16' : ''}`}
            >
              <span className="text-[140px] md:text-[160px] lg:text-[200px] leading-none text-charcoal/[0.03] absolute -top-6 right-0 select-none pointer-events-none font-sans">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="relative z-10">
                <span className="inline-block w-8 h-px bg-gold mb-8" />
                <h3 className="text-lg md:text-xl tracking-[0.1em] uppercase text-charcoal mb-5 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-charcoal/55 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
