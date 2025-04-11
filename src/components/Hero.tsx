
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Lock } from 'lucide-react';
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
            Valoración confidencial para empresas de 3-5M€ de facturación anual
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            {t('heroSubtitle')}
          </p>
          
          {/* New confidentiality note */}
          <div className="flex items-center bg-valoraBlue/10 p-3 rounded-md mb-4 border-l-4 border-valoraBlue">
            <Lock className="h-5 w-5 text-valoraBlue mr-2 flex-shrink-0" />
            <p className="text-sm md:text-base text-valoraBlue font-medium">
              {t('confidentialityNote')}
            </p>
          </div>
          
          {/* Added special offer note */}
          <div className="bg-valoraGold/10 p-4 rounded-md mb-8 border-l-4 border-valoraGold">
            <p className="text-sm md:text-base text-valoraBlue font-semibold">
              Ofrecemos la valoración sin coste si contamos con un contrato de exclusividad. 
              Garantizamos la venta de su empresa en menos de 6 meses.
            </p>
          </div>
          
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
