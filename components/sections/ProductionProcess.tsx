"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Maximize2,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ImageLightbox, LightboxImage } from "@/components/ui/ImageLightbox";
import { PRODUCTION_PROCESS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

/* ════════════════════════════════════════════════════════════════════
   Scroll-reveal hook — triggers on scroll and resets when scrolled away
   ════════════════════════════════════════════════════════════════════ */
function useScrollReveal(threshold = 0.15, rootMargin = "0px 0px -40px 0px") {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRevealed(true);
        } else if (e.boundingClientRect.top > 0) {
          // Reset when element is below viewport so it animates when scrolling down
          setRevealed(false);
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return { ref, revealed };
}

/* ════════════════════════════════════════════════════════════════════
   Serpentine row definitions (2 photos per row, 6 rows total)
   Row 0 (LTR): Step 1  ──→  Step 2   | connector drops RIGHT (Step 2 to 3)
   Row 1 (RTL): Step 4  ←──  Step 3   | connector drops LEFT  (Step 4 to 5)
   Row 2 (LTR): Step 5  ──→  Step 6   | connector drops RIGHT (Step 6 to 7)
   Row 3 (RTL): Step 8  ←──  Step 7   | connector drops LEFT  (Step 8 to 9)
   Row 4 (LTR): Step 9  ──→  Step 10  | connector drops RIGHT (Step 10 to 11)
   Row 5 (RTL): Step 12 ←──  Step 11  | end of pipeline (Finished Goods)
   ════════════════════════════════════════════════════════════════════ */
const SERPENTINE_ROWS: {
  indices: [number, number];
  direction: "ltr" | "rtl";
  connectorSide: "left" | "right" | null;
}[] = [
  { indices: [0, 1], direction: "ltr", connectorSide: "right" },
  { indices: [3, 2], direction: "rtl", connectorSide: "left" },
  { indices: [4, 5], direction: "ltr", connectorSide: "right" },
  { indices: [7, 6], direction: "rtl", connectorSide: "left" },
  { indices: [8, 9], direction: "ltr", connectorSide: "right" },
  { indices: [11, 10], direction: "rtl", connectorSide: null },
];

/* ════════════════════════════════════════════════════════════════════
   Process Card — image with overlaid title label & badge
   Animates actively with zoom, slide, and live scroll parallax
   ════════════════════════════════════════════════════════════════════ */
interface CardProps {
  step: (typeof PRODUCTION_PROCESS)[number];
  isEn: boolean;
  revealed: boolean;
  delay: number;
  position: "left" | "right";
  onOpen: (n: number) => void;
}

function ProcessCard({
  step,
  isEn,
  revealed,
  delay,
  position,
  onOpen,
}: CardProps) {
  const isFinalStep = step.stepNumber === 12;
  const cardRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  // Live parallax: image shifts inside card as user scrolls
  useEffect(() => {
    let rafId: number;
    const updateParallax = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom > 0 && rect.top < vh) {
        const progress = (vh - rect.top) / (vh + rect.height);
        const offset = (progress - 0.5) * 36;
        setParallaxY(Math.round(offset));
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "w-72 sm:w-80 md:w-96 lg:w-[27rem] xl:w-[29rem] shrink-0",
        "relative rounded-2xl overflow-hidden shadow-sm border cursor-pointer group",
        isFinalStep
          ? "border-emerald-500/80 ring-2 ring-emerald-400/40 shadow-emerald-500/15"
          : "border-slate-200/80 hover:border-emerald-500/60 hover:shadow-2xl hover:-translate-y-1.5"
      )}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed
          ? "translate3d(0, 0, 0) scale(1)"
          : position === "left"
          ? "translate3d(-48px, 36px, 0) scale(0.92)"
          : "translate3d(48px, 36px, 0) scale(0.92)",
        transition:
          "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
      onClick={() => onOpen(step.stepNumber)}
    >
      <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
        {/* Parallax wrapper — moves with scroll, zooms in on entrance */}
        <div
          className="relative w-full h-[120%] -top-[10%] will-change-transform"
          style={{
            transform: `translate3d(0, ${parallaxY}px, 0) scale(${revealed ? 1 : 1.18})`,
            filter: revealed ? "blur(0px)" : "blur(3px)",
            transition:
              "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease-out",
          }}
        >
          <Image
            src={step.image}
            alt={isEn ? step.titleEn : step.title}
            fill
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 430px, 480px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5 group-hover:from-black/90 transition-colors pointer-events-none" />

        {/* Step number badge — top left with bounce reveal */}
        <div
          className={cn(
            "absolute top-3 left-3 size-8 sm:size-9 rounded-xl font-mono font-black text-xs sm:text-sm flex items-center justify-center shadow-md border border-white/25",
            isFinalStep
              ? "bg-gradient-to-br from-amber-500 to-emerald-600 text-white ring-1 ring-amber-300"
              : "bg-gradient-to-br from-emerald-600 to-teal-800 text-white"
          )}
          style={{
            transform: revealed ? "scale(1)" : "scale(0)",
            opacity: revealed ? 1 : 0,
            transition:
              "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out",
            transitionDelay: `${delay + 200}ms`,
          }}
        >
          {step.stepNumber < 10 ? `0${step.stepNumber}` : step.stepNumber}
        </div>

        {/* Zoom icon — top right on hover */}
        <div className="absolute top-3 right-3 size-7 rounded-lg bg-black/40 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Maximize2 className="size-3.5" />
        </div>

        {/* Final step badge */}
        {isFinalStep && (
          <div
            className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-emerald-500/95 text-white text-[10px] font-bold uppercase tracking-wider shadow"
            style={{
              transform: revealed ? "scale(1)" : "scale(0)",
              opacity: revealed ? 1 : 0,
              transition:
                "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out",
              transitionDelay: `${delay + 240}ms`,
            }}
          >
            Final
          </div>
        )}

        {/* Title label — bottom of image with slide-up reveal */}
        <div
          className="absolute bottom-0 inset-x-0 px-4 pb-3.5 pt-12"
          style={{
            transform: revealed
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 20px, 0)",
            opacity: revealed ? 1 : 0,
            transition:
              "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out",
            transitionDelay: `${delay + 150}ms`,
          }}
        >
          <h3 className="text-white font-bold text-xs sm:text-sm lg:text-base leading-snug drop-shadow-md line-clamp-2">
            {isEn ? step.titleEn : step.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Horizontal connecting line between adjacent cards (2 per row)
   Static, solid production line track (NO animation)
   ════════════════════════════════════════════════════════════════════ */
function HorizontalLine({ direction }: { direction: "ltr" | "rtl" }) {
  const isLTR = direction === "ltr";

  return (
    <div className="flex-1 min-w-[60px] sm:min-w-[100px] lg:min-w-[140px] mx-3 sm:mx-6 flex items-center self-center shrink relative">
      {/* Static production line track */}
      <div className="w-full h-[3px] rounded-full bg-emerald-500/70 shadow-xs" />

      {/* Direction indicator badge in center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-6 rounded-full bg-white border border-emerald-400 text-emerald-600 shadow-sm flex items-center justify-center">
        {isLTR ? (
          <ChevronRight className="size-3.5 stroke-[2.5]" />
        ) : (
          <ChevronLeft className="size-3.5 stroke-[2.5]" />
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Vertical connector between rows (serpentine drop)
   Static, accurately centered under the outer card (NO animation)
   ════════════════════════════════════════════════════════════════════ */
function VerticalConnector({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={cn(
        "w-full flex py-2 sm:py-3",
        side === "right" ? "justify-end" : "justify-start"
      )}
    >
      {/* Outer box has EXACT same width as ProcessCard so connector is centered on card */}
      <div className="w-72 sm:w-80 md:w-96 lg:w-[27rem] xl:w-[29rem] flex justify-center">
        <div className="relative flex flex-col items-center h-12 sm:h-14 lg:h-16 w-6">
          {/* Static vertical line */}
          <div className="w-[3px] h-full rounded-full bg-emerald-500/70 shadow-xs" />

          {/* Direction indicator badge in center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-6 rounded-full bg-white border border-emerald-400 text-emerald-600 shadow-sm flex items-center justify-center">
            <ChevronDown className="size-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Desktop Process Row — 2 cards + 1 static line + optional static drop
   Images animate as each row scrolls into view
   ════════════════════════════════════════════════════════════════════ */
function ProcessRowDesktop({
  row,
  isEn,
  onOpen,
}: {
  row: (typeof SERPENTINE_ROWS)[number];
  isEn: boolean;
  onOpen: (n: number) => void;
}) {
  const { ref, revealed } = useScrollReveal(0.15, "0px 0px -40px 0px");
  const isLTR = row.direction === "ltr";

  // Flow order for card animation:
  // LTR: left card (0ms) -> right card (180ms)
  // RTL: right card (0ms) -> left card (180ms)
  const cardDelays = isLTR ? [0, 180] : [180, 0];

  const steps = row.indices.map((i) => PRODUCTION_PROCESS[i]);

  return (
    <div ref={ref} className="w-full">
      {/* 2 cards + 1 static line spanning row with justify-between */}
      <div className="flex items-center justify-between">
        <ProcessCard
          step={steps[0]}
          isEn={isEn}
          revealed={revealed}
          delay={cardDelays[0]}
          position="left"
          onOpen={onOpen}
        />

        <HorizontalLine direction={row.direction} />

        <ProcessCard
          step={steps[1]}
          isEn={isEn}
          revealed={revealed}
          delay={cardDelays[1]}
          position="right"
          onOpen={onOpen}
        />
      </div>

      {/* Static vertical connector to next row */}
      {row.connectorSide && <VerticalConnector side={row.connectorSide} />}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Mobile Process Card with individual scroll reveal (vertical timeline)
   Image animates zoom and slide on scroll
   ════════════════════════════════════════════════════════════════════ */
function MobileProcessCard({
  step,
  isEn,
  onOpen,
}: {
  step: (typeof PRODUCTION_PROCESS)[number];
  isEn: boolean;
  onOpen: (n: number) => void;
}) {
  const { ref, revealed } = useScrollReveal(0.12, "0px 0px -30px 0px");
  const isFinalStep = step.stepNumber === 12;

  return (
    <div ref={ref} className="relative flex items-center">
      {/* Timeline node */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 flex items-center justify-center">
        <div
          className={cn(
            "size-8 rounded-full font-mono font-black text-xs flex items-center justify-center shadow-md border-2 border-white ring-2",
            isFinalStep
              ? "bg-gradient-to-br from-amber-500 to-emerald-600 text-white ring-amber-300"
              : "bg-gradient-to-br from-primary to-emerald-700 text-white ring-emerald-200"
          )}
          style={{
            transform: revealed ? "scale(1)" : "scale(0)",
            opacity: revealed ? 1 : 0,
            transition:
              "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out",
          }}
        >
          {step.stepNumber}
        </div>
      </div>

      {/* Card with image animation */}
      <div
        className={cn(
          "w-full max-w-lg relative rounded-2xl overflow-hidden shadow-sm border cursor-pointer group",
          isFinalStep
            ? "border-emerald-500/80 ring-2 ring-emerald-400/40"
            : "border-slate-200/80 active:scale-98"
        )}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed
            ? "translate3d(0, 0, 0) scale(1)"
            : "translate3d(-24px, 16px, 0) scale(0.94)",
          transition:
            "opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={() => onOpen(step.stepNumber)}
      >
        <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
          <div
            className="relative w-full h-[115%] -top-[7.5%]"
            style={{
              transform: `scale(${revealed ? 1 : 1.15})`,
              filter: revealed ? "blur(0px)" : "blur(2px)",
              transition:
                "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease-out",
            }}
          >
            <Image
              src={step.image}
              alt={isEn ? step.titleEn : step.title}
              fill
              sizes="420px"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
          <div
            className="absolute bottom-0 inset-x-0 px-4 pb-3.5 pt-8"
            style={{
              transform: revealed
                ? "translate3d(0, 0, 0)"
                : "translate3d(0, 16px, 0)",
              opacity: revealed ? 1 : 0,
              transition:
                "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out",
              transitionDelay: "100ms",
            }}
          >
            <h3 className="text-white font-bold text-xs sm:text-sm leading-tight drop-shadow-md line-clamp-2">
              {isEn ? step.titleEn : step.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export function ProductionProcess() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const [activeLightboxIdx, setActiveLightboxIdx] = useState<number | null>(
    null
  );

  const activeStep =
    activeLightboxIdx !== null ? PRODUCTION_PROCESS[activeLightboxIdx] : null;

  const lightboxImage: LightboxImage | null = activeStep
    ? {
        src: activeStep.image,
        title: isEn ? activeStep.titleEn : activeStep.title,
        category: isEn ? activeStep.keyMetricEn : activeStep.keyMetric,
        dimensions: isEn
          ? `Stage ${activeStep.stepNumber} of 12 • SCM Manufacturing Pipeline`
          : `Tahap ${activeStep.stepNumber} dari 12 • Alur Produksi SCM Ciamis`,
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

  const openLightboxForStep = (stepNumber: number) => {
    const idx = PRODUCTION_PROCESS.findIndex(
      (s) => s.stepNumber === stepNumber
    );
    if (idx !== -1) setActiveLightboxIdx(idx);
  };

  return (
    <section
      id="process"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-border relative overflow-hidden"
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0f766e 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <Container size="default" className="relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase rounded-full border bg-emerald-50 text-emerald-800 border-emerald-200/80 shadow-2xs">
            <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>{t.process.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {t.process.title}
          </h2>

          <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.process.description}
          </p>
        </div>

        {/* ── Desktop Production Line (md+) ── */}
        <div className="hidden md:block max-w-5xl lg:max-w-6xl mx-auto">
          {SERPENTINE_ROWS.map((row, idx) => (
            <ProcessRowDesktop
              key={idx}
              row={row}
              isEn={isEn}
              onOpen={openLightboxForStep}
            />
          ))}
        </div>

        {/* ── Mobile Vertical Timeline (<md) ── */}
        <div className="md:hidden relative">
          {/* Static continuous vertical timeline line */}
          <div className="absolute top-4 bottom-4 left-5 w-[2px] bg-emerald-500/50 -translate-x-1/2" />

          <div className="space-y-6 pl-12">
            {PRODUCTION_PROCESS.map((step) => (
              <MobileProcessCard
                key={step.stepNumber}
                step={step}
                isEn={isEn}
                onOpen={openLightboxForStep}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={Boolean(lightboxImage)}
        image={lightboxImage}
        onClose={() => setActiveLightboxIdx(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={activeLightboxIdx !== null ? activeLightboxIdx + 1 : 1}
        totalImages={PRODUCTION_PROCESS.length}
      />
    </section>
  );
}

