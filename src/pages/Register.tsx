import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Atom, UserPlus, Mail, Lock, User, AlertCircle, ArrowLeft } from 'lucide-react';
import { useUser } from '../context/UserContext';

export const Register: React.FC = () => {
  const { user } = useUser();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      // Wait a moment then redirect or prompt
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4 transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-zinc-200/50 dark:bg-grid-zinc-900/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] z-0" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="w-full max-w-md bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 p-8 shadow-xl relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-3 border border-emerald-500/20">
            <Atom className="w-6 h-6 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 font-sans tracking-tight">Create Account</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 text-center">
            Sign up for a chemistry student notebook.
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-250 dark:bg-rose-950/20 dark:border-rose-900/40 text-rose-600 dark:text-rose-400 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-250 dark:bg-emerald-950/20 dark:border-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-xs">
            Registration successful! Logging you in...
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5 ml-1">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400 dark:text-zinc-500">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Newton Kumar"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5 ml-1">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400 dark:text-zinc-500">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@university.edu"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5 ml-1">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400 dark:text-zinc-500">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="•••••••• (Min. 6 characters)"
                minLength={6}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || success}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all focus:ring-2 focus:ring-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed mt-6 font-sans"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
            <UserPlus className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold inline-flex items-center gap-0.5 hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-0.5" /> Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
