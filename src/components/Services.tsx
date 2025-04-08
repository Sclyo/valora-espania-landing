
import React from 'react';
import { Calculator, Briefcase, ChartBar, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
  {
    icon: <Calculator className="h-10 w-10 text-valoraBlue" />,
    title: 'Valoración de empresas',
    description: 'Análisis exhaustivo del valor de su PYME utilizando múltiples metodologías adaptadas a su sector específico.'
  },
  {
    icon: <Briefcase className="h-10 w-10 text-valoraBlue" />,
    title: 'Due diligence financiera',
    description: 'Revisión completa de la situación financiera de la empresa antes de operaciones importantes como fusiones o adquisiciones.'
  },
  {
    icon: <ChartBar className="h-10 w-10 text-valoraBlue" />,
    title: 'Análisis financiero',
    description: 'Evaluación detallada de indicadores financieros clave y estrategias para mejorar la rentabilidad y eficiencia operativa.'
  },
  {
    icon: <Users className="h-10 w-10 text-valoraBlue" />,
    title: 'Asesoramiento estratégico',
    description: 'Consultoría especializada para optimizar su estructura financiera y preparar su empresa para futuras oportunidades de crecimiento.'
  }
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container-fluid">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-lg text-valoraBlue mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios profesionales de valoración financiera adaptados a las necesidades específicas de las pequeñas y medianas empresas españolas.
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
