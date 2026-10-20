"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { ImageLightbox, LightboxImage } from "@/components/ui/ImageLightbox";
import { Maximize2, Building2, Factory, ChevronLeft, ChevronRight } from "lucide-react";

export function AboutSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

  const galleryItems = [
    {
      id: "gate",
      titleId: "Fasilitas & Gerbang Pabrik",
      titleEn: "Factory Gate & Facility",
      subtitleId: "Tampak Depan Pabrik",
      subtitleEn: "Factory Front Exterior",
      src: "/images/factory_gate_ciamis.webp",
      badgeId: "Fasilitas Pabrik • Ciamis, Jawa Barat",
      badgeEn: "Manufacturing Facility • Ciamis, West Java",
      captionId:
        "Tampak depan gerbang utama fasilitas manufaktur PT. Sinlie Cahaya Matahari di Desa Cihideung, Kec. Cisaga, Kab. Ciamis.",
      captionEn:
        "Main entrance gate of PT. Sinlie Cahaya Matahari manufacturing facility located in Cihideung Village, Cisaga, Ciamis.",
      icon: Building2,
    },
    {
      id: "knitting",
      titleId: "Lantai Mesin Rajut",
      titleEn: "Knitting Machine Hall",
      subtitleId: "Line 4 Produksi",
      subtitleEn: "Line 4 Production",
      src: "/images/symmetric_knitting_machine_hall.png",
      badgeId: "Mesin Knitting • Line 4",
      badgeEn: "Knitting Machine Hall • Line 4",
      captionId:
        "Fasilitas lantai produksi perajutan PT. Sinlie Cahaya Matahari dengan jajaran mesin rajut kaos kaki terkomputerisasi.",
      captionEn:
        "PT. Sinlie Cahaya Matahari knitting hall featuring computerized sock knitting lines and integrated yarn systems.",
      icon: Factory,
    },
  ];

  // Auto-slide effect (advances every 5 seconds, pauses when hovered)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, galleryItems.length]);

  const activeItem = galleryItems[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-surface-muted/30 border-b border-border">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Left Column: Authentic Manufacturing Slideshow Showcase            */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 order-2 lg:order-1">
            <ScrollReveal duration={600} variant="slide-right">
              <div className="flex flex-col gap-3">
                {/* Editorial Photo Frame with Slideshow Animation & Click-to-Zoom */}
                <div
                  className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-surface shadow-sm group cursor-pointer select-none"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() =>
                    setLightboxImage({
                      src: activeItem.src,
                      title: isEn ? activeItem.titleEn : activeItem.titleId,
                      category: isEn ? activeItem.badgeEn : activeItem.badgeId,
                      alt: isEn ? activeItem.titleEn : activeItem.titleId,
                    })
                  }
                  title={isEn ? "Click to view full image" : "Klik untuk melihat foto resolusi penuh"}
                >
                  {/* Crossfading Slide Images */}
                  {galleryItems.map((item, idx) => (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        currentIndex === idx
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={item.src}
                        alt={isEn ? item.titleEn : item.titleId}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                        priority={idx === 0}
                      />
                    </div>
                  ))}

                  {/* Top-Right: Zoom Icon Button */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 size-8 sm:size-9 rounded-lg bg-black/50 group-hover:bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 className="size-4" />
                  </div>

                  {/* Left & Right Slideshow Arrows (Visible on hover / touch) */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 size-9 sm:size-10 rounded-full bg-black/45 hover:bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer shadow-md"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 size-9 sm:size-10 rounded-full bg-black/45 hover:bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer shadow-md"
                  >
                    <ChevronRight className="size-5" />
                  </button>

                  {/* Subtle photographic corner metadata pill */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-sm pointer-events-none transition-all duration-300">
                    <span className="text-[11px] font-mono tracking-wide uppercase font-semibold">
                      {isEn ? activeItem.badgeEn : activeItem.badgeId}
                    </span>
                  </div>

                  {/* Slideshow Progress Counter (Bottom-Right) */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-semibold flex items-center gap-1.5 pointer-events-none">
                    <span>{currentIndex + 1}</span>
                    <span className="text-white/50">/</span>
                    <span>{galleryItems.length}</span>
                  </div>
                </div>

                {/* Slideshow Bar & Interactive Indicators */}
                <div className="flex items-center justify-between gap-3 px-1 pt-0.5">
                  {/* Current Slide Title & Subtitle */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="size-2 rounded-full bg-primary animate-pulse shrink-0" />
                    <p className="text-xs font-bold text-text-primary truncate">
                      {isEn ? activeItem.titleEn : activeItem.titleId}
                      <span className="text-text-secondary font-normal ml-1.5">
                        • {isEn ? activeItem.subtitleEn : activeItem.subtitleId}
                      </span>
                    </p>
                  </div>

                  {/* Slide Indicators / Navigation Pills */}
                  <div className="flex items-center gap-1.5 shrink-0" role="tablist">
                    {galleryItems.map((item, idx) => {
                      const isActive = currentIndex === idx;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(idx);
                          }}
                          aria-label={`Slide ${idx + 1}: ${isEn ? item.titleEn : item.titleId}`}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            isActive
                              ? "w-7 bg-primary shadow-xs"
                              : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Dynamic Editorial Photo Caption */}
                <p className="text-xs text-text-secondary leading-relaxed px-1 min-h-[34px] transition-all duration-300">
                  {isEn ? activeItem.captionEn : activeItem.captionId}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Right Column: Clean Editorial Company Profile & Milestone Timeline */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <ScrollReveal duration={600} delay={100} variant="slide-left">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit mb-4">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                  {isEn ? "About the Company" : "Tentang Perusahaan"}
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight leading-[1.2] mb-5">
                PT. Sinlie Cahaya Matahari
              </h2>

              {/* Editorial Lead Paragraph */}
              <p className="text-base sm:text-lg font-medium text-text-primary/90 leading-relaxed mb-4">
                {isEn
                  ? "With experience in the sock industry since 2018, PT. Sinlie Cahaya Matahari provides sock manufacturing solutions tailored to different customer product requirements."
                  : "Dengan pengalaman di industri kaos kaki sejak 2018, PT. Sinlie Cahaya Matahari menyediakan solusi manufaktur kaos kaki yang dapat disesuaikan dengan kebutuhan produk pelanggan."}
              </p>

              {/* Supporting Editorial Paragraph */}
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
                {isEn
                  ? "Our operations focus on reliable manufacturing, dimensional consistency, and flexible production. We accommodate diverse sock categories—from daily essentials to customized designs—with material and packaging specifications discussed openly to meet agreed customer standards."
                  : "Operasional kami berfokus pada kualitas rajutan, konsistensi ukuran, dan keandalan pemenuhan pesanan. Kami melayani beragam kategori kaos kaki—mulai dari kebutuhan harian hingga pesanan khusus—dengan spesifikasi bahan dan pengemasan yang didiskusikan secara terbuka sesuai kebutuhan mitra."}
              </p>

              {/* ──────────────────────────────────────────────────────────── */}
              {/* Restrained Milestones Timeline (2018 & 2023)                 */}
              {/* ──────────────────────────────────────────────────────────── */}
              <div className="border-t border-border pt-6 mt-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary mb-5">
                  {isEn ? "Company Milestones" : "Tonggak Perjalanan Perusahaan"}
                </h3>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-border">
                  {/* Milestone 1: 2018 */}
                  <div className="relative group">
                    {/* Timeline Node */}
                    <span className="absolute -left-6 top-1 size-4 rounded-full bg-surface border-2 border-primary flex items-center justify-center transition-colors group-hover:border-accent">
                      <span className="size-1.5 rounded-full bg-primary group-hover:bg-accent transition-colors" />
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm font-mono font-bold text-primary">
                          2018
                        </span>
                        <span className="text-xs font-semibold text-text-primary">
                          {isEn
                            ? "Sock Industry Experience Inception"
                            : "Awal Pengalaman Industri Kaos Kaki"}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {isEn
                          ? "Commenced manufacturing operations and technical expertise in the sock production industry."
                          : "Memulai operasional dan membangun keahlian teknis dalam bidang manufaktur kaos kaki."}
                      </p>
                    </div>
                  </div>

                  {/* Milestone 2: 2023 */}
                  <div className="relative group">
                    {/* Timeline Node */}
                    <span className="absolute -left-6 top-1 size-4 rounded-full bg-surface border-2 border-primary flex items-center justify-center transition-colors group-hover:border-accent">
                      <span className="size-1.5 rounded-full bg-primary group-hover:bg-accent transition-colors" />
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm font-mono font-bold text-primary">
                          2023
                        </span>
                        <span className="text-xs font-semibold text-text-primary">
                          {isEn
                            ? "Formal Incorporation of PT Entity"
                            : "Pendirian Resmi Badan Hukum PT"}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {isEn
                          ? "Official legal establishment of PT. Sinlie Cahaya Matahari to support structured B2B partnerships."
                          : "Pendirian resmi badan hukum PT. Sinlie Cahaya Matahari untuk mendukung kemitraan B2B yang berkesinambungan."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>

      {/* Fullscreen Photo Lightbox Modal */}
      <ImageLightbox
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        image={lightboxImage}
      />
    </section>
  );
}
