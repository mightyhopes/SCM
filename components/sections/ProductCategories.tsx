"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Maximize2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { PRODUCT_GALLERY_ITEMS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export function ProductCategories() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const activeItem = activeIdx !== null ? PRODUCT_GALLERY_ITEMS[activeIdx] : null;

  const handleNext = () => {
    if (activeIdx !== null) {
      setActiveIdx((prev) => ((prev ?? 0) + 1) % PRODUCT_GALLERY_ITEMS.length);
    }
  };

  const handlePrev = () => {
    if (activeIdx !== null) {
      setActiveIdx((prev) => ((prev ?? 0) - 1 + PRODUCT_GALLERY_ITEMS.length) % PRODUCT_GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-surface border-b border-border">
      <Container size="default">
        {/* Section Heading - Clean & Visual */}
        <ScrollReveal duration={600} direction="up">
          <SectionHeading
            eyebrow={t.products.eyebrow}
            title={t.products.title}
            description={t.products.description}
            align="center"
          />
        </ScrollReveal>

        {/* Editorial Masonry Photo Gallery - Staggered Animated Cascade */}
        <div className="mt-10 sm:mt-14 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
          {PRODUCT_GALLERY_ITEMS.map((item, idx) => {
            const displayTitle = isEn ? item.titleEn : item.title;

            return (
              <ScrollReveal
                key={item.id}
                variant="cascade-card"
                duration={650}
                delay={(idx % 4) * 110}
                className="break-inside-avoid mb-6"
              >
                <div
                  onClick={() => setActiveIdx(idx)}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-surface-muted shadow-xs hover:shadow-[0_24px_50px_-12px_rgba(8,97,93,0.25)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 ease-out cursor-pointer border border-border/80 hover:border-primary/60 group select-none after:absolute after:inset-0 after:-translate-x-full group-hover:after:translate-x-full after:transition-transform after:duration-1000 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:pointer-events-none"
                >
                  {/* Natural Aspect-Ratio Image with Smooth Zoom */}
                  <Image
                    src={item.image}
                    alt={displayTitle}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="w-full h-auto object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  />

                  {/* Cinematic Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Floating Frosted Glass Zoom Button (Top Right) */}
                  <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <span className="size-9 rounded-full bg-black/50 backdrop-blur-md border border-white/25 text-white flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:rotate-12 transition-all duration-300">
                      <Maximize2 className="size-4 text-accent" />
                    </span>
                  </div>

                  {/* Minimalist Bottom Caption Bar on Hover with Slide-Up Spring */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-3 group-hover:translate-y-0 flex items-center justify-between gap-3 pointer-events-none">
                    <div className="min-w-0">
                      <h3 className="text-white text-sm sm:text-base font-bold tracking-tight truncate drop-shadow-sm">
                        {displayTitle}
                      </h3>
                      <span className="text-accent text-[11px] sm:text-xs font-semibold flex items-center gap-1 mt-0.5 drop-shadow-xs">
                        <Sparkles className="size-3 shrink-0 animate-pulse" />
                        <span>{isEn ? "Click to view full photo" : "Klik untuk perbesar foto"}</span>
                      </span>
                    </div>

                    <span className="shrink-0 size-7 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center group-hover:bg-accent group-hover:text-primary-dark transition-colors shadow-xs">
                      <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Custom Order Callout Banner */}
        <ScrollReveal duration={600} direction="up" className="mt-14 sm:mt-18">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-surface-muted via-surface to-secondary-light/40 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
                <Sparkles className="size-4 text-accent" />
                <span>{t.products.customBanner.tag}</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-text-primary">
                {t.products.customBanner.title}
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {t.products.customBanner.desc}
              </p>
            </div>
            <Button
              href="#contact"
              variant="primary"
              size="default"
              className="shrink-0 cursor-pointer shadow-md"
            >
              {t.products.customBanner.btn}
            </Button>
          </div>
        </ScrollReveal>
      </Container>

      {/* Lightbox Modal with Next/Prev Arrow Keys & Chevrons */}
      {activeItem && (
        <ImageLightbox
          isOpen={activeIdx !== null}
          onClose={() => setActiveIdx(null)}
          image={{
            src: activeItem.image,
            title: isEn ? activeItem.titleEn : activeItem.title,
            alt: isEn ? activeItem.titleEn : activeItem.title,
          }}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={activeIdx ?? 0}
          totalImages={PRODUCT_GALLERY_ITEMS.length}
        />
      )}
    </section>
  );
}
