"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { COMPANY_INFO } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export function ContactSection() {
  const { t, language } = useLanguage();
  const isEn = language === "en";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoSubject = encodeURIComponent(t.contact.quoteEmailSubject);
  const mailtoBody = encodeURIComponent(
    isEn
      ? `Dear PT. Sinlie Cahaya Matahari Team,\n\nI would like to inquire about sock manufacturing quotation with the following project details:\n\n- Company / Brand Name: \n- Target Sock Category (Baby / Kids / Ladies / Men's / Athletic / Custom): \n- Estimated Order Volume (Dozens): \n- Preferred Yarn Material (Cotton / Spandex / Elastic): \n- Target Delivery Timeline: \n- Packaging / Design Requirements: \n\nPlease provide quotation and technical consultation.\n\nBest regards,\n[Your Name]\n[Your Contact Info]`
      : `Kepada Tim PT. Sinlie Cahaya Matahari,\n\nSaya ingin berkonsultasi mengenai penawaran manufaktur kaos kaki dengan rincian berikut:\n\n- Nama Perusahaan / Brand: \n- Kategori Kaos Kaki (Bayi / Anak / Wanita / Pria / Olahraga / Kustom): \n- Estimasi Volume Pesanan (Lusin): \n- Preferensi Bahan Benang (Katun / Spandex / Elastik): \n- Target Jadwal Pengiriman: \n- Kebutuhan Desain / Kemasan: \n\nMohon informasi penawaran dan jadwal konsultasi lebih lanjut.\n\nSalam,\n[Nama Anda]\n[Kontak Anda]`
  );
  const directMailtoUrl = `mailto:${COMPANY_INFO.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const isPhoneVerified = COMPANY_INFO.contact.phone.isVerified && Boolean(COMPANY_INFO.contact.phone.number);
  const isWhatsappVerified = COMPANY_INFO.contact.whatsapp.isVerified && Boolean(COMPANY_INFO.contact.whatsapp.number);

  return (
    <section className="py-20 lg:py-28 bg-primary-dark text-text-inverse relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-brand/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle decorative background pattern texture */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-luminosity pointer-events-none">
        <Image
          src="/images/dummy/25_background_pattern.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Inquiries Info & Request a Quote Guidance Box */}
          <ScrollReveal duration={600} variant="slide-right" className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary border border-secondary/40 text-accent text-xs font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{t.contact.tag}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-inverse leading-tight">
                {t.contact.title}
              </h2>
              <p className="text-sm sm:text-base text-secondary-light/90 leading-relaxed">
                {t.contact.description}
              </p>
            </div>

            {/* Request a Quote Guidance Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-white/15">
                <div className="flex items-center gap-2 text-accent">
                  <Send className="size-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    {t.contact.quoteGuideTag}
                  </span>
                </div>
                <Badge variant="secondary" className="text-[10px] font-mono bg-accent text-primary-dark font-bold">
                  B2B Direct Channel
                </Badge>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {t.contact.quoteGuideTitle}
                </h3>
                <p className="text-xs text-secondary-light/80 mt-1.5 leading-relaxed">
                  {t.contact.quoteGuideDesc}
                </p>
              </div>

              {/* Helpful items checklist */}
              <div className="space-y-2.5 pt-1">
                {t.contact.quoteGuideItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-secondary-light">
                    <CheckCircle2 className="size-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Mailto Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={directMailtoUrl}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent text-primary-dark font-bold text-xs sm:text-sm hover:bg-accent-hover transition-colors shadow-md group cursor-pointer"
                >
                  <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                  <span>{t.contact.quoteCtaBtn}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm border border-white/20 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="size-4 text-accent" />
                      <span className="text-accent font-bold">{t.contact.copiedText}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-4 text-secondary-light" />
                      <span>{t.contact.copyEmailBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Direct Contact Channel Cards */}
          <ScrollReveal duration={600} delay={150} variant="elevate-glow" className="lg:col-span-6 space-y-4">
            {/* Channel 1: Official Business Email */}
            <div className="p-6 rounded-2xl bg-surface text-text-primary border border-border shadow-md hover:border-secondary-brand transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="size-11 rounded-xl bg-secondary-light flex items-center justify-center text-primary shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <Badge variant="secondary" className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                    Verified Channel
                  </Badge>
                </div>

                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide">
                  {t.contact.emailTitle}
                </h3>
                <p className="text-base sm:text-lg font-mono font-bold text-primary mt-1 select-all">
                  {COMPANY_INFO.contact.email}
                </p>
                <p className="text-xs text-text-secondary mt-2 leading-relaxed">
                  {t.contact.emailDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover group/link"
                >
                  <span>{t.contact.emailCta}</span>
                  <ExternalLink className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </a>
                <span className="text-[11px] font-mono text-text-secondary">Official B2B Inbox</span>
              </div>
            </div>

            {/* Channel 2: Telephone / WhatsApp Desk */}
            <div className="p-6 rounded-2xl bg-surface text-text-primary border border-border shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="size-11 rounded-xl bg-surface-muted flex items-center justify-center text-primary shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <Badge variant="outline" className="text-[10px] font-mono border-border text-text-secondary">
                    {isPhoneVerified || isWhatsappVerified ? "Active Desk" : "Official Verification"}
                  </Badge>
                </div>

                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide">
                  {t.contact.phoneTitle}
                </h3>

                {isPhoneVerified ? (
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone.number}`}
                    className="text-base font-mono font-bold text-primary mt-1 hover:underline block"
                  >
                    {COMPANY_INFO.contact.phone.number}
                  </a>
                ) : (
                  <p className="text-xs text-text-secondary mt-2 leading-relaxed">
                    {t.contact.phonePending}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-text-secondary">
                <span>{COMPANY_INFO.name}</span>
                <span className="font-mono text-[11px]">B2B Communication</span>
              </div>
            </div>

            {/* Channel 3: Operating Hours */}
            <div className="p-6 rounded-2xl bg-surface text-text-primary border border-border shadow-md flex items-start gap-4">
              <div className="size-11 rounded-xl bg-surface-muted flex items-center justify-center text-primary shrink-0 mt-0.5">
                <Clock className="size-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide">
                  {t.contact.hoursTitle}
                </h3>
                <p className="text-sm font-bold text-text-primary mt-0.5">
                  {isEn ? COMPANY_INFO.contact.operatingHoursEn : COMPANY_INFO.contact.operatingHours}
                </p>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  {t.contact.hoursDesc}
                </p>
              </div>
            </div>

            {/* Channel 4: Manufacturing Facility Location */}
            <div className="p-6 rounded-2xl bg-surface text-text-primary border border-border shadow-md flex items-start gap-4">
              <div className="size-11 rounded-xl bg-surface-muted flex items-center justify-center text-primary shrink-0 mt-0.5">
                <MapPin className="size-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide">
                  {t.contact.locationTitle}
                </h3>
                <p className="text-sm font-bold text-text-primary mt-0.5 flex items-center gap-1.5">
                  <Building2 className="size-3.5 text-secondary-brand shrink-0" />
                  <span>{COMPANY_INFO.contact.address}</span>
                </p>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  {t.contact.locationDesc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
