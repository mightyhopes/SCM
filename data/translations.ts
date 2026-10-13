export type Language = "id" | "en";

export interface Translations {
  nav: {
    about: string;
    products: string;
    capabilities: string;
    process: string;
    gallery: string;
    faq: string;
    contact: string;
    quote: string;
    quickConsult: string;
  };
  hero: {
    statusBadge: string;
    headlineStart: string;
    headlineHighlight: string;
    tagline: string;
    description: string;
    ctaRfq: string;
    ctaCatalog: string;
    trustMetric1: string;
    trustMetric2: string;
    trustMetric3: string;
    outputSampleLabel: string;
    outputSampleText: string;
    dockTechTitle: string;
    dockTechVal: string;
    dockTechDesc: string;
    dockQcTitle: string;
    dockQcVal: string;
    dockQcDesc: string;
    dockOemTitle: string;
    dockOemVal: string;
    dockOemDesc: string;
    dockCapacityTitle: string;
    dockCapacityVal: string;
    dockCapacityDesc: string;
  };
  stats: {
    eyebrow: string;
    title: string;
    disclaimer: string;
    confirmBadge: string;
    items: {
      capacity: { value: string; label: string; desc: string };
      experience: { value: string; label: string; desc: string };
      categories: { value: string; label: string; desc: string };
      inspection: { value: string; label: string; desc: string };
    };
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    p1: string;
    p2: string;
    badgeEst: string;
    cardFacility: string;
    officeLabel: string;
    officeTitle: string;
    teamLabel: string;
    teamTitle: string;
    strength1: string;
    strength2: string;
    strength3: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
    visionTitle: string;
    visionDesc: string;
    missionTitle: string;
    missionDesc: string;
  };
  products: {
    eyebrow: string;
    title: string;
    description: string;
    tabs: {
      all: string;
      babyKids: string;
      ladies: string;
      mensSport: string;
      custom: string;
    };
    moq: string;
    gaugeLabel: string;
    materialLabel: string;
    colorLabel: string;
    sampleBtn: string;
    customBanner: {
      tag: string;
      title: string;
      desc: string;
      btn: string;
    };
  };
  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    specLabel: string;
    barGaugeTitle: string;
    barGaugeVal: string;
    barGaugeDesc: string;
    barToeTitle: string;
    barToeVal: string;
    barToeDesc: string;
    barYarnTitle: string;
    barYarnVal: string;
    barYarnDesc: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    disclaimer: string;
  };
  quality: {
    eyebrow: string;
    title: string;
    description: string;
    qcStation: string;
    operatorRole: string;
    operatorTitle: string;
    physicalTitle: string;
    physicalSubtitle: string;
    physicalDesc: string;
    protocol1: string;
    protocol2: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    visitNotice: string;
    factoryStatus: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    boxTitle: string;
    boxSubtitle: string;
    boxDesc: string;
    boxBtn: string;
  };
  contact: {
    tag: string;
    title: string;
    description: string;
    phoneLabel: string;
    phoneHours: string;
    emailLabel: string;
    emailDesc: string;
    visitLabel: string;
    visitDesc: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailInputLabel: string;
    emailInputPlaceholder: string;
    phoneInputLabel: string;
    phoneInputPlaceholder: string;
    categoryLabel: string;
    categoryDefault: string;
    categoryCustom: string;
    volumeLabel: string;
    volumePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    privacyNotice: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
  };
  footer: {
    bio: string;
    subBio: string;
    navTitle: string;
    catTitle: string;
    contactTitle: string;
    locationLabel: string;
    locationDesc: string;
    copyright: string;
    partnerTag: string;
    backToTop: string;
  };
  rfqModal: {
    title: string;
    description: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
  };
  widget: {
    inquiry: string;
    hours: string;
    callNow: string;
    rfqBtn: string;
  };
}

export const translations: Record<Language, Translations> = {
  id: {
    nav: {
      about: "Tentang",
      products: "Produk",
      capabilities: "Kapabilitas",
      process: "Proses",
      gallery: "Galeri",
      faq: "FAQ",
      contact: "Kontak",
      quote: "Request a Quote",
      quickConsult: "Konsultasi B2B",
    },
    hero: {
      statusBadge: "INDONESIAN SOCK MANUFACTURING FACILITY",
      headlineStart: "Precision in Every",
      headlineHighlight: "Stitch.",
      tagline: "Presisi di Setiap Rajutan Kaus Kaki",
      description:
        "PT. Sinlie Cahaya Matahari (SCM) menghadirkan keunggulan manufaktur kaus kaki berskala industri. Didukung jajaran mesin rajut komputerisasi modern multi-gauge (96N – 200N), kami melayani mitra brand retail, seragam korporat, dan pengadaan institusi di seluruh Indonesia.",
      ctaRfq: "Request a Quote (RFQ)",
      ctaCatalog: "Lihat Katalog Produk",
      trustMetric1: "Kapasitas Masal ~100.000 Lusin/Bulan",
      trustMetric2: "MOQ Bersahabat & Prototyping Cepat",
      trustMetric3: "Kerahasiaan Desain Mitra Terjamin",
      outputSampleLabel: "Output Presisi",
      outputSampleText: "Kaus Kaki Rajut Multi-Gauge",
      dockTechTitle: "Teknologi Rajut",
      dockTechVal: "96N – 200N Multi-Gauge",
      dockTechDesc: "Single & Double Cylinder Otomatis",
      dockQcTitle: "Kendali Mutu",
      dockQcVal: "100% Quality Checking",
      dockQcDesc: "Uji Dimensi & Deteksi Jarum 0.8mm",
      dockOemTitle: "Layanan Maklon",
      dockOemVal: "OEM & Private Label",
      dockOemDesc: "Hangtag, Barcode & Packaging Ritel",
      dockCapacityTitle: "Kapasitas Pabrik",
      dockCapacityVal: "~100.000 Lusin/Bulan*",
      dockCapacityDesc: "Skalabilitas Pesanan Volume Besar",
    },
    stats: {
      eyebrow: "Sekilas Perusahaan",
      title: "Kapabilitas & Skala Operasional Manufaktur",
      disclaimer: "Angka bertanda * merupakan estimasi data operasional (dapat disesuaikan)",
      confirmBadge: "Konfirmasi",
      items: {
        capacity: {
          value: "100.000+",
          label: "Lusin / Bulan",
          desc: "Estimasi kapasitas produksi bulanan (Menunggu konfirmasi final)",
        },
        experience: {
          value: "2018*",
          label: "Tahun Berdiri",
          desc: "Awal kiprah manufaktur (Badan hukum resmi terdaftar Maret 2023)",
        },
        categories: {
          value: "6",
          label: "Lini Produk Lengkap",
          desc: "Bayi, Anak, Wanita, Pria Formal, Sport Athletic, dan Kustom OEM",
        },
        inspection: {
          value: "100%",
          label: "Quality Checking",
          desc: "Pemeriksaan konsistensi rajutan dan standar ketahanan sebelum pengemasan",
        },
      },
    },
    about: {
      eyebrow: "TENTANG KAMI",
      title: "Dedikasi pada Presisi Rajut dan Kemitraan Jangka Panjang",
      intro:
        "PT. Sinlie Cahaya Matahari adalah produsen manufaktur kaus kaki yang berfokus melayani kebutuhan industri busana, retailer, dan korporat di Indonesia.",
      p1: "Berawal dari pemahaman mendalam atas kebutuhan pasar kaus kaki yang mengutamakan kenyamanan harian dan daya tahan material, PT. Sinlie Cahaya Matahari tumbuh menjadi sentra manufaktur yang memadukan teknologi mesin modern dengan ketelitian teknis perajutan.",
      p2: "Fokus bisnis kami berpusat pada penyediaan layanan manufaktur B2B yang adaptif—mulai dari produksi kaus kaki bayi dengan sentuhan ekstra lembut, hingga kaus kaki olahraga dan formal pria yang membutuhkan konstruksi benang padat dan elastisitas stabil.",
      badgeEst: "Est. 2018",
      cardFacility: "Gedung & Fasilitas Produksi SCM",
      officeLabel: "Manajemen",
      officeTitle: "Kantor Operasional",
      teamLabel: "SDM Manufaktur",
      teamTitle: "Tim Teknisi Mesin",
      strength1: "Lini mesin rajut silinder tunggal & ganda berakurasi tinggi",
      strength2: "Perlindungan kerahasiaan desain dan hak cipta merek mitra",
      strength3: "Pengecekan kualitas 100% dan uji keamanan deteksi jarum",
      guaranteeTitle: "Jaminan Kualitas Fisik",
      guaranteeDesc: "Kerapatan rajutan terukur & konsistensi ukuran per batch.",
      visionTitle: "Visi Perusahaan",
      visionDesc:
        "Menjadi mitra manufaktur kaus kaki terdepan dan terpercaya di Indonesia melalui inovasi rajut, kualitas konsisten, dan keandalan suplai.",
      missionTitle: "Misi Perusahaan",
      missionDesc:
        "Menghadirkan produk kaus kaki berdaya tahan tinggi, menjaga ketepatan waktu pengiriman, serta membangun hubungan bisnis B2B yang transparan dan profesional.",
    },
    products: {
      eyebrow: "KATALOG PRODUK INDUSTRI",
      title: "Ragam Manufaktur Kaus Kaki untuk Kebutuhan Pasar Anda",
      description:
        "Eksplorasi spesifikasi teknis, variasi needle gauge, dan opsi rajutan kustom untuk tiap lini produk kaus kaki yang siap diproduksi massal.",
      tabs: {
        all: "Semua Kategori",
        babyKids: "Bayi & Anak",
        ladies: "Wanita (Fashion)",
        mensSport: "Pria & Athletic",
        custom: "Kustom OEM",
      },
      moq: "MOQ: 50 Lusin",
      gaugeLabel: "Pilihan Gauge:",
      materialLabel: "Material:",
      colorLabel: "Opsi Warna:",
      sampleBtn: "Minta Sampel",
      customBanner: {
        tag: "Layanan Kustom Private Label & Maklon Industri",
        title: "Membutuhkan Kaus Kaki dengan Pola Desain, Logo Rajut, atau Spesifikasi Khusus?",
        desc: "Kami memfasilitasi pembuatan sampel prototipe (approval sample) sebelum produksi masal dimulai. Desain dan hak cipta merek mitra dilindungi penuh secara profesional.",
        btn: "Konsultasi Kustom OEM",
      },
    },
    capabilities: {
      eyebrow: "KAPABILITAS PABRIK",
      title: "Infrastruktur Produksi & Keahlian Teknis Rajut",
      description:
        "Didukung permesinan terstandar industri untuk menghasilkan rajutan berkonsistensi tinggi dengan kapasitas yang dapat diskalakan sesuai volume pesanan Anda.",
      specLabel: "Spesifikasi & Output:",
      barGaugeTitle: "Variasi Needle Count",
      barGaugeVal: "96N / 108N / 144N / 168N / 200N",
      barGaugeDesc: "Mendukung rajutan tebal hingga ultra-fine gauge",
      barToeTitle: "Opsi Konstruksi Tumit & Jari",
      barToeVal: "Y-Heel & Seamless Toe",
      barToeDesc: "Fitting ergonomis anti-selip pada lekuk tumit",
      barYarnTitle: "Pilihan Material Benang",
      barYarnVal: "Combed Cotton, Spandex, TC, PE",
      barYarnDesc: "Kombinasi fleksibel sesuai fungsi dan budget brand",
    },
    process: {
      eyebrow: "ALUR PRODUKSI TERSTANDARISASI",
      title: "Tahapan Manufaktur dari Benang hingga Pengemasan",
      description:
        "Alur kerja terstruktur untuk memastikan setiap lusin kaus kaki memenuhi standar presisi, elastisitas, dan kerapian kemasan siap distribusi.",
      disclaimer:
        "*Tahapan di atas mencerminkan alur standar operasional manufaktur kaus kaki industri dan dapat disesuaikan dengan permintaan kustomisasi spesifik klien.",
    },
    quality: {
      eyebrow: "QUALITY ASSURANCE",
      title: "Standar Pemeriksaan Ketat di Setiap Tahap Produksi",
      description:
        "Bagi kami, kualitas bukan sekadar tampilan akhir, melainkan integritas rajutan, kenyamanan saat dipakai berulang, dan kepuasan mitra B2B kami.",
      qcStation: "QC & Verification Station",
      operatorRole: "Operator QC",
      operatorTitle: "100% Visual Checking",
      physicalTitle: "Pemeriksaan Fisik 100%",
      physicalSubtitle: "Metode kendali mutu riil & terukur di setiap batch",
      physicalDesc:
        "Kami menerapkan metode kendali mutu internal secara disiplin pada setiap batch sebelum pengemasan. Bila ditemukan produk yang tidak memenuhi toleransi dimensi atau terdapat cacat rajut, produk langsung dipisahkan dari batch pengiriman.",
      protocol1: "Anti-Defect Protocol",
      protocol2: "100% Visual Inspection",
    },
    gallery: {
      eyebrow: "FASILITAS & LANTAI PRODUKSI",
      title: "Transparansi Infrastruktur Pabrik Manufaktur SCM",
      description:
        "Eksplorasi lini permesinan rajut, area finishing uap, standar kendali mutu, dan fasilitas logistik pengemasan PT. Sinlie Cahaya Matahari.",
      visitNotice:
        "Kunjungan Fisik Fasilitas: Mitra buyer dan auditor korporat dipersilakan melakukan verifikasi langsung ke pabrik SCM dengan reservasi melalui tim pengadaan.",
      factoryStatus: "Standar Pabrik: Aktif Beroperasi",
    },
    faq: {
      eyebrow: "PERTANYAAN UMUM B2B",
      title: "Transparansi Pengadaan & Layanan Maklon",
      description:
        "Jawaban atas pertanyaan umum seputar MOQ, jadwal sampling, alur kerja maklon, dan kerahasiaan desain produk Anda.",
      boxTitle: "Punya Spesifikasi Khusus?",
      boxSubtitle: "Konsultasikan langsung dengan tim teknis pabrik kami.",
      boxDesc:
        "Setiap brand memiliki keunikan karakter bahan dan standar fitting. Kami siap mendiskusikan toleransi ukuran, komposisi benang, dan kemasan kustom sesuai kebutuhan Anda.",
      boxBtn: "Ajukan Konsultasi Kustom",
    },
    contact: {
      tag: "B2B INQUIRY & QUOTATION",
      title: "Mulai Kolaborasi Manufaktur Kaus Kaki Anda",
      description:
        "Diskusikan kebutuhan volume produksi, penyesuaian desain rajut, atau permintaan sampel produk dengan tim teknis PT. Sinlie Cahaya Matahari.",
      phoneLabel: "Telepon & WhatsApp B2B",
      phoneHours: "Respon cepat pada jam kerja operasional (08:00 - 17:00 WIB)",
      emailLabel: "Email Penawaran Resmi",
      emailDesc: "Kirimkan dokumen RFQ, tech-pack, atau lembar spesifikasi desain",
      visitLabel: "Kunjungan Fasilitas Pabrik",
      visitDesc: "Tersedia janji temu khusus bagi mitra calon buyer dan auditor",
      formTitle: "Formulir Permintaan Penawaran (RFQ)",
      formDesc: "Lengkapi data berikut untuk estimasi harga dan kapasitas produksi.",
      nameLabel: "Nama Lengkap *",
      namePlaceholder: "Contoh: Budi Santoso",
      companyLabel: "Nama Perusahaan / Brand *",
      companyPlaceholder: "Contoh: PT. Retail Busana Indah",
      emailInputLabel: "Alamat Email Resmi *",
      emailInputPlaceholder: "budi@perusahaan.com",
      phoneInputLabel: "Nomor WhatsApp / HP *",
      phoneInputPlaceholder: "081234567890",
      categoryLabel: "Kategori Produk",
      categoryDefault: "Pilih Kategori Kaus Kaki",
      categoryCustom: "Pesanan Kustom Khusus",
      volumeLabel: "Estimasi Kuantitas (Lusin)",
      volumePlaceholder: "Contoh: 500 lusin",
      messageLabel: "Rincian Kebutuhan atau Spesifikasi Desain *",
      messagePlaceholder:
        "Jelaskan jenis benang, spesifikasi rajut, ukuran, atau jadwal target yang Anda perlukan...",
      privacyNotice:
        "Data formulir diproses secara aman untuk kebutuhan penawaran manufaktur B2B resmi PT. Sinlie Cahaya Matahari.",
      submitBtn: "Kirim Permintaan Penawaran (RFQ)",
      successTitle: "Permintaan Anda Berhasil Dicatat!",
      successDesc:
        "Terima kasih atas minat Anda pada layanan manufaktur SCM. Tim pengadaan kami akan segera menindaklanjuti permintaan penawaran Anda.",
      sendAnother: "Kirim permintaan lain",
    },
    footer: {
      bio: "Manufaktur kaus kaki spesialis B2B di Indonesia. Menghadirkan standar kerapatan rajutan presisi, durabilitas benang, dan kapasitas produksi terpercaya untuk mitra bisnis lokal maupun nasional.",
      subBio: "Modern Industrial Sock Manufacturing",
      navTitle: "Navigasi",
      catTitle: "Kategori Produk",
      contactTitle: "Kontak & Pabrik",
      locationLabel: "Lokasi Pabrik:",
      locationDesc: "(Tersedia untuk kunjungan bisnis B2B via reservasi)",
      copyright: "PT. Sinlie Cahaya Matahari. Seluruh Hak Cipta Dilindungi.",
      partnerTag: "Precision Sock Manufacturing Partner",
      backToTop: "Kembali ke Atas ↑",
    },
    rfqModal: {
      title: "Request for Quotation (RFQ)",
      description: "Dapatkan estimasi biaya produksi, MOQ, dan jadwal sampling dari tim teknis SCM.",
      submitBtn: "Kirim Dokumen RFQ",
      successTitle: "Permintaan RFQ Berhasil Dikirim!",
      successDesc: "Tim pengadaan manufaktur SCM akan meninjau tech-pack atau rincian spesifikasi Anda dalam 1x24 jam kerja.",
      closeBtn: "Tutup",
    },
    widget: {
      inquiry: "Konsultasi Cepat B2B",
      hours: "Senin - Jumat 08:00 - 17:00 WIB",
      callNow: "Hubungi WhatsApp",
      rfqBtn: "Minta Penawaran (RFQ)",
    },
  },
  en: {
    nav: {
      about: "About",
      products: "Products",
      capabilities: "Capabilities",
      process: "Process",
      gallery: "Gallery",
      faq: "FAQ",
      contact: "Contact",
      quote: "Request a Quote",
      quickConsult: "B2B Consultation",
    },
    hero: {
      statusBadge: "INDONESIAN SOCK MANUFACTURING FACILITY",
      headlineStart: "Precision in Every",
      headlineHighlight: "Stitch.",
      tagline: "Industrial Sock Knitting Precision",
      description:
        "PT. Sinlie Cahaya Matahari (SCM) delivers mass-scale industrial sock manufacturing excellence. Powered by modern multi-gauge computerized knitting machinery (96N – 200N), we serve retail brand partners, corporate uniforms, and institutional procurement across Indonesia.",
      ctaRfq: "Request a Quote (RFQ)",
      ctaCatalog: "View Product Catalog",
      trustMetric1: "Mass Capacity ~100,000 Dozen/Month",
      trustMetric2: "Flexible MOQ & Fast Prototyping",
      trustMetric3: "Partner Design Confidentiality Guaranteed",
      outputSampleLabel: "Precision Output",
      outputSampleText: "Multi-Gauge Knitted Socks",
      dockTechTitle: "Knitting Technology",
      dockTechVal: "96N – 200N Multi-Gauge",
      dockTechDesc: "Automated Single & Double Cylinder",
      dockQcTitle: "Quality Assurance",
      dockQcVal: "100% Quality Checking",
      dockQcDesc: "Dimension Check & 0.8mm Needle Scan",
      dockOemTitle: "OEM Services",
      dockOemVal: "OEM & Private Label",
      dockOemDesc: "Hangtag, Barcode & Retail Packaging",
      dockCapacityTitle: "Factory Capacity",
      dockCapacityVal: "~100,000 Dozen/Month*",
      dockCapacityDesc: "Large Volume Order Scalability",
    },
    stats: {
      eyebrow: "Company at a Glance",
      title: "Manufacturing Scale & Operational Capability",
      disclaimer: "Numbers marked with * are operational estimates subject to final confirmation",
      confirmBadge: "Confirming",
      items: {
        capacity: {
          value: "100,000+",
          label: "Dozen / Month",
          desc: "Estimated monthly production capacity (Awaiting final confirmation)",
        },
        experience: {
          value: "2018*",
          label: "Established Year",
          desc: "Manufacturing track record (Legal corporate entity registered March 2023)",
        },
        categories: {
          value: "6",
          label: "Full Product Lines",
          desc: "Baby, Kids, Ladies, Men's Classic, Athletic Sport, and Custom OEM",
        },
        inspection: {
          value: "100%",
          label: "Quality Checking",
          desc: "Rigorous stitch consistency and durability verification before packaging",
        },
      },
    },
    about: {
      eyebrow: "ABOUT US",
      title: "Dedicated to Knitting Precision & Long-Term Partnerships",
      intro:
        "PT. Sinlie Cahaya Matahari is a sock manufacturing enterprise focused on serving the apparel industry, retail brands, and corporate institutions in Indonesia.",
      p1: "Founded on a deep understanding of market demands for everyday foot comfort and enduring material resilience, PT. Sinlie Cahaya Matahari has grown into an industrial manufacturing center combining modern automated machinery with technical craftsmanship.",
      p2: "Our business centers on adaptable B2B manufacturing services—ranging from ultra-soft baby socks to high-friction school, athletic performance, and formal executive socks requiring dense knit structures and elastic stability.",
      badgeEst: "Est. 2018",
      cardFacility: "SCM Facility & Factory Floor",
      officeLabel: "Management",
      officeTitle: "Operations Office",
      teamLabel: "Workforce",
      teamTitle: "Knitting Technicians",
      strength1: "High-precision single and double cylinder computerized knitting machines",
      strength2: "Comprehensive intellectual property and design copyright protection",
      strength3: "100% physical quality inspection and calibrated needle detection safety",
      guaranteeTitle: "Physical Quality Guarantee",
      guaranteeDesc: "Calibrated knitting density & consistent dimensional sizing per batch.",
      visionTitle: "Company Vision",
      visionDesc:
        "To be Indonesia's leading and most trusted sock manufacturing partner through knitting innovation, consistent quality, and supply reliability.",
      missionTitle: "Company Mission",
      missionDesc:
        "To engineer highly durable sock products, ensure on-time delivery schedules, and foster transparent, long-term B2B partnerships.",
    },
    products: {
      eyebrow: "INDUSTRIAL PRODUCT CATALOG",
      title: "Comprehensive Sock Manufacturing for Your Market Needs",
      description:
        "Explore technical specifications, needle count variations, and custom knitting options for each mass-production ready sock category.",
      tabs: {
        all: "All Categories",
        babyKids: "Baby & Kids",
        ladies: "Ladies (Fashion)",
        mensSport: "Men's & Athletic",
        custom: "Custom OEM",
      },
      moq: "MOQ: 50 Dozen",
      gaugeLabel: "Available Gauges:",
      materialLabel: "Material:",
      colorLabel: "Color Options:",
      sampleBtn: "Request Sample",
      customBanner: {
        tag: "Private Label & Industrial OEM Services",
        title: "Need Custom Jacquard Patterns, Brand Logos, or Special Tech-Pack Specs?",
        desc: "We facilitate rapid prototype sampling (approval sample) before bulk mass production begins. Partner designs and brand copyrights are fully protected.",
        btn: "Consult Custom OEM",
      },
    },
    capabilities: {
      eyebrow: "FACTORY CAPABILITIES",
      title: "Production Infrastructure & Technical Knitting Expertise",
      description:
        "Powered by industry-standard machinery to deliver high stitch consistency with scalable output tailored to your order volume.",
      specLabel: "Specifications & Output:",
      barGaugeTitle: "Needle Count Range",
      barGaugeVal: "96N / 108N / 144N / 168N / 200N",
      barGaugeDesc: "Supporting heavy athletic terry up to ultra-fine gauge knits",
      barToeTitle: "Heel & Toe Options",
      barToeVal: "Y-Heel & Seamless Toe",
      barToeDesc: "Ergonomic non-slip heel contours with seamless linking",
      barYarnTitle: "Yarn Material Versatility",
      barYarnVal: "Combed Cotton, Spandex, TC, PE",
      barYarnDesc: "Flexible fiber blends matching brand functional needs and budgets",
    },
    process: {
      eyebrow: "STANDARDIZED PRODUCTION WORKFLOW",
      title: "Manufacturing Stages from Yarn to Packaging",
      description:
        "A structured end-to-end workflow ensuring every dozen socks meets strict dimensional tolerances, elasticity, and retail-ready presentation.",
      disclaimer:
        "*The stages above represent our standard industrial sock manufacturing workflow and can be tailored to client custom specifications.",
    },
    quality: {
      eyebrow: "QUALITY ASSURANCE",
      title: "Strict Inspection Protocols at Every Production Stage",
      description:
        "To us, quality is not merely surface appearance, but knit integrity, repeated wear endurance, and complete satisfaction for our B2B partners.",
      qcStation: "QC & Verification Station",
      operatorRole: "QC Operator",
      operatorTitle: "100% Visual Checking",
      physicalTitle: "100% Physical Verification",
      physicalSubtitle: "Real, measured internal quality control for every batch",
      physicalDesc:
        "We implement disciplined internal quality control on every batch prior to packing. Any item exhibiting dimensional variance or stitch irregularities is segregated from the shipment.",
      protocol1: "Anti-Defect Protocol",
      protocol2: "100% Visual Inspection",
    },
    gallery: {
      eyebrow: "FACILITY & PRODUCTION FLOOR",
      title: "Transparent SCM Manufacturing Infrastructure",
      description:
        "Explore our computerized knitting lines, thermal steam boarding stations, quality control tables, and packaging logistics facilities.",
      visitNotice:
        "Physical Facility Visits: Buyer partners and corporate procurement auditors are welcome to inspect SCM facilities directly via prior appointment.",
      factoryStatus: "Factory Status: Fully Operational",
    },
    faq: {
      eyebrow: "B2B PROCUREMENT FAQ",
      title: "Procurement Transparency & OEM Contract Services",
      description:
        "Answers to common queries regarding MOQ, sampling lead times, private label workflows, and design confidentiality.",
      boxTitle: "Have Specific Tech-Pack Needs?",
      boxSubtitle: "Consult directly with our factory engineering team.",
      boxDesc:
        "Every brand has unique fiber preferences and fitting standards. We are ready to discuss sizing tolerances, yarn compositions, and custom packaging.",
      boxBtn: "Request Custom Consultation",
    },
    contact: {
      tag: "B2B INQUIRY & QUOTATION",
      title: "Start Your Sock Manufacturing Partnership",
      description:
        "Discuss your production volume, custom design patterns, or product sample requests with PT. Sinlie Cahaya Matahari's technical team.",
      phoneLabel: "Phone & B2B WhatsApp",
      phoneHours: "Fast response during operating hours (08:00 - 17:00 WIB)",
      emailLabel: "Official Quotation Email",
      emailDesc: "Send your RFQ documents, tech-pack, or design specification sheets",
      visitLabel: "Factory Facility Visits",
      visitDesc: "Available by appointment for prospective buyers and quality auditors",
      formTitle: "Request for Quotation (RFQ) Form",
      formDesc: "Complete the details below for production price and capacity estimates.",
      nameLabel: "Full Name *",
      namePlaceholder: "E.g., John Doe",
      companyLabel: "Company / Brand Name *",
      companyPlaceholder: "E.g., Global Apparel Brands Ltd.",
      emailInputLabel: "Official Email Address *",
      emailInputPlaceholder: "john@company.com",
      phoneInputLabel: "WhatsApp / Mobile Number *",
      phoneInputPlaceholder: "+62 812-3456-7890",
      categoryLabel: "Product Category",
      categoryDefault: "Select Sock Category",
      categoryCustom: "Custom OEM Order",
      volumeLabel: "Estimated Quantity (Dozens)",
      volumePlaceholder: "E.g., 500 dozens",
      messageLabel: "Project Requirements or Specifications *",
      messagePlaceholder:
        "Detail your yarn preference, gauge specs, sizing, or target delivery schedule...",
      privacyNotice:
        "Form data is securely processed solely for official PT. Sinlie Cahaya Matahari B2B manufacturing quotations.",
      submitBtn: "Send Request for Quote (RFQ)",
      successTitle: "Your Request Has Been Recorded!",
      successDesc:
        "Thank you for your interest in SCM manufacturing services. Our procurement team will follow up on your quotation shortly.",
      sendAnother: "Submit another inquiry",
    },
    footer: {
      bio: "Specialist B2B sock manufacturing partner in Indonesia. Providing calibrated knitting precision, premium yarn durability, and trusted mass capacity for retail brands and corporations.",
      subBio: "Modern Industrial Sock Manufacturing",
      navTitle: "Navigation",
      catTitle: "Product Categories",
      contactTitle: "Contact & Factory",
      locationLabel: "Factory Location:",
      locationDesc: "(Available for B2B buyer visits by prior appointment)",
      copyright: "PT. Sinlie Cahaya Matahari. All Rights Reserved.",
      partnerTag: "Precision Sock Manufacturing Partner",
      backToTop: "Back to Top ↑",
    },
    rfqModal: {
      title: "Request for Quotation (RFQ)",
      description: "Get production cost estimates, MOQ guidelines, and sample schedules from SCM's engineering team.",
      submitBtn: "Submit RFQ Document",
      successTitle: "RFQ Successfully Sent!",
      successDesc: "SCM manufacturing engineers will review your tech-pack and specification details within 1 business day.",
      closeBtn: "Close",
    },
    widget: {
      inquiry: "Quick B2B Consultation",
      hours: "Mon - Fri 08:00 - 17:00 WIB",
      callNow: "Contact on WhatsApp",
      rfqBtn: "Request a Quote (RFQ)",
    },
  },
};
