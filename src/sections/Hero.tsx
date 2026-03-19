import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { useLanguage, LanguageSwitch } from '../context/LanguageContext';

// Import assets
import heroImageDefault from '../assets/images/hero_main.webp';
import logo from '../assets/images/logo_truecanvas.webp';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  backgroundImage?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  showCTA?: boolean;
  heroImageClassName?: string;
}

export function Hero({
  backgroundImage,
  imageAlt,
  title = "TRUE CANVAS",
  subtitle = "Vienna",
  description,
  ctaText,
  ctaHref,
  showCTA = false,
  heroImageClassName = ''
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const grainRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t } = useLanguage();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const resolvedDescription = description || t('Contemporary Tattoo Archive', 'Contemporary Tattoo Archive');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1.5 } });

      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.5
      );

      tl.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.3, duration: 1.5 },
        0.8
      );

      gsap.to(bgRef.current, {
        xPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.4,
        }
      });

      gsap.to(fadeRef.current, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '60% top',
          end: 'bottom top',
          scrub: 0.4,
        }
      });

      gsap.to(contentRef.current, {
        opacity: 0,
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '40% top',
          end: '80% top',
          scrub: 0.4,
        }
      });

      gsap.to(grainRef.current, {
        opacity: 0.04,
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'none'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [location.pathname]);

  const menuStructure = [
    { label: 'Home', href: '/' },
    { label: 'Artists', href: '/artists' },
    { label: 'Guest Artists', href: '/guest-artists' },
    { label: 'Studio', href: '/studio' },
    {
      label: 'Info',
      children: [
        { label: 'Blog', href: '/blog' },
        { label: 'FAQs', href: '/faq' },
      ]
    },
    {
      label: 'Extras',
      children: [
        { label: t('Tattooentfernung', 'Tattoo Removal'), href: '/tattoo-removal' },
        { label: t('Pflegeempfehlung', 'Aftercare'), href: '/care' },
        { label: 'Piercing', href: '/piercing' },
      ]
    },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <section
      ref={sectionRef}
      className={`relative w-full ${isHomePage ? 'h-screen' : 'h-[65vh]'} bg-white overflow-hidden flex flex-col`}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 select-none overflow-hidden"
        style={{ willChange: 'transform' }}
      >
        <img
          src={backgroundImage || heroImageDefault}
          alt={imageAlt || "Atmospheric tattoo studio"}
          className={`w-full h-full object-cover scale-110 object-[center_80%] ${heroImageClassName}`}
          loading={isHomePage ? "eager" : "lazy"}
          decoding="async"
          {...({ fetchpriority: isHomePage ? "high" : "auto" } as any)}
        />
      </div>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 z-5 bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none" />

      {/* Fade-to-white overlay */}
      <div ref={fadeRef} className="absolute inset-0 z-30 pointer-events-none bg-[#F7F6F4] opacity-0" />

      {/* Grain */}
      <div
        ref={grainRef}
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Header */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 z-50 w-full px-6 md:px-12 py-8 flex flex-row items-center justify-between transition-all duration-500 ${
          isScrolled ? 'bg-white/60 backdrop-blur-xl py-6 border-b border-black/5' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-4 group leading-none">
          <img
            src={logo}
            alt="True Canvas Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-charcoal text-[13px] md:text-[14px] tracking-archive font-sans uppercase opacity-90 group-hover:opacity-100 transition-opacity">
            TRUE CANVAS
          </span>
        </Link>

        <div className="flex items-center gap-x-6 md:gap-x-12">
          <nav className="hidden lg:flex items-center gap-x-8 md:gap-x-12">
            {menuStructure.map((item) => (
              <div
                key={item.label}
                className="relative group h-full py-2"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href || '#'}
                  className="text-[12px] tracking-[0.2em] font-sans text-charcoal/70 hover:text-charcoal transition-all uppercase flex items-center gap-1 focus:outline-none"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />}
                </Link>

                {item.children && (
                  <div className={`absolute right-0 top-full pt-4 min-w-[220px] transition-all duration-500 ${activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="bg-white p-8 flex flex-col gap-6 shadow-2xl border border-black/10">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="text-[11px] tracking-[0.25em] font-sans text-charcoal/50 hover:text-charcoal transition-all uppercase whitespace-nowrap focus:outline-none"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <LanguageSwitch />

          <a
            href="https://form.jotform.com/210883790627060"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium-dark whitespace-nowrap hidden sm:block"
          >
            {t('Termin anfragen', 'Book Now')}
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-charcoal" aria-label="Menu">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`block h-px bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-black/5 px-6 py-8">
          <div className="flex flex-col gap-5">
            {menuStructure.map((item) =>
              item.children ? (
                item.children.map((child) => (
                  <Link key={child.label} to={child.href} onClick={() => setMobileMenuOpen(false)}
                    className="text-[11px] tracking-[0.2em] uppercase text-charcoal/60 hover:text-charcoal transition-colors">
                    {child.label}
                  </Link>
                ))
              ) : (
                <Link key={item.label} to={item.href || '/'} onClick={() => setMobileMenuOpen(false)}
                  className="text-[11px] tracking-[0.2em] uppercase text-charcoal/60 hover:text-charcoal transition-colors">
                  {item.label}
                </Link>
              )
            )}
            <a href="https://form.jotform.com/210883790627060" target="_blank" rel="noopener noreferrer"
              className="btn-premium-dark mt-4 text-center">
              {t('Termin anfragen', 'Book Now')}
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex-1 flex flex-col items-center justify-center text-center text-charcoal px-4"
      >
        <h1 className={`${isHomePage ? 'text-6xl md:text-8xl lg:text-[130px]' : 'text-4xl md:text-6xl'} font-sans tracking-archive uppercase mb-6 leading-none`}>
          {title}
        </h1>
        <p className={`${isHomePage ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-serif italic tracking-journal text-charcoal/90 mb-10`}>
          {subtitle}
        </p>
        <p className="text-[10px] md:text-[11px] tracking-archive uppercase text-charcoal/50 font-sans mb-10">
          {resolvedDescription}
        </p>

        {showCTA && ctaText && (
          <div className="mt-4">
            <a href={ctaHref || "#"} className="btn-premium-dark">{ctaText}</a>
          </div>
        )}
      </div>

      {/* Bottom info */}
      {isHomePage && (
        <div className="absolute bottom-0 left-0 w-full px-12 py-12 flex justify-center md:justify-end">
          <p className="text-[10px] tracking-journal text-charcoal/20 uppercase">
            Est. 2018 — Vienna & International
          </p>
        </div>
      )}
    </section>
  );
}
