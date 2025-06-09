
import React from 'react';
import { Shield, PiggyBank, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const CompradoresAbout = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-valoraGold" />,
      title: "Experiencia en Sector Turístico",
      description: "Más de 20 años especializados en adquisiciones del sector turístico, conocemos las particularidades del negocio de agencias de viajes y tour operadores."
    },
    {
      icon: <PiggyBank className="h-10 w-10 text-valoraGold" />,
      title: "Enfoque Personalizado",
      description: "Cada adquisición es única. Adaptamos nuestra estrategia a tus objetivos específicos y presupuesto disponible para maximizar el retorno de inversión."
    },
    {
      icon: <Lock className="h-10 w-10 text-valoraGold" />,
      title: "Proceso Confidencial",
      description: "Garantizamos total discreción durante todo el proceso de búsqueda y negociación, protegiendo tanto tu identidad como la de las agencias objetivo."
    }
  ];

  const consultants = [
    {
      name: "Cristobal Pharose",
      role: "Especialista en adquisiciones sector turístico",
      image: "/lovable-uploads/36921a1a-4f17-4b0e-9dcf-eeb7c9393097.png",
      description: `Con más de 20 años de experiencia en adquisiciones y asesoramiento empresarial, 
      me especializo en identificar oportunidades únicas en el sector turístico. 
      Mi enfoque se centra en compradores que buscan agencias con potencial de crecimiento 
      y digitalización, especialmente aquellas con carteras de clientes leales 
      y rutas o destinos exclusivos.
      
      Ofrezco un servicio totalmente confidencial y personalizado, entendiendo 
      que cada adquisición debe alinearse perfectamente con la visión y objetivos 
      del comprador. Mi formación en IESE Business School me proporciona las 
      herramientas necesarias para evaluar no solo los números, sino también 
      el potencial estratégico de cada oportunidad.`
    },
    {
      name: "Leo Scapino",
      role: "Consultor en digitalización y growth para agencias",
      image: "/lovable-uploads/7f88e8bb-2f0d-4faa-a5da-aaa0f28dd6fe.png",
      description: `Consultor senior especializado en transformación digital y crecimiento acelerado de agencias de viajes, con más de 20 años de experiencia combinada en los sectores turístico y tecnológico. Gracias a mi formación en estrategia digital y gestión de proyectos (MBA IESE), así como mi experiencia en scale-ups tecnológicas del sector travel, aporto una perspectiva única para identificar agencias con potencial de escalabilidad.

      Con conocimiento profundo en revenue management, customer acquisition, plataformas de reservas, y estrategias omnicanal, estoy especialmente capacitado para evaluar el potencial de digitalización y crecimiento de agencias tradicionales. Mi enfoque combina análisis financiero riguroso con visión estratégica para identificar oportunidades de inversión que puedan multiplicar sus resultados mediante la implementación de tecnología y procesos optimizados.`
    }
  ];

  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-fluid">
        {/* Profile Section */}
        <div className="mb-16">
          <h2 className="heading-lg text-valoraBlue mb-8 text-center">Nuestros Especialistas en Adquisiciones</h2>
          <div className="flex flex-col gap-16">
            {consultants.map((consultant, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex flex-col items-center md:w-1/4">
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
                  <div className="flex-1 md:w-3/4">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-2xl font-bold text-valoraBlue mb-4">Perfil Profesional</h3>
                        <p className="text-gray-700 mb-4 whitespace-pre-line">
                          {consultant.description}
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
            <h2 className="heading-lg text-valoraBlue mb-6">¿Por qué elegirnos para tu adquisición?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Especialistas en identificar y adquirir agencias de viajes con potencial excepcional de crecimiento y digitalización.
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
              <h3 className="text-2xl font-bold text-valoraBlue mb-4">Nuestra Metodología de Adquisición</h3>
              <p className="text-gray-700 mb-4">
                Proceso estructurado de 5 fases para identificar, evaluar y adquirir la agencia ideal para ti.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">Análisis de Mercado</h4>
                <p className="text-sm text-gray-600">Identificación de oportunidades basada en tus criterios específicos de inversión</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">Due Diligence Exhaustiva</h4>
                <p className="text-sm text-gray-600">Evaluación completa de aspectos financieros, operativos y estratégicos</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">Valoración Especializada</h4>
                <p className="text-sm text-gray-600">Análisis específico del sector turístico y potencial de crecimiento digital</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">Negociación Estratégica</h4>
                <p className="text-sm text-gray-600">Gestión completa del proceso de negociación y cierre</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">Integración Post-Adquisición</h4>
                <p className="text-sm text-gray-600">Acompañamiento durante los primeros 6 meses para asegurar el éxito</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompradoresAbout;
