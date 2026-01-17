'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { useInView } from 'react-intersection-observer';
import {
  Wallet,
  TrendingUp,
  FileText,
  Coins,
  BarChart3,
  Building2,
  Gem,
  Bitcoin,
  PiggyBank,
  Briefcase,
  Calculator,
  Shield,
  ChevronDown,
  Check,
} from 'lucide-react';

const services = [
  {
    icon: Wallet,
    titleKey: 'serviceLoansTitle',
    briefKey: 'serviceLoansBrief',
    details: ['loanDetail1', 'loanDetail2', 'loanDetail3', 'loanDetail4', 'loanDetail5'],
  },
  {
    icon: TrendingUp,
    titleKey: 'serviceStocksTitle',
    briefKey: 'serviceStocksBrief',
    details: ['stockDetail1', 'stockDetail2', 'stockDetail3', 'stockDetail4', 'stockDetail5'],
  },
  {
    icon: FileText,
    titleKey: 'serviceBondsTitle',
    briefKey: 'serviceBondsBrief',
    details: ['bondDetail1', 'bondDetail2', 'bondDetail3', 'bondDetail4', 'bondDetail5'],
  },
  {
    icon: Coins,
    titleKey: 'serviceMutualFundsTitle',
    briefKey: 'serviceMutualFundsBrief',
    details: ['mfDetail1', 'mfDetail2', 'mfDetail3', 'mfDetail4', 'mfDetail5'],
  },
  {
    icon: BarChart3,
    titleKey: 'serviceETFsTitle',
    briefKey: 'serviceETFsBrief',
    details: ['etfDetail1', 'etfDetail2', 'etfDetail3', 'etfDetail4', 'etfDetail5'],
  },
  {
    icon: Building2,
    titleKey: 'serviceRealEstateTitle',
    briefKey: 'serviceRealEstateBrief',
    details: ['reDetail1', 'reDetail2', 'reDetail3', 'reDetail4', 'reDetail5'],
  },
  {
    icon: Gem,
    titleKey: 'serviceCommoditiesTitle',
    briefKey: 'serviceCommoditiesBrief',
    details: ['commodityDetail1', 'commodityDetail2', 'commodityDetail3', 'commodityDetail4', 'commodityDetail5'],
  },
  {
    icon: Bitcoin,
    titleKey: 'serviceCryptoTitle',
    briefKey: 'serviceCryptoBrief',
    details: ['cryptoDetail1', 'cryptoDetail2', 'cryptoDetail3', 'cryptoDetail4', 'cryptoDetail5'],
  },
  {
    icon: PiggyBank,
    titleKey: 'serviceFDTitle',
    briefKey: 'serviceFDBrief',
    details: ['fdDetail1', 'fdDetail2', 'fdDetail3', 'fdDetail4', 'fdDetail5'],
  },
  {
    icon: Briefcase,
    titleKey: 'serviceAssetMgmtTitle',
    briefKey: 'serviceAssetMgmtBrief',
    details: ['assetDetail1', 'assetDetail2', 'assetDetail3', 'assetDetail4', 'assetDetail5'],
  },
  {
    icon: Calculator,
    titleKey: 'serviceTaxTitle',
    briefKey: 'serviceTaxBrief',
    details: ['taxDetail1', 'taxDetail2', 'taxDetail3', 'taxDetail4', 'taxDetail5'],
  },
  {
    icon: Shield,
    titleKey: 'serviceInsuranceTitle',
    briefKey: 'serviceInsuranceBrief',
    details: ['insuranceDetail1', 'insuranceDetail2', 'insuranceDetail3', 'insuranceDetail4', 'insuranceDetail5'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group"
    >
      <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-14 h-14 rounded-xl bg-slate-50 border border-gray-200 flex items-center justify-center mb-5"
        >
          <Icon className="w-7 h-7 text-gray-700" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3">{t(service.titleKey)}</h3>

        {/* Brief Description */}
        <p className="text-gray-500 leading-relaxed mb-4">{t(service.briefKey)}</p>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
        >
          <span>{t('learnMore')}</span>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </motion.button>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-gray-100">
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600">{t(detail)}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24 bg-white">
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
            transition={{ duration: 0.3 }}
            className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold mb-4"
          >
            {t('navServices')}
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('servicesTitle')}
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.titleKey} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
