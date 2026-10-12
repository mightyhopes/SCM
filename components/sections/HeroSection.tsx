import React from "react";
import { ArrowRight, CheckCircle2, Shield, Factory, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { COMPANY_INFO } from "@/data/companyData";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-background border-b border-border">
      {/* Subtle industrial background pattern */}
      <div className="absolute inset-0 industrial-grid-bg opacity-30 pointer-events-none" />

      {/* Decorative subtle brand gradient orb */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary-light/40 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Call to Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-surface border border-border shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                SOCK MANUFACTURING · INDONESIA
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.12]">
                Precision in Every{" "}
                <span className="text-primary relative inline-block">
                  Stitch.
                  <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-accent/70 rounded-full" />
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-secondary">
                {COMPANY_INFO.taglineId}
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
              PT. Sinlie Cahaya Matahari (SCM) menghadirkan keunggulan manufaktur
              kaus kaki berskala industri. Didukung mesin rajut komputerisasi
              modern dan sistem kontrol mutu ketat, kami memproduksi kaus kaki
              berkualitas tinggi untuk kebutuhan brand ritel, seragam korporat,
              dan pesanan OEM di seluruh Indonesia.
            </p>

            {/* Key Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-text-primary bg-surface/80 px-3 py-2 rounded-md border border-border">
                <Factory className="w-4 h-4 text-primary shrink-0" />
                <span>Mesin Rajut Otomatis</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-text-primary bg-surface/80 px-3 py-2 rounded-md border border-border">
                <Shield className="w-4 h-4 text-primary shrink-0" />
                <span>Standar Kualitas Presisi</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-text-primary bg-surface/80 px-3 py-2 rounded-md border border-border">
                <Award className="w-4 h-4 text-primary shrink-0" />
                <span>OEM & Private Label</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="#products"
                variant="primary"
                size="lg"
                className="group"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                href="#capabilities"
                variant="outline"
                size="lg"
              >
                <span>Our Capabilities</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Elements */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-secondary-light/60 to-accent/20 blur-sm pointer-events-none" />

              <div className="relative bg-surface p-3 rounded-xl border border-border shadow-md">
                <ImagePlaceholder
                  label="Fasilitas Pabrik & Mesin Rajut Modern SCM"
                  category="Fasilitas Produksi SCM"
                  dimensions="1000 x 850 px"
                  assetPathHint="/public/images/hero-factory.jpg"
                  aspectRatioClass="aspect-4/3 sm:aspect-5/4"
                />

                {/* Floating Production Metric Card */}
                <div className="mt-3 p-3.5 bg-surface-muted rounded-lg border border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-primary text-text-inverse flex items-center justify-center font-bold text-sm">
                      SCM
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary uppercase tracking-wider">
                        Kapasitas Produksi Masal
                      </p>
                      <p className="text-xs text-text-secondary">
                        Teknologi rajut multi-gauge & high-density
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                      Siap Mitra B2B
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
