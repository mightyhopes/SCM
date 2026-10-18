"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <section id="about" className="py-20 lg:py-28 bg-surface-muted/30 border-b border-border">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Left Column: Large Authentic Manufacturing Floor Photography        */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 order-2 lg:order-1">
            <ScrollReveal duration={600} variant="slide-right">
              <div className="flex flex-col gap-3">
                {/* Editorial Photo Frame */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-surface shadow-sm group">
                  <Image
                    src="/images/symmetric_knitting_machine_hall.png"
                    alt={
                      isEn
                        ? "Line 4 sock knitting machine hall at PT Sinlie Cahaya Matahari"
                        : "Lantai produksi perajutan kaos kaki Line 4 di PT Sinlie Cahaya Matahari"
                    }
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    priority={false}
                  />

                  {/* Subtle photographic corner metadata pill */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-sm">
                    <span className="text-[11px] font-mono tracking-wide uppercase font-semibold">
                      {isEn ? "Knitting Machine Hall • Line 4" : "Bagian Mesin Knitting • Line 4"}
                    </span>
                  </div>
                </div>

                {/* Subtle Editorial Photo Caption */}
                <p className="text-xs text-text-secondary/80 font-normal px-1 leading-relaxed">
                  {isEn
                    ? "PT. Sinlie Cahaya Matahari knitting hall featuring computerized sock knitting lines and integrated yarn systems."
                    : "Fasilitas lantai produksi perajutan PT. Sinlie Cahaya Matahari dengan jajaran mesin rajut kaos kaki terkomputerisasi."}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Right Column: Clean Editorial Company Profile & Milestone Timeline */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <ScrollReveal duration={600} delay={100} variant="slide-left">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit mb-4">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                  {isEn ? "About the Company" : "Tentang Perusahaan"}
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight leading-[1.2] mb-5">
                PT. Sinlie Cahaya Matahari
              </h2>

              {/* Editorial Lead Paragraph */}
              <p className="text-base sm:text-lg font-medium text-text-primary/90 leading-relaxed mb-4">
                {isEn
                  ? "With experience in the sock industry since 2018, PT. Sinlie Cahaya Matahari provides sock manufacturing solutions tailored to different customer product requirements."
                  : "Dengan pengalaman di industri kaos kaki sejak 2018, PT. Sinlie Cahaya Matahari menyediakan solusi manufaktur kaos kaki yang dapat disesuaikan dengan kebutuhan produk pelanggan."}
              </p>

              {/* Supporting Editorial Paragraph */}
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
                {isEn
                  ? "Our operations focus on reliable manufacturing, dimensional consistency, and flexible production. We accommodate diverse sock categories—from daily essentials to customized designs—with material and packaging specifications discussed openly to meet agreed customer standards."
                  : "Operasional kami berfokus pada kualitas rajutan, konsistensi ukuran, dan keandalan pemenuhan pesanan. Kami melayani beragam kategori kaos kaki—mulai dari kebutuhan harian hingga pesanan khusus—dengan spesifikasi bahan dan pengemasan yang didiskusikan secara terbuka sesuai kebutuhan mitra."}
              </p>

              {/* ──────────────────────────────────────────────────────────── */}
              {/* Restrained Milestones Timeline (2018 & 2023)                 */}
              {/* ──────────────────────────────────────────────────────────── */}
              <div className="border-t border-border pt-6 mt-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary mb-5">
                  {isEn ? "Company Milestones" : "Tonggak Perjalanan Perusahaan"}
                </h3>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-border">
                  {/* Milestone 1: 2018 */}
                  <div className="relative group">
                    {/* Timeline Node */}
                    <span className="absolute -left-6 top-1 size-4 rounded-full bg-surface border-2 border-primary flex items-center justify-center transition-colors group-hover:border-accent">
                      <span className="size-1.5 rounded-full bg-primary group-hover:bg-accent transition-colors" />
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm font-mono font-bold text-primary">
                          2018
                        </span>
                        <span className="text-xs font-semibold text-text-primary">
                          {isEn
                            ? "Sock Industry Experience Inception"
                            : "Awal Pengalaman Industri Kaos Kaki"}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {isEn
                          ? "Commenced manufacturing operations and technical expertise in the sock production industry."
                          : "Memulai operasional dan membangun keahlian teknis dalam bidang manufaktur kaos kaki."}
                      </p>
                    </div>
                  </div>

                  {/* Milestone 2: 2023 */}
                  <div className="relative group">
                    {/* Timeline Node */}
                    <span className="absolute -left-6 top-1 size-4 rounded-full bg-surface border-2 border-primary flex items-center justify-center transition-colors group-hover:border-accent">
                      <span className="size-1.5 rounded-full bg-primary group-hover:bg-accent transition-colors" />
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm font-mono font-bold text-primary">
                          2023
                        </span>
                        <span className="text-xs font-semibold text-text-primary">
                          {isEn
                            ? "Formal Incorporation of PT Entity"
                            : "Pendirian Resmi Badan Hukum PT"}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {isEn
                          ? "Official legal establishment of PT. Sinlie Cahaya Matahari to support structured B2B partnerships."
                          : "Pendirian resmi badan hukum PT. Sinlie Cahaya Matahari untuk mendukung kemitraan B2B yang berkesinambungan."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
