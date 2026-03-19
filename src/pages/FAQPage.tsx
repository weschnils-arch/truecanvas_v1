import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

function AccordionItem({ question, answer, isOpen, onToggle }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (contentRef.current) setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className="border-b border-charcoal/10">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-6 text-left group">
        <span className="text-base md:text-lg text-charcoal pr-8" style={{ fontWeight: 400 }}>{question}</span>
        <span className="text-charcoal/50 flex-shrink-0 transition-transform duration-500" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden transition-all duration-500 ease-in-out" style={{ height }}>
        <p className="text-sm text-charcoal/60 leading-relaxed pb-6 pr-16 max-w-2xl">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const faqs = [
    {
      category: t("Termine & Buchung", "Appointments & Booking"),
      questions: [
        { q: t("Wie komme ich an einen Termin?", "How do I get an appointment?"), a: t('Über "Termin anfragen" kannst du eine Anfrage stellen. Wir melden uns zeitnah bei dir, um Details zu besprechen.', "You can submit a request via 'Book Appointment'. We'll get back to you promptly to discuss the details.") },
        { q: t("Wie lange wartet man auf einen Termin?", "How long is the wait for an appointment?"), a: t("Unsere Artists sind oft Monate im Voraus ausgebucht. Mit etwas Glück werden gerade Termine vergeben.", "Our artists are often booked months in advance. With some luck, appointments are currently being scheduled.") },
        { q: t("Gibt es eine Warteliste?", "Is there a waiting list?"), a: t('Jeder Artist handhabt das individuell. Generell werden Anfragen nur während "Books open" Phasen angenommen.', "Each artist handles this individually. Generally, inquiries are only accepted during 'books open' phases.") },
        { q: t("Wann sind die Books open?", "When are the books open?"), a: t("Das geben wir immer rechtzeitig über unsere Social Media Kanäle und hier auf der Website bekannt.", "We always announce this in advance on our social media channels and here on the website.") },
      ]
    },
    {
      category: t("Ablauf & Vorbereitung", "Process & Preparation"),
      questions: [
        { q: t("Darf ich zu einem Beratungsgespräch kommen?", "Can I come for a consultation?"), a: t("Ob eine persönliche Beratung notwendig ist, bespricht dein Artist mit dir, sobald dein Projekt angenommen wurde.", "Whether a personal consultation is necessary is discussed with your artist once your project has been accepted.") },
        { q: t("Sehe ich Entwürfe vorab?", "Do I see designs in advance?"), a: t("Nein, Entwürfe werden erst am Tag des Termins gemeinsam besprochen und finalisiert. Vorab werden keine Skizzen versendet.", "No, designs are discussed and finalized together on the day of the appointment. No sketches are sent in advance.") },
        { q: t("Gibt es vor meinem Termin etwas zu beachten?", "Is there anything to consider before my appointment?"), a: t("Komm bitte ausgeruht und satt. Am Vortag kein Alkohol, keine Drogen und kein übermäßiger Koffeinkonsum. Keine blutverdünnenden Mittel (z.B. Aspirin).", "Please come well-rested and well-fed. No alcohol, drugs or excessive caffeine the day before. No blood thinners (e.g. aspirin).") },
        { q: t("Darf ich eine Begleitperson mitbringen?", "Can I bring someone with me?"), a: t("Da wir in einer ruhigen Atmosphäre arbeiten möchten, bitten wir dich, ohne Begleitung zu kommen.", "Since we want to work in a calm atmosphere, we ask you to come without company.") },
      ]
    },
    {
      category: t("Preise & Hygiene", "Pricing & Hygiene"),
      questions: [
        { q: t("Was kostet ein Tattoo?", "How much does a tattoo cost?"), a: t("Wir rechnen auf Stundenbasis ab. Der Stundensatz variiert je nach Artist. Ein genauer Preis hängt von Größe und Details ab.", "We charge on an hourly basis. The hourly rate varies by artist. The exact price depends on size and detail.") },
        { q: t("Ab welchem Alter tätowiert ihr?", "What is the minimum age for tattooing?"), a: t("Wir tätowieren ausnahmslos erst ab 18 Jahren. Auch eine Einverständniserklärung der Eltern ändert das nicht.", "We only tattoo from age 18, no exceptions. Even parental consent does not change this.") },
        { q: t("Wie sind eure Hygienestandards?", "What are your hygiene standards?"), a: t("Wir arbeiten nach den strengsten österreichischen Hygienevorschriften und nutzen ausschließlich zertifizierte Einwegprodukte.", "We work according to the strictest Austrian hygiene regulations and exclusively use certified disposable products.") },
      ]
    }
  ];

  return (
    <div className="bg-[#F7F6F4] min-h-screen font-sans pb-32">
      <div className="max-w-[1000px] mx-auto px-6 py-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-sans tracking-[0.1em] uppercase mb-8">
            {t('Wissenswertes für deinen Besuch', 'What You Need to Know')}
          </h2>
          <p className="max-w-2xl mx-auto font-serif italic text-xl text-charcoal/60 leading-relaxed">
            {t('Ein perfektes Ergebnis erfordert eine gute Vorbereitung. Hier findest du die wichtigsten Informationen.', 'A perfect result requires good preparation. Here you\'ll find the most important information.')}
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {faqs.map((group) => (
            <div key={group.category}>
              <h3 className="text-[11px] tracking-[0.3em] uppercase text-charcoal/40 mb-8 border-b border-charcoal/10 pb-4">
                {group.category}
              </h3>
              {group.questions.map((item, i) => {
                const id = `${group.category}-${i}`;
                return (
                  <AccordionItem key={id} question={item.q} answer={item.a}
                    isOpen={openId === id} onToggle={() => setOpenId(openId === id ? null : id)} />
                );
              })}
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-charcoal/40 text-sm mb-6 uppercase tracking-[0.1em]">
            {t('Noch Fragen offen?', 'Still have questions?')}
          </p>
          <a href="mailto:info@truecanvas.at" className="text-xl md:text-2xl font-serif italic hover:text-gold transition-colors border-b border-charcoal/20 pb-1">
            info@truecanvas.at
          </a>
        </div>
      </div>
    </div>
  );
}
