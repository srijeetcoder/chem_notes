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
    <div className="glass-panel rounded-3xl p-5 border-white/5 shadow-md">
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2 text-zinc-250">
          <BookOpen className="w-4 h-4 text-emerald-455" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-white">Personal Study Notebook</h3>
        </div>
        <div className="text-[10px] font-mono font-bold uppercase tracking-wider">
          {saveStatus === 'saving' && <span className="text-cyan-400 animate-pulse">Syncing...</span>}
          {saveStatus === 'saved' && <span className="text-emerald-400">Synced</span>}
          {saveStatus === 'error' && (
            <span className="text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> Sync failed
            </span>
          )}
          {saveStatus === 'idle' && <span className="text-zinc-500">Local Draft</span>}
        </div>
      </div>
      <textarea
        value={localNote}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Jot down formulas, equations, or exam tips for this topic. They sync with your account automatically..."
        className="w-full h-32 p-3.5 text-xs rounded-2xl border border-white/5 bg-zinc-950/60 text-zinc-150 placeholder-zinc-550 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] leading-relaxed font-sans"
      />
      <div className="flex justify-end mt-3">
        <button
          onClick={() => handleSave(localNote)}
          disabled={saveStatus === 'saving' || localNote === initialNote}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-zinc-900/60 border border-white/5 hover:border-emerald-450 hover:bg-zinc-800/60 text-zinc-200 hover:text-white cursor-pointer disabled:opacity-50 transition-all shadow-md"
        >
          <Save className="w-3.5 h-3.5" />
          Save Now
        </button>
      </div>
    </div>
  );
};
