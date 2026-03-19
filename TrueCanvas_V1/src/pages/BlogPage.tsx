import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function BlogPage() {
  const { t } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const posts = [
    { id: 1, title: t('Die Kunst des Tätowierens', 'The Art of Tattooing'), category: t('Handwerk', 'Craft'), date: t('März 2026', 'March 2026') },
    { id: 2, title: t('Warum Handwerk Zeit braucht', 'Why Craft Takes Time'), category: 'Studio', date: t('Februar 2026', 'February 2026') },
    { id: 3, title: t('Die Bedeutung deiner Haut', 'The Meaning of Your Skin'), category: t('Philosophie', 'Philosophy'), date: t('Januar 2026', 'January 2026') },
  ];

  return (
    <div className="bg-[#F7F6F4] min-h-screen font-sans">
      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col items-center">
        <div className="text-center mb-32 max-w-4xl px-6">
          <h2 className="text-4xl md:text-5xl font-sans tracking-[0.2em] uppercase mb-12">
            Journal
          </h2>
          <p className="font-serif italic text-2xl md:text-3xl text-charcoal/80 leading-relaxed uppercase">
            "{t('Mehr als nur Tattoos – Gedanken zum Handwerk.', 'More than just tattoos — thoughts on the craft.')}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full px-6">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col gap-6 cursor-pointer group">
              <div className="aspect-[16/10] bg-[#E5E5E5] w-full grayscale contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 transition-all duration-700" />
              <div className="flex flex-col gap-2">
                <span className="text-[10px] tracking-[0.2em] text-gold uppercase">{post.category} — {post.date}</span>
                <h3 className="text-2xl md:text-3xl tracking-[0.05em] uppercase hover:text-gold transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
