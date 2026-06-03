import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <ImageWithFallback
                src="https://raw.githubusercontent.com/opensuse-id/openSUSE-ID-artwork/master/openSUSE-ID-logo/openSUSE-ID-logo.png" 
                alt="openSUSE.ID" 
                className="h-10 transition-transform group-hover:scale-105"
                showIcon={false}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive('/') 
                    ? 'bg-[#73ba25] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Beranda
              </Link>
              <Link 
                to="/tentang-opensuse" 
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive('/tentang-opensuse') 
                    ? 'bg-[#73ba25] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Tentang openSUSE
              </Link>
              <Link 
                to="/tentang-kami" 
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive('/tentang-kami') 
                    ? 'bg-[#73ba25] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Tentang Kami
              </Link>
              <Link 
                to="/kode-etik" 
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive('/kode-etik') 
                    ? 'bg-[#73ba25] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Kode Etik
              </Link>
              <div className="relative group">
                <button className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-all flex items-center">
                  Blog <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                  <Link 
                    to="/blog" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors rounded-t-xl"
                  >
                    Semua Artikel
                  </Link>
                  <Link 
                    to="/blog?category=panduan" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Panduan
                  </Link>
                  <Link 
                    to="/blog?category=kegiatan" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Kegiatan
                  </Link>
                  <Link 
                    to="/blog?category=wajah-opensuse-id" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors rounded-b-xl"
                  >
                    Wajah openSUSE.ID
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-all flex items-center">
                  Konferensi <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                  <Link 
                    to="/konferensi/opensuse-asia-summit-2016" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors rounded-t-xl"
                  >
                    openSUSE.Asia Summit 2016
                  </Link>
                  <Link 
                    to="/konferensi/opensuse-asia-summit-2019" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    openSUSE.Asia Summit 2019
                  </Link>
                  <Link 
                    to="/konferensi/opensuse-asia-summit-2026" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors rounded-b-xl"
                  >
                    openSUSE.Asia Summit 2026
                  </Link>
                </div>
              </div>
              <Link 
                to="/repositori" 
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive('/repositori') 
                    ? 'bg-[#73ba25] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Repositori
              </Link>
              <Link 
                to="/hubungi" 
                className="ml-2 px-6 py-2 bg-[#1c9dd9] hover:bg-[#1889c0] text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-sm"
              >
                Hubungi
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t">
              <Link 
                to="/" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                to="/tentang-opensuse" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tentang openSUSE
              </Link>
              <Link 
                to="/tentang-kami" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link 
                to="/blog" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="border-t border-gray-200 my-2"></div>
              <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Konferensi</p>
              <Link 
                to="/konferensi/opensuse-asia-summit-2016" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                openSUSE.Asia Summit 2016
              </Link>
              <Link 
                to="/konferensi/opensuse-asia-summit-2019" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                openSUSE.Asia Summit 2019
              </Link>
              <Link 
                to="/konferensi/opensuse-asia-summit-2026" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                openSUSE.Asia Summit 2026
              </Link>
              <Link 
                to="/repositori" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Repositori
              </Link>
              <Link 
                to="/hubungi" 
                className="block px-4 py-3 bg-[#1c9dd9] text-white hover:bg-[#1889c0] rounded-lg transition-colors mx-4 mt-2 text-center font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hubungi
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content with padding for fixed header */}
      <main className="pt-16">{children}</main>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <ImageWithFallback
                src="https://raw.githubusercontent.com/opensuse-id/openSUSE-ID-artwork/master/openSUSE-ID-logo/openSUSE-ID-logo.png" 
                alt="openSUSE.ID" 
                className="h-10 mb-4"
                showIcon={false}
              />
              <p className="text-gray-400 mb-4 max-w-md">
                Komunitas openSUSE Indonesia - Mempromosikan penggunaan Linux dan open source di Indonesia.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Navigasi</h3>
              <nav className="space-y-2">
                <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Beranda</Link>
                <Link to="/tentang-opensuse" className="block text-gray-400 hover:text-white transition-colors">Tentang openSUSE</Link>
                <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</Link>
                <Link to="/repositori" className="block text-gray-400 hover:text-white transition-colors">Repositori</Link>
                <Link to="/hubungi" className="block text-gray-400 hover:text-white transition-colors">Hubungi Kami</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-bold mb-4">Komunitas</h3>
              <nav className="space-y-2">
                <a href="https://t.me/openSUSE_ID" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
                <a href="https://www.facebook.com/groups/opensuse.indonesia" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a href="https://www.instagram.com/openSUSE_ID" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  Instagram
                </a>
                <a href="https://x.com/openSUSE_ID" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X (Twitter)
                </a>
                <a href="https://www.youtube.com/@openSUSE_ID" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </nav>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} openSUSE Indonesia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;