import { supabase } from './supabaseClient';

export async function fetchUserNotes(userId: string): Promise<Record<string, string>> {
  const { data, error } = await supabase
    .from('user_notes')
    .select('topic_id, content')
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching user notes:', error);
    return {};
  }

  const notesMap: Record<string, string> = {};
  data?.forEach((item) => {
    notesMap[item.topic_id] = item.content;
  });
  return notesMap;
}

export async function saveUserNote(
  userId: string,
  topicId: string,
  content: string
): Promise<boolean> {
  const { error } = await supabase
    .from('user_notes')
    .upsert(
      {
        user_id: userId,
        topic_id: topicId,
        content,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,topic_id' }
    );

  if (error) {
    console.error('Error saving user note:', error);
    return false;
  }
  return true;
}
