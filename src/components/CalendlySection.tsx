
import React from 'react';
import CalendlyEmbed from './CalendlyEmbed';

const CalendlySection = () => {
  // Replace this URL with your actual Calendly scheduling page URL
  const calendlyUrl = 'https://calendly.com/your-calendly-username';

  return (
    <section id="appointment" className="py-16 bg-gray-50">
      <div className="container-fluid">
        <div className="text-center mb-10">
          <h2 className="heading-lg text-valoraBlue mb-4">Schedule an Appointment</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Select a convenient time for a consultation with our financial advisors through our online calendar.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <CalendlyEmbed url={calendlyUrl} />
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
