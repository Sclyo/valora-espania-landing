
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from "@/components/ui/use-toast"
import { useLanguage } from '@/contexts/LanguageContext';
import { submitContactForm } from '@/services/contactService';
import { CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
}

interface ContactProps {
  showCompactVersion?: boolean;
}

const Contact = ({ showCompactVersion = false }: ContactProps) => {
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();
  const [submissionResult, setSubmissionResult] = React.useState<
    { success: boolean; message: string } | null
  >(null);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      await submitContactForm(data);
      reset();
      setSubmissionResult({ success: true, message: 'Form submitted successfully!' });
      toast({
        title: "Formulario enviado",
        description: "Gracias por contactarnos, te responderemos lo antes posible.",
      })
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmissionResult({ success: false, message: error.message || 'An error occurred.' });
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo enviar el formulario. Inténtalo más tarde.",
      })
    }
  };

  return (
    <section id="contacto" className={`bg-white ${!showCompactVersion ? 'py-16 md:py-24' : ''}`}>
      <div className="container-fluid">
        {showCompactVersion ? (
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-valoraBlue mb-2">¿Interesado en nuestros servicios?</h3>
            <p className="text-gray-600">Complete el formulario y nos pondremos en contacto</p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-valoraBlue mb-4" data-lov-id>
              {t('contactTitle')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('contactSubtitle')}
            </p>
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          {submissionResult ? (
            <div className={`p-4 rounded-md text-center ${submissionResult.success ? 'text-green-500' : 'text-red-500'}`}>
              {submissionResult.success && <CheckCircle className="mx-auto mb-2 h-6 w-6" />}
              {submissionResult.message}
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
              <div>
                <Input
                  type="text"
                  placeholder={t('namePlaceholder')}
                  {...register('name', { required: t('nameRequired') })}
                  className="border-gray-300 rounded-md shadow-sm focus:ring-valoraBlue focus:border-valoraBlue"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
                )}
              </div>
              <div>
                <Input
                  type="text"
                  placeholder={t('companyPlaceholder')}
                  {...register('company', { required: t('companyRequired') })}
                  className="border-gray-300 rounded-md shadow-sm focus:ring-valoraBlue focus:border-valoraBlue"
                  aria-invalid={errors.company ? "true" : "false"}
                />
                {errors.company && (
                  <span className="text-red-500 text-sm mt-1">{errors.company.message}</span>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  {...register('email', {
                    required: t('emailRequired'),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t('emailInvalid'),
                    },
                  })}
                  className="border-gray-300 rounded-md shadow-sm focus:ring-valoraBlue focus:border-valoraBlue"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                )}
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder={t('phonePlaceholder')}
                  {...register('phone')}
                  className="border-gray-300 rounded-md shadow-sm focus:ring-valoraBlue focus:border-valoraBlue"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('messagePlaceholder')}
                  {...register('message', { required: t('messageRequired') })}
                  rows={4}
                  className="border-gray-300 rounded-md shadow-sm focus:ring-valoraBlue focus:border-valoraBlue"
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
                )}
              </div>
              <Button type="submit" className="bg-valoraBlue hover:bg-valoraBlue-light text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-valoraBlue focus:ring-opacity-50" disabled={isSubmitting}>
                {isSubmitting ? t('submitLoading') : t('submitButton')}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
