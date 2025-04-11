
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container-fluid max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-valoraBlue mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
            
            <h2>1. Información que recopilamos</h2>
            <p>
              En Valor España, recopilamos información personal que usted nos proporciona directamente, como su nombre, dirección de correo electrónico, 
              número de teléfono y datos de la empresa cuando utiliza nuestro formulario de contacto o se comunica con nosotros.
            </p>
            
            <h2>2. Cómo utilizamos su información</h2>
            <p>Utilizamos la información que recopilamos para los siguientes propósitos:</p>
            <ul>
              <li>Proporcionar, mantener y mejorar nuestros servicios</li>
              <li>Responder a sus consultas y solicitudes</li>
              <li>Enviar información técnica, actualizaciones y mensajes administrativos</li>
              <li>Comunicarnos con usted sobre productos, servicios, ofertas y eventos</li>
            </ul>
            
            <h2>3. Compartición de información</h2>
            <p>
              No compartimos su información personal con terceros excepto en las siguientes circunstancias:
            </p>
            <ul>
              <li>Con su consentimiento</li>
              <li>Para cumplir con requisitos legales</li>
              <li>Para proteger nuestros derechos, propiedad o seguridad</li>
            </ul>
            
            <h2>4. Seguridad</h2>
            <p>
              Tomamos medidas razonables para proteger la información personal que recopilamos y almacenamos. Sin embargo, ningún método de transmisión o almacenamiento electrónico es 100% seguro.
            </p>
            
            <h2>5. Sus derechos</h2>
            <p>
              De acuerdo con la legislación aplicable, puede tener derecho a acceder, corregir, eliminar o limitar el uso de su información personal. 
              Si desea ejercer alguno de estos derechos, póngase en contacto con nosotros.
            </p>
            
            <h2>6. Cambios en esta política</h2>
            <p>
              Podemos modificar esta Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio material publicando la nueva política de privacidad en esta página.
            </p>
            
            <h2>7. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre esta Política de Privacidad, póngase en contacto con nosotros en: info@instituto-valor-espana.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
