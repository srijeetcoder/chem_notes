import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.warn(
    'Supabase environment variables are missing. Using mock client configuration. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.'
  );
}

// Provide fallback placeholders to prevent createClient from throwing synchronously on boot
const urlToUse = supabaseUrl || 'https://placeholder-project-id.supabase.co';
const keyToUse = supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAwMDAwMDAsImV4cCI6MTk5MDAwMDAwMH0.placeholder';

export const supabase = createClient(urlToUse, keyToUse);
