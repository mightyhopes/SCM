"use client";

import React from "react";
import Image from "next/image";
import { Sliders, Ruler, ShieldAlert, CheckCircle2, Shield, Eye } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { QUALITY_ASSURANCE_ITEMS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  Sliders,
  Ruler,
  ShieldAlert,
  CheckCircle2,
};

export function QualitySection() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-20 lg:py-28 bg-surface-muted/30 border-b border-border">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Integrity Commitment & Editorial QA Imagery */}
          <ScrollReveal duration={600} direction="up" className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow={t.quality.eyebrow}
              title={t.quality.title}
              description={t.quality.description}
            />

            {/* QA Photographic Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-border bg-surface shadow-md group">
              <div className="relative h-56 sm:h-64 w-full bg-surface-muted">
                <Image
                  src="/images/dummy/06_quality_inspection.jpg"
                  alt="Proses Inspeksi Kualitas Kaus Kaki SCM"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-primary-dark/85 backdrop-blur-xs text-text-inverse px-2.5 py-1 rounded-md text-[10px] font-mono border border-secondary/30">
                  <Eye className="size-3 text-accent" />
                  <span>{t.quality.qcStation}</span>
                </div>

                {/* Floating Worker Inspection Accent */}
                <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2.5 bg-surface/95 backdrop-blur-xs p-1.5 pr-3 rounded-xl border border-border shadow-lg">
                  <div className="relative size-11 rounded-lg overflow-hidden border border-border shrink-0">
                    <Image
                      src="/images/dummy/05_worker_quality_control.jpg"
                      alt="Operator Quality Control SCM"
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-mono uppercase font-bold text-primary">
                      {t.quality.operatorRole}
                    </span>
                    <span className="text-[11px] font-bold text-text-primary">
                      {t.quality.operatorTitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-xl bg-primary text-text-inverse flex items-center justify-center shrink-0">
                  <Shield className="size-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary">
                    {t.quality.physicalTitle}
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {t.quality.physicalSubtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">
                {t.quality.physicalDesc}
              </p>

              <div className="pt-2 flex items-center gap-2 flex-wrap">
                <Badge variant="secondary" className="text-[10px] bg-secondary-light text-primary font-bold">
                  {t.quality.protocol1}
                </Badge>
                <Badge variant="outline" className="text-[10px] text-text-secondary border-border">
                  {t.quality.protocol2}
                </Badge>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: QA Checklist Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {QUALITY_ASSURANCE_ITEMS.map((qa, index) => {
              const IconComponent =
                iconMap[qa.iconName as keyof typeof iconMap] || CheckCircle2;
              const title = isEn ? qa.titleEn : qa.title;
              const desc = isEn ? qa.descriptionEn : qa.description;
              const protocol = isEn ? qa.protocolTagEn : qa.protocolTag;

              return (
                <ScrollReveal
                  key={index}
                  duration={500}
                  delay={index * 75}
                  direction="up"
                  className="h-full"
                >
                  <div className="p-6 rounded-2xl bg-surface border border-border hover:border-secondary-brand transition-all shadow-xs hover:shadow-md flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3.5">
                        <div className="size-11 rounded-xl bg-surface-muted flex items-center justify-center text-primary shrink-0">
                          <IconComponent className="size-5 stroke-[1.75]" />
                        </div>
                        <Badge variant="outline" className="text-[10px] font-mono text-secondary-brand border-border">
                          {protocol}
                        </Badge>
                      </div>
                      <h3 className="text-sm font-bold text-text-primary">
                        {title}
                      </h3>
                      <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
