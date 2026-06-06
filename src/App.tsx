import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Notes } from './pages/Notes';
import { useUser } from './context/UserContext';
import { isSupabaseConfigured } from './lib/supabaseClient';
import { AlertTriangle } from 'lucide-react';

const SupabaseOnboarding: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-6 relative overflow-hidden transition-colors">
      <div className="absolute inset-0 bg-grid-zinc-200/50 dark:bg-grid-zinc-900/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] z-0" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="w-full max-w-xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 p-8 shadow-xl relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center text-amber-500 border border-amber-500/20 shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">Database Integration Required</h1>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium mt-0.5">Setup your Supabase keys to access the chemistry notes platform</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <div className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
              <div>
                <h3 className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">Create Supabase Project</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Go to <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">supabase.com</a>, sign up, and create a new project.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
              <div>
                <h3 className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide flex items-center gap-1">
                  Run SQL Schema <span className="text-[10px] text-zinc-400 font-mono font-normal lowercase">(supabase/schema.sql)</span>
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Open your project's <strong>SQL Editor</strong>, paste the content of the file <a href="file:///i:/chem%20notes/chemistry-notes/supabase/schema.sql" className="text-emerald-605 dark:text-emerald-400 hover:underline font-semibold font-mono">schema.sql</a>, and run it to set up the tables, triggers, and RLS policies.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
              <div>
                <h3 className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">Add Keys to Environmental File</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Create/edit the file <code className="font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-1 py-0.5 rounded text-[11px] border border-zinc-200/50 dark:border-zinc-800/60">.env</code> in your project root and paste your credentials:
                </p>
                <pre className="mt-2 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono text-[10px] text-zinc-700 dark:text-zinc-300 overflow-x-auto leading-relaxed select-all">
{`VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key`}
                </pre>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-450 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
              <div>
                <h3 className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">Restart Vite Dev Server</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-450 mt-1 leading-relaxed">
                  Cancel the running command and run <code className="font-mono text-zinc-600 dark:text-zinc-300">npm run dev</code> again to apply env updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Protected Route Wrapper
const ProtectedRouteWrapper: React.FC = () => {
  const { user, loading, authLoading } = useUser();

  if (loading || authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 transition-colors">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500 border border-emerald-500/15">
            <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest animate-pulse">Syncing Notebook...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export const App: React.FC = () => {
  if (!isSupabaseConfigured) {
    return <SupabaseOnboarding />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Fallback to protected routes */}
      <Route path="/*" element={<ProtectedRouteWrapper />} />
    </Routes>
  );
};

export default App;
