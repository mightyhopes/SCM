import React from "react";
import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY_STATS } from "@/data/companyData";

export function CompanyStats() {
  return (
    <section className="py-12 sm:py-16 bg-surface border-b border-border">
      <Container size="default">
        {/* Section Intro Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-border gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Sekilas Perusahaan
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
              Kapabilitas & Skala Operasional Manufaktur
            </h2>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-muted border border-border text-xs text-text-secondary">
            <Info className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span>Angka bertanda * merupakan estimasi data operasional (dapat disesuaikan)</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_STATS.map((stat) => (
            <div
              key={stat.id}
              className="relative p-6 rounded-lg bg-surface border border-border hover:border-secondary transition-all shadow-2xs hover:shadow-xs group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-border group-hover:bg-accent transition-colors rounded-t-lg" />

              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                    {stat.value}
                  </span>
                  {!stat.isVerified && (
                    <span
                      title="Data menunggu konfirmasi final manajemen"
                      className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-xs bg-amber-50 text-amber-700 border border-amber-200"
                    >
                      Konfirmasi
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-text-primary tracking-wide">
                  {stat.label}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed pt-1">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
