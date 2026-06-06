import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '../context/UserContext';
import { Save, BookOpen, AlertCircle } from 'lucide-react';

interface PersonalNoteBoxProps {
  topicId: string;
}

export const PersonalNoteBox: React.FC<PersonalNoteBoxProps> = ({ topicId }) => {
  const { notes, saveNote } = useUser();
  const initialNote = notes[topicId] || '';
  const [localNote, setLocalNote] = useState(initialNote);
  const [prevTopicId, setPrevTopicId] = useState(topicId);
  const [prevInitialNote, setPrevInitialNote] = useState(initialNote);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  if (topicId !== prevTopicId || initialNote !== prevInitialNote) {
    setPrevTopicId(topicId);
    setPrevInitialNote(initialNote);
    setLocalNote(initialNote);
    setSaveStatus('idle');
  }


  // Handle saving
  const handleSave = async (content: string) => {
    setSaveStatus('saving');
    const success = await saveNote(topicId, content);
    if (success) {
      setSaveStatus('saved');
      setTimeout(() => {
        setSaveStatus((current) => (current === 'saved' ? 'idle' : current));
      }, 2000);
    } else {
      setSaveStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setLocalNote(val);
    setSaveStatus('idle');

    // Debounce save (auto-save 1 second after user stops typing)
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      handleSave(val);
    }, 1000);
  };

  const handleBlur = () => {
    // Save immediately when textarea loses focus if not already saved
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (localNote !== initialNote && saveStatus !== 'saving' && saveStatus !== 'saved') {
      handleSave(localNote);
    }
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
          <BookOpen className="w-4 h-4 text-emerald-505" />
          <h3 className="text-sm font-semibold">Personal Study Notes</h3>
        </div>
        <div className="text-xs">
          {saveStatus === 'saving' && <span className="text-blue-500 animate-pulse font-medium">Saving...</span>}
          {saveStatus === 'saved' && <span className="text-emerald-500 font-medium">Auto-saved</span>}
          {saveStatus === 'error' && (
            <span className="text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" /> Save failed
            </span>
          )}
          {saveStatus === 'idle' && <span className="text-zinc-400 dark:text-zinc-500">Draft</span>}
        </div>
      </div>
      <textarea
        value={localNote}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Jot down formulas, equations, or exam tips for this topic. They sync with your account automatically..."
        className="w-full h-32 p-3 text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
      />
      <div className="flex justify-end mt-2">
        <button
          onClick={() => handleSave(localNote)}
          disabled={saveStatus === 'saving' || localNote === initialNote}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 hover:bg-emerald-100/80 text-emerald-600 border border-emerald-200 dark:bg-emerald-950/20 dark:hover:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800/40 cursor-pointer disabled:opacity-50 transition-colors"
        >
          <Save className="w-3.5 h-3.5" />
          Save Now
        </button>
      </div>
    </div>
  );
};
