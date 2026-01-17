'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Heart,
  Shield,
  Award,
} from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: t('navHome'), href: '#home' },
    { label: t('navServices'), href: '#services' },
    { label: t('navAbout'), href: '#about' },
    { label: t('navCertificate'), href: '#certificate' },
    { label: t('navContact'), href: '#contact' },
  ];

  const services = [
    { label: t('serviceLoansTitle'), href: '#services' },
    { label: t('serviceStocksTitle'), href: '#services' },
    { label: t('serviceMutualFundsTitle'), href: '#services' },
    { label: t('serviceInsuranceTitle'), href: '#services' },
    { label: t('serviceTaxTitle'), href: '#services' },
    { label: t('serviceAssetMgmtTitle'), href: '#services' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-white text-gray-800 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image src="/logo.png" alt="IsmartFinserv logo" width={32} height={32} />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">IsmartFinserv</h2>
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {t('footerTagline')}
              </p>
            </motion.div>

            {/* Trust Badges */}
            <div className="flex gap-4 mt-6">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-gray-200 rounded-lg">
                <Shield className="w-5 h-5 text-gray-700" />
                <span className="text-sm text-gray-700">{t('registered')}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-gray-200 rounded-lg">
                <Award className="w-5 h-5 text-gray-700" />
                <span className="text-sm text-gray-700">{t('certified')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 text-gray-900">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gray-900 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 text-gray-900">{t('navServices')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gray-900 transition-all duration-300" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 text-gray-900">{t('navContact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-slate-50 border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-gray-700">+91 6360233799</p>
                  <p className="text-gray-500 text-sm">+91 9880046990</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-slate-50 border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-gray-700">ismartfinserv@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-slate-50 border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-gray-700">Near MedPlus, Muthyalpet Main Road</p>
                  <p className="text-gray-500 text-sm">Mulbagal, Kolar Dist - 563131</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-t border-gray-200"
        >
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-gray-700" />
                </motion.a>
              );
            })}
          </div>

          {/* Newsletter */}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 w-64"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800"
            >
              {t('subscribe')}
            </motion.button>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <div className="py-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm leading-relaxed max-w-4xl mx-auto">
            {t('disclaimer')}
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} IsmartFinserv. {t('allRightsReserved')}
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            {t('madeWith')} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t('inIndia')}
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-11 h-11 bg-gray-900 rounded-full shadow-lg flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
}
