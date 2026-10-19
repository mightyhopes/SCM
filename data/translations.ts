export type Language = "id" | "en";

export interface Translations {
  nav: {
    about: string;
    markets: string;
    products: string;
    capabilities: string;
    process: string;
    quality: string;
    gallery: string;
    faq: string;
    contact: string;
    quote: string;
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
    dockTechTitle: string;
    dockTechVal: string;
    dockTechDesc: string;
    dockCapacityTitle: string;
    dockCapacityVal: string;
    dockCapacityDesc: string;
    dockMarketsTitle: string;
    dockMarketsVal: string;
    dockMarketsDesc: string;
    dockQcTitle: string;
    dockQcVal: string;
    dockQcDesc: string;
  };
  stats: {
    eyebrow: string;
    title: string;
    items: {
      capacity: { value: string; label: string; desc: string };
      experience: { value: string; label: string; desc: string };
      markets: { value: string; label: string; desc: string };
      quality: { value: string; label: string; desc: string };
    };
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    p1: string;
    p2: string;
    badgeExp: string;
    cardFacility: string;
    officeLabel: string;
    officeTitle: string;
    teamLabel: string;
    teamTitle: string;
    strength1: string;
    strength2: string;
    strength3: string;
    focusTitle: string;
    focusDesc: string;
  };
  markets: {
    eyebrow: string;
    title: string;
    description: string;
    domesticTitle: string;
    domesticSubtitle: string;
    domesticDesc: string;
    domesticTag: string;
    exportTitle: string;
    exportSubtitle: string;
    exportDesc: string;
    exportTag: string;
    note: string;
    badgeUs: string;
    badgeEu: string;
    badgeId: string;
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
    gaugeLabel: string;
    materialLabel: string;
    packagingNote: string;
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
    barCapacityTitle: string;
    barCapacityVal: string;
    barCapacityDesc: string;
    barPackagingTitle: string;
    barPackagingVal: string;
    barPackagingDesc: string;
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
    previewBadge: string;
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
    emailTitle: string;
    emailDesc: string;
    emailCta: string;
    phoneTitle: string;
    phoneDesc: string;
    phonePending: string;
    locationTitle: string;
    locationDesc: string;
    hoursTitle: string;
    hoursDesc: string;
    quoteGuideTag: string;
    quoteGuideTitle: string;
    quoteGuideDesc: string;
    quoteGuideItems: string[];
    quoteCtaBtn: string;
    quoteEmailSubject: string;
    copyEmailBtn: string;
    copiedText: string;

    // Redesigned Contact Section
    eyebrow: string;
    heroTitle: string;
    heroSubtext: string;
    form: {
      cardTitle: string;
      cardSubtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      categoryLabel: string;
      categoryPlaceholder: string;
      categories: {
        baby: string;
        kids: string;
        ladies: string;
        mens: string;
        athletic: string;
        custom: string;
      };
      volumeLabel: string;
      volumePlaceholder: string;
      volumeOptions: string[];
      timelineLabel: string;
      timelinePlaceholder: string;
      timelineOptions: string[];
      materialLabel: string;
      materialPlaceholder: string;
      packagingLabel: string;
      packagingPlaceholder: string;
      packagingOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
      fileUploadLabel: string;
      fileUploadHint: string;
      fileUploadDrag: string;
      fileUploadChange: string;
      fileSelected: string;
      submitBtn: string;
      submittingBtn: string;
      openEmailDraft: string;
      errors: {
        name: string;
        company: string;
        email: string;
        phone: string;
        category: string;
      };
      success: {
        title: string;
        subtitle: string;
        badge: string;
        nextStepsTitle: string;
        nextSteps: string[];
        submitAnotherBtn: string;
        whatsappFollowupBtn: string;
      };
    };
    directCard: {
      cardTitle: string;
      contactPerson: string;
      contactRole: string;
      whatsappBtn: string;
      callBtn: string;
      copyPhone: string;
      copiedPhone: string;
      officialEmailLabel: string;
      copyEmail: string;
      copiedEmail: string;
      hoursLabel: string;
      hoursSchedule: string;
      openNow: string;
      closedNow: string;
      reopensMonday: string;
      reopensTomorrow: string;
      addressLabel: string;
      addressFull: string;
      getDirections: string;
      appointmentNotice: string;
    };
    checklistTitle: string;
    checklistItems: Array<{ title: string; desc: string }>;
    mobileSticky: {
      whatsappBtn: string;
      inquiryBtn: string;
    };
  };
  footer: {
    bio: string;
    subBio: string;
    navTitle: string;
    catTitle: string;
    contactTitle: string;
    locationLabel: string;
    copyright: string;
    partnerTag: string;
    backToTop: string;
  };
  widget: {
    inquiry: string;
    hours: string;
    quoteBtn: string;
  };
}

export const translations: Record<Language, Translations> = {
  id: {
    nav: {
      about: "Tentang",
      markets: "Pasar",
      products: "Produk",
      capabilities: "Kapabilitas",
      process: "Proses",
      quality: "Kendali Mutu",
      gallery: "Galeri",
      faq: "FAQ",
      contact: "Kontak",
      quote: "Request a Quote",
    },
    hero: {
      statusBadge: "FASILITAS MANUFAKTUR KAOS KAKI",
      headlineStart: "Presisi di Setiap",
      headlineHighlight: "Rajutan.",
      tagline:
        "Solusi manufaktur kaos kaki fleksibel yang dapat disesuaikan dengan kebutuhan produk Anda.",
      description:
        "Dengan pengalaman di industri kaos kaki sejak 2018, PT. Sinlie Cahaya Matahari menyediakan solusi manufaktur kaos kaki yang dapat disesuaikan dengan kebutuhan produk pelanggan. Melayani pasar domestik dan internasional, dengan pesanan ekspor yang terutama menjangkau Amerika Serikat dan Eropa.",
      ctaRfq: "Request a Quote",
      ctaCatalog: "Lihat Kategori Produk",
      trustMetric1: "Ekspor Utama: Amerika Serikat & Eropa",
      trustMetric2: "Fleksibilitas Bahan & Kemasan Kustom",
      trustMetric3: "Kendali Mutu Berpedoman Standar AQL",
      dockTechTitle: "Fokus Produksi",
      dockTechVal: "Manufaktur Kaos Kaki",
      dockTechDesc: "Beragam Kategori & Spesifikasi",
      dockCapacityTitle: "Kapasitas Maksimum",
      dockCapacityVal: "1.000.000 Lusin/Bulan*",
      dockCapacityDesc: "Kapasitas Operasional Maksimum",
      dockMarketsTitle: "Jangkauan Pasar",
      dockMarketsVal: "Domestik & Ekspor",
      dockMarketsDesc: "AS, Eropa & Pasar Domestik",
      dockQcTitle: "Kendali Mutu",
      dockQcVal: "Standar AQL",
      dockQcDesc: "Inspeksi Kualitas Terstruktur",
    },
    stats: {
      eyebrow: "Sekilas Perusahaan",
      title: "Kapabilitas Manufaktur & Jangkauan Operasional",
      items: {
        capacity: {
          value: "1.000.000",
          label: "Lusin / Bulan (Kapasitas Maksimum)",
          desc: "Kapasitas maksimum operasional, dengan realisasi produksi menyesuaikan spesifikasi produk dan kebutuhan pesanan.",
        },
        experience: {
          value: "2018",
          label: "Pengalaman Industri Sejak",
          desc: "Pengalaman di industri manufaktur kaos kaki sejak 2018 (Pendirian badan hukum PT pada 2023).",
        },
        markets: {
          value: "Domestik & Ekspor",
          label: "Jangkauan Pasar",
          desc: "Melayani pasar domestik dan internasional, dengan pesanan ekspor yang terutama menjangkau Amerika Serikat dan Eropa.",
        },
        quality: {
          value: "Standar AQL",
          label: "Kendali Mutu (QC)",
          desc: "Fungsi Quality Control terstruktur untuk memastikan kesesuaian produk mengacu pada pedoman standar AQL.",
        },
      },
    },
    about: {
      eyebrow: "TENTANG PERUSAHAAN",
      title: "Dedikasi pada Kualitas Rajutan dan Solusi Manufaktur Kaos Kaki",
      intro:
        "Dengan pengalaman di industri kaos kaki sejak 2018, PT. Sinlie Cahaya Matahari menyediakan solusi manufaktur kaos kaki yang dapat disesuaikan dengan kebutuhan produk pelanggan.",
      p1: "Perjalanan kami di industri kaos kaki dibangun atas komitmen terhadap kualitas rajutan, konsistensi dimensi ukuran, dan keandalan pemenuhan pesanan pelanggan. Pendirian badan hukum resmi PT. Sinlie Cahaya Matahari pada tahun 2023 memperkuat kapabilitas kami dalam melayani kemitraan bisnis jangka panjang.",
      p2: "Kami melayani berbagai segmen kebutuhan kaus kaki—mulai dari kaus kaki bayi, anak-anak, wanita, formal pria, hingga kaus kaki olahraga dan pesanan khusus. Spesifikasi bahan, desain motif rajut, dan pilihan pengemasan dapat didiskusikan secara terbuka untuk memenuhi standar produk yang Anda harapkan.",
      badgeExp: "Pengalaman Sejak 2018",
      cardFacility: "Fasilitas Produksi SCM",
      officeLabel: "Manajemen",
      officeTitle: "Operasional Terpadu",
      teamLabel: "Tim Produksi",
      teamTitle: "Teknisi Rajut & QC",
      strength1: "Fokus khusus pada produksi kaos kaki beragam kategori",
      strength2: "Kapasitas maksimum operasional hingga 1.000.000 lusin/bulan",
      strength3: "Penerapan kendali mutu mengacu pada pedoman standar AQL",
      focusTitle: "Komitmen Kemitraan B2B",
      focusDesc:
        "Menjaga kerahasiaan spesifikasi pesanan mitra dan memastikan ketepatan jadwal produksi.",
    },
    markets: {
      eyebrow: "JANGKAUAN PASAR",
      title: "Melayani Kebutuhan Pasar Domestik & Internasional",
      description:
        "PT. Sinlie Cahaya Matahari melayani spektrum pelanggan yang luas, baik pemenuhan kebutuhan pasar dalam negeri maupun pesanan ekspor ke pasar global.",
      domesticTitle: "Pasar Domestik Indonesia",
      domesticSubtitle: "Distribusi Nasional",
      domesticDesc:
        "Melayani mitra ritel, distributor, pengadaan korporat, dan kebutuhan seragam institusi di berbagai wilayah Indonesia.",
      domesticTag: "Nasional",
      exportTitle: "Pasar Ekspor Internasional",
      exportSubtitle: "Amerika Serikat & Eropa",
      exportDesc:
        "Pesanan ekspor kami terutama menjangkau Amerika Serikat dan Eropa, dengan pengiriman ke destinasi internasional lainnya menyesuaikan pesanan yang masuk.",
      exportTag: "Global",
      note: "Catatan: Pengiriman ekspor dilakukan berdasarkan pesanan yang disepakati dari fasilitas manufaktur kami di Indonesia.",
      badgeUs: "Amerika Serikat (USA)",
      badgeEu: "Eropa (Europe)",
      badgeId: "Seluruh Indonesia",
    },
    products: {
      eyebrow: "KATEGORI PRODUK",
      title: "Ragam Manufaktur Kaos Kaki Sesuai Kebutuhan Anda",
      description:
        "Pilihan kategori kaos kaki yang dapat diproduksi dengan fleksibilitas spesifikasi, bahan benang, dan pilihan pengemasan.",
      tabs: {
        all: "Semua Kategori",
        babyKids: "Bayi & Anak",
        ladies: "Wanita",
        mensSport: "Pria & Olahraga",
        custom: "Spesifikasi Kustom",
      },
      gaugeLabel: "Pilihan Gauge:",
      materialLabel: "Bahan:",
      packagingNote: "Pilihan pengemasan dapat disesuaikan dengan kebutuhan pelanggan.",
      sampleBtn: "Konsultasikan Kategori",
      customBanner: {
        tag: "Fleksibilitas Manufaktur & Pengemasan",
        title: "Membutuhkan Kaus Kaki dengan Spesifikasi atau Kemasan Khusus?",
        desc: "Kami memfasilitasi diskusi teknis penyesuaian komposisi benang, ukuran, motif rajutan, hingga kemasan kustom sesuai kebutuhan produk Anda.",
        btn: "Konsultasi Spesifikasi Kustom",
      },
    },
    capabilities: {
      eyebrow: "KAPABILITAS PABRIK",
      title: "Infrastruktur & Fleksibilitas Produksi Kaos Kaki",
      description:
        "Didukung kapasitas maksimum operasional yang tinggi serta fleksibilitas dalam mengakomodasi berbagai kebutuhan bahan dan pengemasan produk.",
      specLabel: "Fokus Kapabilitas:",
      barCapacityTitle: "Kapasitas Maksimum",
      barCapacityVal: "1.000.000 Lusin / Bulan",
      barCapacityDesc: "Kapasitas operasional maksimum per bulan",
      barPackagingTitle: "Pilihan Pengemasan",
      barPackagingVal: "Dapat Disesuaikan",
      barPackagingDesc: "Kemasan disesuaikan kebutuhan pelanggan",
      barYarnTitle: "Fleksibilitas Bahan",
      barYarnVal: "Katun, Spandex, Elastik",
      barYarnDesc: "Komposisi benang disesuaikan per pesanan",
    },
    process: {
      eyebrow: "ALUR PRODUKSI",
      title: "Tahapan Manufaktur dari Bahan hingga Pengemasan",
      description:
        "Alur kerja terstruktur untuk memastikan setiap lusin kaus kaki memenuhi kerapian bentuk, kenyamanan rajutan, dan kemasan siap distribusi.",
      disclaimer:
        "*Tahapan di atas menggambarkan alur kerja umum proses manufaktur kaos kaki dan dapat disesuaikan menurut spesifikasi teknis pesanan pelanggan.",
    },
    quality: {
      eyebrow: "KENDALI MUTU (QC)",
      title: "Standar Pemeriksaan Berpedoman AQL di Setiap Tahap",
      description:
        "PT. Sinlie Cahaya Matahari menjalankan fungsi Quality Control yang terstruktur untuk memastikan kesesuaian produk dengan spesifikasi yang disepakati.",
      qcStation: "Area Pemeriksaan Mutu (QC)",
      operatorRole: "Tim Quality Control",
      operatorTitle: "Pemeriksaan Fisik & Visual",
      physicalTitle: "Fungsi Quality Control Terstruktur",
      physicalSubtitle: "Pemeriksaan konsistensi produk mengacu pada standar AQL",
      physicalDesc:
        "Pemeriksaan mutu dilakukan untuk memverifikasi kerapatan rajutan, kestabilan dimensi ukuran, dan kebersihan visual produk sebelum pengemasan akhir. Produk yang tidak memenuhi toleransi spesifikasi segera dipisahkan.",
      protocol1: "Pedoman Standar AQL",
      protocol2: "Inspeksi Kerapatan & Dimensi",
    },
    gallery: {
      eyebrow: "DOKUMENTASI VISUAL",
      title: "Gambaran Fasilitas & Proses Produksi Kaos Kaki",
      description:
        "Dokumentasi visual ilustratif lini permesinan rajut, area finishing, kendali mutu, dan persiapan pengemasan.",
      visitNotice:
        "Kunjungan Fasilitas: Kunjungan verifikasi ke pabrik dapat diatur melalui reservasi dan koordinasi bersama tim manajemen.",
      previewBadge: "Dokumentasi Ilustratif",
    },
    faq: {
      eyebrow: "PERTANYAAN UMUM B2B",
      title: "Informasi Manufaktur, Jangkauan & Pemesanan",
      description:
        "Jawaban atas pertanyaan umum seputar kapasitas produksi, fleksibilitas bahan, pengemasan, dan jangkauan pasar.",
      boxTitle: "Punya Spesifikasi Khusus?",
      boxSubtitle: "Diskusikan kebutuhan produk Anda bersama kami.",
      boxDesc:
        "Setiap kebutuhan memiliki karakteristik bahan dan target pasar tersendiri. Kami siap mendiskusikan toleransi ukuran, komposisi benang, dan pilihan kemasan yang sesuai.",
      boxBtn: "Ajukan Permintaan Penawaran",
    },
    contact: {
      tag: "KONTAK & KONSULTASI B2B",
      title: "Hubungi Kami untuk Konsultasi Manufaktur Kaos Kaki",
      description:
        "Diskusikan kebutuhan spesifikasi produk, volume pesanan, atau pertanyaan bisnis secara langsung dengan PT. Sinlie Cahaya Matahari melalui saluran komunikasi resmi berikut.",
      emailTitle: "Email Resmi Penawaran & Bisnis",
      emailDesc:
        "Kirimkan pertanyaan kemitraan, lembar spesifikasi teknis, atau dokumen kebutuhan pengadaan kaos kaki langsung ke tim kami.",
      emailCta: "Kirim Email ke SCM",
      phoneTitle: "Telepon & WhatsApp Bisnis",
      phoneDesc:
        "Hubungi langsung contact person kami untuk konsultasi teknis rajutan, jadwal produksi, atau komunikasi cepat via WhatsApp.",
      phonePending:
        "Nomor telepon operasional sedang dalam proses konfirmasi resmi. Untuk respon cepat, silakan hubungi kami via email resmi.",
      locationTitle: "Lokasi Fasilitas Pabrik",
      locationDesc:
        "Ciamis, Jawa Barat, Indonesia. Kunjungan langsung dan audit fasilitas oleh mitra buyer dapat dikoordinasikan melalui janji temu terlebih dahulu.",
      hoursTitle: "Jam Operasional",
      hoursDesc:
        "Senin - Jumat: 08:00 - 17:00 WIB (Waktu Indonesia Barat). Respon aktif pada hari dan jam kerja operasional.",
      quoteGuideTag: "PANDUAN PENGAJUAN PENAWARAN",
      quoteGuideTitle: "Ingin Mengajukan Request a Quote?",
      quoteGuideDesc:
        "Untuk mempermudah peninjauan teknis dan estimasi penawaran harga, kami menyarankan Anda menyertakan rincian berikut dalam email Anda:",
      quoteGuideItems: [
        "Estimasi volume pesanan (lusin) dan target jadwal pengiriman",
        "Kategori kaos kaki (bayi, anak, wanita, pria formal, olahraga, atau kustom)",
        "Preferensi bahan benang (katun, spandex, elastik) serta referensi pola rajutan",
        "Preferensi pengemasan (kemasan lusinan atau kebutuhan kemasan kustom)",
      ],
      quoteCtaBtn: "Buka Draf Email Penawaran",
      quoteEmailSubject: "Permintaan Penawaran Manufaktur Kaos Kaki - SCM",
      copyEmailBtn: "Salin Alamat Email",
      copiedText: "Email Tersalin!",

      // Redesigned Contact Section
      eyebrow: "B2B Inquiry",
      heroTitle: "Mari Diskusikan Manufaktur Kaos Kaki Anda",
      heroSubtext: "Hubungi tim pabrik kami di Ciamis untuk penawaran harga langsung, spesifikasi kustom, dan jadwal produksi.",
      form: {
        cardTitle: "Ajukan Permintaan Penawaran",
        cardSubtitle: "Isi formulir kebutuhan produksi Anda untuk ditinjau oleh tim teknis kami.",
        nameLabel: "Nama Lengkap",
        namePlaceholder: "cth. Budi Santoso",
        companyLabel: "Nama Perusahaan / Brand",
        companyPlaceholder: "cth. PT Busana Nusantara atau Brand Name",
        emailLabel: "Email Bisnis",
        emailPlaceholder: "nama@perusahaan.com",
        phoneLabel: "WhatsApp / Telepon",
        phonePlaceholder: "+62 812 3456 7890",
        categoryLabel: "Kategori Kaos Kaki",
        categoryPlaceholder: "Pilih kategori kaos kaki...",
        categories: {
          baby: "Kaos Kaki Bayi & Balita (Baby Socks)",
          kids: "Kaos Kaki Anak & Sekolah (Kids & School)",
          ladies: "Kaos Kaki Wanita (Ladies Socks)",
          mens: "Kaos Kaki Pria Formal & Klasik (Men's Formal)",
          athletic: "Kaos Kaki Olahraga & Athletic (Athletic & Sport)",
          custom: "Spesifikasi Kustom / Desain Khusus (Custom OEM)",
        },
        volumeLabel: "Estimasi Volume Pesanan (Lusin)",
        volumePlaceholder: "cth. 500 lusin atau pilih kisaran",
        volumeOptions: [
          "100 – 499 lusin (Batch Uji Coba / Sampling)",
          "500 – 1.999 lusin (Produksi Standar)",
          "2.000 – 9.999 lusin (Volume Menengah)",
          "10.000+ lusin (Volume Besar / Ekspor)",
        ],
        timelineLabel: "Target Waktu Produksi / Kirim",
        timelinePlaceholder: "Pilih target timeline...",
        timelineOptions: [
          "Mendesak (Kurang dari 1 bulan)",
          "Standar (1 – 2 bulan)",
          "Terencana (3+ bulan)",
          "Kontrak Rutin / Pengiriman Berkala",
        ],
        materialLabel: "Catatan Benang & Material",
        materialPlaceholder: "cth. 80% Katun Combed, 17% Poliester, 3% Spandex; bantalan telapak...",
        packagingLabel: "Preferensi Kemasan",
        packagingPlaceholder: "Pilih opsi kemasan...",
        packagingOptions: [
          "Standar 12 Pasang per Polybag (Kemasan Grosir)",
          "Kemasan Satuan Plastik + Stiker Barcode",
          "Kertas Label Rider Card / Header Card Kustom",
          "Gantungan Ritel (Hanger Hook) & Kemasan Khusus",
          "Kotak / Box Kemasan Kustom",
        ],
        messageLabel: "Pesan & Rincian Proyek",
        messagePlaceholder: "Rincian spesifikasi, jumlah jarum (144N / 168N / 200N), target ukuran, atau pertanyaan lain...",
        fileUploadLabel: "Unggah Tech Pack / Desain (Opsional)",
        fileUploadHint: "Format: PDF, AI, PSD, PNG, JPG, ZIP (Maksimal 25MB)",
        fileUploadDrag: "Klik untuk memilih file atau seret ke area ini",
        fileUploadChange: "Ganti file",
        fileSelected: "File terpilih:",
        submitBtn: "Kirim Permintaan Penawaran",
        submittingBtn: "Mengirim Permintaan...",
        openEmailDraft: "atau buka draf email langsung",
        errors: {
          name: "Nama lengkap wajib diisi",
          company: "Nama perusahaan / brand wajib diisi",
          email: "Alamat email bisnis tidak valid",
          phone: "Nomor WhatsApp / telepon wajib diisi",
          category: "Pilih salah satu kategori kaos kaki",
        },
        success: {
          title: "Permintaan Penawaran Terkirim!",
          subtitle: "Terima kasih telah menghubungi PT. Sinlie Cahaya Matahari. Spesifikasi produksi Anda telah kami terima.",
          badge: "Kami merespons dalam 1 hari kerja",
          nextStepsTitle: "Langkah Selanjutnya:",
          nextSteps: [
            "Tim teknis meninjau kelayakan benang, konstruksi jarum, dan toleransi ukuran.",
            "Perhitungan harga penawaran resmi (FOB / CMT) disusun sesuai volume pesanan.",
            "Tim kami akan menghubungi Anda melalui email atau WhatsApp untuk konfirmasi detail.",
          ],
          submitAnotherBtn: "Kirim Permintaan Lain",
          whatsappFollowupBtn: "Lanjutkan Diskusi di WhatsApp",
        },
      },
      directCard: {
        cardTitle: "Kontak Langsung Pabrik",
        contactPerson: "Mr. Fakhrudin (Mr. Aming)",
        contactRole: "B2B Production & Sales Director",
        whatsappBtn: "Chat via WhatsApp",
        callBtn: "Hubungi via Telepon",
        copyPhone: "Salin Nomor",
        copiedPhone: "Nomor Tersalin!",
        officialEmailLabel: "Email Resmi Penawaran",
        copyEmail: "Salin Email",
        copiedEmail: "Email Tersalin!",
        hoursLabel: "Jam Kerja Operasional",
        hoursSchedule: "Senin–Jumat · 08:00–17:00 WIB",
        openNow: "Buka sekarang",
        closedNow: "Tutup",
        reopensMonday: "Buka kembali Senin pkl 08:00 WIB",
        reopensTomorrow: "Buka kembali besok pkl 08:00 WIB",
        addressLabel: "Fasilitas Pabrik",
        addressFull: "Jl. Otista Handapherang, Kec. Cijeungjing, Kabupaten Ciamis, Jawa Barat 46271",
        getDirections: "Petunjuk Arah Google Maps",
        appointmentNotice: "Kunjungan pabrik melalui janji temu",
      },
      checklistTitle: "Informasi yang disarankan untuk penawaran cepat:",
      checklistItems: [
        { title: "Volume & Jadwal", desc: "Estimasi jumlah lusin & target pengiriman" },
        { title: "Kategori Kaos Kaki", desc: "Bayi, anak, wanita, pria, atau olahraga" },
        { title: "Bahan & Spesifikasi", desc: "Preferensi serat benang & konstruksi rajut" },
        { title: "Kemasan & Label", desc: "Polybag grosir, rider card, atau label barcode" },
      ],
      mobileSticky: {
        whatsappBtn: "Chat WhatsApp",
        inquiryBtn: "Kirim Penawaran",
      },
    },
    footer: {
      bio: "PT. Sinlie Cahaya Matahari menyediakan solusi manufaktur kaos kaki berkualitas dengan pengalaman sejak 2018. Melayani pasar domestik dan pesanan ekspor ke Amerika Serikat dan Eropa dengan kapasitas operasional maksimum hingga 1.000.000 lusin per bulan.",
      subBio: "Modern Industrial Sock Manufacturing",
      navTitle: "Navigasi",
      catTitle: "Kategori Produk",
      contactTitle: "Kontak & Informasi",
      locationLabel: "Lokasi Fasilitas:",
      copyright: "PT. Sinlie Cahaya Matahari. Seluruh Hak Cipta Dilindungi.",
      partnerTag: "Precision in Every Stitch",
      backToTop: "Kembali ke Atas ↑",
    },
    widget: {
      inquiry: "Konsultasi B2B",
      hours: "Senin - Jumat 08:00 - 17:00 WIB",
      quoteBtn: "Hubungi Kontak",
    },
  },
  en: {
    nav: {
      about: "About",
      markets: "Markets",
      products: "Products",
      capabilities: "Capabilities",
      process: "Process",
      quality: "Quality",
      gallery: "Gallery",
      faq: "FAQ",
      contact: "Contact",
      quote: "Request a Quote",
    },
    hero: {
      statusBadge: "SOCK MANUFACTURING FACILITY",
      headlineStart: "Precision in Every",
      headlineHighlight: "Stitch.",
      tagline:
        "Flexible sock manufacturing solutions tailored to your product requirements.",
      description:
        "With experience in the sock industry since 2018, PT. Sinlie Cahaya Matahari provides sock manufacturing solutions tailored to different product requirements. Serving domestic and international markets, with export orders primarily reaching the United States and Europe.",
      ctaRfq: "Request a Quote",
      ctaCatalog: "View Product Categories",
      trustMetric1: "Export Reach: United States & Europe",
      trustMetric2: "Custom Material & Packaging Flexibility",
      trustMetric3: "Quality Control Aligned with AQL Standards",
      dockTechTitle: "Production Focus",
      dockTechVal: "Sock Manufacturing",
      dockTechDesc: "Diverse Categories & Specs",
      dockCapacityTitle: "Maximum Capacity",
      dockCapacityVal: "1,000,000 Dozen/Month*",
      dockCapacityDesc: "Maximum Operational Capacity",
      dockMarketsTitle: "Market Reach",
      dockMarketsVal: "Domestic & Export",
      dockMarketsDesc: "USA, Europe & Domestic",
      dockQcTitle: "Quality Assurance",
      dockQcVal: "AQL Standards",
      dockQcDesc: "Structured QC Inspection",
    },
    stats: {
      eyebrow: "Company at a Glance",
      title: "Manufacturing Scale & Operational Reach",
      items: {
        capacity: {
          value: "1,000,000",
          label: "Dozen / Month (Maximum Capacity)",
          desc: "Maximum operational production capacity, subject to product specifications and production requirements.",
        },
        experience: {
          value: "2018",
          label: "Industry Experience Since",
          desc: "Experience in the sock manufacturing industry since 2018 (Legal PT entity incorporated in 2023).",
        },
        markets: {
          value: "Domestic & Export",
          label: "Market Reach",
          desc: "Serving domestic and international markets, with export orders primarily reaching the United States and Europe.",
        },
        quality: {
          value: "AQL Standards",
          label: "Quality Control (QC)",
          desc: "Structured Quality Control function ensuring product compliance in reference to AQL standard guidelines.",
        },
      },
    },
    about: {
      eyebrow: "ABOUT THE COMPANY",
      title: "Dedication to Stitch Precision & Sock Manufacturing Solutions",
      intro:
        "With experience in the sock industry since 2018, PT. Sinlie Cahaya Matahari provides sock manufacturing solutions tailored to different product requirements.",
      p1: "Our trajectory in the sock industry is founded on a firm commitment to stitch consistency, dimensional sizing accuracy, and dependable fulfillment of customer orders. The official legal incorporation of PT. Sinlie Cahaya Matahari in 2023 reinforces our capacity to serve enduring B2B commercial partnerships.",
      p2: "We accommodate diverse sock categories—spanning infant and baby socks, school and children's socks, ladies' fashion models, classic men's formalwear, athletic socks, and custom client specifications. Fiber compositions, knit patterns, and packaging configurations can be discussed openly to meet your target product standards.",
      badgeExp: "Experience Since 2018",
      cardFacility: "SCM Manufacturing Facility",
      officeLabel: "Management",
      officeTitle: "Unified Operations",
      teamLabel: "Production Team",
      teamTitle: "Knitting Technicians & QC",
      strength1: "Dedicated focus on multi-category sock manufacturing",
      strength2: "Maximum operational capacity up to 1,000,000 dozen/month",
      strength3: "Disciplined QC procedures referencing AQL standard guidelines",
      focusTitle: "B2B Partnership Commitment",
      focusDesc:
        "Upholding order specification confidentiality and maintaining dependable production scheduling.",
    },
    markets: {
      eyebrow: "MARKET REACH",
      title: "Serving Domestic & International Markets",
      description:
        "PT. Sinlie Cahaya Matahari serves a broad range of customer types, accommodating both domestic market demands and international export orders.",
      domesticTitle: "Indonesian Domestic Market",
      domesticSubtitle: "Nationwide Supply",
      domesticDesc:
        "Serving retail brands, wholesale distributors, corporate supply programs, and institutional uniform orders across Indonesia.",
      domesticTag: "Domestic",
      exportTitle: "International Export Markets",
      exportSubtitle: "United States & Europe",
      exportDesc:
        "Our export orders primarily reach the United States and Europe, with shipments to other international destinations accommodated based on incoming orders.",
      exportTag: "Export",
      note: "Note: International shipments are fulfilled on an order basis directly from our manufacturing facilities in Indonesia.",
      badgeUs: "United States (USA)",
      badgeEu: "Europe",
      badgeId: "Nationwide (Indonesia)",
    },
    products: {
      eyebrow: "PRODUCT CATEGORIES",
      title: "Versatile Sock Manufacturing Tailored to Your Requirements",
      description:
        "A wide range of sock categories manufactured with flexible specifications, adaptable yarn materials, and customizable packaging.",
      tabs: {
        all: "All Categories",
        babyKids: "Baby & Kids",
        ladies: "Ladies",
        mensSport: "Men's & Athletic",
        custom: "Custom Specs",
      },
      gaugeLabel: "Gauge Range:",
      materialLabel: "Material:",
      packagingNote: "Packaging options can be tailored to customer requirements.",
      sampleBtn: "Inquire This Category",
      customBanner: {
        tag: "Manufacturing & Packaging Flexibility",
        title: "Need Socks with Custom Technical Specifications or Packaging?",
        desc: "We facilitate open technical discussions regarding yarn blends, sizing, knit patterns, and custom packaging tailored to your product standards.",
        btn: "Consult Custom Specifications",
      },
    },
    capabilities: {
      eyebrow: "FACTORY CAPABILITIES",
      title: "Manufacturing Infrastructure & Operational Flexibility",
      description:
        "Backed by high maximum operational capacity and thorough flexibility in accommodating diverse material compositions and packaging requirements.",
      specLabel: "Core Capabilities:",
      barCapacityTitle: "Maximum Capacity",
      barCapacityVal: "1,000,000 Dozen / Month",
      barCapacityDesc: "Maximum operational production capacity per month",
      barPackagingTitle: "Packaging Options",
      barPackagingVal: "Tailored to Needs",
      barPackagingDesc: "Packaging options tailored to customer requirements",
      barYarnTitle: "Material Flexibility",
      barYarnVal: "Cotton, Spandex, Elastic",
      barYarnDesc: "Yarn compositions customized per order",
    },
    process: {
      eyebrow: "PRODUCTION WORKFLOW",
      title: "Manufacturing Stages from Yarn to Packaging",
      description:
        "A structured workflow ensuring every dozen socks meets strict dimensional tolerances, wearer comfort, and neat presentation.",
      disclaimer:
        "*The workflow above illustrates our general sock manufacturing process and can be adapted to client technical order requirements.",
    },
    quality: {
      eyebrow: "QUALITY ASSURANCE (QC)",
      title: "Structured Inspection Guided by AQL Standards",
      description:
        "PT. Sinlie Cahaya Matahari implements a disciplined Quality Control function to ensure finished products conform strictly to agreed specifications.",
      qcStation: "Quality Inspection Station",
      operatorRole: "Quality Control Team",
      operatorTitle: "Physical & Visual Inspection",
      physicalTitle: "Structured Quality Control Function",
      physicalSubtitle: "Product consistency checks operating in reference to AQL standards",
      physicalDesc:
        "Quality control is carried out to verify stitch density, dimensional sizing stability, and surface visual cleanliness before final packing. Any items falling outside agreed specifications are segregated immediately.",
      protocol1: "AQL Standard Guidelines",
      protocol2: "Density & Dimension Inspection",
    },
    gallery: {
      eyebrow: "VISUAL DOCUMENTATION",
      title: "Manufacturing Facility & Production Process Overview",
      description:
        "Illustrative visual documentation of our knitting lines, finishing stations, quality inspection tables, and packaging operations.",
      visitNotice:
        "Facility Visits: On-site verification visits may be scheduled through prior coordination with our management team.",
      previewBadge: "Illustrative Documentation",
    },
    faq: {
      eyebrow: "B2B PROCUREMENT FAQ",
      title: "Manufacturing, Market Reach & Order Information",
      description:
        "Answers to common queries regarding production capacity, material flexibility, packaging, and export markets.",
      boxTitle: "Have Specific Product Requirements?",
      boxSubtitle: "Discuss your manufacturing needs directly with our team.",
      boxDesc:
        "Every project has distinct material criteria and market targets. We are ready to discuss sizing tolerances, yarn blends, and custom packaging options.",
      boxBtn: "Submit a Quotation Request",
    },
    contact: {
      tag: "B2B DIRECT INQUIRY",
      title: "Contact Us for Sock Manufacturing Consultation",
      description:
        "Discuss your product specifications, production volumes, or commercial inquiries directly with PT. Sinlie Cahaya Matahari through our official contact channels.",
      emailTitle: "Official Quotation & Business Email",
      emailDesc:
        "Send your partnership inquiries, tech pack specification sheets, or sock procurement documentation directly to our team.",
      emailCta: "Send Direct Email",
      phoneTitle: "Telephone & Business WhatsApp",
      phoneDesc:
        "Contact our dedicated person directly for technical knitting consultations, production scheduling, or fast WhatsApp communication.",
      phonePending:
        "Direct telephone desk is currently pending final management confirmation. For immediate assistance, please contact us via official email.",
      locationTitle: "Factory Facility Location",
      locationDesc:
        "Ciamis, West Java, Indonesia. Physical facility visits and on-site buyer audits can be scheduled through prior appointment.",
      hoursTitle: "Business Hours",
      hoursDesc:
        "Monday - Friday: 08:00 - 17:00 WIB (Western Indonesia Time). Active response during operating hours.",
      quoteGuideTag: "QUOTATION GUIDANCE",
      quoteGuideTitle: "Requesting a Quotation?",
      quoteGuideDesc:
        "To expedite technical review and quotation estimation, we recommend including the following details in your email inquiry:",
      quoteGuideItems: [
        "Estimated order volume (dozens) and target production timeline",
        "Target sock category (baby, kids, ladies, men's formal, athletic, or custom)",
        "Yarn material preferences (cotton, spandex, elastic) and pattern references",
        "Packaging preferences (standard dozen format or custom packaging specs)",
      ],
      quoteCtaBtn: "Open Quotation Email Draft",
      quoteEmailSubject: "Sock Manufacturing Quotation Inquiry - SCM",
      copyEmailBtn: "Copy Email Address",
      copiedText: "Email Copied!",

      // Redesigned Contact Section
      eyebrow: "B2B Inquiry",
      heroTitle: "Let's Talk Sock Manufacturing",
      heroSubtext: "Connect directly with our factory team in Ciamis for direct OEM pricing, custom specifications, and responsive lead times.",
      form: {
        cardTitle: "Request a Manufacturing Quotation",
        cardSubtitle: "Submit your production requirements for direct review by our technical team.",
        nameLabel: "Full Name",
        namePlaceholder: "e.g. John Doe",
        companyLabel: "Company / Brand Name",
        companyPlaceholder: "e.g. Pacific Apparel Brands or Importers Ltd.",
        emailLabel: "Business Email",
        emailPlaceholder: "buyer@company.com",
        phoneLabel: "WhatsApp / Phone",
        phonePlaceholder: "+62 812 3456 7890",
        categoryLabel: "Sock Category",
        categoryPlaceholder: "Select a sock category...",
        categories: {
          baby: "Baby & Toddler Socks (0–24m)",
          kids: "Kids & School Uniform Socks",
          ladies: "Ladies & Casual Socks",
          mens: "Men's Formal & Classic Socks",
          athletic: "Athletic & High-Performance Sport Socks",
          custom: "Custom Specification / Private Label OEM",
        },
        volumeLabel: "Estimated Volume (Dozens)",
        volumePlaceholder: "e.g. 500 dozens or select tier",
        volumeOptions: [
          "100 – 499 dozens (Sampling & Trial Batch)",
          "500 – 1,999 dozens (Standard Production Run)",
          "2,000 – 9,999 dozens (Volume Commercial Run)",
          "10,000+ dozens (High Volume Export Program)",
        ],
        timelineLabel: "Target Production Timeline",
        timelinePlaceholder: "Select target timeline...",
        timelineOptions: [
          "Urgent (Within 1 month)",
          "Standard (1 – 2 months)",
          "Planned (3+ months)",
          "Regular Recurring / Monthly Contract",
        ],
        materialLabel: "Yarn & Material Notes",
        materialPlaceholder: "e.g. 80% Combed Cotton, 17% Polyester, 3% Spandex; cushioned terry sole...",
        packagingLabel: "Packaging Preference",
        packagingPlaceholder: "Select packaging type...",
        packagingOptions: [
          "Standard 12-Pair Bulk Master Bag",
          "Individual Polybag + Barcode SKU Label",
          "Custom Brand Rider Card / Header Card",
          "Retail Display Hanger Hook & Packaging",
          "Custom Branded Gift Box / Specialty",
        ],
        messageLabel: "Project Details & Specifications",
        messagePlaceholder: "Describe sizing, gauge / needle count (144N, 168N, 200N), target market, or sampling requests...",
        fileUploadLabel: "Tech Pack / Design File (Optional)",
        fileUploadHint: "PDF, AI, PSD, PNG, JPG, ZIP up to 25MB",
        fileUploadDrag: "Click to upload or drag tech pack file here",
        fileUploadChange: "Change file",
        fileSelected: "Selected file:",
        submitBtn: "Send Inquiry",
        submittingBtn: "Submitting Inquiry...",
        openEmailDraft: "or open email draft",
        errors: {
          name: "Please enter your full name",
          company: "Please enter your company or brand name",
          email: "Please enter a valid business email",
          phone: "Please enter your phone or WhatsApp number",
          category: "Please select a sock category",
        },
        success: {
          title: "Inquiry Sent Successfully!",
          subtitle: "Thank you for reaching out to PT. Sinlie Cahaya Matahari. Our factory team has received your project inquiry.",
          badge: "We reply within 1 business day",
          nextStepsTitle: "Next Steps:",
          nextSteps: [
            "Technical review verifies needle count, yarn availability, and machine gauge compatibility.",
            "Direct factory quotation (FOB / CMT) is prepared based on your target quantity.",
            "A dedicated representative will contact you via email or WhatsApp to confirm next steps.",
          ],
          submitAnotherBtn: "Submit Another Inquiry",
          whatsappFollowupBtn: "Follow Up on WhatsApp",
        },
      },
      directCard: {
        cardTitle: "Direct Factory Contact",
        contactPerson: "Mr. Fakhrudin (Mr. Aming)",
        contactRole: "B2B Production & Sales Director",
        whatsappBtn: "Chat on WhatsApp",
        callBtn: "Call Factory Desk",
        copyPhone: "Copy Phone",
        copiedPhone: "Phone Copied!",
        officialEmailLabel: "Official Business Email",
        copyEmail: "Copy Email",
        copiedEmail: "Email Copied!",
        hoursLabel: "Operating Hours",
        hoursSchedule: "Mon–Fri · 08:00–17:00 WIB",
        openNow: "Open now",
        closedNow: "Closed",
        reopensMonday: "Reopens Monday at 08:00 WIB",
        reopensTomorrow: "Reopens tomorrow at 08:00 WIB",
        addressLabel: "Manufacturing Facility",
        addressFull: "Jl. Otista Handapherang, Kec. Cijeungjing, Kabupaten Ciamis, Jawa Barat 46271",
        getDirections: "Get Directions on Google Maps",
        appointmentNotice: "Factory visits by appointment",
      },
      checklistTitle: "What to include for faster quoting:",
      checklistItems: [
        { title: "Volume & Timeline", desc: "Estimated dozens & required delivery target" },
        { title: "Sock Category", desc: "Baby, kids, ladies, men's, or sport" },
        { title: "Yarn & Material", desc: "Fiber composition & knitting specs" },
        { title: "Packaging Specs", desc: "Master polybag, rider card, or retail packaging" },
      ],
      mobileSticky: {
        whatsappBtn: "WhatsApp Us",
        inquiryBtn: "Send Inquiry",
      },
    },
    footer: {
      bio: "PT. Sinlie Cahaya Matahari provides quality sock manufacturing solutions with experience in the industry since 2018. Serving domestic and international export orders to the United States and Europe with a maximum operational capacity of up to 1,000,000 dozen socks per month.",
      subBio: "Modern Industrial Sock Manufacturing",
      navTitle: "Navigation",
      catTitle: "Product Categories",
      contactTitle: "Contact & Information",
      locationLabel: "Facility Location:",
      copyright: "PT. Sinlie Cahaya Matahari. All Rights Reserved.",
      partnerTag: "Precision in Every Stitch",
      backToTop: "Back to Top ↑",
    },
    widget: {
      inquiry: "B2B Consultation",
      hours: "Mon - Fri 08:00 - 17:00 WIB",
      quoteBtn: "Contact SCM",
    },
  },
};
