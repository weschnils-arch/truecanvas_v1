import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function TattooRemovalPage() {
  const { t } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#F7F6F4] min-h-screen font-sans">
      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col items-center">
        <div className="text-center mb-32 max-w-4xl px-6">
          <h2 className="text-4xl md:text-5xl font-sans tracking-[0.2em] uppercase mb-12">
            {t('Platz für Neues schaffen', 'Making Room for the New')}
          </h2>
          <p className="font-serif italic text-2xl md:text-3xl text-charcoal/80 leading-relaxed uppercase">
            "{t('Dank fortgeschrittener Lasertechniken gibt es heute exzellente Möglichkeiten.', 'Thanks to advanced laser techniques, there are excellent options available today.')}"
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start w-full mb-40 overflow-hidden px-6">
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-4xl tracking-[0.1em] uppercase mb-8">
              {t('Medizinische Kompetenz trifft Handwerk', 'Medical Expertise Meets Craft')}
            </h3>
            <div className="font-serif text-charcoal/70 text-lg md:text-xl leading-relaxed flex flex-col gap-6">
              <p>{t(
                'Manchmal ändern sich Lebensumstände oder der persönliche Geschmack, und ein einst geliebtes Tattoo passt nicht mehr zu dir. Dank fortgeschrittener Lasertechniken gibt es heute exzellente Möglichkeiten, Tätowierungen sicher und effektiv zu entfernen.',
                'Sometimes life circumstances or personal taste change, and a once-loved tattoo no longer suits you. Thanks to advanced laser techniques, there are now excellent options for safely and effectively removing tattoos.'
              )}</p>
              <p>{t(
                'Bei Dr. Petra Hirtler bist du in den besten Händen. Als Spezialistin für Laserentfernung verbindet sie fachliche Kompetenz mit einer transparenten Beratung.',
                'With Dr. Petra Hirtler, you\'re in the best hands. As a specialist in laser removal, she combines professional expertise with transparent consultation.'
              )}</p>
              <p>{t(
                'Besonders wichtig für Cover-ups: Solltest du eine Laserbehandlung als Vorbereitung für ein neues Tattoo planen, stimme dich bitte vorab mit deinem Artist ab.',
                'Especially important for cover-ups: If you\'re planning laser treatment in preparation for a new tattoo, please coordinate with your artist in advance.'
              )}</p>
            </div>
          </div>
          <div className="flex flex-col gap-12 bg-white/50 p-12 border border-charcoal/5">
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] tracking-[0.3em] uppercase text-charcoal/40 border-b border-charcoal/10 pb-2">Location</h4>
              <p className="text-xl md:text-2xl font-serif italic text-charcoal/80">
                {t('Medizin am Hauptbahnhof, Wien', 'Medizin am Hauptbahnhof, Vienna')}
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <a href="https://www.tattooentfernung-wien.at/termin-medizin-am-hauptbahnhof/" target="_blank" rel="noreferrer"
                className="btn-premium-solid w-full">
                {t('Termin buchen', 'Book Appointment')}
              </a>
              <p className="text-xs text-charcoal/40 text-center uppercase tracking-widest leading-none">
                {t('Exklusiv bei Dr. Petra Hirtler', 'Exclusively with Dr. Petra Hirtler')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
