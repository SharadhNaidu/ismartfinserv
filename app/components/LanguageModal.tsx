'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Languages } from 'lucide-react';
import type { Language } from '../translations';

const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
];

export default function LanguageModal() {
  const { showModal, setLanguage, t } = useLanguage();

  if (!showModal) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50"
      >
        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6, bounce: 0.2 }}
          className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-lg w-[92%] mx-4 border border-gray-200"
        >
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Image src="/logo.png" alt="IsmartFinserv logo" width={36} height={36} />
            </div>
            <motion.h2
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
            >
              {t('selectLanguage')}
            </motion.h2>
            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-base"
            >
              {t('languageSubtitle')}
            </motion.p>
          </div>

          {/* Language Grid */}
          <div className="grid grid-cols-2 gap-4">
            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: 'spring', bounce: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage(lang.code)}
                className="relative group p-5 rounded-xl bg-white border border-gray-200 text-gray-800 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <Languages className="w-7 h-7 text-gray-600" />
                  <div className="text-center">
                    <div className="text-lg font-semibold">{lang.nativeName}</div>
                    <div className="text-sm text-gray-500">{lang.name}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <span className="text-base font-medium text-gray-500">IsmartFinserv</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
