-- Supabase Database Schema for Second Sem Chemistry
-- Set up authentication-linked tables with RLS and automated triggers

-- 1. User Profiles
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. User Settings
CREATE TABLE IF NOT EXISTS public.user_settings (
  user_id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  theme TEXT DEFAULT 'dark' CHECK (theme IN ('light', 'dark')),
  last_opened_topic TEXT DEFAULT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Topic Progress
CREATE TABLE IF NOT EXISTS public.user_topic_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  topic_id TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('not_started', 'in_progress', 'completed', 'revision_needed')),
  updated_at TIMESTAMPTZ DEFAULT now(),
  CONSTRAINT user_topic_progress_user_topic_unique UNIQUE (user_id, topic_id)
);

-- 4. Bookmarks
CREATE TABLE IF NOT EXISTS public.user_bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  topic_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  CONSTRAINT user_bookmarks_user_topic_unique UNIQUE (user_id, topic_id)
);

-- 5. Personal Study Notes
CREATE TABLE IF NOT EXISTS public.user_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  topic_id TEXT NOT NULL,
  content TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now(),
  CONSTRAINT user_notes_user_topic_unique UNIQUE (user_id, topic_id)
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_topic_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_notes ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Settings
CREATE POLICY "Users can view their own settings" ON public.user_settings
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own settings" ON public.user_settings
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own settings" ON public.user_settings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Topic Progress
CREATE POLICY "Users can manage their own topic progress" ON public.user_topic_progress
  FOR ALL USING (auth.uid() = user_id);

-- Bookmarks
CREATE POLICY "Users can manage their own bookmarks" ON public.user_bookmarks
  FOR ALL USING (auth.uid() = user_id);

-- Notes
CREATE POLICY "Users can manage their own notes" ON public.user_notes
  FOR ALL USING (auth.uid() = user_id);

-- Trigger to automatically create profile and settings on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (new.id, new.email, COALESCE(new.raw_user_meta_data->>'full_name', ''));
  
  INSERT INTO public.user_settings (user_id, theme)
  VALUES (new.id, 'dark');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
