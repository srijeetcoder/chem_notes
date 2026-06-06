import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { syllabus } from '../data/syllabus';
import { chemistryNotes, ChemistryNote } from '../data/chemistryNotes';
import { TopicProgressButton } from '../components/TopicProgressButton';
import { BookmarkButton } from '../components/BookmarkButton';
import { PersonalNoteBox } from '../components/PersonalNoteBox';
import { ChemicalEquation } from '../components/ChemicalEquation';
import { MathRenderer, TextWithMath } from '../components/MathRenderer';
import {
  Atom, BookOpen, LogOut, Sun, Moon, Search, Download, ChevronRight,
  ChevronDown, LayoutDashboard, FileText, Sparkles, HelpCircle,
  CheckSquare, Menu, X
} from 'lucide-react';

export const Notes: React.FC = () => {
  const { progress, settings, changeSettings, signOut } = useUser();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Sidebar state
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedUnits, setExpandedUnits] = useState<Record<number, boolean>>({ 1: true });
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'study' | 'review' | 'exam'>('study');
  const [isPdfDownloading, setIsPdfDownloading] = useState(false);

  // Active topic logic
  const activeTopicTitle = searchParams.get('topic') || (chemistryNotes.length > 0 ? chemistryNotes[0].topicTitle : '');

  const activeNote = useMemo(() => {
    return chemistryNotes.find(n => n.topicTitle === activeTopicTitle) || chemistryNotes[0];
  }, [activeTopicTitle]);

  // Sync last opened topic with database settings
  useEffect(() => {
    if (activeNote && settings.last_opened_topic !== activeNote.topicTitle) {
      changeSettings({ last_opened_topic: activeNote.topicTitle });
    }
  }, [activeNote, settings.last_opened_topic, changeSettings]);

  const handleToggleTheme = () => {
    changeSettings({ theme: settings.theme === 'dark' ? 'light' : 'dark' });
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  // Group notes by unit
  const notesByUnit = useMemo(() => {
    const grouped: Record<number, ChemistryNote[]> = {};
    chemistryNotes.forEach(note => {
      if (!grouped[note.unitNumber]) {
        grouped[note.unitNumber] = [];
      }
      grouped[note.unitNumber].push(note);
    });
    return grouped;
  }, []);

  // Filtered notes based on search query
  const filteredNotes = useMemo(() => {
    if (!searchQuery.trim()) return chemistryNotes;
    const q = searchQuery.toLowerCase();
    return chemistryNotes.filter(n => 
      n.topicTitle.toLowerCase().includes(q) ||
      n.explanation.toLowerCase().includes(q) ||
      n.definition.toLowerCase().includes(q) ||
      n.shortAnswer.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Handle topic selection
  const handleSelectTopic = (topicTitle: string) => {
    setSearchParams({ topic: topicTitle });
    setIsMobileSidebarOpen(false);
  };

  const toggleUnit = (unitNum: number) => {
    setExpandedUnits(prev => ({ ...prev, [unitNum]: !prev[unitNum] }));
  };

  // PDF generation
  const handleDownloadPdf = () => {
    setIsPdfDownloading(true);
    const buildPdfLines = () => {
      const out = ["Second Sem Chemistry - Complete Study Notes", "Course Syllabus Mapped Reference Notes", ""];
      chemistryNotes.forEach((note) => {
        out.push(`Unit ${note.unitNumber}: ${note.topicTitle}`);
        out.push(`Definition: ${note.definition}`);
        out.push("");
        out.push("Explanation:");
        out.push(note.explanation);
        
        if (note.formulas && note.formulas.length > 0) {
          out.push("Formulas:");
          note.formulas.forEach((x, i) => out.push(`${i + 1}. ${x}`));
        }
        
        if (note.equations && note.equations.length > 0) {
          out.push("Reactions & Equations:");
          note.equations.forEach((x, i) => out.push(`${i + 1}. ${x}`));
        }
        
        if (note.applications && note.applications.length > 0) {
          out.push("Engineering Applications:");
          note.applications.forEach((x, i) => out.push(`${i + 1}. ${x}`));
        }

        out.push("Short Answer Prep:");
        out.push(note.shortAnswer);
        out.push("Long Answer Prep:");
        out.push(note.longAnswer);
        out.push("\n--------------------------------------------------\n");
      });
      return out;
    };

    const make = () => {
      const doc = new (window as any).jspdf.jsPDF({ unit: "pt", format: "a4" });
      const margin = 42;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const maxWidth = pageWidth - margin * 2;
      let y = 50;
      
      const add = (text: string, size = 10, bold = false) => {
        doc.setFont("helvetica", bold ? "bold" : "normal");
        doc.setFontSize(size);
        const lines = doc.splitTextToSize(text || " ", maxWidth);
        lines.forEach((line: string) => {
          if (y > pageHeight - 46) {
            doc.addPage();
            y = 50;
          }
          doc.text(line, margin, y);
          y += size + 5;
        });
      };

      buildPdfLines().forEach((line) => {
        const isHeader = line.startsWith("Unit") || line === "Second Sem Chemistry - Complete Study Notes";
        const isSubhead = line === "Explanation:" || line === "Formulas:" || line === "Reactions & Equations:" || line === "Engineering Applications:" || line.includes("Prep:");
        
        if (isHeader) {
          y += 10;
          add(line, 12, true);
        } else if (isSubhead) {
          add(line, 10, true);
        } else {
          add(line, 9, false);
        }
      });
      
      doc.save("second-sem-chemistry-syllabus-notes.pdf");
      setIsPdfDownloading(false);
    };

    if ((window as any).jspdf) {
      make();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      script.onload = make;
      document.body.appendChild(script);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors font-sans">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60 px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 md:hidden text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-pointer"
          >
            {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-555 border border-emerald-500/10">
              <Atom className="w-4.5 h-4.5 animate-spin" style={{ animationDuration: '12s' }} />
            </div>
            <span className="font-bold text-sm md:text-base text-zinc-900 dark:text-zinc-50 hidden sm:inline">Second Sem Chemistry</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-transparent"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
          
          <Link
            to="/notes"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-450 border border-emerald-100 dark:border-emerald-900/30"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Study Notes</span>
          </Link>

          <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-800 mx-1" />

          {/* Theme Toggle */}
          <button
            onClick={handleToggleTheme}
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 cursor-pointer"
            title="Toggle Theme"
          >
            {settings.theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-350 cursor-pointer"
            title="Sign Out"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <div className="flex-grow flex relative overflow-hidden h-[calc(100vh-53px)]">
        
        {/* Sidebar Browser (Left Panel) */}
        <aside className={`
          absolute md:static inset-y-0 left-0 w-80 max-w-[85vw] md:max-w-xs bg-white dark:bg-zinc-900 border-r border-zinc-200/60 dark:border-zinc-800/80 z-20 flex flex-col transition-transform duration-200
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          {/* Search bar inside Sidebar */}
          <div className="p-4 border-b border-zinc-200/60 dark:border-zinc-800">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 dark:text-zinc-600 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search topics or concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2 pl-9 pr-4 text-xs text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-zinc-400 hover:text-zinc-600 dark:text-zinc-550 text-xs font-bold"
                >
                  &times;
                </button>
              )}
            </div>
          </div>

          {/* List of Units & Topics */}
          <div className="flex-grow overflow-y-auto p-3.5 space-y-3.5">
            {searchQuery.trim() ? (
              // Search Results View
              <div className="space-y-1.5">
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block px-2 mb-2">Search Results ({filteredNotes.length})</span>
                {filteredNotes.map((note, idx) => {
                  const status = progress[note.topicTitle] || 'not_started';
                  let dotColor = 'bg-zinc-300 dark:bg-zinc-700';
                  if (status === 'completed') dotColor = 'bg-emerald-500';
                  else if (status === 'in_progress') dotColor = 'bg-blue-500';
                  else if (status === 'revision_needed') dotColor = 'bg-rose-500';

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectTopic(note.topicTitle)}
                      className={`w-full text-left p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-start gap-2.5 ${
                        activeTopicTitle === note.topicTitle
                          ? 'bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold'
                          : 'bg-transparent border-transparent text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full shrink-0 mt-1 ${dotColor}`} />
                      <div>
                        <span className="text-[9px] text-zinc-400 dark:text-zinc-500 block mb-0.5">Unit {note.unitNumber}</span>
                        <span className="line-clamp-2 leading-snug">{note.topicTitle}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              // Structured Syllabus View
              syllabus.map((unit) => {
                const isExpanded = !!expandedUnits[unit.unitNumber];
                const unitNotesList = notesByUnit[unit.unitNumber] || [];

                return (
                  <div key={unit.unitNumber} className="border-b border-zinc-100 dark:border-zinc-800 last:border-0 pb-3">
                    <button
                      onClick={() => toggleUnit(unit.unitNumber)}
                      className="w-full flex items-center justify-between text-left py-2 font-bold text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer"
                    >
                      <span className="truncate pr-2">Unit {unit.unitNumber}: {unit.unitTitle}</span>
                      {isExpanded ? <ChevronDown className="w-3.5 h-3.5 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 shrink-0" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-1.5 pl-1 space-y-1">
                        {unitNotesList.map((note, idx) => {
                          const status = progress[note.topicTitle] || 'not_started';
                          let dotColor = 'bg-zinc-300 dark:bg-zinc-700';
                          if (status === 'completed') dotColor = 'bg-emerald-500';
                          else if (status === 'in_progress') dotColor = 'bg-blue-500';
                          else if (status === 'revision_needed') dotColor = 'bg-rose-500';

                          return (
                            <button
                              key={idx}
                              onClick={() => handleSelectTopic(note.topicTitle)}
                              className={`w-full text-left p-2.5 rounded-xl border text-xs font-semibold leading-relaxed transition-all cursor-pointer flex items-start gap-2.5 ${
                                activeTopicTitle === note.topicTitle
                                  ? 'bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold'
                                  : 'bg-transparent border-transparent text-zinc-600 dark:text-zinc-305 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                              }`}
                            >
                              <span className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${dotColor}`} />
                              <span className="line-clamp-2">{note.topicTitle}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* PDF compilation in sidebar footer */}
          <div className="p-4 border-t border-zinc-200/60 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40">
            <button
              onClick={handleDownloadPdf}
              disabled={isPdfDownloading}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 text-xs font-semibold transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-emerald-500" />
              <span>{isPdfDownloading ? 'Generating PDF...' : 'Download Full Notes PDF'}</span>
            </button>
          </div>
        </aside>

        {/* Backdrop for mobile sidebar */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10 md:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* Study Notebook Viewer (Right Workspace Panel) */}
        <main className="flex-grow overflow-y-auto p-4 md:p-8">
          {activeNote ? (
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* Note Header & Action Ribbon */}
              <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider block">
                    Unit {activeNote.unitNumber}: {activeNote.unitTitle}
                  </span>
                  <h1 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-0.5 tracking-tight leading-tight">
                    {activeNote.topicTitle}
                  </h1>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <BookmarkButton topicId={activeNote.topicTitle} />
                  <TopicProgressButton topicId={activeNote.topicTitle} />
                </div>
              </div>

              {/* Study Area Navigation Tabs */}
              <div className="flex border-b border-zinc-200 dark:border-zinc-800 gap-1 overflow-x-auto scrollbar-none">
                <button
                  onClick={() => setActiveTab('study')}
                  className={`px-4 py-2.5 text-xs font-bold border-b-2 uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'study'
                      ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                      : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                  }`}
                >
                  Core Study Guide
                </button>
                <button
                  onClick={() => setActiveTab('review')}
                  className={`px-4 py-2.5 text-xs font-bold border-b-2 uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'review'
                      ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                      : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                  }`}
                >
                  Review Sheet
                </button>
                <button
                  onClick={() => setActiveTab('exam')}
                  className={`px-4 py-2.5 text-xs font-bold border-b-2 uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'exam'
                      ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                      : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                  }`}
                >
                  Exam Prep Q&A
                </button>
              </div>

              {/* Tab Contents */}
              <div className="space-y-6">
                
                {/* 1. STUDY GUIDE TAB */}
                {activeTab === 'study' && (
                  <div className="space-y-6">
                    {/* Definition */}
                    <div className="bg-emerald-50/50 dark:bg-emerald-955/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Definition
                      </h3>
                      <p className="text-sm md:text-base font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed font-sans">
                        <TextWithMath text={activeNote.definition} />
                      </p>
                    </div>

                    {/* Explanation */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 space-y-4 shadow-sm">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                        Concept Explanation
                      </h3>
                      <div className="text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 space-y-4 font-sans">
                        <TextWithMath text={activeNote.explanation} />
                      </div>
                    </div>

                    {/* Equations (Renders Reactions properly!) */}
                    {activeNote.equations && activeNote.equations.length > 0 && (
                      <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-800 pb-2 mb-4">
                          Chemical Reactions & Equations
                        </h3>
                        <div className="space-y-2">
                          {activeNote.equations.map((eq, idx) => {
                            if (eq.includes('\\') || eq.includes('{')) {
                              return <MathRenderer key={idx} math={eq} inline={false} />;
                            }
                            return <ChemicalEquation key={idx} equation={eq} />;
                          })}
                        </div>
                      </div>
                    )}

                    {/* Formulas */}
                    {activeNote.formulas && activeNote.formulas.length > 0 && (
                      <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-800 pb-2 mb-4">
                          Important Formulas
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activeNote.formulas.map((form, idx) => (
                            <div key={idx} className="p-3 bg-zinc-50 dark:bg-zinc-900/40 rounded-xl border border-zinc-100 dark:border-zinc-800/50 flex flex-col justify-center">
                              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold block mb-1">Formula {idx + 1}</span>
                              <div className="text-sm font-mono text-zinc-800 dark:text-zinc-200 font-semibold">
                                {form.includes('\\') || form.includes('{') ? (
                                  <MathRenderer math={form} inline={true} />
                                ) : (
                                  <TextWithMath text={form} />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. REVIEW SHEET TAB */}
                {activeTab === 'review' && (
                  <div className="space-y-6">
                    {/* Important Points */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-800 pb-2 mb-4">
                        Points to Remember
                      </h3>
                      <ul className="space-y-3.5">
                        {activeNote.importantPoints.map((pt, idx) => (
                          <li key={idx} className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                            <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-450 border border-emerald-100 dark:border-emerald-900/35 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 select-none">
                              {idx + 1}
                            </span>
                            <div className="mt-0.5">
                              <TextWithMath text={pt} />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-800 pb-2 mb-4">
                        Real-life & Engineering Applications
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeNote.applications.map((app, idx) => (
                          <div key={idx} className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 flex gap-3">
                            <span className="text-emerald-555 font-bold font-mono text-sm shrink-0 select-none">#{idx + 1}</span>
                            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                              {app}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. EXAM PREP TAB */}
                {activeTab === 'exam' && (
                  <div className="space-y-6">
                    {/* Common Questions */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-800 pb-2 mb-4 flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4 text-emerald-500" /> Common Exam Questions
                      </h3>
                      <ul className="space-y-3">
                        {activeNote.commonQuestions.map((q, idx) => (
                          <li key={idx} className="flex gap-2.5 text-sm md:text-base font-semibold text-zinc-800 dark:text-zinc-100 leading-snug">
                            <span className="text-zinc-400 dark:text-zinc-500 font-mono shrink-0 select-none">Q{idx + 1}.</span>
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Short Answer Prep */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm space-y-3.5">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-800 pb-2 flex items-center gap-1.5">
                        <CheckSquare className="w-4.5 h-4.5 text-emerald-500" /> Short Answer Version (2-5 Marks)
                      </h3>
                      <div className="p-4 rounded-xl bg-zinc-50/60 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800/60 text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                        <TextWithMath text={activeNote.shortAnswer} />
                      </div>
                    </div>

                    {/* Long Answer Prep */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm space-y-3.5">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-800 pb-2 flex items-center gap-1.5">
                        <FileText className="w-4.5 h-4.5 text-blue-500" /> Long Answer Version (5-10 Marks)
                      </h3>
                      <div className="p-4 rounded-xl bg-zinc-50/60 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800/60 text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                        <TextWithMath text={activeNote.longAnswer} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Personal Study Note sync */}
                <PersonalNoteBox topicId={activeNote.topicTitle} />
              </div>

            </div>
          ) : (
            <div className="h-full flex items-center justify-center flex-col gap-3 text-zinc-400">
              <Atom className="w-12 h-12 text-zinc-300 animate-spin" />
              <span>Select a topic to start studying</span>
            </div>
          )}
        </main>

      </div>
    </div>
  );
};
export default Notes;
