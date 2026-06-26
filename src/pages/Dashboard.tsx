import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { courseDetails, syllabus } from '../data/syllabus';
import { chemistryNotes } from '../data/chemistryNotes';
import {
  Atom, BookOpen, Clock, AlertCircle, Bookmark,
  LogOut, Sun, Moon, ArrowRight, User, Info, LayoutDashboard
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user, profile, settings, progress, bookmarks, changeSettings, signOut } = useUser();
  const navigate = useNavigate();
  const [selectedUnitNum, setSelectedUnitNum] = useState<number | null>(null);

  // Calculate stats
  const totalTopics = chemistryNotes.length;
  const completedTopics = Object.values(progress).filter(s => s === 'completed').length;
  const inProgressTopics = Object.values(progress).filter(s => s === 'in_progress').length;
  const revisionTopics = Object.values(progress).filter(s => s === 'revision_needed').length;
  const progressPercent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  const handleToggleTheme = () => {
    changeSettings({ theme: settings.theme === 'dark' ? 'light' : 'dark' });
  };

  const handleContinueStudying = () => {
    if (settings.last_opened_topic) {
      navigate(`/notes?topic=${encodeURIComponent(settings.last_opened_topic)}`);
    } else if (chemistryNotes.length > 0) {
      navigate(`/notes?topic=${encodeURIComponent(chemistryNotes[0].topicTitle)}`);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  // Get topics for a specific unit
  const getUnitTopics = (unitNumber: number) => {
    return chemistryNotes.filter(n => n.unitNumber === unitNumber);
  };

  // Get unit progress weight based on individual topic statuses
  const calculateUnitProgress = (unitNumber: number) => {
    const unitTopics = getUnitTopics(unitNumber);
    if (unitTopics.length === 0) return 0;
    
    let score = 0;
    unitTopics.forEach(t => {
      const status = progress[t.topicTitle] || 'not_started';
      if (status === 'completed') score += 1.0;
      else if (status === 'in_progress') score += 0.5;
    });
    
    return Math.round((score / unitTopics.length) * 100);
  };

  const activeUnit = selectedUnitNum !== null ? syllabus.find(u => u.unitNumber === selectedUnitNum) : null;
  const activeUnitTopics = selectedUnitNum !== null ? getUnitTopics(selectedUnitNum) : [];

  return (
    <div className="min-h-screen molecular-bg text-zinc-150 transition-colors font-sans pb-16 relative overflow-x-hidden">
      {/* Animated Scientific Grid */}
      <div className="scientific-grid animate-grid-move" />

      {/* Background glowing atoms & orbits */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/3 left-10 w-48 h-48 rounded-full border border-emerald-500/5 animate-molecular-float z-0" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full border border-cyan-400/5 animate-molecular-float z-0" style={{ animationDelay: '3s' }} />

      {/* Top Navbar */}
      <nav className="sticky top-4 z-30 mx-4 md:mx-8 my-4 glass-panel rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between border-white/10 shadow-lg shadow-black/40">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 flex items-center justify-center text-emerald-455 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Atom className="w-5 h-5 animate-spin text-emerald-400" style={{ animationDuration: '12s' }} />
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-white block">Second Sem Chemistry</span>
            <span className="text-[9px] block font-mono text-zinc-400 -mt-0.5">{courseDetails.courseCode}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 md:gap-3">
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
          
          <Link
            to="/notes"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent transition-all"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Study Notes</span>
          </Link>

          <div className="h-5 w-px bg-white/10 mx-1" />

          {/* Theme Toggle */}
          <button
            onClick={handleToggleTheme}
            className="p-2 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-800/40 hover:border-white/10 text-zinc-400 hover:text-white cursor-pointer transition-all"
            title="Toggle Theme"
          >
            {settings.theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="p-2 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-800/40 hover:border-rose-500/20 text-rose-500 hover:text-rose-400 cursor-pointer transition-all"
            title="Sign Out"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Welcome & Stats Row */}
        <div className="lg:col-span-12">
          <div className="glass-panel rounded-3xl border-white/80 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md relative overflow-hidden group">
            {/* Soft inner glow */}
            <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/25 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent tracking-tight font-sans">
                  Welcome, {profile?.full_name || user?.email?.split('@')[0] || 'Student'}!
                </h2>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed max-w-xl">
                  Review your syllabus coverage, track your progress status, and jump right back into your last opened topic with one click.
                </p>
              </div>
            </div>

            <button
              onClick={handleContinueStudying}
              className="relative z-10 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-zinc-950 font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:scale-[1.01] cursor-pointer animate-pulse"
              style={{ animationDuration: '4s' }}
            >
              <span>
                {settings.last_opened_topic 
                  ? `Continue: ${settings.last_opened_topic.length > 20 ? settings.last_opened_topic.substring(0, 17) + '...' : settings.last_opened_topic}`
                  : 'Start Studying'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-3xl border-white/80 shadow-md flex items-center justify-between gap-6 group hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex flex-col justify-between">
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Syllabus Progress</span>
              <div className="mt-3">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent tracking-tight">{progressPercent}%</span>
                <span className="text-[10px] block font-semibold text-emerald-400 mt-1">
                  {completedTopics}/{totalTopics} Completed
                </span>
              </div>
            </div>
            
            {/* Custom SVG Progress Ring */}
            <div className="relative w-18 h-18 shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                {/* Background Ring */}
                <path
                  className="text-white/5"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Progress Ring */}
                <path
                  className="text-emerald-500"
                  strokeWidth="3.5"
                  strokeDasharray={`${progressPercent}, 100`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  style={{ filter: 'drop-shadow(0 0 4px rgba(16, 185, 129, 0.4))' }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-zinc-350">
                {progressPercent}%
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-3xl border-white/80 shadow-md flex items-center justify-between group hover:border-cyan-400/20 transition-all duration-300">
            <div className="flex flex-col justify-between">
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">In Progress</span>
              <span className="text-3xl font-extrabold text-white tracking-tight mt-3">{inProgressTopics}</span>
              <span className="text-[10px] text-zinc-450 mt-1">Currently Studying</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          <div className="glass-panel p-5 rounded-3xl border-white/80 shadow-md flex items-center justify-between group hover:border-rose-500/20 transition-all duration-300">
            <div className="flex flex-col justify-between">
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Revision Needed</span>
              <span className="text-3xl font-extrabold text-white tracking-tight mt-3">{revisionTopics}</span>
              <span className="text-[10px] text-zinc-450 mt-1">Flagged Concepts</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.1)]">
              <AlertCircle className="w-5 h-5" />
            </div>
          </div>

          <div className="glass-panel p-5 rounded-3xl border-white/80 shadow-md flex items-center justify-between group hover:border-violet-500/20 transition-all duration-300">
            <div className="flex flex-col justify-between">
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Bookmarked Topics</span>
              <span className="text-3xl font-extrabold text-white tracking-tight mt-3">{bookmarks.length}</span>
              <span className="text-[10px] text-zinc-450 mt-1">Starred for Review</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.1)]">
              <Bookmark className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Course Details Card (Left - 4 columns) */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="glass-panel rounded-3xl border-white/85 p-6 shadow-md flex-grow">
            <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                <Info className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Course Specification</h3>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Course Title</span>
                <span className="text-xs font-semibold text-zinc-200">{courseDetails.courseTitle}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Course Code</span>
                  <span className="text-xs font-mono font-semibold text-cyan-400">{courseDetails.courseCode}</span>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Semester</span>
                  <span className="text-xs font-semibold text-zinc-200">{courseDetails.semester}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Contact Hours</span>
                  <span className="text-xs font-semibold text-zinc-200">{courseDetails.contactHours}</span>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Credits</span>
                  <span className="text-xs font-semibold text-emerald-400">4.0 Credits</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Continuous Assessment</span>
                  <span className="text-xs font-semibold text-zinc-200">{courseDetails.continuousAssessmentMarks}</span>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Final Semester Exam</span>
                  <span className="text-xs font-semibold text-zinc-200">{courseDetails.finalExamMarks}</span>
                </div>
              </div>
              <div>
                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Affiliation</span>
                <span className="text-xs font-semibold text-zinc-350 leading-relaxed block">{courseDetails.university}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Syllabus Units List (Right - 8 columns) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-bold text-base text-white tracking-wide">Syllabus Breakdown</h3>
            <span className="text-xs text-zinc-400 font-semibold">{syllabus.length} Core Modules</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {syllabus.map((unit) => {
              const unitProgress = calculateUnitProgress(unit.unitNumber);
              const unitTopicsCount = getUnitTopics(unit.unitNumber).length;

              return (
                <div
                  key={unit.unitNumber}
                  onClick={() => setSelectedUnitNum(unit.unitNumber)}
                  className="glass-panel rounded-3xl border-white/80 p-5 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[170px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Periodic Table Element Accent */}
                      <div className="w-10 h-10 rounded-xl bg-zinc-950/80 border border-white/5 flex flex-col items-center justify-center text-center shadow-inner group-hover:border-emerald-500/30 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.1)] transition-all">
                        <span className="text-[8px] font-mono text-zinc-500 uppercase leading-none">UNIT</span>
                        <span className="text-sm font-extrabold text-emerald-400 leading-none mt-0.5">{unit.unitNumber}</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">{unit.hours}</span>
                    </div>

                    <h4 className="text-sm font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                      {unit.unitTitle}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-white/5">
                    <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                      <span className="text-zinc-400">{unitTopicsCount} Topics</span>
                      <span className="text-emerald-400">{unitProgress}% Covered</span>
                    </div>
                    <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${unitProgress}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Unit Detail Modal Overlay */}
      {activeUnit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedUnitNum(null)} />
          
          <div className="glass-panel border-white/10 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="p-5 border-b border-white/5 bg-zinc-950/40 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Unit {activeUnit.unitNumber} Detailed Syllabus</span>
                <h3 className="text-base font-bold text-white leading-tight mt-1">{activeUnit.unitTitle}</h3>
              </div>
              <button
                onClick={() => setSelectedUnitNum(null)}
                className="w-8 h-8 rounded-xl border border-white/5 hover:border-white/10 bg-zinc-900/40 hover:bg-zinc-800/40 text-zinc-400 hover:text-white flex items-center justify-center text-lg cursor-pointer transition-all"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto divide-y divide-white/5 flex-grow">
              {activeUnitTopics.map((topic, i) => {
                const status = progress[topic.topicTitle] || 'not_started';
                const isBookmarked = bookmarks.includes(topic.topicTitle);
                
                let badgeColor = 'bg-zinc-950/60 text-zinc-400 border border-white/5';
                if (status === 'completed') badgeColor = 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
                else if (status === 'in_progress') badgeColor = 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20';
                else if (status === 'revision_needed') badgeColor = 'bg-rose-500/10 text-rose-400 border border-rose-500/20';

                return (
                  <div key={i} className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-grow max-w-md">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-[9px] font-mono text-zinc-500">Topic {i + 1}</span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md capitalize ${badgeColor}`}>
                          {status.replace('_', ' ')}
                        </span>
                        {isBookmarked && (
                          <span className="text-[9px] bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-md font-bold">
                            Bookmarked
                          </span>
                        )}
                      </div>
                      <h5 className="text-sm font-bold text-zinc-150 leading-snug">
                        {topic.topicTitle}
                      </h5>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedUnitNum(null);
                        navigate(`/notes?topic=${encodeURIComponent(topic.topicTitle)}`);
                      }}
                      className="px-4 py-2 text-xs font-bold rounded-xl bg-zinc-900/60 border border-white/5 hover:border-cyan-400/30 hover:bg-zinc-800/60 text-zinc-200 hover:text-white cursor-pointer flex items-center gap-1.5 transition-all self-start md:self-center shadow-md"
                    >
                      <span>Study Notes</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/5 bg-zinc-950/40 flex items-center justify-between text-xs text-zinc-500 font-medium">
              <span>{activeUnitTopics.length} core concepts mapped</span>
              <button 
                onClick={() => {
                  setSelectedUnitNum(null);
                  if (activeUnitTopics.length > 0) {
                    navigate(`/notes?topic=${encodeURIComponent(activeUnitTopics[0].topicTitle)}`);
                  }
                }}
                className="text-emerald-400 hover:text-emerald-300 font-extrabold cursor-pointer transition-colors"
              >
                Jump to Unit 1st Topic
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
