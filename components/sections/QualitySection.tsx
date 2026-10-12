import React from "react";
import { Sliders, Ruler, ShieldAlert, CheckCircle2, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QUALITY_ASSURANCE_ITEMS } from "@/data/companyData";

const iconMap = {
  Sliders,
  Ruler,
  ShieldAlert,
  CheckCircle2,
};

export function QualitySection() {
  return (
    <section className="py-20 lg:py-28 bg-surface-muted/30 border-b border-border">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Integrity Commitment */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="QUALITY ASSURANCE"
              title="Standar Pemeriksaan Ketat di Setiap Tahap Produksi"
              description="Bagi kami, kualitas bukan sekadar tampilan akhir, melainkan integritas rajutan, kenyamanan saat dipakai berulang, dan kepuasan mitra B2B kami."
            />

            <div className="p-6 rounded-xl bg-surface border border-border shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary text-text-inverse flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary">
                    Pemeriksaan Fisik 100%
                  </h3>
                  <p className="text-xs text-text-secondary">
                    Tanpa klaim sertifikasi fiktif
                  </p>
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">
                Kami menerapkan metode kendali mutu internal secara disiplin
                pada setiap batch sebelum pengemasan. Bila ditemukan produk yang
                tidak memenuhi toleransi dimensi atau terdapat cacat rajut,
                produk langsung dipisahkan dari batch pengiriman.
              </p>
            </div>
          </div>

          {/* Right Column: QA Checklist Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {QUALITY_ASSURANCE_ITEMS.map((qa, index) => {
              const IconComponent =
                iconMap[qa.iconName as keyof typeof iconMap] || CheckCircle2;

              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-surface border border-border hover:border-secondary transition-all shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-muted flex items-center justify-center text-primary mb-3.5">
                    <IconComponent className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary">
                    {qa.title}
                  </h3>
                  <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                    {qa.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
