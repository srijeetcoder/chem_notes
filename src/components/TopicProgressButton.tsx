import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { ProgressStatus } from '../lib/userProgress';
import { CheckCircle, Clock, AlertCircle, Circle, ChevronDown } from 'lucide-react';

interface TopicProgressButtonProps {
  topicId: string;
}

export const TopicProgressButton: React.FC<TopicProgressButtonProps> = ({ topicId }) => {
  const { progress, updateProgress } = useUser();
  const currentStatus = progress[topicId] || 'not_started';
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const statusConfig = {
    not_started: {
      label: 'Not Started',
      color: 'text-zinc-500 bg-zinc-100 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-800/80',
      icon: Circle,
    },
    in_progress: {
      label: 'In Progress',
      color: 'text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-800/40',
      icon: Clock,
    },
    completed: {
      label: 'Completed',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-800/40',
      icon: CheckCircle,
    },
    revision_needed: {
      label: 'Revision Needed',
      color: 'text-rose-600 bg-rose-50 border-rose-200 dark:bg-rose-950/20 dark:text-rose-400 dark:border-rose-800/40',
      icon: AlertCircle,
    },
  };

  const handleStatusChange = async (status: ProgressStatus) => {
    setIsUpdating(true);
    await updateProgress(topicId, status);
    setIsUpdating(false);
    setIsOpen(false);
  };

  const active = statusConfig[currentStatus];
  const Icon = active.icon;

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isUpdating}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer disabled:opacity-50 ${active.color}`}
      >
        <Icon className="w-4 h-4" />
        <span>{active.label}</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg ring-1 ring-black/5 focus:outline-none z-40 overflow-hidden divide-y divide-zinc-100 dark:divide-zinc-900">
            {Object.entries(statusConfig).map(([statusKey, config]) => {
              const StatusIcon = config.icon;
              return (
                <button
                  key={statusKey}
                  onClick={() => handleStatusChange(statusKey as ProgressStatus)}
                  className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm transition-colors text-left text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 cursor-pointer ${
                    currentStatus === statusKey ? 'bg-zinc-50/50 dark:bg-zinc-900/40 font-semibold text-zinc-900 dark:text-zinc-100' : ''
                  }`}
                >
                  <StatusIcon className="w-4 h-4" />
                  <span>{config.label}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
