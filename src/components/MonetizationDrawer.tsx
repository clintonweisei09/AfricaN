import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { AD_UNITS } from '../data/mockNewsData';

interface MonetizationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  isAdFreeMode: boolean;
  onToggleAdFree: () => void;
}

export const MonetizationDrawer: React.FC<MonetizationDrawerProps> = ({
  isOpen,
  onClose,
  isAdFreeMode,
  onToggleAdFree
}) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryBudget, setInquiryBudget] = useState('$10,000 - $25,000');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex justify-end animate-in fade-in duration-150 select-none">
      <div 
        className="w-full max-w-lg bg-white text-slate-900 h-full overflow-y-auto custom-scrollbar border-l border-slate-300 shadow-2xl p-6 flex flex-col justify-between"
        role="dialog"
        aria-modal="true"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-600" />
              <h2 className="font-serif font-bold text-xl text-slate-950">
                Monetization & Advertising Desk
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-400 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Ad Network Performance */}
          <div className="mt-6 space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-700 font-bold block mb-1">
                Publisher Ad Network
              </span>
              <h3 className="font-serif font-bold text-base text-slate-900">
                The Daily Herald Monetization Metrics
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Direct sponsorship, programmatic banner inventory, and native sponsored articles connecting trusted brands with our global readership.
              </p>
            </div>

            {/* Performance Metrics Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="border border-slate-200 bg-slate-50 p-3 rounded-lg">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Avg. Programmatic CPM</span>
                <p className="font-mono text-xl font-bold text-slate-900 mt-0.5">$28.40</p>
                <span className="text-[10px] text-emerald-700 font-medium">Verified news inventory</span>
              </div>
              <div className="border border-slate-200 bg-slate-50 p-3 rounded-lg">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Fill Rate</span>
                <p className="font-mono text-xl font-bold text-slate-900 mt-0.5">99.4%</p>
                <span className="text-[10px] text-emerald-700 font-medium">IAB standard formats</span>
              </div>
              <div className="border border-slate-200 bg-slate-50 p-3 rounded-lg">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Monthly Global Reach</span>
                <p className="font-mono text-xl font-bold text-slate-900 mt-0.5">4.2M</p>
                <span className="text-[10px] text-slate-500 font-medium">Unique readers</span>
              </div>
              <div className="border border-slate-200 bg-slate-50 p-3 rounded-lg">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Avg. Viewability</span>
                <p className="font-mono text-xl font-bold text-slate-900 mt-0.5">82.6%</p>
                <span className="text-[10px] text-emerald-700 font-medium">High user dwell time</span>
              </div>
            </div>

            {/* Subscription vs Ad-Supported Toggle */}
            <div className="border border-slate-300 bg-slate-100 rounded-lg p-4 mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <span className="font-serif font-bold text-sm text-slate-950">
                    The Daily Herald Premium ($1/week)
                  </span>
                </div>
                <span className="text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded font-mono font-bold">
                  Ad-Free
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toggle between our standard ad-supported reading experience and our clean subscriber view.
              </p>
              <button
                onClick={onToggleAdFree}
                className={`w-full py-2 px-4 rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                  isAdFreeMode
                    ? 'bg-red-700 text-white hover:bg-red-800'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                <span>{isAdFreeMode ? 'Re-enable Ad Banners' : 'Preview Ad-Free Reading Experience'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Active Placements Directory */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <h4 className="font-serif font-bold text-sm text-slate-900">
                Active Ad Placements
              </h4>
              <div className="space-y-2 text-xs">
                {Object.values(AD_UNITS).map((u) => (
                  <div key={u.id} className="p-2.5 bg-slate-50 border border-slate-200 rounded flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900">{u.sponsor}</p>
                      <p className="text-[11px] text-slate-500 capitalize">{u.format.replace('_', ' ')} unit</p>
                    </div>
                    <span className="font-mono text-[11px] text-red-700 font-bold">{u.cpmRate}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Sponsorship Booking Form */}
            <div className="pt-4 border-t border-slate-200">
              <h4 className="font-serif font-bold text-sm text-slate-900 mb-1">
                Book a Direct Ad Placement
              </h4>
              <p className="text-xs text-slate-500 mb-3">
                Reach an engaged, high-intent global audience of business leaders, academics, and informed citizens.
              </p>

              {inquirySubmitted ? (
                <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! Our ad operations desk will send the media kit and rate card to your inbox shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-2.5">
                  <div>
                    <label className="text-[11px] font-medium text-slate-700 block mb-0.5">Contact Name</label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full text-xs px-2.5 py-1.5 border border-slate-300 rounded bg-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-700 block mb-0.5">Organization / Brand</label>
                    <input
                      type="text"
                      required
                      value={inquiryCompany}
                      onChange={(e) => setInquiryCompany(e.target.value)}
                      placeholder="e.g. Acme Media Corp"
                      className="w-full text-xs px-2.5 py-1.5 border border-slate-300 rounded bg-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-700 block mb-0.5">Campaign Budget Range</label>
                    <select
                      value={inquiryBudget}
                      onChange={(e) => setInquiryBudget(e.target.value)}
                      className="w-full text-xs px-2.5 py-1.5 border border-slate-300 rounded bg-white focus:outline-none focus:border-red-500"
                    >
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-red-700 hover:bg-red-800 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    Request Media Kit & Availability
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-slate-200 text-center text-[11px] text-slate-400">
          The Daily Herald Advertising & Operations Trust · IAB Gold Standard Compliant
        </div>
      </div>
    </div>
  );
};
