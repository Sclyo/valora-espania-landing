
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-valoraBurgundy text-white">
      <div className="container-fluid py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-merriweather font-bold">Valor<span className="text-valoraGold">España</span></span>
            </a>
            <p className="text-white/80 mb-6 max-w-md">
              {t('companyDescription')}
            </p>
            
            {/* IESE Affiliation */}
            <div className="flex items-center mb-6">
              <div className="bg-white p-2 rounded mr-3">
                <img src="/iese-logo.svg" alt="IESE Business School" className="h-8" />
              </div>
              <p className="text-white/80 text-sm">
                Formados en IESE Business School
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-valoraGold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-valoraGold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
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
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{t('privacyPolicy')}</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{t('termsOfService')}</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">{t('cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
