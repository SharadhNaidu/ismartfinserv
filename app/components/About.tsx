'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Users, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { icon: ShieldCheck, value: '12+', label: t('statServices') },
    { icon: Award, value: '15+', label: t('statExperience') },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Brand */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image src="/logo.png" alt="IsmartFinserv logo" width={48} height={48} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">IsmartFinserv</p>
                  <p className="text-xl font-semibold text-gray-900">Trusted Financial Partner</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>{t('aboutText1')}</p>
                <p>{t('aboutText2')}</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold mb-4"
            >
              {t('navAbout')}
            </motion.span>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h2>

            <div className="w-16 h-0.5 bg-gray-900 rounded-full mb-8" />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    className="text-center bg-white border border-gray-200 rounded-xl p-4"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 bg-slate-50 border border-gray-200 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
