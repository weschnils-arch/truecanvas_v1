import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { Hero } from './sections/Hero';
import { Header } from './sections/Header';
import { IntroGrid } from './sections/IntroGrid';
import { Services } from './sections/Services';
import { Studio } from './sections/Studio';
import { Piercing } from './sections/Piercing';
import { Process } from './sections/Process';
import { Testimonials } from './sections/Testimonials';
import { StylesShowcase } from './sections/StylesShowcase';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

// Pages
import GuestArtists from './pages/GuestArtists';
import ArtistsPage from './pages/ArtistsPage';
import StudioPage from './pages/StudioPage';
import FAQPage from './pages/FAQPage';
import TattooRemovalPage from './pages/TattooRemovalPage';
import CareInstructionsPage from './pages/CareInstructionsPage';
import BlogPage from './pages/BlogPage';
import PiercingPage from './pages/PiercingPage';

import { siteConfig } from './config';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  useLenis();

  useEffect(() => {
    if (siteConfig.siteTitle) document.title = siteConfig.siteTitle;
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden">
      <Hero />
      <IntroGrid />
      <StylesShowcase />
      <Services />
      <Studio />
      <Piercing />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  useLenis();
  return (
    <main className="relative w-full overflow-x-hidden">
      <Header />
      <div className="pt-40">
        {children}
      </div>
      <Footer />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artists" element={<PageWrapper><ArtistsPage /></PageWrapper>} />
        <Route path="/guest-artists" element={<PageWrapper><GuestArtists /></PageWrapper>} />
        <Route path="/studio" element={<PageWrapper><StudioPage /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQPage /></PageWrapper>} />
        <Route path="/tattoo-removal" element={<PageWrapper><TattooRemovalPage /></PageWrapper>} />
        <Route path="/care" element={<PageWrapper><CareInstructionsPage /></PageWrapper>} />
        <Route path="/piercing" element={<PageWrapper><PiercingPage /></PageWrapper>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
