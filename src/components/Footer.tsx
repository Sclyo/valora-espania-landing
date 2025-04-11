
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-valoraBlue text-white">
      <div className="container-fluid py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-lora font-bold">Valor<span className="text-valoraGold">España</span></span>
            </a>
            <p className="text-white/80 mb-6 max-w-md">
              {t('companyDescription')}
            </p>
            
            {/* IESE Affiliation */}
            <div className="flex items-center mb-6">
              <img src="/lovable-uploads/3ad1ed50-1e28-42d4-80de-8894a034c6ad.png" alt="IESE Business School" className="h-12 mr-3" />
              <p className="text-white/80 text-sm">
                Profesionales formados en IESE Business School
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('servicesFooter')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('businessValuation')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('financialDueDiligence')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('financialAnalysis')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('strategicAdvisory')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('home')}</a></li>
              <li><a href="#servicios" className="text-white/80 hover:text-white transition-colors">{t('services')}</a></li>
              <li><a href="#nosotros" className="text-white/80 hover:text-white transition-colors">{t('about')}</a></li>
              <li><a href="#testimonios" className="text-white/80 hover:text-white transition-colors">{t('testimonials')}</a></li>
              <li><a href="#contacto" className="text-white/80 hover:text-white transition-colors">{t('contact')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Valor España. {t('allRightsReserved')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/politica-privacidad" className="text-white/60 hover:text-white text-sm transition-colors">{t('privacyPolicy')}</a>
            <a href="/terminos-servicio" className="text-white/60 hover:text-white text-sm transition-colors">{t('termsOfService')}</a>
            <a href="/politica-cookies" className="text-white/60 hover:text-white text-sm transition-colors">{t('cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
