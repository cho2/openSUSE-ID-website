import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, GitPullRequest, PenLine, ArrowRight, MessageCircle, ShieldCheck, Check, X, Image as ImageIcon } from 'lucide-react';

const REPO = 'https://github.com/opensuse-id/openSUSE-ID-website';
const TEMPLATE_URL = `${REPO}/blob/main/src/content/blog/_TEMPLATE.md`;

const steps = [
  {
    title: 'Fork lalu clone repositori',
    body: (
      <>
        Fork repositori ini di GitHub, lalu <em>clone</em> hasil fork Anda ke komputer
        dan masuk ke foldernya (ganti <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">USERNAME-ANDA</code>).
      </>
    ),
    code: `git clone https://github.com/USERNAME-ANDA/openSUSE-ID-website.git\ncd openSUSE-ID-website`,
  },
  {
    title: 'Pasang dependensi (sekali di awal)',
    body: <>Cukup dijalankan sekali saat pertama kali menyiapkan proyek.</>,
    code: `yarn install`,
  },
  {
    title: 'Buat branch baru',
    body: <>Beri nama branch sesuai artikel Anda supaya rapi.</>,
    code: `git checkout -b artikel-cara-instal-leap`,
  },
  {
    title: 'Buat file artikel di IDE',
    body: (
      <>
        Di editor Anda (misalnya VS Code), buat file baru di dalam folder{' '}
        <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">src/content/blog/</code>.
        Beri nama <strong>huruf kecil</strong> dengan <strong>tanda minus</strong>, akhiri{' '}
        <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">.md</code> — nama file
        ini otomatis menjadi alamat artikel. Cara cepat: salin dari{' '}
        <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">_TEMPLATE.md</code> sebagai kerangka.
      </>
    ),
    code: `# contoh via terminal (atau buat lewat menu IDE):\ncp src/content/blog/_TEMPLATE.md src/content/blog/cara-instal-opensuse-leap.md`,
  },
  {
    title: 'Isi metadata & tulis artikel',
    body: (
      <>
        Buka file tadi di IDE. Isi bagian metadata (<code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">title</code>,{' '}
        <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">date</code>, dst.) lalu tulis isi
        artikel dengan format Markdown. Lihat panduan <strong>Isi File Artikel</strong> dan{' '}
        <strong>Menambahkan Gambar</strong> di bawah.
      </>
    ),
  },
  {
    title: 'Lihat hasilnya di lokal',
    body: (
      <>
        Jalankan situs di komputer Anda, lalu buka di browser. Selama server berjalan,
        setiap kali Anda menyimpan file, halaman <strong>otomatis memperbarui</strong>.
        Untuk berhenti, tekan <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">Ctrl + C</code>.
      </>
    ),
    code: `yarn start\n# lalu buka di browser:\n#   http://localhost:8080/blog\n#   http://localhost:8080/blog/cara-instal-opensuse-leap`,
  },
  {
    title: 'Commit & push',
    body: <>Simpan perubahan Anda dan kirim ke fork di GitHub.</>,
    code: `git add src/content/blog/cara-instal-opensuse-leap.md\ngit commit -m "blog: tambah artikel cara instal openSUSE Leap"\ngit push origin artikel-cara-instal-leap`,
  },
  {
    title: 'Buka Pull Request ke main',
    body: (
      <>
        Buka halaman fork Anda di GitHub — akan muncul tombol{' '}
        <strong>Compare &amp; pull request</strong>. Arahkan ke branch{' '}
        <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">main</code> repositori utama,
        lalu <strong>Create pull request</strong>. Setelah ditinjau &amp; digabung, artikel
        otomatis tayang di halaman <Link to="/blog" className="text-[#5ea01d] font-medium hover:underline">Blog</Link>. 🎉
      </>
    ),
  },
];

const metaFields = [
  ['title', 'Wajib', 'Judul artikel (pakai tanda kutip ")'],
  ['date', 'Wajib', 'Tanggal terbit, format TAHUN-BULAN-TANGGAL — contoh "2026-07-01"'],
  ['author', 'Wajib', 'Nama penulis'],
  ['category', 'Wajib', 'Pilih satu kategori (lihat tabel di bawah)'],
  ['excerpt', 'Wajib', 'Ringkasan 1–2 kalimat untuk kartu di daftar artikel'],
  ['image', 'Opsional', 'Alamat gambar sampul. Boleh dikosongkan: ""'],
];

const categories = [
  ['panduan', 'Panduan', 'Tutorial & panduan teknis'],
  ['kegiatan', 'Kegiatan', 'Event, meetup, konferensi'],
  ['komunitas', 'Komunitas', 'Berita & pengumuman komunitas'],
  ['wajah-opensuse-id', 'Wajah openSUSE.ID', 'Profil anggota komunitas'],
  ['uncategorized', 'Lainnya', 'Artikel umum'],
];

const allowed = [
  'Tutorial & panduan seputar openSUSE (Leap, Tumbleweed, YaST, zypper, dll.)',
  'Pengalaman, tips, atau ulasan memakai openSUSE dan perangkat lunak open source',
  'Kegiatan komunitas: meetup, konferensi, workshop, rilis',
  'Berita & perkembangan dunia open source / FLOSS dan Linux',
  'Profil dan cerita anggota komunitas (Wajah openSUSE.ID)',
];

const notAllowed = [
  'Topik yang tidak berkaitan dengan openSUSE maupun open source',
  'Iklan/promosi produk atau jasa komersial yang tidak relevan, dan spam',
  'Konten hasil menyalin (plagiat) tanpa izin atau tanpa mencantumkan sumber',
  'Ujaran kebencian, SARA, politik praktis, atau melanggar Kode Etik',
];

const CodeBlock = ({ children }) => (
  <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto text-sm leading-relaxed">
    <code>{children}</code>
  </pre>
);

const TulisArtikel = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#73ba25] via-[#5ea01d] to-[#4a8b16] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-medium mb-5">
              <PenLine className="h-4 w-4" /> Kontribusi Terbuka
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cara Menulis Artikel</h1>
            <p className="text-lg md:text-xl opacity-95">
              Tulis artikel untuk blog openSUSE Indonesia lewat IDE dan terminal — buat satu
              file Markdown, uji di komputer sendiri, lalu kirim Pull Request ke <code>main</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Intro cards */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-5">
            {[
              { icon: FileText, title: '1 file Markdown', desc: 'Satu artikel = satu file. Tidak perlu mengedit file lain.' },
              { icon: PenLine, title: 'Teks biasa', desc: 'Menulis pakai Markdown — sesederhana mengetik teks biasa.' },
              { icon: GitPullRequest, title: 'Lewat Pull Request', desc: 'Kirim lewat git, pengurus meninjau, lalu tayang otomatis.' },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#73ba25]/10 flex items-center justify-center mb-4">
                  <c.icon className="h-6 w-6 text-[#73ba25]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Persyaratan Artikel</h2>
            <p className="text-gray-600 mb-8">
              Blog ini adalah ruang komunitas openSUSE Indonesia. Agar bermanfaat bagi
              pembaca, ada beberapa ketentuan sederhana.
            </p>

            {/* Core rule */}
            <div className="flex items-start gap-4 rounded-2xl border-2 border-[#73ba25]/30 bg-[#f4f9ed] px-6 py-5 mb-8">
              <ShieldCheck className="h-8 w-8 text-[#73ba25] flex-shrink-0" />
              <p className="text-gray-800 leading-relaxed">
                <strong>Ketentuan utama:</strong> isi artikel harus berkaitan dengan{' '}
                <strong>openSUSE</strong> dan/atau <strong>open source</strong> — misalnya
                Linux, perangkat lunak bebas (FLOSS), dan kegiatan komunitas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
                  <Check className="h-5 w-5 text-[#73ba25]" /> Boleh ditulis
                </h3>
                <ul className="space-y-3">
                  {allowed.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-[#73ba25] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
                  <X className="h-5 w-5 text-red-500" /> Tidak diperbolehkan
                </h3>
                <ul className="space-y-3">
                  {notAllowed.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Tulisan sebaiknya orisinal. Jika mengutip sumber lain, cantumkan tautannya.
              Semua tulisan tunduk pada{' '}
              <Link to="/kode-etik" className="text-[#5ea01d] font-medium hover:underline">Kode Etik</Link>{' '}
              komunitas.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Langkah demi Langkah</h2>
            <p className="text-gray-600 mb-6">
              Alur menulis lewat IDE dan terminal (git). Anda bisa langsung menguji artikel
              di komputer sendiri sebelum mengirim Pull Request.
            </p>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-2">Yang perlu disiapkan</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-[#73ba25] mt-0.5 flex-shrink-0" /><span><strong>Node.js</strong> versi 18 atau lebih baru</span></li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-[#73ba25] mt-0.5 flex-shrink-0" /><span><strong>Yarn</strong> (pengelola paket)</span></li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-[#73ba25] mt-0.5 flex-shrink-0" /><span><strong>Git</strong> dan sebuah editor/IDE (mis. VS Code)</span></li>
              </ul>
            </div>

            <ol className="space-y-6">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#73ba25] text-white font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="pt-1 w-full min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.body}</p>
                    {step.code && <div className="mt-3"><CodeBlock>{step.code}</CodeBlock></div>}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <a
                href={TEMPLATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                <FileText className="h-5 w-5" /> Lihat File Template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* File anatomy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Isi File Artikel</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Metadata</h3>
            <p className="text-gray-700 mb-4">
              Bagian paling atas file, di antara dua garis <code className="px-1 py-0.5 bg-gray-200 rounded">---</code>:
            </p>
            <CodeBlock>{`---
title: "Cara Instal openSUSE Leap"
date: "2026-07-01"
author: "Nama Anda"
category: panduan
excerpt: "Panduan langkah demi langkah memasang openSUSE Leap untuk pemula."
image: "https://opensuse.id/wp-content/uploads/2026/07/leap.png"
---`}</CodeBlock>

            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden bg-white">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold">Field</th>
                    <th className="text-left px-4 py-2 font-semibold">Status</th>
                    <th className="text-left px-4 py-2 font-semibold">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {metaFields.map(([f, req, desc]) => (
                    <tr key={f} className="border-t border-gray-100">
                      <td className="px-4 py-2 font-mono text-[#5ea01d]">{f}</td>
                      <td className="px-4 py-2 text-gray-600">{req}</td>
                      <td className="px-4 py-2 text-gray-700">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-gray-900 mt-8 mb-3">Kategori yang tersedia</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden bg-white">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold">Tulis di <code>category</code></th>
                    <th className="text-left px-4 py-2 font-semibold">Tampil di situs</th>
                    <th className="text-left px-4 py-2 font-semibold">Untuk</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map(([val, label, desc]) => (
                    <tr key={val} className="border-t border-gray-100">
                      <td className="px-4 py-2 font-mono text-[#5ea01d]">{val}</td>
                      <td className="px-4 py-2 text-gray-700">{label}</td>
                      <td className="px-4 py-2 text-gray-600">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-3">2. Isi Artikel (Markdown)</h3>
            <p className="text-gray-700 mb-4">
              Markdown adalah teks biasa dengan sedikit tanda. Berikut contoh yang paling sering dipakai:
            </p>
            <CodeBlock>{`Paragraf biasa. Satu baris kosong memisahkan antar-paragraf.

## Sub-Judul

Teks **tebal**, teks *miring*, dan [tautan](https://opensuse.id).

- Poin satu
- Poin dua

1. Langkah pertama
2. Langkah kedua

\`\`\`
sudo zypper install nama-paket
\`\`\`

> Kutipan atau catatan penting.

![Keterangan gambar](https://opensuse.id/gambar.png)`}</CodeBlock>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-3">
              <ImageIcon className="h-8 w-8 text-[#73ba25]" /> Menambahkan Gambar
            </h2>
            <p className="text-gray-700 mb-6">
              Gambar tidak ditempel langsung ke dalam file, melainkan dimasukkan lewat
              <strong> alamat gambar (URL)</strong> — yaitu tautan yang biasanya diakhiri
              <code className="px-1 py-0.5 bg-gray-200 rounded">.jpg</code> atau{' '}
              <code className="px-1 py-0.5 bg-gray-200 rounded">.png</code>. Ada dua tempat
              gambar bisa dipakai:
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-[#73ba25] mt-1 flex-shrink-0" />
                <span><strong>Gambar sampul</strong> — tempel URL-nya di field <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">image</code> pada metadata.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-[#73ba25] mt-1 flex-shrink-0" />
                <span><strong>Gambar di dalam tulisan</strong> — tulis <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">![keterangan](URL)</code> di posisi yang diinginkan.</span>
              </li>
            </ul>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-1">Cara termudah mendapatkan URL gambar</h3>
              <p className="text-sm text-gray-500 mb-4">
                Lewat GitHub, tanpa aplikasi tambahan — cocok untuk yang tidak punya tempat unggah gambar.
              </p>
              <ol className="space-y-3">
                {[
                  <>Buka halaman <strong>Issue baru</strong> di repositori (menu <strong>Issues → New issue</strong>), atau kotak komentar mana pun di GitHub, atau unggah <a href="https://github.com/opensuse-id/openSUSE-ID-website/issues/17">disini</a>.</>,
                  <><strong>Seret &amp; jatuhkan</strong> file gambar Anda ke dalam kotak teks (atau klik untuk memilih file). Tunggu proses unggah selesai.</>,
                  <>GitHub otomatis menyisipkan tautan seperti <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">https://github.com/user-attachments/assets/...</code>. <strong>Salin URL</strong> tersebut.</>,
                  <>Tempel URL itu ke <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">image</code> atau ke <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">![...](URL)</code>. <strong>Tidak perlu benar-benar mengirim</strong> Issue-nya — cukup ambil URL-nya.</>,
                ].map((body, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#73ba25] text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                    <span className="text-gray-700 text-sm leading-relaxed pt-0.5">{body}</span>
                  </li>
                ))}
              </ol>
            </div>

            <p className="text-gray-700 mb-3"><strong>Alternatif lain:</strong></p>
            <ul className="space-y-2 text-gray-700 text-sm mb-6">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-[#73ba25] mt-0.5 flex-shrink-0" />
                <span>Pakai gambar yang <strong>sudah ada di internet</strong>: klik kanan gambar → <em>Salin Alamat Gambar</em>, lalu tempel URL-nya. Pastikan Anda berhak memakainya.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-[#73ba25] mt-0.5 flex-shrink-0" />
                <span>Gunakan gambar dari media <strong>opensuse.id</strong> yang sudah tersedia.</span>
              </li>
            </ul>

            <p className="text-sm text-gray-700 mb-2">Contoh penggunaannya:</p>
            <CodeBlock>{`---
title: "Judul Artikel"
image: "https://github.com/user-attachments/assets/contoh-sampul.png"
...
---

Paragraf sebelum gambar.

![openSUSE Leap di layar laptop](https://github.com/user-attachments/assets/contoh-isi.png)

Paragraf sesudah gambar.`}</CodeBlock>

            <div className="flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 mt-6 text-sm text-amber-900">
              <span className="text-lg leading-none">💡</span>
              <span>Selalu <strong>uji tautan gambar</strong> dengan membukanya di tab baru — jika gambar muncul, URL sudah benar. Hindari menautkan gambar dari situs yang bisa berubah/hilang.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto rounded-3xl border border-gray-100 bg-gradient-to-r from-white to-[#f4f9ed] px-8 py-10 shadow-sm text-center">
            <MessageCircle className="h-10 w-10 text-[#73ba25] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Butuh bantuan?</h2>
            <p className="text-gray-700 mb-6">
              Tidak yakin dengan langkahnya? Kirim saja Pull Request — pengurus dengan senang
              hati membantu meninjau. Atau tanyakan langsung ke komunitas.
            </p>
            <Link
              to="/hubungi"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#73ba25] text-white font-semibold hover:bg-[#5ea01d] transition-colors"
            >
              Hubungi Komunitas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TulisArtikel;
