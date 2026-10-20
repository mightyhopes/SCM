"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Cpu,
  Factory,
  Sparkles,
  PackageCheck,
  CheckCircle2,
  Maximize2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageLightbox, LightboxImage } from "@/components/ui/ImageLightbox";
import { CAPABILITIES } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  Cpu,
  Factory,
  Sparkles,
  PackageCheck,
};

export function ManufacturingSection() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const [activeLightboxIdx, setActiveLightboxIdx] = useState<number | null>(null);

  const activeCap =
    activeLightboxIdx !== null ? CAPABILITIES[activeLightboxIdx] : null;

  const lightboxImage: LightboxImage | null = activeCap
    ? {
        src: activeCap.image,
        title: isEn ? activeCap.titleEn : activeCap.title,
        category: isEn ? activeCap.badgeTextEn : activeCap.badgeText,
        dimensions: isEn
          ? "High-Resolution Facility Asset • SCM Ciamis"
          : "Dokumentasi Fasilitas Pabrik • SCM Ciamis",
        alt: isEn ? activeCap.titleEn : activeCap.title,
      }
    : null;

  const handleNext = () => {
    if (activeLightboxIdx !== null) {
      setActiveLightboxIdx((prev) => ((prev ?? 0) + 1) % CAPABILITIES.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIdx !== null) {
      setActiveLightboxIdx(
        (prev) => ((prev ?? 0) - 1 + CAPABILITIES.length) % CAPABILITIES.length
      );
    }
  };

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-surface-muted/30 border-b border-border">
      <Container size="default">
        {/* Section Heading */}
        <ScrollReveal duration={600} direction="up">
          <SectionHeading
            eyebrow={t.capabilities.eyebrow}
            title={t.capabilities.title}
            description={t.capabilities.description}
            align="center"
          />

          {/* Interactive Inspection Pill */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-[11px] sm:text-xs font-semibold text-primary shadow-2xs">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-accent" />
              </span>
              <span>
                {isEn
                  ? "4 Core Factory Pillars • Click any facility photo for full-resolution view"
                  : "4 Pilar Fasilitas Pabrik • Klik foto mana saja untuk melihat resolusi penuh"}
              </span>
            </span>
          </div>
        </ScrollReveal>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {CAPABILITIES.map((cap, idx) => {
            const IconComponent =
              iconMap[cap.iconName as keyof typeof iconMap] || Cpu;
            const title = isEn ? cap.titleEn : cap.title;
            const desc = isEn ? cap.descriptionEn : cap.description;
            const badge = isEn ? cap.badgeTextEn : cap.badgeText;
            const specs = isEn ? cap.specsEn : cap.specs;

            return (
              <ScrollReveal
                key={cap.id}
                duration={550}
                delay={idx * 80}
                variant={idx % 2 === 0 ? "slide-right" : "slide-left"}
                className="h-full"
              >
                <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-border hover:border-secondary-brand/60 transition-all duration-300 shadow-xs hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between h-full group">
                  <div>
                    {/* Primary Photographic Showcase - Clickable for Lightbox */}
                    <button
                      type="button"
                      onClick={() => setActiveLightboxIdx(idx)}
                      className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden bg-surface-muted mb-5 border border-border group/photo text-left block cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={
                        isEn
                          ? `Inspect facility photo: ${title}`
                          : `Perbesar foto fasilitas: ${title}`
                      }
                    >
                      <Image
                        src={cap.image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-cover group-hover/photo:scale-106 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent pointer-events-none" />

                      {/* Hover Sheen & Zoom Prompt */}
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-xs font-semibold shadow-lg border border-white/20 transform translate-y-2 group-hover/photo:translate-y-0 transition-transform duration-300">
                          <Maximize2 className="size-3.5 text-accent" />
                          <span>{isEn ? "Inspect Facility" : "Perbesar Foto"}</span>
                        </span>
                      </div>

                      {/* Top Overlay Badge */}
                      <div className="absolute top-3 right-3 z-10 pointer-events-none">
                        <Badge
                          variant="secondary"
                          className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 bg-surface/95 backdrop-blur-md text-primary font-bold shadow-xs border border-white/30"
                        >
                          {badge}
                        </Badge>
                      </div>
                    </button>

                    <div className="mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="size-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <IconComponent className="size-4" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                          {title}
                        </h3>
                      </div>
                      <p className="mt-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>

                  {/* Specs List */}
                  <div className="pt-4 border-t border-border flex flex-col gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary block mb-0.5">
                      {t.capabilities.specLabel}
                    </span>
                    {specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-2 text-xs text-text-primary"
                      >
                        <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Technical Specification Bar: Capacity, Packaging & Materials */}
        <ScrollReveal duration={600} direction="up" className="mt-12">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-xs hover:border-secondary-brand/40 transition-colors">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="pt-4 sm:pt-0">
                <span className="text-xs uppercase tracking-wider text-secondary-brand font-semibold">
                  {t.capabilities.barCapacityTitle}
                </span>
                <p className="text-xl font-bold text-primary mt-1">
                  {t.capabilities.barCapacityVal}
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  {t.capabilities.barCapacityDesc}
                </p>
              </div>
              <div className="pt-4 sm:pt-0 sm:px-4">
                <span className="text-xs uppercase tracking-wider text-secondary-brand font-semibold">
                  {t.capabilities.barPackagingTitle}
                </span>
                <p className="text-xl font-bold text-text-primary mt-1">
                  {t.capabilities.barPackagingVal}
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  {t.capabilities.barPackagingDesc}
                </p>
              </div>
              <div className="pt-4 sm:pt-0 sm:pl-4">
                <span className="text-xs uppercase tracking-wider text-secondary-brand font-semibold">
                  {t.capabilities.barYarnTitle}
                </span>
                <p className="text-xl font-bold text-text-primary mt-1">
                  {t.capabilities.barYarnVal}
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  {t.capabilities.barYarnDesc}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Fullscreen Lightbox for Facility Inspection */}
        <ImageLightbox
          isOpen={activeLightboxIdx !== null}
          onClose={() => setActiveLightboxIdx(null)}
          image={lightboxImage}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={activeLightboxIdx ?? undefined}
          totalImages={CAPABILITIES.length}
        />
      </Container>
    </section>
  );
}
