/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { User } from '@supabase/supabase-js';
import { fetchUserProgress, updateTopicProgress, ProgressStatus } from '../lib/userProgress';
import { fetchBookmarks, addBookmark, removeBookmark } from '../lib/userBookmarks';
import { fetchUserNotes, saveUserNote } from '../lib/userNotes';
import { fetchUserSettings, updateUserSettings, UserSettings } from '../lib/userSettings';

interface Profile {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
}

interface UserContextType {
  user: User | null;
  profile: Profile | null;
  settings: UserSettings;
  progress: Record<string, ProgressStatus>;
  bookmarks: string[];
  notes: Record<string, string>;
  loading: boolean;
  authLoading: boolean;
  updateProgress: (topicId: string, status: ProgressStatus) => Promise<boolean>;
  toggleBookmark: (topicId: string) => Promise<boolean>;
  saveNote: (topicId: string, content: string) => Promise<boolean>;
  changeSettings: (newSettings: Partial<UserSettings>) => Promise<boolean>;
  signOut: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [settings, setSettings] = useState<UserSettings>({ theme: 'dark', last_opened_topic: null });
  const [progress, setProgress] = useState<Record<string, ProgressStatus>>({});
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  const loadUserData = async (userId: string) => {
    setLoading(true);
    try {
      // Fetch Profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (profileData) {
        setProfile(profileData as Profile);
      }

      // Fetch User Settings
      const settingsData = await fetchUserSettings(userId);
      if (settingsData) {
        setSettings(settingsData);
        // Apply theme classes
        if (settingsData.theme === 'light') {
          document.documentElement.classList.remove('dark');
        } else {
          document.documentElement.classList.add('dark');
        }
      }

      // Fetch Progress
      const progressMap = await fetchUserProgress(userId);
      setProgress(progressMap);

      // Fetch Bookmarks
      const bookmarkedIds = await fetchBookmarks(userId);
      setBookmarks(bookmarkedIds);

      // Fetch Notes
      const notesMap = await fetchUserNotes(userId);
      setNotes(notesMap);

    } catch (err) {
      console.error('Error loading user data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Initialize Auth
  useEffect(() => {
    let mounted = true;

    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      if (session) {
        setUser(session.user);
        loadUserData(session.user.id);
      } else {
        setAuthLoading(false);
        setLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;
        if (session) {
          setUser(session.user);
          setAuthLoading(false);
          await loadUserData(session.user.id);
        } else {
          setUser(null);
          setProfile(null);
          setSettings({ theme: 'dark', last_opened_topic: null });
          setProgress({});
          setBookmarks([]);
          setNotes({});
          setAuthLoading(false);
          setLoading(false);
        }
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const updateProgress = async (topicId: string, status: ProgressStatus): Promise<boolean> => {
    if (!user) return false;
    const success = await updateTopicProgress(user.id, topicId, status);
    if (success) {
      setProgress((prev) => ({ ...prev, [topicId]: status }));
    }
    return success;
  };

  const toggleBookmark = async (topicId: string): Promise<boolean> => {
    if (!user) return false;
    const isBookmarked = bookmarks.includes(topicId);
    if (isBookmarked) {
      const success = await removeBookmark(user.id, topicId);
      if (success) {
        setBookmarks((prev) => prev.filter((id) => id !== topicId));
      }
      return success;
    } else {
      const success = await addBookmark(user.id, topicId);
      if (success) {
        setBookmarks((prev) => [...prev, topicId]);
      }
      return success;
    }
  };

  const saveNote = async (topicId: string, content: string): Promise<boolean> => {
    if (!user) return false;
    const success = await saveUserNote(user.id, topicId, content);
    if (success) {
      setNotes((prev) => ({ ...prev, [topicId]: content }));
    }
    return success;
  };

  const changeSettings = async (newSettings: Partial<UserSettings>): Promise<boolean> => {
    if (!user) return false;
    const success = await updateUserSettings(user.id, newSettings);
    if (success) {
      setSettings((prev) => {
        const updated = { ...prev, ...newSettings };
        if (newSettings.theme) {
          if (newSettings.theme === 'light') {
            document.documentElement.classList.remove('dark');
          } else {
            document.documentElement.classList.add('dark');
          }
        }
        return updated;
      });
    }
    return success;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };


  return (
    <UserContext.Provider
      value={{
        user,
        profile,
        settings,
        progress,
        bookmarks,
        notes,
        loading,
        authLoading,
        updateProgress,
        toggleBookmark,
        saveNote,
        changeSettings,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
