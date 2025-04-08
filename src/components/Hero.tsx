
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-valoraBlue opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-valoraBlue/80 to-transparent"></div>
      </div>
      
      <div className="relative container-fluid py-20 md:py-32 z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="heading-xl text-valoraBlue mb-4">
            Valoración financiera especializada para PYMEs españolas
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Obtenga una valoración precisa y estratégica de su empresa para tomar decisiones informadas sobre inversiones, ventas o crecimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-valoraBlue hover:bg-valoraBlue-light text-white text-lg px-6 py-6">
              Solicitar valoración
            </Button>
            <Button variant="outline" className="border-valoraBlue text-valoraBlue hover:bg-valoraBlue/5 text-lg px-6 py-6">
              Nuestros servicios <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
