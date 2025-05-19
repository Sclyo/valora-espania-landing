
import React from 'react';
import { Calculator, Briefcase, ChartBar, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { TranslationKey } from '@/translations';

const Services = () => {
  const { t, language } = useLanguage();
  
  // Custom service descriptions that override translations when in Spanish
  const customSpanishDescriptions = {
    businessValuationDesc: "Valoramos su empresa de forma exhaustiva y completamente confidencial, ideal para propietarios que se acercan a la jubilación. Sin coste inicial: solo si decide vender con nosotros.",
    financialDueDiligenceDesc: "Revisamos en profundidad su situación financiera para garantizar que su empresa esté lista para atraer compradores serios y cerrar una operación exitosa.",
    financialAnalysisDesc: "¿Sucesión familiar o venta? Le ayudamos a evaluar cada opción con objetividad y discreción, para que tome la mejor decisión sin presión.",
    strategicAdvisoryDesc: "Optimizamos el valor de su empresa y buscamos compradores en un plazo máximo de seis meses. Exclusividad, compromiso y cero costes hasta el éxito."
  };
  
  // Determine which descriptions to use based on language
  const getDescription = (key: TranslationKey) => {
    if (language === 'es' && key in customSpanishDescriptions) {
      return customSpanishDescriptions[key as keyof typeof customSpanishDescriptions];
    }
    return t(key);
  };
  
  const servicesData = [
    {
      icon: <Calculator className="h-10 w-10 text-valoraBlue" />,
      title: t('businessValuation'),
      description: getDescription('businessValuationDesc')
    },
    {
      icon: <Briefcase className="h-10 w-10 text-valoraBlue" />,
      title: t('financialDueDiligence'),
      description: getDescription('financialDueDiligenceDesc')
    },
    {
      icon: <ChartBar className="h-10 w-10 text-valoraBlue" />,
      title: t('financialAnalysis'),
      description: getDescription('financialAnalysisDesc')
    },
    {
      icon: <Users className="h-10 w-10 text-valoraBlue" />,
      title: t('strategicAdvisory'),
      description: getDescription('strategicAdvisoryDesc')
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container-fluid">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-lg text-valoraBlue mb-4">Valoración confidencial para empresas de 2-10M€ de facturación anual</h2>
          <p className="text-xl text-valoraBlue font-semibold mb-4">
            Venta garantizada en 6 meses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-3">{service.icon}</div>
                <CardTitle className="text-xl text-valoraBlue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
