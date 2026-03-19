import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const steps = [
    {
      number: t('Schritt 1', 'Step 1'),
      title: t('Beratung & Planung', 'Consultation & Planning'),
      description: t(
        'Alles beginnt mit deiner Idee. Wir besprechen Motiv und Platzierung und beraten dich ehrlich zur langfristigen Umsetzbarkeit deines Projekts.',
        'Everything starts with your idea. We discuss the motif and placement and honestly advise you on the long-term feasibility of your project.'
      ),
    },
    {
      number: t('Schritt 2', 'Step 2'),
      title: t('Entwurf & Vorbereitung', 'Design & Preparation'),
      description: t(
        'Dein Artist erstellt ein individuelles Design. Am Termin passen wir Details gemeinsam an, bis du zu 100 % zufrieden bist. Erst dann starten wir.',
        'Your artist creates a custom design. At the appointment, we adjust details together until you\'re 100% satisfied. Only then do we start.'
      ),
    },
    {
      number: t('Schritt 3', 'Step 3'),
      title: t('Präzision & Hygiene', 'Precision & Hygiene'),
      description: t(
        'Wir setzen dein Motiv in ruhiger Atmosphäre präzise um. Höchste Hygienestandards und eine ausführliche Pflegeberatung sind bei uns Standard.',
        'We precisely execute your design in a calm atmosphere. The highest hygiene standards and thorough aftercare advice are standard with us.'
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-head',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );

      gsap.fromTo('.process-step',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.process-step', start: 'top 85%', toggleActions: 'play none none none' } }
      );

      gsap.fromTo('.process-cta',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: '.process-cta', start: 'top 90%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="process-head grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-14 md:mb-20">
          <div>
            <p className="text-[11px] tracking-archive uppercase text-charcoal/40 mb-5">{t('Der Prozess', 'The Process')}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.06em] uppercase text-charcoal leading-tight">
              {t('Dein Weg zum Tattoo', 'Your Path to a Tattoo')}
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-charcoal/55 text-sm md:text-base leading-relaxed max-w-lg">
              {t(
                'Ein professionelles Ergebnis braucht eine klare Struktur. Wir begleiten dich Schritt für Schritt durch den Prozess.',
                'A professional result needs a clear structure. We guide you step by step through the process.'
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-24">
          {steps.map((step, i) => (
            <div key={i}
              className={`process-step relative py-12 md:py-16 ${
                i < steps.length - 1 ? 'border-b md:border-b-0 md:border-r border-charcoal/8' : ''
              } ${i === 0 ? 'md:pr-12 lg:pr-16' : ''} ${i === 1 ? 'md:px-12 lg:px-16' : ''} ${i === 2 ? 'md:pl-12 lg:pl-16' : ''}`}
            >
              <span className="text-[130px] md:text-[160px] leading-none text-charcoal/[0.03] absolute -top-4 left-0 select-none pointer-events-none">{i + 1}</span>
              <div className="relative z-10">
                <span className="text-[11px] tracking-archive uppercase text-charcoal/30 block mb-5">{step.number}</span>
                <h3 className="text-base md:text-lg tracking-[0.08em] uppercase text-charcoal mb-4 leading-tight">{step.title}</h3>
                <p className="text-sm text-charcoal/55 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-cta text-center border-t border-charcoal/8 pt-16">
          <h3 className="text-2xl md:text-3xl tracking-[0.06em] uppercase text-charcoal mb-4">
            {t('Zeit für dein neues Tattoo', 'Time for Your New Tattoo')}
          </h3>
          <p className="text-charcoal/50 text-sm max-w-xl mx-auto mb-10 leading-relaxed">
            {t(
              'Bereit für dein nächstes Tattoo? Beschreibe uns kurz deine Idee, die gewünschte Stelle und den Stil. Wir melden uns zeitnah bei dir.',
              'Ready for your next tattoo? Briefly describe your idea, desired placement and style. We\'ll get back to you shortly.'
            )}
          </p>
          <a href="https://form.jotform.com/210883790627060" target="_blank" rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-charcoal text-paper text-[11px] tracking-archive uppercase hover:bg-charcoal/85 transition-all duration-500">
            {t('Termin anfragen', 'Book Appointment')}
          </a>
        </div>
      </div>
    </section>
  );
}
