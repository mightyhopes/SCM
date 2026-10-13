"use client";

import React from "react";
import Image from "next/image";
import { Boxes, Cpu, GitMerge, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRODUCTION_PROCESS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  Boxes,
  Cpu,
  GitMerge,
  ShieldCheck,
  Truck,
};

export function ProductionProcess() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-20 lg:py-28 bg-surface border-b border-border">
      <Container size="default">
        <ScrollReveal duration={600} direction="up">
          <SectionHeading
            eyebrow={t.process.eyebrow}
            title={t.process.title}
            description={t.process.description}
            align="center"
          />
        </ScrollReveal>

        {/* Process Steps */}
        <div className="relative mt-12">
          {/* Desktop Horizontal Connecting Line (situated behind cards) */}
          <div className="hidden lg:block absolute top-20 left-16 right-16 h-0.5 bg-border -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PRODUCTION_PROCESS.map((item, index) => {
              const IconComponent =
                iconMap[item.iconName as keyof typeof iconMap] || Cpu;
              const title = isEn ? item.titleEn : item.title;
              const desc = isEn ? item.descriptionEn : item.description;
              const metric = isEn ? item.keyMetricEn : item.keyMetric;

              return (
                <ScrollReveal
                  key={item.step}
                  duration={550}
                  delay={index * 100}
                  variant="timeline-step"
                  className="h-full"
                >
                  <div className="flex flex-col h-full text-left p-5 rounded-2xl bg-surface border border-border shadow-xs hover:border-secondary-brand hover:shadow-md transition-all group">
                    {/* Step Image Preview */}
                    <div className="relative h-36 w-full rounded-xl overflow-hidden bg-surface-muted mb-4 border border-border group/img">
                      <Image
                        src={item.image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 240px"
                        className="object-cover group-hover/img:scale-106 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Step Number & Icon Badge */}
                      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 bg-primary-dark/90 backdrop-blur-xs text-text-inverse px-2 py-0.5 rounded-md text-[10px] font-mono border border-secondary/30">
                        <IconComponent className="size-3 text-accent" />
                        <span className="font-bold">STEP {item.step}</span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors leading-snug">
                          {title}
                        </h3>

                        <Badge variant="outline" className="mt-2 text-[10px] font-mono text-secondary-brand border-border bg-surface-muted/50">
                          {metric}
                        </Badge>

                        <p className="mt-2.5 text-xs text-text-secondary leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>

                    {/* Mobile index connector indicator */}
                    {index < PRODUCTION_PROCESS.length - 1 && (
                      <div className="lg:hidden mt-4 w-full flex justify-center">
                        <div className="w-0.5 h-3 bg-border" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Workflow note */}
        <ScrollReveal duration={600} delay={200} direction="up">
          <p className="mt-12 text-center text-xs text-text-secondary">
            {t.process.disclaimer}
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
