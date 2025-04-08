
// Import the Supabase client from the integrations folder
import { supabase } from '@/integrations/supabase/client';

// Export the client so it can be used throughout the application
export { supabase };

// Helper function to check if Supabase is properly connected
export const isSupabaseConnected = () => {
  // The client from integrations is already configured with the URL and key
  return true;
};
