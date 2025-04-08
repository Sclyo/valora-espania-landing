
import { createClient } from '@supabase/supabase-js';

// Supabase automatically provides these environment variables when connected
// These are public keys, not secrets
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
