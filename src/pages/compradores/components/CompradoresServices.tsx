
import React from 'react';
import { Calculator, Briefcase, ChartBar, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { TranslationKey } from '@/translations';

const CompradoresServices = () => {
  const { t, language } = useLanguage();
  
  // Custom service descriptions for travel agency acquisitions
  const customSpanishDescriptions = {
    businessValuationDesc: "Identificamos y evaluamos agencias de viajes únicas con potencial de crecimiento excepcional. Análisis exhaustivo de cartera de clientes, rutas exclusivas y oportunidades de digitalización.",
    financialDueDiligenceDesc: "Revisión profunda de la situación financiera y operativa de la agencia objetivo, asegurando transparencia total en indicadores clave como beneficios por cliente y márgenes por destino.",
    financialAnalysisDesc: "Evaluamos múltiples agencias disponibles para encontrar la mejor oportunidad de inversión, considerando ubicación estratégica, cartera de proveedores y potencial de expansión digital.",
    strategicAdvisoryDesc: "Te acompañamos durante todo el proceso de adquisición y los primeros 6 meses post-compra para asegurar una transición exitosa y el cumplimiento de objetivos de crecimiento."
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
      title: "Identificación de Oportunidades",
      description: getDescription('businessValuationDesc')
    },
    {
      icon: <Briefcase className="h-10 w-10 text-valoraBlue" />,
      title: "Due Diligence Especializada",
      description: getDescription('financialDueDiligenceDesc')
    },
    {
      icon: <ChartBar className="h-10 w-10 text-valoraBlue" />,
      title: "Análisis Comparativo",
      description: getDescription('financialAnalysisDesc')
    },
    {
      icon: <Users className="h-10 w-10 text-valoraBlue" />,
      title: "Acompañamiento Post-Adquisición",
      description: getDescription('strategicAdvisoryDesc')
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container-fluid">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="heading-lg text-valoraBlue mb-4">Proceso completo de adquisición para agencias de viajes con potencial de crecimiento</h1>
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

export default CompradoresServices;
