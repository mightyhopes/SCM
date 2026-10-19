"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { DirectContactCard } from "./contact/DirectContactCard";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-10 sm:py-16 lg:py-24 bg-primary-dark text-white relative overflow-hidden selection:bg-accent selection:text-primary-dark"
    >
      {/* Subtle brand ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle decorative background pattern texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-luminosity pointer-events-none">
        <Image
          src="/images/dummy/25_background_pattern.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Strip: Centered, small eyebrow, H1, one-line subtext */}
        <div className="mb-6 sm:mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-white/10 border border-white/15 text-accent text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-2 sm:mb-3">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            <span>{t.contact.eyebrow}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.contact.heroTitle}
          </h1>

          <p className="mt-2 text-xs sm:text-base text-slate-200/90 leading-relaxed font-normal">
            {t.contact.heroSubtext}
          </p>
        </div>

        {/* Single Unified Contact Card (centered) */}
        <div className="w-full">
          <DirectContactCard />
        </div>
      </div>
    </section>
  );
}
