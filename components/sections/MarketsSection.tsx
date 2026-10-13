"use client";

import React from "react";
import { Globe, MapPin, ArrowUpRight, CheckCircle2, Ship } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export function MarketsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-surface border-b border-border">
      <Container size="default">
        <ScrollReveal duration={600} direction="up">
          <SectionHeading
            eyebrow={t.markets.eyebrow}
            title={t.markets.title}
            description={t.markets.description}
            align="center"
          />
        </ScrollReveal>

        {/* Markets Dual Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Card 1: Domestic Market */}
          <ScrollReveal duration={600} delay={100} variant="perspective-tilt" className="h-full">
            <div className="relative p-7 sm:p-9 rounded-2xl bg-surface border border-border hover:border-secondary-brand transition-all shadow-xs hover:shadow-md h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="size-12 rounded-xl bg-secondary-light flex items-center justify-center text-primary shrink-0">
                    <MapPin className="size-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-mono font-bold bg-secondary-light text-primary">
                    {t.markets.domesticTag}
                  </Badge>
                </div>

                <span className="text-xs font-mono font-bold uppercase tracking-wider text-secondary-brand">
                  {t.markets.domesticSubtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-1 mb-3 group-hover:text-primary transition-colors">
                  {t.markets.domesticTitle}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {t.markets.domesticDesc}
                </p>

                <div className="flex items-center gap-2 flex-wrap pt-2">
                  <Badge variant="outline" className="text-xs font-mono border-border bg-surface-muted text-text-primary font-medium py-1 px-3">
                    <CheckCircle2 className="size-3.5 text-primary mr-1.5" />
                    {t.markets.badgeId}
                  </Badge>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-border flex items-center justify-between text-xs text-text-secondary">
                <span>Distribusi Nasional Indonesia</span>
                <span className="font-mono text-primary font-bold">Domestic B2B</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: International Export Markets */}
          <ScrollReveal duration={600} delay={200} variant="perspective-tilt" className="h-full">
            <div className="relative p-7 sm:p-9 rounded-2xl bg-primary-dark text-text-inverse border border-secondary/30 hover:border-accent transition-all shadow-xl h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="size-12 rounded-xl bg-white/10 backdrop-blur-xs flex items-center justify-center text-accent shrink-0 border border-white/20">
                    <Globe className="size-6 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-mono font-bold bg-accent text-primary-dark">
                    {t.markets.exportTag}
                  </Badge>
                </div>

                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
                  {t.markets.exportSubtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3 group-hover:text-accent transition-colors">
                  {t.markets.exportTitle}
                </h3>

                <p className="text-sm text-secondary-light leading-relaxed mb-6">
                  {t.markets.exportDesc}
                </p>

                <div className="flex items-center gap-2.5 flex-wrap pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-md bg-white/15 text-white border border-white/25">
                    <Ship className="size-3.5 text-accent" />
                    {t.markets.badgeUs}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-md bg-white/15 text-white border border-white/25">
                    <Ship className="size-3.5 text-accent" />
                    {t.markets.badgeEu}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between text-xs text-secondary-light">
                <span>Ekspor Berdasarkan Pesanan</span>
                <span className="font-mono text-accent font-bold">Global Export</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Factual Note Box */}
        <ScrollReveal duration={600} delay={250} direction="up" className="mt-8">
          <div className="p-4 sm:p-5 rounded-xl bg-surface-muted border border-border flex items-center gap-3 text-xs text-text-secondary">
            <Globe className="size-4 text-primary shrink-0" />
            <span>{t.markets.note}</span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
