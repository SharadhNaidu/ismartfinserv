'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-gray-900">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src="/logo.png" alt="IsmartFinserv logo" width={34} height={34} />
              </div>
              <span className="text-lg font-semibold text-gray-900">
                IsmartFinserv
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-[5.5rem] 2xl:text-[6rem] font-semibold leading-[1.02] mb-6 max-w-none"
            >
              {t('heroTitle')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              {t('heroSubtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-lg font-semibold text-base shadow-sm hover:bg-gray-800 transition-colors"
              >
                {t('exploreServices')}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-gray-300 text-gray-900 rounded-lg font-semibold text-base hover:bg-gray-50 transition-colors"
              >
                {t('getInTouch')}
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="mt-10 grid grid-cols-2 gap-6"
            >
              {[
                { value: '12+', label: t('statServices') },
                { value: '15+', label: t('statExperience') },
              ].map((stat, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-200 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Trusted & Registered</p>
                <p className="text-lg font-semibold text-gray-900">IsmartFinserv</p>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                t('serviceLoansTitle'),
                t('serviceMutualFundsTitle'),
                t('serviceInsuranceTitle'),
                t('serviceTaxTitle'),
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-700 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-slate-50 border border-gray-200 rounded-xl">
              <p className="text-sm text-gray-600">{t('certificateSubtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
