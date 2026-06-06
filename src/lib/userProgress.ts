import { supabase } from './supabaseClient';

export type ProgressStatus = 'not_started' | 'in_progress' | 'completed' | 'revision_needed';

export interface TopicProgress {
  topic_id: string;
  status: ProgressStatus;
}

export async function fetchUserProgress(
  userId: string
): Promise<Record<string, ProgressStatus>> {
  const { data, error } = await supabase
    .from('user_topic_progress')
    .select('topic_id, status')
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching topic progress:', error);
    return {};
  }

  const progressMap: Record<string, ProgressStatus> = {};
  data?.forEach((item) => {
    progressMap[item.topic_id] = item.status as ProgressStatus;
  });
  return progressMap;
}

export async function updateTopicProgress(
  userId: string,
  topicId: string,
  status: ProgressStatus
): Promise<boolean> {
  const { error } = await supabase
    .from('user_topic_progress')
    .upsert(
      {
        user_id: userId,
        topic_id: topicId,
        status,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,topic_id' }
    );

  if (error) {
    console.error('Error updating topic progress:', error);
    return false;
  }
  return true;
}
