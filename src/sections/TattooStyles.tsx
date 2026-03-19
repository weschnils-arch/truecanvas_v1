import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Palette, Contrast, Layers, Skull, Sparkles, Square, Waves, Circle, 
  Pencil, Hexagon, Flower2, Anchor, Triangle, PenTool, Edit3, Droplets, 
  Minus, Mountain, Zap, RefreshCw, Grid3X3, Blend, Sun, Shuffle,
  type LucideIcon
} from 'lucide-react';
import { tattooStylesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  Palette, Contrast, Layers, Skull, Sparkles, Square, Waves, Circle, 
  Pencil, Hexagon, Flower2, Anchor, Triangle, PenTool, Edit3, Droplets, 
  Minus, Mountain, Zap, RefreshCw, Grid3X3, Blend, Sun, Shuffle,
};

export function TattooStyles() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredStyle, setHoveredStyle] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headerRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Grid items staggered animation
      const items = gridRef.current?.querySelectorAll('.style-item');
      if (items) {
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: 'top 80%',
          onEnter: () => {
            gsap.fromTo(
              items,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: 'power3.out',
                stagger: 0.03,
              }
            );
          },
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="styles"
      className="relative w-full py-24 md:py-32 bg-paper-dark paper-texture"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20 opacity-0">
          <p className="text-xs tracking-[0.2em] text-gold uppercase mb-4">
            {tattooStylesConfig.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight">
            {tattooStylesConfig.title}
          </h2>
        </div>

        {/* Styles Grid */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {tattooStylesConfig.styles.map((style) => {
            const Icon = iconMap[style.icon] || Sparkles;
            const isHovered = hoveredStyle === style.id;
            
            return (
              <a
                key={style.id}
                href={`/artists?style=${style.id}`}
                className="style-item group relative bg-paper rounded-lg p-4 md:p-6 opacity-0 transition-all duration-300 hover:bg-charcoal hover:shadow-lg cursor-pointer border border-charcoal/5"
                onMouseEnter={() => setHoveredStyle(style.id)}
                onMouseLeave={() => setHoveredStyle(null)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-3 transition-colors duration-300 ${isHovered ? 'text-paper' : 'text-charcoal/60'}`}>
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className={`text-xs md:text-sm leading-tight transition-colors duration-300 ${isHovered ? 'text-paper' : 'text-charcoal'}`}>
                    {style.name}
                  </span>
                </div>
                
                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gold transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
