'use client';

import React, { useState, useRef } from 'react';
import {
  Upload,
  FileText,
  FileCode,
  Check,
  X,
  Eye,
  Download,
  AlertCircle,
  Image as ImageIcon,
  Calendar,
  User,
  Tag,
  Clock,
  RefreshCw,
  Save,
  Copy
} from 'lucide-react';

// Array of Unsplash images for blog articles
const UNSPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop'
];

interface ParsedArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  image?: string;
}

const ArticleUploader: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [article, setArticle] = useState<ParsedArticle | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Categories available for blog posts
  const categories = [
    'Starting an Insurance Company',
    'Insurance Technology',
    'Agency Management',
    'Carrier Partnerships',
    'Marketing & Sales',
    'Compliance & Regulations',
    'Industry News',
    'Best Practices'
  ];

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const getRandomImage = (): string => {
    const randomIndex = Math.floor(Math.random() * UNSPLASH_IMAGES.length);
    return UNSPLASH_IMAGES[randomIndex];
  };

  const regenerateImage = () => {
    if (!article) return;
    const newImage = getRandomImage();
    // Make sure we get a different image
    if (newImage === article.image && UNSPLASH_IMAGES.length > 1) {
      regenerateImage();
      return;
    }
    setArticle({ ...article, image: newImage });
  };

  const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]+>/g, '');
    const wordCount = textContent.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  const extractTitleFromHTML = (html: string): string => {
    // Try to find h1 tag
    const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
    if (h1Match) return h1Match[1].trim();

    // Try to find title tag
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) return titleMatch[1].trim();

    return 'Untitled Article';
  };

  const extractExcerpt = (content: string): string => {
    // Remove HTML tags and get first 200 characters
    const textContent = content.replace(/<[^>]+>/g, '');
    const excerpt = textContent.substring(0, 200).trim();
    return excerpt + (textContent.length > 200 ? '...' : '');
  };

  const wrapContentInBlogFormat = (content: string): string => {
    // Check if content is already wrapped in blog-content div
    if (content.includes('class="blog-content"')) {
      return content;
    }

    return `
<div class="blog-content">
  ${content}
</div>
    `.trim();
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError('');
    setUploadedFile(file);
    setIsProcessing(true);

    try {
      if (file.type === 'text/html' || file.name.endsWith('.html') || file.name.endsWith('.htm')) {
        await processHTMLFile(file);
      } else if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        await processPDFFile(file);
      } else {
        setError('Unsupported file type. Please upload an HTML or PDF file.');
        setUploadedFile(null);
      }
    } catch (err) {
      setError(`Error processing file: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const processHTMLFile = async (file: File) => {
    const text = await file.text();

    // Extract content from body if present
    let content = text;
    const bodyMatch = text.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (bodyMatch) {
      content = bodyMatch[1];
    }

    const title = extractTitleFromHTML(text);
    const wrappedContent = wrapContentInBlogFormat(content);

    const newArticle: ParsedArticle = {
      id: generateSlug(title),
      slug: generateSlug(title),
      title: title,
      excerpt: extractExcerpt(content),
      content: wrappedContent,
      author: 'Dustin Wyzard',
      date: new Date().toISOString().split('T')[0],
      readTime: calculateReadTime(content),
      category: categories[0],
      featured: false,
      image: getRandomImage()
    };

    setArticle(newArticle);
  };

  const processPDFFile = async (file: File) => {
    // For PDF processing, we'll create a placeholder
    const fileName = file.name.replace('.pdf', '');

    const placeholderContent = `
      <p class="lead text-xl text-gray-700 mb-8">
        Content extracted from PDF: ${file.name}
      </p>
      <p>This article was uploaded from a PDF file. The content will be processed and formatted for the blog.</p>
      <p><strong>Note:</strong> PDF text extraction may require manual review and formatting adjustments.</p>
    `;

    const newArticle: ParsedArticle = {
      id: generateSlug(fileName),
      slug: generateSlug(fileName),
      title: fileName.replace(/-/g, ' ').replace(/_/g, ' '),
      excerpt: `Content extracted from ${file.name}. Review and edit as needed.`,
      content: wrapContentInBlogFormat(placeholderContent),
      author: 'Dustin Wyzard',
      date: new Date().toISOString().split('T')[0],
      readTime: '5 min read',
      category: categories[0],
      featured: false,
      image: getRandomImage()
    };

    setArticle(newArticle);
    setError('PDF uploaded. Note: Full PDF text extraction requires backend processing. Please paste or edit the content manually.');
  };

  const updateArticleField = (field: keyof ParsedArticle, value: string | boolean) => {
    if (!article) return;

    setArticle({
      ...article,
      [field]: value,
      // Auto-update slug when title changes
      ...(field === 'title' ? {
        id: generateSlug(value as string),
        slug: generateSlug(value as string)
      } : {})
    });
  };

  const handleExportJSON = () => {
    if (!article) return;

    const jsonString = JSON.stringify(article, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${article.slug}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyToClipboard = () => {
    if (!article) return;

    const jsonString = JSON.stringify(article, null, 2);
    navigator.clipboard.writeText(jsonString).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const handleSaveToFile = () => {
    if (!article) return;

    // Create a .ts file snippet that can be added to blogPosts.ts
    const tsContent = `// Add this article to the blogPosts array in data/blogPosts.ts
// Place it at the beginning of the array (after the opening bracket)

${JSON.stringify(article, null, 2)},

// Instructions:
// 1. Open data/blogPosts.ts
// 2. Find the line: export const blogPosts: BlogPost[] = [
// 3. Paste this object right after the opening bracket
// 4. Save the file
// 5. Deploy the site
`;

    const blob = new Blob([tsContent], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${article.slug}-blogpost.ts`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetUploader = () => {
    setUploadedFile(null);
    setArticle(null);
    setShowPreview(false);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Upload className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Article Uploader</h2>
        </div>
        <p className="text-white/90">
          Upload HTML or PDF files to create new blog articles. Files will be parsed and formatted automatically.
        </p>
      </div>

      {/* Upload Area */}
      {!article && (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
              isProcessing ? 'border-gray-600 bg-gray-700/50' : 'border-gray-600 hover:border-yellow-500 hover:bg-gray-700/50'
            }`}
            onClick={() => !isProcessing && fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".html,.htm,.pdf"
              onChange={handleFileSelect}
              className="hidden"
            />

            {isProcessing ? (
              <div className="space-y-4">
                <div className="animate-spin w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full mx-auto"></div>
                <p className="text-gray-300">Processing file...</p>
              </div>
            ) : (
              <>
                <div className="flex justify-center gap-4 mb-4">
                  <FileCode className="w-12 h-12 text-blue-400" />
                  <FileText className="w-12 h-12 text-red-400" />
                </div>
                <p className="text-lg font-medium text-white mb-2">
                  Drop your file here or click to browse
                </p>
                <p className="text-sm text-gray-400">
                  Supports HTML (.html, .htm) and PDF (.pdf) files
                </p>
              </>
            )}
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-300">{error}</p>
            </div>
          )}
        </div>
      )}

      {/* Article Editor */}
      {article && (
        <div className="space-y-6">
          {/* File Info */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-400" />
              <div>
                <p className="font-medium text-green-300">File uploaded successfully</p>
                <p className="text-sm text-green-400/80">{uploadedFile?.name}</p>
              </div>
            </div>
            <button
              onClick={resetUploader}
              className="px-3 py-1.5 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
            >
              Remove
            </button>
          </div>

          {/* Article Details Form */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Article Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <FileText className="w-4 h-4 inline mr-1" />
                  Title
                </label>
                <input
                  type="text"
                  value={article.title}
                  onChange={(e) => updateArticleField('title', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                />
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Author
                </label>
                <input
                  type="text"
                  value={article.author}
                  onChange={(e) => updateArticleField('author', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Publish Date
                </label>
                <input
                  type="date"
                  value={article.date}
                  onChange={(e) => updateArticleField('date', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Tag className="w-4 h-4 inline mr-1" />
                  Category
                </label>
                <select
                  value={article.category}
                  onChange={(e) => updateArticleField('category', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Read Time */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Read Time
                </label>
                <input
                  type="text"
                  value={article.readTime}
                  onChange={(e) => updateArticleField('readTime', e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                />
              </div>

              {/* Featured Image URL */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <ImageIcon className="w-4 h-4 inline mr-1" />
                  Featured Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={article.image || ''}
                    onChange={(e) => updateArticleField('image', e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                    placeholder="https://images.unsplash.com/..."
                  />
                  <button
                    type="button"
                    onClick={regenerateImage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    title="Generate new random image"
                  >
                    <RefreshCw size={18} />
                    New Image
                  </button>
                </div>
                {article.image && (
                  <div className="mt-3">
                    <img
                      src={article.image}
                      alt="Preview"
                      className="h-32 w-auto rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Excerpt */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={article.excerpt}
                  onChange={(e) => updateArticleField('excerpt', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                />
              </div>

              {/* Featured Toggle */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={article.featured}
                    onChange={(e) => updateArticleField('featured', e.target.checked)}
                    className="w-4 h-4 text-yellow-500 border-gray-600 rounded focus:ring-yellow-500 bg-gray-700"
                  />
                  <span className="text-sm font-medium text-gray-300">Featured Article</span>
                </label>
              </div>

              {/* Content Editor */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Content (HTML)
                </label>
                <textarea
                  value={article.content}
                  onChange={(e) => updateArticleField('content', e.target.value)}
                  rows={15}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent font-mono text-sm text-white"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Export Article</h4>
            <p className="text-sm text-gray-400 mb-4">
              Copy the article JSON or download it to add to your blogPosts.ts file.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={handleCopyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-medium"
              >
                {copySuccess ? <Check size={18} /> : <Copy size={18} />}
                {copySuccess ? 'Copied!' : 'Copy to Clipboard'}
              </button>
              <button
                onClick={handleSaveToFile}
                className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Save size={18} />
                Save as File
              </button>
              <button
                onClick={handleExportJSON}
                className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Download size={18} />
                Export JSON
              </button>
            </div>

            {/* Secondary Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-700">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Eye size={18} />
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </button>
              <button
                onClick={resetUploader}
                className="flex items-center gap-2 px-4 py-2 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/10 transition-colors"
              >
                <X size={18} />
                Cancel
              </button>
            </div>
          </div>

          {/* Preview */}
          {showPreview && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Article Preview</h3>
              <div className="border border-gray-600 rounded-lg p-6 bg-gray-700/50">
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                )}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">{article.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="text-sm font-semibold text-blue-300 mb-2">How to Add This Article</h4>
            <ol className="text-sm text-blue-200/80 space-y-1 list-decimal list-inside">
              <li>Click &quot;Copy to Clipboard&quot; to copy the article JSON</li>
              <li>Open <code className="bg-blue-500/20 px-1 rounded">data/blogPosts.ts</code></li>
              <li>Add the copied JSON to the <code className="bg-blue-500/20 px-1 rounded">blogPosts</code> array</li>
              <li>Save the file and rebuild the site</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleUploader;
