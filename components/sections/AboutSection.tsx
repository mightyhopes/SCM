"use client";

import React from "react";
import Image from "next/image";
import { Target, Compass, CheckCircle2, Shield, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY_INFO } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-surface-muted/40 border-b border-border">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Industrial Facility & Editorial Photography Card */}
          <ScrollReveal
            duration={600}
            direction="up"
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary to-secondary-brand opacity-30 blur-md pointer-events-none" />

              <div className="relative bg-surface p-5 sm:p-6 rounded-2xl border border-border shadow-xl overflow-hidden">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Building2 className="size-4 sm:size-5 text-primary" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary">
                      {t.about.cardFacility}
                    </span>
                  </div>
                  <Badge variant="secondary" className="text-[10px] font-mono bg-secondary-light text-primary font-bold">
                    {t.about.badgeEst}
                  </Badge>
                </div>

                {/* Primary Facility Exterior Photograph */}
                <div className="relative w-full h-52 sm:h-60 rounded-xl overflow-hidden border border-border bg-surface-muted group mb-4">
                  <Image
                    src="/images/dummy/01_factory_exterior.jpg"
                    alt="Fasilitas Pabrik PT Sinlie Cahaya Matahari"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 text-left">
                    <span className="text-[10px] font-mono uppercase text-accent font-bold tracking-wider block">
                      {t.about.cardFacility}
                    </span>
                    <span className="text-xs font-bold text-white drop-shadow-xs">
                      {COMPANY_INFO.name}
                    </span>
                  </div>
                </div>

                {/* Secondary Accents: Office & Production Team Strips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-surface-muted/80 border border-border flex items-center gap-2.5">
                    <div className="relative size-10 rounded-lg overflow-hidden border border-border shrink-0">
                      <Image
                        src="/images/dummy/20_office.jpg"
                        alt="Kantor Operasional SCM"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] font-mono text-secondary-brand font-bold uppercase block truncate">
                        {t.about.officeLabel}
                      </span>
                      <span className="text-xs font-bold text-text-primary block truncate">
                        {t.about.officeTitle}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-surface-muted/80 border border-border flex items-center gap-2.5">
                    <div className="relative size-10 rounded-lg overflow-hidden border border-border shrink-0">
                      <Image
                        src="/images/dummy/19_team.jpg"
                        alt="Tim Manufaktur SCM"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] font-mono text-secondary-brand font-bold uppercase block truncate">
                        {t.about.teamLabel}
                      </span>
                      <span className="text-xs font-bold text-text-primary block truncate">
                        {t.about.teamTitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Core Strengths Checklist */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-xs text-text-primary p-2 rounded-lg bg-surface-muted/40 border border-border/70">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>{t.about.strength1}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-text-primary p-2 rounded-lg bg-surface-muted/40 border border-border/70">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>{t.about.strength2}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-text-primary p-2 rounded-lg bg-surface-muted/40 border border-border/70">
                    <CheckCircle2 className="size-4 text-primary shrink-0" />
                    <span>{t.about.strength3}</span>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-primary text-text-inverse p-3.5 rounded-xl shadow-lg border border-secondary/40 items-center gap-3 max-w-xs">
                <Shield className="size-5 text-accent shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-accent uppercase tracking-wider">
                    {t.about.guaranteeTitle}
                  </p>
                  <p className="text-[10px] text-secondary-light">
                    {t.about.guaranteeDesc}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Company Information & Narrative */}
          <ScrollReveal
            duration={600}
            delay={150}
            direction="up"
            className="lg:col-span-7 order-1 lg:order-2 space-y-6"
          >
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              description={t.about.intro}
            />

            <div className="space-y-4 text-base text-text-secondary leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-surface border border-border shadow-xs hover:border-secondary-brand transition-all">
                <div className="size-9 rounded-xl bg-secondary-light flex items-center justify-center text-primary mb-3">
                  <Compass className="size-5" />
                </div>
                <h3 className="text-sm font-bold text-text-primary">
                  {t.about.visionTitle}
                </h3>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                  {t.about.visionDesc}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-border shadow-xs hover:border-secondary-brand transition-all">
                <div className="size-9 rounded-xl bg-secondary-light flex items-center justify-center text-primary mb-3">
                  <Target className="size-5" />
                </div>
                <h3 className="text-sm font-bold text-text-primary">
                  {t.about.missionTitle}
                </h3>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                  {t.about.missionDesc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
