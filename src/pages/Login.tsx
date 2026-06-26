import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Atom, LogIn, Mail, Lock, AlertCircle, ArrowRight } from 'lucide-react';
import { useUser } from '../context/UserContext';

export const Login: React.FC = () => {
  const { user } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Redirect if already logged in
  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center molecular-bg p-4 transition-colors relative overflow-hidden">
      {/* Animated Scientific Grid */}
      <div className="scientific-grid animate-grid-move" />
      
      {/* Premium Ambient Lights & Floating Atoms */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full border border-emerald-500/10 animate-molecular-float z-0" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full border border-cyan-400/5 animate-molecular-float z-0" style={{ animationDelay: '4s' }} />

      {/* Main Glass Card container */}
      <div className="w-full max-w-md glass-panel rounded-3xl p-8 shadow-2xl relative z-10 border-white/10 hover:border-cyan-400/20 transition-all duration-500">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <Atom className="w-7 h-7 animate-spin text-emerald-400" style={{ animationDuration: '8s' }} />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent font-sans tracking-tight">
            Second Sem Chemistry
          </h1>
          <p className="text-xs text-zinc-400 mt-2 text-center max-w-[280px] leading-relaxed">
            Access your premium scientific learning dashboard, notes repository, and notebook.
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-start gap-2.5 shadow-[inset_0_0_12px_rgba(244,63,94,0.05)]">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 ml-1">
              Email Address
            </label>
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500 group-focus-within:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@university.edu"
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-white/5 bg-zinc-950/60 text-zinc-100 placeholder-zinc-650 focus:outline-none focus:ring-2 focus:ring-cyan-400/10 focus:border-cyan-400 transition-all duration-300 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 ml-1">
              Password
            </label>
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500 group-focus-within:text-cyan-400 transition-colors">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-white/5 bg-zinc-950/60 text-zinc-100 placeholder-zinc-650 focus:outline-none focus:ring-2 focus:ring-cyan-400/10 focus:border-cyan-400 transition-all duration-300 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-zinc-950 font-extrabold text-xs uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed mt-8"
          >
            {loading ? 'Authenticating...' : 'Establish Session'}
            <LogIn className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-zinc-450">
            Don't have an authorized account?{' '}
            <Link
              to="/register"
              className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-0.5 hover:underline"
            >
              Sign up <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
