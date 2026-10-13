"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/data/companyData";
import { RfqModal } from "@/components/ui/RfqModal";
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

// Anatomical Feature Callouts
const CATEGORY_SPECS: Record<
  string,
  { zone: string; zoneEn: string; detail: string; detailEn: string }[]
> = {
  "baby-socks": [
    { zone: "Cuff", zoneEn: "Cuff", detail: "Karet elastis lembut non-constricting", detailEn: "Non-constricting elastic band" },
    { zone: "Sole", zoneEn: "Sole", detail: "Alas anti-slip silikon heksagon", detailEn: "Anti-slip silicone hexagon grip" },
    { zone: "Toe", zoneEn: "Toe", detail: "Sambungan jari flat-lock tanpa tonjolan", detailEn: "Seamless flat-lock linking" },
  ],
  "kids-socks": [
    { zone: "Heel & Toe", zoneEn: "Heel & Toe", detail: "Penguatan ganda area gesekan tinggi", detailEn: "Double-reinforced high friction area" },
    { zone: "Body", zoneEn: "Body", detail: "Katun 144N berkerapatan tinggi menyerap keringat", detailEn: "High-density 144N breathable cotton" },
    { zone: "Cuff", zoneEn: "Cuff", detail: "Rib elastis anti-kendur sepanjang hari", detailEn: "Stay-up elastic ribbed cuff" },
  ],
  "ladies-socks": [
    { zone: "Weave", zoneEn: "Weave", detail: "Rajutan ultra-fine 200N halus", detailEn: "Ultra-fine 200N gauge knit" },
    { zone: "Siluet", zoneEn: "Silhouette", detail: "Kontur ergonomis ankle & hidden cut", detailEn: "Ergonomic contour ankle & hidden" },
    { zone: "Feel", zoneEn: "Feel", detail: "Campuran katun combed selembut sutra", detailEn: "Silky combed cotton blend" },
  ],
  "mens-socks": [
    { zone: "Heel", zoneEn: "Heel", detail: "Kantung tumit Y-heel dalam anti-selip", detailEn: "Deep Y-heel pocket anti-slip" },
    { zone: "Band", zoneEn: "Band", detail: "Karet rib stay-up eksekutif rapi", detailEn: "Stay-up ribbed executive cuff" },
    { zone: "Toe", zoneEn: "Toe", detail: "Jahitan jari sambung rata halus", detailEn: "Hand-linked flat seam toe" },
  ],
  "sport-socks": [
    { zone: "Sole", zoneEn: "Sole", detail: "Bantalan telapak terry cushion padat", detailEn: "High-density Terry Cushion sole" },
    { zone: "Arch", zoneEn: "Arch", detail: "Pita kompresi elastis arch support dinamis", detailEn: "Dynamic elastic arch support band" },
    { zone: "Mesh", zoneEn: "Mesh", detail: "Zona ventilasi sirkulasi udara instep", detailEn: "Breathable instep air-flow zone" },
  ],
  "custom-socks": [
    { zone: "Jacquard", zoneEn: "Jacquard", detail: "Pola motif & logo definisi tinggi", detailEn: "High-definition custom pattern & logo" },
    { zone: "Material", zoneEn: "Material", detail: "Campuran benang kustom & pantone match", detailEn: "Custom yarn blend & pantone match" },
    { zone: "Package", zoneEn: "Package", detail: "Hangtag label privat & barcode ritel", detailEn: "Private label hangtag & barcode" },
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
    <section id="products" className="py-20 lg:py-28 bg-surface border-b border-border">
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

        {/* Categories Grid with Rich Interactive Textile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, idx) => {
            const currentColor = selectedColor[category.id] || "#08615D";
            const specs = CATEGORY_SPECS[category.id] || [];
            const swatches = CATEGORY_COLORS[category.id] || [];
            const displayTitle = isEn ? category.titleEn : category.title;
            const displayDesc = isEn ? category.descriptionEn : category.description;
            const displayComposition = isEn ? category.materialCompositionEn : category.materialComposition;
            const displayHighlights = isEn ? category.highlightsEn : category.highlights;

            return (
              <ScrollReveal
                key={category.id}
                duration={500}
                delay={idx * 60}
                direction="up"
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

                    {/* Header badges inside specimen */}
                    <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase font-bold text-text-inverse bg-primary-dark/85 backdrop-blur-xs px-2.5 py-1 rounded-md tracking-wider border border-secondary/30">
                        GAUGE // {category.needleCounts.join(" & ")}
                      </span>
                      <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 border-white/30 bg-surface/90 backdrop-blur-xs text-text-primary font-bold">
                        {t.products.moq}
                      </Badge>
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
                        title={t.products.colorLabel}
                      />
                    </div>
                  </div>

                  {/* Anatomical Feature Highlights & Color Swatches */}
                  <div className="px-5 py-3.5 bg-surface-muted/60 border-b border-border flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      {specs.slice(0, 2).map((item, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-1 text-[10px] text-text-secondary bg-surface px-2 py-0.5 rounded-md border border-border truncate"
                        >
                          <span className="font-mono font-bold text-primary">
                            {isEn ? item.zoneEn : item.zone}:
                          </span>
                          <span className="truncate">
                            {isEn ? item.detailEn : item.detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Color Swatches */}
                    <div className="flex items-center gap-1 shrink-0">
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
                    </div>

                    {/* Card Action Modal Trigger */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <RfqModal defaultCategory={displayTitle}>
                        <button
                          type="button"
                          className="inline-flex items-center justify-between w-full text-xs font-bold text-primary hover:text-primary-hover group/link cursor-pointer"
                        >
                          <span>
                            {t.products.sampleBtn} {displayTitle}
                          </span>
                          <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                        </button>
                      </RfqModal>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Custom Order Callout with High Visual Distinction */}
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
            <RfqModal defaultCategory="Custom OEM">
              <Button
                variant="primary"
                size="default"
                className="shrink-0 cursor-pointer shadow-md"
              >
                {t.products.customBanner.btn}
              </Button>
            </RfqModal>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
