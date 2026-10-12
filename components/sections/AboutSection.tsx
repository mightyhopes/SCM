import React from "react";
import { Target, Compass, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { COMPANY_INFO } from "@/data/companyData";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-surface-muted/40 border-b border-border">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual / Factory Media */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="bg-surface p-4 rounded-xl border border-border shadow-xs">
                <ImagePlaceholder
                  label="Area Produksi & Mesin Perajutan SCM"
                  category="Fasilitas Pabrik"
                  dimensions="900 x 1100 px"
                  assetPathHint="/public/images/about-factory.jpg"
                  aspectRatioClass="aspect-4/5"
                />

                <div className="mt-4 p-4 rounded-lg bg-surface-muted border border-border">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Integritas Manufaktur Terpercaya
                  </p>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    Setiap proses produksi didukung mesin rajut otomatis dan pemantauan berkala untuk memenuhi standar pesanan B2B.
                  </p>
                </div>
              </div>

              {/* Decorative side accent badge */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 bg-primary text-text-inverse p-4 rounded-lg shadow-md max-w-xs border border-secondary">
                <p className="text-xs font-semibold tracking-wider text-accent uppercase">
                  Komitmen Mutu
                </p>
                <p className="text-xs text-secondary-light mt-1">
                  Konsistensi ukuran, elastisitas kenyamanan, dan kerapian jahitan toe-linking.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Information */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              eyebrow="TENTANG KAMI"
              title="Dedikasi pada Presisi Rajut dan Kemitraan Jangka Panjang"
              description="PT. Sinlie Cahaya Matahari adalah produsen manufaktur kaus kaki yang berfokus melayani kebutuhan industri busana, retailer, dan korporat di Indonesia."
            />

            <div className="space-y-4 text-base text-text-secondary leading-relaxed">
              <p>
                Berawal dari pemahaman mendalam atas kebutuhan pasar kaus kaki yang
                mengutamakan kenyamanan harian dan daya tahan material,{" "}
                <strong className="text-text-primary">{COMPANY_INFO.name}</strong>{" "}
                tumbuh menjadi sentra manufaktur yang memadukan teknologi mesin modern
                dengan ketelitian teknis perajutan.
              </p>
              <p>
                Fokus bisnis kami berpusat pada penyediaan layanan manufaktur B2B
                yang adaptif—mulai dari produksi kaus kaki bayi dengan sentuhan ekstra
                lembut, hingga kaus kaki olahraga dan formal pria yang membutuhkan
                konstruksi benang padat dan elastisitas stabil.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-lg bg-surface border border-border">
                <div className="w-8 h-8 rounded-md bg-secondary-light flex items-center justify-center text-primary mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-text-primary">
                  Visi Perusahaan
                </h3>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                  Menjadi mitra manufaktur kaus kaki terdepan dan terpercaya di Indonesia melalui inovasi rajut, kualitas konsisten, dan keandalan suplai.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-surface border border-border">
                <div className="w-8 h-8 rounded-md bg-secondary-light flex items-center justify-center text-primary mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-text-primary">
                  Misi Perusahaan
                </h3>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                  Menghadirkan produk kaus kaki berdaya tahan tinggi, menjaga ketepatan waktu pengiriman, serta membangun hubungan bisnis B2B yang transparan dan profesional.
                </p>
              </div>
            </div>

            {/* Operational Standards checklist */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-2.5">
                Nilai Operasional Utama:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Kerahasiaan desain dan hak cipta merek mitra</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Kapasitas produksi fleksibel untuk pesanan masal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Standar QC berlapis sebelum pengiriman</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Pilihan bahan benang berkualitas teruji</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
