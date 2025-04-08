
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle the form submission to your backend
    toast({
      title: "Formulario enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-lg text-valoraBlue mb-6">Hablemos sobre el valor de su empresa</h2>
            <p className="text-lg text-gray-700 mb-8">
              Complete el formulario y uno de nuestros especialistas en valoración se pondrá en contacto con usted para discutir cómo podemos ayudarle.
            </p>
            
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-valoraBlue flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+34 910 123 456</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-valoraBlue flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>info@valoraespana.com</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-valoraBlue flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Calle de Serrano 41, 28001 Madrid</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-valoraBlue mb-6">Solicite información</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-700 font-medium">Nombre</label>
                  <Input id="name" placeholder="Su nombre" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-gray-700 font-medium">Empresa</label>
                  <Input id="company" placeholder="Nombre de su empresa" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                  <Input id="email" type="email" placeholder="su@email.com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gray-700 font-medium">Teléfono</label>
                  <Input id="phone" placeholder="+34 XXX XXX XXX" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-700 font-medium">Mensaje</label>
                <Textarea id="message" placeholder="¿Cómo podemos ayudarle?" rows={5} required />
              </div>
              
              <Button type="submit" className="w-full bg-valoraBlue hover:bg-valoraBlue-light text-white py-6">
                Enviar mensaje
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Al enviar este formulario, acepta nuestra política de privacidad y el tratamiento de sus datos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
