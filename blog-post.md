# ✍️ Menambahkan Blog Post

Blog di situs web ini menggunakan data statis (tidak ada CMS). Untuk menambahkan artikel baru, Anda perlu menyunting **dua berkas** secara bersamaan.

## Berkas yang Perlu Diedit

| Berkas | Fungsi |
|---|---|
| `src/data/blogPosts.js` | Metadata artikel (judul, ringkasan, gambar, kategori, tanggal) |
| `src/pages/BlogPost.jsx` | Konten penuh artikel dalam format HTML |

---

## Langkah 1: Tambahkan Metadata di `src/data/blogPosts.js`

Tambahkan objek baru di **bagian paling atas** array `allBlogPosts` agar artikel terbaru tampil pertama:

```js
export const allBlogPosts = [
  // ✅ Tambahkan artikel baru di sini (paling atas)
  {
    id: 190,                               // ID unik, lanjutkan dari ID terakhir
    title: 'Judul Artikel Anda',          
    excerpt: 'Ringkasan singkat artikel, sekitar 1-2 kalimat yang menarik pembaca.',
    image: 'https://opensuse.id/wp-content/uploads/TAHUN/BULAN/nama-gambar.png',
    category: 'panduan',                   // lihat kategori yang tersedia di bawah
    date: '5 Juni 2025',
    slug: 'judul-artikel-anda'             // URL-friendly: huruf kecil, gunakan tanda -
  },

  // Artikel lama di bawah ini...
  {
    id: 188,
    title: 'Kompetisi Logo openSUSE.Asia Summit 2026 Dibuka',
    // ...
  },
```

**Kategori yang tersedia:**

| Nilai | Tampilan di UI | Keterangan |
|---|---|---|
| `panduan` | Panduan | Tutorial dan panduan teknis |
| `kegiatan` | Kegiatan | Event, meetup, konferensi |
| `komunitas` | Komunitas | Berita dan pengumuman komunitas |
| `wajah-opensuse-id` | Wajah openSUSE.ID | Profil anggota komunitas |
| `uncategorized` | Lainnya | Artikel umum |

> **Catatan:**
> - Field `image` boleh dikosongkan (`''`) jika tidak ada gambar.
> - Nilai `category` selalu ditulis **huruf kecil** di `blogPosts.js`. Konversi ke tampilan UI (huruf kapital) ditangani otomatis oleh `getCategoryLabel()` di `src/lib/categoryUtils.js`.

---

## Langkah 2: Tambahkan Konten di `src/pages/BlogPost.jsx`

Tambahkan entri baru ke dalam objek `blogContents` menggunakan **slug yang sama persis** dengan yang ada di `blogPosts.js`. Cukup isi field `author` dan `content` saja — `title`, `image`, `date`, dan `category` diambil otomatis dari `blogPosts.js`:

```js
const blogContents = {
  // ✅ Tambahkan konten artikel baru di sini
  'judul-artikel-anda': {                  // ← slug harus identik dengan blogPosts.js
    author: 'Nama Anda',
    content: `
      <p>Paragraf pembuka artikel Anda di sini...</p>

      <h3>Sub Judul Pertama</h3>
      <p>Isi konten sub bagian pertama.</p>

      <h3>Langkah-langkah</h3>
      <ul>
        <li>Langkah pertama</li>
        <li>Langkah kedua</li>
        <li>Langkah ketiga</li>
      </ul>

      <h3>Contoh Perintah</h3>
      <pre><code>sudo zypper install nama-paket</code></pre>

      <p>Penutup artikel. Have fun!</p>
    `,
  },

  // Artikel lama di bawah ini...
  'kompetisi-logo-opensuse-asia-summit-2026-dibuka': {
    // ...
  },
```

**Tag HTML yang didukung dalam `content`:**

| Tag | Kegunaan |
|---|---|
| `<p>` | Paragraf |
| `<h3>`, `<h4>` | Sub judul |
| `<ul>`, `<ol>`, `<li>` | Daftar |
| `<strong>`, `<em>` | Teks tebal / miring |
| `<pre><code>` | Blok kode/perintah terminal |
| `<a href="...">` | Tautan |
| `<img src="...">` | Gambar di dalam konten |

> **Catatan:** Jangan tambahkan field `title`, `image`, `date`, atau `category` di sini. Semua metadata tersebut sudah ada di `blogPosts.js` dan akan diambil otomatis.

---

## Langkah 3: Verifikasi dan Kirim Pull Request

```bash
# 1. Jalankan development server untuk memastikan artikel tampil dengan benar
yarn start

# 2. Buka browser dan cek artikel baru di:
#    http://localhost:8080/blog
#    http://localhost:8080/blog/judul-artikel-anda

# 3. Jika sudah benar, commit perubahan
git add src/data/blogPosts.js src/pages/BlogPost.jsx
git commit -m "blog: tambah artikel judul-artikel-anda"
git push origin nama-branch-anda
```

Kemudian buat **Pull Request** ke repository `opensuse-id/openSUSE-ID-website`.

---

## ⚠️ Hal Penting

- **Slug harus identik** di kedua berkas, termasuk huruf kecil dan tanda `-`
- **ID harus unik** — lihat ID terakhir di `blogPosts.js` dan tambahkan 1. ID terakhir saat ini adalah `189`
- **Jangan duplikasi metadata** — cukup tulis `author` dan `content` di `BlogPost.jsx`
- **Kategori selalu huruf kecil** di `blogPosts.js`. Tampilan UI ditangani otomatis oleh `src/lib/categoryUtils.js`
- Jika slug tidak ditemukan di `blogContents`, halaman akan menampilkan artikel pertama sebagai fallback — pastikan entri selalu ditambahkan di kedua berkas