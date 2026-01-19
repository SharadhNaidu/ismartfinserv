'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { useInView } from 'react-intersection-observer';
import { Award, Download, FileCheck, Shield } from 'lucide-react';

export default function Certificate() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="certificate" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3 }}
            className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold mb-4"
          >
            {t('navCertificate')}
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('certificateTitle')}
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {t('certificateSubtitle')}
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: FileCheck, text: 'Registered Firm' },
            { icon: Shield, text: 'Verified & Trusted' },
            { icon: Award, text: 'Licensed Provider' },
          ].map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-gray-200 text-sm"
              >
                <Icon className="w-4 h-4 text-gray-700" />
                <span className="font-medium text-gray-700">{badge.text}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Certificate Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
            {/* Header Bar */}
            <div className="px-6 py-4 border-b border-gray-200 bg-slate-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gray-700" />
                  <span className="font-semibold text-gray-800">Registration Certificate</span>
                </div>
                <a
                  href="https://drive.google.com/uc?export=download&id=1rAjMHyGtgkojme4yrcVt80lTBZk1L8hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>{t('downloadCertificate')}</span>
                </a>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="p-6">
              <div className="flex justify-center">
                <div className="w-full max-w-4xl bg-white rounded-xl overflow-hidden border border-gray-200">
                  <div className="relative w-full aspect-[3/4] min-h-[420px] sm:min-h-[520px] lg:min-h-[680px]">
                    <iframe
                      src="https://drive.google.com/file/d/1rAjMHyGtgkojme4yrcVt80lTBZk1L8hi/preview"
                      className="absolute inset-0 w-full h-full border-0"
                      allow="autoplay"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Fallback */}
              <div className="mt-6 text-center">
                <p className="text-gray-500 mb-4">{t('certificateFallback')}</p>
                <a
                  href="https://drive.google.com/uc?export=download&id=1rAjMHyGtgkojme4yrcVt80lTBZk1L8hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  {t('downloadCertificate')}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
