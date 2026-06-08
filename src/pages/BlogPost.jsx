import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, Share2, Check } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = window.location.href;
    
    if (navigator.share) {
      // Use native share if available (mobile devices)
      navigator.share({
        title: post.title,
        text: post.excerpt || post.title,
        url: url,
      }).catch((error) => {
        // If share cancelled, copy to clipboard instead
        copyToClipboard(url);
      });
    } else {
      // Fallback to copying link
      copyToClipboard(url);
    }
  };

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

  const blogPosts = {
    'kompetisi-logo-opensuse-asia-summit-2026-dibuka': {
      title: 'Kompetisi Logo openSUSE.Asia Summit 2026 Dibuka',
      content: `
      <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://raw.githubusercontent.com/opensuse-id/openSUSE-Asia-Summit-2026-artwork/refs/heads/master/poster/logo-contest/logo-contest-ID.png" alt="Poster Logo Competition openSUSE.Asia Summit 2026" style="max-width: 100%; height: auto;">
      </div>

      <section>
          <p>Kami dengan gembira mengumumkan peluncuran <a href="https://news.opensuse.org/2026/06/04/opensuse-asia-summit-2026-logo-competition/" target="_blank">Kompetisi Logo openSUSE.Asia Summit 2026!</a> Logo Summit lebih dari sekadar simbol—logo ini merepresentasikan energi, kreativitas, dan keberagaman komunitas openSUSE kami di seluruh Asia. Tahun ini, kami mengundang Anda untuk mengukir sejarah dengan merancang logo yang akan menjadi wajah utama dari openSUSE Asia Summit 2026.</p>
          <p>openSUSE Asia Summit tahun ini akan berlangsung di Teaching Industry Learning Center (TILC), Sekolah Vokasi, Universitas Gadjah Mada (UGM), Yogyakarta. Detail acara selengkapnya akan segera kami bagikan. Kompetisi logo resmi dibuka mulai sekarang dan akan ditutup pada 21 Juli 2026. Pemenang akan menerima hadiah spesial "Geeko Mystery Box" dari tim panitia!</p>
      </section>

      <hr>

      <section>
          <h3>📅 Lini Masa Penting</h3>
          <ul>
              <li><strong>Batas Akhir Pengiriman:</strong> 21 Juli 2026</li>
              <li><strong>Pengumuman Pemenang:</strong> 3 Agustus 2026</li>
          </ul>
      </section>

      <hr>

      <section>
          <h3 id="contest-guidelines">💡 Panduan Lomba</h3>
          <ul>
              <li><strong>Lisensi:</strong> Logo harus dilisensikan di bawah <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC-BY-SA 4.0</a> dan mengizinkan semua orang untuk menggunakannya tanpa atribusi jika terpilih. Atribusi pemenang akan ditampilkan di situs web resmi openSUSE Asia Summit.</li>
              <li><strong>Orisinalitas:</strong> Desain Anda harus asli dan bebas dari material pihak ketiga.</li>
              <li><strong>Kecerdasan Buatan (AI):</strong> Konten yang dibuat menggunakan AI sangat dilarang.</li>
              <li><strong>Format Warna:</strong> Kirimkan karya dalam versi monokrom (satu warna) dan versi berwarna.</li>
              <li><strong>Format File:</strong> Panitia hanya menerima file berformat SVG.</li>
              <li><strong>Semangat Komunitas:</strong> Logo harus mencerminkan identitas komunitas openSUSE di Asia.</li>
              <li><strong>Elemen yang Dilarang:</strong> Jangan memasukkan merek dagang lain, konten yang tidak pantas atau menyinggung, unsur kekerasan, diskriminasi, citra politik atau agama, maupun konten apa pun yang melanggar nilai-nilai openSUSE.</li>
              <li><strong>Merek Dagang:</strong> Patuhi <a href="https://en.opensuse.org/File:OpenSUSE_Trademark_Guidelines.pdf" target="_blank" rel="noopener">Panduan Merek Dagang Proyek openSUSE</a>.</li>
              <li><strong>Penjenamaan (<em>Branding</em>):</strong> Anda dapat merujuk pada <a href="https://opensuse.github.io/branding-guidelines/" target="_blank" rel="noopener">Panduan Branding openSUSE</a> sebagai inspirasi (opsional).</li>
          </ul>
      </section>

      <hr>

      <section>
          <h3 id="how-to-submit">📝 Cara Mengirimkan Karya</h3>
          <p>Kirimkan karya Anda melalui surel ke <a href="mailto:opensuseasia-summit@googlegroups.com">opensuseasia-summit@googlegroups.com</a> dengan melampirkan hal-hari berikut:</p>
          <ul>
              <li><strong>Subjek Surel:</strong> openSUSE.Asia Summit 2026 Logo Design - [Nama Anda]</li>
              <li><strong>Informasi Kontak:</strong> Nama lengkap dan alamat email Anda.</li>
              <li><strong>Filosofi Desain:</strong> Penjelasan singkat mengenai konsep desain Anda (format TXT atau PDF).</li>
              <li><strong>Berkas Vektor:</strong> Hanya dalam format SVG.</li>
              <li><strong>Berkas Bitmap:</strong> Gambar PNG, resolusi minimal 256x256 piksel, dengan ukuran file maksimal 512 KB.</li>
          </ul>
          <p>Semua karya yang masuk akan ditinjau oleh Komite openSUSE Asia Summit. Keputusan komite bersifat mutlak dan tidak dapat diganggu gugat. Kami sangat menyarankan Anda untuk menggunakan <a href="https://inkscape.org/" target="_blank" rel="noopener">Inkscape</a>, aplikasi editor grafis vektor gratis dan sumber terbuka, untuk merancang desain Anda.</p>
      </section>

      <hr>

      <section>
          <p>Kamu juga bisa mengunjungi <a href="https://opensuse.id/konferensi/opensuse-asia-summit-2026" target="_blank">halaman khusus openSUSE Asia Summit 2026</a>.</p>
          <p>Tunggu apalagi, kirimkan logo terbaikmu.</p>     
          <p>🦎</p>
      </section>            

      `,
      image: '',
      category: 'Kegiatan',
      date: '8 Juni 2026',
      author: 'Tim openSUSE Indonesia'
    },
    'cfp-opensuse-asia-summit-2026-dibuka': {
      title: 'CFP openSUSE.Asia Summit 2026 Dibuka',
      content: `
      <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://raw.githubusercontent.com/opensuse-id/openSUSE-Asia-Summit-2026-artwork/refs/heads/master/poster/CFP/cfp-ID.png" alt="Poster Call for Speakers openSUSE.Asia Summit 2026" style="max-width: 100%; height: auto;">
      </div>

      <section>
          <p>Kami dengan gembira mengumumkan bahwa <a href="https://news.opensuse.org/2026/04/29/opensuse-asia-summit-2026-call-for-speakers/" target="_blank">Pendaftaran Proposal (<em>Call for Proposal</em>)</a> untuk openSUSE.Asia Summit 2026 kini telah dibuka! Tahun ini, acara akan berlangsung pada 3–4 Oktober 2026 di Teaching Industry Learning Center (TILC), Sekolah Vokasi, Universitas Gadjah Mada (UGM), Yogyakarta, Indonesia. Untuk informasi lebih lanjut, pantau terus semua kanal openSUSE dan openSUSE-ID.</p>
          <p>openSUSE.Asia Summit 2026 mengundang para pembicara dari semua latar belakang untuk berbagi pengetahuan, pengalaman, dan semangat mereka terhadap openSUSE dan <em>open source</em>. Pembicara juga dapat mengajukan bantuan dana perjalanan melalui <em><a href="https://news.opensuse.org/2026/06/03/tsp-open-for-asia-summit/" target="_blank">openSUSE Travel Support Program</a></em> (TSP). Kami mengajak siapa saja, baik yang dekat maupun jauh, untuk mengirimkan proposal mereka dan bergabung bersama kami di Yogyakarta!</p>
      </section>

      <hr>

      <section>
          <h3>💡 Topik</h3>
          <p>Contoh topik yang dapat dibawakan (tetapi tidak terbatas pada hal-hal ini) adalah sebagai berikut:</p>
          <ul>
              <li>openSUSE (contoh: Leap, Tumbleweed, Micro OS, Open Build Services, openQA, YaST)</li>
              <li>Lingkungan destop dan aplikasinya (contoh: GNOME, KDE, XFCE)</li>
              <li>Paket aplikasi perkantoran, seni grafis, multimedia (contoh: LibreOffice, Calligra, GIMP, Inkscape)</li>
              <li>Dukungan multibahasa (contoh: metode input, penerjemahan)</li>
              <li>Cloud, virtualisasi, kontainer, dan orkestrasi kontainer (contoh: Kubernetes, Rancher)</li>
              <li>Keamanan rantai pasok paket (<em>package supply-chain security</em>), manajemen kerentanan (<em>vulnerability management</em>)</li>
              <li>Sistem tertanam (<em>embedded system</em>) dan IoT</li>
              <li>Aplikasi lain yang berjalan di openSUSE</li>
          </ul>

          <p>Topik yang tidak terkait dengan teknologi spesifik juga sangat dipersilakan. Sebagai contoh:</p>
          <ul>
              <li>Ringkasan tentang teknologi FLOSS</li>
              <li>Pengembangan, jaminan kualitas (<em>quality assurance</em>), penerjemahan</li>
              <li>Tips &amp; trik, cerita pengalaman (sukses atau gagal), praktik terbaik (<em>best practice</em>)</li>
              <li>Pemasaran dan manajemen komunitas</li>
              <li>Edukasi</li>
          </ul>
      </section>

      <hr>

      <section>
          <h3>⏱️ Jenis Sesi</h3>
          <p>Kami mengundang proposal untuk dua jenis sesi berikut:</p>
          <ul>
              <li><strong>Sesi panjang:</strong> (45 menit + Tanya Jawab)</li>
              <li><strong>Sesi singkat:</strong> (30 menit + Tanya Jawab)</li>
          </ul>
          <p><em>Sesi bicara singkat (<em>lightning talk</em>) (5 menit) akan diumumkan menyusul.</em></p>
      </section>

      <hr>

      <section>
          <h3>📅 Jadwal</h3>
          <ul>
              <li><strong>Batas akhir pengiriman proposal:</strong> 1 Juli 2026</li>
              <li><strong>Pengumuman untuk pembicara:</strong> 21 Juli 2026</li>
              <li><strong>Tenggat pengajuan TSP pemateri:</strong> 31 Juli 2026</li>
          </ul>
      </section>

      <hr>

      <section>
          <h3>📝 Cara Mengirimkan Dokumen Proposal Anda</h3>
          <p>Silakan kirimkan proposal Anda di <a href="https://events.opensuse.org/conferences/oSAS26" target="_blank">events.opensuse.org</a>. Jika Anda belum memiliki akun komunitas SUSE, silakan mendaftar terlebih dahulu sebelum mengirimkan proposal.</p>
          <ul>
              <li>Anda wajib mematuhi <a href="https://en.opensuse.org/openSUSE:Conference_code_of_conduct" target="_blank">Kode Etik Konferensi openSUSE (<em>openSUSE Conference Code of Conduct)</a></em>.</li>
              <li>Proposal harus ditulis dalam bahasa Inggris, berkisar antara 130 hingga 250 kata, dan memiliki judul yang jelas serta relevan.</li>
              <li>Harap periksa ejaan dan tata bahasa sebelum mengirim, menggunakan alat bantu seperti LibreOffice, Google Docs, atau Grammarly.</li>
              <li>Lihat <a href="https://en.opensuse.org/openSUSE:Asia_Summit_How_to_Write_a_Good_Proposal" target="_blank">panduan kami</a> untuk tips menulis proposal yang bagus.</li>
              <li>Jika Anda butuh bantuan, hubungi tim openSUSE-ID.</li>
          </ul>
      </section>

      <hr>

      <section>
          <h3>⚠️ Persyaratan Presentasi</h3>
          <ul>
              <li>Anda dapat melakukan presentasi dalam bahasa Inggris atau bahasa Indonesia, tetapi semua dokumen dan salindia (<em>slides</em>) wajib menggunakan bahasa Inggris.</li>
              <li>Pembicara harus hadir langsung di lokasi acara; rekaman video dan presentasi jarak jauh tidak diperbolehkan.</li>
          </ul>
      </section>

      <hr>

      <section>
          <p>Kamu juga bisa mengunjungi <a href="https://opensuse.id/konferensi/opensuse-asia-summit-2026" target="_blank">halaman khusus openSUSE Asia Summit 2026</a>.</p>
          <p>Tunggu apalagi, segera daftarkan proporsal terbaikmu.</p>
          <p>Sampai jumpa di Yogyakarta!</p>
          <p>🦎</p>
      </section>      
      `,
      image: 'https://raw.githubusercontent.com/opensuse-id/openSUSE-Asia-Summit-2026-artwork/refs/heads/master/poster/CFP/cfp-ID.png',
      category: 'Kegiatan',
      date: '4 Juni 2026',
      author: 'Tim openSUSE Indonesia'
    },
    'repositori-baru-download-opensuse-id': {
      title: 'Repositori Baru download.opensuse.id',
      content: `
        <p>Salam,</p>
        
        <p>Komunitas openSUSE Indonesia memiliki 2 repositori lokal yg dikelola mandiri. <strong>repo.opensuse.id</strong> dan <strong>twrepo.opensuse.id</strong>. VM repo oi merupakan donasi dari sebuah perusahaan IT di Jakarta telah beroperasi sejak 2018 melayani pengguna openSUSE di Indonesia dan Asia Tenggara. VM twrepo oi adalah donasi dari sebuah provider video-on-demand di Jakarta sejak 2019.</p>
        
        <p>Sayangnya sejak 2024 twrepo mengalami masalah dan berhenti beroperasi, sejak Q3 2024 tidak ada lagi repo lokal tumbleweed. Bandwidth yg melayani repo oi tidak cukup untuk melakukan sinkronisasi repo factory/tumbleweed.</p>
        
        <p>Alhamdulillah orang-orang baik di <strong>Cloudkilat</strong> berbaik hati mendonasikan vm dan bandwidth utk repositori openSUSE di Indonesia. Terima kasih Cloudkilat!</p>
        
        <p>Komunitas menyediakan ssd 5TB utk vm ini, semoga cukup utk melayani repo leap, update, slowroll, dan tumbleweed. <strong>download.opensuse.id</strong> telah kami test dan berfungsi dengan baik. Repo ini melakukan sinkronisasi ke stage dan stage main repo openSUSE.</p>
        
        <p>Setelah berdiskusi dengan pengurus Komunitas openSUSE Indonesia, kami sepakat untuk mempensiunkan <strong>repo.opensuse.id</strong> mulai <strong>1 Januari 2026</strong>. Selanjutnya repositori lokal komunitas openSUSE Indonesia akan dilayani melalui <a href="https://download.opensuse.id" target="_blank" rel="noopener noreferrer">https://download.opensuse.id</a></p>
        
        <p><strong>Have fun!</strong></p>
      `,
      image: 'https://opensuse.id/wp-content/uploads/2025/10/openSUSE-iDxCloudKilat-d.o.i-IG.png',
      category: 'Komunitas',
      date: '18 Oktober 2025',
      author: 'Tim openSUSE Indonesia'
    },
    'opensuse-id-meet-up-desember-2022': {
      title: 'openSUSE-ID Meet Up Desember 2022',
      content: `
        <p>Halo teman-teman!</p>
        <p>Untuk menutup tahun ini openSUSE Indonesia ingin mengadakan meetup terakhir tahun 2022. Skuy hadir dan mari kita berbincang tentang perkembangan openSUSE dan komunitas kita.</p>
        
        <h3>Detail Acara</h3>
        <ul>
          <li><strong>Tanggal:</strong> Desember 2022</li>
          <li><strong>Format:</strong> Hybrid (Online & Offline)</li>
          <li><strong>Topik:</strong> Review tahun 2022 dan rencana 2023</li>
        </ul>

        <h3>Agenda</h3>
        <p>Beberapa hal yang akan kita bahas:</p>
        <ul>
          <li>Pencapaian komunitas di tahun 2022</li>
          <li>Update terbaru openSUSE Leap dan Tumbleweed</li>
          <li>Sharing session dari anggota komunitas</li>
          <li>Rencana kegiatan tahun 2023</li>
          <li>Networking dan diskusi informal</li>
        </ul>

        <p>Acara ini terbuka untuk semua orang, baik yang sudah menggunakan openSUSE maupun yang tertarik untuk mencoba. Mari kita tutup tahun ini dengan penuh semangat!</p>
      `,
      image: 'https://opensuse.id/wp-content/uploads/2022/12/openSUSEDesember.png',
      category: 'Kegiatan',
      date: '12 Desember 2022',
      author: 'Tim openSUSE Indonesia'
    },
    'opensuse-id-di-indonesia-linux-conference-2022': {
      title: 'openSUSE-ID di Indonesia Linux Conference 2022',
      content: `
        <p>Apa itu ILC? Yang jelas bukan Indonesia Lawyers Club.</p>
        <p>ILC adalah Indonesia Linux Conference yang merupakan konferensi tahunan komunitas Linux Indonesia. Tahun ini, komunitas openSUSE Indonesia turut berpartisipasi dalam acara ini dengan berbagai aktivitas menarik.</p>
        
        <h3>Partisipasi openSUSE Indonesia</h3>
        <p>Komunitas kami hadir dengan:</p>
        <ul>
          <li>Booth openSUSE Indonesia</li>
          <li>Presentasi tentang fitur-fitur openSUSE</li>
          <li>Workshop instalasi dan konfigurasi</li>
          <li>Pembagian merchandise openSUSE</li>
          <li>Networking dengan komunitas Linux lainnya</li>
        </ul>

        <h3>Highlight Acara</h3>
        <p>Beberapa momen menarik dari ILC 2022:</p>
        <ul>
          <li>Antusiasme pengunjung yang tinggi terhadap openSUSE</li>
          <li>Banyak pertanyaan seputar migrasi ke openSUSE</li>
          <li>Kolaborasi dengan komunitas Linux lainnya</li>
          <li>Live demo YaST dan fitur openSUSE</li>
        </ul>

        <p>Terima kasih kepada semua yang telah hadir dan mendukung kegiatan kami di ILC 2022. Sampai jumpa di acara berikutnya!</p>
      `,
      image: 'https://opensuse.id/wp-content/uploads/2022/11/Group-1-1232x567.png',
      category: 'Kegiatan',
      date: '12 November 2022',
      author: 'Tim openSUSE Indonesia'
    },
    'opensuse-asia-summit-2019-bali': {
      title: 'openSUSE.Asia Summit 2019',
      content: `
        <p>Komunitas openSUSE Indonesia dengan bangga mengumumkan bahwa kami telah berhasil menyelenggarakan openSUSE.Asia Summit 2019 di Bali, Indonesia.</p>
        
        <h3>Tentang Acara</h3>
        <p>openSUSE.Asia Summit adalah konferensi tahunan komunitas openSUSE di kawasan Asia. Tahun 2019, Indonesia mendapat kehormatan untuk menjadi tuan rumah acara bergengsi ini.</p>
        
        <ul>
          <li><strong>Tanggal:</strong> 5-6 Oktober 2019</li>
          <li><strong>Lokasi:</strong> Bali, Indonesia</li>
          <li><strong>Peserta:</strong> 200+ dari berbagai negara</li>
          <li><strong>Pembicara:</strong> 30+ speaker internasional</li>
        </ul>

        <h3>Tema dan Topik</h3>
        <p>Konferensi ini mengangkat berbagai topik menarik:</p>
        <ul>
          <li>Cloud Computing dan Containerization</li>
          <li>DevOps dan Automation</li>
          <li>Desktop Linux dan User Experience</li>
          <li>Open Source Community Building</li>
          <li>Security dan Privacy</li>
        </ul>

        <h3>Pencapaian</h3>
        <p>Acara ini merupakan pencapaian besar bagi komunitas openSUSE Indonesia:</p>
        <ul>
          <li>Sukses mengorganisir konferensi internasional</li>
          <li>Meningkatkan visibilitas komunitas Indonesia</li>
          <li>Membangun networking dengan komunitas Asia</li>
          <li>Mendapatkan apresiasi dari openSUSE Board</li>
        </ul>

        <p>Terima kasih kepada semua sponsor, volunteer, dan peserta yang telah membuat acara ini sukses besar!</p>
      `,
      image: 'https://opensuse.id/wp-content/uploads/2018/12/cropped-oSAS2018-1.jpg',
      category: 'Kegiatan',
      date: '6 Oktober 2019',
      author: 'Tim openSUSE Indonesia'
    },
    'wajah-opensuse-id-mohammad-edwin-zakaria': {
      title: 'Wajah openSUSE-id: Mohammad Edwin Zakaria',
      content: `
        <p><strong>Nickname:</strong> Mohammad Edwin Zakaria<br/>
        <strong>Pekerjaan:</strong> Pekerja IT<br/>
        <strong>Tempat Tinggal:</strong> Jakarta<br/>
        <strong>Hobi:</strong> Jalan-jalan, baca buku, main gitar kalau ada waktu<br/>
        <strong>Motto:</strong> Gak ada yang spesifik. Hidup seperti air yang mengalir dan berusaha tidak punya banyak keinginan</p>

        <h3>Perkenalkan diri Anda</h3>
        <p>Saya Edwin, saat ini bekerja di salah satu perusahaan IT di Jakarta. Saya menggunakan openSUSE untuk pekerjaan sehari-hari dan sangat menikmati stabilitas serta kemudahan yang ditawarkan oleh distribusi ini.</p>

        <h3>Bagaimana Anda mengenal openSUSE?</h3>
        <p>Saya pertama kali mengenal openSUSE sekitar tahun 2010. Waktu itu saya sedang mencari distribusi Linux yang stabil dan mudah digunakan untuk kebutuhan development. Setelah mencoba beberapa distribusi, saya jatuh cinta pada openSUSE karena YaST-nya yang sangat membantu.</p>

        <h3>Apa yang membuat Anda tetap menggunakan openSUSE?</h3>
        <p>Stabilitasnya luar biasa, terutama untuk kebutuhan profesional. Tool-tool seperti YaST membuat konfigurasi sistem menjadi sangat mudah. Komunitas openSUSE juga sangat supportive dan helpful.</p>

        <h3>Kontribusi Anda di komunitas openSUSE Indonesia</h3>
        <p>Saya aktif di grup Facebook dan Telegram openSUSE Indonesia, sering membantu menjawab pertanyaan dari pengguna baru. Sesekali juga ikut dalam meetup komunitas.</p>
      `,
      image: 'https://opensuse.id/wp-content/uploads/2018/03/oS-AS2015-small-Edwin-Zakaria-250x250.jpg',
      category: 'Wajah openSUSE.ID',
      date: '13 Maret 2018',
      author: 'Tim openSUSE Indonesia'
    },
    'wajah-opensuse-id-adnan-adhy-kurniawan': {
      title: 'Wajah openSUSE-id: Adnan Adhy Kurniawan',
      content: `
        <p><strong>Nickname:</strong> adnan<br/>
        <strong>Pekerjaan:</strong> PNS di Kementerian Hukum dan HAM RI<br/>
        <strong>Tempat Tinggal:</strong> Cilacap<br/>
        <strong>Hobi:</strong> Apa saja yang penting aneh dan ndak umum<br/>
        <strong>Motto:</strong> Hidup sudah susah, jangan dibikin susah</p>

        <h3>Perkenalkan diri anda</h3>
        <p>Hi, nama saya Adnan, saya adalah seorang PNS di Kementerian Hukum dan HAM RI dan salah satu penggemar distro openSUSE.</p>

        <h3>Ceritakan latar belakang anda di openSUSE</h3>
        <p>Saya mulai menggunakan openSUSE sejak versi 11.3. Awalnya hanya iseng mencoba, tapi lama-lama jadi betah karena kemudahan dan kestabilannya.</p>

        <h3>Mengapa memilih openSUSE?</h3>
        <p>Karena mudah digunakan, stabil, dan memiliki komunitas yang solid. YaST sangat membantu untuk konfigurasi sistem tanpa harus menghafal banyak command line.</p>

        <h3>Apa yang menarik dari komunitas openSUSE Indonesia?</h3>
        <p>Komunitasnya ramah dan saling membantu. Tidak ada yang merasa paling pintar atau merendahkan pengguna baru. Semua orang diterima dengan baik.</p>

        <h3>Pesan untuk calon pengguna openSUSE</h3>
        <p>Jangan ragu untuk mencoba openSUSE. Ini adalah distribusi Linux yang sangat baik untuk pemula maupun advanced user. Dan jangan lupa bergabung dengan komunitas openSUSE Indonesia!</p>
      `,
      image: 'https://opensuse.id/wp-content/uploads/2016/03/Adnan-AK-250x250.jpg',
      category: 'Wajah openSUSE.ID',
      date: '22 Maret 2016',
      author: 'Tim openSUSE Indonesia'
    }
  };

  const post = blogPosts[slug] || blogPosts['repositori-baru-download-opensuse-id'];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
              {post.date}
            </span>
            <span className="flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

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
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
