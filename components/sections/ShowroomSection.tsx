"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  MapPin,
  Eye,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageLightbox, LightboxImage } from "@/components/ui/ImageLightbox";
import { SHOWROOM_ITEMS, ShowroomItem } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export function ShowroomSection() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const [activeLightboxIdx, setActiveLightboxIdx] = useState<number | null>(null);

  const activeItem: ShowroomItem | null =
    activeLightboxIdx !== null ? SHOWROOM_ITEMS[activeLightboxIdx] : null;

  const lightboxImage: LightboxImage | null = activeItem
    ? {
        src: activeItem.image,
        title: isEn ? activeItem.titleEn : activeItem.title,
        category: isEn ? activeItem.badgeEn : activeItem.badge,
        dimensions: isEn
          ? `Showroom Asset ${activeLightboxIdx !== null ? activeLightboxIdx + 1 : 1} of ${SHOWROOM_ITEMS.length} • SCM Factory Ciamis`
          : `Dokumentasi Showroom ${activeLightboxIdx !== null ? activeLightboxIdx + 1 : 1} dari ${SHOWROOM_ITEMS.length} • Pabrik SCM Ciamis`,
        alt: isEn ? activeItem.titleEn : activeItem.title,
      }
    : null;

  const handleNext = () => {
    if (activeLightboxIdx !== null) {
      setActiveLightboxIdx((prev) => ((prev ?? 0) + 1) % SHOWROOM_ITEMS.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIdx !== null) {
      setActiveLightboxIdx(
        (prev) => ((prev ?? 0) - 1 + SHOWROOM_ITEMS.length) % SHOWROOM_ITEMS.length
      );
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-surface-muted/30 border-b border-border relative overflow-hidden">
      {/* Ambient background illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary-brand/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        {/* Section Heading */}
        <ScrollReveal duration={600} direction="up">
          <SectionHeading
            eyebrow={t.showroom.eyebrow}
            title={t.showroom.title}
            description={t.showroom.description}
            align="center"
          />
        </ScrollReveal>

        {/* 3 Showroom Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {SHOWROOM_ITEMS.map((item, idx) => {
            const title = isEn ? item.titleEn : item.title;
            const subtitle = isEn ? item.subtitleEn : item.subtitle;
            const description = isEn ? item.descriptionEn : item.description;
            const badge = isEn ? item.badgeEn : item.badge;
            const tags = isEn ? item.tagsEn : item.tags;

            return (
              <ScrollReveal
                key={item.id}
                duration={600}
                delay={idx * 120}
                variant="pop-in"
                className="h-full"
              >
                <div className="h-full rounded-2xl sm:rounded-3xl bg-surface border border-border hover:border-secondary-brand/70 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                  {/* Image Display Area with Click to Enlarge */}
                  <div
                    onClick={() => setActiveLightboxIdx(idx)}
                    className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden cursor-pointer select-none"
                    role="button"
                    tabIndex={0}
                    aria-label={`${title} - ${isEn ? "Click to view full photo" : "Klik untuk perbesar foto"}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveLightboxIdx(idx);
                      }
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />

                    {/* Gradient Overlay for Top/Bottom Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 opacity-70 group-hover:opacity-60 transition-opacity pointer-events-none" />

                    {/* Top Left: Glassmorphic Location & Badge Pill */}
                    <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold tracking-wide uppercase shadow-sm">
                        <MapPin className="size-3 text-accent" />
                        <span>{badge}</span>
                      </span>
                    </div>

                    {/* Top Right: Zoom Fullscreen Trigger Button */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span
                        className="size-9 rounded-full bg-black/50 backdrop-blur-md border border-white/25 text-white flex items-center justify-center opacity-85 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md"
                        title={t.showroom.zoomHint}
                      >
                        <Maximize2 className="size-4 text-accent" />
                      </span>
                    </div>

                    {/* Bottom Floating Hint on Hover */}
                    <div className="absolute inset-x-0 bottom-0 p-3.5 z-10 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-between text-white text-xs pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 text-accent font-semibold text-[11px] drop-shadow-sm">
                        <Eye className="size-3.5" />
                        <span>{t.showroom.zoomHint}</span>
                      </span>
                      <span className="font-mono text-[10px] text-white/80">
                        {idx + 1} / {SHOWROOM_ITEMS.length}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Information */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-secondary-brand block">
                        {subtitle}
                      </span>

                      <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-primary transition-colors leading-snug">
                        {title}
                      </h3>

                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pt-0.5">
                        {description}
                      </p>
                    </div>

                    {/* Bottom Tag Badges */}
                    <div className="pt-3 border-t border-border/80 flex items-center gap-1.5 flex-wrap">
                      <Layers className="size-3 text-primary shrink-0 mr-1" />
                      {tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-0.5 rounded-md bg-surface-muted border border-border text-[11px] font-medium text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>

      {/* Lightbox Modal with Next/Prev Arrow Keys & Chevrons */}
      {lightboxImage && (
        <ImageLightbox
          isOpen={activeLightboxIdx !== null}
          image={lightboxImage}
          onClose={() => setActiveLightboxIdx(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={activeLightboxIdx !== null ? activeLightboxIdx + 1 : 1}
          totalImages={SHOWROOM_ITEMS.length}
        />
      )}
    </section>
  );
}
