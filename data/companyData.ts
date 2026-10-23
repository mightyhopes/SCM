export type SockSegment = "baby" | "kids" | "ladies" | "mens" | "athletic" | "custom";

export interface StatItem {
  readonly id: string;
  readonly value: string;
  readonly valueEn: string;
  readonly label: string;
  readonly labelEn: string;
  readonly description: string;
  readonly descriptionEn: string;
}

export interface ProductCategory {
  readonly id: string;
  readonly title: string;
  readonly titleEn: string;
  readonly segment: SockSegment;
  readonly needleCounts: readonly string[];
  readonly description: string;
  readonly descriptionEn: string;
  readonly highlights: readonly string[];
  readonly highlightsEn: readonly string[];
  readonly materialComposition: string;
  readonly materialCompositionEn: string;
  readonly image: string;
  readonly imagePosition?: string;
}

export interface ProductGalleryItem {
  readonly id: string;
  readonly title: string;
  readonly titleEn: string;
  readonly image: string;
  readonly width: number;
  readonly height: number;
}

export interface ShowroomItem {
  readonly id: string;
  readonly title: string;
  readonly titleEn: string;
  readonly subtitle: string;
  readonly subtitleEn: string;
  readonly description: string;
  readonly descriptionEn: string;
  readonly badge: string;
  readonly badgeEn: string;
  readonly image: string;
  readonly width: number;
  readonly height: number;
  readonly tags: readonly string[];
  readonly tagsEn: readonly string[];
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
  readonly stepNumber: number;
  readonly title: string;
  readonly titleEn: string;
  readonly subtitle?: string;
  readonly subtitleEn?: string;
  readonly description: string;
  readonly descriptionEn: string;
  readonly iconName: string;
  readonly keyMetric: string;
  readonly keyMetricEn: string;
  readonly image: string;
  readonly phase: "preparation" | "finishing" | "packaging" | "safety_export";
  readonly phaseLabel: string;
  readonly phaseLabelEn: string;
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
  taglineId: "Presisi di Setiap Rajutan",
  experienceSince: "2018",
  incorporatedYear: "2023",
  location: "Ciamis, Jawa Barat, Indonesia",
  contact: {
    person: "Mr. Fakhrudin (Mr. Aming)",
    email: "office@sinliecahayamatahari.co.id",
    secondaryEmail: "aminglie123@gmail.com",
    // Configurable phone & WhatsApp fields. Guarded by isVerified flag to prevent unverified links.
    phone: {
      number: "+62 852 2032 7188",
      display: "+62 852 2032 7188",
      raw: "6285220327188",
      isVerified: true,
    },
    whatsapp: {
      number: "+62 852 2032 7188",
      display: "+62 852 2032 7188",
      raw: "6285220327188",
      isVerified: true,
    },
    address:
      "Jl. Otto Iskandardinata, Dusun Desa RT. 008 RW. 003, Desa/Kelurahan Handapherang, Kec. Cijeungjing, Kab. Ciamis, Provinsi Jawa Barat, Kode Pos: 46271",
    otherAddress:
      "Jl. Terusan Cipatik-Soreang, Desa/Kelurahan Pataruman, Kec. Cihampelas, Kab. Bandung Barat, Provinsi Jawa Barat, Kode Pos: 40562",
    operatingHours: "Senin - Jumat: 08:00 - 17:00 WIB",
    operatingHoursEn: "Monday - Friday: 08:00 - 17:00 WIB",
  },
  facilities: [
    {
      id: "ciamis",
      type: "main",
      label: "Fasilitas Utama",
      labelEn: "Main Facility",
      badge: "Pabrik Utama",
      badgeEn: "Main Plant",
      name: "Fasilitas Manufaktur Ciamis",
      nameEn: "Ciamis Manufacturing Facility",
      address:
        "Jl. Otto Iskandardinata, Dusun Desa RT. 008 RW. 003, Desa/Kelurahan Handapherang, Kec. Cijeungjing, Kab. Ciamis, Provinsi Jawa Barat, Kode Pos: 46271",
      city: "Ciamis, Jawa Barat",
      postalCode: "46271",
      googleMapsQuery:
        "Jl. Otto Iskandardinata, Handapherang, Kec. Cijeungjing, Kabupaten Ciamis, Jawa Barat 46271",
      embedQuery:
        "Jl. Otto Iskandardinata, Handapherang, Kec. Cijeungjing, Kabupaten Ciamis, Jawa Barat 46271",
    },
    {
      id: "bandung-barat",
      type: "other",
      label: "Lokasi Lainnya",
      labelEn: "Other Location",
      badge: "Lokasi Lainnya",
      badgeEn: "Other Location",
      name: "Lokasi Bandung Barat",
      nameEn: "West Bandung Location",
      address:
        "Jl. Terusan Cipatik-Soreang, Desa/Kelurahan Pataruman, Kec. Cihampelas, Kab. Bandung Barat, Provinsi Jawa Barat, Kode Pos: 40562",
      city: "Bandung Barat, Jawa Barat",
      postalCode: "40562",
      googleMapsQuery:
        "Jl. Terusan Cipatik-Soreang, Pataruman, Cihampelas, Kabupaten Bandung Barat, Jawa Barat 40562",
      embedQuery:
        "Jl. Terusan Cipatik-Soreang, Pataruman, Cihampelas, Kabupaten Bandung Barat, Jawa Barat 40562",
    },
  ],
  // Configurable operational capacity
  productionCapacity: {
    value: "Sesuai Pesanan",
    valueEn: "Tailored to Order",
    unit: "Kapasitas Fleksibel",
    unitEn: "Flexible Capacity",
  },
} as const;

export const NAV_LINKS = [
  { label: "Tentang Kami", labelEn: "About Us", href: "#about" },
  { label: "Jangkauan Pasar", labelEn: "Markets", href: "#markets" },
  { label: "Showroom", labelEn: "Showroom", href: "#showroom" },
  { label: "Kategori Produk", labelEn: "Products", href: "#products" },
  { label: "Kapabilitas Pabrik", labelEn: "Capabilities", href: "#capabilities" },
  { label: "Proses Produksi", labelEn: "Process", href: "#process" },
  { label: "FAQ B2B", labelEn: "FAQ", href: "#faq" },
  { label: "Kontak", labelEn: "Contact", href: "#contact" },
] as const;

export const COMPANY_STATS: readonly StatItem[] = [
  {
    id: "capacity",
    value: "Sesuai Pesanan",
    valueEn: "Custom to Order",
    label: "Kapasitas Produksi",
    labelEn: "Production Capacity",
    description:
      "Kapasitas produksi fleksibel yang dapat disesuaikan dengan volume, spesifikasi, dan kebutuhan pesanan pemesan.",
    descriptionEn:
      "Flexible production capacity tailored to client order volume, specifications, and requirements.",
  },
  {
    id: "experience",
    value: "2018",
    valueEn: "2018",
    label: "Pengalaman Industri Kaos Kaki",
    labelEn: "Sock Industry Experience",
    description:
      "Pengalaman di industri kaos kaki sejak 2018, dengan entitas legal PT. Sinlie Cahaya Matahari berdiri pada 2023.",
    descriptionEn:
      "With experience in the sock industry since 2018, legally established as PT. Sinlie Cahaya Matahari in 2023.",
  },
  {
    id: "markets",
    value: "Domestik & Ekspor",
    valueEn: "Domestic & Export",
    label: "Jangkauan Pasar",
    labelEn: "Target Markets",
    description:
      "Melayani pasar domestik dan internasional, dengan pesanan ekspor terutama menjangkau Amerika Serikat dan Eropa.",
    descriptionEn:
      "Serving domestic and international markets, with export orders primarily reaching the United States and Europe.",
  },
  {
    id: "quality",
    value: "Standar AQL",
    valueEn: "AQL Standards",
    label: "Kendali Mutu (QC)",
    labelEn: "Quality Control (QC)",
    description:
      "Fungsi Quality Control terstruktur untuk memastikan kesesuaian produk dengan mengacu pada pedoman standar AQL.",
    descriptionEn:
      "Structured Quality Control function ensuring product compliance in reference to AQL standard guidelines.",
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
      "Dibuat dengan benang pilihan ekstra lembut, elastisitas fleksibel, serta opsi pola rajutan yang nyaman untuk kulit sensitif bayi.",
    descriptionEn:
      "Crafted with ultra-soft selected yarns, flexible elasticity, and gentle knit patterns tailored for delicate infant skin.",
    highlights: [
      "Material Lembut & Nyaman",
      "Elastisitas Fleksibel Tanpa Bekas",
      "Opsi Kustomisasi Desain & Warna",
    ],
    highlightsEn: [
      "Ultra-soft & Gentle Material",
      "Flexible Non-Marking Elasticity",
      "Custom Pattern & Color Options",
    ],
    materialComposition:
      "Komposisi benang disesuaikan dengan kebutuhan pesanan (katun, spandex, elastik).",
    materialCompositionEn:
      "Yarn composition tailored to order specifications (cotton, spandex, elastic).",
    image: "/images/products_baby-socks.webp",
  },
  {
    id: "kids-socks",
    title: "Kaus Kaki Anak & Sekolah",
    titleEn: "Kids & School Socks",
    segment: "kids",
    needleCounts: ["108N", "144N"],
    description:
      "Konstruksi rajutan berdaya tahan baik untuk aktivitas harian anak dan sekolah. Menyerap keringat dengan opsi variasi pola dan warna.",
    descriptionEn:
      "Durable knit construction designed for active daily routines and school uniforms. Breathable with versatile colorway options.",
    highlights: [
      "Rajutan Tahan Gesekan",
      "Sirkulasi Udara Nyaman",
      "Pilihan Warna Seragam & Pola Kustom",
    ],
    highlightsEn: [
      "Friction-Resistant Knit Structure",
      "Comfortable Daily Breathability",
      "Uniform Colors & Custom Patterns",
    ],
    materialComposition:
      "Komposisi benang disesuaikan dengan kebutuhan pesanan (katun, spandex, elastik).",
    materialCompositionEn:
      "Yarn composition tailored to order specifications (cotton, spandex, elastic).",
    image: "/images/products_kids-school-socks.webp",
  },
  {
    id: "ladies-socks",
    title: "Kaus Kaki Wanita",
    titleEn: "Ladies Socks",
    segment: "ladies",
    needleCounts: ["144N", "168N", "200N"],
    description:
      "Variasi model ankle, hidden, crew, dan model fesyen dengan rajutan rapi, kenyamanan fitting pas di kaki, dan sirkulasi udara baik.",
    descriptionEn:
      "Versatile ankle, hidden, crew, and fashion models featuring clean knit textures, comfortable contour fitting, and good ventilation.",
    highlights: [
      "Model Ankle, Hidden & Crew",
      "Finishing Rapi & Nyaman",
      "Pilihan Tekstur & Ketebalan Variatif",
    ],
    highlightsEn: [
      "Ankle, Hidden & Crew Models",
      "Neat & Comfortable Finishing",
      "Versatile Texture & Weight Options",
    ],
    materialComposition:
      "Komposisi benang disesuaikan dengan kebutuhan pesanan (katun, spandex, elastik).",
    materialCompositionEn:
      "Yarn composition tailored to order specifications (cotton, spandex, elastic).",
    image: "/images/products_ladies-socks.webp",
  },
  {
    id: "mens-socks",
    title: "Kaus Kaki Pria & Formal",
    titleEn: "Men's Classic Socks",
    segment: "mens",
    needleCounts: ["144N", "168N"],
    description:
      "Kaus kaki formal dan klasik dengan kerapatan rajutan teratur, elastisitas mantap, serta kenyamanan penggunaan sepanjang hari.",
    descriptionEn:
      "Classic and formal socks featuring uniform knit gauge, dependable elastic hold, and reliable all-day comfort.",
    highlights: [
      "Fitting Tumit Pas & Ergonomis",
      "Bagian Cuff Elastis & Rapi",
      "Warna Formal & Bisnis Konsisten",
    ],
    highlightsEn: [
      "Snug & Ergonomic Heel Contours",
      "Neat & Dependable Elastic Cuff",
      "Consistent Business & Formal Colors",
    ],
    materialComposition:
      "Komposisi benang disesuaikan dengan kebutuhan pesanan (katun, spandex, elastik).",
    materialCompositionEn:
      "Yarn composition tailored to order specifications (cotton, spandex, elastic).",
    image: "/images/products_mens-classic-socks.webp",
  },
  {
    id: "sport-socks",
    title: "Kaus Kaki Olahraga & Athletic",
    titleEn: "Athletic & Sport Socks",
    segment: "athletic",
    needleCounts: ["144N", "168N"],
    description:
      "Kaus kaki aktivitas aktif dan olahraga dengan opsi bantalan rajut (cushioning) serta daya elastisitas yang mendukung pergerakan kaki.",
    descriptionEn:
      "Active and sport socks with optional knit cushioning and resilient elasticity supporting dynamic foot movement.",
    highlights: [
      "Opsi Bantalan Telapak (Cushion)",
      "Dukungan Elastisitas Lengkung Kaki",
      "Konstruksi Benang Kuat & Fleksibel",
    ],
    highlightsEn: [
      "Optional Sole Cushioning",
      "Elastic Arch Support Contours",
      "Resilient & Flexible Yarn Construction",
    ],
    materialComposition:
      "Komposisi benang disesuaikan dengan kebutuhan pesanan (katun, spandex, elastik).",
    materialCompositionEn:
      "Yarn composition tailored to order specifications (cotton, spandex, elastic).",
    image: "/images/products_athletic_sport_socks_v3.webp",
  },
  {
    id: "custom-socks",
    title: "Kaus Kaki Spesifikasi Kustom",
    titleEn: "Custom Specification Socks",
    segment: "custom",
    needleCounts: ["144N", "168N", "200N"],
    description:
      "Manufaktur kaus kaki yang dapat disesuaikan dengan kebutuhan spesifik pelanggan, mulai dari desain pola rajutan, komposisi bahan, hingga opsi pengemasan.",
    descriptionEn:
      "Sock manufacturing adaptable to specific customer requirements, encompassing knit patterns, material compositions, and packaging options.",
    highlights: [
      "Desain Motif & Pola Rajut Kustom",
      "Penyesuaian Komposisi Bahan",
      "Pilihan Pengemasan Sesuai Kebutuhan",
    ],
    highlightsEn: [
      "Custom Knit Pattern & Design",
      "Tailored Material Composition",
      "Packaging Options per Requirement",
    ],
    materialComposition:
      "Komposisi bahan fleksibel sesuai kesepakatan pesanan (katun, spandex, elastik, dsb.).",
    materialCompositionEn:
      "Flexible material composition per order agreement (cotton, spandex, elastic, etc.).",
    image: "/images/products_custom_specification_socks.webp",
  },
];

export const SHOWROOM_ITEMS: readonly ShowroomItem[] = [
  {
    id: "showroom-wall-display",
    title: "Display Dinding Sampel Kaus Kaki",
    titleEn: "Factory Wall Display & Retail Racks",
    subtitle: "Rangkaian Sampel Kaus Kaki Bayi & Anak Ritel",
    subtitleEn: "Baby & Children Retail Packaging Display",
    description:
      "Area display gantung di showroom pabrik Ciamis yang memamerkan puluhan model kaus kaki bayi dan anak lengkap dengan gantungan dan rider card siap display ritel.",
    descriptionEn:
      "Wall display grid in our Ciamis showroom showcasing dozens of baby and children sock models equipped with retail-ready header cards and hanger hooks.",
    badge: "Display Dinding Showroom",
    badgeEn: "Showroom Wall Display",
    image: "/images/3_showroom/showroom_1.webp",
    width: 1280,
    height: 960,
    tags: ["Display Ritel", "Hanger Hook", "Rider Card"],
    tagsEn: ["Retail Display", "Hanger Hook", "Rider Card"],
  },
  {
    id: "showroom-gift-sets",
    title: "Koleksi Gift Set & Pre-Walker",
    titleEn: "Gift Sets & Pre-Walker Showcase",
    subtitle: "Display Meja Presentasi Sampel Kunjungan Buyer",
    subtitleEn: "Buyer Presentation Table Display",
    description:
      "Presentasi sampel kaus kaki pre-walker bersol lembut serta set kemasan multi-pack bertema untuk referensi buyer dan mitra ritel internasional.",
    descriptionEn:
      "Presentation of soft-sole pre-walker booties and themed multi-pack sets on display tables for visiting buyers and global retail partners.",
    badge: "Presentasi Meja Sampel",
    badgeEn: "Sample Table Presentation",
    image: "/images/3_showroom/showroom_2.jpg",
    width: 3200,
    height: 2400,
    tags: ["Pre-Walker", "Gift Set", "Soft Sole"],
    tagsEn: ["Pre-Walker", "Gift Set", "Soft Sole"],
  },
  {
    id: "showroom-multi-packs",
    title: "Kemasan Ritel & Penataan Multi-Pack",
    titleEn: "Multi-Pack Retail Packaging Formats",
    subtitle: "Standar Kemasan Ekspor & Hanger Card",
    subtitleEn: "Export Packaging & Hanger Card Formats",
    description:
      "Contoh kemasan multi-pack bermotif bordir dan berjenjang ukuran (0-3m, 0-6m, 3-12m) dengan gantungan display standar pasar ekspor internasional.",
    descriptionEn:
      "Export-grade multi-packs featuring embroidered motifs and age-tier sizing (0-3m, 0-6m, 3-12m) complete with retail hanging cards and barcodes.",
    badge: "Kemasan Ritel Ekspor",
    badgeEn: "Export Retail Pack",
    image: "/images/3_showroom/showroom_3.jpg.jpeg",
    width: 1280,
    height: 960,
    tags: ["Multi-Pack", "Label Barcode", "Standar Ekspor"],
    tagsEn: ["Multi-Pack", "Barcode Label", "Export Grade"],
  },
];

export const PRODUCT_GALLERY_ITEMS: readonly ProductGalleryItem[] = [
  {
    id: "gal-sport-underworks",
    title: "Kaus Kaki Olahraga & Athletic",
    titleEn: "Athletic & Sport Socks",
    image: "/images/2_products/gallery_sport_underworks.webp",
    width: 960,
    height: 1280,
  },
  {
    id: "gal-colorful-flatlay",
    title: "Kaus Kaki Motif Warna-Warni",
    titleEn: "Colorful Patterned Crew Socks",
    image: "/images/2_products/gallery_colorful_flatlay.webp",
    width: 1400,
    height: 933,
  },
  {
    id: "gal-baby-booties",
    title: "Kaus Kaki Sepatu Bayi Pre-Walker",
    titleEn: "Baby Pre-Walker Bootie Socks",
    image: "/images/2_products/baby_shock.png",
    width: 1448,
    height: 1086,
  },
  {
    id: "gal-white-purple-sport",
    title: "Kaus Kaki Athletic White & Stripe",
    titleEn: "White Athletic Socks with Accent Stripes",
    image: "/images/2_products/gallery_white_purple_sport.webp",
    width: 1400,
    height: 933,
  },
  {
    id: "gal-baby-collection",
    title: "Koleksi Kaus Kaki Bayi & Balita",
    titleEn: "Baby & Toddler Combed Cotton Socks",
    image: "/images/2_products/4_prod.png",
    width: 1448,
    height: 1086,
  },
  {
    id: "gal-three-part",
    title: "Koleksi Seri Kaus Kaki",
    titleEn: "Three-Part Sock Collection Series",
    image: "/images/2_products/gallery_three_part_collection.webp",
    width: 632,
    height: 836,
  },
  {
    id: "gal-mens-classic",
    title: "Kaus Kaki Pria & Formal Klasik",
    titleEn: "Men's Classic & Formal Socks",
    image: "/images/2_products/gallery_mens_classic.webp",
    width: 496,
    height: 550,
  },
  {
    id: "gal-ladies-fashion",
    title: "Kaus Kaki Wanita & Fashion",
    titleEn: "Women's Daily & Fashion Socks",
    image: "/images/2_products/gallery_ladies_socks.webp",
    width: 508,
    height: 458,
  },
  {
    id: "gal-kids-school",
    title: "Kaus Kaki Anak & Sekolah",
    titleEn: "Kids & School Uniform Socks",
    image: "/images/2_products/gallery_kids_school.webp",
    width: 508,
    height: 458,
  },
];

export const CAPABILITIES: readonly CapabilityItem[] = [
  {
    id: "sock-manufacturing",
    title: "Keahlian Manufaktur Kaos Kaki",
    titleEn: "Dedicated Sock Manufacturing Expertise",
    description:
      "Fokus pada proses manufaktur kaos kaki berkualitas dengan lini mesin rajut otomatis terkomputerisasi, tegangan rajut presisi, dan kontrol cermat.",
    descriptionEn:
      "Focused on high-quality sock manufacturing powered by automated computerized knitting lines, uniform stitch tension, and strict process control.",
    iconName: "Cpu",
    badgeText: "Mesin Otomatis SCM",
    badgeTextEn: "Automated Knitting Lines",
    image: "/images/4_capabilities/images_1.webp",
    specs: [
      "Fasilitas mesin rajut otomatis terkomputerisasi",
      "Kerapatan dan dimensi rajutan seragam antar batch",
      "Dukungan teknis untuk berbagai kategori kaus kaki",
    ],
    specsEn: [
      "Computerized automated sock knitting machinery",
      "Consistent stitch gauge and dimensions across batches",
      "Technical accommodation for diverse sock categories",
    ],
  },
  {
    id: "max-capacity",
    title: "Kapasitas Produksi Sesuai Pesanan",
    titleEn: "Production Capacity Tailored to Order",
    description:
      "Kapasitas produksi yang dapat disesuaikan secara fleksibel dengan spesifikasi, volume, dan jadwal pesanan yang disepakati bersama.",
    descriptionEn:
      "Production capacity flexibly scalable to match agreed client specifications, order volumes, and delivery timelines.",
    iconName: "Factory",
    badgeText: "Sesuai Kebutuhan Pesanan",
    badgeTextEn: "Tailored to Order",
    image: "/images/factory/cap_capacity_scale.webp",
    specs: [
      "Volume produksi fleksibel sesuai kebutuhan pemesan",
      "Skalabilitas pesanan adaptif sesuai kesepakatan",
      "Lini produksi terpadu dengan penjadwalan transparan",
    ],
    specsEn: [
      "Flexible production volume tailored to customer orders",
      "Adaptive order scalability per agreement",
      "Integrated production lines with transparent scheduling",
    ],
  },
  {
    id: "material-flexibility",
    title: "Fleksibilitas Bahan & Benang",
    titleEn: "Material & Yarn Flexibility",
    description:
      "Gudang penyimpanan bahan baku benang (katun, spandex, elastik) terkelola rapi untuk memastikan kontinuitas pasokan dan fleksibilitas spesifikasi pesanan.",
    descriptionEn:
      "Dedicated raw material yarn storage (cotton, spandex, elastic) ensuring supply continuity and tailored material composition for every client order.",
    iconName: "Sparkles",
    badgeText: "Manajemen Bahan Baku",
    badgeTextEn: "Raw Material Supply",
    image: "/images/factory/cap_yarn_warehouse.webp",
    specs: [
      "Komposisi benang disesuaikan dengan permintaan pemesan",
      "Variasi serat katun, spandex, dan elastisitas yang adaptif",
      "Manajemen stok benang teratur untuk kontinuitas produksi",
    ],
    specsEn: [
      "Yarn compositions tailored to order specifications",
      "Versatile cotton, spandex, and elastic fiber combinations",
      "Organized yarn inventory for consistent production flow",
    ],
  },
  {
    id: "custom-packaging",
    title: "Pilihan Pengemasan & Pergudangan",
    titleEn: "Custom Packaging & Warehousing",
    description:
      "Fasilitas pergudangan dan lini pengemasan fleksibel untuk mendukung penataan master karton distribusi ekspor maupun kemasan ritel siap jual.",
    descriptionEn:
      "Flexible packaging lines and finished goods warehousing supporting export master cartons, custom boxing, and retail-ready presentation.",
    iconName: "PackageCheck",
    badgeText: "Gudang & Distribusi",
    badgeTextEn: "Packaging & Dispatch",
    image: "/images/factory/cap_packaging_warehouse.webp",
    specs: [
      "Pilihan kemasan ritel (hanger, card, polybag) atau grosir",
      "Penataan master karton standar ekspor dan distribusi",
      "Area pergudangan terorganisir sebelum proses ekspedisi",
    ],
    specsEn: [
      "Retail packaging options (hanger, card, polybag) or wholesale",
      "Export-grade master carton arrangements and labeling",
      "Organized staging warehouse prior to final dispatch",
    ],
  },
];

export const PRODUCTION_PROCESS: readonly ProcessStep[] = [
  {
    step: "yarn-preparation",
    stepNumber: 1,
    title: "Persiapan Benang & Kontrol Lot",
    titleEn: "Yarn Preparation & Lot Control",
    subtitle: "Inspeksi Kualitas & Verifikasi Lot Benang",
    subtitleEn: "Raw Yarn Lot Quality & Verification",
    description:
      "Pengendalian mutu dan verifikasi lot benang sebelum masuk ke lini rajut untuk memastikan konsistensi warna, elastisitas, dan spesifikasi serat.",
    descriptionEn:
      "Strict lot verification and yarn tension staging before knitting to ensure batch-wide color consistency and fiber elasticity.",
    iconName: "Boxes",
    keyMetric: "Verifikasi Lot & Spesifikasi Benang",
    keyMetricEn: "Lot Control & Spec Verification",
    image: "/images/5_process/1_yarn_prepartion_lot_control.png",
    phase: "preparation",
    phaseLabel: "Persiapan & Perajutan",
    phaseLabelEn: "Preparation & Knitting",
  },
  {
    step: "knitting",
    stepNumber: 2,
    title: "Perajutan (Knitting)",
    titleEn: "Circular Knitting",
    subtitle: "Mesin Rajut Silinder Otomatis Terkomputerisasi",
    subtitleEn: "Computerized Circular Knitting Lines",
    description:
      "Proses perajutan otomatis terkomputerisasi dengan kerapatan jarum presisi sesuai pola desain dan spesifikasi teknis pesanan.",
    descriptionEn:
      "Automated computerized knitting process maintaining precise needle tension according to technical pattern specifications.",
    iconName: "Cpu",
    keyMetric: "Mesin Rajut Silinder Otomatis",
    keyMetricEn: "Computerized Cylinder Knitting",
    image: "/images/5_process/2_knitting.png",
    phase: "preparation",
    phaseLabel: "Persiapan & Perajutan",
    phaseLabelEn: "Preparation & Knitting",
  },
  {
    step: "check-goods",
    stepNumber: 3,
    title: "Pemeriksaan Hasil Rajut (Check Goods)",
    titleEn: "Initial Goods Inspection (Check Goods)",
    subtitle: "Inspeksi Visual & Struktur Rajutan Mentah",
    subtitleEn: "Raw Sock Visual & Structural Check",
    description:
      "Inspeksi visual dan fisik menyeluruh terhadap hasil rajutan mentah untuk mendeteksi cacat rajut, lubang, atau benang lepas sebelum proses jahit.",
    descriptionEn:
      "Comprehensive physical and visual inspection of raw knitted socks to identify fabric defects or dropped stitches before toe linking.",
    iconName: "CheckSquare",
    keyMetric: "Inspeksi Kaus Kaki Mentah",
    keyMetricEn: "Standard Raw Goods Inspection",
    image: "/images/5_process/3_check_goods.png",
    phase: "preparation",
    phaseLabel: "Persiapan & Perajutan",
    phaseLabelEn: "Preparation & Knitting",
  },
  {
    step: "rosso-closure",
    stepNumber: 4,
    title: "Jahit Ujung Jari Rosso (Rosso Toe Closure)",
    titleEn: "Rosso Toe Closure",
    subtitle: "Penyambungan Ujung Kaus Kaki Presisi",
    subtitleEn: "High-Precision Rosso Toe Seaming",
    description:
      "Proses penyambungan dan penutupan ujung jari kaus kaki menggunakan mesin jahit Rosso presisi tinggi untuk menghasilkan sambungan yang rata, kuat, dan nyaman.",
    descriptionEn:
      "Precision toe-seam closure using automated Rosso machinery to achieve flat, durable, and comfortable toe seams.",
    iconName: "Scissors",
    keyMetric: "Jahitan Rosso Rata & Kuat",
    keyMetricEn: "Flat & Durable Rosso Seam",
    image: "/images/5_process/4_rosso_toe_closure.png",
    phase: "finishing",
    phaseLabel: "Finishing & Pembentukan",
    phaseLabelEn: "Finishing & Shaping",
  },
  {
    step: "trimming-overturning",
    stepNumber: 5,
    title: "Pembersihan Sisa Benang & Pembalikan (Trimming & Overturning)",
    titleEn: "Floats Trimming & Overturning",
    subtitle: "Pemotongan Benang Bagian Dalam & Pembalikan Kaus Kaki",
    subtitleEn: "Thread Tail Trimming & Sock Inversion",
    description:
      "Pembersihan sisa serat benang di bagian dalam kaus kaki dengan sistem vacuum trimming, dilanjutkan pembalikan kaus kaki ke sisi luar.",
    descriptionEn:
      "Clean trimming of excess internal float threads followed by mechanical or manual sock inversion to the exterior side.",
    iconName: "RefreshCw",
    keyMetric: "Vacuum Trimming & Pembalikan Rapi",
    keyMetricEn: "Clean Trimming & Neat Inversion",
    image: "/images/5_process/5_floats_trimmings&overturning.png",
    phase: "finishing",
    phaseLabel: "Finishing & Pembentukan",
    phaseLabelEn: "Finishing & Shaping",
  },
  {
    step: "steam-setting",
    stepNumber: 6,
    title: "Penyetelan Uap (Steam Setting)",
    titleEn: "Steam Setting",
    subtitle: "Pembentukan Dimensi & Fiksasi Termal Kaus Kaki",
    subtitleEn: "Thermal Steam Boarding & Shape Fixing",
    description:
      "Pemanasan uap bertekanan terkontrol pada papan cetakan kaki (boarding) untuk mengunci ukuran, dimensi, dan kerapihan kaus kaki.",
    descriptionEn:
      "Controlled steam boarding on ergonomic foot forms to set fabric memory, stabilize dimensions, and ensure uniform shape.",
    iconName: "Flame",
    keyMetric: "Fiksasi Dimensi & Bentuk Termal",
    keyMetricEn: "Thermal Dimensional Setting",
    image: "/images/5_process/6_steam_setting.png",
    phase: "finishing",
    phaseLabel: "Finishing & Pembentukan",
    phaseLabelEn: "Finishing & Shaping",
  },
  {
    step: "pairing",
    stepNumber: 7,
    title: "Pencocokan Pasang (Pairing)",
    titleEn: "Pairing",
    subtitle: "Pencocokan Presisi Kaus Kaki Kiri & Kanan",
    subtitleEn: "Accurate Left & Right Pair Matching",
    description:
      "Pencocokan kaus kaki kiri dan kanan untuk memastikan keseragaman tinggi cuff, proporsi tumit, dan keselarasan motif rajut yang identik.",
    descriptionEn:
      "Pairing process ensuring identical cuff heights, heel proportions, and symmetrical pattern alignment between pairs.",
    iconName: "Copy",
    keyMetric: "Kesesuaian Presisi Pasangan 100%",
    keyMetricEn: "100% Symmetrical Pairing",
    image: "/images/5_process/7_pairing.jpg",
    phase: "packaging",
    phaseLabel: "Pencocokan & Pengemasan",
    phaseLabelEn: "Pairing & Packaging",
  },
  {
    step: "labeling-accessories",
    stepNumber: 8,
    title: "Pemasangan Label & Aksesori (Labeling & Accessories)",
    titleEn: "Labeling / Accessories",
    subtitle: "Pemasangan Rider Card, Hangtag & Barcode",
    subtitleEn: "Rider Card, Hangtag & Retail Tag Attachment",
    description:
      "Pemasangan kelengkapan identitas produk seperti rider card, hanger kait plastik, hangtag, dan label barcode sesuai spesifikasi buyer.",
    descriptionEn:
      "Application of brand packaging accessories including rider cards, plastic hooks, hangtags, and barcode labels per buyer guidelines.",
    iconName: "Tag",
    keyMetric: "Akurasi Penandaan & Barcode",
    keyMetricEn: "Accurate Retail Tagging & Barcode",
    image: "/images/5_process/8_labeling.png",
    phase: "packaging",
    phaseLabel: "Pencocokan & Pengemasan",
    phaseLabelEn: "Pairing & Packaging",
  },
  {
    step: "packing",
    stepNumber: 9,
    title: "Pengemasan Polybag (Packing)",
    titleEn: "Packing",
    subtitle: "Pengemasan Polybag Satuan & Lusinan",
    subtitleEn: "Individual & Multi-Pair Polybag Packing",
    description:
      "Pengemasan kaus kaki ke dalam master polybag atau kantong kemasan satuan sesuai instruksi pesanan untuk menjaga kebersihan produk.",
    descriptionEn:
      "Enclosing paired socks into individual or dozen master polybags per client packaging instructions to preserve pristine hygiene.",
    iconName: "Package",
    keyMetric: "Pengemasan Bersih & Rapi",
    keyMetricEn: "Hygienic Polybag Sealing",
    image: "/images/5_process/9_packing.jpg",
    phase: "packaging",
    phaseLabel: "Pencocokan & Pengemasan",
    phaseLabelEn: "Pairing & Packaging",
  },
  {
    step: "broken-needle-check",
    stepNumber: 10,
    title: "Pendeteksian Jarum & Logam (Metal Detector)",
    titleEn: "Broken Needle Check",
    subtitle: "Pemindaian Metal Detector Konveyor Standar Keamanan Ekspor",
    subtitleEn: "High-Sensitivity Conveyor Metal Detection Scan",
    description:
      "Setiap pasang kaus kaki yang telah dikemas dilewatkan ke mesin detektor logam konveyor untuk memastikan bebas dari serpihan jarum patah.",
    descriptionEn:
      "100% of finished packaged units pass through conveyor metal detectors to guarantee complete absence of broken needle fragments.",
    iconName: "ShieldAlert",
    keyMetric: "100% Metal Detection Scan",
    keyMetricEn: "100% Metal Detection Scan",
    image: "/images/5_process/10_needle_detector.jpg",
    phase: "safety_export",
    phaseLabel: "Inspeksi Keamanan & Ekspor",
    phaseLabelEn: "Safety Check & Export Logistics",
  },
  {
    step: "assortment-cartoning",
    stepNumber: 11,
    title: "Sortir & Pengepakan Karton (Assortment & Cartoning)",
    titleEn: "Assortment & Cartoning",
    subtitle: "Pengepakan Karton Ekspor & Pemberian Shipping Mark",
    subtitleEn: "Master Carton Boxing & Shipping Mark Staging",
    description:
      "Penyusunan dan pengepakan kaus kaki ke dalam karton ekspor tebal (corrugated box) dengan label shipping mark, nomor lot, dan rasio ukuran yang teratur.",
    descriptionEn:
      "Consolidation of packaged dozens into heavy-duty export master cartons with precise shipping marks, gross weight, and packing slips.",
    iconName: "Archive",
    keyMetric: "Karton Standar Ekspor Berlapis",
    keyMetricEn: "Heavy-Duty Export Corrugated Cartons",
    image: "/images/5_process/11_assortment&cartonning.jpeg",
    phase: "safety_export",
    phaseLabel: "Inspeksi Keamanan & Ekspor",
    phaseLabelEn: "Safety Check & Export Logistics",
  },
  {
    step: "finished-goods-storage",
    stepNumber: 12,
    title: "Gudang Barang Jadi Siap Ekspor (Finished Goods)",
    titleEn: "Finished Goods Storage Pending Export",
    subtitle: "Pergudangan Bersih & Paletisasi Siap Muat Petikemas",
    subtitleEn: "Secure Climate-Controlled Staging for Container Dispatch",
    description:
      "Penyimpanan karton produk jadi di atas palet kayu dalam gudang yang bersih, kering, dan berventilasi baik hingga proses muat kontainer ekspor.",
    descriptionEn:
      "Organized palletized storage of export cartons in a dry, secure warehouse staging area awaiting container stuffing and dispatch.",
    iconName: "Warehouse",
    keyMetric: "Pergudangan Bersih & Palet Ekspor",
    keyMetricEn: "Palletized Clean Staging Warehouse",
    image: "/images/5_process/12_finished_goods.webp",
    phase: "safety_export",
    phaseLabel: "Inspeksi Keamanan & Ekspor",
    phaseLabelEn: "Safety Check & Export Logistics",
  },
];

export const QUALITY_ASSURANCE_ITEMS: readonly QAFeature[] = [
  {
    title: "Inspeksi Kerapatan & Ketegangan Rajut",
    titleEn: "Knit Density & Stitch Inspection",
    description:
      "Pengecekan keseragaman tegangan rajutan agar setiap pasang kaus kaki memiliki elastisitas dan kerapatan yang konsisten.",
    descriptionEn:
      "Verification of stitch tension consistency ensuring every sock pair maintains uniform elasticity and density.",
    iconName: "Sliders",
    protocolTag: "Kontrol Rajut",
    protocolTagEn: "Knit Inspection",
    image: "/images/quality_inspection.webp",
  },
  {
    title: "Verifikasi Dimensi & Ukuran",
    titleEn: "Dimensional & Sizing Verification",
    description:
      "Pengukuran panjang telapak dan fitting pergelangan untuk memastikan kesesuaian ukuran dengan spesifikasi pesanan.",
    descriptionEn:
      "Measurement of sole length and ankle fit ensuring sizing adherence to customer order specifications.",
    iconName: "Ruler",
    protocolTag: "Akurasi Ukuran",
    protocolTagEn: "Sizing Accuracy",
    image: "/images/quality_control_worker.webp",
  },
  {
    title: "Pemeriksaan Visual Produk",
    titleEn: "Visual Product Inspection",
    description:
      "Pemeriksaan visual untuk memisahkan produk yang tidak memenuhi standar kerapian jahitan atau cacat fisik permukaan.",
    descriptionEn:
      "Visual inspection to segregate items exhibiting stitching irregularities or physical surface variances.",
    iconName: "Eye",
    protocolTag: "Pemeriksaan Visual",
    protocolTagEn: "Visual Check",
    image: "/images/quality_inspection.webp",
  },
  {
    title: "Pendekatan Standar AQL",
    titleEn: "AQL Standard Approach",
    description:
      "Penerapan metode kendali mutu dengan mengacu pada pedoman Acceptance Quality Limit (AQL) untuk konsistensi kualitas batch.",
    descriptionEn:
      "Quality control procedures operating in reference to Acceptance Quality Limit (AQL) guidelines for batch quality consistency.",
    iconName: "CheckCircle2",
    protocolTag: "Pedoman AQL",
    protocolTagEn: "AQL Guidelines",
    image: "/images/quality_control_worker.webp",
  },
];

export const B2B_FAQS: readonly B2BFAQ[] = [
  {
    question: "Apakah spesifikasi dan komposisi bahan kaos kaki dapat dikustomisasi?",
    questionEn: "Can sock specifications and material compositions be customized?",
    answer:
      "Ya. PT. Sinlie Cahaya Matahari menyediakan solusi manufaktur yang fleksibel. Spesifikasi produk, ukuran, model, serta komposisi bahan (katun, spandex, elastik) dapat didiskusikan dan disesuaikan menurut kebutuhan produk pelanggan.",
    answerEn:
      "Yes. PT. Sinlie Cahaya Matahari provides flexible manufacturing solutions. Product specifications, sizing, styles, and material compositions (cotton, spandex, elastic) can be discussed and tailored to your product requirements.",
    tag: "Kustomisasi Produk",
    tagEn: "Product Customization",
  },
  {
    question: "Pasar dan negara mana saja yang dilayani oleh PT. Sinlie Cahaya Matahari?",
    questionEn: "Which markets and countries are served by PT. Sinlie Cahaya Matahari?",
    answer:
      "Kami melayani pasar domestik Indonesia serta pasar internasional, dengan pesanan ekspor yang terutama menjangkau Amerika Serikat dan Eropa. Destinasi pengiriman lainnya disesuaikan dengan pesanan yang masuk.",
    answerEn:
      "We serve both domestic and international markets, with export orders primarily reaching the United States and Europe. Shipments to other destinations depend on incoming customer orders.",
    tag: "Jangkauan Pasar",
    tagEn: "Target Markets",
  },
  {
    question: "Berapa kapasitas produksi di pabrik SCM?",
    questionEn: "What is the production capacity at SCM's facility?",
    answer:
      "Kapasitas produksi di PT. Sinlie Cahaya Matahari dapat disesuaikan secara fleksibel dengan kebutuhan, spesifikasi teknis, dan jadwal pesanan yang disepakati bersama pelanggan.",
    answerEn:
      "Production capacity at PT. Sinlie Cahaya Matahari is flexibly scalable to match client requirements, technical specifications, and agreed order schedules.",
    tag: "Kapasitas Produksi",
    tagEn: "Production Capacity",
  },
  {
    question: "Apakah tersedia opsi kustomisasi pengemasan produk?",
    questionEn: "Are customizable packaging options available?",
    answer:
      "Ya. Pilihan pengemasan dapat disesuaikan dengan kebutuhan pelanggan, baik dalam format lusinan standar, kemasan khusus, maupun penataan karton distribusi.",
    answerEn:
      "Yes. Packaging options can be tailored to customer requirements, whether in standard dozen formats, custom packaging, or distribution master carton arrangements.",
    tag: "Pilihan Pengemasan",
    tagEn: "Packaging Options",
  },
  {
    question: "Bagaimana standar kendali mutu (Quality Control) yang diterapkan?",
    questionEn: "What quality control standards are implemented?",
    answer:
      "Kami menjalankan fungsi Quality Control (QC) terstruktur dengan mengacu pada pedoman standar AQL (Acceptance Quality Limit). Pemeriksaan meliputi kerapatan rajutan, akurasi dimensi ukuran, dan inspeksi visual sebelum tahap pengemasan.",
    answerEn:
      "We operate a structured Quality Control (QC) function with reference to AQL (Acceptance Quality Limit) standards. Inspections cover knit density, dimensional sizing accuracy, and visual inspection before packaging.",
    tag: "Kendali Mutu (QC)",
    tagEn: "Quality Control",
  },
  {
    question: "Bagaimana cara mengajukan konsultasi atau permintaan penawaran (RFQ)?",
    questionEn: "How can I request a consultation or submit a Request for Quotation (RFQ)?",
    answer:
      "Anda dapat mengisi formulir RFQ yang tersedia di website atau menghubungi kami melalui email resmi. Tim kami akan mempelajari spesifikasi kebutuhan produk Anda dan memberikan respons tindak lanjut.",
    answerEn:
      "You can complete the RFQ form on our website or contact us via our official email. Our team will review your product requirements and follow up with you.",
    tag: "Konsultasi & RFQ",
    tagEn: "Consultation & RFQ",
  },
];
