"use client";

import React from "react";
import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export function CompanyStats() {
  const { t } = useLanguage();

  const statItems = [
    {
      id: "capacity",
      value: t.stats.items.capacity.value,
      label: t.stats.items.capacity.label,
      description: t.stats.items.capacity.desc,
      isVerified: false,
    },
    {
      id: "experience",
      value: t.stats.items.experience.value,
      label: t.stats.items.experience.label,
      description: t.stats.items.experience.desc,
      isVerified: false,
    },
    {
      id: "categories",
      value: t.stats.items.categories.value,
      label: t.stats.items.categories.label,
      description: t.stats.items.categories.desc,
      isVerified: true,
    },
    {
      id: "inspection",
      value: t.stats.items.inspection.value,
      label: t.stats.items.inspection.label,
      description: t.stats.items.inspection.desc,
      isVerified: true,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-surface border-b border-border">
      <Container size="default">
        {/* Section Intro Badge */}
        <ScrollReveal duration={500} direction="up">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-border gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary-brand">
                {t.stats.eyebrow}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
                {t.stats.title}
              </h2>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-muted border border-border text-xs text-text-secondary">
              <Info className="size-3.5 text-secondary-brand shrink-0" />
              <span>{t.stats.disclaimer}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat, idx) => (
            <ScrollReveal
              key={stat.id}
              duration={500}
              delay={idx * 60}
              direction="up"
              className="h-full"
            >
              <div className="relative p-6 rounded-xl bg-surface border border-border hover:border-secondary-brand transition-all shadow-2xs hover:shadow-xs group h-full">
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-border group-hover:bg-accent transition-colors rounded-t-xl" />

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                      {stat.value}
                    </span>
                    {!stat.isVerified && (
                      <span
                        title="Data menunggu konfirmasi final manajemen"
                        className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-xs bg-amber-50 text-amber-700 border border-amber-200"
                      >
                        {t.stats.confirmBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-text-primary tracking-wide">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-text-secondary leading-relaxed pt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
