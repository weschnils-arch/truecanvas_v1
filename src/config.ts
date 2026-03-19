// Site Configuration
// TrueCanvas Tattoo Studio - Wien

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "de",
  siteTitle: "TrueCanvas - Tattoo Studio Wien",
  siteDescription: "TrueCanvas ist mehr als ein Tattoo-Studio. Ein Raum für echte Beziehungen, wo Handwerk, Vertrauen und die Menschen zählen.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "TRUE",
  heroImage: "/images/hero-portrait.webp",
  heroImageAlt: "TrueCanvas Tattoo Artist",
  overlayText: "CANVAS",
  brandName: "TRUE CANVAS",
  navLinks: [
    { label: "Artists", href: "#artists" },
    { label: "Guest Artists", href: "/guest-artists" },
    { label: "Studio", href: "#studio" },
    { label: "Kontakt", href: "#contact" },
  ],
};

// Intro Grid Section - Featured Work
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Kunst, die",
  titleLine2: "bleibt",
  description: "Ein Tattoo ist mehr als nur ein Bild – es ist ein Teil deiner Identität. In unserer Galerie findest du einen Auszug der Werke, die in entspannter Atmosphäre in unserem Wiener Studio entstanden sind. Jedes Piece erzählt seine eigene Geschichte, gefertigt mit höchster Präzision und dem Blick für das Detail.",
  portfolioImages: [
    { src: "/images/featured-01.webp", alt: "Fineline Floral Tattoo" },
    { src: "/images/featured-02.webp", alt: "Blackwork Geometric Tattoo" },
    { src: "/images/featured-03.webp", alt: "Illustrative Animal Tattoo" },
    { src: "/images/booking-atmosphere.webp", alt: "Studio Atmosphere" },
    { src: "/images/team-photo.webp", alt: "TrueCanvas Studio" },
  ],
  accentText: "Selected Works - 2026",
};

// Stats Section
export interface StatsConfig {
  stats: { value: number; suffix: string; label: string }[];
}

export const statsConfig: StatsConfig = {
  stats: [
    { value: 8, suffix: "+", label: "Jahre Erfahrung & Leidenschaft" },
    { value: 291, suffix: "+", label: "Unikate auf eurer Haut" },
    { value: 5, suffix: "+", label: "Guest Artists aus aller Welt" },
  ],
};

// Services Section - Our Values (Bei uns stehst du im Mittelpunkt)
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "Bei uns stehst du im Mittelpunkt",
  titleLine1: "Zeit für dich",
  titleLine2Italic: "Wahres Handwerk",
  description: "Bei uns gibt es keine Massenabfertigung. Wir nehmen uns die Zeit, die deine Idee verdient, und sorgen dafür, dass du dich ab der ersten Sekunde bei uns wohlfühlst.",
  services: [
    {
      iconName: "Clock",
      title: "Zeit für dich",
      description: "Bei uns gibt es keine Massenabfertigung. Wir nehmen uns die Zeit, die deine Idee verdient, und sorgen dafür, dass du dich ab der ersten Sekunde bei uns wohlfühlst.",
    },
    {
      iconName: "Award",
      title: "Wahres Handwerk",
      description: "Tinte ist Präzisionsarbeit. Wir vereinen höchste Qualität mit künstlerischer Leidenschaft. Jeder Nadelstich sitzt, weil wir unser Handwerk nicht nur beherrschen, sondern lieben.",
    },
    {
      iconName: "Shield",
      title: "Echtes Vertrauen",
      description: "Ein Tattoo bleibt für immer. Deshalb setzen wir auf ehrliche Beratung und volle Transparenz. Wir bauen keine Kundenkartei, sondern langfristige Beziehungen.",
    },
  ],
};

// About/Studio Section (Wo Kunst ein Zuhause hat)
export interface StudioConfig {
  subtitle: string;
  title: string;
  description: string;
  image: string;
}

export const studioConfig: StudioConfig = {
  subtitle: "Das Studio",
  title: "Wo Kunst ein Zuhause hat",
  description: "Als Max True Canvas 2018 mitten in Wien gründete, war die Vision klar: Ein Studio zu schaffen, das die typischen Klischees hinter sich lässt. Unser Raum ist hell, modern und einladend – ein Ort, an dem du dich sicher und verstanden fühlst, während wir deine Ideen zum Leben erwecken.\n\nBei uns triffst du auf ein festes Team aus passionierten Artists und ein ständig wechselndes Line-up an internationalen Gästen. Was uns alle verbindet? Die Liebe zum präzisen Handwerk und der Anspruch, dass jedes Tattoo so einzigartig ist wie der Mensch, der es trägt.\n\nKomm vorbei und überzeug dich selbst von der besonderen Atmosphäre bei True Canvas.",
  image: "/images/team-photo.webp",
};

// Tattoo Styles Section (Finde deinen Artist)
export interface TattooStyle {
  id: string;
  name: string;
  icon: string;
}

export interface TattooStylesConfig {
  subtitle: string;
  title: string;
  styles: TattooStyle[];
}

export const tattooStylesConfig: TattooStylesConfig = {
  subtitle: "Finde deinen Artist",
  title: "Ehrliches Feedback. Vielfalt in Perfektion.",
  styles: [
    { id: "realismus-farbe", name: "Realismus – Farbe", icon: "Palette" },
    { id: "realismus-bw", name: "Realismus – Black & Grey", icon: "Contrast" },
    { id: "surrealismus", name: "Surrealismus / Double Exposure", icon: "Layers" },
    { id: "dark-art", name: "Dark Art / Horror", icon: "Skull" },
    { id: "anime", name: "Anime / Manga / Cartoon", icon: "Sparkles" },
    { id: "blackwork", name: "Blackwork / Blackout", icon: "Square" },
    { id: "whip-shading", name: "Whip Shading / X-Ray", icon: "Waves" },
    { id: "mandalas", name: "Mandalas / Ornamente", icon: "Circle" },
    { id: "illustrativ", name: "Illustrativ / Graphisch", icon: "Pencil" },
    { id: "concept-art", name: "Concept Art / Geometrisch", icon: "Hexagon" },
    { id: "floral", name: "Floral / Botanisch", icon: "Flower2" },
    { id: "traditional", name: "Traditionell / Neo Traditional / Oldschool", icon: "Anchor" },
    { id: "tribal", name: "Tribal", icon: "Triangle" },
    { id: "doodle", name: "Doodle", icon: "PenTool" },
    { id: "sketchy", name: "Sketchy", icon: "Edit3" },
    { id: "watercolor", name: "Watercolor / Brush Strokes", icon: "Droplets" },
    { id: "fineline", name: "Fineline / One Line / Tiny Tattoos / Schriftzüge", icon: "Minus" },
    { id: "engraving", name: "Engraving / Woodcut / Linolschnitt", icon: "Mountain" },
    { id: "abstract", name: "Abstrakt / Abstract", icon: "Zap" },
    { id: "coverup", name: "Cover-up", icon: "RefreshCw" },
    { id: "dotwork", name: "Dotwork", icon: "Grid3X3" },
    { id: "suminagashi", name: "Suminagashi / Marble Technique", icon: "Blend" },
    { id: "asian", name: "Asian Style / Neo Japanese", icon: "Sun" },
    { id: "mixed", name: "Mixed Techniques / Mixed Media", icon: "Shuffle" },
  ],
};

// Piercing Section (Mayduna)
export interface PiercingConfig {
  title: string;
  description: string;
  features: { title: string; description: string }[];
}

export const piercingConfig: PiercingConfig = {
  title: "Mehr als nur Tattoos: Piercings bei Mayduna",
  description: "In Kooperation mit Mayduna bieten wir dir nun auch professionelle Piercings in der gewohnten True Canvas Atmosphäre an. Unser Partner teilt unsere höchsten Standards an Hygiene, Präzision und Ästhetik. Egal ob du ein neues Piercing planst oder dein bestehendes Setup erweitern möchtest – bei uns bist du in den besten Händen.",
  features: [
    { title: "Höchste Standards", description: "Unsere Partner teilen unsere Werte: höchste Hygiene, Präzision und beste Materialien." },
    { title: "Vertraute Atmosphäre", description: "Genieße die entspannte und professionelle Umgebung, die du bereits von True Canvas kennst." },
    { title: "Ästhetische Beratung", description: "Wir helfen dir, das perfekte Piercing zu finden, das deinen individuellen Stil unterstreicht." },
  ],
};

// Process Section (Dein Weg zum Tattoo)
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessConfig {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

export const processConfig: ProcessConfig = {
  title: "Dein Weg zum Tattoo",
  subtitle: "Ein professionelles Ergebnis braucht eine klare Struktur. Wir begleiten dich Schritt für Schritt durch den Prozess, um sicherzustellen, dass dein Design perfekt umgesetzt wird und du dich im Studio jederzeit gut aufgehoben fühlst.",
  steps: [
    { number: "Schritt 1", title: "Beratung & Planung", description: "Alles beginnt mit deiner Idee. Wir besprechen Motiv und Platzierung und beraten dich ehrlich zur langfristigen Umsetzbarkeit deines Projekts." },
    { number: "Schritt 2", title: "Entwurf & Vorbereitung", description: "Dein Artist erstellt ein individuelles Design. Am Termin passen wir Details gemeinsam an, bis du zu 100 % zufrieden bist. Erst dann starten wir." },
    { number: "Schritt 3", title: "Präzision & Hygiene", description: "Wir setzen dein Motiv in ruhiger Atmosphäre präzise um. Höchste Hygienestandards und eine ausführliche Pflegeberatung sind bei uns Standard." },
  ],
  ctaTitle: "Zeit für dein neues Tattoo",
  ctaDescription: "Bereit für dein nächstes Tattoo? Beschreibe uns kurz deine Idee, die gewünschte Stelle und den Stil. Wir melden uns zeitnah bei dir, um die Details zu besprechen und einen passenden Termin zu finden.",
  ctaButton: "Termin anfragen",
};

// Featured Projects Section - Tattoo Styles
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Tattoo Styles",
  titleRegular: "Unsere",
  titleItalic: "Spezialitäten",
  viewAllText: "Alle Styles ansehen",
  viewAllHref: "#styles",
  viewProjectText: "Mehr erfahren",
  projects: [
    {
      id: 1,
      title: "Realismus",
      category: "Black & Grey, Farbe",
      year: "2026",
      image: "/images/featured-03.webp",
      description: "Fotorealistische Tattoos mit atemberaubender Detailtreue und Tiefe.",
    },
    {
      id: 2,
      title: "Fineline",
      category: "Florals, Botanisch",
      year: "2026",
      image: "/images/featured-01.webp",
      description: "Zarte Linienführung für elegante, zeitlose Designs.",
    },
    {
      id: 3,
      title: "Blackwork",
      category: "Geometrisch, Mandala",
      year: "2026",
      image: "/images/featured-02.webp",
      description: "Kraftvolle Schwarzarbeit mit geometrischen Mustern und Ornamenten.",
    },
  ],
};

// Why Choose Me Section - Stats & Studio
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Das Studio",
  titleRegular: "Wo Kunst",
  titleItalic: "ein Zuhause hat",
  statsLabel: "Unsere Zahlen",
  stats: [
    { value: 8, suffix: "+", label: "Jahre Erfahrung" },
    { value: 291, suffix: "+", label: "Unique Tattoos" },
    { value: 5, suffix: "+", label: "Guest Artists" },
    { value: 100, suffix: "%", label: "Zufriedenheit" },
  ],
  featureCards: [
    {
      image: "/images/artist-01.webp",
      imageAlt: "Resident Artist",
      title: "Resident Artists",
      description: "Unser festes Team aus passionierten Künstlern mit unterschiedlichen Spezialgebieten.",
    },
    {
      image: "/images/guest-01.webp",
      imageAlt: "Guest Artist",
      title: "Guest Artists",
      description: "Internationale Künstler, die regelmäßig bei uns zu Gast sind und neue Perspektiven bringen.",
    },
  ],
  wideImage: "/images/team-photo.webp",
  wideImageAlt: "TrueCanvas Studio Wien",
  wideTitle: "Modern. Hell. Einladend.",
  wideDescription: "Als Max TrueCanvas 2018 mitten in Wien gründete, war die Vision klar: Ein Studio zu schaffen, das die typischen Klischees hinter sich lässt.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Kundenstimmen",
  titleRegular: "Was sie",
  titleItalic: "sagen",
  testimonials: [
    {
      id: 1,
      name: "Alex R.",
      role: "Kunde",
      image: "/images/testimonial-02.webp",
      quote: "Die ruhigste Studio-Atmosphäre, in der ich je war. Das Tattoo ist perfekt geheilt und sieht fantastisch aus.",
    },
    {
      id: 2,
      name: "Priya S.",
      role: "Kundin",
      image: "/images/testimonial-01.webp",
      quote: "Lena hat mir zugehört, Anpassungen vorgenommen und genau das geliefert, was ich mir vorgestellt habe.",
    },
    {
      id: 3,
      name: "Marco T.",
      role: "Kunde",
      image: "/images/testimonial-03.webp",
      quote: "Saubere Linien, tolle Energie, null Stress. Ich komme definitiv wieder für mein nächstes Tattoo.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Häufige Fragen",
  titleRegular: "Deine",
  titleItalic: "Fragen",
  ctaText: "Noch Fragen?",
  ctaButtonText: "Kontaktiere uns",
  ctaHref: "#contact",
  faqs: [
    {
      id: "1",
      question: "Wie buche ich einen Termin?",
      answer: "Du kannst ganz einfach über unser Buchungsformular einen Termin anfragen. Beschreibe deine Idee, die gewünschte Stelle und den Stil. Wir melden uns zeitnah bei dir.",
    },
    {
      id: "2",
      question: "Wie lange dauert die Heilung?",
      answer: "Die erste Heilungsphase dauert etwa 2-3 Wochen. Vollständig verheilt ist ein Tattoo nach etwa 6-8 Wochen. Wir geben dir eine detaillierte Pflegeanleitung mit.",
    },
    {
      id: "3",
      question: "Was kostet ein Tattoo?",
      answer: "Die Kosten hängen von Größe, Detailgrad und Zeitaufwand ab. Wir besprechen den Preis transparent im Vorfeld des Termins.",
    },
    {
      id: "4",
      question: "Kann ich mein eigenes Design mitbringen?",
      answer: "Absolut! Wir arbeiten gerne mit deinen Ideen. Unsere Artists beraten dich, wie das Design optimal umgesetzt werden kann.",
    },
    {
      id: "5",
      question: "Bietet ihr auch Piercings an?",
      answer: "Ja, in Kooperation mit Mayduna bieten wir professionelle Piercings in der gewohnten TrueCanvas Atmosphäre an.",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "TRUECANVAS",
  contactLabel: "Kontakt",
  email: "info@truecanvas.at",
  locationText: "Weyringergasse 19/1-3\n1040 Wien",
  navigationLabel: "Navigation",
  navLinks: [
    { label: "Artists", href: "#artists" },
    { label: "Guest Artists", href: "/guest-artists" },
    { label: "Studio", href: "#studio" },
    { label: "FAQ", href: "#faq" },
  ],
  socialLabel: "Folge uns",
  socialLinks: [
    { iconName: "Instagram", href: "https://instagram.com/truecanvas", label: "Instagram" },
    { iconName: "Facebook", href: "https://facebook.com/truecanvas", label: "Facebook" },
  ],
  tagline: "Mehr als nur Tinte unter deiner Haut.\nWien seit 2018.",
  copyright: "© 2026 TrueCanvas. All Rights Reserved.",
  bottomLinks: [
    { label: "AGB", href: "#agb" },
    { label: "Datenschutz", href: "#datenschutz" },
    { label: "Impressum", href: "#impressum" },
    { label: "Hygiene", href: "#hygiene" },
  ],
};

// Guest Artists Page Config
export interface GuestArtist {
  id: string;
  name: string;
  instagram: string;
  dateFrom: string;
  dateTo: string;
  month: string;
  year: string;
  styles: string[];
  image: string;
  portfolio: string[];
}

export interface GuestArtistsPageConfig {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  ctaText: string;
  filterLabel: string;
  monthFilterLabel: string;
  styleFilterLabel: string;
  artists: GuestArtist[];
  applySection: {
    title: string;
    description: string;
    ctaButton: string;
  };
}

export const guestArtistsPageConfig: GuestArtistsPageConfig = {
  heroTitle: "Internationale Gastkünstler in Wien",
  heroSubtitle: "Guest Artists",
  heroDescription: "TrueCanvas ist ein Kollektiv aus zehn Resident Artists, die technisches Fachwissen mit künstlerischer Leidenschaft verbinden. Entdecke die Vielfalt unserer Stile und finde genau den Artist, der deine Vision mit höchster Präzision auf die Haut bringt.",
  ctaText: "Guest Artists entdecken",
  filterLabel: "Filter",
  monthFilterLabel: "Monat auswählen",
  styleFilterLabel: "Tattoostyle wählen",
  artists: [
    {
      id: "liao-yk",
      name: "liao.yk.tattoo",
      instagram: "@liao.yk.tattoo",
      dateFrom: "05.01.",
      dateTo: "07.01.",
      month: "Januar",
      year: "2026",
      styles: ["Realismus – Black & Grey", "Fineline"],
      image: "/images/guest-01.webp",
      portfolio: ["/images/featured-01.webp", "/images/featured-02.webp"],
    },
    {
      id: "majadziaba",
      name: "majadziaba",
      instagram: "@majadziaba",
      dateFrom: "12.01.",
      dateTo: "20.01.",
      month: "Januar",
      year: "2026",
      styles: ["Floral / Botanisch", "Fineline"],
      image: "/images/guest-02.webp",
      portfolio: ["/images/featured-03.webp", "/images/featured-01.webp"],
    },
    {
      id: "alinayur",
      name: "alinayur.tattoo",
      instagram: "@alinayur.tattoo",
      dateFrom: "09.02.",
      dateTo: "12.02.",
      month: "Februar",
      year: "2026",
      styles: ["Realismus – Farbe", "Portraits"],
      image: "/images/guest-03.webp",
      portfolio: ["/images/featured-02.webp", "/images/featured-03.webp"],
    },
  ],
  applySection: {
    title: "Dein Guestspot in Wien",
    description: "Du möchtest als Artist bei True Canvas arbeiten? Wir bieten dir einen voll ausgestatteten Arbeitsplatz in einem modernen, hellen Studio im Herzen Wiens. Werde Teil unseres internationalen Line-ups und profitiere von einem professionellen Umfeld und kreativem Austausch. Schick uns einfach dein Portfolio und deinen Wunschzeitraum – wir freuen uns auf deine Anfrage.",
    ctaButton: "Jetzt anfragen",
  },
};

// Artists Section Config (custom)
export interface Artist {
  id: number;
  name: string;
  styles: string[];
  image: string;
  instagram?: string;
}

export interface ArtistsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  description: string;
  artists: Artist[];
}

export const artistsConfig: ArtistsConfig = {
  subtitle: "Das Team",
  titleRegular: "Unsere",
  titleItalic: "Artists",
  description: "TrueCanvas ist ein Kollektiv aus Resident Artists, die technisches Fachwissen mit künstlerischer Leidenschaft verbinden.",
  artists: [
    {
      id: 1,
      name: "Max",
      styles: ["Realismus"],
      image: "/images/artists/max.webp",
      instagram: "@thommesen_ink",
    },
    {
      id: 2,
      name: "Vroni",
      styles: ["Fineline", "Letterings", "Realismus"],
      image: "/images/artists/vroni.webp",
      instagram: "@tattooist_veronika",
    },
    {
      id: 3,
      name: "Roli",
      styles: ["Realismus"],
      image: "/images/artists/roli.webp",
      instagram: "@roli_ink",
    },
    {
      id: 4,
      name: "Rita",
      styles: ["Floral", "Fineline"],
      image: "/images/artists/rita.webp",
      instagram: "@innerbloom.ink",
    },
    {
      id: 5,
      name: "Nana",
      styles: ["Realismus", "Fineline"],
      image: "/images/artists/nana.webp",
      instagram: "@n.ana.ink",
    },
    {
      id: 6,
      name: "Hera",
      styles: ["Anime", "Graphic Designs"],
      image: "/images/artists/hera.webp",
      instagram: "@tati.tatts.od",
    },
    {
      id: 7,
      name: "Alina",
      styles: ["Realismus"],
      image: "/images/artists/alina.webp",
      instagram: "@a.l.i.e.n.tattoo",
    },
  ],
};

// Guest Artists Config (custom)
export interface GuestArtistsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  description: string;
  guests: Artist[];
}

export const guestArtistsConfig: GuestArtistsConfig = {
  subtitle: "Internationale Gäste",
  titleRegular: "Guest",
  titleItalic: "Artists",
  description: "Innovation lebt vom Austausch. Wir begrüßen regelmäßig hochkarätige Artists aus aller Welt bei TrueCanvas.",
  guests: [
    {
      id: 1,
      name: "Ryo Tanaka",
      styles: ["Japanese Blackwork"],
      image: "/images/guest-01.webp",
    },
    {
      id: 2,
      name: "Sasha Klein",
      styles: ["Fine-line Portraits"],
      image: "/images/guest-02.webp",
    },
    {
      id: 3,
      name: "Marco Belli",
      styles: ["Bold Traditional"],
      image: "/images/guest-03.webp",
    },
  ],
};

// Booking Section Config (custom)
export interface BookingConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  description: string;
  image: string;
  imageAlt: string;
  formFields: {
    name: string;
    email: string;
    idea: string;
    placement: string;
    dates: string;
  };
  buttonText: string;
  microcopy: string;
}

export const bookingConfig: BookingConfig = {
  subtitle: "Dein Termin",
  titleRegular: "Bereit für",
  titleItalic: "dein Tattoo?",
  description: "Beschreibe uns kurz deine Idee, die gewünschte Stelle und den Stil. Wir melden uns zeitnah bei dir.",
  image: "/images/booking-atmosphere.webp",
  imageAlt: "TrueCanvas Studio",
  formFields: {
    name: "Name",
    email: "E-Mail",
    idea: "Deine Idee / Style",
    placement: "Körperstelle",
    dates: "Bevorzugte Termine",
  },
  buttonText: "Termin anfragen",
  microcopy: "Typische Antwortzeit: 1-2 Werktage",
};
