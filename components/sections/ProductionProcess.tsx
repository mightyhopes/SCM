import React from "react";
import { Boxes, Cpu, GitMerge, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { PRODUCTION_PROCESS } from "@/data/companyData";

const iconMap = {
  Boxes,
  Cpu,
  GitMerge,
  ShieldCheck,
  Truck,
};

export function ProductionProcess() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-surface border-b border-border">
      <Container size="default">
        <SectionHeading
          eyebrow="ALUR PRODUKSI TERSTANDARISASI"
          title="Tahapan Manufaktur dari Benang hingga Pengemasan"
          description="Alur kerja terstruktur untuk memastikan setiap lusin kaus kaki memenuhi standar presisi, elastisitas, dan kerapian kemasan siap distribusi."
          align="center"
        />

        {/* Process Steps */}
        <div className="relative mt-12">
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-14 left-12 right-12 h-0.5 bg-border -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {PRODUCTION_PROCESS.map((item, index) => {
              const IconComponent =
                iconMap[item.iconName as keyof typeof iconMap] || Cpu;

              return (
                <div
                  key={item.step}
                  className="flex flex-col items-start lg:items-center text-left lg:text-center p-6 lg:p-4 rounded-2xl bg-surface border border-border lg:border-transparent lg:bg-transparent shadow-xs lg:shadow-none relative group hover:border-secondary-brand transition-all"
                >
                  {/* Step Number Badge & Icon */}
                  <div className="relative mb-5 flex items-center gap-3 lg:block">
                    <div className="size-16 rounded-2xl bg-surface border-2 border-primary group-hover:border-accent text-primary flex items-center justify-center transition-all shadow-xs group-hover:scale-105">
                      <IconComponent className="size-7 stroke-[1.75]" />
                    </div>
                    <span className="lg:absolute lg:-bottom-2 lg:right-0 px-2 py-0.5 rounded-md bg-secondary-light text-primary text-[10px] font-bold tracking-wider font-mono border border-secondary-brand/30">
                      STEP {item.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <Badge variant="outline" className="mt-2 text-[10px] font-mono text-secondary-brand border-border">
                    {item.keyMetric}
                  </Badge>

                  <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>

                  {/* Mobile index connector indicator */}
                  {index < PRODUCTION_PROCESS.length - 1 && (
                    <div className="lg:hidden mt-4 w-full flex justify-center">
                      <div className="w-0.5 h-4 bg-border" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Workflow note */}
        <p className="mt-12 text-center text-xs text-text-secondary">
          *Tahapan di atas mencerminkan alur standar operasional manufaktur kaus kaki industri dan dapat disesuaikan dengan permintaan kustomisasi spesifik klien.
        </p>
      </Container>
    </section>
  );
}
