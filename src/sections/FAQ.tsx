import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function AccordionItem({ question, answer, isOpen, onToggle }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className="border-b border-charcoal/8">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-7 md:py-8 text-left group">
        <span className="text-sm md:text-base text-charcoal pr-8" style={{ fontWeight: 400 }}>{question}</span>
        <span className="text-charcoal/50 flex-shrink-0 transition-transform duration-500"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden transition-all duration-500 ease-in-out" style={{ height }}>
        <p className="text-sm text-charcoal/60 leading-relaxed pb-8 pr-16 max-w-2xl">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const { t } = useLanguage();

  const faqs = [
    {
      id: '1',
      question: t('Wie buche ich einen Termin?', 'How do I book an appointment?'),
      answer: t(
        'Du kannst ganz einfach über unser Buchungsformular einen Termin anfragen. Beschreibe deine Idee, die gewünschte Stelle und den Stil. Wir melden uns zeitnah bei dir.',
        'You can easily request an appointment through our booking form. Describe your idea, desired placement and style. We\'ll get back to you promptly.'
      ),
    },
    {
      id: '2',
      question: t('Wie lange dauert die Heilung?', 'How long does healing take?'),
      answer: t(
        'Die erste Heilungsphase dauert etwa 2-3 Wochen. Vollständig verheilt ist ein Tattoo nach etwa 6-8 Wochen. Wir geben dir eine detaillierte Pflegeanleitung mit.',
        'The initial healing phase takes about 2-3 weeks. A tattoo is fully healed after about 6-8 weeks. We provide you with detailed aftercare instructions.'
      ),
    },
    {
      id: '3',
      question: t('Was kostet ein Tattoo?', 'How much does a tattoo cost?'),
      answer: t(
        'Die Kosten hängen von Größe, Detailgrad und Zeitaufwand ab. Wir besprechen den Preis transparent im Vorfeld des Termins.',
        'The cost depends on size, level of detail and time required. We discuss the price transparently before the appointment.'
      ),
    },
    {
      id: '4',
      question: t('Kann ich mein eigenes Design mitbringen?', 'Can I bring my own design?'),
      answer: t(
        'Absolut! Wir arbeiten gerne mit deinen Ideen. Unsere Artists beraten dich, wie das Design optimal umgesetzt werden kann.',
        'Absolutely! We love working with your ideas. Our artists will advise you on how to optimally execute the design.'
      ),
    },
    {
      id: '5',
      question: t('Bietet ihr auch Piercings an?', 'Do you also offer piercings?'),
      answer: t(
        'Ja, in Kooperation mit Mayduna bieten wir professionelle Piercings in der gewohnten TrueCanvas Atmosphäre an.',
        'Yes, in cooperation with Mayduna we offer professional piercings in the familiar TrueCanvas atmosphere.'
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-head',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
      );

      gsap.fromTo('.faq-list',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.faq-list', start: 'top 88%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="w-full py-16 md:py-24 bg-[#EDECE9]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="faq-head mb-12 md:mb-16">
            <p className="text-[11px] tracking-archive uppercase text-charcoal/40 mb-5">
              {t('Häufige Fragen', 'FAQ')}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.06em] uppercase text-charcoal">
              {t('Deine Fragen', 'Your Questions')}
            </h2>
          </div>

          <div className="faq-list border-t border-charcoal/8">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} question={faq.question} answer={faq.answer}
                isOpen={openId === faq.id} onToggle={() => setOpenId(openId === faq.id ? null : faq.id)} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/faq"
              className="inline-block px-10 py-4 border border-charcoal/15 text-[11px] tracking-archive uppercase text-charcoal hover:bg-charcoal hover:text-paper transition-all duration-500">
              {t('Alle Fragen ansehen', 'View All Questions')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
