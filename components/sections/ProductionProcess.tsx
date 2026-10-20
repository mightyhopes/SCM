"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ImageLightbox, LightboxImage } from "@/components/ui/ImageLightbox";
import { PRODUCTION_PROCESS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export function ProductionProcess() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLightboxIdx, setActiveLightboxIdx] = useState<number | null>(null);

  const activeStep =
    activeLightboxIdx !== null ? PRODUCTION_PROCESS[activeLightboxIdx] : null;

  const lightboxImage: LightboxImage | null = activeStep
    ? {
        src: activeStep.image,
        title: isEn ? activeStep.titleEn : activeStep.title,
        category: isEn ? activeStep.keyMetricEn : activeStep.keyMetric,
        dimensions: isEn
          ? "Production Facility • SCM Ciamis"
          : "Fasilitas Produksi • SCM Ciamis",
        alt: isEn ? activeStep.titleEn : activeStep.title,
      }
    : null;

  const handleNext = () => {
    if (activeLightboxIdx !== null) {
      setActiveLightboxIdx(
        (prev) => ((prev ?? 0) + 1) % PRODUCTION_PROCESS.length
      );
    }
  };

  const handlePrev = () => {
    if (activeLightboxIdx !== null) {
      setActiveLightboxIdx(
        (prev) =>
          ((prev ?? 0) - 1 + PRODUCTION_PROCESS.length) %
          PRODUCTION_PROCESS.length
      );
    }
  };

  // Horizontal scroll translation driven by vertical scroll
  useEffect(() => {
    const updateScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      // On mobile/narrow screens (<768px), native swipe is used instead
      if (window.innerWidth < 768) {
        trackRef.current.style.transform = "none";
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const totalScroll = sectionRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentScroll = -rect.top;
      const p = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
      setProgress(p);

      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      // Leave proper breathing room on the right for the last card
      const maxTranslate = Math.max(0, trackWidth - viewportWidth + 80);
      const targetTranslate = p * maxTranslate;

      trackRef.current.style.transform = `translate3d(${-targetTranslate}px, 0, 0)`;

      const cardIdx = Math.min(
        Math.floor(p * PRODUCTION_PROCESS.length),
        PRODUCTION_PROCESS.length - 1
      );
      setActiveIndex(cardIdx);
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll, { passive: true });

    // Sync with Lenis smooth scroll if active
    const lenis = (window as unknown as {
      lenis?: {
        on: (event: string, cb: () => void) => void;
        off: (event: string, cb: () => void) => void;
      };
    }).lenis;

    if (lenis && typeof lenis.on === "function") {
      lenis.on("scroll", updateScroll);
    }

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      if (lenis && typeof lenis.off === "function") {
        lenis.off("scroll", updateScroll);
      }
    };
  }, []);

  // Jump to specific card index smoothly
  const scrollToCard = (index: number) => {
    const targetIdx = Math.max(0, Math.min(index, PRODUCTION_PROCESS.length - 1));

    if (window.innerWidth < 768 && trackRef.current) {
      const cards = trackRef.current.children;
      if (cards[targetIdx]) {
        (cards[targetIdx] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
      setActiveIndex(targetIdx);
      return;
    }

    if (!sectionRef.current) return;
    const totalScroll = sectionRef.current.offsetHeight - window.innerHeight;
    const targetFraction = targetIdx / (PRODUCTION_PROCESS.length - 1);
    const targetScrollTop =
      window.scrollY +
      sectionRef.current.getBoundingClientRect().top +
      targetFraction * totalScroll;

    const lenis = (window as unknown as {
      lenis?: { scrollTo: (target: number) => void };
    }).lenis;

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(targetScrollTop);
    } else {
      window.scrollTo({ top: targetScrollTop, behavior: "smooth" });
    }
  };

  // Sync index on mobile touch scroll
  const handleMobileScroll = () => {
    if (window.innerWidth >= 768 || !trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const p = Math.min(Math.max(scrollLeft / maxScroll, 0), 1);
    setProgress(p);
    const cardIdx = Math.min(
      Math.floor(p * PRODUCTION_PROCESS.length),
      PRODUCTION_PROCESS.length - 1
    );
    setActiveIndex(cardIdx);
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-surface border-b border-border md:h-[280vh]"
    >
      {/* Sticky Viewport Container on Desktop (Fixed in view while scrolling vertically) */}
      <div className="md:sticky md:top-0 md:h-screen md:overflow-hidden md:flex md:flex-col md:justify-between py-12 sm:py-16 md:py-8 lg:py-10">
        <Container size="default" className="w-full">
          {/* Section Header with Navigation Controls */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-sm border bg-surface-muted text-primary border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                <span>{t.process.eyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary leading-tight">
                {t.process.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-text-secondary max-w-xl hidden sm:block">
                {t.process.description}
              </p>
            </div>

            {/* Navigation & Status Controls */}
            <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
              {/* Scroll cue hint with live ping animation on desktop */}
              <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/6 border border-primary/15 text-[11px] font-medium text-primary shadow-2xs">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full size-2 bg-accent" />
                </span>
                <span>
                  {isEn
                    ? "Scroll down to explore facilities"
                    : "Gulir ke bawah untuk eksplorasi fasilitas"}
                </span>
              </div>

              {/* Left / Right Jump Buttons with hover micro-animations */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollToCard(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  className="size-9 rounded-full border border-border bg-surface flex items-center justify-center text-text-primary hover:bg-primary hover:text-white hover:border-primary hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 cursor-pointer shadow-xs"
                  aria-label={isEn ? "Previous process" : "Proses sebelumnya"}
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToCard(activeIndex + 1)}
                  disabled={activeIndex === PRODUCTION_PROCESS.length - 1}
                  className="size-9 rounded-full border border-border bg-surface flex items-center justify-center text-text-primary hover:bg-primary hover:text-white hover:border-primary hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 cursor-pointer shadow-xs"
                  aria-label={isEn ? "Next process" : "Proses selanjutnya"}
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </Container>

        {/* Horizontal Cards Track (Translated on scroll on desktop, native swipe on mobile) */}
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-none transition-transform duration-75 will-change-transform py-4"
          >
            {PRODUCTION_PROCESS.map((item, index) => {
              const title = isEn ? item.titleEn : item.title;
              const metric = isEn ? item.keyMetricEn : item.keyMetric;
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.step || item.title}
                  className="shrink-0 snap-center w-[84vw] sm:w-[380px] md:w-[440px] lg:w-[480px] xl:w-[520px]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveLightboxIdx(index)}
                    className={`relative w-full h-[320px] sm:h-[360px] md:h-[390px] lg:h-[430px] rounded-2xl overflow-hidden group/card cursor-pointer text-left block border transition-all duration-500 ease-out focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive
                        ? "scale-100 border-primary/50 ring-2 ring-primary/20 shadow-[0_16px_40px_-10px_rgba(8,97,93,0.3)]"
                        : "scale-[0.96] opacity-85 hover:opacity-100 hover:scale-[0.99] border-border/80 shadow-md hover:shadow-xl"
                    }`}
                    aria-label={
                      isEn
                        ? `Inspect facility photo: ${title}`
                        : `Perbesar foto fasilitas: ${title}`
                    }
                  >
                    {/* Shimmer light sweep reflection across card on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-20" />

                    {/* Top edge glowing accent line */}
                    <div
                      className={`absolute top-0 inset-x-0 h-1 transition-opacity duration-500 z-10 ${
                        isActive
                          ? "opacity-100 bg-gradient-to-r from-primary via-accent to-secondary-brand"
                          : "opacity-0 group-hover/card:opacity-100 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      }`}
                    />

                    {/* Full-bleed high-res Image with hover scale */}
                    <Image
                      src={item.image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 500px, 540px"
                      className="object-cover group-hover/card:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay for high contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/10 pointer-events-none transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/15 transition-colors duration-500 pointer-events-none" />

                    {/* ── Bottom Label Bar (Clean typography, no sequence numbers, hover slide-up) ── */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 pointer-events-none">
                      <div className="flex items-end justify-between gap-3">
                        <div className="min-w-0 transform group-hover/card:-translate-y-1 transition-transform duration-300">
                          <h3 className="text-white font-bold text-base sm:text-lg md:text-xl leading-snug drop-shadow-md">
                            {title}
                          </h3>
                          <p className="text-white/80 text-xs sm:text-sm font-medium mt-1 truncate">
                            {metric}
                          </p>
                        </div>

                        {/* Hover Zoom Prompt with spring slide-in */}
                        <div className="opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0 shrink-0">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30 shadow-lg hover:bg-white/30 transition-colors">
                            <Maximize2 className="size-3.5 text-accent animate-pulse" />
                            <span className="hidden sm:inline">
                              {isEn ? "Inspect" : "Perbesar"}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Progress Track & Interactive Dots */}
        <Container size="default" className="w-full mt-4 md:mt-0">
          <div className="flex items-center justify-between gap-4 pt-2">
            {/* Interactive Progress Bar with multi-color gradient and subtle glow */}
            <div className="flex-1 max-w-xs sm:max-w-md h-2 rounded-full bg-surface-muted border border-border/80 overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-primary via-secondary-brand to-accent transition-[width] duration-200 ease-out rounded-full shadow-[0_0_10px_rgba(77,154,153,0.5)]"
                style={{
                  width: `${Math.max(
                    (1 / PRODUCTION_PROCESS.length) * 100,
                    progress * 100
                  )}%`,
                }}
              />
            </div>

            {/* Step Jump Dots with fluid expanding pill animation */}
            <div className="flex items-center gap-2">
              {PRODUCTION_PROCESS.map((item, idx) => (
                <button
                  key={item.step || item.title}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer hover:scale-125 ${
                    activeIndex === idx
                      ? "w-8 h-2.5 bg-gradient-to-r from-primary to-accent shadow-xs"
                      : "w-2.5 h-2.5 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`${isEn ? "Go to" : "Buka"} ${isEn ? item.titleEn : item.title}`}
                />
              ))}
            </div>

            {/* Mobile swipe prompt */}
            <p className="text-[11px] text-text-muted md:hidden flex items-center gap-1">
              <span>{isEn ? "Swipe" : "Geser"}</span>
              <ArrowRight className="size-3" />
            </p>
          </div>
        </Container>
      </div>

      {/* Fullscreen Lightbox for Photo Inspection */}
      <ImageLightbox
        isOpen={activeLightboxIdx !== null}
        onClose={() => setActiveLightboxIdx(null)}
        image={lightboxImage}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}


