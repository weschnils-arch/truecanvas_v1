import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (de: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('tc-lang');
    if (saved === 'en' || saved === 'de') return saved;
    // Auto-detect browser language
    const browserLang = navigator.language?.split('-')[0];
    return browserLang === 'de' ? 'de' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('tc-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (de: string, en: string) => language === 'de' ? de : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  return (
    <button
      onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
      className="text-[10px] tracking-archive uppercase text-charcoal/40 hover:text-charcoal transition-colors px-2 py-1 border border-charcoal/10 hover:border-charcoal/20"
      aria-label="Toggle language"
    >
      {language === 'de' ? 'EN' : 'DE'}
    </button>
  );
}
