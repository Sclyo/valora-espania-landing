
import React from 'react';
import { Shield, PiggyBank, BarChart } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-valoraGold" />,
    title: 'Experiencia y confianza',
    description: 'Más de 15 años valorando empresas españolas con metodologías probadas y adaptadas al mercado local.'
  },
  {
    icon: <PiggyBank className="h-10 w-10 text-valoraGold" />,
    title: 'Enfoque personalizado',
    description: 'Entendemos las particularidades de cada sector y adaptamos nuestros métodos a la realidad específica de su negocio.'
  },
  {
    icon: <BarChart className="h-10 w-10 text-valoraGold" />,
    title: 'Resultados accionables',
    description: 'No solo ofrecemos valoraciones, sino recomendaciones estratégicas para aumentar el valor de su empresa.'
  }
];

const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg text-valoraBlue mb-6">¿Por qué elegir Valora España?</h2>
            <p className="text-lg text-gray-700 mb-8">
              En Valora España entendemos las necesidades únicas de las PYMEs en el mercado español. Combinamos conocimiento técnico avanzado con un profundo entendimiento del tejido empresarial español para ofrecer valoraciones que realmente reflejen el potencial de su negocio.
            </p>
            
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
              <h3 className="text-2xl font-bold text-valoraBlue mb-4">Nuestra metodología</h3>
              <p className="text-gray-700 mb-4">
                Utilizamos una combinación de métodos de valoración adaptados a la realidad de las PYMEs españolas:
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">1. Análisis fundamental</h4>
                <p className="text-sm text-gray-600">Evaluación detallada de estados financieros e indicadores clave.</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">2. Valoración por múltiplos</h4>
                <p className="text-sm text-gray-600">Comparativas sectoriales contextualizadas al mercado español.</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">3. Descuento de flujos</h4>
                <p className="text-sm text-gray-600">Proyecciones financieras realistas adaptadas a su sector.</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-bold text-valoraBlue mb-1">4. Análisis cualitativo</h4>
                <p className="text-sm text-gray-600">Evaluación de factores intangibles y posicionamiento competitivo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
