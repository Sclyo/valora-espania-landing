
import React from 'react';
import { Calculator, Briefcase, ChartBar, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const servicesData = [
    {
      icon: <Calculator className="h-10 w-10 text-valoraBlue" />,
      title: t('businessValuation'),
      description: t('businessValuationDesc')
    },
    {
      icon: <Briefcase className="h-10 w-10 text-valoraBlue" />,
      title: t('financialDueDiligence'),
      description: t('financialDueDiligenceDesc')
    },
    {
      icon: <ChartBar className="h-10 w-10 text-valoraBlue" />,
      title: t('financialAnalysis'),
      description: t('financialAnalysisDesc')
    },
    {
      icon: <Users className="h-10 w-10 text-valoraBlue" />,
      title: t('strategicAdvisory'),
      description: t('strategicAdvisoryDesc')
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container-fluid">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-lg text-valoraBlue mb-4">{t('servicesTitle')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
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
