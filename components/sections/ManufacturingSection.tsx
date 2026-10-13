"use client";

import React from "react";
import Image from "next/image";
import { Cpu, Layers, Sparkles, PackageCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CAPABILITIES } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  Cpu,
  Layers,
  Sparkles,
  PackageCheck,
};

export function ManufacturingSection() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-surface-muted/30 border-b border-border">
      <Container size="default">
        <ScrollReveal duration={600} direction="up">
          <SectionHeading
            eyebrow={t.capabilities.eyebrow}
            title={t.capabilities.title}
            description={t.capabilities.description}
          />
        </ScrollReveal>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                duration={500}
                delay={idx * 80}
                direction="up"
                className="h-full"
              >
                <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-border hover:border-secondary-brand transition-all shadow-xs hover:shadow-md flex flex-col justify-between h-full group">
                  <div>
                    {/* Primary Photographic Showcase */}
                    <div className="relative h-52 sm:h-56 w-full rounded-xl overflow-hidden bg-surface-muted mb-5 border border-border group/photo">
                      <Image
                        src={cap.image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-cover group-hover/photo:scale-104 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Overlay badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <Badge variant="secondary" className="text-[10px] font-mono px-2.5 py-0.5 bg-surface/95 backdrop-blur-xs text-primary font-bold shadow-xs border border-white/20">
                          {badge}
                        </Badge>
                      </div>

                      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                        <div className="size-8 rounded-lg bg-primary-dark/85 backdrop-blur-xs border border-secondary/30 flex items-center justify-center text-accent">
                          <IconComponent className="size-4" />
                        </div>
                        <span className="text-[11px] font-mono uppercase font-bold text-white drop-shadow-xs">
                          SCM Capability
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                        {title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
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
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-text-primary">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Technical Specification Bar */}
        <ScrollReveal duration={600} direction="up" className="mt-12">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="pt-4 sm:pt-0">
                <span className="text-xs uppercase tracking-wider text-secondary-brand font-semibold">
                  {t.capabilities.barGaugeTitle}
                </span>
                <p className="text-xl font-bold text-text-primary mt-1">
                  {t.capabilities.barGaugeVal}
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  {t.capabilities.barGaugeDesc}
                </p>
              </div>
              <div className="pt-4 sm:pt-0 sm:px-4">
                <span className="text-xs uppercase tracking-wider text-secondary-brand font-semibold">
                  {t.capabilities.barToeTitle}
                </span>
                <p className="text-xl font-bold text-text-primary mt-1">
                  {t.capabilities.barToeVal}
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  {t.capabilities.barToeDesc}
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
      </Container>
    </section>
  );
}
