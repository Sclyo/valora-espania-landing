
import { supabase } from '@/lib/supabase';

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}

export const submitContactForm = async (formData: Omit<ContactFormData, 'createdAt'>) => {
  try {
    console.log('Submitting form data to Supabase:', formData);
    
    // Add the current timestamp
    const contactData: ContactFormData = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([contactData]);

    if (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }

    console.log('Form submitted successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
