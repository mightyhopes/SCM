"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Factory,
  Cpu,
  Layers,
  ShieldCheck,
  Package,
  Truck,
  Maximize2,
  Info,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageLightbox, LightboxImage } from "@/components/ui/ImageLightbox";
import { GALLERY_ITEMS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

const GALLERY_METRICS: Record<
  string,
  {
    icon: typeof Factory;
    badge: string;
    badgeEn: string;
    detail: string;
    detailEn: string;
    techSpecs: string[];
    techSpecsEn: string[];
  }
> = {
  "gal-1": {
    icon: Factory,
    badge: "Active Knitting Line",
    badgeEn: "Active Knitting Line",
    detail: "Jajaran mesin rajut silinder tunggal & ganda berkecepatan tinggi dengan sistem komputerisasi pola terintegrasi.",
    detailEn: "High-speed single and double cylinder computerized knitting machines with integrated digital pattern systems.",
    techSpecs: ["Multi-gauge 96N - 200N", "Kecepatan 300-340 RPM", "Zero-stop Automatic Yarn Feeder"],
    techSpecsEn: ["Multi-gauge 96N - 200N", "Speed 300-340 RPM", "Zero-stop Automatic Yarn Feeder"],
  },
  "gal-2": {
    icon: Layers,
    badge: "Yarn & Fiber Integrity",
    badgeEn: "Yarn & Fiber Integrity",
    detail: "Penyortiran material katun combed bermutu tinggi, benang spandeks elastis, dan benang nilon untuk daya tahan maksimal.",
    detailEn: "Screening of premium combed cotton, high-recovery spandex core, and durable nylon yarns for maximum longevity.",
    techSpecs: ["Combed Cotton 30s/40s", "High-recovery Spandex Core", "Warna Reaktif Tahan Cuci"],
    techSpecsEn: ["Combed Cotton 30s/40s", "High-recovery Spandex Core", "Wash-Resistant Reactive Dyes"],
  },
  "gal-3": {
    icon: Cpu,
    badge: "Thermal Boarding",
    badgeEn: "Thermal Boarding",
    detail: "Mesin setting uap suhu terkontrol untuk mengunci dimensi dan bentuk anatomis kaus kaki agar konsisten per ukuran.",
    detailEn: "Temperature-controlled steam setting presses to lock anatomical shape and guarantee consistent sizing per batch.",
    techSpecs: ["Presisi Dimensi ±0.5 cm", "Steam Heat Setting", "Anti-shrink Stabilization"],
    techSpecsEn: ["Dimensional Precision ±0.5 cm", "Steam Heat Setting", "Anti-shrink Stabilization"],
  },
  "gal-4": {
    icon: ShieldCheck,
    badge: "Dual QA Inspection",
    badgeEn: "Dual QA Inspection",
    detail: "Meja inspeksi visual 100% dan sensor detektor jarum untuk memastikan keselamatan pemakai akhir.",
    detailEn: "100% manual visual inspection stations and calibrated metal detectors ensuring absolute wearer safety.",
    techSpecs: ["100% Manual Visual Check", "Sensitivitas Deteksi Logam 0.8mm", "Uji Elastisitas Cuff"],
    techSpecsEn: ["100% Manual Visual Check", "0.8mm Metal Sensitivity", "Cuff Elasticity Verification"],
  },
  "gal-5": {
    icon: Package,
    badge: "Manual Packing & Inspection",
    badgeEn: "Manual Packing & Inspection",
    detail: "Pengecekan fisik tahap akhir, pelipatan presisi, dan pengemasan ke dalam kotak dan polybag ritel.",
    detailEn: "Final physical verification, neat folding, and packing into retail polybags and master cartons.",
    techSpecs: ["Pengecekan Label", "Polybag Per Lusin", "QC Double-Check"],
    techSpecsEn: ["Brand Label Check", "Polybag Per Dozen", "QC Double-Check"],
  },
  "gal-6": {
    icon: Layers,
    badge: "Jacquard Weave Detail",
    badgeEn: "Jacquard Weave Detail",
    detail: "Pola rajutan jacquard presisi tinggi dengan kerapatan benang stabil untuk ketajaman visual logo brand.",
    detailEn: "High-definition computerized jacquard knitting with stable thread tension for sharp brand logo rendering.",
    techSpecs: ["Motif Kustom Komputer", "High-density Weave", "Elastisitas Stabil"],
    techSpecsEn: ["Custom Digital Pattern", "High-density Weave", "Stable Elasticity"],
  },
  "gal-7": {
    icon: Package,
    badge: "Inventory & Warehouse",
    badgeEn: "Inventory & Warehouse",
    detail: "Area penyimpanan dan manajemen stok dengan kontrol kelembapan untuk menjaga kesegaran serat katun.",
    detailEn: "Climate-controlled storage and warehouse inventory management preserving natural cotton fiber integrity.",
    techSpecs: ["Kontrol Kelembapan", "Sistem Batching FIFO", "Karton Standar Ekspor"],
    techSpecsEn: ["Climate Control", "FIFO Batching System", "Export Standard Cartons"],
  },
  "gal-8": {
    icon: Truck,
    badge: "Fleet & Dispatch",
    badgeEn: "Fleet & Dispatch",
    detail: "Armada logistik terintegrasi untuk pengantaran tepat waktu ke pusat distribusi ritel dan jaringan grosir mitra.",
    detailEn: "Dedicated logistics fleet for prompt dispatch to wholesale distribution centers and retail hubs.",
    techSpecs: ["Armada Khusus Pabrik", "On-time Dispatch", "Tracking Pengiriman B2B"],
    techSpecsEn: ["Dedicated Factory Fleet", "On-time Dispatch", "B2B Freight Tracking"],
  },
};

export function FactoryGallery() {
  const { t, language } = useLanguage();
  const isEn = language === "en";
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenLightbox = (item: (typeof GALLERY_ITEMS)[number]) => {
    const meta = GALLERY_METRICS[item.id] || GALLERY_METRICS["gal-1"];
    const title = isEn ? item.titleEn : item.title;
    const category = isEn ? item.categoryEn : item.category;
    const detail = isEn ? meta.detailEn : meta.detail;

    setSelectedImage({
      src: item.image,
      title,
      category,
      dimensions: item.dimensions,
      alt: `${title} - ${detail}`,
    });
    setIsLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-surface border-b border-border">
      <Container size="default">
        <ScrollReveal duration={600} direction="up">
          <SectionHeading
            eyebrow={t.gallery.eyebrow}
            title={t.gallery.title}
            description={t.gallery.description}
            align="center"
          />
        </ScrollReveal>

        {/* Dynamic Visual Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {GALLERY_ITEMS.map((item, idx) => {
            const meta = GALLERY_METRICS[item.id] || GALLERY_METRICS["gal-1"];
            const Icon = meta.icon;
            const title = isEn ? item.titleEn : item.title;
            const category = isEn ? item.categoryEn : item.category;
            const badge = isEn ? meta.badgeEn : meta.badge;
            const detail = isEn ? meta.detailEn : meta.detail;
            const specs = isEn ? meta.techSpecsEn : meta.techSpecs;

            return (
              <ScrollReveal
                key={item.id}
                duration={500}
                delay={idx * 60}
                direction="up"
                className="h-full"
              >
                <div
                  onClick={() => handleOpenLightbox(item)}
                  className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-surface hover:border-secondary-brand hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Photo Canvas */}
                  <div className="relative h-56 sm:h-64 w-full bg-surface-muted overflow-hidden">
                    <Image
                      src={item.image}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                    {/* Top Status Badges */}
                    <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="text-[10px] font-mono px-2 py-0.5 bg-black/60 backdrop-blur-md text-white border border-white/20"
                      >
                        {category}
                      </Badge>
                      <div className="size-7 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="size-3.5" />
                      </div>
                    </div>

                    {/* Bottom Floating Metadata inside Photo */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 space-y-1">
                      <div className="flex items-center gap-1.5 text-accent text-[11px] font-mono font-bold">
                        <Icon className="size-3.5" />
                        <span className="uppercase tracking-wider">{badge}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 drop-shadow-xs">
                        {title}
                      </h3>
                    </div>
                  </div>

                  {/* Operational Technical Detail Strip */}
                  <div className="p-4 bg-surface flex-1 flex flex-col justify-between border-t border-border/80">
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                      {detail}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-border flex items-center gap-1.5 flex-wrap">
                      {specs.slice(0, 2).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-surface-muted border border-border text-text-secondary"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Industrial Transparency Note */}
        <ScrollReveal duration={600} direction="up" className="mt-10">
          <div className="p-5 rounded-2xl bg-surface-muted border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
            <div className="flex items-center gap-2.5">
              <Info className="size-4 text-primary shrink-0" />
              <span>{t.gallery.visitNotice}</span>
            </div>
            <span className="font-mono text-primary text-[11px] font-bold shrink-0">
              {t.gallery.factoryStatus}
            </span>
          </div>
        </ScrollReveal>
      </Container>

      {/* Accessible Lightbox Modal */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        image={selectedImage}
      />
    </section>
  );
}
