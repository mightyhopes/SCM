export type SockSegment = "baby" | "kids" | "ladies" | "mens" | "athletic" | "custom";

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
  readonly descriptionEn: string;
  readonly highlights: readonly string[];
  readonly highlightsEn: readonly string[];
  readonly materialComposition: string;
  readonly materialCompositionEn: string;
  readonly image: string;
  readonly imagePlaceholder: {
    readonly label: string;
    readonly suggestedRatio: string;
    readonly aspectRatio: string;
  };
}

export interface CapabilityItem {
  readonly id: string;
  readonly title: string;
  readonly titleEn: string;
  readonly description: string;
  readonly descriptionEn: string;
  readonly iconName: string;
  readonly badgeText: string;
  readonly badgeTextEn: string;
  readonly specs: readonly string[];
  readonly specsEn: readonly string[];
  readonly image: string;
}

export interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly titleEn: string;
  readonly description: string;
  readonly descriptionEn: string;
  readonly iconName: string;
  readonly keyMetric: string;
  readonly keyMetricEn: string;
  readonly image: string;
}

export interface QAFeature {
  readonly title: string;
  readonly titleEn: string;
  readonly description: string;
  readonly descriptionEn: string;
  readonly iconName: string;
  readonly protocolTag: string;
  readonly protocolTagEn: string;
  readonly image?: string;
}

export interface GalleryItem {
  readonly id: string;
  readonly title: string;
  readonly titleEn: string;
  readonly category: string;
  readonly categoryEn: string;
  readonly aspect: "landscape" | "portrait" | "square";
  readonly placeholderText: string;
  readonly dimensions: string;
  readonly image: string;
}

export interface B2BFAQ {
  readonly question: string;
  readonly questionEn: string;
  readonly answer: string;
  readonly answerEn: string;
  readonly tag: string;
  readonly tagEn: string;
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
    descriptionEn:
      "Crafted with ultra-soft selected combed cotton, non-constricting elasticity, and safe anti-slip silicone grip options tailored for delicate infant skin.",
    highlights: [
      "Ultra-soft Combed Cotton",
      "Anti-slip Silicone Grip Option",
      "Elastis Lembut Tanpa Bekas",
    ],
    highlightsEn: [
      "Ultra-soft Combed Cotton",
      "Anti-slip Silicone Grip Option",
      "Gentle Non-Marking Elastic",
    ],
    materialComposition: "Katun Combed 30s/40s, Spandex Cover, Karet Lembut",
    materialCompositionEn: "Combed Cotton 30s/40s, Spandex Cover, Gentle Elastic",
    image: "/images/dummy/08_baby_socks.jpg",
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
    descriptionEn:
      "High-durability dense knit construction designed for active daily school routines. Delivers optimal moisture-wicking and vibrant pattern precision.",
    highlights: [
      "Rajutan Padat Tahan Gesekan",
      "High Breathability",
      "Pilihan Motif Karakter & Polos",
    ],
    highlightsEn: [
      "High-Friction Resistant Knit",
      "Optimal Breathability",
      "Custom Graphic & Solid Colorway",
    ],
    materialComposition: "Katun Combed, TC Berkualitas, Spandex Elastis",
    materialCompositionEn: "Combed Cotton, Quality TC, Flexible Spandex",
    image: "/images/dummy/09_kids_socks.jpg",
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
    descriptionEn:
      "Versatile ankle, hidden/no-show, crew, and stylish fashion socks with ultra-fine stitch density, ergonomic foot contouring, and superior ventilation.",
    highlights: [
      "Ankle, Hidden & Crew Styles",
      "Seamless Toe Linking",
      "Finishing Halus & Modis",
    ],
    highlightsEn: [
      "Ankle, Hidden & Crew Styles",
      "Seamless Toe Linking",
      "Fine Fashion Finishing",
    ],
    materialComposition: "Fine Combed Cotton, Poliester Ringan, Spandex",
    materialCompositionEn: "Fine Combed Cotton, Lightweight Polyester, Spandex",
    image: "/images/dummy/10_ladies_socks.jpg",
    imagePlaceholder: {
      label: "Foto Produk Kaus Kaki Wanita",
      suggestedRatio: "800 x 600 px",
      aspectRatio: "aspect-4/3",
    },
  },
  {
    id: "mens-socks",
    title: "Kaus Kaki Pria & Formal",
    titleEn: "Men's Classic Socks",
    segment: "mens",
    needleCounts: ["144N", "168N"],
    description:
      "Kaus kaki formal eksekutif dan dress socks berkerapatan tinggi dengan fitting ergonomis tumit Y-heel, tidak mudah melorot, dan sejuk digunakan sepanjang hari.",
    descriptionEn:
      "Executive formal and dress socks featuring high knit density, deep ergonomic Y-heel contouring, non-slip cuffs, and all-day breathable comfort.",
    highlights: [
      "Ergonomic Y-Heel Pocket",
      "Reinforced Heel & Toe",
      "Stay-Up Ribbed Top Band",
    ],
    highlightsEn: [
      "Ergonomic Y-Heel Pocket",
      "Reinforced Heel & Toe",
      "Stay-Up Ribbed Top Band",
    ],
    materialComposition: "Fine Combed Cotton 40s, Poliamida, High-Recovery Spandex",
    materialCompositionEn: "Fine Combed Cotton 40s, Polyamide, High-Recovery Spandex",
    image: "/images/dummy/11_mens_socks.jpg",
    imagePlaceholder: {
      label: "Foto Produk Kaus Kaki Pria Formal",
      suggestedRatio: "800 x 600 px",
      aspectRatio: "aspect-4/3",
    },
  },
  {
    id: "sport-socks",
    title: "Kaus Kaki Olahraga & Athletic",
    titleEn: "Performance Athletic Socks",
    segment: "athletic",
    needleCounts: ["144N", "168N"],
    description:
      "Kaus kaki olahraga performa tinggi dengan bantalan (terry cushion) di telapak untuk peredam impak, kompresi arch support, serta sirkulasi udara optimal.",
    descriptionEn:
      "High-performance sports socks with dense terry cushion soles for shock absorption, dynamic elastic arch compression, and instep mesh airflow.",
    highlights: [
      "Terry Cushion Shock Absorption",
      "Dynamic Arch Compression Band",
      "Breathable Mesh Ventilation",
    ],
    highlightsEn: [
      "Terry Cushion Shock Absorption",
      "Dynamic Arch Compression Band",
      "Breathable Mesh Ventilation",
    ],
    materialComposition: "Heavy Terry Combed Cotton, Spandex High-Recovery, Nilon",
    materialCompositionEn: "Heavy Terry Combed Cotton, High-Recovery Spandex, Nylon",
    image: "/images/dummy/12_sport_socks.jpg",
    imagePlaceholder: {
      label: "Foto Produk Kaus Kaki Olahraga",
      suggestedRatio: "800 x 600 px",
      aspectRatio: "aspect-4/3",
    },
  },
  {
    id: "custom-socks",
    title: "Kaus Kaki Desain Kustom & OEM",
    titleEn: "Custom OEM & Private Label",
    segment: "custom",
    needleCounts: ["144N", "168N", "200N"],
    description:
      "Solusi manufaktur penuh untuk brand mitra: rajut jacquard logo presisi tinggi, sampling prototipe cepat, serta pengemasan label merek kustom siap jual.",
    descriptionEn:
      "End-to-end manufacturing solutions for brand partners: high-definition jacquard logos, rapid sample turnaround, and complete private label packaging.",
    highlights: [
      "Precision Jacquard Logo Knit",
      "Rapid Sampling & Prototype",
      "Full Private Label Packaging",
    ],
    highlightsEn: [
      "Precision Jacquard Logo Knit",
      "Rapid Sampling & Prototype",
      "Full Private Label Packaging",
    ],
    materialComposition: "Fleksibel sesuai tech pack (Combed Cotton, TC, Spandex, Bamboo)",
    materialCompositionEn: "Flexible per tech pack (Combed Cotton, TC, Spandex, Bamboo)",
    image: "/images/dummy/13_custom_socks.jpg",
    imagePlaceholder: {
      label: "Foto Produk Kaus Kaki Kustom OEM",
      suggestedRatio: "800 x 600 px",
      aspectRatio: "aspect-4/3",
    },
  },
];

export const CAPABILITIES: readonly CapabilityItem[] = [
  {
    id: "knitting-machinery",
    title: "Mesin Rajut Komputerisasi Modern",
    titleEn: "Modern Computerized Knitting Fleet",
    description:
      "Menggunakan jajaran mesin rajut kaus kaki otomatis berteknologi tinggi untuk memastikan kerapatan jarum presisi dan konsistensi ukuran antar batch.",
    descriptionEn:
      "Operating high-tech automated computerized sock knitting machinery to ensure exact needle gauge tension and consistent batch sizing.",
    iconName: "Cpu",
    badgeText: "High Precision",
    badgeTextEn: "High Precision",
    image: "/images/dummy/03_production_machines.jpg",
    specs: [
      "Single & Double Cylinder Capabilities",
      "Dukungan Kerapatan 96N - 200N",
      "Sistem Pemrograman Pola Digital",
    ],
    specsEn: [
      "Single & Double Cylinder Capabilities",
      "Multi-Gauge Range 96N - 200N",
      "Digital Pattern Programming System",
    ],
  },
  {
    id: "custom-oem",
    title: "Layanan OEM & Private Label",
    titleEn: "OEM & Private Label Services",
    description:
      "Solusi manufaktur menyeluruh untuk brand retail, korporasi, institusi sekolah, hingga pesanan kustom khusus dengan spesifikasi eksklusif.",
    descriptionEn:
      "End-to-end contract manufacturing for retail fashion brands, corporate uniforms, educational institutions, and exclusive tech-pack custom orders.",
    iconName: "Layers",
    badgeText: "Full Custom",
    badgeTextEn: "Full Custom",
    image: "/images/dummy/04_production_floor.jpg",
    specs: [
      "Kustomisasi Desain & Logo Rajut",
      "Sampling Prototipe Sebelum Produksi Masal",
      "Kerahasiaan Desain Brand Terjamin",
    ],
    specsEn: [
      "Custom Graphic & Jacquard Logo Knit",
      "Approval Prototype Sampling Before Mass Run",
      "Guaranteed Brand Design Confidentiality",
    ],
  },
  {
    id: "yarn-materials",
    title: "Fleksibilitas Material Benang",
    titleEn: "Premium Yarn Material Flexibility",
    description:
      "Didukung pemilihan material benang berkualitas tinggi sesuai fungsi: Katun Combed, Spandex Berkualitas, Poliester, hingga Benang Khusus.",
    descriptionEn:
      "Backed by selective high-grade yarn sourcing matched to function: Combed Cotton, High-Recovery Spandex, Polyester, and Specialty Fibers.",
    iconName: "Sparkles",
    badgeText: "Quality Yarn",
    badgeTextEn: "Quality Yarn",
    image: "/images/dummy/14_yarn_materials.jpg",
    specs: [
      "Benang Berstandar Kualitas Industri",
      "Variasi Warna Luas & Konsisten",
      "Elastisitas & Ketahanan Cuci Tinggi",
    ],
    specsEn: [
      "Industry-Standard Certified Yarn",
      "Extensive & Batch-Consistent Color Palette",
      "High Elasticity & Wash Endurance",
    ],
  },
  {
    id: "finishing-packaging",
    title: "Finishing & Pengemasan Terintegrasi",
    titleEn: "Integrated Finishing & Packaging",
    description:
      "Fasilitas setting uap (steam boarding), penyambungan jari (linking), dan pengemasan akhir berlabel merek siap kirim ke jalur distribusi klien.",
    descriptionEn:
      "Complete steam boarding thermal setting, precision toe linking, and retail-ready private label packaging delivered direct to your logistics hub.",
    iconName: "PackageCheck",
    badgeText: "End-to-End",
    badgeTextEn: "End-to-End",
    image: "/images/dummy/16_finishing_process.jpg",
    specs: [
      "Steam Boarding untuk Bentuk Presisi",
      "Automatic / Seamless Toe Linking",
      "Custom Hangtag & Polybag Packaging",
    ],
    specsEn: [
      "Steam Boarding for Precise Contours",
      "Automatic / Seamless Toe Linking",
      "Custom Hangtag & Retail Polybag Packaging",
    ],
  },
];

export const PRODUCTION_PROCESS: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Preparasi Material & Yarn Sourcing",
    titleEn: "Material Preparation & Yarn Sourcing",
    description:
      "Pemilihan benang katun combed, spandex, dan elastik berkualitas sesuai spesifikasi teknis pesanan klien.",
    descriptionEn:
      "Selective sourcing of high-grade combed cotton, spandex, and core elastics tailored to client tech-pack specifications.",
    iconName: "Boxes",
    keyMetric: "Seleksi Grade Benang",
    keyMetricEn: "Yarn Grade Selection",
    image: "/images/dummy/14_yarn_materials.jpg",
  },
  {
    step: "02",
    title: "Knitting Komputerisasi",
    titleEn: "Computerized Knitting",
    description:
      "Pemrograman pola digital dan proses perajutan otomatis multi-gauge dengan kontrol kerapatan rajut presisi.",
    descriptionEn:
      "Digital pattern setup and multi-gauge automated knitting with exact yarn tension and density control.",
    iconName: "Cpu",
    keyMetric: "Multi-Gauge Automation",
    keyMetricEn: "Multi-Gauge Automation",
    image: "/images/dummy/15_knitting_process.jpg",
  },
  {
    step: "03",
    title: "Toe Linking & Finishing",
    titleEn: "Toe Linking & Finishing",
    description:
      "Penyambungan bagian jari kaus kaki menggunakan mesin linking untuk menghasilkan sambungan halus yang nyaman.",
    descriptionEn:
      "Precision toe seam linking ensuring a smooth, non-bulky, and friction-free finish for ultimate wearer comfort.",
    iconName: "GitMerge",
    keyMetric: "Seamless Comfort Finish",
    keyMetricEn: "Seamless Comfort Finish",
    image: "/images/dummy/16_finishing_process.jpg",
  },
  {
    step: "04",
    title: "Steam Boarding & QA Check",
    titleEn: "Steam Boarding & QA Check",
    description:
      "Pembentukan dimensi proporsional dengan panas uap serta inspeksi visual 100% dari potensi cacat rajut.",
    descriptionEn:
      "Thermal steam boarding locks anatomical dimensions followed by 100% visual inspection against stitch defects.",
    iconName: "ShieldCheck",
    keyMetric: "Presisi Dimensi & Bentuk",
    keyMetricEn: "Dimensional Shape Precision",
    image: "/images/dummy/06_quality_inspection.jpg",
  },
  {
    step: "05",
    title: "Packaging & Delivery",
    titleEn: "Packaging & Delivery",
    description:
      "Pemasangan label merek klien, hangtag, pengemasan per lusin/karton, dan persiapan pengiriman tepat waktu.",
    descriptionEn:
      "Client brand labeling, barcode hangtags, retail polybag carton packing, and timely logistics dispatch.",
    iconName: "Truck",
    keyMetric: "B2B Delivery Ready",
    keyMetricEn: "B2B Delivery Ready",
    image: "/images/dummy/17_product_packaging.jpg",
  },
];

export const QUALITY_ASSURANCE_ITEMS: readonly QAFeature[] = [
  {
    title: "Inspeksi Kerapatan & Ketegangan Rajut",
    titleEn: "Knit Density & Tension Verification",
    description:
      "Pemeriksaan berkala pada mesin untuk memastikan tegangan rajutan seragam di setiap pasang kaus kaki.",
    descriptionEn:
      "Regular automated machine checks ensuring uniform stitch tension and consistent elasticity across every single pair.",
    iconName: "Sliders",
    protocolTag: "Density Check",
    protocolTagEn: "Density Check",
    image: "/images/dummy/06_quality_inspection.jpg",
  },
  {
    title: "Verifikasi Dimensi & Ukuran Kaus Kaki",
    titleEn: "Dimensional & Sizing Verification",
    description:
      "Pengukuran panjang telapak, pergelangan, dan elastisitas cuff sebelum dan sesudah proses boarding uap.",
    descriptionEn:
      "Pre-and-post steam boarding measurement of sole length, ankle contours, and cuff elastic recovery.",
    iconName: "Ruler",
    protocolTag: "Dimensional Accuracy",
    protocolTagEn: "Dimensional Accuracy",
    image: "/images/dummy/05_worker_quality_control.jpg",
  },
  {
    title: "Kontrol Deteksi Benda Logam & Jarum",
    titleEn: "Needle & Metal Contaminant Detection",
    description:
      "Penerapan prosedur keamanan deteksi jarum untuk memastikan keselamatan pemakai akhir.",
    descriptionEn:
      "Mandatory calibrated 0.8mm metal detector scan for complete end-user safety and zero broken needle residue.",
    iconName: "ShieldAlert",
    protocolTag: "Needle Safety Scan",
    protocolTagEn: "Needle Safety Scan",
    image: "/images/dummy/06_quality_inspection.jpg",
  },
  {
    title: "Uji Ketahanan & Daya Rentang Elastis",
    titleEn: "Stretch Recovery & Wear Endurance Test",
    description:
      "Pengecekan elastisitas karet dan daya pulih benang agar kaus kaki tidak cepat melar saat digunakan berulang.",
    descriptionEn:
      "Rigorous stretch and recovery testing ensuring elastics retain grip without sagging after repeated wear cycles.",
    iconName: "CheckCircle2",
    protocolTag: "Stretch Recovery Test",
    protocolTagEn: "Stretch Recovery Test",
    image: "/images/dummy/05_worker_quality_control.jpg",
  },
];

export const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    id: "gal-1",
    title: "Lantai Produksi Mesin Rajut Komputerisasi",
    titleEn: "Computerized Knitting Floor",
    category: "Fasilitas Produksi",
    categoryEn: "Knitting Floor",
    aspect: "landscape",
    placeholderText: "Foto Deretan Mesin Rajut Kaus Kaki Modern",
    dimensions: "1200 x 800 px",
    image: "/images/dummy/04_production_floor.jpg",
  },
  {
    id: "gal-2",
    title: "Detail Kerapatan Rajutan & Serat Benang",
    titleEn: "Knit Density & Fiber Craftsmanship",
    category: "Material & Craftsmanship",
    categoryEn: "Materials",
    aspect: "portrait",
    placeholderText: "Foto Close-up Tekstur Rajut & Benang Katun",
    dimensions: "800 x 1000 px",
    image: "/images/dummy/21_knit_texture.jpg",
  },
  {
    id: "gal-3",
    title: "Area Finishing & Thermal Steam Boarding",
    titleEn: "Thermal Steam Boarding Station",
    category: "Proses Finishing",
    categoryEn: "Finishing Area",
    aspect: "landscape",
    placeholderText: "Foto Mesin Setting Uap / Boarding",
    dimensions: "800 x 600 px",
    image: "/images/dummy/16_finishing_process.jpg",
  },
  {
    id: "gal-4",
    title: "Inspeksi Kualitas Fisik & Pemilahan Cacat",
    titleEn: "100% Visual Quality Inspection Table",
    category: "Quality Control",
    categoryEn: "Quality Assurance",
    aspect: "portrait",
    placeholderText: "Foto Operator Memeriksa Kualitas Kaus Kaki",
    dimensions: "800 x 1000 px",
    image: "/images/dummy/06_quality_inspection.jpg",
  },
  {
    id: "gal-5",
    title: "Pengemasan Karton & Finishing Manual",
    titleEn: "Carton Packaging & Retail Tagging",
    category: "Packaging & Kartonisasi",
    categoryEn: "Packaging Logistics",
    aspect: "landscape",
    placeholderText: "Foto Pengemasan Produk Kaus Kaki",
    dimensions: "800 x 600 px",
    image: "/images/dummy/07_packing.jpg",
  },
  {
    id: "gal-6",
    title: "Pola Rajut Tekstur & Motif Jacquard",
    titleEn: "Jacquard Weave & Texture Details",
    category: "Material & Craftsmanship",
    categoryEn: "Textile Detail",
    aspect: "portrait",
    placeholderText: "Foto Detail Pola Rajut Jacquard",
    dimensions: "800 x 1000 px",
    image: "/images/dummy/22_knit_pattern.jpg",
  },
  {
    id: "gal-7",
    title: "Gudang Penyimpanan & Manajemen Stok",
    titleEn: "Climate-Controlled Warehouse",
    category: "Gudang & Inventori",
    categoryEn: "Warehouse & Inventory",
    aspect: "landscape",
    placeholderText: "Foto Area Gudang Produk SCM",
    dimensions: "1200 x 800 px",
    image: "/images/dummy/18_inventory_warehouse.jpg",
  },
  {
    id: "gal-8",
    title: "Armada Distribusi & Logistik Pengiriman B2B",
    titleEn: "B2B Logistics Fleet & Dispatch Hub",
    category: "Logistik & Pengiriman",
    categoryEn: "Fleet & Logistics",
    aspect: "landscape",
    placeholderText: "Foto Distribusi Pengiriman Produk SCM",
    dimensions: "1200 x 800 px",
    image: "/images/dummy/23_logistics.jpg",
  },
];

export const B2B_FAQS: readonly B2BFAQ[] = [
  {
    question: "Berapa Minimum Order Quantity (MOQ) untuk pesanan maklon / custom?",
    questionEn: "What is the Minimum Order Quantity (MOQ) for custom OEM orders?",
    answer:
      "MOQ standar disesuaikan dengan kompleksitas motif rajut dan ketersediaan benang. Umumnya pesanan custom OEM dimulai dari 50 hingga 100 lusin per desain/warna. Silakan ajukan RFQ untuk mendiskusikan fleksibilitas kuantitas pesanan Anda.",
    answerEn:
      "Our standard MOQ depends on jacquard complexity and yarn availability. Generally, custom OEM starts from 50 to 100 dozens per design/colorway. Please submit an RFQ to discuss volume flexibility tailored to your needs.",
    tag: "MOQ & Pemesanan",
    tagEn: "MOQ & Ordering",
  },
  {
    question: "Bagaimana tahapan pembuatan sampel prototipe (sampling)?",
    questionEn: "How does the prototype sampling process work?",
    answer:
      "Setelah lembar spesifikasi desain (tech pack) atau referensi fisik disepakati, tim teknis kami akan memprogram motif ke mesin rajut dan membuat sampel awal untuk persetujuan (approval) klien sebelum produksi masal dimulai.",
    answerEn:
      "Once your tech pack or physical reference is finalized, our engineering team programs the digital pattern and knits an initial approval sample prior to commencing mass production.",
    tag: "Prototipe & Sampling",
    tagEn: "Prototypes & Sampling",
  },
  {
    question: "Apakah SCM menyediakan layanan pengemasan private label (hangtag & polybag)?",
    questionEn: "Does SCM provide private label packaging (hangtags & polybags)?",
    answer:
      "Ya. Kami menyediakan layanan finishing terpadu, termasuk pemasangan label merk klien, barcode/hangtag, pengemasan per pasang, per lusin, hingga pengepakan karton siap kirim ke gudang distribusi Anda.",
    answerEn:
      "Yes. We deliver integrated finishing services including client brand tags, retail barcodes, single pair/dozen polybag wrapping, and export-standard master cartons ready for your distribution hub.",
    tag: "Private Label & Packaging",
    tagEn: "Private Label & Packaging",
  },
  {
    question: "Berapa estimasi waktu pengerjaan (lead time) produksi?",
    questionEn: "What is the estimated production lead time?",
    answer:
      "Lead time produksi berkisar antara 2 hingga 4 minggu setelah sampel disetujui dan ketersediaan bahan baku terkonfirmasi, tergantung pada total volume lusin dan antrean produksi pabrik.",
    answerEn:
      "Production lead times typically range from 2 to 4 weeks after sample approval and yarn availability confirmation, depending on total dozen volume and active factory queue.",
    tag: "Waktu Produksi",
    tagEn: "Production Lead Time",
  },
  {
    question: "Bagaimana komitmen SCM terkait kerahasiaan desain dan hak cipta klien?",
    questionEn: "What is SCM's commitment to client design confidentiality?",
    answer:
      "Kami menjunjung tinggi etika bisnis B2B dan kerahasiaan kekayaan intelektual. Desain, pola rajut, dan logo eksklusif milik brand mitra tidak akan pernah diperjualbelikan atau diproduksi untuk pihak lain tanpa izin tertulis.",
    answerEn:
      "We strictly uphold B2B confidentiality and intellectual property ethics. Exclusive knit patterns, logos, and tech packs belonging to partner brands are never redistributed or manufactured for third parties.",
    tag: "Kerahasiaan & Kemitraan",
    tagEn: "Confidentiality & Rights",
  },
];
