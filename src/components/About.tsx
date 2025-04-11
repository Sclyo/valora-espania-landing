
import React from 'react';
import { Shield, PiggyBank, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from '@/components/ui/separator';

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

  const consultants = [
    {
      name: "Cristobal Pharose",
      role: "Asesor en valoración y fusiones/adquisiciones de PYMEs",
      image: "/lovable-uploads/36921a1a-4f17-4b0e-9dcf-eeb7c9393097.png"
    },
    {
      name: "Leo Scapino",
      role: "Consultor en valoración y compraventa de PYMEs",
      image: "/lovable-uploads/7f88e8bb-2f0d-4faa-a5da-aaa0f28dd6fe.png"
    }
  ];

  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-fluid">
        {/* Profile Section */}
        <div className="mb-16">
          <h2 className="heading-lg text-valoraBlue mb-8 text-center">Nuestros Consultores</h2>
          <div className="flex flex-col gap-16">
            {consultants.map((consultant, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden shadow-lg mb-4 w-40 h-40">
                      <img 
                        src={consultant.image} 
                        alt={consultant.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.error(`Error loading image: ${consultant.image}`);
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-valoraBlue">{consultant.name}</h3>
                      <p className="text-sm text-valoraGray">{consultant.role}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-2xl font-bold text-valoraBlue mb-4">Perfil Profesional</h3>
                        <p className="text-gray-700 mb-4">
                          Con más de 20 años de experiencia en la valoración y asesoramiento de empresas, 
                          nos especializamos en negocios con ingresos entre 3 y 5 millones de euros. 
                          Nuestro enfoque se centra en propietarios que están planificando su jubilación 
                          y buscan una estrategia de sucesión o venta exitosa.
                        </p>
                        <p className="text-gray-700">
                          Ofrecemos un servicio totalmente confidencial, entendiendo la importancia 
                          de la discreción en estos procesos críticos. Nuestra formación en IESE Business School 
                          nos proporciona las herramientas y conocimientos necesarios para asegurar 
                          transiciones exitosas y maximizar el valor de su negocio.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {index < consultants.length - 1 && (
                  <Separator className="my-8 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>

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
