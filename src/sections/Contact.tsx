import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-inner', {
        opacity: 0, y: 40, duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="w-full py-16 md:py-24 bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="contact-inner grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="aspect-square lg:aspect-auto lg:min-h-[500px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.0!2d16.366!3d48.193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWeyringergasse+19%2C+1040+Wien!5e0!3m2!1sde!2sat!4v1"
              width="100%" height="100%"
              style={{ border: 0, filter: 'grayscale(1)' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TrueCanvas Studio Wien"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="w-12 h-px bg-charcoal/15 mb-10" />
            <p className="text-[11px] tracking-archive uppercase text-charcoal/40 mb-5">{t('Kontakt', 'Contact')}</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.06em] uppercase text-charcoal mb-8">
              {t('Zeit für dein neues Tattoo', 'Time for Your New Tattoo')}
            </h2>
            <p className="text-sm text-charcoal/55 leading-relaxed mb-10 max-w-md">
              {t(
                'Bereit für dein nächstes Tattoo? Beschreibe uns kurz deine Idee, die gewünschte Stelle und den Stil. Wir melden uns zeitnah bei dir.',
                'Ready for your next tattoo? Briefly describe your idea, desired placement and style. We\'ll get back to you shortly.'
              )}
            </p>
            <div className="space-y-3 mb-10">
              <p className="text-sm text-charcoal/50">Weyringergasse 19/1-3<br />1040 Wien</p>
              <a href="mailto:info@truecanvas.at" className="text-sm text-charcoal/50 hover:text-charcoal transition-colors">info@truecanvas.at</a>
            </div>
            <a href="https://form.jotform.com/210883790627060" target="_blank" rel="noopener noreferrer"
              className="inline-block self-start px-12 py-4 bg-charcoal text-paper text-[11px] tracking-archive uppercase hover:bg-charcoal/85 transition-all duration-500">
              {t('Termin anfragen', 'Book Appointment')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
