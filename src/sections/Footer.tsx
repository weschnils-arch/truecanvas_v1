import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { footerConfig } from '../config';
import logoSrc from '../assets/images/logo_truecanvas.webp';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-inner',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: footerRef.current, start: 'top 90%', toggleActions: 'play none none none' } }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="border-t border-charcoal/8 bg-paper">
      <div className="footer-inner max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <img src={logoSrc} alt="True Canvas Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className="text-lg tracking-archive uppercase text-charcoal">TRUE CANVAS</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-20 md:mb-28">
          <div>
            <p className="text-[10px] tracking-archive uppercase text-charcoal/40 mb-6">{t('Kontakt', 'Contact')}</p>
            <a href={`mailto:${footerConfig.email}`} className="text-xs text-charcoal/55 hover:text-charcoal transition-colors block mb-3">
              {footerConfig.email}
            </a>
            <p className="text-xs text-charcoal/55 whitespace-pre-line leading-relaxed">{footerConfig.locationText}</p>
          </div>

          <div>
            <p className="text-[10px] tracking-archive uppercase text-charcoal/40 mb-6">{t('Navigation', 'Navigation')}</p>
            <div className="flex flex-col gap-3">
              {footerConfig.navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-xs text-charcoal/55 hover:text-charcoal transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-archive uppercase text-charcoal/40 mb-6">{t('Folge uns', 'Follow Us')}</p>
            <div className="flex flex-col gap-3">
              {footerConfig.socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-charcoal/55 hover:text-charcoal transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-archive uppercase text-charcoal/40 mb-6">Legal</p>
            <div className="flex flex-col gap-3">
              {footerConfig.bottomLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-xs text-charcoal/55 hover:text-charcoal transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal/5 pt-8">
          <p className="text-[10px] tracking-journal uppercase text-charcoal/40">
            {footerConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
