import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { Bookmark } from 'lucide-react';

interface BookmarkButtonProps {
  topicId: string;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({ topicId }) => {
  const { bookmarks, toggleBookmark } = useUser();
  const isBookmarked = bookmarks.includes(topicId);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggle = async () => {
    setIsUpdating(true);
    await toggleBookmark(topicId);
    setIsUpdating(false);
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isUpdating}
      className={`p-2.5 rounded-xl border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/10 disabled:opacity-50 ${
        isBookmarked
          ? 'bg-amber-500/10 border-amber-500/20 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.15)]'
          : 'bg-zinc-900/40 border-white/5 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/40'
      }`}
      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Topic'}
    >
      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
    </button>
  );
};
