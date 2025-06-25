
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const FAQ = () => {
  const { t } = useLanguage();
  
  const faqItems = [
    {
      question: "¿Qué incluye exactamente la valoración gratuita?",
      answer: "Un análisis detallado de tu empresa realizado por expertos en finanzas corporativas, considerando su situación actual, potencial de crecimiento y comparables de mercado. Es totalmente confidencial y sin compromiso."
    },
    {
      question: "¿Por qué ofrecéis la valoración sin coste?",
      answer: "Porque trabajamos bajo un modelo \"éxito o nada\": solo cobramos si logramos vender tu empresa dentro del plazo acordado. Esto alinea nuestros intereses con los tuyos desde el primer día."
    },
    {
      question: "¿Qué significa \"exclusividad\" durante seis meses?",
      answer: "Significa que durante seis meses seremos los únicos encargados de gestionar la venta de tu empresa. Así podemos trabajar con seriedad y discreción, sin interferencias externas ni duplicidades."
    },
    {
      question: "¿Estoy obligado a vender si no me convence la oferta?",
      answer: "No. Siempre tendrás la última palabra sobre aceptar o no una oferta. Nuestro trabajo es conseguir propuestas que respeten el valor real y el legado de tu empresa."
    },
    {
      question: "¿Qué pasa si no se encuentra comprador en seis meses?",
      answer: "No tendrás ningún coste. Si no conseguimos una oferta que quieras aceptar en ese plazo, la exclusividad termina y puedes decidir como seguir."
    },
    {
      question: "¿El proceso es confidencial?",
      answer: "Sí, absolutamente. Protegemos la identidad de tu empresa durante todo el proceso hasta que autorices a compartirla con posibles compradores cualificados."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-fluid">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-lg text-valoraBlue mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios de valoración y venta de empresas
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-valoraBlue hover:text-valoraBlue">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
