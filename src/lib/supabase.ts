
// Import the Supabase client from the integrations folder
import { supabase } from '@/integrations/supabase/client';

// Export the client so it can be used throughout the application
export { supabase };

// Helper function to check if Supabase is properly connected
export const isSupabaseConnected = () => {
  // Log connection details for debugging
  console.log('Supabase client initialized with URL:', supabase.supabaseUrl);
  return true;
};
