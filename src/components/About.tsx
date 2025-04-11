
import React from 'react';
import { Shield, PiggyBank, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-valoraGold" />,
      title: t('experienceAndTrust'),
      description: t('experienceAndTrustDesc')
    },
    {
      icon: <PiggyBank className="h-10 w-10 text-valoraGold" />,
      title: t('customizedApproach'),
      description: t('customizedApproachDesc')
    },
    {
      icon: <Lock className="h-10 w-10 text-valoraGold" />,
      title: t('confidentiality'),
      description: t('confidentialityDesc')
    }
  ];

  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg text-valoraBlue mb-6">{t('whyChooseUs')}</h2>
            <p className="text-lg text-gray-700 mb-8">
              {t('aboutUsDescription')}
            </p>
            
            {/* IESE Affiliation Badge */}
            <div className="mb-8 flex items-center">
              <img src="/lovable-uploads/3ad1ed50-1e28-42d4-80de-8894a034c6ad.png" alt="IESE Business School" className="h-16 mr-3" />
              <p className="text-sm text-gray-600 italic">
                Profesionales formados en IESE Business School
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-valoraBlue mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-valoraBlue mb-4">{t('ourMethodology')}</h3>
              <p className="text-gray-700 mb-4">
                {t('methodologyDescription')}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">{t('fundamentalAnalysis')}</h4>
                <p className="text-sm text-gray-600">{t('fundamentalAnalysisDesc')}</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">{t('multipleValuation')}</h4>
                <p className="text-sm text-gray-600">{t('multipleValuationDesc')}</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">{t('discountedCashFlow')}</h4>
                <p className="text-sm text-gray-600">{t('discountedCashFlowDesc')}</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">{t('qualitativeAnalysis')}</h4>
                <p className="text-sm text-gray-600">{t('qualitativeAnalysisDesc')}</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">{t('successionPlanning')}</h4>
                <p className="text-sm text-gray-600">{t('successionPlanningDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
