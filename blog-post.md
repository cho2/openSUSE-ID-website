# ✍️ Menulis Artikel Blog

Panduan ini menulis artikel lewat **IDE dan terminal (git)** — Anda bisa menguji
artikel di komputer sendiri sebelum mengirim Pull Request.

Setiap artikel = **satu file** `.md` di dalam folder [`src/content/blog/`](src/content/blog/).
Anda cukup membuat satu file baru, mengisinya, lalu mengirim Pull Request. Alamat
artikel, urutan, dan tampilannya diatur otomatis.

---

## ✅ Persyaratan Artikel

Blog ini adalah ruang komunitas openSUSE Indonesia. Ketentuan utama:

> **Isi artikel harus berkaitan dengan openSUSE dan/atau open source** — misalnya
> Linux, perangkat lunak bebas (FLOSS), dan kegiatan komunitas.

**Boleh ditulis:**

- Tutorial & panduan seputar openSUSE (Leap, Tumbleweed, YaST, zypper, dll.)
- Pengalaman, tips, atau ulasan memakai openSUSE dan perangkat lunak open source
- Kegiatan komunitas: meetup, konferensi, workshop, rilis
- Berita & perkembangan dunia open source / FLOSS dan Linux
- Profil dan cerita anggota komunitas (Wajah openSUSE.ID)

**Tidak diperbolehkan:**

- Topik yang tidak berkaitan dengan openSUSE maupun open source
- Iklan/promosi produk atau jasa komersial yang tidak relevan, dan spam
- Konten hasil menyalin (plagiat) tanpa izin atau tanpa mencantumkan sumber
- Ujaran kebencian, SARA, politik praktis, atau melanggar [Kode Etik](https://opensuse.id/kode-etik)

Tulisan sebaiknya orisinal. Jika mengutip sumber lain, cantumkan tautannya.

---

## 🚀 Langkah Menulis (IDE + Terminal)

**Yang perlu disiapkan:** Node.js 18+, Yarn, Git, dan sebuah editor/IDE (mis. VS Code).

```bash
# 1. Fork repo di GitHub, lalu clone hasil fork Anda
git clone https://github.com/USERNAME-ANDA/openSUSE-ID-website.git
cd openSUSE-ID-website

# 2. Pasang dependensi (cukup sekali di awal)
yarn install

# 3. Buat branch baru
git checkout -b artikel-cara-instal-leap

# 4. Buat file artikel baru di src/content/blog/
#    Nama file: huruf kecil, tanda minus, akhiri .md — ini jadi alamat artikel.
#    Cara cepat: salin dari _TEMPLATE.md sebagai kerangka.
cp src/content/blog/_TEMPLATE.md src/content/blog/cara-instal-opensuse-leap.md
```

5. **Buka file itu di IDE**, isi metadata (`title`, `date`, dst.) lalu tulis isi
   artikel dengan Markdown. Lihat [Bagian-Bagian Artikel](#-bagian-bagian-artikel) di bawah.

```bash
# 6. Lihat hasilnya di lokal (halaman auto-refresh setiap Anda menyimpan file)
yarn start
#    buka http://localhost:8080/blog
#    dan  http://localhost:8080/blog/cara-instal-opensuse-leap
#    tekan Ctrl + C untuk berhenti

# 7. Commit & push ke fork Anda
git add src/content/blog/cara-instal-opensuse-leap.md
git commit -m "blog: tambah artikel cara instal openSUSE Leap"
git push origin artikel-cara-instal-leap
```

8. Buka fork Anda di GitHub, klik **Compare & pull request**, arahkan ke `main`
   repositori utama, lalu **Create pull request**. Selesai! 🎉

Pengurus akan meninjau, dan setelah di-*merge* ke `main`, artikel otomatis tayang
di [opensuse.id/blog](https://opensuse.id/blog).

---

## 🧩 Bagian-Bagian Artikel

Setiap file `.md` punya dua bagian:

### 1. Metadata (di antara dua garis `---`)

```yaml
---
title: "Cara Instal openSUSE Leap"
date: "2026-07-01"
author: "Nama Anda"
category: panduan
excerpt: "Panduan langkah demi langkah memasang openSUSE Leap untuk pemula."
image: "https://opensuse.id/wp-content/uploads/2026/07/leap.png"
---
```

| Field | Wajib | Keterangan |
|---|---|---|
| `title` | ✅ | Judul artikel (pakai tanda kutip `"`) |
| `date` | ✅ | Tanggal terbit, format `TAHUN-BULAN-TANGGAL`, contoh `"2026-07-01"` |
| `author` | ✅ | Nama penulis |
| `category` | ✅ | Pilih **satu** (lihat tabel di bawah) |
| `excerpt` | ✅ | Ringkasan 1–2 kalimat, tampil di kartu daftar artikel |
| `image` | ➖ | Alamat gambar sampul. Boleh dikosongkan: `""` |

**Kategori yang tersedia:**

| Tulis di `category` | Tampil di situs |
|---|---|
| `panduan` | Panduan |
| `kegiatan` | Kegiatan |
| `komunitas` | Komunitas |
| `wajah-opensuse-id` | Wajah openSUSE.ID |
| `uncategorized` | Lainnya |

### 2. Isi Artikel (di bawah metadata, format Markdown)

Markdown itu teks biasa dengan sedikit tanda. Contoh lengkap:

```markdown
Paragraf biasa. Satu baris kosong memisahkan antar-paragraf.

## Sub-Judul

Teks **tebal**, teks *miring*, dan [tautan](https://opensuse.id).

- Poin satu
- Poin dua

1. Langkah satu
2. Langkah dua

​```
sudo zypper install nama-paket
​```

> Kutipan atau catatan penting.

![Keterangan gambar](https://opensuse.id/wp-content/uploads/2026/07/contoh.png)
```

---

## 🖼️ Menambahkan Gambar

Gambar tidak ditempel langsung ke file, melainkan dimasukkan lewat **alamat gambar (URL)**
— tautan yang biasanya diakhiri `.jpg` atau `.png`. Gambar bisa dipakai di dua tempat:

- **Gambar sampul** → tempel URL-nya di field `image` pada metadata.
- **Gambar di dalam tulisan** → tulis `![keterangan](URL)` di posisi yang diinginkan.

### Cara termudah mendapatkan URL gambar (lewat GitHub)

Cocok untuk yang tidak punya tempat mengunggah gambar:

1. Buka **Issues → New issue** di repositori (atau kotak komentar mana pun di GitHub) atau unggah [disini](https://github.com/opensuse-id/openSUSE-ID-website/issues/17).
2. **Seret & jatuhkan** file gambar Anda ke kotak teks, lalu tunggu unggahan selesai.
3. GitHub otomatis menyisipkan tautan seperti
   `https://github.com/user-attachments/assets/...` — **salin** URL tersebut.
4. Tempel URL itu ke `image` atau ke `![...](URL)`.
   **Tidak perlu benar-benar mengirim** Issue-nya, cukup ambil URL-nya.

### Alternatif

- Pakai gambar yang **sudah ada di internet**: klik kanan gambar → *Salin Alamat Gambar*,
  lalu tempel URL-nya (pastikan Anda berhak memakainya).
- Gunakan gambar dari media **opensuse.id** yang sudah tersedia.

> 💡 Selalu **uji tautan gambar** dengan membukanya di tab baru. Jika gambar muncul,
> berarti URL sudah benar. Hindari menautkan gambar dari situs yang bisa berubah/hilang.

Contoh:

```markdown
---
title: "Judul Artikel"
image: "https://github.com/user-attachments/assets/contoh-sampul.png"
---

Paragraf sebelum gambar.

![openSUSE Leap di layar laptop](https://github.com/user-attachments/assets/contoh-isi.png)

Paragraf sesudah gambar.
```

---

## ✅ Hal Penting

- **Satu artikel = satu file baru.** Tidak perlu mengedit file lain.
- **Nama file = alamat artikel.** Huruf kecil dan tanda minus, akhiri `.md`.
- **`date` harus `TAHUN-BULAN-TANGGAL`** (contoh `2026-07-01`) — ini yang menentukan
  urutan artikel (terbaru di atas).
- Artikel yang namanya diawali garis bawah (misalnya `_TEMPLATE.md`) **tidak** tampil
  di situs — aman dipakai sebagai contoh.
- Tidak yakin? Kirim saja Pull Request — pengurus akan bantu meninjau.

> 💡 Selama `yarn start` berjalan, setiap kali Anda menyimpan file artikel, halaman di
> browser **otomatis memperbarui** sehingga hasilnya langsung terlihat. Untuk berhenti,
> tekan `Ctrl + C` di terminal.

Sudah puas dengan hasilnya? *Commit* file baru Anda, *push* ke fork, lalu buka Pull
Request ke `main`.
