import React from "react";
import { Cpu, Layers, Sparkles, PackageCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
                className="p-8 rounded-xl bg-surface border border-border hover:border-secondary transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-muted border border-border flex items-center justify-center text-primary shrink-0">
                      <IconComponent className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary">
                        {cap.title}
                      </h3>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary">
                        Manufaktur SCM
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="pt-4 border-t border-border space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-secondary block mb-1">
                    Sorotan Kapabilitas:
                  </span>
                  {cap.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Specification Bar */}
        <div className="mt-12 p-6 rounded-lg bg-surface border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="pt-4 sm:pt-0">
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold">
                Variasi Needle Count
              </span>
              <p className="text-lg font-bold text-text-primary mt-1">
                96N / 108N / 144N / 168N / 200N
              </p>
              <p className="text-xs text-text-secondary mt-0.5">
                Mendukung rajutan tebal hingga ultra-fine knit
              </p>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4">
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold">
                Opsi Konstruksi Tumit & Jari
              </span>
              <p className="text-lg font-bold text-text-primary mt-1">
                Y-Heel & Seamless Toe
              </p>
              <p className="text-xs text-text-secondary mt-0.5">
                Fitting ergonomis anti-selip pada lekuk kaki
              </p>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-4">
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold">
                Pilihan Material Benang
              </span>
              <p className="text-lg font-bold text-text-primary mt-1">
                Combed Cotton, Spandex, TC, PE
              </p>
              <p className="text-xs text-text-secondary mt-0.5">
                Kombinasi fleksibel sesuai budget & fungsi
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
