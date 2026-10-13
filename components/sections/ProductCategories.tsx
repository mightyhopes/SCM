"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Sparkles, Package } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

// Interactive Colorway Swatches per category
const CATEGORY_COLORS: Record<string, { name: string; hex: string }[]> = {
  "baby-socks": [
    { name: "Pastel Mint", hex: "#D6E8E5" },
    { name: "Soft Cream", hex: "#FDFBF7" },
    { name: "Baby Teal", hex: "#4D9A99" },
    { name: "Sunny Yellow", hex: "#FFCC00" },
  ],
  "kids-socks": [
    { name: "Classic White", hex: "#FFFFFF" },
    { name: "School Navy", hex: "#1E3A8A" },
    { name: "Charcoal Grey", hex: "#4B5563" },
    { name: "Forest Green", hex: "#064E4B" },
  ],
  "ladies-socks": [
    { name: "Neutral Beige", hex: "#E5E0D8" },
    { name: "Deep Teal", hex: "#08615D" },
    { name: "Midnight Black", hex: "#1F2937" },
    { name: "Soft Sage", hex: "#A7F3D0" },
  ],
  "mens-socks": [
    { name: "Executive Black", hex: "#111827" },
    { name: "Heather Charcoal", hex: "#374151" },
    { name: "Athletic Navy", hex: "#1E3A5F" },
    { name: "Classic Grey", hex: "#9CA3AF" },
  ],
  "sport-socks": [
    { name: "Performance Black", hex: "#111827" },
    { name: "Dynamic Teal", hex: "#08615D" },
    { name: "Volt Accent", hex: "#FFCC00" },
    { name: "Clean White", hex: "#FFFFFF" },
  ],
  "custom-socks": [
    { name: "SCM Corporate Teal", hex: "#08615D" },
    { name: "Brand Gold", hex: "#FFCC00" },
    { name: "Royal Blue", hex: "#2563EB" },
    { name: "Bold Crimson", hex: "#DC2626" },
  ],
};

export function ProductCategories() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<Record<string, string>>({
    "baby-socks": "#D6E8E5",
    "kids-socks": "#FFFFFF",
    "ladies-socks": "#08615D",
    "mens-socks": "#111827",
    "sport-socks": "#08615D",
    "custom-socks": "#08615D",
  });

  const filteredCategories = PRODUCT_CATEGORIES.filter((category: ProductCategory) => {
    if (activeTab === "all") return true;
    if (activeTab === "kids-baby") return category.segment === "baby" || category.segment === "kids";
    if (activeTab === "ladies") return category.segment === "ladies";
    if (activeTab === "mens-sport") return category.segment === "mens" || category.segment === "athletic";
    if (activeTab === "custom") return category.segment === "custom";
    return true;
  });

  const handleColorChange = (categoryId: string, hex: string) => {
    setSelectedColor((prev) => ({ ...prev, [categoryId]: hex }));
  };

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

        {/* Categories Grid with Clean Spec Cards (Zero MOQ, Customizable Materials) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, idx) => {
            const currentColor = selectedColor[category.id] || "#08615D";
            const swatches = CATEGORY_COLORS[category.id] || [];
            const displayTitle = isEn ? category.titleEn : category.title;
            const displayDesc = isEn ? category.descriptionEn : category.description;
            const displayComposition = isEn ? category.materialCompositionEn : category.materialComposition;
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
                      className="object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Header badges inside image specimen */}
                    <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase font-bold text-text-inverse bg-primary-dark/85 backdrop-blur-xs px-2.5 py-1 rounded-md tracking-wider border border-secondary/30">
                        GAUGE // {category.needleCounts.join(" & ")}
                      </span>
                    </div>

                    {/* Bottom overlay in image container */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white drop-shadow-sm">
                          {isEn ? category.title : category.titleEn}
                        </span>
                        <span className="text-[10px] font-mono text-secondary-light">
                          Density: {category.needleCounts[0]}
                        </span>
                      </div>
                      <div
                        className="size-5 rounded-full border-2 border-white shadow-md transition-colors"
                        style={{ backgroundColor: currentColor }}
                        title="Color Option"
                      />
                    </div>
                  </div>

                  {/* Color Swatches Bar */}
                  <div className="px-5 py-3 bg-surface-muted/60 border-b border-border flex items-center justify-between gap-3">
                    <span className="text-[10px] font-mono font-bold uppercase text-text-secondary">
                      Colorways:
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {swatches.map((swatch) => (
                        <button
                          key={swatch.name}
                          type="button"
                          onClick={() => handleColorChange(category.id, swatch.hex)}
                          title={swatch.name}
                          className={`size-4 rounded-full border transition-all cursor-pointer ${
                            currentColor === swatch.hex
                              ? "ring-2 ring-primary scale-110 border-surface"
                              : "border-border/80 hover:scale-105"
                          }`}
                          style={{ backgroundColor: swatch.hex }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Card Information Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                        {displayTitle}
                      </h3>

                      <p className="mt-2 text-xs text-text-secondary leading-relaxed line-clamp-2">
                        {displayDesc}
                      </p>

                      {/* Needle Counts & Material */}
                      <div className="mt-4 pt-3 border-t border-border flex flex-col gap-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-mono uppercase text-text-secondary">
                            {t.products.gaugeLabel}
                          </span>
                          {category.needleCounts.map((needle) => (
                            <Badge
                              key={needle}
                              variant="secondary"
                              className="text-[10px] font-mono px-1.5 py-0 h-4 bg-secondary-light text-primary font-bold"
                            >
                              {needle}
                            </Badge>
                          ))}
                        </div>

                        <div className="text-[11px] text-text-secondary">
                          <span className="font-semibold text-text-primary">
                            {t.products.materialLabel}{" "}
                          </span>
                          <span>{displayComposition}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mt-3 pt-3 border-t border-border flex flex-col gap-1.5">
                        {displayHighlights.map((item, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2 text-xs text-text-primary"
                          >
                            <Check className="size-3.5 text-primary shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Packaging note */}
                      <div className="mt-3 pt-2 text-[10px] text-text-secondary flex items-center gap-1.5">
                        <Package className="size-3 text-secondary-brand shrink-0" />
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
