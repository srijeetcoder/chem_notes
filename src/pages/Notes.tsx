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
import { ChemicalDiagrams } from '../components/ChemicalDiagrams';
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
  const [expandedAnswers, setExpandedAnswers] = useState<Record<number, boolean>>({});

  // Active topic logic
  const activeTopicTitle = searchParams.get('topic') || (chemistryNotes.length > 0 ? chemistryNotes[0].topicTitle : '');

  // Reset expanded answers when active topic changes
  useEffect(() => {
    setExpandedAnswers({});
  }, [activeTopicTitle]);

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

        if (note.questionsAndAnswers && note.questionsAndAnswers.length > 0) {
          out.push("MAKAUT Exam Q&As:");
          note.questionsAndAnswers.forEach((qa, i) => {
            out.push(`Q${i + 1}. ${qa.question} (${qa.type.replace('_', ' ')}${qa.marks ? ', ' + qa.marks : ''})`);
            out.push(`Answer: ${qa.answer}`);
          });
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
    <div className="min-h-screen flex flex-col molecular-bg text-zinc-150 transition-colors font-sans relative overflow-hidden">
      {/* Animated Scientific Grid */}
      <div className="scientific-grid animate-grid-move" />

      {/* Background glowing orbits */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl z-0" />

      {/* Navbar */}
      <nav className="sticky top-4 z-30 mx-4 md:mx-6 my-4 glass-panel rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between border-white/10 shadow-lg shadow-black/40">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="p-2 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-800/40 hover:border-white/10 md:hidden text-zinc-400 hover:text-white cursor-pointer transition-all"
          >
            {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Atom className="w-4.5 h-4.5 animate-spin text-emerald-400" style={{ animationDuration: '12s' }} />
            </div>
            <span className="font-bold text-sm text-white hidden sm:inline">Second Sem Chemistry</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 md:gap-3">
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent transition-all"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
          
          <Link
            to="/notes"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
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
            className="p-2 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-800/40 hover:border-rose-500/20 text-rose-500 hover:text-rose-450 cursor-pointer transition-all"
            title="Sign Out"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <div className="flex-grow flex relative overflow-hidden h-[calc(100vh-88px)] px-4 md:px-6 pb-4 gap-4 z-10">
        
        {/* Sidebar Browser (Left Panel) */}
        <aside className={`
          absolute md:static inset-y-0 left-0 w-80 max-w-[85vw] md:max-w-xs glass-panel border-white/5 rounded-2xl z-20 flex flex-col transition-all duration-300 shadow-xl
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          {/* Search bar inside Sidebar */}
          <div className="p-4 border-b border-white/5 bg-zinc-950/40 rounded-t-2xl">
            <div className="relative group">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="Search topics or formulas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950/60 border border-white/5 rounded-xl py-2.5 pl-9 pr-8 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/10 focus:border-cyan-400 transition-all font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-zinc-400 hover:text-white text-lg font-bold"
                >
                  &times;
                </button>
              )}
            </div>
          </div>

          {/* List of Units & Topics */}
          <div className="flex-grow overflow-y-auto p-3 space-y-3 scrollbar-none">
            {searchQuery.trim() ? (
              // Search Results View
              <div className="space-y-1">
                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block px-2 mb-2">Search Results ({filteredNotes.length})</span>
                {filteredNotes.map((note, idx) => {
                  const status = progress[note.topicTitle] || 'not_started';
                  let dotColor = 'bg-zinc-650';
                  if (status === 'completed') dotColor = 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]';
                  else if (status === 'in_progress') dotColor = 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]';
                  else if (status === 'revision_needed') dotColor = 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]';

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectTopic(note.topicTitle)}
                      className={`w-full text-left p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-start gap-2.5 ${
                        activeTopicTitle === note.topicTitle
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.05)] border-l-2 border-l-emerald-500 pl-3'
                          : 'bg-transparent border-transparent text-zinc-400 hover:bg-white/5 hover:text-zinc-150 pl-3'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full shrink-0 mt-1 ${dotColor}`} />
                      <div>
                        <span className="text-[8px] text-zinc-500 block mb-0.5 font-mono">Unit {note.unitNumber}</span>
                        <span className="line-clamp-2 leading-relaxed">{note.topicTitle}</span>
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
                  <div key={unit.unitNumber} className="border-b border-white/5 last:border-0 pb-3">
                    <button
                      onClick={() => toggleUnit(unit.unitNumber)}
                      className="w-full flex items-center justify-between text-left py-2 font-bold text-[10px] uppercase tracking-wider text-zinc-450 hover:text-zinc-200 cursor-pointer"
                    >
                      <span className="truncate pr-2">U{unit.unitNumber}: {unit.unitTitle}</span>
                      {isExpanded ? <ChevronDown className="w-3.5 h-3.5 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 shrink-0" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-1 pl-1 space-y-1">
                        {unitNotesList.map((note, idx) => {
                          const status = progress[note.topicTitle] || 'not_started';
                          let dotColor = 'bg-zinc-700';
                          if (status === 'completed') dotColor = 'bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]';
                          else if (status === 'in_progress') dotColor = 'bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.4)]';
                          else if (status === 'revision_needed') dotColor = 'bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.4)]';

                          return (
                            <button
                              key={idx}
                              onClick={() => handleSelectTopic(note.topicTitle)}
                              className={`w-full text-left p-2 rounded-xl border text-[11px] font-semibold leading-relaxed transition-all cursor-pointer flex items-start gap-2.5 ${
                                activeTopicTitle === note.topicTitle
                                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 font-bold border-l-2 border-l-emerald-500 pl-3 shadow-[0_0_12px_rgba(16,185,129,0.05)]'
                                  : 'bg-transparent border-transparent text-zinc-400 hover:bg-white/5 hover:text-zinc-200 pl-3'
                              }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${dotColor}`} />
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
          <div className="p-4 border-t border-white/5 bg-zinc-950/40 rounded-b-2xl">
            <button
              onClick={handleDownloadPdf}
              disabled={isPdfDownloading}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-white/10 bg-zinc-950/50 hover:bg-zinc-900/60 hover:border-cyan-400/30 text-white text-xs font-bold transition-all shadow-md disabled:opacity-50 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isPdfDownloading ? 'Compiling PDF...' : 'Download Full Notes PDF'}</span>
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
        <main className="flex-grow overflow-y-auto p-4 md:p-6 scrollbar-none relative">
          {activeNote ? (
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* Note Header & Action Ribbon */}
              <div className="glass-panel p-6 rounded-3xl border-white/80 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 relative group">
                <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none rounded-r-3xl" />
                <div className="relative z-10">
                  <span className="text-[10px] bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-bold uppercase tracking-widest block">
                    Unit {activeNote.unitNumber}: {activeNote.unitTitle}
                  </span>
                  <h1 className="text-xl md:text-2xl font-bold text-white mt-1.5 tracking-tight leading-tight">
                    {activeNote.topicTitle}
                  </h1>
                </div>

                <div className="flex items-center gap-3 shrink-0 relative z-10">
                  <BookmarkButton topicId={activeNote.topicTitle} />
                  <TopicProgressButton topicId={activeNote.topicTitle} />
                </div>
              </div>

              {/* Study Area Navigation Tabs */}
              <div className="flex border-b border-white/5 gap-1.5 overflow-x-auto scrollbar-none pb-1">
                <button
                  onClick={() => setActiveTab('study')}
                  className={`px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer rounded-xl border ${
                    activeTab === 'study'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                      : 'border-transparent text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Core Study Guide
                </button>
                <button
                  onClick={() => setActiveTab('review')}
                  className={`px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer rounded-xl border ${
                    activeTab === 'review'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                      : 'border-transparent text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Review Sheet
                </button>
                <button
                  onClick={() => setActiveTab('exam')}
                  className={`px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer rounded-xl border ${
                    activeTab === 'exam'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                      : 'border-transparent text-zinc-400 hover:text-white hover:bg-white/5'
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
                    <div className="glass-panel-emerald rounded-3xl p-6 border-emerald-500/20 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-1.5 font-mono">
                        <Sparkles className="w-3.5 h-3.5" /> Definition
                      </h3>
                      <p className="text-sm md:text-base font-semibold text-white leading-relaxed font-sans">
                        <TextWithMath text={activeNote.definition} />
                      </p>
                    </div>

                    {/* Chemical Diagrams Visualization */}
                    {activeNote.diagramType && (
                      <ChemicalDiagrams type={activeNote.diagramType} />
                    )}

                    {/* Explanation */}
                    <div className="glass-panel rounded-3xl p-6 space-y-4 shadow-md border-white/5">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200 border-b border-white/5 pb-3">
                        Concept Explanation
                      </h3>
                      <div className="text-sm leading-relaxed text-zinc-355 space-y-4 font-sans font-medium">
                        <TextWithMath text={activeNote.explanation} />
                      </div>
                    </div>

                    {/* Mathematical Derivation */}
                    {activeNote.derivation && activeNote.derivation.length > 0 && (
                      <div className="glass-panel-violet rounded-3xl p-6 border-violet-500/20 shadow-md">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-violet-400 border-b border-white/5 pb-3 mb-5 flex items-center gap-2 font-mono">
                          <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          Step-by-Step Mathematical Derivation
                        </h3>
                        <div className="space-y-5">
                          {activeNote.derivation.map((block, bIdx) => (
                            <div key={bIdx} className="border border-white/5 rounded-2xl overflow-hidden bg-zinc-950/60 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                              <div className="bg-white/5 px-4 py-3 flex items-center gap-3 border-b border-white/5">
                                <span className="w-6 h-6 rounded-lg bg-violet-500 text-zinc-950 text-[10px] font-extrabold flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.5)]">{bIdx + 1}</span>
                                <span className="text-xs font-bold text-violet-300 uppercase tracking-wider">{block.title}</span>
                              </div>
                              <div className="p-4 space-y-3.5 bg-zinc-950/20">
                                {block.steps.map((step, sIdx) => (
                                  <div key={sIdx} className="flex gap-3 items-start">
                                    <span className="text-[10px] text-violet-400/80 font-mono shrink-0 mt-1 select-none w-5 text-right font-bold">{sIdx + 1}.</span>
                                    <div className="text-sm text-zinc-300 leading-relaxed overflow-x-auto">
                                      <TextWithMath text={step} />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeNote.equations && activeNote.equations.length > 0 && (
                      <div className="glass-panel rounded-3xl p-6 shadow-md border-white/5">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200 border-b border-white/5 pb-3 mb-5">
                          Chemical Reactions & Equations
                        </h3>
                        <div className="space-y-4">
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
                      <div className="glass-panel-cyan rounded-3xl p-6 border-cyan-400/20 shadow-md">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 border-b border-white/5 pb-3 mb-5">
                          Important Formulas
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activeNote.formulas.map((form, idx) => (
                            <div key={idx} className="p-4 bg-zinc-950/80 rounded-2xl border border-white/5 flex flex-col justify-center shadow-inner hover:border-cyan-400/30 transition-all duration-300">
                              <span className="text-[8px] text-zinc-500 font-bold block mb-1.5 uppercase tracking-widest">Formula {idx + 1}</span>
                              <div className="text-sm font-mono text-zinc-100 font-bold">
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

                    {/* MAKAUT Exam Q&A Bank */}
                    {activeNote.questionsAndAnswers && activeNote.questionsAndAnswers.length > 0 && (
                      <div className="glass-panel rounded-3xl p-6 shadow-md border-white/5 space-y-5">
                        <div className="border-b border-white/5 pb-3 mb-4 flex items-center justify-between">
                          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200 flex items-center gap-1.5 font-mono">
                            <Sparkles className="w-4.5 h-4.5 text-cyan-400 animate-pulse" /> MAKAUT Exam Q&A Bank
                          </h3>
                          <span className="text-[9px] bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                            {activeNote.questionsAndAnswers.length} Questions Mapped
                          </span>
                        </div>

                        <div className="space-y-3.5">
                          {activeNote.questionsAndAnswers.map((qa, idx) => {
                            const isExpanded = !!expandedAnswers[idx];
                            
                            // Badge color selection based on marks/type
                            let badgeStyle = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
                            let typeText = "Very Short Answer";
                            if (qa.type === 'short') {
                              badgeStyle = "bg-cyan-400/10 text-cyan-400 border-cyan-400/20";
                              typeText = "Short Answer";
                            } else if (qa.type === 'long') {
                              badgeStyle = "bg-violet-500/10 text-violet-400 border-violet-500/20";
                              typeText = "Long Answer";
                            }

                            return (
                              <div 
                                key={idx} 
                                className="group border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-400/20 transition-all duration-300 bg-zinc-950/40 shadow-sm"
                              >
                                {/* Question Header */}
                                <div 
                                  onClick={() => setExpandedAnswers(prev => ({ ...prev, [idx]: !isExpanded }))}
                                  className="p-4 flex items-start justify-between gap-4 cursor-pointer select-none hover:bg-white/5 transition-all"
                                >
                                  <div className="space-y-2 text-left">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md border ${badgeStyle}`}>
                                        {typeText} {qa.marks ? `(${qa.marks})` : ''}
                                      </span>
                                    </div>
                                    <h4 className="text-xs md:text-sm font-bold text-white leading-relaxed group-hover:text-emerald-400 transition-colors">
                                      {qa.question}
                                    </h4>
                                  </div>

                                  <button 
                                    className="shrink-0 mt-0.5 p-1.5 rounded-xl border border-white/5 bg-zinc-900/60 hover:bg-zinc-800/60 text-zinc-400 hover:text-white transition-all cursor-pointer shadow-md"
                                  >
                                    <ChevronDown 
                                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                                    />
                                  </button>
                                </div>

                                {/* Answer Body */}
                                {isExpanded && (
                                  <div className="px-4 pb-4 pt-1 border-t border-white/5 bg-zinc-950/60 text-left">
                                    <div className="text-xs md:text-sm text-zinc-300 leading-relaxed font-sans pt-3 border-l-2 border-emerald-500/50 pl-3.5 font-medium">
                                      <TextWithMath text={qa.answer} />
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. REVIEW SHEET TAB */}
                {activeTab === 'review' && (
                  <div className="space-y-6">
                    {/* Important Points */}
                    <div className="glass-panel rounded-3xl p-6 shadow-md border-white/5">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200 border-b border-white/5 pb-3 mb-5">
                        Points to Remember
                      </h3>
                      <ul className="space-y-4">
                        {activeNote.importantPoints.map((pt, idx) => (
                          <li key={idx} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                            <span className="w-5 h-5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 select-none font-mono">
                              {idx + 1}
                            </span>
                            <div className="mt-0.5 font-medium">
                              <TextWithMath text={pt} />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="glass-panel rounded-3xl p-6 shadow-md border-white/5">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200 border-b border-white/5 pb-3 mb-5">
                        Real-life & Engineering Applications
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeNote.applications.map((app, idx) => (
                          <div key={idx} className="p-4 rounded-2xl border border-white/5 bg-zinc-950/60 flex gap-3 hover:border-emerald-500/20 transition-all duration-300">
                            <span className="text-emerald-400 font-extrabold font-mono text-sm shrink-0 select-none">#{idx + 1}</span>
                            <p className="text-xs text-zinc-300 leading-relaxed font-semibold">
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
                    <div className="glass-panel rounded-3xl p-6 shadow-md border-white/5">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200 border-b border-white/5 pb-3 mb-5 flex items-center gap-1.5 font-mono">
                        <HelpCircle className="w-4 h-4 text-emerald-400" /> Common Exam Questions
                      </h3>
                      <ul className="space-y-3.5">
                        {activeNote.commonQuestions.map((q, idx) => (
                          <li key={idx} className="flex gap-2.5 text-xs md:text-sm font-bold text-zinc-200 leading-snug">
                            <span className="text-zinc-500 font-mono shrink-0 select-none">Q{idx + 1}.</span>
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* MAKAUT Exam Q&A Bank */}
                    {activeNote.questionsAndAnswers && activeNote.questionsAndAnswers.length > 0 && (
                      <div className="glass-panel rounded-3xl p-6 shadow-md border-white/5 space-y-5">
                        <div className="border-b border-white/5 pb-3 mb-4 flex items-center justify-between">
                          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200 flex items-center gap-1.5 font-mono">
                            <Sparkles className="w-4.5 h-4.5 text-cyan-400 animate-pulse" /> MAKAUT Exam Q&A Bank
                          </h3>
                          <span className="text-[9px] bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                            {activeNote.questionsAndAnswers.length} Questions Mapped
                          </span>
                        </div>

                        <div className="space-y-3.5">
                          {activeNote.questionsAndAnswers.map((qa, idx) => {
                            const isExpanded = !!expandedAnswers[idx];
                            
                            // Badge color selection based on marks/type
                            let badgeStyle = "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
                            let typeText = "Very Short Answer";
                            if (qa.type === 'short') {
                              badgeStyle = "bg-cyan-400/10 text-cyan-400 border-cyan-400/20";
                              typeText = "Short Answer";
                            } else if (qa.type === 'long') {
                              badgeStyle = "bg-violet-500/10 text-violet-400 border-violet-500/20";
                              typeText = "Long Answer";
                            }

                            return (
                              <div 
                                key={idx} 
                                className="group border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-400/20 transition-all duration-300 bg-zinc-950/40 shadow-sm"
                              >
                                {/* Question Header */}
                                <div 
                                  onClick={() => setExpandedAnswers(prev => ({ ...prev, [idx]: !isExpanded }))}
                                  className="p-4 flex items-start justify-between gap-4 cursor-pointer select-none hover:bg-white/5 transition-all"
                                >
                                  <div className="space-y-2 text-left">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md border ${badgeStyle}`}>
                                        {typeText} {qa.marks ? `(${qa.marks})` : ''}
                                      </span>
                                    </div>
                                    <h4 className="text-xs md:text-sm font-bold text-white leading-relaxed group-hover:text-emerald-400 transition-colors">
                                      {qa.question}
                                    </h4>
                                  </div>

                                  <button 
                                    className="shrink-0 mt-0.5 p-1.5 rounded-xl border border-white/5 bg-zinc-900/60 hover:bg-zinc-800/60 text-zinc-400 hover:text-white transition-all cursor-pointer shadow-md"
                                  >
                                    <ChevronDown 
                                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                                    />
                                  </button>
                                </div>

                                {/* Answer Body */}
                                {isExpanded && (
                                  <div className="px-4 pb-4 pt-1 border-t border-white/5 bg-zinc-950/60 text-left">
                                    <div className="text-xs md:text-sm text-zinc-300 leading-relaxed font-sans pt-3 border-l-2 border-emerald-500/50 pl-3.5 font-medium">
                                      <TextWithMath text={qa.answer} />
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Short Answer Prep */}
                    <div className="glass-panel rounded-3xl p-6 shadow-md border-white/5 space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200 border-b border-white/5 pb-3 flex items-center gap-1.5 font-mono">
                        <CheckSquare className="w-4.5 h-4.5 text-emerald-400" /> Short Answer Version (2-5 Marks)
                      </h3>
                      <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5 text-xs md:text-sm text-zinc-300 leading-relaxed font-sans font-medium">
                        <TextWithMath text={activeNote.shortAnswer} />
                      </div>
                    </div>

                    {/* Long Answer Prep */}
                    <div className="glass-panel rounded-3xl p-6 shadow-md border-white/5 space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200 border-b border-white/5 pb-3 flex items-center gap-1.5 font-mono">
                        <FileText className="w-4.5 h-4.5 text-cyan-400" /> Long Answer Version (5-10 Marks)
                      </h3>
                      <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5 text-xs md:text-sm text-zinc-300 leading-relaxed font-sans font-medium">
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
            <div className="h-full flex items-center justify-center flex-col gap-4 text-zinc-500">
              <Atom className="w-16 h-16 text-emerald-500/30 animate-spin" style={{ animationDuration: '10s' }} />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mt-2">Select a topic to start studying</span>
            </div>
          )}
        </main>

      </div>
    </div>
  );
};
export default Notes;

