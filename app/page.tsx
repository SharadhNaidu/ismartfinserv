'use client';

import Script from 'next/script';
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'IsmartFinserv',
    url: 'https://ismartfinserv.co.in',
    telephone: ['+91 6360233799', '+91 9880046990'],
    email: 'ismartfinserv@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near MedPlus, Muthyalpet Main Road',
      addressLocality: 'Mulbagal',
      addressRegion: 'Karnataka',
      postalCode: '563131',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.1629228,
      longitude: 78.3982069,
    },
    areaServed: ['Mulbagal', 'Mulabagilu', 'Kolar', 'Karnataka'],
    sameAs: ['https://ismartfinserv.co.in'],
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
