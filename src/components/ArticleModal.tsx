import React, { useState } from 'react';
import { 
  X, Bookmark, Share2, ThumbsUp, MessageSquare, Clock, ArrowLeft, Check, Send, ShieldCheck, Scale, Gavel, Edit3, Lock
} from 'lucide-react';
import { Article, CommentItem } from '../types';
import { useAuthor } from '../context/AuthorContext';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onToggleBookmark: (articleId: string) => void;
  isBookmarked: boolean;
  onOpenMonetization: () => void;
  isAdFreeMode: boolean;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onToggleBookmark,
  isBookmarked,
  onOpenMonetization,
  isAdFreeMode
}) => {
  const { isAuthor, openArticleEditor, openLoginModal } = useAuthor();
  const [copiedLink, setCopiedLink] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: 'c1',
      authorName: 'Omondi Kevin',
      authorRole: 'Legal Analyst & Reader',
      timestamp: '18m ago',
      text: 'The precedent set by this court in Corridors of Power will fundamentally influence statutory governance across the continent.',
      upvotes: 42
    },
    {
      id: 'c2',
      authorName: 'Faith Muthoni',
      authorRole: 'Subscriber Member',
      timestamp: '45m ago',
      text: 'Crucial reporting by The AfricaN. Public interest cases like this deserve transparent daylight.',
      upvotes: 27
    }
  ]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    const newComment: CommentItem = {
      id: `comm-${Date.now()}`,
      authorName: commentAuthor.trim() || 'Verified Reader',
      authorRole: 'The AfricaN Reader',
      timestamp: 'Just now',
      text: commentInput.trim(),
      upvotes: 1
    };

    setComments([newComment, ...comments]);
    setCommentInput('');
  };

  const handleUpvote = (commentId: string) => {
    setComments(comments.map(c => c.id === commentId ? { ...c, upvotes: c.upvotes + 1 } : c));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex justify-center p-0 sm:p-4 md:p-6 animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 shadow-2xl rounded-none sm:rounded-xl overflow-hidden my-auto border border-slate-300 min-h-screen sm:min-h-0"
        role="dialog"
        aria-modal="true"
      >
        {/* Sticky Article Toolbar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-700 hover:text-red-600 transition-colors flex items-center gap-1 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to The AfricaN</span>
            </button>
            <span className="text-slate-300">|</span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-red-600 font-bold truncate max-w-[200px]">
              {article.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Author Edit Story Button */}
            {isAuthor ? (
              <button
                onClick={() => openArticleEditor(article)}
                className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold transition-colors flex items-center gap-1 shadow-xs"
                title="Edit this article as author"
              >
                <Edit3 className="w-3.5 h-3.5 text-yellow-300" />
                <span>Edit Story (Author)</span>
              </button>
            ) : (
              <button
                onClick={openLoginModal}
                className="px-2 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-medium transition-colors flex items-center gap-1 border border-slate-200"
                title="Only author Clinton Weisei can edit this article. Click to authenticate."
              >
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline">Author Only</span>
              </button>
            )}

            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 rounded border transition-colors flex items-center gap-1 text-xs ${
                isBookmarked 
                  ? 'bg-red-50 border-red-300 text-red-600 font-bold' 
                  : 'border-slate-200 text-slate-700 hover:border-slate-400'
              }`}
              title="Bookmark story"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-red-600 text-red-600' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-1.5 rounded border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1 text-xs"
              title="Share article link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body Container */}
        <div className="p-4 sm:p-8 md:p-12 max-w-3xl mx-auto space-y-6">
          
          {/* Header Metadata */}
          <div>
            <span className="text-xs uppercase tracking-widest font-sans font-black text-red-600">
              {article.kicker}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mt-2 leading-[1.15]">
              {article.title}
            </h1>
            <p className="text-base sm:text-xl text-slate-600 font-serif mt-3 leading-relaxed">
              {article.deck}
            </p>
          </div>

          {/* Author Byline & Timestamps */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover border border-slate-300"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-sans font-bold text-slate-900 text-sm">
                    {article.author.name}
                  </span>
                  {article.author.verified && (
                    <span title="Verified Staff Reporter">
                      <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500">
                  {article.author.role}
                </p>
              </div>
            </div>

            <div className="text-right text-xs text-slate-500 font-sans">
              <p>{article.publishedAt}</p>
              <p className="flex items-center justify-end gap-1 mt-0.5 font-mono">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>{article.readTime}</span>
              </p>
            </div>
          </div>

          {/* Special "Corridors of Power" Judicial Dossier Box */}
          {article.courtDetail && (
            <div className="border-2 border-red-600 bg-red-50/50 rounded-xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-red-200">
                <div className="flex items-center gap-2 text-red-800 font-black uppercase text-xs">
                  <Scale className="w-4 h-4 text-red-600" />
                  <span>Corridors of Power · Court Docket Dossier</span>
                </div>
                <span className="bg-red-600 text-white font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                  {article.courtDetail.status}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 font-medium block">Court Jurisdiction</span>
                  <p className="font-bold text-slate-900">{article.courtDetail.courtName}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-medium block">Case Reference Number</span>
                  <p className="font-mono font-bold text-red-700">{article.courtDetail.caseNumber}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-medium block">Presiding Judge / Bench</span>
                  <p className="font-semibold text-slate-900">{article.courtDetail.presidingJudge}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-medium block">Key Litigants</span>
                  <p className="font-medium text-slate-700 truncate">{article.courtDetail.keyLitigants}</p>
                </div>
              </div>
            </div>
          )}

          {/* Featured Article Image */}
          {article.imageUrl && (
            <figure className="space-y-2">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-16/9">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              {article.imageCaption && (
                <figcaption className="text-xs font-serif text-slate-500 italic text-left">
                  Photo: {article.imageCaption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Key Facts Box */}
          {article.keyPoints && article.keyPoints.length > 0 && (
            <div className="border-l-4 border-red-600 bg-slate-50 p-4 rounded-r-lg space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-red-700 font-bold block">
                Key Strategic Takeaways
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800">
                {article.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold leading-tight">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Prose Content */}
          <div className="font-serif text-slate-800 text-lg leading-relaxed space-y-5 pt-2">
            {article.content.map((paragraph, idx) => (
              <p 
                key={idx}
                className={idx === 0 ? "first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-slate-950" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* In-Article Monetized Banner */}
          {!isAdFreeMode && (
            <div className="border border-slate-200 bg-slate-50 rounded-xl p-4 my-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-red-600 font-bold block">
                  Sponsored Partner
                </span>
                <h4 className="font-serif font-bold text-slate-900 text-sm mt-0.5">
                  Pan-African University of Governance & Law
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Enroll for executive master of laws in commercial litigation and constitutional jurisprudence.
                </p>
              </div>
              <button
                onClick={onOpenMonetization}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors"
              >
                Learn More
              </button>
            </div>
          )}

          {/* Article Footer & Topic Tags */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Filed under:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-700 hover:text-red-600 transition-colors after:content-['·'] last:after:content-none after:ml-2 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Reader Discussion Section */}
          <div className="pt-8 border-t border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-slate-600" />
                <h3 className="font-serif font-bold text-lg text-slate-950">
                  Reader Discussion ({comments.length})
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">The AfricaN Community</span>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="border border-slate-200 rounded-xl p-3.5 bg-slate-50 space-y-2">
              <input
                type="text"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                placeholder="Your Name (optional)..."
                className="w-full text-xs px-2.5 py-1.5 border border-slate-300 rounded bg-white focus:outline-none focus:border-red-500"
              />
              <textarea
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Share your perspective on this report..."
                rows={3}
                required
                className="w-full text-xs px-2.5 py-2 border border-slate-300 rounded bg-white focus:outline-none focus:border-red-500"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Send className="w-3 h-3" />
                  <span>Submit Comment</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-3">
              {comments.map((c) => (
                <div key={c.id} className="p-3.5 rounded-lg border border-slate-200 bg-white space-y-1.5 shadow-2xs">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900">{c.authorName}</span>
                      <span className="text-slate-400 mx-1.5">·</span>
                      <span className="text-slate-500">{c.authorRole}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">{c.timestamp}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">
                    {c.text}
                  </p>
                  <div className="flex items-center justify-end pt-1">
                    <button
                      onClick={() => handleUpvote(c.id)}
                      className="text-[11px] text-slate-500 hover:text-red-600 flex items-center gap-1 font-mono transition-colors"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{c.upvotes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
