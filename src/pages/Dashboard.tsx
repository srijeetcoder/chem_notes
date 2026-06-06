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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300 transition-colors font-sans pb-12">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 border border-emerald-500/10">
            <Atom className="w-5 h-5 animate-spin" style={{ animationDuration: '10s' }} />
          </div>
          <div>
            <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-zinc-50">Second Sem Chemistry</span>
            <span className="text-[10px] block font-mono text-zinc-400 dark:text-zinc-400 -mt-1">{courseDetails.courseCode}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
          
          <Link
            to="/notes"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-transparent"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Study Notes</span>
          </Link>

          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 mx-1" />

          {/* Theme Toggle */}
          <button
            onClick={handleToggleTheme}
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 cursor-pointer"
            title="Toggle Theme"
          >
            {settings.theme === 'dark' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 cursor-pointer"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Welcome & Stats Row (Takes full width of grid) */}
        <div className="lg:col-span-12">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/25">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  Welcome, {profile?.full_name || user?.email?.split('@')[0] || 'Student'}!
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Review your syllabus coverage and jump right back into your last opened topic.
                </p>
              </div>
            </div>

            <button
              onClick={handleContinueStudying}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 cursor-pointer"
            >
              <span>
                {settings.last_opened_topic 
                  ? `Continue: ${settings.last_opened_topic.length > 25 ? settings.last_opened_topic.substring(0, 22) + '...' : settings.last_opened_topic}`
                  : 'Start Studying'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-zinc-900 p-4.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col">
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-wider">Overall Syllabus Progress</span>
            <div className="flex items-end justify-between mt-3 mb-1.5">
              <span className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">{progressPercent}%</span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-md border border-emerald-100 dark:border-emerald-900/30">
                {completedTopics}/{totalTopics} Topics
              </span>
            </div>
            <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-4.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between">
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-wider">Currently Studying</span>
            <div className="flex items-center justify-between mt-3">
              <span className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">{inProgressTopics}</span>
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-blue-500">
                <Clock className="w-5 h-5" />
              </div>
            </div>
            <span className="text-[11px] text-zinc-400 dark:text-zinc-550 mt-1">In progress status</span>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-4.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between">
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-wider">Revision Needed</span>
            <div className="flex items-center justify-between mt-3">
              <span className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">{revisionTopics}</span>
              <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 text-rose-500">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>
            <span className="text-[11px] text-zinc-400 dark:text-zinc-550 mt-1">Requires study session</span>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-4.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between">
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-wider">Bookmarked Topics</span>
            <div className="flex items-center justify-between mt-3">
              <span className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">{bookmarks.length}</span>
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 text-amber-500">
                <Bookmark className="w-5 h-5" />
              </div>
            </div>
            <span className="text-[11px] text-zinc-400 dark:text-zinc-550 mt-1">Starred for quick review</span>
          </div>
        </div>

        {/* Course Details Card (Left - 4 columns) */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 p-5 shadow-sm flex-grow">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-zinc-250/60 dark:border-zinc-800/60">
              <Info className="w-4.5 h-4.5 text-emerald-555" />
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">Course Specification</h3>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">Course Title</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{courseDetails.courseTitle}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">Course Code</span>
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{courseDetails.courseCode}</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">Semester</span>
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{courseDetails.semester}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">Contact Hours</span>
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{courseDetails.contactHours}</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">Credits</span>
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">4.0 Credits</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">Continuous Assessment</span>
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{courseDetails.continuousAssessmentMarks}</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">Final Semester Exam</span>
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{courseDetails.finalExamMarks}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">Affiliation</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">{courseDetails.university}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Syllabus Units List (Right - 8 columns) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50">Syllabus Breakdown</h3>
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold">{syllabus.length} Units</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {syllabus.map((unit) => {
              const unitProgress = calculateUnitProgress(unit.unitNumber);
              const unitTopicsCount = getUnitTopics(unit.unitNumber).length;

              return (
                <div
                  key={unit.unitNumber}
                  onClick={() => setSelectedUnitNum(unit.unitNumber)}
                  className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 p-5 shadow-sm hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all cursor-pointer group flex flex-col justify-between min-h-[160px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-400 uppercase tracking-wider">Unit {unit.unitNumber}</span>
                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">{unit.hours}</span>
                    </div>

                    <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {unit.unitTitle}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                      <span className="text-zinc-400 dark:text-zinc-500">{unitTopicsCount} Topics</span>
                      <span className="text-emerald-600 dark:text-emerald-400">{unitProgress}% Covered</span>
                    </div>
                    <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-500 h-full rounded-full transition-all duration-300"
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
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedUnitNum(null)} />
          
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-150">
            {/* Modal Header */}
            <div className="p-5 border-b border-zinc-200/70 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Unit {activeUnit.unitNumber} Detailed Syllabus</span>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 leading-tight mt-0.5">{activeUnit.unitTitle}</h3>
              </div>
              <button
                onClick={() => setSelectedUnitNum(null)}
                className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-pointer transition-colors"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto divide-y divide-zinc-100 dark:divide-zinc-900 flex-grow">
              {activeUnitTopics.map((topic, i) => {
                const status = progress[topic.topicTitle] || 'not_started';
                const isBookmarked = bookmarks.includes(topic.topicTitle);
                
                let badgeColor = 'bg-zinc-100 text-zinc-500 dark:bg-zinc-900/60 dark:text-zinc-400';
                if (status === 'completed') badgeColor = 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400';
                else if (status === 'in_progress') badgeColor = 'bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400';
                else if (status === 'revision_needed') badgeColor = 'bg-rose-50 text-rose-600 dark:bg-rose-950/20 dark:text-rose-400';

                return (
                  <div key={i} className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-grow max-w-md">
                      <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                        <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">Topic {i + 1}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${badgeColor} capitalize`}>
                          {status.replace('_', ' ')}
                        </span>
                        {isBookmarked && (
                          <span className="text-[10px] bg-amber-50 text-amber-500 dark:bg-amber-950/20 dark:text-amber-400 px-1.5 py-0.5 rounded font-bold">
                            Bookmarked
                          </span>
                        )}
                      </div>
                      <h5 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                        {topic.topicTitle}
                      </h5>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedUnitNum(null);
                        navigate(`/notes?topic=${encodeURIComponent(topic.topicTitle)}`);
                      }}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-800/60 cursor-pointer flex items-center gap-1 transition-colors self-start md:self-center"
                    >
                      <span>Study Notes</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-zinc-200/70 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 font-medium">
              <span>{activeUnitTopics.length} core concepts mapped</span>
              <button 
                onClick={() => {
                  setSelectedUnitNum(null);
                  if (activeUnitTopics.length > 0) {
                    navigate(`/notes?topic=${encodeURIComponent(activeUnitTopics[0].topicTitle)}`);
                  }
                }}
                className="text-emerald-600 hover:underline dark:text-emerald-400 font-bold cursor-pointer"
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
