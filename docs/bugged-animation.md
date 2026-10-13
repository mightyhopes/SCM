# Laporan Analisis & Dokumentasi: Animasi Antar Section & Smooth Scrolling

Dokumen ini merangkum tujuan yang ingin dicapai, analisis kendala teknis yang dihadapi, serta seluruh perbaikan yang telah diimplementasikan pada proyek profil perusahaan PT Sinlie Cahaya Matahari.

---

## 1. Apa yang Ingin Dicapai (Goals & Objectives)

1. **Animasi Masuk yang Berbeda untuk Setiap Section**:
   - Setiap section utama memiliki identitas visual dan gaya transisi yang unik saat masuk ke layar (tidak menggunakan efek generic yang seragam):
     - **Hero Section**: *Cinematic Fade-Up* (meluncur halus dari bawah).
     - **Company Stats**: *Pop-In Scale Burst* (efek lonjakan metrik data `0.84 -> 1.0`).
     - **About Us**: *Slide-Right Convergence* (meluncur dari arah kiri).
     - **Markets**: *3D Perspective Depth Tilt* (rotasi sumbu 3D `rotateX 12°`).
     - **Product Categories**: *Cascade Waterfall Cards* (kartu produk terangkat bertingkat).
     - **Manufacturing**: *Mechanical Slide-Left* (gerakan mekanis dari arah kanan).
     - **Production Process**: *Assembly Line Timeline Step* (langkah alur ban berjalan).
     - **Quality Assurance**: *Precision Badge Stamp* (efek stempel inspeksi mutu `1.14 -> 1.0`).
     - **Factory Gallery**: *Optical Lens Blur-In* (fokus optik kamera `blur 14px -> 0px`).
     - **FAQ**: *Vertical Unfold-Up* (terbuka vertikal ke atas).
     - **Contact / RFQ**: *High-Contrast Elevate-Glow* (elevasi kartu kontak).
2. **Animasi Terpicu Dinamis Saat Berpindah Section**:
   - Efek transisi bekerja saat pengguna menggulir layar (*scroll-triggered*) maupun saat berpindah section melalui klik menu navigasi di header.
   - Animasi dapat terputar kembali secara dinamis saat pengguna berpindah dan kembali ke section tersebut.
3. **Smooth Scrolling Menyeluruh (Luxury Inertia Scroll)**:
   - Pengalaman menggulir halaman terasa sangat halus dan responsif (*momentum scrolling* berstandar web modern ala Apple/Stripe).
   - Saat link menu navigasi diklik (`#about`, `#products`, dll.), halaman meluncur mulus (*smooth glide*) dan berhenti tepat di bawah sticky header dengan offset kompensasi 80px tanpa loncatan kasar.
4. **Stabilitas Teknis & Performa Tinggi**:
   - Bebas dari kedipan (*flash of unstyled content*), bebas dari hydration mismatch Next.js, dan berjalan lancar pada 60fps dengan akselerasi GPU.

---

## 2. Analisis Akar Masalah (Mengapa Animasi Sempat Tidak Muncul)

Berdasarkan investigasi mendalam terhadap kode dan perilaku browser, ditemukan 4 faktor penyebab animasi tidak terlihat:

| Faktor | Masalah Teknis | Dampak pada Tampilan |
|:---|:---|:---|
| **Level Animasi Terlalu Mikro** | Awalnya `ScrollReveal` hanya diletakkan di kartu-kartu kecil dalam grid, bukan di kontainer `<section>` utama di `app/page.tsx`. | Kontainer section tetap berpindah secara statis; pengguna merasa tidak ada transisi antar-section. |
| **Amplitudo Visual Terlalu Kecil** | Jarak transform awal hanya `28px` dengan durasi 500ms. | Pada layar 1080p+, pergeseran 28px terlalu cepat dan tersamarkan oleh hentakan scroll mouse wheel biasa. |
| **Konflik CSS `overflow-x: hidden`** | Pada `app/globals.css`, elemen `body` memiliki aturan `overflow-x: hidden`. | Di browser Chromium, `overflow-x: hidden` pada `body` sering menonaktifkan compositing scroll halus dan mengacaukan kalkulasi viewport `IntersectionObserver`. |
| **Bypass Logika Bounding Box** | Script observer awal memiliki pengecekan `if (rect.top < viewportHeight * 0.8) return;`. | Elemen di area tengah atau mendekati layar langsung dibatalkan (*bypassed*) dari observer saat inisialisasi awal. |
| **Hydration & Layout Collapse** | Penggunaan inline style reaktif dengan `once: false` mengatur `opacity: 0` saat elemen keluar layar. | Menyebabkan layout tinggi section runtuh (*collapse*) dan memicu pergeseran layout yang membingungkan observer. |

---

## 3. Apa Saja yang Sudah Dilakukan (Actions Taken & Solutions)

### A. Pemasangan Pustaka & Komponen Smooth Scrolling
1. **Instalasi `lenis`** (`^1.3.26`):
   - Dipasang ke dalam dependensi proyek (`package.json`).
2. **Pembuatan Komponen [`components/ui/SmoothScroll.tsx`](file:///D:/PROJECT/PT%20SINLIE%20CAHAYA%20MATAHARI/Web_SCM/components/ui/SmoothScroll.tsx)**:
   - Menginisialisasi Lenis dengan kurva eksponensial `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))` dan durasi 1.2s.
   - Mencegat semua klik anchor (`a[href^="#"]`) agar meluncur dengan kompensasi offset `-80px` (pas di bawah sticky navbar).
3. **Mounting di [`app/layout.tsx`](file:///D:/PROJECT/PT%20SINLIE%20CAHAYA%20MATAHARI/Web_SCM/app/layout.tsx)**:
   - Ditempatkan di dalam body aplikasi agar aktif secara global.

### B. Perbaikan Konfigurasi CSS di [`app/globals.css`](file:///D:/PROJECT/PT%20SINLIE%20CAHAYA%20MATAHARI/Web_SCM/app/globals.css)
1. **Mengganti `overflow-x: hidden` Menjadi `overflow-x: clip`**:
   - `overflow-x: clip` mencegah horizontal scrollbar tanpa memutus compositing scroll container atau mengunci smooth scroll.
2. **Menambahkan Sticky Offset**:
   - Menambahkan `html { scroll-padding-top: 5rem; }` untuk mendukung native browser anchor targeting.
3. **Menambahkan Kelas CSS Transisi GPU-Accelerated Murni**:
   - Membuat pasangan kelas `.reveal-init[data-variant="..."]` dan `.reveal-revealed` dengan timing curves presisi (`cubic-bezier`).
   - Amplitudo pergeseran dinaikkan menjadi **45px–65px** dan skala **0.84–0.93** sehingga pergerakannya sangat jelas terlihat mata.

### C. Refaktor Engine [`components/ui/ScrollReveal.tsx`](file:///D:/PROJECT/PT%20SINLIE%20CAHAYA%20MATAHARI/Web_SCM/components/ui/ScrollReveal.tsx)
1. Beralih dari manipulasi React state ke manipulasi class DOM ringan:
   - Konten awal di-render murni oleh SSR tanpa inline style sembunyi (mencegah blank screen saat initial paint).
   - Elemen di bawah fold diberikan kelas `.reveal-init`.
   - Begitu masuk ke area pandang (threshold 0.05), observer langsung menyematkan kelas `.reveal-revealed`.
2. Pengaturan `once: false` memastikan transisi terputar ulang secara dinamis saat pengguna scroll bolak-balik antar section.
3. Tetap mendukung penuh aksesibilitas `prefers-reduced-motion`.

### D. Pembungkusan Level Section di [`app/page.tsx`](file:///D:/PROJECT/PT%20SINLIE%20CAHAYA%20MATAHARI/Web_SCM/app/page.tsx)
Setiap section utama dibungkus langsung dengan varian animasinya masing-masing:
```tsx
<main className="flex-1 overflow-x-clip">
  <ScrollReveal variant="fade-up" duration={750}><HeroSection /></ScrollReveal>
  <ScrollReveal variant="pop-in" duration={650}><CompanyStats /></ScrollReveal>
  <ScrollReveal variant="slide-right" duration={700}><AboutSection /></ScrollReveal>
  <ScrollReveal variant="perspective-tilt" duration={700}><MarketsSection /></ScrollReveal>
  <ScrollReveal variant="cascade-card" duration={700}><ProductCategories /></ScrollReveal>
  <ScrollReveal variant="slide-left" duration={700}><ManufacturingSection /></ScrollReveal>
  <ScrollReveal variant="timeline-step" duration={700}><ProductionProcess /></ScrollReveal>
  <ScrollReveal variant="badge-stamp" duration={700}><QualitySection /></ScrollReveal>
  <ScrollReveal variant="blur-in" duration={750}><FactoryGallery /></ScrollReveal>
  <ScrollReveal variant="unfold-up" duration={700}><FaqSection /></ScrollReveal>
  <ScrollReveal variant="elevate-glow" duration={700}><ContactSection /></ScrollReveal>
</main>
```

### E. Integrasi Penggantian Logo WebP
- Mengganti referensi logo dari `/images/logo.png` ke `/images/logo.webp` di `Navbar.tsx`, `Footer.tsx`, dan `layout.tsx`.
- Menghemat ukuran payload sebesar **72% (dari 943 KB menjadi 264 KB)** dengan transparansi alfa dan ketajaman tinggi yang tetap terjaga.

---

## 4. Analisis Mendalam: Mengapa Implementasi Awal Masih Bugged

Meskipun fondasi transisi CSS dan Lenis sempat dipasang pada revisi awal, sistem animasi dan scroll masih terasa "bugged" karena terdapat **5 kelemahan arsitektural tersembunyi**:

1. **Bug Blank Void / Hilang Mendadak Saat Scroll ke Atas (`once: false` Tanpa Arah)**:
   - Kode awal mereset `el.classList.remove("reveal-revealed")` setiap kali `entry.isIntersecting` bernilai `false`, baik saat elemen keluar lewat bawah MAUPUN lewat atas layar.
   - Akibatnya, semua section yang telah dilewati di atas layar otomatis disetel kembali ke `opacity: 0`. Saat pengguna menggulir ke atas (*scroll up*), layar menampilkan bidang kosong (*blank void*), lalu section tiba-tiba berkedip dan meloncat turun.
2. **Bug Mencegat Anchor Link Navigasi (Next.js Link Interception)**:
   - `SmoothScroll.tsx` awalnya mendaftarkan `addEventListener("click", handleAnchorClick)` pada bubbling phase biasa tanpa `{ capture: true }`.
   - Komponen Next.js `<Link>` memotong klik terlebih dahulu untuk client-side routing, sehingga `lenis.scrollTo` tidak pernah dieksekusi saat menu header diklik.
3. **Konflik Dual Easing (`html { scroll-behavior: smooth }` vs Lenis rAF)**:
   - Aturan bawaan CSS `scroll-smooth` pada `html` bertarung dengan perhitungan pergerakan per-frame Lenis pada 60fps, menyebabkan scroll tersendat (*jitter/stuttering*).
4. **Duplikasi / Konflik ID & Transform Offset Bounding Box**:
   - Atribut `id="..."` berada di dalam `<section>` anak yang dibungkus oleh elemen induk dengan `transform` (misal `rotateX`, `translateY`).
   - Hal ini membuat kalkulasi `offsetTop` dan target scroll menyimpang hingga puluhan piksel, serta memicu loop pada `IntersectionObserver` threshold.
5. **Amplitudo Transform Terlalu Ekstrem**:
   - `scale(0.84)` dan `scale(1.14)` pada kontainer selebar 1440px mengubah ukuran layout fisik hingga ratusan piksel, memicu *Cumulative Layout Shift* (CLS) dan teks kabur akibat *subpixel anti-aliasing*.

---

## 5. Perbaikan Definitif & Solusi Final

### A. Engine [`components/ui/ScrollReveal.tsx`](file:///D:/PROJECT/PT%20SINLIE%20CAHAYA%20MATAHARI/Web_SCM/components/ui/ScrollReveal.tsx) (Direction-Aware Re-arming)
- **Hanya Re-arm di Bawah Layar**: Reset class `.reveal-revealed` hanya dilakukan jika `entry.boundingClientRect.top > 0` (elemen keluar ke bawah layar). Elemen yang sudah dilewati di atas layar **tetap tampil penuh (`opacity: 1`)**.
- **Hasil**: Scroll ke atas 100% mulus tanpa blank void dan tanpa pergeseran layout.
- **Dukungan Custom Event Dispatch (`scm-reveal`)**: Memastikan section target langsung terungkap saat dipicu oleh klik menu navigasi.
- **Prop `id` di Level Root**: Memetakan target navigasi langsung ke kontainer pembungkus terluar.

### B. Komponen [`components/ui/SmoothScroll.tsx`](file:///D:/PROJECT/PT%20SINLIE%20CAHAYA%20MATAHARI/Web_SCM/components/ui/SmoothScroll.tsx) (Capture Phase Interception)
- Menggunakan `document.addEventListener("click", handleAnchorClick, { capture: true })` untuk mencegat event klik link anchor sebelum Next.js `<Link>` router.
- Memanggil `lenis.scrollTo(targetElement, { offset: -80 })` untuk kompensasi presisi sticky navbar setinggi 80px.
- Sinkronisasi riwayat hash URL dengan `window.history.pushState(null, "", hash)`.

### C. Normalisasi CSS di [`app/globals.css`](file:///D:/PROJECT/PT%20SINLIE%20CAHAYA%20MATAHARI/Web_SCM/app/globals.css) & [`app/layout.tsx`](file:///D:/PROJECT/PT%20SINLIE%20CAHAYA%20MATAHARI/Web_SCM/app/layout.tsx)
- Menghapus benturan native smooth scroll: `html.lenis { scroll-behavior: auto !important; }`.
- Menyempurnakan parameter visual transform:
  - `pop-in`: `scale(0.92)` (padat dan punchy tanpa merusak rasio).
  - `badge-stamp`: `scale(1.06)` (stempel presisi tanpa overflow).
  - `blur-in`: `blur(10px)` (efek fokus optik tajam & ringan GPU).
  - `perspective-tilt`: `rotateX(8deg)` (kedalaman 3D tanpa teks blur).

### D. Struktur Halaman & Navbar Spy di [`app/page.tsx`](file:///D:/PROJECT/PT%20SINLIE%20CAHAYA%20MATAHARI/Web_SCM/app/page.tsx) & [`components/layout/Navbar.tsx`](file:///D:/PROJECT/PT%20SINLIE%20CAHAYA%20MATAHARI/Web_SCM/components/layout/Navbar.tsx)
- ID unik dipasang langsung pada komponen root `<ScrollReveal id="...">` di `app/page.tsx`.
- ID redundan pada tag `<section>` anak dihapus untuk mencegah duplikasi DOM ID.
- Scroll spy pada navbar diperbarui menggunakan `getBoundingClientRect()` sehingga penanda menu aktif 100% akurat.

---

## 6. Status Verifikasi Akhir (Browser Testing)

Semua perbaikan telah diuji dan diverifikasi secara langsung menggunakan simulasi browser nyata (`http://localhost:3000`):

| Skenario Pengujian | Status | Hasil Pengamatan |
|:---|:---|:---|
| **Initial Load (Hero)** | **PASSED** | Animasi *Fade-Up* meluncur mulus tanpa FOUC/kedipan kosong. |
| **Navigasi Link Header (`#about`, `#products`, `#contact`)** | **PASSED** | Halaman meluncur mulus (*smooth glide*) dan mendarat tepat dengan offset -80px. |
| **Scroll Balik ke Atas (Contact -> Hero)** | **PASSED** | Semua section di atas layar tetap utuh, stabil, dan terbaca tanpa blank void. |
| **Language Toggle (ID / EN)** | **PASSED** | Pergantian bahasa instan tanpa mengganggu animasi atau layout. |
| **Kompilasi TypeScript & Build** | **PASSED** | `npm run build` selesai dengan `Exit code: 0` (Next.js 16.4 Turbopack). |

