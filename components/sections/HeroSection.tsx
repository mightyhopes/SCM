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
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-28 lg:pb-32 bg-primary-dark text-text-inverse border-b border-primary/40">
      {/* Cinematic Factory Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dummy/02_factory_interior_hero.jpg"
          alt="Lantai Pabrik Manufaktur Kaus Kaki SCM"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Multi-layered Industrial Gradient Overlay for High Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/88 to-primary-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark/50" />
        <div className="absolute inset-0 opacity-10 industrial-grid-bg pointer-events-none" />
      </div>

      <Container size="default" className="relative z-10">
        <ScrollReveal duration={600} direction="up" className="max-w-4xl">
          {/* Live Manufacturing Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm w-fit mb-6">
            <span className="relative flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full size-2.5 bg-accent" />
            </span>
            <span className="text-xs font-bold tracking-widest text-accent uppercase font-mono">
              {t.hero.statusBadge}
            </span>
          </div>

          {/* Headline with Smooth Industrial Typewriter Animation */}
          <div className="flex flex-col gap-3">
            <h1
              className="relative text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08]"
              aria-label={fullHeadline}
            >
              {/* Invisible phantom text to strictly lock layout dimensions & eliminate layout shift */}
              <span className="invisible pointer-events-none select-none" aria-hidden="true">
                {prefix}
                <span className="text-accent relative inline-block">
                  {highlight}
                  <span className="absolute -bottom-1.5 left-0 w-full h-2.5 bg-accent/30 rounded-full -z-10" />
                </span>
              </span>

              {/* Absolute overlay containing the animated typed text & blinking laser cursor */}
              <span className="absolute inset-0 top-0 left-0" aria-hidden="true">
                <span>{prefixTyped}</span>
                {highlightTyped.length > 0 && (
                  <span className="text-accent relative inline-block">
                    {highlightTyped}
                    <span className="absolute -bottom-1.5 left-0 w-full h-2.5 bg-accent/30 rounded-full -z-10" />
                  </span>
                )}
                {/* Blinking Industrial Laser Cursor */}
                <span
                  className="inline-block w-[3px] sm:w-[4px] lg:w-[5px] h-[0.78em] bg-accent ml-1 sm:ml-1.5 align-baseline animate-pulse shadow-sm rounded-xs"
                  aria-hidden="true"
                />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary-light">
              {t.hero.tagline}
            </p>
          </div>

          {/* Supporting Copy */}
          <p className="mt-6 text-base sm:text-lg text-secondary-light/90 leading-relaxed max-w-2xl font-normal">
            {t.hero.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              href="#contact"
              variant="accent"
              size="lg"
              className="group justify-center font-bold text-primary-dark shadow-xl hover:shadow-2xl cursor-pointer px-7"
            >
              <span>{t.hero.ctaRfq}</span>
              <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href="#products"
              variant="outline"
              size="lg"
              className="justify-center border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-xs font-semibold px-6"
            >
              <span>{t.hero.ctaCatalog}</span>
            </Button>
          </div>

          {/* Live Operational Trust Indicators */}
          <div className="mt-8 flex items-center gap-6 text-xs text-secondary-light/85 flex-wrap">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-accent shrink-0" />
              <span>{t.hero.trustMetric1}</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-accent shrink-0" />
              <span>{t.hero.trustMetric2}</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-accent shrink-0" />
              <span>{t.hero.trustMetric3}</span>
            </span>
          </div>
        </ScrollReveal>

        {/* Bottom Horizontal Industrial Specifications Dock */}
        <ScrollReveal duration={600} delay={150} direction="up">
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-secondary-light/70 mb-1">
                <Factory className="size-4 text-accent" />
                <span className="text-[11px] font-mono uppercase tracking-wider">
                  {t.hero.dockTechTitle}
                </span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-white">
                {t.hero.dockTechVal}
              </p>
              <p className="text-xs text-secondary-light/80">
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
              <p className="text-lg sm:text-xl font-bold text-accent">
                {t.hero.dockCapacityVal}
              </p>
              <p className="text-xs text-secondary-light/80">
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
              <p className="text-lg sm:text-xl font-bold text-white">
                {t.hero.dockMarketsVal}
              </p>
              <p className="text-xs text-secondary-light/80">
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
              <p className="text-lg sm:text-xl font-bold text-white">
                {t.hero.dockQcVal}
              </p>
              <p className="text-xs text-secondary-light/80">
                {t.hero.dockQcDesc}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
