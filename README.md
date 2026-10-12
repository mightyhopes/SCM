# PT. Sinlie Cahaya Matahari (SCM) — Company Profile Website

Website profil perusahaan resmi untuk **PT. Sinlie Cahaya Matahari (SCM)**, produsen manufaktur kaus kaki B2B di Indonesia. Dirancang dengan pendekatan *Modern Industrial Corporate* yang profesional, berfokus pada kapabilitas mesin rajut komputerisasi, kategori produk, alur produksi, dan kanal komunikasi penawaran bisnis (RFQ).

---

## 🛠️ Teknologi & Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/) (Strict typing, TSX)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) dengan centralized design tokens
- **Ikonografi:** [Lucide React](https://lucide.dev/)
- **Arsitektur:** React Server Components (RSC) secara default, Client Components untuk interaktivitas

---

## 📋 Prasyarat Sistem

Sebelum menjalankan proyek, pastikan lingkungan pengembangan Anda telah terpasang:

- **Node.js:** Versi `18.18.0` atau lebih baru (Disarankan Node.js `20.x` atau `24.x LTS`)
- **Package Manager:** `npm` (versi `10.x` / `11.x`)

Periksa versi di terminal Anda:
```bash
node -v
npm -v
```

---

## 🚀 Panduan Memulai Cepat (Setup & Instalasi)

### 1. Masuk ke Direktori Proyek
Jika Anda baru meng-clone repositori ini, buka terminal dan masuk ke folder proyek:
```bash
cd Web_SCM
```

### 2. Instalasi Dependensi
Jalankan perintah berikut untuk mengunduh seluruh dependensi paket yang dibutuhkan:
```bash
npm install
```

> **Catatan:** Dependensi utama mencakup `next`, `react`, `react-dom`, `tailwindcss`, `@tailwindcss/turbopack`, dan `lucide-react`.

### 3. Menjalankan Server Pengembangan (Dev Mode)
Jalankan aplikasi di lingkungan lokal:
```bash
npm run dev
```

Buka peramban (browser) dan akses alamat:
👉 **[http://localhost:3000](http://localhost:3000)**

Halaman akan otomatis diperbarui (*hot reload*) saat Anda melakukan perubahan pada kode.

---

## ⚙️ Perintah Skrip Tersedia

| Perintah | Fungsi |
| :--- | :--- |
| `npm run dev` | Menjalankan local development server dengan Turbopack di port 3000 |
| `npm run build` | Melakukan kompilasi produksi dan type-checking TypeScript |
| `npm run start` | Menjalankan server aplikasi dari hasil build produksi |
| `npm run lint` | Menjalankan pemeriksaan kualitas kode dengan ESLint |

---

## 📁 Struktur Direktori Proyek

```text
Web_SCM/
├── app/
│   ├── globals.css                       # Design tokens warna brand & styling dasar
│   ├── layout.tsx                        # Root layout, metadata SEO & favicon SCM
│   └── page.tsx                          # Halaman utama (Homepage 11 seksi)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                    # Header navigasi & mobile menu drawer
│   │   └── Footer.tsx                    # Footer Dark Teal & tautan informasi
│   ├── sections/
│   │   ├── HeroSection.tsx               # Seksi pengantar & visual industri
│   │   ├── CompanyStats.tsx              # Metrik statistik perusahaan
│   │   ├── AboutSection.tsx              # Profil, komitmen mutu, visi & misi
│   │   ├── ProductCategories.tsx         # Katalog kategori produk kaus kaki
│   │   ├── ManufacturingSection.tsx      # Kapabilitas mesin rajut & fasilitas
│   │   ├── ProductionProcess.tsx         # 5 tahap alur manufaktur
│   │   ├── QualitySection.tsx            # Standar QA & protokol inspeksi
│   │   ├── FactoryGallery.tsx            # Grid galeri fasilitas pabrik
│   │   └── ContactSection.tsx            # Informasi kontak & formulir RFQ
│   └── ui/
│       ├── Button.tsx                    # Komponen tombol aksesibel
│       ├── Container.tsx                 # Wrapper lebar kontainer responsif
│       ├── SectionHeading.tsx            # Tipografi judul seksi terstandarisasi
│       └── ImagePlaceholder.tsx          # Placeholder industrial berpetunjuk aset
├── data/
│   └── companyData.ts                    # Sumber data terpusat (kontak, produk, dll.)
├── public/
│   └── images/
│       ├── logo.png                      # Logo resmi SCM
│       ├── products/                     # Folder penyimpanan foto produk
│       └── gallery/                      # Folder penyimpanan foto pabrik
├── next.config.ts                        # Konfigurasi Next.js & Turbopack
├── tsconfig.json                         # Konfigurasi TypeScript compiler
└── package.json                          # Manifest dependensi & skrip proyek
```

---

## 🎨 Sistem Warna Brand (Design Tokens)

Sistem warna dikonfigurasi di `app/globals.css` untuk konsistensi seluruh komponen:

- **Primary (`#08615D`):** Deep Teal (Tombol utama, elemen brand, status aktif)
- **Primary Hover (`#064E4B`):** Status hover tombol utama
- **Primary Dark (`#073F3C`):** Latar footer dan section kontak
- **Secondary (`#4D9A99`):** Aksen sekunder dan ikon
- **Secondary Light (`#D6E8E5`):** Latar teal lembut
- **Accent (`#FFCC00`):** Kuning aksen visual
- **Background (`#F7F8F5`):** Latar belakang utama halaman (off-white)
- **Surface (`#FFFFFF`):** Latar kartu, formulir, dan navbar
- **Surface Muted (`#E8F1EF`):** Latar kontainer sekunder
- **Text Primary (`#202B29`):** Teks utama gelap kontras
- **Text Secondary (`#5B6965`):** Teks keterangan pendukung
- **Border (`#DCE4E0`):** Garis tepi dan pemisah

---

## 📝 Panduan Pengelolaan Konten & Aset

### 1. Mengubah Data Perusahaan & Kontak
Seluruh data perusahaan, nomor telepon/WhatsApp, alamat email, metrik statistik, dan kategori produk disimpan terpisah di berkas:
👉 **[`data/companyData.ts`](data/companyData.ts)**

Cukup ubah nilai objek pada berkas tersebut, dan tampilan website akan otomatis terbarukan.

### 2. Menempatkan Foto Resmi Pabrik & Produk
Komponen UI telah dilengkapi dengan slot foto yang jelas. Untuk mengganti placeholder dengan foto riil:
- **Foto Hero Pabrik:** simpan ke `/public/images/hero-factory.jpg` (Rekomendasi: `1000 x 850 px`)
- **Foto Kategori Produk:** simpan ke `/public/images/products/`
  - `baby-socks.jpg` (`800 x 600 px`)
  - `kids-socks.jpg` (`800 x 600 px`)
  - `ladies-socks.jpg` (`800 x 600 px`)
  - `mens-socks.jpg` (`800 x 600 px`)
- **Foto Galeri Fasilitas:** simpan ke `/public/images/gallery/`
  - `machines-line.jpg` (`1200 x 800 px`)
  - `yarn-detail.jpg` (`800 x 1000 px`)
  - `steam-boarding.jpg` (`800 x 600 px`)
  - `qc-inspection.jpg` (`800 x 1000 px`)
  - `packaging-warehouse.jpg` (`1200 x 800 px`)

---

## 📄 Hak Cipta & Lisensi

Hak Cipta © 2026 **PT. Sinlie Cahaya Matahari**. Seluruh hak cipta dilindungi.
Properti internal untuk profil perusahaan manufaktur kaus kaki SCM.
