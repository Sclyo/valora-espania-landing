
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  // Function to handle smooth scrolling and update URL hash
  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Update URL hash
    window.location.hash = sectionId;
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div id="inicio" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-valoraBlue opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-valoraBlue/80 to-transparent"></div>
      </div>
      
      <div className="relative container-fluid py-20 md:py-32 z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="heading-xl text-valoraBlue mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            {t('heroSubtitle')}
          </p>
          
          {/* Confidentiality note */}
          <div className="flex items-center bg-valoraBlue/10 p-3 rounded-md mb-4 border-l-4 border-valoraBlue">
            <Lock className="h-5 w-5 text-valoraBlue mr-2 flex-shrink-0" />
            <p className="text-sm md:text-base text-valoraBlue font-medium">
              {t('confidentialityNote')}
            </p>
          </div>
          
          {/* Special offer note */}
          <div className="bg-valoraGold/10 p-4 rounded-md mb-8 border-l-4 border-valoraGold">
            <p className="text-sm md:text-base text-valoraBlue font-semibold">
              {t('specialOffer')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacto"
              onClick={(e) => scrollToSection('contacto', e)}
            >
              <Button className="bg-valoraBlue hover:bg-valoraBlue-light text-white text-lg px-6 py-6">
                {t('requestValuation')}
              </Button>
            </a>
            <a 
              href="#servicios"
              onClick={(e) => scrollToSection('servicios', e)}
            >
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
