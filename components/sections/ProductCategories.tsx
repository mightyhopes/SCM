"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Sparkles, Package } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export function ProductCategories() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories = PRODUCT_CATEGORIES.filter((category: ProductCategory) => {
    if (activeTab === "all") return true;
    if (activeTab === "kids-baby") return category.segment === "baby" || category.segment === "kids";
    if (activeTab === "ladies") return category.segment === "ladies";
    if (activeTab === "mens-sport") return category.segment === "mens" || category.segment === "athletic";
    if (activeTab === "custom") return category.segment === "custom";
    return true;
  });

  const isEn = language === "en";

  return (
    <section className="py-20 lg:py-28 bg-surface border-b border-border">
      <Container size="default">
        <ScrollReveal duration={600} direction="up">
          <SectionHeading
            eyebrow={t.products.eyebrow}
            title={t.products.title}
            description={t.products.description}
            align="center"
          />
        </ScrollReveal>

        {/* Segment Filter Tabs */}
        <div className="flex justify-center mb-12">
          <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as string)}>
            <TabsList className="bg-surface-muted p-1.5 rounded-2xl border border-border h-auto flex flex-wrap gap-1 shadow-2xs">
              <TabsTrigger
                value="all"
                className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl data-active:bg-primary data-active:text-text-inverse transition-all cursor-pointer"
              >
                {t.products.tabs.all} ({PRODUCT_CATEGORIES.length})
              </TabsTrigger>
              <TabsTrigger
                value="kids-baby"
                className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl data-active:bg-primary data-active:text-text-inverse transition-all cursor-pointer"
              >
                {t.products.tabs.babyKids}
              </TabsTrigger>
              <TabsTrigger
                value="ladies"
                className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl data-active:bg-primary data-active:text-text-inverse transition-all cursor-pointer"
              >
                {t.products.tabs.ladies}
              </TabsTrigger>
              <TabsTrigger
                value="mens-sport"
                className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl data-active:bg-primary data-active:text-text-inverse transition-all cursor-pointer"
              >
                {t.products.tabs.mensSport}
              </TabsTrigger>
              <TabsTrigger
                value="custom"
                className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl data-active:bg-primary data-active:text-text-inverse transition-all cursor-pointer"
              >
                {t.products.tabs.custom}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Categories Grid - Focused on Product Flexibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, idx) => {
            const displayTitle = isEn ? category.titleEn : category.title;
            const displayDesc = isEn ? category.descriptionEn : category.description;
            const displayHighlights = isEn ? category.highlightsEn : category.highlights;

            return (
              <ScrollReveal
                key={category.id}
                duration={550}
                delay={idx * 70}
                variant="cascade-card"
                className="h-full"
              >
                <div className="flex flex-col h-full bg-surface rounded-2xl border border-border overflow-hidden hover:border-secondary-brand hover:shadow-xl transition-all duration-300 group">
                  {/* Visual Product Photography Area */}
                  <div className="relative h-60 sm:h-64 w-full bg-surface-muted overflow-hidden border-b border-border group/img">
                    <Image
                      src={category.image}
                      alt={displayTitle}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className={`object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out ${category.imagePosition || "object-center"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Subtle Category Pill on Image */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="text-xs font-semibold text-white/95 drop-shadow-sm px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-xs border border-white/10 inline-block">
                        {displayTitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Information Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                        {displayTitle}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {displayDesc}
                      </p>

                      {/* Highlights / Fleksibilitas Produk */}
                      <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
                        {displayHighlights.map((item, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2 text-xs text-text-primary"
                          >
                            <Check className="size-3.5 text-primary shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Packaging Flexibility Note */}
                      <div className="mt-3.5 pt-3 border-t border-border/60 text-[11px] text-text-secondary flex items-center gap-2">
                        <Package className="size-3.5 text-secondary-brand shrink-0" />
                        <span>{t.products.packagingNote}</span>
                      </div>
                    </div>

                    {/* Card Action Link to Contact */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-between w-full text-xs font-bold text-primary hover:text-primary-hover group/link cursor-pointer"
                      >
                        <span>
                          {t.products.sampleBtn} {displayTitle}
                        </span>
                        <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Custom Order Callout */}
        <ScrollReveal duration={600} direction="up" className="mt-14">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-surface-muted via-surface to-secondary-light/40 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
                <Sparkles className="size-4 text-accent" />
                <span>{t.products.customBanner.tag}</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-text-primary">
                {t.products.customBanner.title}
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {t.products.customBanner.desc}
              </p>
            </div>
            <Button
              href="#contact"
              variant="primary"
              size="default"
              className="shrink-0 cursor-pointer shadow-md"
            >
              {t.products.customBanner.btn}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
