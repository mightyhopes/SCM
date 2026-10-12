import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { PRODUCT_CATEGORIES } from "@/data/companyData";

export function ProductCategories() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-surface border-b border-border">
      <Container size="default">
        <SectionHeading
          eyebrow="KATEGORI PRODUK"
          title="Ragam Manufaktur Kaus Kaki untuk Berbagai Segmen"
          description="Kami memproduksi berbagai kategori kaus kaki sesuai spesifikasi fungsional, rentang ukuran, dan kebutuhan brand mitra."
          align="center"
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="flex flex-col bg-surface rounded-xl border border-border overflow-hidden hover:border-secondary hover:shadow-md transition-all duration-200 group"
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
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                      {category.titleEn}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-xs bg-surface-muted text-text-secondary border border-border">
                      OEM Ready
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {category.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-border space-y-1.5">
                    {category.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-text-primary"
                      >
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-border">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-primary hover:text-primary-hover group/link"
                  >
                    <span>Ajukan Spesifikasi Produk</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-surface-muted border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-text-primary">
              Membutuhkan Kaus Kaki dengan Pola Desain atau Spesifikasi Khusus?
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Kami menerima konsultasi pesanan kaus kaki kustom OEM untuk merek ritel, klub olahraga, instansi seragam kedinasan, maupun merchandise perusahaan.
            </p>
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="shrink-0"
          >
            Konsultasi Kustom OEM
          </Button>
        </div>
      </Container>
    </section>
  );
}
