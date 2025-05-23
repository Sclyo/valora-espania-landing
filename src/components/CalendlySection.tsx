
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CalendlyEmbed from './CalendlyEmbed';

const CalendlySection = () => {
  const { language } = useLanguage();

  // URL de Calendly basada en el idioma actual
  const getCalendlyUrl = () => {
    switch (language) {
      case 'en': 
        return 'https://calendly.com/your-calendly-username/english';
      case 'ca':
      case 'val':
        return 'https://calendly.com/your-calendly-username/catala';
      case 'gl':
        return 'https://calendly.com/your-calendly-username/galego';
      case 'eu':
        return 'https://calendly.com/your-calendly-username/euskara';
      default: 
        return 'https://calendly.com/your-calendly-username/espanol'; // Español por defecto
    }
  };

  return (
    <section id="appointment" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-valoraBlue mb-4">Agenda una cita</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Selecciona un horario conveniente para una consulta con nuestros asesores financieros a través de nuestro calendario en línea.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <CalendlyEmbed url={getCalendlyUrl()} />
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
