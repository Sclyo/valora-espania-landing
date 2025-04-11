
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container-fluid max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-valoraBlue mb-8">Política de Cookies</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
            
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su ordenador o dispositivo móvil cuando visita un sitio web. 
              Se utilizan ampliamente para hacer que los sitios web funcionen o funcionen de manera más eficiente, así como para 
              proporcionar información a los propietarios del sitio.
            </p>
            
            <h2>2. Cómo utilizamos las cookies</h2>
            <p>
              En Valor España, utilizamos cookies para mejorar su experiencia de navegación, analizar el uso del sitio y 
              personalizar el contenido. Específicamente, utilizamos cookies para:
            </p>
            <ul>
              <li>Recordar sus preferencias y configuraciones</li>
              <li>Entender cómo interactúa con nuestro sitio web</li>
              <li>Analizar el tráfico y el uso del sitio</li>
              <li>Mejorar nuestro contenido y servicios</li>
            </ul>
            
            <h2>3. Tipos de cookies que utilizamos</h2>
            <p>Utilizamos los siguientes tipos de cookies:</p>
            <ul>
              <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio web.</li>
              <li><strong>Cookies analíticas:</strong> Nos ayudan a entender cómo los visitantes interactúan con el sitio.</li>
              <li><strong>Cookies de preferencias:</strong> Permiten al sitio recordar sus elecciones para proporcionar funciones mejoradas.</li>
            </ul>
            
            <h2>4. Control de cookies</h2>
            <p>
              La mayoría de los navegadores web permiten cierto control de la mayoría de las cookies a través de la configuración del navegador. 
              Para obtener más información sobre las cookies, incluido cómo ver qué cookies se han establecido y cómo gestionarlas y eliminarlas, 
              visite www.allaboutcookies.org.
            </p>
            
            <h2>5. Cookies de terceros</h2>
            <p>
              En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de confianza. Nuestro sitio utiliza 
              servicios de análisis que nos ayudan a comprender cómo utiliza el sitio para que podamos mejorarlo.
            </p>
            
            <h2>6. Cambios en nuestra política de cookies</h2>
            <p>
              Cualquier cambio que podamos hacer en nuestra política de cookies en el futuro se publicará en esta página. 
              Le recomendamos que visite esta página con frecuencia para mantenerse informado sobre cómo utilizamos las cookies.
            </p>
            
            <h2>7. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre nuestra política de cookies, no dude en ponerse en contacto con nosotros en: info@instituto-valor-espana.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default CookiesPolicy;
