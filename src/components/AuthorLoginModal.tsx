import React, { useState } from 'react';
import { Lock, ShieldCheck, Key, X, CheckCircle, AlertCircle, UserCheck } from 'lucide-react';
import { useAuthor } from '../context/AuthorContext';

export const AuthorLoginModal: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal, loginAsAuthor, quickDemoLogin, authorName, authorRole } = useAuthor();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAsAuthor(passcode);
    if (!success) {
      setError(true);
    } else {
      setPasscode('');
      setError(false);
    }
  };

  const handleQuickLogin = () => {
    quickDemoLogin();
    setPasscode('');
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-md bg-white text-slate-900 shadow-2xl rounded-2xl border-2 border-red-600 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Red Signature Header */}
        <div className="bg-red-600 text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-yellow-300" />
            <h3 className="font-sans font-black text-base uppercase tracking-wide">
              Author Portal
            </h3>
          </div>
          <button
            onClick={closeLoginModal}
            className="p-1 rounded-full hover:bg-red-700 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className="flex items-start gap-3 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-950">
            <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-900">Restricted Editorial Access</p>
              <p className="mt-0.5 text-slate-700">
                This digital publication is strictly editable only by author <strong className="text-red-700">{authorName}</strong> ({authorRole}). Public readers have read-only access.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Author Passcode / Key
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="Enter author secret key..."
                  className="w-full px-3.5 py-2.5 pl-10 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 font-mono"
                  autoFocus
                />
                <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              </div>
              {error && (
                <div className="flex items-center gap-1.5 text-xs text-red-600 mt-1.5 font-bold">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Invalid author passcode. Try passcode: clinton2026</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-4 h-4 text-yellow-300" />
              <span>Unlock Author Mode</span>
            </button>
          </form>

          {/* Quick Demo Login Option */}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <p className="text-[11px] text-slate-500 text-center">
              Evaluating editorial controls? Use one-click verification:
            </p>
            <button
              onClick={handleQuickLogin}
              type="button"
              className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 text-yellow-300 font-mono text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-yellow-400" />
              <span>Authenticate as {authorName} (One-Click)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
