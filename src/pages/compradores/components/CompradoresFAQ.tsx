
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const CompradoresFAQ = () => {
  const faqItems = [
    {
      question: "¿Qué tipo de agencias de viajes buscáis para adquisición?",
      answer: "Nos especializamos en agencias de viajes establecidas con facturación entre 500K-5M€, que tengan cartera de clientes fidelizada, rutas o destinos únicos, y potencial de digitalización. Priorizamos aquellas con ubicaciones estratégicas y oportunidades claras de crecimiento."
    },
    {
      question: "¿Cuánto tiempo tarda el proceso de encontrar la agencia ideal?",
      answer: "Nuestro proceso de búsqueda y evaluación suele durar entre 3-6 meses, dependiendo de tus criterios específicos. Mantenemos una cartera actualizada de oportunidades y trabajamos de forma proactiva para acelerar el proceso cuando surge la oportunidad perfecta."
    },
    {
      question: "¿Qué incluye el servicio de acompañamiento post-adquisición?",
      answer: "Durante los primeros 6 meses te ayudamos con la integración operativa, optimización de procesos, implementación de herramientas digitales, retención de personal clave, y estrategias de crecimiento. El objetivo es asegurar una transición suave y el cumplimiento de objetivos."
    },
    {
      question: "¿Cómo garantizáis la confidencialidad durante el proceso?",
      answer: "Utilizamos acuerdos de confidencialidad estrictos con todas las partes, códigos anónimos para referencias internas, y revelamos identidades solo cuando hay interés mutuo confirmado. Tu identidad se protege hasta que decidas proceder con una negociación específica."
    },
    {
      question: "¿Qué pasa si la agencia adquirida no cumple las expectativas?",
      answer: "Nuestro proceso de due diligence minimiza estos riesgos, pero ofrecemos soporte continuo durante los primeros 6 meses. Si surgen problemas derivados de información incorrecta en el proceso, tenemos protocolos específicos de resolución y seguimiento."
    },
    {
      question: "¿Trabajáis solo con agencias en España?",
      answer: "Nos especializamos principalmente en el mercado español, pero también gestionamos oportunidades en Portugal y Andorra. Nuestro conocimiento profundo del marco regulatorio y mercado ibérico nos permite ofrecer el mejor asesoramiento en estas geografías."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-fluid">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-lg text-valoraBlue mb-4">Preguntas frecuentes sobre adquisiciones</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro proceso de identificación y adquisición de agencias de viajes
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

export default CompradoresFAQ;
