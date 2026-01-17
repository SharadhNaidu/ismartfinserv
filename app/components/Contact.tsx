'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { useInView } from 'react-intersection-observer';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle,
} from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('phoneLabel'),
      lines: ['+91 6360233799', '+91 9880046990'],
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: Mail,
      label: t('emailLabel'),
      lines: ['ismartfinserv@gmail.com', 'ismartfinserv.com'],
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: MapPin,
      label: t('addressLabel'),
      lines: ['Near MedPlus, Muthyalpet Main Road', 'Mulbagal, Kolar Dist', 'Karnataka - 563131'],
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: Clock,
      label: t('hoursLabel'),
      lines: [t('weekdays'), t('saturday'), t('sunday')],
      gradient: 'from-gray-700 to-gray-900',
    },
  ];

  const services = [
    { value: 'loans', label: t('serviceLoansTitle') },
    { value: 'stocks', label: t('serviceStocksTitle') },
    { value: 'bonds', label: t('serviceBondsTitle') },
    { value: 'mutualfunds', label: t('serviceMutualFundsTitle') },
    { value: 'etfs', label: t('serviceETFsTitle') },
    { value: 'realestate', label: t('serviceRealEstateTitle') },
    { value: 'commodities', label: t('serviceCommoditiesTitle') },
    { value: 'crypto', label: t('serviceCryptoTitle') },
    { value: 'fd', label: t('serviceFDTitle') },
    { value: 'asset', label: t('serviceAssetMgmtTitle') },
    { value: 'tax', label: t('serviceTaxTitle') },
    { value: 'insurance', label: t('serviceInsuranceTitle') },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold mb-4"
          >
            {t('navContact')}
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('contactTitle')}
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                  className="flex gap-5 p-6 bg-white rounded-2xl hover:shadow-md transition-all duration-300 border border-gray-200"
                >
                  <div className="w-14 h-14 bg-slate-50 border border-gray-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{info.label}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('sendMessage')}</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16"
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-500">We will get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t('nameLabel')}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t('emailLabel')}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t('phoneLabel')}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-all"
                      />
                    </div>

                    {/* Service Selection */}
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>{t('selectService')}</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>{service.label}</option>
                      ))}
                    </select>

                    {/* Message */}
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t('messageLabel')}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 bg-gray-900 text-white font-semibold text-lg rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      {t('submitBtn')}
                    </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('locationTitle')}</h3>
            <p className="text-gray-500">{t('locationSubtitle')}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white">
            <div className="h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1768640153742!6m8!1m7!1sab224Ii5hQtxHaTsspd20Q!2m2!1d13.16292281247535!2d78.39820685647534!3f185.5978097428765!4f0.6183964113916147!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="IsmartFinserv Location"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="https://maps.app.goo.gl/SAJGiuejFL7SnPxb8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Navigate to IsmartFinserv
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
