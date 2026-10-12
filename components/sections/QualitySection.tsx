import React from "react";
import { Sliders, Ruler, ShieldAlert, CheckCircle2, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
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

            <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-xl bg-primary text-text-inverse flex items-center justify-center shrink-0">
                  <Shield className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary">
                    Pemeriksaan Fisik 100%
                  </h3>
                  <p className="text-xs text-text-secondary">
                    Metode kendali mutu riil & terukur
                  </p>
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">
                Kami menerapkan metode kendali mutu internal secara disiplin pada setiap batch sebelum pengemasan. Bila ditemukan produk yang tidak memenuhi toleransi dimensi atau terdapat cacat rajut, produk langsung dipisahkan dari batch pengiriman.
              </p>

              <div className="pt-2 flex items-center gap-2 flex-wrap">
                <Badge variant="secondary" className="text-[10px] bg-secondary-light text-primary font-bold">
                  Anti-Defect Protocol
                </Badge>
                <Badge variant="outline" className="text-[10px] text-text-secondary border-border">
                  100% Visual Inspection
                </Badge>
              </div>
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
                  className="p-6 rounded-2xl bg-surface border border-border hover:border-secondary-brand transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <div className="size-11 rounded-xl bg-surface-muted flex items-center justify-center text-primary shrink-0">
                        <IconComponent className="size-5 stroke-[1.75]" />
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono text-secondary-brand border-border">
                        {qa.protocolTag}
                      </Badge>
                    </div>
                    <h3 className="text-sm font-bold text-text-primary">
                      {qa.title}
                    </h3>
                    <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                      {qa.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
