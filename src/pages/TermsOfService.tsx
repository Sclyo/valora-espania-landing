
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container-fluid max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-valoraBlue mb-8">Términos de Servicio</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
            
            <h2>1. Aceptación de términos</h2>
            <p>
              Al acceder y utilizar el sitio web de Valor España, usted acepta estar sujeto a estos Términos de Servicio. 
              Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al sitio web.
            </p>
            
            <h2>2. Descripción del servicio</h2>
            <p>
              Valor España proporciona servicios de valoración financiera y asesoramiento para pequeñas y medianas empresas. 
              Los detalles específicos de nuestros servicios se describen en nuestro sitio web.
            </p>
            
            <h2>3. Propiedad intelectual</h2>
            <p>
              Todo el contenido incluido en el sitio web, como texto, gráficos, logotipos, iconos, imágenes, clips de audio, 
              descargas digitales y compilaciones de datos, es propiedad de Valor España o sus proveedores de contenido y 
              está protegido por las leyes de propiedad intelectual.
            </p>
            
            <h2>4. Restricciones de uso</h2>
            <p>Usted acepta no:</p>
            <ul>
              <li>Utilizar el sitio web de manera que pueda dañar, deshabilitar o sobrecargar nuestros servidores</li>
              <li>Usar robots, arañas u otros dispositivos automáticos para acceder al sitio web</li>
              <li>Recopilar información de usuarios sin su consentimiento</li>
              <li>Suplantar a otra persona o entidad</li>
            </ul>
            
            <h2>5. Exención de responsabilidad</h2>
            <p>
              Los materiales en el sitio web de Valor España se proporcionan "tal cual". No ofrecemos garantías, expresas o implícitas, 
              y por este medio renunciamos a todas las demás garantías, incluidas, sin limitación, las garantías implícitas de 
              comerciabilidad e idoneidad para un propósito particular.
            </p>
            
            <h2>6. Limitación de responsabilidad</h2>
            <p>
              En ningún caso Valor España o sus proveedores serán responsables por daños especiales, indirectos o consecuentes que 
              surjan del uso o la imposibilidad de usar el sitio web o los servicios.
            </p>
            
            <h2>7. Cambios en los términos</h2>
            <p>
              Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos términos en cualquier momento. 
              Le recomendamos que revise periódicamente los términos para conocer los cambios.
            </p>
            
            <h2>8. Ley aplicable</h2>
            <p>
              Estos términos se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta sus conflictos de disposiciones legales.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default TermsOfService;
