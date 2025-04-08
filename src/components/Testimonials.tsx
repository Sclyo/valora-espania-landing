
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const testimonials = [
  {
    quote: "La valoración realizada por Valora España nos permitió negociar nuestra ronda de financiación desde una posición mucho más sólida. Su análisis detallado impresionó a los inversores.",
    author: "María Sánchez",
    position: "CEO, TechnoMadrid S.L.",
    company: "Sector Tecnológico"
  },
  {
    quote: "Cuando decidimos vender parte de nuestra empresa familiar, necesitábamos una valoración en la que pudiéramos confiar. El equipo de Valora España nos proporcionó exactamente eso, con explicaciones claras y un proceso transparente.",
    author: "Javier Rodríguez",
    position: "Director General",
    company: "Industrias Mediterráneo"
  },
  {
    quote: "Su conocimiento del sector retail español es impresionante. Nos ayudaron a entender el verdadero valor de nuestro negocio y las áreas con mayor potencial de crecimiento.",
    author: "Ana Martín",
    position: "Fundadora",
    company: "Modas Barcelona"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="section-padding valora-gradient-bg text-white">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Hemos ayudado a cientos de PYMEs españolas a entender y maximizar su valor empresarial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="mb-4 text-valoraGold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.31-.406.7-.754 1.2-1.042l1.71-.843-1.41-.684c-1.17-.56-2.13-.974-2.87-1.23-.73-.254-1.57.044-2.5.299.05-.72.23-1.37.52-1.93.2-.394.5-.763.88-1.106-.38-.07-.76-.11-1.14-.12-1.55-.04-2.84.297-3.5 1.03C.72 5.242.2 6.98.2 8.98c0 1.244.22 2.272.64 3.08.42.81 1.02 1.222 1.81 1.24 1.04.02 1.73-.26 2.08-.8.35-.54.53-1.15.53-1.83 0-.66-.11-1.22-.33-1.69-.22-.46-.56-.73-1.02-.79-.25-.04-.51-.01-.75.08C3.1 7.14 3.06 7 3.11 6.86c.05-.14.19-.28.41-.44.22-.16.5-.29.83-.38.54-.14 1-.19 1.38-.14.38.04.71.18.99.41.77.67 1.16 1.56 1.16 2.67 0 1.14-.32 2.04-.95 2.72-.64.67-1.35 1.01-2.14 1.01-.21 0-.42-.02-.63-.06-.71-.14-1.28-.41-1.72-.82-.55-.53-.8-1.33-.8-2.41 0-1.96.5-3.44 1.49-4.45.99-1.01 2.34-1.52 4.05-1.52.21 0 .42.01.63.03.79.07 1.49.32 2.11.74.87.57 1.6 1.48 2.21 2.72.69 1.42 1.04 2.84 1.04 4.25 0 .80-.07 1.49-.22 2.06-.33 1.29-.97 2.31-1.92 3.06-.95.75-2.01 1.13-3.16 1.13-.66 0-1.27-.11-1.81-.32-.55-.21-.97-.48-1.27-.82-.09-.08-.15-.251-.22-.45-.28-.77-.47-1.34-.56-1.7-.02-.071-.04-.142-.05-.21-.22.19-.39.34-.5.45-.45.45-.88.78-1.29.99-.41.209-.89.329-1.45.329-.94 0-1.56-.33-2.61-1.46.21.13.39.21.56.26.17.05.37.07.6.07.70 0 1.34-.17 1.9-.52.57-.35 1.01-.77 1.32-1.27.31-.5.5-1 .56-1.52.06-.51.06-.95 0-1.32-.12-.74-.48-1.41-1.08-2.02C9.55 8.79 9.37 8.65 9.2 8.55c.03-.12.08-.16.14-.34.06-.17.1-.35.12-.53.03-.18.04-.32.02-.39-.02-.07-.08-.07-.17-.01-.09.58-.22 1.05-.39 1.39-.17.34-.33.58-.47.71-.36.33-.92.5-1.68.5-.15 0-.31-.01-.48-.04-.17-.02-.35-.06-.53-.11l-.06.31c0 .02-.01.07-.03.15l-.14.65c-.03.15-.06.27-.09.38.03.66.31 1.16.84 1.53.52.36 1.09.54 1.69.54.25 0 .5-.03.76-.9.58-.15 1.1-.49 1.56-1.01.46-.52.83-1.06 1.11-1.62l.18.09c.28.15.59.31.94.48 0 .23.05.99.14 2.27.02.36.05.72.09 1.08.4.42.34.701.47.82.16.15.5.29 1.03.4.52.12 1.01.17 1.46.17 1.71.0 3.14-.43 4.31-1.29 1.17-.86 1.95-2.09 2.35-3.68.11-.43.19-.88.23-1.33.05-.45.07-.87.07-1.26 0-1.56-.37-3.17-1.1-4.83-.05-.08-.1-.2-.14-.35-.25-.59-.58-1.19-.98-1.77-.4-.58-.8-1.06-1.18-1.42-.38-.37-.81-.7-1.29-.98-.32-.19-.65-.34-.99-.45-.67-.24-1.32-.36-1.96-.36-.64 0-1.24.1-1.67.25Z" />
                  </svg>
                </div>
                <p className="italic text-white/90 mb-4">
                  {testimonial.quote}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col items-start border-t border-white/10 pt-4">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-white/70">{testimonial.position}</p>
                <p className="text-sm text-white/70">{testimonial.company}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
