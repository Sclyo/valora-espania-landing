
import { createClient } from '@supabase/supabase-js';

// Supabase automatically provides these environment variables when connected
// These are public keys, not secrets
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if the necessary environment variables are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are missing. Make sure you have connected to Supabase properly through the Lovable integration.');
}

// Create the Supabase client with explicit empty strings as fallbacks to prevent runtime errors
// This will create a non-functional client if variables are missing, but won't crash the app
export const supabase = createClient(
  supabaseUrl || '', 
  supabaseAnonKey || ''
);

// Helper function to check if Supabase is properly connected
export const isSupabaseConnected = () => {
  return !!supabaseUrl && !!supabaseAnonKey;
};
