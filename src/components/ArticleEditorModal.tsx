import React, { useState, useEffect } from 'react';
import { X, Save, Edit3, Image, Tag, FileText, Check, Plus, Trash2, Clock, User, ShieldCheck } from 'lucide-react';
import { Article, NewsCategory } from '../types';
import { useAuthor } from '../context/AuthorContext';

export const ArticleEditorModal: React.FC = () => {
  const {
    isArticleEditorOpen,
    editingArticle,
    closeArticleEditor,
    updateArticle,
    addArticle,
    deleteArticle,
    isAuthor,
    authorName,
    authorRole,
    editorInitialCategory,
    categoriesConfig,
    getCategorySectionTitle
  } = useAuthor();

  const [title, setTitle] = useState('');
  const [kicker, setKicker] = useState('');
  const [deck, setDeck] = useState('');
  const [category, setCategory] = useState<NewsCategory>('top-stories');
  const [imageUrl, setImageUrl] = useState('');
  const [imageCaption, setImageCaption] = useState('');
  const [readTime, setReadTime] = useState('3 min read');
  const [customAuthorName, setCustomAuthorName] = useState(authorName);
  const [customAuthorRole, setCustomAuthorRole] = useState(authorRole);
  const [publishedAt, setPublishedAt] = useState('Just Now');
  const [tags, setTags] = useState('');
  const [contentParagraphs, setContentParagraphs] = useState('');
  const [isLeadStory, setIsLeadStory] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const isCreatingNew = !editingArticle;

  // Sync state when editingArticle changes
  useEffect(() => {
    if (editingArticle) {
      setTitle(editingArticle.title || '');
      setKicker(editingArticle.kicker || 'DESK REPORT');
      setDeck(editingArticle.deck || '');
      setCategory(editingArticle.category || 'top-stories');
      setImageUrl(editingArticle.imageUrl || '');
      setImageCaption(editingArticle.imageCaption || '');
      setReadTime(editingArticle.readTime || '3 min read');
      setCustomAuthorName(editingArticle.author?.name || authorName);
      setCustomAuthorRole(editingArticle.author?.role || authorRole);
      setPublishedAt(editingArticle.publishedAt || 'Just Now');
      setTags((editingArticle.tags || []).join(', '));
      setContentParagraphs((editingArticle.content || []).join('\n\n'));
      setIsLeadStory(Boolean(editingArticle.isLead));
    } else {
      setTitle('');
      setKicker('BREAKING INVESTIGATION');
      setDeck('');
      setCategory(editorInitialCategory || 'top-stories');
      setImageUrl('/src/assets/images/african_politics_summit_1791231284594.jpg');
      setImageCaption('File Photo: AfricaN Newsroom Archives');
      setReadTime('3 min read');
      setCustomAuthorName(authorName);
      setCustomAuthorRole(authorRole);
      setPublishedAt('Just Now');
      setTags('Breaking, AfricaN News, Continental News');
      setContentParagraphs('');
      setIsLeadStory(false);
    }
    setSavedSuccess(false);
    setConfirmDelete(false);
  }, [editingArticle, isArticleEditorOpen, authorName, authorRole, editorInitialCategory]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isArticleEditorOpen) {
        closeArticleEditor();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isArticleEditorOpen, closeArticleEditor]);

  // CRITICAL BUG FIX: Only render when isArticleEditorOpen is true!
  if (!isArticleEditorOpen) return null;

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const parsedContent = contentParagraphs
      .split('\n\n')
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    const parsedTags = tags
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    if (editingArticle) {
      const updated: Article = {
        ...editingArticle,
        title: title.trim(),
        kicker: kicker.trim(),
        deck: deck.trim(),
        category,
        categoryLabel: category.toUpperCase().replace('-', ' '),
        imageUrl: imageUrl.trim() || '/src/assets/images/african_politics_summit_1791231284594.jpg',
        imageCaption: imageCaption.trim(),
        readTime: readTime.trim() || '3 min read',
        author: {
          ...editingArticle.author,
          name: customAuthorName.trim() || authorName,
          role: customAuthorRole.trim() || authorRole
        },
        publishedAt: publishedAt.trim() || 'Just Now',
        tags: parsedTags.length > 0 ? parsedTags : ['AfricaN', 'News'],
        content: parsedContent.length > 0 ? parsedContent : [deck.trim() || title.trim()],
        isLead: isLeadStory
      };
      updateArticle(updated);
    } else {
      const newArt: Article = {
        id: `author-post-${Date.now()}`,
        title: title.trim(),
        kicker: kicker.trim() || 'AUTHOR DISPATCH',
        deck: deck.trim() || title.trim(),
        category,
        categoryLabel: category.toUpperCase().replace('-', ' '),
        author: {
          name: customAuthorName.trim() || authorName,
          role: customAuthorRole.trim() || authorRole,
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
          verified: true
        },
        publishedAt: publishedAt.trim() || 'Just Now',
        readTime: readTime.trim() || '3 min read',
        imageUrl: imageUrl.trim() || '/src/assets/images/african_politics_summit_1791231284594.jpg',
        imageCaption: imageCaption.trim(),
        views: 150,
        commentsCount: 0,
        isLead: isLeadStory,
        tags: parsedTags.length > 0 ? parsedTags : ['AfricaN', 'Breaking News'],
        content: parsedContent.length > 0 ? parsedContent : [deck.trim() || title.trim()]
      };
      addArticle(newArt);
    }

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      closeArticleEditor();
    }, 400);
  };

  const handleDelete = () => {
    if (!editingArticle) return;
    deleteArticle(editingArticle.id);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeArticleEditor();
        }
      }}
    >
      <div 
        className="relative w-full max-w-3xl bg-white text-slate-900 shadow-2xl rounded-2xl border-2 border-red-600 overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Edit3 className="w-5 h-5 text-yellow-300" />
            <div>
              <h3 className="font-sans font-black text-sm uppercase tracking-wide">
                {isCreatingNew ? 'Create New Article · Author Studio' : 'Edit Article · Author Studio'}
              </h3>
              <span className="text-[10px] text-red-100 font-mono">
                Author: {authorName} · All privileges active
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={closeArticleEditor}
            className="p-1.5 rounded-full hover:bg-black/20 text-white hover:text-yellow-300 transition-colors cursor-pointer"
            title="Close editor (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-5 sm:p-6 space-y-4 max-h-[82vh] overflow-y-auto">
          {savedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center gap-2 text-emerald-800 text-sm font-bold animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Article successfully saved to AfricaN news archives!</span>
            </div>
          )}

          {/* Section & Kicker */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Kicker / Category Label
              </label>
              <input
                type="text"
                value={kicker}
                onChange={(e) => setKicker(e.target.value)}
                placeholder="e.g. EXCLUSIVE INVESTIGATION"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-bold text-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                News Section / Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as NewsCategory)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-800 focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
              >
                {categoriesConfig.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.sectionTitle || cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Article Title */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Article Headline / Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter impactful journalistic headline..."
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm font-serif font-bold text-slate-950 focus:outline-none focus:ring-1 focus:ring-red-600"
              required
            />
          </div>

          {/* Deck / Sub-headline */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Summary Deck (Lead paragraph excerpt for homepage)
            </label>
            <textarea
              rows={2}
              value={deck}
              onChange={(e) => setDeck(e.target.value)}
              placeholder="Brief summary deck for the homepage..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-red-600"
            />
          </div>

          {/* Image Upload / URL */}
          <div className="space-y-2 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
            <label className="block text-xs font-bold text-slate-800 uppercase flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Image className="w-3.5 h-3.5 text-red-600" />
                Featured Article Image
              </span>
              <span className="text-[10px] text-slate-500 font-normal">File upload or remote URL</span>
            </label>

            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL or choose file below..."
                className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-mono"
              />
              <label className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold cursor-pointer whitespace-nowrap shadow-xs flex items-center gap-1">
                <Plus className="w-3 h-3 text-yellow-300" />
                <span>Upload File</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <input
              type="text"
              value={imageCaption}
              onChange={(e) => setImageCaption(e.target.value)}
              placeholder="Image caption / Photo credit (e.g. Photo by Clinton Weisei / AfricaN Media)..."
              className="w-full px-3 py-1.5 border border-slate-200 rounded-lg text-xs text-slate-600 bg-white"
            />

            {imageUrl && (
              <div className="h-32 w-full rounded-lg overflow-hidden bg-slate-200 border border-slate-300 mt-2 relative">
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">
                  Live Preview
                </span>
              </div>
            )}
          </div>

          {/* Full Article Text */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-red-600" />
                Full Article Paragraphs
              </span>
              <span className="text-[10px] text-slate-400 font-normal">Separate paragraphs with blank lines</span>
            </label>
            <textarea
              rows={6}
              value={contentParagraphs}
              onChange={(e) => setContentParagraphs(e.target.value)}
              placeholder="Write the full report here. Separate paragraphs with double enter..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-red-600 leading-relaxed font-sans"
            />
          </div>

          {/* Author Byline & Publish Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                <User className="w-3 h-3 text-red-600" />
                Byline Author Name
              </label>
              <input
                type="text"
                value={customAuthorName}
                onChange={(e) => setCustomAuthorName(e.target.value)}
                className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs font-semibold"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Author Editorial Title
              </label>
              <input
                type="text"
                value={customAuthorRole}
                onChange={(e) => setCustomAuthorRole(e.target.value)}
                className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs text-slate-600"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3 text-red-600" />
                Publish Date / Time
              </label>
              <input
                type="text"
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
                placeholder="e.g. 15 mins ago"
                className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs font-mono"
              />
            </div>
          </div>

          {/* Read Time & Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Read Time
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="e.g. 4 min read"
                className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                <Tag className="w-3 h-3 text-red-600" />
                Tags (Comma separated)
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g. Nairobi, Politics, Exclusive"
                className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
              />
            </div>
          </div>

          {/* Lead Story Toggle */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="isLeadStory"
              checked={isLeadStory}
              onChange={(e) => setIsLeadStory(e.target.checked)}
              className="w-4 h-4 text-red-600 rounded border-slate-300 focus:ring-red-600"
            />
            <label htmlFor="isLeadStory" className="text-xs font-bold text-slate-700 cursor-pointer">
              Feature as Lead Headline in this section
            </label>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
            <div>
              {!isCreatingNew && (
                confirmDelete ? (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-red-600 font-bold">Confirm delete?</span>
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors"
                    >
                      Yes, Delete
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmDelete(false)}
                      className="px-2.5 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-xs"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setConfirmDelete(true)}
                    className="px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 border border-red-200"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Article</span>
                  </button>
                )
              )}
            </div>

            <div className="flex items-center gap-2 ml-auto">
              {/* WORKING CANCEL BUTTON */}
              <button
                type="button"
                onClick={closeArticleEditor}
                className="px-4 py-2 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Cancel / Close
              </button>

              {/* SAVE / PUBLISH BUTTON */}
              <button
                type="submit"
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Save className="w-4 h-4 text-yellow-300" />
                <span>{isCreatingNew ? 'Publish to AfricaN' : 'Save Changes'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
