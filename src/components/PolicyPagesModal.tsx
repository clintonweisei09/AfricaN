import React, { useState } from 'react';
import { X, ShieldCheck, Mail, MapPin, Phone, FileText, CheckCircle2, Award, ExternalLink, Send } from 'lucide-react';

export type PolicyTab = 'about' | 'contact' | 'privacy' | 'terms' | 'editorial' | 'adsense';

interface PolicyPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: PolicyTab;
}

export const PolicyPagesModal: React.FC<PolicyPagesModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'about'
}) => {
  const [activeTab, setActiveTab] = useState<PolicyTab>(initialTab);
  const [contactSent, setContactSent] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  if (!isOpen) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail || !contactMessage) return;
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 shadow-2xl rounded-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-6 bg-red-600 inline-block rounded-xs"></span>
            <div>
              <h3 className="font-sans font-black text-lg tracking-tight uppercase">
                AfricaN Editorial & Transparency Portal
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Google AdSense Verified Publisher Standards & Governance
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 flex items-center gap-2 overflow-x-auto scrollbar-none py-2">
          {[
            { id: 'about', label: 'About AfricaN' },
            { id: 'contact', label: 'Contact & Bureaus' },
            { id: 'privacy', label: 'Privacy Policy (AdSense)' },
            { id: 'terms', label: 'Terms of Service' },
            { id: 'editorial', label: 'Editorial & Fact-Check' },
            { id: 'adsense', label: 'AdSense & Ads Policy' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as PolicyTab)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-slate-700 leading-relaxed custom-scrollbar">
          
          {/* 1. ABOUT US */}
          {activeTab === 'about' && (
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs uppercase font-bold tracking-widest text-red-600">Publisher Dossier</span>
                <h2 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  About AfricaN — Continental Broadsheet
                </h2>
              </div>

              <p>
                <strong>AfricaN</strong> is an independent pan-African digital broadsheet founded to deliver authoritative investigative reporting, political intelligence, whistleblower investigations, business analysis, and cultural reporting across the African continent and the global diaspora.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h4 className="font-bold text-slate-950 flex items-center gap-1.5 text-xs uppercase tracking-wider text-red-600">
                    <Award className="w-4 h-4 text-red-600" />
                    Editorial Leadership
                  </h4>
                  <p className="text-xs">
                    <strong>Editor-in-Chief & Lead Author:</strong> Clinton Weisei<br />
                    <strong>Senior Investigative Editor:</strong> Faith Mwangi<br />
                    <strong>Economics & FinTech Desk:</strong> Tariq Al-Hassan<br />
                    <strong>Continental Bureau Chief:</strong> Kwame Osei
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h4 className="font-bold text-slate-950 flex items-center gap-1.5 text-xs uppercase tracking-wider text-red-600">
                    <MapPin className="w-4 h-4 text-red-600" />
                    News Bureaus
                  </h4>
                  <p className="text-xs">
                    • <strong>Nairobi HQ:</strong> AfricaN Media Tower, Kimathi St<br />
                    • <strong>Lagos Bureau:</strong> Victoria Island Media Hub<br />
                    • <strong>Johannesburg Bureau:</strong> Sandton City Towers<br />
                    • <strong>London Bureau:</strong> Fleet Street International
                  </p>
                </div>
              </div>

              <p>
                Our mission is uncompromising journalism: uncovering corruption, tracking continental diplomacy, spotlighting innovation, and honoring African cultural dynamism with rigorous verification and fair attribution.
              </p>
            </div>
          )}

          {/* 2. CONTACT US */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs uppercase font-bold tracking-widest text-red-600">Get in Touch</span>
                <h2 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Contact Newsroom & Bureau Directory
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <Mail className="w-4 h-4 text-red-600" />
                  <h5 className="font-bold text-xs uppercase text-slate-900">Editorial Desk</h5>
                  <p className="text-xs font-mono text-slate-600">editorial@theafrican.co.ke</p>
                  <p className="text-[11px] text-slate-400">Story tips & press releases</p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <Phone className="w-4 h-4 text-red-600" />
                  <h5 className="font-bold text-xs uppercase text-slate-900">Whistleblower Hotline</h5>
                  <p className="text-xs font-mono text-slate-600">+254 (0) 20 892 4000</p>
                  <p className="text-[11px] text-slate-400">Encrypted Signal & WhatsApp</p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <h5 className="font-bold text-xs uppercase text-slate-900">Advertising & AdSense</h5>
                  <p className="text-xs font-mono text-slate-600">ads@theafrican.co.ke</p>
                  <p className="text-[11px] text-slate-400">Direct partnerships & programmatic</p>
                </div>
              </div>

              {/* Direct Form */}
              <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3">
                <h4 className="font-bold text-slate-950 text-sm">Send a Dispatch or Editorial Tip</h4>
                {contactSent ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-lg text-emerald-800 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Your dispatch was securely received by the AfricaN editorial desk.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Your Name (or Anonymous)"
                        className="px-3 py-2 border border-slate-300 rounded-lg text-xs"
                      />
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="Your Email Address *"
                        required
                        className="px-3 py-2 border border-slate-300 rounded-lg text-xs"
                      />
                    </div>
                    <textarea
                      rows={3}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Write your news tip, inquiry, or correction..."
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* 3. PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs uppercase font-bold tracking-widest text-red-600">Privacy & Compliance</span>
                <h2 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Privacy Policy & Google AdSense Disclosure
                </h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Last updated: October 2026</p>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2 text-xs text-amber-950">
                <h4 className="font-bold uppercase tracking-wider text-amber-900">Google AdSense Third-Party Cookies Notice</h4>
                <p>
                  We partner with Google AdSense to serve advertisements when you visit our website. Google, as a third-party vendor, uses cookies (including the DoubleClick DART cookie) to serve ads on <strong>AfricaN</strong> based on prior visits to this website and other websites across the Internet.
                </p>
                <p>
                  You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="underline font-bold text-red-700">Google Ads Settings</a> or through <a href="https://www.aboutads.info/choices" target="_blank" rel="noreferrer" className="underline font-bold text-red-700">aboutads.info</a>.
                </p>
              </div>

              <h4 className="font-bold text-slate-950 text-sm">1. Information We Collect</h4>
              <p>
                When you visit AfricaN, our web servers automatically log standard anonymous visitor details such as IP addresses, browser user-agents, referral URLs, time stamps, and pages accessed. This data is used solely for traffic analytics, security auditing, and server performance monitoring.
              </p>

              <h4 className="font-bold text-slate-950 text-sm">2. Cookies and Web Beacons</h4>
              <p>
                We use cookies to enhance your browsing experience, store reader preferences (such as saved bookmarks and reading modes), and provide tailored editorial recommendations. Third-party advertising partners (including Google AdSense) may place and read cookies on your browser in the course of ads being served.
              </p>

              <h4 className="font-bold text-slate-950 text-sm">3. GDPR & CCPA Rights</h4>
              <p>
                If you reside in the European Economic Area (EEA), United Kingdom, or California, you are entitled under the GDPR/CCPA to access, rectify, or request deletion of personal information held by our servers. You may contact our Data Protection Officer at <code>dpo@theafrican.co.ke</code>.
              </p>
            </div>
          )}

          {/* 4. TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs uppercase font-bold tracking-widest text-red-600">Legal Agreement</span>
                <h2 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Terms of Service & Acceptable Use
                </h2>
              </div>

              <p>
                Welcome to <strong>AfricaN</strong>. By accessing or using our website, applications, feeds, and newsletters, you agree to comply with and be bound by these Terms of Service.
              </p>

              <h4 className="font-bold text-slate-950 text-sm">1. Intellectual Property</h4>
              <p>
                All journalistic content, investigations, photographs, infographics, and masthead branding published on AfricaN are the exclusive property of The AfricaN Media Trust and lead author Clinton Weisei, protected by national and international copyright treaties.
              </p>

              <h4 className="font-bold text-slate-950 text-sm">2. Fair Use & Syndication</h4>
              <p>
                Excerpts of up to 100 words may be quoted with explicit attribution and a direct hyperlink to the original AfricaN article URL. Full reproduction without written authorization from the editorial syndicate is strictly prohibited.
              </p>

              <h4 className="font-bold text-slate-950 text-sm">3. Reader Comments & Community</h4>
              <p>
                Comments submitted to our platform must refrain from hate speech, defamation, commercial solicitation, or unauthorized disclosure of confidential personal information. Our moderators reserve the right to delete violating remarks.
              </p>
            </div>
          )}

          {/* 5. EDITORIAL STANDARDS */}
          {activeTab === 'editorial' && (
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs uppercase font-bold tracking-widest text-red-600">Journalistic Code</span>
                <h2 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Editorial Standards & Fact-Checking Policy
                </h2>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider text-red-600">
                    Dual-Source Verification
                  </h4>
                  <p className="text-xs">
                    All investigative exposés and political allegations require corroboration by at least two independent primary sources or official documentation prior to publishing.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider text-red-600">
                    Right of Reply
                  </h4>
                  <p className="text-xs">
                    Any individual, corporation, or public official who is the subject of critical allegations is contacted and provided reasonable opportunity to respond before publication.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider text-red-600">
                    Corrections Policy
                  </h4>
                  <p className="text-xs">
                    When factual errors occur, AfricaN issues transparent corrections at the top or bottom of the affected article with a clear timestamp and explanation. Contact <code>corrections@theafrican.co.ke</code>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 6. ADSENSE & ADS POLICY */}
          {activeTab === 'adsense' && (
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs uppercase font-bold tracking-widest text-red-600">Monetization Integrity</span>
                <h2 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Google AdSense Compliance & Advertising Policy
                </h2>
              </div>

              <p>
                AfricaN adheres strictly to the <strong>Google AdSense Program Policies</strong> and the <strong>Interactive Advertising Bureau (IAB)</strong> code of conduct:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-xs">
                <li><strong>Clear Ad Labeling:</strong> All commercial units, sponsored stories, and programmatic banner slots are clearly demarcated with "ADVERTISEMENT" or "SPONSORED" badges to prevent misleading navigation.</li>
                <li><strong>No Accidental Clicks:</strong> Ad placements respect minimum padding distances from interactive content, links, and navigation menus.</li>
                <li><strong>Editorial Independence:</strong> Advertisers have zero influence over editorial coverage, whistleblower probes, or journalistic findings.</li>
                <li><strong>Authorized Digital Sellers:</strong> We maintain a verified <code>ads.txt</code> record at <code>theafrican.news/ads.txt</code>.</li>
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>© 2026 AfricaN Media Trust. All rights reserved.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
