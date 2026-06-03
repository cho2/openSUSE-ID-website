import React from 'react';
import { Users, Globe, Heart, Code } from 'lucide-react';

const KodeEtik = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1c9dd9] to-[#1889c0] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Kode Etik</h1>
            <p className="text-xl opacity-90">Komunitas openSUSE Indonesia</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-gray-700 leading-relaxed space-y-6 text-lg mb-16">
              <p>
                Kode Etik openSUSE adalah seperangkat pedoman yang menjelaskan bagaimana komunitas kami berperilaku dan apa yang kami hargai sebagai anggota dan proyeksikan kepada orang lain. Kode Etik ini merupakan dokumen yang berlaku dan akan diperbarui kapan pun dan sebagaimana diperlukan.
              </p>
              <p>
                Kode Etik ini tidak bertujuan untuk membatasi kebebasan berbicara atau menghukum penutur non-asli bahasa Inggris atau bahasa lainnya. Sebaliknya, Kode Etik ini menguraikan jenis-jenis perilaku yang kami, sebagai komunitas, anggap dapat diterima dan tidak dapat diterima.
              </p>
              <p>
                Kode Etik ini, dalam banyak hal, merupakan perwujudan nyata dari komponen-komponen openSUSE. Penting untuk mengasumsikan itikad baik dan mengingat bahwa banyak kontributor kami mungkin memiliki latar belakang yang berbeda, yang dapat memengaruhi pendekatan mereka dalam segala hal.
              </p>
            </div>

            {/* Activities Section */}
            <div className="bg-gray-50 rounded-xl p-8 mb-5">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Standar Kami</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <p>Komunitas openSUSE Indonesia berdedikasi untuk menyediakan pengalaman positif bagi semua orang, terlepas dari atribut tersebut (termasuk, tetapi tidak terbatas pada):</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>usia</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>ukuran tubuh</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Kasta</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Kewarganegaraan</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Disabilitas</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Pendidikan</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Etnisitas</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Status keluarga</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Ekspresi gender</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Identitas gender</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Informasi genetik</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Status imigrasi</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Tingkat pengalaman</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Kebangsaan</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Penampilan pribadi</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Kehamilan</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Balapan</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Agama</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Karakteristik jenis kelamin</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Orientasi seksual</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Identitas seksual</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Status sosial ekonomi</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Suku</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Status veteran</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>dan lain-lain</p>
                </div>
              </div>
            </div>

            {/* Activities Section */}
            <div className="bg-gray-50 rounded-xl p-8 mb-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Harapan Kami</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <p>Contoh perilaku yang berkontribusi dalam menciptakan lingkungan yang positif meliputi:</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Menggunakan bahasa yang ramah dan inklusif</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Bersikap baik kepada orang lain</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Berperilaku dengan sopan</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Menghormati sudut pandang dan pengalaman yang berbeda, serta kontribusinya terhadap proyek secara keseluruhan</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Berfokus pada apa yang terbaik bagi masyarakat</p>
                </div>
              </div>
            </div>
            
            {/* Activities Section */}
            <div className="bg-gray-50 rounded-xl p-8 mb-1">
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <p>Contoh perilaku yang tidak dapat diterima meliputi:</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Pernyataan yang seksis, rasis, homofobik, transfobik, diskriminatif terhadap penyandang disabilitas, atau bersifat eksklusif, meskipun dimaksudkan sebagai lelucon</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Kontak fisik yang tidak diinginkan</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Penggunaan bahasa atau gambar yang mengandung unsur seksual serta perhatian atau ajakan seksual yang tidak diinginkan</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Mengatakan komentar yang menghina atau merendahkan serta melakukan serangan pribadi</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Pelecehan publik atau pribadi, termasuk doxing</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Ancaman atau bahasa kekerasan yang ditujukan kepada orang lain</p>
                </div>
              </div>
            </div>

            {/* Activities Section */}
            <div className="bg-gray-50 rounded-xl p-8 mb-5">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Cakupan</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <p>Kode Etik ini berlaku untuk semua ruang komunitas openSUSE Indonesia. Termasuk, tetapi tidak terbatas pada:</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>grup Telegram openSUSE Indonesia</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Semua tempat acara dan ruang terkait, termasuk konferensi, hackfest, pesta rilis, lokakarya, dan acara kecil lainnya</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Semua area yang berhubungan dengan tempat acara: ruang pameran vendor, area staf dan makan, infrastruktur penghubung seperti jalan setapak, lorong, lift, dan tangga</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Mensponsori acara, baik di lokasi maupun di luar lokasi</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Acara pribadi di luar lokasi yang melibatkan satu atau lebih peserta</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p>Percakapan pribadi yang berlangsung di hotel konferensi resmi</p>
                </div>
                <div className="flex items-start">
                  <p>Saluran komunikasi dan percakapan pribadi yang biasanya di luar cakupan dapat dianggap masuk cakupan jika seorang peserta openSUSE Indonesia dikuntit atau dilecehkan. Percakapan media sosial dapat dianggap masuk cakupan jika insiden terjadi di bawah tagar acara openSUSE Indonesia, atau ketika akun media sosial resmi openSUSE Indonesia ditandai, atau dalam diskusi lain tentang openSUSE. openSUSE Indonesia berhak untuk mengambil tindakan terhadap perilaku yang terjadi dalam konteks apa pun, jika dianggap relevan dengan proyek openSUSE Indonesia dan para pesertanya.</p>
                </div>
                <div className="flex items-start">
                  <p>Semua peserta di ruang komunitas openSUSE Indonesia tunduk pada Kode Etik. Ini termasuk sukarelawan, pengelola, pemimpin, kontributor, peninjau kontribusi, pelapor isu, pengguna openSUSE, dan siapa pun yang berpartisipasi dalam diskusi di ruang komunitas openSUSE Indonesia. Untuk acara komunitas, ini juga mencakup semua peserta, peserta pameran, vendor, pembicara, panelis, penyelenggara, staf, dan sukarelawan.</p>
                </div>
              </div>
            </div>

            {/* Activities Section */}
            <div className="bg-gray-50 rounded-xl p-8 mb-5">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Siapa yang Harus Dihubungi</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <p>Setiap orang yang memiliki masalah atau pertanyaan tentang potensi pelanggaran Kode Etik dapat menyampaikannya secara langsung di grup telegram.</p>
                </div>
                <div className="flex items-start">
                  <p>Jika Anda tidak ingin menyampaikan secara langsung (misal karena melibatkan anggota dewan), hubungi salah satu satu atau beberapa anggota dewan lainnya, dengan memberikan informasi yang sama.</p>
                </div>
              </div>
            </div>

            {/* Activities Section */}
            <div className="bg-gray-50 rounded-xl p-8 mb-5">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Atribusi & Lisensi</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <p>Kode etik ini berasal dari dokumen Kode Etik Proyek Fedora dan Proyek GNOME.</p>
                </div>
                <div className="flex items-start">
                  <p>Kode Etik Proyek Fedora: https://docs.fedoraproject.org/en-US/project/code-of-conduct/</p>
                </div>
                <div className="flex items-start">
                  <p>Kode Etik Proyek GNOME: https://wiki.gnome.org/Foundation/CodeOfConduct</p>
                </div>
                <div className="flex items-start">
                  <p>Dokumen ini dilisensikan di bawah Lisensi Internasional Creative Commons Atribusi Berbagi Serupa 4.0 .</p>
                </div>
              </div>
            </div>

            {/* Activities Section */}
            <div className="bg-gray-50 rounded-xl p-8 mb-5">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Versi kanonik</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <p>Versi kanonik dokumen ini dipelihara dan diperbarui oleh Tim Moderasi.</p>
                </div>
                <div className="flex items-start">
                  <p>Dapat dilihat di sini: https://code.opensuse.org/project/coc/blob/main/f/Code-of-Conduct.md</p>
                </div>
              </div>
            </div>

            {/* Activities Section */}
            <div className="bg-gray-50 rounded-xl p-8 mb-5">
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <i>Halaman ini dibuat dan terakhir disunting pada 4 Desember 2025, pukul 16:23 waktu Jakarta</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KodeEtik;
