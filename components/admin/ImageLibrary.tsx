'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Copy, Check, X, ExternalLink, FolderOpen } from 'lucide-react';

interface ImageItem {
  id: string;
  url: string;
  category: string;
  addedAt: string;
  description?: string;
}

// Default curated images per category
const DEFAULT_IMAGES: Record<string, string[]> = {
  'AI & Automation in Insurance': [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
  ],
  'Insurance Technology & Software': [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  ],
  'Agency Management & Operations': [
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
  ],
  'Digital Transformation': [
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
  ],
  'Comparative Rating & Quoting': [
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
  ],
  'Independent Agent Success': [
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
  ],
};

const CATEGORIES = Object.keys(DEFAULT_IMAGES);

const ImageLibrary: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageCategory, setNewImageCategory] = useState(CATEGORIES[0]);
  const [newImageDescription, setNewImageDescription] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isValidUrl, setIsValidUrl] = useState(true);

  // Load images from localStorage on mount
  useEffect(() => {
    const savedImages = localStorage.getItem('quotely_image_library');
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    } else {
      // Initialize with default images
      const defaultImageItems: ImageItem[] = [];
      Object.entries(DEFAULT_IMAGES).forEach(([category, urls]) => {
        urls.forEach((url, index) => {
          defaultImageItems.push({
            id: `default-${category}-${index}`,
            url,
            category,
            addedAt: new Date().toISOString(),
            description: `Default ${category} image ${index + 1}`,
          });
        });
      });
      setImages(defaultImageItems);
      localStorage.setItem('quotely_image_library', JSON.stringify(defaultImageItems));
    }
  }, []);

  // Save images to localStorage whenever they change
  const saveImages = (newImages: ImageItem[]) => {
    setImages(newImages);
    localStorage.setItem('quotely_image_library', JSON.stringify(newImages));
  };

  const validateImageUrl = (url: string): boolean => {
    try {
      new URL(url);
      return url.startsWith('http://') || url.startsWith('https://');
    } catch {
      return false;
    }
  };

  const handleAddImage = () => {
    if (!newImageUrl.trim()) return;

    if (!validateImageUrl(newImageUrl)) {
      setIsValidUrl(false);
      return;
    }

    const newImage: ImageItem = {
      id: `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      url: newImageUrl.trim(),
      category: newImageCategory,
      addedAt: new Date().toISOString(),
      description: newImageDescription.trim() || undefined,
    };

    saveImages([newImage, ...images]);
    setNewImageUrl('');
    setNewImageDescription('');
    setShowAddModal(false);
    setIsValidUrl(true);
  };

  const handleDeleteImage = (id: string) => {
    if (confirm('Are you sure you want to delete this image from the library?')) {
      saveImages(images.filter(img => img.id !== id));
    }
  };

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const getCategoryCount = (category: string) => {
    return images.filter(img => img.category === category).length;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Image Library</h2>
          <p className="text-gray-400 mt-1">
            Manage curated images for blog articles. {images.length} images total.
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-medium"
        >
          <Plus size={20} />
          Add Image
        </button>
      </div>

      {/* Category Filter */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-gray-300 mr-2">Filter by Category:</span>
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'All'
                ? 'bg-yellow-500 text-gray-900'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            All ({images.length})
          </button>
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.split(' ').slice(0, 2).join(' ')} ({getCategoryCount(category)})
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredImages.map(image => (
          <div
            key={image.id}
            className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden group hover:border-yellow-500/50 transition-colors"
          >
            <div
              className="relative aspect-video bg-gray-700 cursor-pointer"
              onClick={() => setPreviewImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.description || 'Library image'}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x225?text=Image+Not+Found';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                  {image.category.split(' ').slice(0, 2).join(' ')}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(image.addedAt).toLocaleDateString()}
                </span>
              </div>
              {image.description && (
                <p className="text-sm text-gray-400 truncate mb-2">{image.description}</p>
              )}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyUrl(image.url, image.id)}
                  className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 text-xs font-medium text-gray-300 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
                >
                  {copiedId === image.id ? (
                    <>
                      <Check size={14} className="text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy URL
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleDeleteImage(image.id)}
                  className="p-1.5 text-red-400 hover:bg-red-500/10 rounded transition-colors"
                  title="Delete image"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-12 text-center">
          <FolderOpen className="w-12 h-12 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-white mb-2">No images found</h3>
          <p className="text-gray-400 mb-4">
            {selectedCategory === 'All'
              ? 'Add your first image to the library.'
              : `No images in the "${selectedCategory}" category.`}
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-medium"
          >
            <Plus size={20} />
            Add Image
          </button>
        </div>
      )}

      {/* Add Image Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl max-w-lg w-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">Add Image to Library</h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setNewImageUrl('');
                  setNewImageDescription('');
                  setIsValidUrl(true);
                }}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Image URL *
                </label>
                <input
                  type="url"
                  value={newImageUrl}
                  onChange={(e) => {
                    setNewImageUrl(e.target.value);
                    setIsValidUrl(true);
                  }}
                  placeholder="https://images.unsplash.com/..."
                  className={`w-full px-3 py-2 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 ${
                    !isValidUrl ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {!isValidUrl && (
                  <p className="mt-1 text-sm text-red-400">Please enter a valid image URL</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Tip: Use Unsplash URLs with ?q=80&w=1200&auto=format&fit=crop for best results
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Category *
                </label>
                <select
                  value={newImageCategory}
                  onChange={(e) => setNewImageCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white"
                >
                  {CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Description (optional)
                </label>
                <input
                  type="text"
                  value={newImageDescription}
                  onChange={(e) => setNewImageDescription(e.target.value)}
                  placeholder="Brief description of the image"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              {newImageUrl && validateImageUrl(newImageUrl) && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Preview
                  </label>
                  <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                    <img
                      src={newImageUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x225?text=Invalid+Image+URL';
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-end gap-3 p-4 border-t border-gray-700 bg-gray-800/50 rounded-b-xl">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setNewImageUrl('');
                  setNewImageDescription('');
                  setIsValidUrl(true);
                }}
                className="px-4 py-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddImage}
                disabled={!newImageUrl.trim()}
                className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Add Image
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImage(null)}
        >
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>
          <img
            src={previewImage}
            alt="Full size preview"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ImageLibrary;
