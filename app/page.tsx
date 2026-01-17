'use client';

import { useLanguage } from './LanguageContext';
import LanguageModal from './components/LanguageModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const { showModal } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {showModal && <LanguageModal />}
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Certificate />
      <Contact />
      <Footer />
    </main>
  );
}
