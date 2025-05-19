
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Lock, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
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
        <div className="flex flex-col md:flex-row md:gap-8 md:justify-between">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="heading-xl text-valoraBlue mb-4" data-lov-id>
              Venta garantizada & Valoración confidencial para empresas de 2-10M€ de facturación anual
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
          
          {/* Contact CTA Banner - Now wider and clickable on mobile */}
          <div className="mt-8 md:mt-0 md:self-start flex-shrink-0">
            <a 
              href="tel:644116796" 
              className="block no-underline hover:no-underline"
              aria-label="Llamar a 644 116 796"
            >
              <div className="bg-valoraBlue p-7 rounded-md text-white w-128 transition-all duration-200 hover:bg-valoraBlue-light">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="h-8 w-8 text-white animate-pulse" />
                  <p className="font-medium text-lg">¿Consulta inmediata?</p>
                </div>
                <div className="text-3xl font-bold">
                  644 116 796
                </div>
                <p className="mt-2 text-sm text-white/80">
                  {isMobile ? "Toca para llamar ahora" : "Respuesta en menos de 24h"}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
