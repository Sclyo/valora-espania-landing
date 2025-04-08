
import { supabase, isSupabaseConnected } from '@/lib/supabase';

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
    // Check if Supabase is connected
    if (!isSupabaseConnected()) {
      console.error('Supabase is not properly connected. Cannot submit form data.');
      throw new Error('Database connection error. Please try again later.');
    }

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

    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
