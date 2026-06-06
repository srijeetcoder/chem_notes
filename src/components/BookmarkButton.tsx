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
      className={`p-2 rounded-lg border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-50 ${
        isBookmarked
          ? 'bg-amber-50 border-amber-200 text-amber-500 dark:bg-amber-950/20 dark:border-amber-800/40 dark:text-amber-400'
          : 'bg-zinc-50 border-zinc-200 text-zinc-400 hover:text-zinc-600 dark:bg-zinc-900/40 dark:border-zinc-800/60 dark:text-zinc-500 dark:hover:text-zinc-300'
      }`}
      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Topic'}
    >
      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
    </button>
  );
};
