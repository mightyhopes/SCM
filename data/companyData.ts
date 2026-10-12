export type SockSegment = "baby" | "kids" | "ladies" | "mens" | "athletic";

export type NeedleCount = "96N" | "108N" | "144N" | "168N" | "200N";

export interface StatItem {
  readonly id: string;
  readonly value: string;
  readonly label: string;
  readonly description: string;
  readonly isVerified: boolean;
}

export interface ProductCategory {
  readonly id: string;
  readonly title: string;
  readonly titleEn: string;
  readonly segment: SockSegment;
  readonly needleCounts: readonly NeedleCount[];
  readonly description: string;
  readonly highlights: readonly string[];
  readonly materialComposition: string;
  readonly imagePlaceholder: {
    readonly label: string;
    readonly suggestedRatio: string;
    readonly aspectRatio: string;
  };
}

export interface CapabilityItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly iconName: string;
  readonly badgeText: string;
  readonly specs: readonly string[];
}

export interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
  readonly iconName: string;
  readonly keyMetric: string;
}

export interface QAFeature {
  readonly title: string;
  readonly description: string;
  readonly iconName: string;
  readonly protocolTag: string;
}

export interface GalleryItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly aspect: "landscape" | "portrait" | "square";
  readonly placeholderText: string;
  readonly dimensions: string;
}

export interface B2BFAQ {
  readonly question: string;
  readonly answer: string;
  readonly tag: string;
}

export const COMPANY_INFO = {
  name: "PT. Sinlie Cahaya Matahari",
  shortName: "SCM",
  tagline: "Precision in Every Stitch",
  taglineId: "Presisi di Setiap Rajutan Kaus Kaki",
  establishedYear: "2018", // Subject to verification (Incorporated 2023)
  location: "Indonesia",
  contact: {
    email: "inquiry@sinliecahayamatahari.com",
    phone: "+62 812-XXXX-XXXX",
    whatsapp: "+62 812-XXXX-XXXX",
    address: "Kawasan Industri, Indonesia",
    operatingHours: "Senin - Jumat: 08:00 - 17:00 WIB",
  },
} as const;

export const NAV_LINKS = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Kategori Produk", href: "#products" },
  { label: "Kapabilitas Pabrik", href: "#capabilities" },
  { label: "Proses Produksi", href: "#process" },
  { label: "Galeri", href: "#gallery" },
  { label: "FAQ B2B", href: "#faq" },
  { label: "Kontak", href: "#contact" },
] as const;

export const COMPANY_STATS: readonly StatItem[] = [
  {
    id: "capacity",
    value: "100.000+",
    label: "Lusin / Bulan",
    description: "Estimasi kapasitas produksi bulanan (Menunggu konfirmasi final)",
    isVerified: false,
  },
  {
    id: "experience",
    value: "2018*",
    label: "Tahun Berdiri",
    description: "Awal kiprah manufaktur (Badan hukum resmi terdaftar Maret 2023)",
    isVerified: false,
  },
  {
    id: "categories",
    value: "4+",
    label: "Kategori Utama",
    description: "Bayi, Anak-anak, Wanita, dan Pria dengan spesifikasi kustom",
    isVerified: true,
  },
  {
    id: "inspection",
    value: "100%",
    label: "Quality Checking",
    description: "Pemeriksaan konsistensi rajutan dan standar ketahanan sebelum pengemasan",
    isVerified: true,
  },
];

export const PRODUCT_CATEGORIES: readonly ProductCategory[] = [
  {
    id: "baby-socks",
    title: "Kaus Kaki Bayi",
    titleEn: "Baby Socks",
    segment: "baby",
    needleCounts: ["96N", "108N"],
    description:
      "Dibuat dengan benang katun combed pilihan ekstra lembut, elastisitas non-constricting, serta opsi alas anti-slip silikon yang aman untuk kulit sensitif bayi.",
    highlights: [
      "Ultra-soft Combed Cotton",
      "Anti-slip Silicone Grip Option",
      "Elastis Lembut Tanpa Bekas",
    ],
    materialComposition: "Katun Combed 30s/40s, Spandex Cover, Karet Lembut",
    imagePlaceholder: {
      label: "Foto Produk Kaus Kaki Bayi",
      suggestedRatio: "800 x 600 px",
      aspectRatio: "aspect-4/3",
    },
  },
  {
    id: "kids-socks",
    title: "Kaus Kaki Anak & Sekolah",
    titleEn: "Kids & School Socks",
    segment: "kids",
    needleCounts: ["108N", "144N"],
    description:
      "Konstruksi rajutan padat berdaya tahan tinggi untuk aktivitas harian sekolah. Menyerap keringat optimal dengan pola warna-warni presisi tinggi.",
    highlights: [
      "Rajutan Padat Tahan Gesekan",
      "High Breathability",
      "Pilihan Motif Karakter & Polos",
    ],
    materialComposition: "Katun Combed, TC Berkualitas, Spandex Elastis",
    imagePlaceholder: {
      label: "Foto Produk Kaus Kaki Anak",
      suggestedRatio: "800 x 600 px",
      aspectRatio: "aspect-4/3",
    },
  },
  {
    id: "ladies-socks",
    title: "Kaus Kaki Wanita",
    titleEn: "Ladies Socks",
    segment: "ladies",
    needleCounts: ["144N", "168N", "200N"],
    description:
      "Variasi model ankle, hidden/no-show, crew, dan fashion socks dengan rajutan halus, siluet pas di kaki, dan kenyamanan ventilasi maksimal.",
    highlights: [
      "Ankle, Hidden & Crew Styles",
      "Seamless Toe Linking",
      "Finishing Halus & Modis",
    ],
    materialComposition: "Fine Combed Cotton, Poliester Ringan, Spandex",
    imagePlaceholder: {
      label: "Foto Produk Kaus Kaki Wanita",
      suggestedRatio: "800 x 600 px",
      aspectRatio: "aspect-4/3",
    },
  },
  {
    id: "mens-socks",
    title: "Kaus Kaki Pria & Olahraga",
    titleEn: "Men's & Athletic Socks",
    segment: "mens",
    needleCounts: ["144N", "168N"],
    description:
      "Kaus kaki formal kantoran dan athletic socks berperforma tinggi dengan bantalan (terry cushion) di tumit dan telapak untuk peredam benturan optimal.",
    highlights: [
      "Terry Cushioning Support",
      "Reinforced Heel & Toe",
      "Kompresi Lengkung Kaki (Arch Support)",
    ],
    materialComposition: "Heavy Terry Combed Cotton, Spandex High-Recovery, Nilon",
    imagePlaceholder: {
      label: "Foto Produk Kaus Kaki Pria & Sport",
      suggestedRatio: "800 x 600 px",
      aspectRatio: "aspect-4/3",
    },
  },
];

export const CAPABILITIES: readonly CapabilityItem[] = [
  {
    id: "knitting-machinery",
    title: "Mesin Rajut Komputerisasi Modern",
    description:
      "Menggunakan jajaran mesin rajut kaus kaki otomatis berteknologi tinggi untuk memastikan kerapatan jarum presisi dan konsistensi ukuran antar batch.",
    iconName: "Cpu",
    badgeText: "High Precision",
    specs: [
      "Single & Double Cylinder Capabilities",
      "Dukungan Kerapatan 96N - 200N",
      "Sistem Pemrograman Pola Digital",
    ],
  },
  {
    id: "custom-oem",
    title: "Layanan OEM & Private Label",
    description:
      "Solusi manufaktur menyeluruh untuk brand retail, korporasi, institusi sekolah, hingga pesanan kustom khusus dengan spesifikasi eksklusif.",
    iconName: "Layers",
    badgeText: "Full Custom",
    specs: [
      "Kustomisasi Desain & Logo Rajut",
      "Sampling Prototipe Sebelum Produksi Masal",
      "Kerahasiaan Desain Brand Terjamin",
    ],
  },
  {
    id: "yarn-materials",
    title: "Fleksibilitas Material Benang",
    description:
      "Didukung pemilihan material benang berkualitas tinggi sesuai fungsi: Katun Combed, Spandex Berkualitas, Poliester, hingga Benang Khusus.",
    iconName: "Sparkles",
    badgeText: "Quality Yarn",
    specs: [
      "Benang Berstandar Kualitas Industri",
      "Variasi Warna Luas & Konsisten",
      "Elastisitas & Ketahanan Cuci Tinggi",
    ],
  },
  {
    id: "finishing-packaging",
    title: "Finishing & Pengemasan Terintegrasi",
    description:
      "Fasilitas setting uap (steam boarding), penyambungan jari (linking), dan pengemasan akhir berlabel merek siap kirim ke jalur distribusi klien.",
    iconName: "PackageCheck",
    badgeText: "End-to-End",
    specs: [
      "Steam Boarding untuk Bentuk Presisi",
      "Automatic / Seamless Toe Linking",
      "Custom Hangtag & Polybag Packaging",
    ],
  },
];

export const PRODUCTION_PROCESS: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Preparasi Material & Yarn Sourcing",
    description:
      "Pemilihan benang katun, spandex, dan elastik berkualitas sesuai spesifikasi teknis pesanan klien.",
    iconName: "Boxes",
    keyMetric: "Seleksi Grade Benang",
  },
  {
    step: "02",
    title: "Knitting Komputerisasi",
    description:
      "Pemrograman pola digital dan proses perajutan otomatis dengan kontrol kerapatan rajut ketat.",
    iconName: "Cpu",
    keyMetric: "Multi-Gauge Automation",
  },
  {
    step: "03",
    title: "Toe Linking & Seaming",
    description:
      "Penyambungan bagian jari kaus kaki menggunakan mesin linking untuk menghasilkan sambungan rata yang nyaman.",
    iconName: "GitMerge",
    keyMetric: "Seamless Comfort Finish",
  },
  {
    step: "04",
    title: "Steam Boarding & QA Check",
    description:
      "Pembentukan bentuk proporsional dengan panas uap serta inspeksi visual 100% dari cacat rajut.",
    iconName: "ShieldCheck",
    keyMetric: "Presisi Dimensi & Bentuk",
  },
  {
    step: "05",
    title: "Packaging & Dispatch",
    description:
      "Pemasangan label merek klien, hangtag, pengemasan per lusin/karton, dan persiapan pengiriman.",
    iconName: "Truck",
    keyMetric: "B2B Delivery Ready",
  },
];

export const QUALITY_ASSURANCE_ITEMS: readonly QAFeature[] = [
  {
    title: "Inspeksi Kerapatan & Ketegangan Rajut",
    description:
      "Pemeriksaan berkala pada mesin untuk memastikan tegangan rajutan seragam di setiap pasang kaus kaki.",
    iconName: "Sliders",
    protocolTag: "Density Check",
  },
  {
    title: "Verifikasi Dimensi & Ukuran Kaus Kaki",
    description:
      "Pengukuran panjang telapak, pergelangan, dan elastisitas cuff sebelum dan sesudah proses boarding uap.",
    iconName: "Ruler",
    protocolTag: "Dimensional Accuracy",
  },
  {
    title: "Kontrol Deteksi Benda Logam & Jarum",
    description:
      "Penerapan prosedur keamanan deteksi jarum untuk memastikan keselamatan pemakai akhir.",
    iconName: "ShieldAlert",
    protocolTag: "Needle Safety Scan",
  },
  {
    title: "Uji Ketahanan & Daya Rentang Elastis",
    description:
      "Pengecekan elastisitas karet dan daya pulih benang agar kaus kaki tidak cepat melar saat digunakan berulang.",
    iconName: "CheckCircle2",
    protocolTag: "Stretch Recovery Test",
  },
];

export const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    id: "gal-1",
    title: "Lantai Produksi Mesin Rajut Komputerisasi",
    category: "Fasilitas Produksi",
    aspect: "landscape",
    placeholderText: "Foto Deretan Mesin Rajut Kaus Kaki Modern",
    dimensions: "1200 x 800 px",
  },
  {
    id: "gal-2",
    title: "Detail Kerapatan Rajutan & Benang",
    category: "Material & Craftsmanship",
    aspect: "portrait",
    placeholderText: "Foto Close-up Tekstur Rajut & Benang Katun",
    dimensions: "800 x 1000 px",
  },
  {
    id: "gal-3",
    title: "Area Finishing & Steam Boarding",
    category: "Proses Finishing",
    aspect: "landscape",
    placeholderText: "Foto Mesin Setting Uap / Boarding",
    dimensions: "800 x 600 px",
  },
  {
    id: "gal-4",
    title: "Inspeksi Kualitas & Pemilahan",
    category: "Quality Control",
    aspect: "portrait",
    placeholderText: "Foto Operator Memeriksa Kualitas Kaus Kaki",
    dimensions: "800 x 1000 px",
  },
  {
    id: "gal-5",
    title: "Pengemasan Siap Distribusi",
    category: "Packaging & Gudang",
    aspect: "landscape",
    placeholderText: "Foto Kaus Kaki Terkemas Rapi di Area Logistik",
    dimensions: "1200 x 800 px",
  },
];

export const B2B_FAQS: readonly B2BFAQ[] = [
  {
    question: "Berapa Minimum Order Quantity (MOQ) untuk pesanan maklon / custom?",
    answer:
      "MOQ standar disesuaikan dengan kompleksitas motif rajut dan ketersediaan benang. Umumnya pesanan custom OEM dimulai dari 50 hingga 100 lusin per desain/warna. Silakan ajukan RFQ untuk mendiskusikan fleksibilitas kuantitas pesanan Anda.",
    tag: "MOQ & Pemesanan",
  },
  {
    question: "Bagaimana tahapan pembuatan sampel prototipe (sampling)?",
    answer:
      "Setelah lembar spesifikasi desain (tech pack) atau referensi fisik disepakati, tim teknis kami akan memprogram motif ke mesin rajut dan membuat sampel awal untuk persetujuan (approval) klien sebelum produksi masal dimulai.",
    tag: "Prototipe & Sampling",
  },
  {
    question: "Apakah SCM menyediakan layanan pengemasan private label (hangtag & polybag)?",
    answer:
      "Ya. Kami menyediakan layanan finishing terpadu, termasuk pemasangan label merk klien, barcode/hangtag, pengemasan per pasang, per lusin, hingga pengepakan karton siap kirim ke gudang distribusi Anda.",
    tag: "Private Label & Packaging",
  },
  {
    question: "Berapa estimasi waktu pengerjaan (lead time) produksi?",
    answer:
      "Lead time produksi berkisar antara 2 hingga 4 minggu setelah sampel disetujui dan ketersediaan bahan baku terkonfirmasi, tergantung pada total volume lusin dan antrean produksi pabrik.",
    tag: "Waktu Produksi",
  },
  {
    question: "Bagaimana komitmen SCM terkait kerahasiaan desain dan hak cipta klien?",
    answer:
      "Kami menjunjung tinggi etika bisnis B2B dan kerahasiaan kekayaan intelektual. Desain, pola rajut, dan logo eksklusif milik brand mitra tidak akan pernah diperjualbelikan atau diproduksi untuk pihak lain tanpa izin tertulis.",
    tag: "Kerahasiaan & Kemitraan",
  },
];
