
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/services/contactService';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  company: z.string().min(1, { message: 'La empresa es obligatoria' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    console.log('Form submitted with values:', values);
    setIsSubmitting(true);
    try {
      const formDataToSubmit = {
        name: values.name,
        company: values.company,
        email: values.email,
        phone: values.phone,
        message: values.message,
      };
      
      console.log('Sending data to contactService:', formDataToSubmit);
      await submitContactForm(formDataToSubmit);
      console.log('Form submission successful');
      
      // Instead of just showing toast, redirect to success page
      navigate('/contacto-enviado');
      
      form.reset();
    } catch (error) {
      console.error('Error in form submission:', error);
      toast({
        title: t('formErrorTitle'),
        description: t('formErrorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-lg text-valoraBlue mb-6">{t('contactTitle')}</h2>
            <p className="text-lg text-gray-700 mb-8">
              {t('contactSubtitle')}
            </p>
            
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-valoraBlue flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>{t('phone')}</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-valoraBlue flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>{t('email')}</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-valoraBlue flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>{t('address')}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-valoraBlue mb-6">{t('requestInfoTitle')}</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-gray-700 font-medium">{t('nameLabel')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('nameLabel')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-gray-700 font-medium">{t('companyLabel')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('companyLabel')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-gray-700 font-medium">{t('emailLabel')}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t('emailLabel')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-gray-700 font-medium">{t('phoneLabel')}</FormLabel>
                        <FormControl>
                          <Input placeholder="XXX XXX XXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-gray-700 font-medium">{t('messageLabel')}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t('messageLabel')} rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-valoraBlue hover:bg-valoraBlue-light text-white py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('submittingButton') : t('submitButton')}
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  {t('privacyNotice')}
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
