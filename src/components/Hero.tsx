
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-valoraBlue opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-valoraBlue/80 to-transparent"></div>
      </div>
      
      <div className="relative container-fluid py-20 md:py-32 z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="heading-xl text-valoraBlue mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contacto">
              <Button className="bg-valoraBlue hover:bg-valoraBlue-light text-white text-lg px-6 py-6">
                {t('requestValuation')}
              </Button>
            </a>
            <a href="#servicios">
              <Button variant="outline" className="border-valoraBlue text-valoraBlue hover:bg-valoraBlue/5 text-lg px-6 py-6">
                {t('ourServices')} <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
