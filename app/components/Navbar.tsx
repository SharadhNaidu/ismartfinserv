'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import type { Language } from '../translations';

const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'EN' },
  { code: 'kn', name: 'ಕ' },
  { code: 'te', name: 'తె' },
  { code: 'ta', name: 'த' },
];

export default function Navbar() {
  const { t, language, setLanguage, setShowModal } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('navHome') },
    { href: '#services', label: t('navServices') },
    { href: '#about', label: t('navAbout') },
    { href: '#certificate', label: t('navCertificate') },
    { href: '#contact', label: t('navContact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="https://ismartfinserv.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-3 rounded-full px-4 py-2 border border-gray-900 text-gray-900 overflow-hidden shimmer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full border border-gray-200">
              <Image src="/logo.png" alt="IsmartFinserv logo" width={28} height={28} priority />
            </div>
            <span className="text-lg font-semibold">IsmartFinserv</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}

            {/* Language Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{languages.find(l => l.code === language)?.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                          language === lang.code ? 'bg-gray-50 text-gray-900 font-semibold' : 'text-gray-700'
                        }`}
                      >
                        {lang.name === 'EN' ? 'English' : lang.name === 'ಕ' ? 'ಕನ್ನಡ' : lang.name === 'తె' ? 'తెలుగు' : 'தமிழ்'}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t">
                <button
                  onClick={() => {
                    setShowModal(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50"
                >
                  <Globe className="w-4 h-4 inline mr-2" />
                  {t('selectLanguage')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
