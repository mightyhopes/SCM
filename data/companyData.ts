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
  readonly dimensions: string;
  readonly image: string;
  readonly caption: string;
  readonly captionEn: string;
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
    address: "Jl. Otista Handapherang, Kec. Cijeungjing, Kabupaten Ciamis, Jawa Barat 46271",
    operatingHours: "Senin - Jumat: 08:00 - 17:00 WIB",
    operatingHoursEn: "Monday - Friday: 08:00 - 17:00 WIB",
  },
  // Configurable operational capacity - client confirmed maximum capacity
  productionCapacity: {
    value: "1.000.000",
    valueEn: "1,000,000",
    unit: "Lusin / Bulan",
    unitEn: "Dozen / Month",
  },
} as const;

export const NAV_LINKS = [
  { label: "Tentang Kami", labelEn: "About Us", href: "#about" },
  { label: "Jangkauan Pasar", labelEn: "Markets", href: "#markets" },
  { label: "Kategori Produk", labelEn: "Products", href: "#products" },
  { label: "Kapabilitas Pabrik", labelEn: "Capabilities", href: "#capabilities" },
  { label: "Proses Produksi", labelEn: "Process", href: "#process" },
  { label: "Kendali Mutu", labelEn: "Quality", href: "#quality" },
  { label: "FAQ B2B", labelEn: "FAQ", href: "#faq" },
  { label: "Kontak", labelEn: "Contact", href: "#contact" },
] as const;

export const COMPANY_STATS: readonly StatItem[] = [
  {
    id: "capacity",
    value: "1.000.000",
    valueEn: "1,000,000",
    label: "Kapasitas Maksimum Produksi (Lusin / Bulan)",
    labelEn: "Maximum Production Capacity (Dozen / Month)",
    description:
      "Kapasitas maksimum operasional, dengan realisasi produksi menyesuaikan spesifikasi produk dan kebutuhan pesanan.",
    descriptionEn:
      "Maximum operational production capacity, subject to product specifications and production requirements.",
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

export const CAPABILITIES: readonly CapabilityItem[] = [
  {
    id: "sock-manufacturing",
    title: "Keahlian Manufaktur Kaos Kaki",
    titleEn: "Dedicated Sock Manufacturing Expertise",
    description:
      "Fokus pada proses manufaktur kaos kaki berkualitas dengan kerapatan rajutan konsisten dan kontrol proses perakitan yang cermat.",
    descriptionEn:
      "Focused on high-quality sock manufacturing with consistent stitch tension and careful assembly process control.",
    iconName: "Cpu",
    badgeText: "Produksi Terarah",
    badgeTextEn: "Focused Production",
    image: "/images/dummy/03_production_machines.jpg",
    specs: [
      "Fokus khusus pada manufaktur produk kaos kaki",
      "Kerapatan dan dimensi rajutan seragam antar batch",
      "Dukungan teknis untuk berbagai kategori kaus kaki",
    ],
    specsEn: [
      "Dedicated focus on sock manufacturing",
      "Consistent stitch gauge and dimensions across batches",
      "Technical accommodation for diverse sock categories",
    ],
  },
  {
    id: "max-capacity",
    title: "Kapasitas Maksimum Operasional",
    titleEn: "Maximum Operational Capacity",
    description:
      "Didukung kapasitas maksimum produksi hingga 1.000.000 lusin per bulan, dengan realisasi volume menyesuaikan spesifikasi produk dan pesanan.",
    descriptionEn:
      "Supported by a maximum production capacity of up to 1,000,000 dozen socks per month, with actual output subject to product specifications and order requirements.",
    iconName: "Factory",
    badgeText: "Hingga 1 Juta Lusin/Bulan",
    badgeTextEn: "Up to 1M Dozen/Month",
    image: "/images/dummy/04_production_floor.jpg",
    specs: [
      "Kapasitas maksimum operasional hingga 1.000.000 lusin/bulan",
      "Skalabilitas pesanan volume besar sesuai kesepakatan",
      "Penjadwalan produksi terencana dan transparan",
    ],
    specsEn: [
      "Maximum operational capacity up to 1,000,000 dozen/month",
      "Large-volume order scalability per agreement",
      "Planned and transparent production scheduling",
    ],
  },
  {
    id: "material-flexibility",
    title: "Fleksibilitas Bahan & Benang",
    titleEn: "Material & Yarn Flexibility",
    description:
      "Pemilihan dan kombinasi bahan benang (katun, spandex, elastik) yang dapat disesuaikan menurut spesifikasi dan target produk pelanggan.",
    descriptionEn:
      "Selective yarn material combinations (cotton, spandex, elastic) adaptable to client specifications and target product requirements.",
    iconName: "Sparkles",
    badgeText: "Bahan Fleksibel",
    badgeTextEn: "Flexible Materials",
    image: "/images/dummy/14_yarn_materials.jpg",
    specs: [
      "Komposisi benang disesuaikan dengan permintaan pemesan",
      "Variasi serat katun, spandex, dan elastisitas yang adaptif",
      "Diskusi teknis pemilihan bahan sebelum tahap produksi",
    ],
    specsEn: [
      "Yarn compositions tailored to order specifications",
      "Versatile cotton, spandex, and elastic fiber combinations",
      "Technical material consultation prior to production run",
    ],
  },
  {
    id: "custom-packaging",
    title: "Pilihan Pengemasan Kustom",
    titleEn: "Customizable Packaging Options",
    description:
      "Pilihan pengemasan dapat disesuaikan dengan kebutuhan pelanggan, baik untuk kebutuhan distribusi grosir maupun kebutuhan ritel.",
    descriptionEn:
      "Packaging options can be tailored to customer requirements, accommodating both wholesale distribution and retail specifications.",
    iconName: "PackageCheck",
    badgeText: "Kemasan Adaptif",
    badgeTextEn: "Adaptive Packaging",
    image: "/images/dummy/17_product_packaging.jpg",
    specs: [
      "Pilihan pengemasan dapat disesuaikan dengan kebutuhan pelanggan",
      "Format kemasan per lusin atau penataan karton distribusi",
      "Kerapian pengemasan sebelum proses pengiriman",
    ],
    specsEn: [
      "Packaging options can be tailored to customer requirements",
      "Per-dozen packaging or master distribution carton formats",
      "Neat presentation inspection before dispatch",
    ],
  },
];

export const PRODUCTION_PROCESS: readonly ProcessStep[] = [
  {
    step: "01",
    title: "Preparasi Bahan & Benang",
    titleEn: "Material & Yarn Preparation",
    description:
      "Penyiapan bahan baku benang katun, spandex, dan elastik sesuai spesifikasi pesanan yang telah disepakati.",
    descriptionEn:
      "Preparation of raw cotton, spandex, and elastic yarns aligned with finalized order specifications.",
    iconName: "Boxes",
    keyMetric: "Verifikasi Bahan Baku",
    keyMetricEn: "Material Verification",
    image: "/images/dummy/14_yarn_materials.jpg",
  },
  {
    step: "02",
    title: "Proses Perajutan",
    titleEn: "Knitting Process",
    description:
      "Pelaksanaan proses rajut dengan kontrol kerapatan jarum untuk membentuk pola dan dimensi kaus kaki yang rapi.",
    descriptionEn:
      "Executing the knitting process with stitch tension control to shape neat patterns and sock dimensions.",
    iconName: "Cpu",
    keyMetric: "Kontrol Kerapatan Rajut",
    keyMetricEn: "Stitch Tension Control",
    image: "/images/dummy/15_knitting_process.jpg",
  },
  {
    step: "03",
    title: "Penyambungan Jari & Finishing",
    titleEn: "Toe Linking & Finishing",
    description:
      "Penyambungan bagian ujung jari dan perlakuan finishing untuk kenyamanan pemakaian dan kerapian bentuk kaus kaki.",
    descriptionEn:
      "Toe seam linking and finishing treatment ensuring comfortable wear and neat anatomical contours.",
    iconName: "GitMerge",
    keyMetric: "Kenyamanan Sambungan",
    keyMetricEn: "Seam Finish Comfort",
    image: "/images/dummy/16_finishing_process.jpg",
  },
  {
    step: "04",
    title: "Pemeriksaan Kualitas (QC)",
    titleEn: "Quality Control (QC)",
    description:
      "Pemeriksaan fisik dan visual produk dengan mengacu pada pedoman standar AQL sebelum masuk ke tahap pengemasan.",
    descriptionEn:
      "Physical and visual inspection in reference to AQL standard guidelines prior to packaging.",
    iconName: "ShieldCheck",
    keyMetric: "Pedoman Standar AQL",
    keyMetricEn: "AQL Guideline Check",
    image: "/images/quality_inspection.webp",
  },
  {
    step: "05",
    title: "Pengemasan & Pengiriman",
    titleEn: "Packaging & Dispatch",
    description:
      "Pengemasan kaus kaki sesuai kebutuhan pelanggan serta penataan karton untuk pengiriman ke tujuan pemesan.",
    descriptionEn:
      "Packaging tailored to customer requirements and carton preparation for delivery to client destinations.",
    iconName: "Truck",
    keyMetric: "Pengemasan Kustom",
    keyMetricEn: "Custom Packaging",
    image: "/images/dummy/17_product_packaging.jpg",
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

export const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    id: "gal-1",
    title: "Lantai Produksi Mesin Rajut",
    titleEn: "Knitting Production Floor",
    category: "Fasilitas Produksi",
    categoryEn: "Production Facility",
    aspect: "landscape",
    dimensions: "1200 x 800 px",
    image: "/images/dummy/04_production_floor.jpg",
    caption: "Ilustrasi visual area mesin rajut kaus kaki otomatis.",
    captionEn: "Illustrative preview of the automated sock knitting area.",
  },
  {
    id: "gal-2",
    title: "Tekstur Rajutan & Detail Serat",
    titleEn: "Knit Texture & Fiber Details",
    category: "Detail Bahan",
    categoryEn: "Material Detail",
    aspect: "portrait",
    dimensions: "800 x 1000 px",
    image: "/images/dummy/21_knit_texture.jpg",
    caption: "Ilustrasi visual kerapatan tekstur rajut benang.",
    captionEn: "Illustrative preview of yarn knit density and texture.",
  },
  {
    id: "gal-3",
    title: "Area Finishing & Penataan Bentuk",
    titleEn: "Finishing & Boarding Station",
    category: "Proses Finishing",
    categoryEn: "Finishing Process",
    aspect: "landscape",
    dimensions: "800 x 600 px",
    image: "/images/dummy/16_finishing_process.jpg",
    caption: "Ilustrasi visual penataan bentuk dan kerapian kaus kaki.",
    captionEn: "Illustrative preview of sock shaping and neat finishing.",
  },
  {
    id: "gal-4",
    title: "Meja Pemeriksaan Kendali Mutu",
    titleEn: "Quality Control Inspection Table",
    category: "Kendali Mutu (QC)",
    categoryEn: "Quality Assurance",
    aspect: "portrait",
    dimensions: "800 x 1000 px",
    image: "/images/dummy/06_quality_inspection.jpg",
    caption: "Ilustrasi visual proses inspeksi kualitas produk kaos kaki.",
    captionEn: "Illustrative preview of sock quality inspection process.",
  },
  {
    id: "gal-5",
    title: "Area Pengemasan Produk",
    titleEn: "Product Packaging Area",
    category: "Pengemasan",
    categoryEn: "Packaging",
    aspect: "landscape",
    dimensions: "800 x 600 px",
    image: "/images/dummy/07_packing.jpg",
    caption: "Ilustrasi visual penataan dan pengemasan produk sebelum distribusi.",
    captionEn: "Illustrative preview of product packaging prior to distribution.",
  },
  {
    id: "gal-6",
    title: "Pola & Variasi Rajut",
    titleEn: "Knit Pattern Variations",
    category: "Keahlian Rajut",
    categoryEn: "Knit Craftsmanship",
    aspect: "portrait",
    dimensions: "800 x 1000 px",
    image: "/images/dummy/22_knit_pattern.jpg",
    caption: "Ilustrasi visual variasi pola dan desain motif rajutan.",
    captionEn: "Illustrative preview of versatile knit patterns and designs.",
  },
  {
    id: "gal-7",
    title: "Penyimpanan & Manajemen Stok",
    titleEn: "Warehouse & Inventory",
    category: "Gudang & Inventori",
    categoryEn: "Warehouse",
    aspect: "landscape",
    dimensions: "1200 x 800 px",
    image: "/images/dummy/18_inventory_warehouse.jpg",
    caption: "Ilustrasi visual area penataan dan penyimpanan stok.",
    captionEn: "Illustrative preview of organized storage and inventory area.",
  },
  {
    id: "gal-8",
    title: "Logistik & Distribusi Pengiriman",
    titleEn: "Dispatch & Logistics",
    category: "Logistik Pengiriman",
    categoryEn: "Logistics",
    aspect: "landscape",
    dimensions: "1200 x 800 px",
    image: "/images/dummy/23_logistics.jpg",
    caption: "Ilustrasi visual persiapan distribusi pesanan pelanggan.",
    captionEn: "Illustrative preview of order distribution and dispatch readiness.",
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
    question: "Berapa kapasitas produksi maksimum di pabrik SCM?",
    questionEn: "What is the maximum production capacity at SCM's facility?",
    answer:
      "PT. Sinlie Cahaya Matahari memiliki kapasitas operasional maksimum hingga 1.000.000 lusin kaos kaki per bulan. Realisasi volume produksi disesuaikan dengan spesifikasi teknis produk dan jadwal pesanan yang disepakati.",
    answerEn:
      "PT. Sinlie Cahaya Matahari has a maximum operational capacity of up to 1,000,000 dozen socks per month. Actual production volume depends on product specifications and agreed order schedules.",
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
