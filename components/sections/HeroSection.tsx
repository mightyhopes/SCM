"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

function useTypewriter({
  fullText,
  typingSpeed = 75,
  deletingSpeed = 35,
  pauseDelay = 4200,
  restartDelay = 700,
}: {
  fullText: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
  restartDelay?: number;
}) {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "restarting">("typing");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayedCount < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedCount((prev) => prev + 1);
        }, typingSpeed);
      } else {
        setPhase("pausing");
      }
    } else if (phase === "pausing") {
      timer = setTimeout(() => {
        setPhase("deleting");
      }, pauseDelay);
    } else if (phase === "deleting") {
      if (displayedCount > 0) {
        timer = setTimeout(() => {
          setDisplayedCount((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        setPhase("restarting");
      }
    } else if (phase === "restarting") {
      timer = setTimeout(() => {
        setPhase("typing");
      }, restartDelay);
    }

    return () => clearTimeout(timer);
  }, [displayedCount, phase, fullText, typingSpeed, deletingSpeed, pauseDelay, restartDelay]);

  // Reset smoothly when text changes (e.g. language toggle)
  useEffect(() => {
    setDisplayedCount(0);
    setPhase("typing");
  }, [fullText]);

  return { displayedCount };
}

export function HeroSection() {
  const { t } = useLanguage();

  const prefix = `${t.hero.headlineStart} `;
  const highlight = t.hero.headlineHighlight;
  const fullHeadline = `${prefix}${highlight}`;

  const { displayedCount } = useTypewriter({
    fullText: fullHeadline,
    typingSpeed: 75,
    deletingSpeed: 35,
    pauseDelay: 4200,
    restartDelay: 700,
  });

  const prefixTyped = prefix.slice(0, Math.min(displayedCount, prefix.length));
  const highlightTyped =
    displayedCount > prefix.length
      ? highlight.slice(0, displayedCount - prefix.length)
      : "";

  return (
    <section className="relative overflow-hidden min-h-[640px] lg:min-h-[720px] flex flex-col justify-between pt-12 pb-12 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16 bg-primary-dark text-text-inverse border-b border-primary/40">
      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 1. Full-Width Photographic Background Layer (Factory Exterior)        */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/1_about/pabrik_eksterior_16-9.jpg"
          alt="Gedung Fasilitas Manufaktur PT Sinlie Cahaya Matahari"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-[68%_center] lg:object-[62%_center] xl:object-[58%_center] opacity-90 scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Directional Teal Gradients for Optimal Contrast & Visual Depth */}
        {/* Horizontal Gradient: Deep teal on left for text legibility, transparent on right for factory view */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 via-55% to-primary-dark/30 lg:to-transparent" />

        {/* Mobile-optimized vertical gradient to protect text on small screens */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-transparent to-primary-dark lg:hidden" />

        {/* Global top/bottom vignette to blend seamlessly into navbar and next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-transparent via-40% to-primary-dark/95" />

        {/* Ambient brand lighting & subtle industrial texture */}
        <div className="absolute -top-32 -left-32 size-[28rem] rounded-full bg-secondary-brand/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 size-[26rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] industrial-grid-bg" />
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 2. Main Foreground Hero Content (Expansive & Unobstructed Layout)     */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <Container size="wide" className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="py-4 lg:py-6 max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <ScrollReveal duration={600} direction="up">
            {/* Headline with Smooth Industrial Typewriter Animation */}
            <div className="flex flex-col gap-3.5">
              <h1
                className="relative text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
                aria-label={fullHeadline}
              >
                {/* Invisible phantom text to strictly lock layout dimensions & eliminate layout shift */}
                <span className="invisible pointer-events-none select-none" aria-hidden="true">
                  {prefix}
                  <span className="text-accent relative inline-block">
                    {highlight}
                    <span className="absolute -bottom-1.5 left-0 w-full h-2 bg-accent/25 rounded-full -z-10" />
                  </span>
                </span>

                {/* Absolute overlay containing the animated typed text & blinking laser cursor */}
                <span className="absolute inset-0 top-0 left-0" aria-hidden="true">
                  <span>{prefixTyped}</span>
                  {highlightTyped.length > 0 && (
                    <span className="text-accent relative inline-block">
                      {highlightTyped}
                      <span className="absolute -bottom-1.5 left-0 w-full h-2 bg-accent/25 rounded-full -z-10" />
                    </span>
                  )}
                  {/* Blinking Industrial Laser Cursor */}
                  <span
                    className="inline-block w-[3px] sm:w-[4px] h-[0.78em] bg-accent ml-1 align-baseline animate-pulse shadow-[0_0_8px_rgba(255,204,0,0.5)] rounded-xs"
                    aria-hidden="true"
                  />
                </span>
              </h1>

              {/* Tagline - Now allowed to span comfortably wider */}
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-secondary-light drop-shadow-sm max-w-3xl xl:max-w-4xl leading-snug">
                {t.hero.tagline}
              </p>
            </div>

            {/* Supporting Copy - Extended breathing room */}
            <p className="mt-5 text-sm sm:text-base lg:text-lg text-secondary-light/90 leading-relaxed max-w-2xl lg:max-w-3xl font-normal drop-shadow-sm">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                href="#contact"
                variant="accent"
                size="default"
                className="group justify-center font-bold text-primary-dark shadow-[0_4px_20px_rgba(255,204,0,0.3)] hover:shadow-[0_8px_30px_rgba(255,204,0,0.45)] transition-all duration-300 cursor-pointer px-7 py-3"
              >
                <span>{t.hero.ctaRfq}</span>
                <ArrowRight className="size-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Button>
              <Button
                href="#products"
                variant="outline"
                size="default"
                className="justify-center border-white/30 text-white hover:bg-white/15 hover:border-white/50 hover:text-white backdrop-blur-md font-semibold px-6 py-3 transition-all duration-300 shadow-sm"
              >
                <span>{t.hero.ctaCatalog}</span>
              </Button>
            </div>

            {/* Live Operational Trust Indicators */}
            <div className="mt-8 flex items-center gap-4 sm:gap-6 text-xs text-secondary-light/85 flex-wrap">
              <span className="flex items-center gap-1.5 bg-black/20 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                <span>{t.hero.trustMetric1}</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/20 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                <span>{t.hero.trustMetric2}</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/20 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                <span>{t.hero.trustMetric3}</span>
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* ────────────────────────────────────────────────────────────────── */}
        {/* 3. Bottom Horizontal Industrial Specifications Dock (Glassmorphic) */}
        {/* ────────────────────────────────────────────────────────────────── */}
        <ScrollReveal duration={600} delay={200} direction="up" className="mt-6 sm:mt-8">
          <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.3)] grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-secondary-light/70 mb-1">
                <Factory className="size-4 text-accent" />
                <span className="text-[11px] font-mono uppercase tracking-wider">
                  {t.hero.dockTechTitle}
                </span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-white">
                {t.hero.dockTechVal}
              </p>
              <p className="text-xs text-secondary-light/75 leading-relaxed">
                {t.hero.dockTechDesc}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-secondary-light/70 mb-1">
                <Factory className="size-4 text-accent" />
                <span className="text-[11px] font-mono uppercase tracking-wider">
                  {t.hero.dockCapacityTitle}
                </span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-accent">
                {t.hero.dockCapacityVal}
              </p>
              <p className="text-xs text-secondary-light/75 leading-relaxed">
                {t.hero.dockCapacityDesc}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-secondary-light/70 mb-1">
                <Globe className="size-4 text-accent" />
                <span className="text-[11px] font-mono uppercase tracking-wider">
                  {t.hero.dockMarketsTitle}
                </span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-white">
                {t.hero.dockMarketsVal}
              </p>
              <p className="text-xs text-secondary-light/75 leading-relaxed">
                {t.hero.dockMarketsDesc}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-secondary-light/70 mb-1">
                <ShieldCheck className="size-4 text-accent" />
                <span className="text-[11px] font-mono uppercase tracking-wider">
                  {t.hero.dockQcTitle}
                </span>
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-white">
                {t.hero.dockQcVal}
              </p>
              <p className="text-xs text-secondary-light/75 leading-relaxed">
                {t.hero.dockQcDesc}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
