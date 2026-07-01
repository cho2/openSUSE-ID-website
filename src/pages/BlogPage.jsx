import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, Tag, ChevronLeft, ChevronRight, PenLine, Search, X } from 'lucide-react';
import { allBlogPosts } from '../data/blogPosts';
import { CATEGORIES, getCategoryLabel } from '../lib/categoryUtils';
import ImageWithFallback from '../components/ImageWithFallback';

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const page = parseInt(searchParams.get('page')) || 1;
  const query = searchParams.get('q') || '';
  const POSTS_PER_PAGE = 10;

  // Filter by category and search query (title, excerpt, author)
  const q = query.trim().toLowerCase();
  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory = category ? post.category === category : true;
    const matchesQuery = q
      ? [post.title, post.excerpt, post.author].some(
          (field) => (field || '').toLowerCase().includes(q)
        )
      : true;
    return matchesCategory && matchesQuery;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPage = Math.min(page, totalPages || 1);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const categoryName = category ? getCategoryLabel(category) : 'Semua Artikel';

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, category, q]);

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    setSearchParams(params);
  };

  const handleSearchChange = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('q', value);
    } else {
      params.delete('q');
    }
    params.delete('page'); // reset to first page on new search
    setSearchParams(params, { replace: true });
  };

  return (
    <div>
      {/* Modern Hero Section */}
      <section className="bg-gradient-to-br from-[#73ba25] via-[#5ea01d] to-[#4a8b16] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Artikel</h1>
            <p className="text-lg md:text-xl opacity-95">
              Tutorial, kegiatan komunitas, dan berita seputar openSUSE
            </p>
            <Link
              to="/tulis-artikel"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-white text-[#5ea01d] font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              <PenLine className="h-5 w-5" /> Tulis Artikel
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Category Filter + Search */}
      <section className="bg-white sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Search box */}
          <div className="pt-4">
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Cari artikel berdasarkan judul, ringkasan, atau penulis…"
                aria-label="Cari artikel"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-11 text-gray-800 placeholder:text-gray-400 focus:border-[#73ba25] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#73ba25]/20 transition-all"
              />
              {query && (
                <button
                  onClick={() => handleSearchChange('')}
                  aria-label="Hapus pencarian"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3 py-4 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => {
              const isSemua = cat.value === 'semua';
              const isActive = isSemua ? !category : category === cat.value;
              return (
                <Link
                  key={cat.value}
                  to={isSemua ? '/blog' : `/blog?category=${cat.value}`}
                  className={`px-5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap ${
                    isActive ? 'bg-[#73ba25] text-white shadow-lg' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">{categoryName}</h2>
              <p className="text-gray-600 mt-1">
                {filteredPosts.length} artikel ditemukan
                {query && <> untuk “<span className="font-medium text-gray-800">{query}</span>”</>}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <ImageWithFallback
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-gray-900">
                        {getCategoryLabel(post.category)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.dateLabel}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#73ba25] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl">
                <div className="text-gray-400 mb-4">
                  {query ? <Search className="h-16 w-16 mx-auto" /> : <Tag className="h-16 w-16 mx-auto" />}
                </div>
                <p className="text-gray-500 text-lg font-medium">
                  {query
                    ? `Tidak ada artikel yang cocok dengan “${query}”`
                    : 'Belum ada artikel dalam kategori ini'}
                </p>
                {query && (
                  <button
                    onClick={() => handleSearchChange('')}
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#73ba25] text-white font-semibold hover:bg-[#5ea01d] transition-colors"
                  >
                    <X className="h-4 w-4" /> Hapus pencarian
                  </button>
                )}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg transition-all ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-[#73ba25] hover:text-white shadow-sm'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  // Show first page, last page, current page, and pages around current
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`min-w-[40px] h-10 rounded-lg font-medium transition-all ${
                          currentPage === pageNumber
                            ? 'bg-[#73ba25] text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                    return <span key={pageNumber} className="text-gray-400">...</span>;
                  }
                  return null;
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg transition-all ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-[#73ba25] hover:text-white shadow-sm'
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
