"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/data/companyData";
import { RfqModal } from "@/components/ui/RfqModal";

export function ProductCategories() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories = PRODUCT_CATEGORIES.filter((category: ProductCategory) => {
    if (activeTab === "all") return true;
    if (activeTab === "kids-baby") return category.segment === "baby" || category.segment === "kids";
    if (activeTab === "ladies") return category.segment === "ladies";
    if (activeTab === "mens") return category.segment === "mens";
    return true;
  });

  return (
    <section id="products" className="py-20 lg:py-28 bg-surface border-b border-border">
      <Container size="default">
        <SectionHeading
          eyebrow="KATEGORI PRODUK"
          title="Ragam Manufaktur Kaus Kaki untuk Berbagai Segmen"
          description="Didukung ragam konfigurasi mesin needle gauge (96N hingga 200N), kami melayani produksi masal dengan fleksibilitas bahan dan fitting spesifik."
          align="center"
        />

        {/* Segment Filter Tabs */}
        <div className="flex justify-center mb-10">
          <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as string)}>
            <TabsList className="bg-surface-muted p-1 rounded-xl border border-border h-auto flex flex-wrap gap-1">
              <TabsTrigger
                value="all"
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg data-active:bg-primary data-active:text-text-inverse transition-colors"
              >
                Semua Kategori ({PRODUCT_CATEGORIES.length})
              </TabsTrigger>
              <TabsTrigger
                value="kids-baby"
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg data-active:bg-primary data-active:text-text-inverse transition-colors"
              >
                Bayi & Anak
              </TabsTrigger>
              <TabsTrigger
                value="ladies"
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg data-active:bg-primary data-active:text-text-inverse transition-colors"
              >
                Wanita (Fashion)
              </TabsTrigger>
              <TabsTrigger
                value="mens"
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg data-active:bg-primary data-active:text-text-inverse transition-colors"
              >
                Pria & Olahraga
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col bg-surface rounded-xl border border-border overflow-hidden hover:border-secondary-brand hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image / Placeholder Area */}
              <div className="p-3 bg-surface-muted/30">
                <ImagePlaceholder
                  label={category.imagePlaceholder.label}
                  category={category.titleEn}
                  dimensions={category.imagePlaceholder.suggestedRatio}
                  assetPathHint={`/public/images/products/${category.id}.jpg`}
                  aspectRatioClass="aspect-4/3"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-brand">
                      {category.titleEn}
                    </span>
                    <Badge variant="outline" className="text-[10px] font-mono px-1.5 py-0 border-border">
                      OEM Ready
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-text-secondary leading-relaxed">
                    {category.description}
                  </p>

                  {/* Needle Counts & Material */}
                  <div className="mt-4 pt-3 border-t border-border space-y-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-mono uppercase text-text-secondary">
                        Needle:
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
                      <span className="font-semibold text-text-primary">Material: </span>
                      <span>{category.materialComposition}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-3 pt-3 border-t border-border space-y-1.5">
                    {category.highlights.map((item, idx) => (
                      <div
                        key={idx}
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
                  <RfqModal defaultCategory={category.title}>
                    <button
                      type="button"
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-primary hover:text-primary-hover group/link cursor-pointer"
                    >
                      <span>Ajukan Spesifikasi {category.title}</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                    </button>
                  </RfqModal>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-surface-muted border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
              <Sparkles className="size-4 text-accent" />
              <span>Layanan Kustom Private Label</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-text-primary">
              Membutuhkan Kaus Kaki dengan Pola Desain atau Spesifikasi Khusus?
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Kami menerima pesanan maklon kaus kaki kustom OEM untuk brand retail, klub olahraga, instansi seragam kedinasan, maupun merchandise perusahaan dengan sistem sampling terstruktur.
            </p>
          </div>
          <RfqModal defaultCategory="Custom OEM">
            <Button
              variant="primary"
              size="default"
              className="shrink-0"
            >
              Konsultasi Kustom OEM
            </Button>
          </RfqModal>
        </div>
      </Container>
    </section>
  );
}
