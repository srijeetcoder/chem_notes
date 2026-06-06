import { supabase } from './supabaseClient';

export interface UserSettings {
  theme: 'light' | 'dark';
  last_opened_topic: string | null;
}

export async function fetchUserSettings(userId: string): Promise<UserSettings | null> {
  const { data, error } = await supabase
    .from('user_settings')
    .select('theme, last_opened_topic')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) {
    console.error('Error fetching user settings:', error);
    return null;
  }

  if (!data) {
    // Return default settings
    return { theme: 'dark', last_opened_topic: null };
  }

  return data as UserSettings;
}

export async function updateUserSettings(
  userId: string,
  settings: Partial<UserSettings>
): Promise<boolean> {
  const { error } = await supabase
    .from('user_settings')
    .upsert(
      {
        user_id: userId,
        ...settings,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );

  if (error) {
    console.error('Error updating user settings:', error);
    return false;
  }
  return true;
}
