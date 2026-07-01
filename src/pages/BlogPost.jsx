import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, Share2, Check } from 'lucide-react';
import { getPostBySlug } from '../data/blogPosts';
import { getCategoryLabel } from '../lib/categoryUtils';
import DisqusComments from '../components/DisqusComments';

const BlogPost = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const post = getPostBySlug(slug);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt || post.title,
        url,
      }).catch(() => copyToClipboard(url));
    } else {
      copyToClipboard(url);
    }
  };

  // Graceful fallback when a slug does not match any article.
  if (!post) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Artikel tidak ditemukan</h1>
          <p className="text-gray-600 mb-8">Maaf, artikel yang Anda cari tidak tersedia.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-5 py-3 rounded-xl bg-[#73ba25] text-white font-semibold hover:bg-[#5ea01d] transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Kembali ke Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center text-white hover:text-[#73ba25] transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Kembali ke Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center gap-6 text-sm">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {post.dateLabel}
            </span>
            <span className="flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              {getCategoryLabel(post.category)}
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article
              className="blog-content text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Ditulis oleh</p>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">Link Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-4 w-4" />
                      Bagikan
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Comments (Disqus) */}
            <div className="mt-12 pt-8 border-t">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Diskusi & Komentar</h2>
              <DisqusComments post={post} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
