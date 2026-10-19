"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";
import { DirectContactCard } from "./contact/DirectContactCard";
import { MobileStickyBar } from "./contact/MobileStickyBar";

export function ContactSection() {
  const { language, t } = useLanguage();
  const isEn = language === "en";

  const whatsappMessage = encodeURIComponent(
    isEn
      ? "Hello Mr. Fakhrudin (Mr. Aming), I would like to inquire about sock manufacturing at PT. Sinlie Cahaya Matahari."
      : "Halo Pak Fakhrudin (Pak Aming), saya ingin berkonsultasi mengenai pemesanan manufaktur kaos kaki di PT. Sinlie Cahaya Matahari."
  );
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp.raw}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-primary-dark text-white relative overflow-hidden selection:bg-accent selection:text-primary-dark"
    >
      {/* Subtle brand ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle decorative background pattern texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-luminosity pointer-events-none">
        <Image
          src="/images/dummy/25_background_pattern.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Strip: Centered, small eyebrow, H1, one-line subtext */}
        <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-accent text-xs font-bold tracking-wider uppercase mb-3">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            <span>{t.contact.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.contact.heroTitle}
          </h1>

          <p className="mt-2.5 text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal">
            {t.contact.heroSubtext}
          </p>

          {/* Quick Direct WhatsApp Tap on Mobile */}
          <div className="lg:hidden mt-4 pt-1 flex items-center justify-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-sm active:scale-95 transition-transform"
            >
              <MessageCircle className="size-3.5 shrink-0" />
              <span>{t.contact.directCard.whatsappBtn}</span>
            </a>
            <a
              href={`tel:+${COMPANY_INFO.contact.phone.raw}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/20 transition-colors"
            >
              <Phone className="size-3.5" />
              <span>{t.contact.directCard.callBtn}</span>
            </a>
          </div>
        </div>

        {/* Single Unified Contact Card (centered) */}
        <div className="w-full">
          <DirectContactCard />
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar (WhatsApp + Call) */}
      <MobileStickyBar />
    </section>
  );
}
