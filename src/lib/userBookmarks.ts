import { supabase } from './supabaseClient';

export async function fetchBookmarks(userId: string): Promise<string[]> {
  const { data, error } = await supabase
    .from('user_bookmarks')
    .select('topic_id')
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching bookmarks:', error);
    return [];
  }

  return data ? data.map((item) => item.topic_id) : [];
}

export async function addBookmark(userId: string, topicId: string): Promise<boolean> {
  const { error } = await supabase
    .from('user_bookmarks')
    .upsert(
      {
        user_id: userId,
        topic_id: topicId,
        created_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,topic_id' }
    );

  if (error) {
    console.error('Error adding bookmark:', error);
    return false;
  }
  return true;
}

export async function removeBookmark(userId: string, topicId: string): Promise<boolean> {
  const { error } = await supabase
    .from('user_bookmarks')
    .delete()
    .eq('user_id', userId)
    .eq('topic_id', topicId);

  if (error) {
    console.error('Error removing bookmark:', error);
    return false;
  }
  return true;
}
