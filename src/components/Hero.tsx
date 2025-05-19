
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Lock, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Input } from '@/components/ui/input';
import { submitContactForm } from '@/services/contactService';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Function to handle smooth scrolling and update URL hash
  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Update URL hash
    window.location.hash = sectionId;
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Function to handle phone number input changes
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^\d]/g, '');
    // Limit to 9 digits
    setPhoneNumber(value.slice(0, 9));
  };
  
  // Function to handle form submission when input loses focus
  const handleBlur = async () => {
    // Only submit if 9 digits have been entered
    if (phoneNumber.length === 9 && !isSubmitting) {
      setIsSubmitting(true);
      try {
        // Submit minimalist form with just phone number
        await submitContactForm({
          name: "Consulta rápida telefónica",
          company: "Pendiente de contacto",
          email: "pendiente@example.com",
          phone: phoneNumber,
          message: "Solicitud de llamada desde formulario rápido",
        });
        
        toast({
          title: "Número recibido",
          description: "Te llamaremos lo antes posible",
        });
        
        // Reset form after successful submission
        setPhoneNumber("");
      } catch (error) {
        console.error('Error submitting phone number:', error);
        toast({
          title: "Error",
          description: "No se pudo enviar el número. Inténtalo más tarde.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <div id="inicio" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-valoraBlue opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-valoraBlue/80 to-transparent"></div>
      </div>
      
      <div className="relative container-fluid py-20 md:py-32 z-10">
        <div className="flex flex-col md:flex-row md:gap-8 md:justify-between">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="heading-xl text-valoraBlue mb-4" data-lov-id>
              Venta garantizada & Valoración confidencial para empresas de 2-10M€ de facturación anual
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              {t('heroSubtitle')}
            </p>
            
            {/* Confidentiality note */}
            <div className="flex items-center bg-valoraBlue/10 p-3 rounded-md mb-4 border-l-4 border-valoraBlue">
              <Lock className="h-5 w-5 text-valoraBlue mr-2 flex-shrink-0" />
              <p className="text-sm md:text-base text-valoraBlue font-medium">
                {t('confidentialityNote')}
              </p>
            </div>
            
            {/* Special offer note */}
            <div className="bg-valoraGold/10 p-4 rounded-md mb-8 border-l-4 border-valoraGold">
              <p className="text-sm md:text-base text-valoraBlue font-semibold">
                {t('specialOffer')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contacto"
                onClick={(e) => scrollToSection('contacto', e)}
              >
                <Button className="bg-valoraBlue hover:bg-valoraBlue-light text-white text-lg px-6 py-6">
                  {t('requestValuation')}
                </Button>
              </a>
              <a 
                href="#servicios"
                onClick={(e) => scrollToSection('servicios', e)}
              >
                <Button variant="outline" className="border-valoraBlue text-valoraBlue hover:bg-valoraBlue/5 text-lg px-6 py-6">
                  {t('ourServices')} <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Contact CTA Banner - Now wider and clickable on mobile */}
          <div className="mt-8 md:mt-0 md:self-start flex-shrink-0">
            <a 
              href="tel:644116796" 
              className="block no-underline hover:no-underline"
              aria-label="Llamar a 644 116 796"
            >
              <div className="bg-valoraBlue p-7 rounded-md text-white w-128 transition-all duration-200 hover:bg-valoraBlue-light">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="h-8 w-8 text-white animate-pulse" />
                  <p className="font-medium text-lg">¿Consulta inmediata?</p>
                </div>
                <div className="text-3xl font-bold">
                  644 116 796
                </div>
                <p className="mt-2 text-sm text-white/80">
                  {isMobile ? "Toca para llamar ahora" : "Respuesta en menos de 24h"}
                </p>
              </div>
            </a>
            
            {/* Quick phone number submission form */}
            <div className="mt-4 bg-white p-5 rounded-md shadow-md border border-gray-200">
              <p className="text-valoraBlue font-medium text-sm mb-2">
                O déjanos tu número y te llamamos
              </p>
              <div className="flex items-center gap-2">
                <Input
                  type="tel"
                  placeholder="Tu número de teléfono"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  onBlur={handleBlur}
                  maxLength={9}
                  className="bg-white"
                  disabled={isSubmitting}
                />
                {phoneNumber.length > 0 && (
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {phoneNumber.length}/9
                  </span>
                )}
              </div>
              {phoneNumber.length > 0 && phoneNumber.length < 9 && (
                <p className="text-amber-500 text-xs mt-1">
                  Introduce 9 dígitos para enviar
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
