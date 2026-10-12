export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  isVerified: boolean;
}

export interface ProductCategory {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  highlights: string[];
  imagePlaceholder: {
    label: string;
    suggestedRatio: string;
    aspectRatio: string;
  };
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  specs: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface QAFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspect: "landscape" | "portrait" | "square";
  placeholderText: string;
  dimensions: string;
}

export const COMPANY_INFO = {
  name: "PT. Sinlie Cahaya Matahari",
  shortName: "SCM",
  tagline: "Precision in Every Stitch",
  taglineId: "Presisi di Setiap Rajutan Kaus Kaki",
  establishedYear: "2018", // Subject to verification (Incorporated 2023)
  location: "Indonesia",
  contact: {
    email: "inquiry@sinliecahayamatahari.com", // Placeholder to be verified
    phone: "+62 812-XXXX-XXXX", // Placeholder to be verified
    whatsapp: "+62 812-XXXX-XXXX", // Placeholder to be verified
    address: "Kawasan Industri, Indonesia", // Placeholder to be verified
    operatingHours: "Senin - Jumat: 08:00 - 17:00 WIB",
  },
};

export const NAV_LINKS = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Kategori Produk", href: "#products" },
  { label: "Kapabilitas Pabrik", href: "#capabilities" },
  { label: "Proses Produksi", href: "#process" },
  { label: "Galeri", href: "#gallery" },
  { label: "Kontak", href: "#contact" },
];

export const COMPANY_STATS: StatItem[] = [
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

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "baby-socks",
    title: "Kaus Kaki Bayi",
    titleEn: "Baby Socks",
    description:
      "Dibuat dengan benang katun combed pilihan yang ekstra lembut, elastisitas non-constricting, serta opsi alas anti-slip silikon yang aman untuk kulit sensitif bayi.",
    highlights: ["Ultra-soft Combed Cotton", "Anti-slip Silicone Grip Option", "Elastis Lembut Tanpa Bekas"],
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
    description:
      "Konstruksi rajutan padat berdaya tahan tinggi untuk aktivitas harian anak sekolah. Mampu menyerap keringat optimal dengan pola warna-warni presisi tinggi.",
    highlights: ["Rajutan Padat Tahan Gesekan", "High Breathability", "Pilihan Motif Karakter & Polos"],
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
    description:
      "Variasi model ankle, hidden/no-show, crew, dan fashion socks dengan rajutan halus, siluet pas di kaki, dan kenyamanan ventilasi maksimal untuk berbagai gaya.",
    highlights: ["Ankle, Hidden & Crew Styles", "Seamless Toe Linking", "Finishing Halus & Modis"],
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
    description:
      "Kaus kaki formal kantoran dan athletic socks berperforma tinggi dengan bantalan (terry cushion) di tumit dan telapak untuk peredam benturan optimal.",
    highlights: ["Terry Cushioning Support", "Reinforced Heel & Toe", "Kompresi Lengkung Kaki (Arch Support)"],
    imagePlaceholder: {
      label: "Foto Produk Kaus Kaki Pria & Sport",
      suggestedRatio: "800 x 600 px",
      aspectRatio: "aspect-4/3",
    },
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "knitting-machinery",
    title: "Mesin Rajut Komputerisasi Modern",
    description:
      "Menggunakan jajaran mesin rajut kaus kaki otomatis berteknologi tinggi untuk memastikan kerapatan jarum presisi dan konsistensi ukuran antar batch.",
    iconName: "Cpu",
    specs: ["Single & Double Cylinder Capabilities", "Dukungan Kerapatan 96N - 200N", "Kecepatan & Akurasi Tinggi"],
  },
  {
    id: "custom-oem",
    title: "Layanan OEM & Private Label",
    description:
      "Solusi manufaktur menyeluruh untuk brand retail, korporasi, institusi sekolah, hingga pesanan kustom khusus dengan spesifikasi eksklusif.",
    iconName: "Layers",
    specs: ["Kustomisasi Desain & Logo Rajut", "Sampling Prototipe Sebelum Produksi Masal", "Kerahasiaan Desain Brand Terjamin"],
  },
  {
    id: "yarn-materials",
    title: "Fleksibilitas Material Benang",
    description:
      "Didukung pemilihan material benang berkualitas tinggi sesuai fungsi: Katun Combed, Spandex Berkualitas, Poliester, hingga Benang Khusus.",
    iconName: "Sparkles",
    specs: ["Benang Berstandar Kualitas Industri", "Variasi Warna Luas & Konsisten", "Elastisitas & Ketahanan Cuci Tinggi"],
  },
  {
    id: "finishing-packaging",
    title: "Finishing & Pengemasan Terintegrasi",
    description:
      "Fasilitas setting uap (steam boarding), penyambungan jari (linking), dan pengemasan akhir berlabel merek siap kirim ke jalur distribusi klien.",
    iconName: "PackageCheck",
    specs: ["Steam Boarding untuk Bentuk Presisi", "Automatic / Seamless Toe Linking", "Custom Hangtag & Polybag Packaging"],
  },
];

export const PRODUCTION_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Preparasi Material & Yarn Sourcing",
    description: "Pemilihan benang katun, spandex, dan elastik berkualitas sesuai spesifikasi teknis pesanan klien.",
    iconName: "Boxes",
  },
  {
    step: "02",
    title: "Knitting Komputerisasi",
    description: "Pemrograman pola digital dan proses perajutan otomatis dengan kontrol kerapatan rajut ketat.",
    iconName: "Cpu",
  },
  {
    step: "03",
    title: "Toe Linking & Seaming",
    description: "Penyambungan bagian jari kaus kaki menggunakan mesin linking untuk menghasilkan sambungan rata yang nyaman.",
    iconName: "GitMerge",
  },
  {
    step: "04",
    title: "Steam Boarding & QA Check",
    description: "Pembentukan bentuk proporsional dengan panas uap serta inspeksi visual 100% dari cacat rajut.",
    iconName: "ShieldCheck",
  },
  {
    step: "05",
    title: "Packaging & Dispatch",
    description: "Pemasangan label merek klien, hangtag, pengemasan per lusin/karton, dan persiapan pengiriman.",
    iconName: "Truck",
  },
];

export const QUALITY_ASSURANCE_ITEMS: QAFeature[] = [
  {
    title: "Inspeksi Kerapatan & Ketegangan Rajut",
    description: "Pemeriksaan berkala pada mesin untuk memastikan tegangan rajutan seragam di setiap pasang kaus kaki.",
    iconName: "Sliders",
  },
  {
    title: "Verifikasi Dimensi & Ukuran Kaus Kaki",
    description: "Pengukuran panjang telapak, pergelangan, dan elastisitas cuff sebelum dan sesudah proses boarding uap.",
    iconName: "Ruler",
  },
  {
    title: "Kontrol Deteksi Benda Logam & Jarum",
    description: "Penerapan prosedur keamanan deteksi jarum untuk memastikan keselamatan pemakai akhir.",
    iconName: "ShieldAlert",
  },
  {
    title: "Uji Ketahanan & Daya Rentang Elastis",
    description: "Pengecekan elastisitas karet dan daya pulih benang agar kaus kaki tidak cepat melar saat digunakan berulang.",
    iconName: "CheckCircle2",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
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
