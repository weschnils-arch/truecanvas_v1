import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
gsap.registerPlugin(ScrollTrigger);

function StudioSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % images.length), [current, images.length, goTo]);
  const prev = useCallback(() => goTo((current - 1 + images.length) % images.length), [current, images.length, goTo]);

  useEffect(() => {
    intervalRef.current = setInterval(() => setCurrent((c) => (c + 1) % images.length), 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [images.length]);

  const handleNav = useCallback((fn: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    fn();
    intervalRef.current = setInterval(() => setCurrent((c) => (c + 1) % images.length), 5000);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden group">
      {images.map((src, i) => (
        <img key={src} src={src} alt={`${alt} ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy" />
      ))}
      <button onClick={() => handleNav(prev)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white" aria-label="Previous">
        <ChevronLeft className="w-5 h-5 text-charcoal" />
      </button>
      <button onClick={() => handleNav(next)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white" aria-label="Next">
        <ChevronRight className="w-5 h-5 text-charcoal" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => handleNav(() => goTo(i))}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === current ? 'bg-white w-4' : 'bg-white/50'}`}
            aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default function StudioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const studios = [
    {
      number: '01', name: 'Studio 1',
      subtitle: t('Der Empfang', 'The Reception'),
      description: t(
        'Ein einladender Raum mit warmem Licht und durchdachtem Design. Hier beginnt dein Tattoo-Erlebnis – entspannt, persönlich und mit voller Aufmerksamkeit auf dich.',
        'A welcoming space with warm light and thoughtful design. Your tattoo experience starts here — relaxed, personal and with full attention on you.'
      ),
      images: ['/images/studio/studio-1.webp', '/images/studio/studio-1b.webp', '/images/studio/studio-1c.webp', '/images/studio/studio-1d.webp'],
    },
    {
      number: '02', name: 'Studio 2',
      subtitle: t('Das Atelier', 'The Atelier'),
      description: t(
        'Hell, modern und auf Präzision ausgelegt. Unser zweites Studio bietet Platz für detailreiches Arbeiten in ruhiger Atmosphäre – mit natürlichem Licht und professionellem Equipment.',
        'Bright, modern and designed for precision. Our second studio offers space for detailed work in a calm atmosphere — with natural light and professional equipment.'
      ),
      images: ['/images/studio/studio-2.webp', '/images/studio/studio-2b.webp', '/images/studio/studio-2c.webp'],
    },
    {
      number: '03', name: 'Studio 3',
      subtitle: t('Das Gewölbe', 'The Vault'),
      description: t(
        'Unter historischen Bögen entsteht zeitgenössische Kunst. Das größte unserer drei Studios vereint Wiener Altbau-Charme mit moderner Tattoo-Ausstattung.',
        'Contemporary art under historic arches. The largest of our three studios combines Viennese old-building charm with modern tattoo equipment.'
      ),
      images: ['/images/studio/studio-3.webp', '/images/studio/studio-3b.webp', '/images/studio/studio-3c.webp'],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.studio-card').forEach((card) => {
        gsap.from(card, { y: 80, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%' } });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#F7F6F4] min-h-screen font-sans">
      <div ref={containerRef} className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="text-center mb-32 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-sans tracking-[0.2em] uppercase mb-12">
            {t('Unsere Studios', 'Our Studios')}
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-charcoal/70 leading-relaxed">
            {t('Drei individuell gestaltete Räume, in denen Tätowieren zur Kunst wird.', 'Three individually designed spaces where tattooing becomes art.')}
          </p>
        </div>

        <div className="flex flex-col gap-32 md:gap-40">
          {studios.map((studio, i) => (
            <div key={studio.number} className="studio-card grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <StudioSlideshow images={studio.images} alt={studio.name} />
              </div>
              <div className={`flex flex-col gap-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-[11px] tracking-[0.3em] text-charcoal/30 uppercase font-sans">{studio.number}</span>
                <h3 className="text-3xl md:text-4xl tracking-[0.15em] uppercase font-sans">{studio.name}</h3>
                <p className="font-serif italic text-lg text-charcoal/50">{studio.subtitle}</p>
                <p className="font-serif text-charcoal/70 text-lg leading-relaxed max-w-lg">{studio.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center flex flex-col items-center gap-6">
          <p className="text-[11px] tracking-[0.2em] text-charcoal/40 uppercase">Weyringergasse 19, 1040 Wien</p>
          <a href="https://form.jotform.com/210883790627060" target="_blank" rel="noopener noreferrer"
            className="px-10 py-3 bg-charcoal text-white text-[10px] tracking-[0.2em] uppercase hover:bg-charcoal/80 transition-all duration-500">
            {t('Termin anfragen', 'Book Appointment')}
          </a>
        </div>
      </div>
    </div>
  );
}
