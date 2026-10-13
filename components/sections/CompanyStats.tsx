"use client";

import React from "react";
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
    },
    {
      id: "experience",
      value: t.stats.items.experience.value,
      label: t.stats.items.experience.label,
      description: t.stats.items.experience.desc,
    },
    {
      id: "markets",
      value: t.stats.items.markets.value,
      label: t.stats.items.markets.label,
      description: t.stats.items.markets.desc,
    },
    {
      id: "quality",
      value: t.stats.items.quality.value,
      label: t.stats.items.quality.label,
      description: t.stats.items.quality.desc,
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
            <div className="text-xs font-mono text-text-secondary bg-surface-muted px-3 py-1.5 rounded-md border border-border">
              PT. Sinlie Cahaya Matahari
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat, idx) => (
            <ScrollReveal
              key={stat.id}
              duration={500}
              delay={idx * 75}
              variant="pop-in"
              className="h-full"
            >
              <div className="p-6 rounded-2xl bg-surface border border-border hover:border-secondary-brand transition-all shadow-2xs hover:shadow-md hover:-translate-y-0.5 group h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                      {stat.value}
                    </span>
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
