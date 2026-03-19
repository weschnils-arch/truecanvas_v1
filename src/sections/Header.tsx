import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoSrc from '../assets/images/logo_truecanvas.webp';
import { useLanguage, LanguageSwitch } from '../context/LanguageContext';

export function Header() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [extrasOpen, setExtrasOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = () => { setInfoOpen(false); setExtrasOpen(false); };
    if (infoOpen || extrasOpen) {
      setTimeout(() => document.addEventListener('click', handleClick), 0);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [infoOpen, extrasOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setInfoOpen(false);
    setExtrasOpen(false);
    if (href.startsWith('/')) navigate(href);
    else if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        navScrolled
          ? 'bg-paper/90 backdrop-blur-md border-b border-charcoal/5'
          : 'bg-paper/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoSrc} alt="TrueCanvas" className="h-8 w-8 object-contain" />
          <span className="text-xs tracking-archive uppercase text-charcoal">True Canvas</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          <button onClick={() => handleNavClick('/artists')} className="text-[11px] tracking-journal uppercase text-charcoal/70 hover:text-charcoal transition-colors">Artists</button>
          <button onClick={() => handleNavClick('/guest-artists')} className="text-[11px] tracking-journal uppercase text-charcoal/70 hover:text-charcoal transition-colors">Guest Artists</button>
          <button onClick={() => handleNavClick('/studio')} className="text-[11px] tracking-journal uppercase text-charcoal/70 hover:text-charcoal transition-colors">Studio</button>

          {/* Info */}
          <div className="relative">
            <button onClick={(e) => { e.stopPropagation(); setInfoOpen(!infoOpen); setExtrasOpen(false); }}
              className="text-[11px] tracking-journal uppercase text-charcoal/70 hover:text-charcoal transition-colors flex items-center gap-1">
              Info
              <svg className={`w-3 h-3 transition-transform duration-300 ${infoOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {infoOpen && (
              <div className="absolute top-full right-0 mt-4 w-48 bg-paper border border-charcoal/10 py-3 shadow-lg">
                {[{ label: 'FAQ', href: '/faq' }, { label: 'Blog', href: '/blog' }].map((item) => (
                  <button key={item.label} onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-5 py-2.5 text-[11px] tracking-journal uppercase text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5 transition-colors">
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Extras */}
          <div className="relative">
            <button onClick={(e) => { e.stopPropagation(); setExtrasOpen(!extrasOpen); setInfoOpen(false); }}
              className="text-[11px] tracking-journal uppercase text-charcoal/70 hover:text-charcoal transition-colors flex items-center gap-1">
              Extras
              <svg className={`w-3 h-3 transition-transform duration-300 ${extrasOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {extrasOpen && (
              <div className="absolute top-full right-0 mt-4 w-52 bg-paper border border-charcoal/10 py-3 shadow-lg">
                {[
                  { label: 'Tattoo Entfernung', href: '/tattoo-removal' },
                  { label: 'Pflegeempfehlung', href: '/care' },
                  { label: 'Piercing', href: '/piercing' },
                ].map((item) => (
                  <button key={item.label} onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-5 py-2.5 text-[11px] tracking-journal uppercase text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5 transition-colors">
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <LanguageSwitch />

          <a href="https://form.jotform.com/210883790627060" target="_blank" rel="noopener noreferrer"
            className="text-[11px] tracking-journal uppercase px-7 py-3.5 bg-charcoal text-paper hover:bg-charcoal/85 transition-all duration-500">
            {t('Termin anfragen', 'Book Now')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-charcoal" aria-label="Menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block h-px bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 bg-paper border-b border-charcoal/5 ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 flex flex-col gap-5">
          {[
            { label: 'Artists', href: '/artists' },
            { label: 'Guest Artists', href: '/guest-artists' },
            { label: 'Studio', href: '/studio' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Blog', href: '/blog' },
            { label: 'Tattoo Entfernung', href: '/tattoo-removal' },
            { label: 'Pflegeempfehlung', href: '/care' },
            { label: 'Piercing', href: '/piercing' },
          ].map((item) => (
            <button key={item.label} onClick={() => handleNavClick(item.href)}
              className="text-[11px] tracking-journal uppercase text-left text-charcoal/70 hover:text-charcoal transition-colors">
              {item.label}
            </button>
          ))}
          <a href="https://form.jotform.com/210883790627060" target="_blank" rel="noopener noreferrer"
            className="text-[11px] tracking-journal uppercase px-7 py-3.5 bg-charcoal text-paper self-start mt-2">
            Termin anfragen
          </a>
        </div>
      </div>
    </nav>
  );
}
