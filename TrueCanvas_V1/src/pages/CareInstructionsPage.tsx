import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function CareInstructionsPage() {
  const { t } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#F7F6F4] min-h-screen font-sans">
      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col items-center">
        <div className="text-center mb-32 max-w-4xl px-6">
          <h2 className="text-4xl md:text-5xl font-sans tracking-[0.2em] uppercase mb-12">
            {t('Pflege deines neuen Tattoos', 'Caring for Your New Tattoo')}
          </h2>
          <p className="font-serif italic text-2xl md:text-3xl text-charcoal/80 leading-relaxed uppercase">
            "{t('Ein perfektes Ergebnis braucht die richtige Heilung.', 'A perfect result needs proper healing.')}"
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start w-full mb-40 overflow-hidden px-6">
          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold border-b border-gold/20 pb-2">{t('Tag 1 - 7', 'Day 1 - 7')}</h4>
            <div className="font-serif text-charcoal/70 text-lg md:text-xl leading-relaxed">
              <p className="mb-6">{t(
                'Solange die Folie auf der Haut ist machst du gar nichts. Nichts. Überhaupt Nichts. Das ist eine der wichtigsten Pflegeempfehlungen überhaupt – überfordere deine Haut nicht.',
                'As long as the film is on your skin, you do nothing. Nothing at all. This is one of the most important care recommendations — don\'t overwhelm your skin.'
              )}</p>
              <p className="mb-6">{t(
                'Sollte sich in den ersten Stunden eine störende Blase mit Wundflüssigkeit gebildet haben, dann ist das nicht schlimm. Duschen ist mit der Membran ganz normal möglich.',
                'If a bothersome blister with wound fluid has formed in the first hours, that\'s not a problem. Showering with the membrane is completely normal.'
              )}</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold border-b border-gold/20 pb-2">{t('Tag 8', 'Day 8')}</h4>
            <div className="font-serif text-charcoal/70 text-lg md:text-xl leading-relaxed">
              <p className="mb-6">{t(
                'Nach 7 Tagen entfernst du die Membran, indem du sie an einer Ecke anhebst und lauwarmes Wasser zwischen Haut und Folie laufen lässt und dann vorsichtig abziehst.',
                'After 7 days, remove the membrane by lifting it at a corner and running lukewarm water between the skin and film, then carefully peeling it off.'
              )}</p>
              <p className="mb-6">{t(
                'Wasche die Haut mit warmen Wasser und PH-neutraler Seife mit sauberen, frisch gewaschenen Händen. Trockne die Haut anschließend mit einem Einwegtuch tupfend ab.',
                'Wash the skin with warm water and pH-neutral soap with clean, freshly washed hands. Then pat dry with a disposable towel.'
              )}</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-gold border-b border-gold/20 pb-2">{t('Tag 8 - 22', 'Day 8 - 22')}</h4>
            <div className="font-serif text-charcoal/70 text-lg md:text-xl leading-relaxed">
              <p className="mb-6">{t(
                'Bis etwa zwei Wochen nach dem Ablösen der Folie wiederholst du das hauchdünne Eincremen (mit sauberen, gewaschenen Händen) täglich 2-3 Mal.',
                'For about two weeks after removing the film, repeat the thin application of cream (with clean, washed hands) 2-3 times daily.'
              )}</p>
            </div>
          </div>
        </section>

        <section className="bg-charcoal text-[#F7F6F4] w-full max-w-4xl p-16 mb-40 flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl tracking-[0.2em] uppercase mb-16 text-center">
            {t('Was du tun oder lassen sollst…', 'What you should and shouldn\'t do…')}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full font-serif text-lg md:text-xl">
            <li>
              <span className="text-gold block mb-2 uppercase text-[11px] tracking-[0.2em]">{t('3 - 4 Wochen', '3 - 4 Weeks')}</span>
              {t('Kein Schwimmbad, Meer oder Badewanne (Haut quillt auf).', 'No swimming pool, ocean or bathtub (skin swells up).')}
            </li>
            <li>
              <span className="text-gold block mb-2 uppercase text-[11px] tracking-[0.2em]">{t('Sonne', 'Sun')}</span>
              {t('3-4 Wochen lang tabu! (Sonnenschutz ist danach Pflicht!).', 'Off limits for 3-4 weeks! (Sunscreen is mandatory after that!).')}
            </li>
            <li>
              <span className="text-gold block mb-2 uppercase text-[11px] tracking-[0.2em]">{t('Körperpflege', 'Body Care')}</span>
              {t('Keine Saunagänge, Dampfbäder oder Sport (Schwitzen vermeiden).', 'No sauna, steam baths or sports (avoid sweating).')}
            </li>
            <li>
              <span className="text-gold block mb-2 uppercase text-[11px] tracking-[0.2em]">{t('Produkte', 'Products')}</span>
              {t('Verwende nur im Studio erhältliche Aftercare Cremes.', 'Only use aftercare creams available at the studio.')}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
