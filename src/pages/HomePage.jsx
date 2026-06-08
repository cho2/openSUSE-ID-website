import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Download, Globe2, Shield, Sparkles, Users } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';
import { allBlogPosts } from '../data/blogPosts';

const HomePage = () => {
  const stats = [
    { label: 'Anggota', value: '5000+', icon: Users },
    { label: 'Download perbulan', value: '10K+', icon: Download },
    { label: 'Repositori', value: '3', icon: Globe2 },
    { label: 'Sejak', value: '2007', icon: Shield },
  ];

  const blogPosts = allBlogPosts.slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,#e8f3d9,transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,#dff1ff,transparent_30%)]" />
        <div className="relative container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8 reveal">

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Komunitas openSUSE Indonesia
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Bergabunglah dengan komunitas Linux terbesar di Indonesia. Belajar, berbagi, dan berkembang bersama.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/groups/opensuse.indonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#73ba25] px-5 py-3 text-white font-semibold hover:bg-[#5ea01d] transition"
                >
                  Facebook Group
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://t.me/openSUSE_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 font-semibold text-gray-800 hover:border-gray-300 hover:bg-gray-50 transition"
                >
                  Telegram Group
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-xl border border-gray-100 bg-white/80 px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#73ba25]/10 text-[#73ba25]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
                        <p className="text-lg font-semibold">{value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative reveal">
              <div className="absolute -top-6 -left-6 h-16 w-16 rounded-2xl bg-[#73ba25]/10 blur-xl" />
              <div className="absolute -bottom-10 -right-6 h-24 w-24 rounded-full bg-[#1c9dd9]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="space-y-0.5">
                    <p className="text-sm text-gray-500">Rilis aktif</p>
                    <p className="font-semibold">Leap & Tumbleweed</p>
                  </div>
                </div>
                <Sparkles className="h-5 w-5 text-[#73ba25]" />
                </div>
                <div className="grid gap-2 p-6">
                  <div className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 transition hover:border-[#73ba25]/20 hover:shadow-sm hover:bg-[#73ba25]/5">
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 inline-flex items-center justify-center rounded-lg bg-[#73ba25]/10">
                        <ImageWithFallback
                          src="https://www.opensuse.org/assets/img/monochrome/leap.svg"
                          alt="Leap"
                          className="h-7 w-7 object-contain"
                        />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Stable</p>
                        <p className="font-semibold">openSUSE Leap</p>
                      </div>
                    </div>
                    <a
                      href="https://download.opensuse.id/distribution/leap/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#73ba25] hover:text-[#5ea01d]"
                    >
                      Download
                    </a>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 transition hover:border-[#1c9dd9]/20 hover:shadow-sm hover:bg-[#1c9dd9]/5">
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 inline-flex items-center justify-center rounded-lg bg-[#1c9dd9]/10">
                        <ImageWithFallback
                          src="https://www.opensuse.org/assets/img/monochrome/tumbleweed.svg"
                          alt="Tumbleweed"
                          className="h-7 w-7 object-contain"
                        />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Rolling</p>
                        <p className="font-semibold">openSUSE Tumbleweed</p>
                      </div>
                    </div>
                    <a
                      href="https://download.opensuse.id/tumbleweed/iso/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#1c9dd9] hover:text-[#1889c0]"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight */}
      <section className="py-14 sm:py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 mb-10 reveal">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#73ba25]">Kenapa openSUSE?</p>
              <h2 className="text-3xl font-bold">Distribusi Linux Terbaik</h2>
              <p className="text-gray-600 max-w-2xl">
                openSUSE adalah distribusi Linux stabil yang tetap mudah dipakai. Cocok untuk desktop maupun server,
                nyaman untuk pemula, kuat untuk pengguna berpengalaman, dan fleksibel untuk developer.
              </p>
              <p className="text-gray-600 max-w-2xl">
                Proyek ini dibangun terbuka dan transparan bersama komunitas FOSS global, sehingga pembaruan, dokumentasi,
                dan dukungan komunitas selalu tersedia.
              </p>
              <Link
                to="/tentang-opensuse"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#73ba25]"
              >
                Pelajari openSUSE
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group reveal rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src="https://www.opensuse.org/assets/img/monochrome/leap.svg"
                    alt="Leap"
                    className="h-10 w-10 object-contain"
                  />
                  <div>
                    <p className="text-xl font-semibold">openSUSE Leap</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#73ba25]/10 px-3 py-1 text-xs font-semibold text-[#73ba25]">Stable release</span>
              </div>
              <p className="text-gray-700">Distribusi stabil dengan dukungan jangka panjang, ideal untuk produksi, server, dan enterprise. Kemudahan migrasi ke tingkat korporasi.</p>
              <br />
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#73ba25]" />
                  <span>Basis rilis stabil untuk desktop dan server.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#73ba25]" />
                  <span>Sinkron dengan SUSE Linux Enterprise untuk kemudahan migrasi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#73ba25]" />
                  <span>Aman: snapshot Btrfs dan YaST untuk konfigurasi cepat.</span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="https://download.opensuse.id/distribution/leap/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#73ba25] transition hover:text-[#5ea01d]"
                >
                  Download Leap
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="group reveal rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src="https://www.opensuse.org/assets/img/monochrome/tumbleweed.svg"
                    alt="Tumbleweed"
                    className="h-10 w-10 object-contain"
                  />
                  <div>
                    <p className="text-xl font-semibold">openSUSE Tumbleweed</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#1c9dd9]/10 px-3 py-1 text-xs font-semibold text-[#1c9dd9]">Rolling Release</span>
              </div>
              <p className="text-gray-700">Distribusi rolling release dengan software terbaru. Ditujukan untuk pengguna yang menginginkan teknologi cutting-edge dan update berkelanjutan.</p>
              <br />
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#1c9dd9]" />
                  <span>Update cepat dengan QA otomatis openQA.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#1c9dd9]" />
                  <span>Cocok untuk pengembang yang butuh paket terbaru.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#1c9dd9]" />
                  <span>Rolling tanpa drama, didukung tooling bawaan SUSE.</span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="https://download.opensuse.id/tumbleweed/iso/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1c9dd9] transition hover:text-[#1889c0]"
                >
                  Download Tumbleweed
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Blog */}
      <section className="py-14 sm:py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Berita & artikel</h2>
              <p className="text-gray-600">Kegiatan komunitas, panduan, dan rilis terbaru.</p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#73ba25]"
            >
              Lihat semua
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3 reveal">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden rounded-t-2xl bg-gray-50">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#73ba25]">
                    <span className="rounded-full bg-[#73ba25]/10 px-3 py-1">{post.category}</span>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="mr-2 h-4 w-4" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug group-hover:text-[#73ba25]">{post.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-gray-100 bg-gradient-to-r from-white to-[#f4f9ed] px-8 py-10 shadow-sm sm:px-12 reveal">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-[#73ba25]">Siap Coba openSUSE?</p>
                <h3 className="text-2xl sm:text-3xl font-bold">Download dari mirror lokal untuk kecepatan maksimal</h3>
                <p className="text-gray-600 max-w-2xl">
                  Pilih rilis yang pas, unduh dari Indonesia, lalu bergabung dengan komunitas untuk dukungan sehari-hari.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://download.opensuse.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#73ba25] px-5 py-3 text-white font-semibold hover:bg-[#5ea01d] transition"
                >
                  <Download className="h-5 w-5" />
                  Download openSUSE
                </a>
                <Link
                  to="/repositori"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 font-semibold text-gray-800 hover:border-gray-300 hover:bg-gray-50 transition"
                >
                  Info repositori
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
