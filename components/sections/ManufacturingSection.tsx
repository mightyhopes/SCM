import React from "react";
import { Cpu, Layers, Sparkles, PackageCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { CAPABILITIES } from "@/data/companyData";

const iconMap = {
  Cpu,
  Layers,
  Sparkles,
  PackageCheck,
};

export function ManufacturingSection() {
  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-surface-muted/30 border-b border-border">
      <Container size="default">
        <SectionHeading
          eyebrow="KAPABILITAS PABRIK"
          title="Infrastruktur Produksi & Keahlian Teknis Rajut"
          description="Didukung permesinan terstandar industri untuk menghasilkan rajutan berkonsistensi tinggi dengan kapasitas yang dapat diskalakan sesuai volume pesanan Anda."
        />

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITIES.map((cap) => {
            const IconComponent =
              iconMap[cap.iconName as keyof typeof iconMap] || Cpu;

            return (
              <div
                key={cap.id}
                className="p-8 rounded-2xl bg-surface border border-border hover:border-secondary-brand transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="size-12 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-primary shrink-0">
                        <IconComponent className="size-6 stroke-[1.75]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">
                          {cap.title}
                        </h3>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary-brand">
                          Standar Manufaktur SCM
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-mono px-2 py-0.5 bg-secondary-light text-primary font-bold">
                      {cap.badgeText}
                    </Badge>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="pt-4 border-t border-border flex flex-col gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-secondary block mb-0.5">
                    Spesifikasi & Output:
                  </span>
                  {cap.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-text-primary">
                      <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Specification Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="pt-4 sm:pt-0">
              <span className="text-xs uppercase tracking-wider text-secondary-brand font-semibold">
                Variasi Needle Count
              </span>
              <p className="text-xl font-bold text-text-primary mt-1">
                96N / 108N / 144N / 168N / 200N
              </p>
              <p className="text-xs text-text-secondary mt-1">
                Mendukung rajutan tebal hingga ultra-fine gauge
              </p>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4">
              <span className="text-xs uppercase tracking-wider text-secondary-brand font-semibold">
                Opsi Konstruksi Tumit & Jari
              </span>
              <p className="text-xl font-bold text-text-primary mt-1">
                Y-Heel & Seamless Toe
              </p>
              <p className="text-xs text-text-secondary mt-1">
                Fitting ergonomis anti-selip pada lekuk tumit
              </p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-4">
              <span className="text-xs uppercase tracking-wider text-secondary-brand font-semibold">
                Pilihan Material Benang
              </span>
              <p className="text-xl font-bold text-text-primary mt-1">
                Combed Cotton, Spandex, TC, PE
              </p>
              <p className="text-xs text-text-secondary mt-1">
                Kombinasi fleksibel sesuai fungsi dan budget brand
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
