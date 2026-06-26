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
      color: 'text-zinc-400 bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-800/40',
      icon: Circle,
    },
    in_progress: {
      label: 'In Progress',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_12px_rgba(34,211,238,0.15)]',
      icon: Clock,
    },
    completed: {
      label: 'Completed',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.15)]',
      icon: CheckCircle,
    },
    revision_needed: {
      label: 'Revision Needed',
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20 shadow-[0_0_12px_rgba(244,63,94,0.15)]',
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
        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer disabled:opacity-50 ${active.color}`}
      >
        <Icon className="w-4 h-4" />
        <span>{active.label}</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2.5 w-48 rounded-2xl glass-panel border-white/5 shadow-2xl focus:outline-none z-40 overflow-hidden divide-y divide-white/5">
            {Object.entries(statusConfig).map(([statusKey, config]) => {
              const StatusIcon = config.icon;
              return (
                <button
                  key={statusKey}
                  onClick={() => handleStatusChange(statusKey as ProgressStatus)}
                  className={`flex items-center gap-2.5 w-full px-4 py-3 text-xs transition-colors text-left text-zinc-300 hover:bg-white/5 hover:text-white cursor-pointer ${
                    currentStatus === statusKey ? 'bg-white/5 font-bold text-white' : ''
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
