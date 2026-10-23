"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  Copy,
  Check,
  CheckCircle2,
  Sparkles,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";
import { BusinessHours } from "./BusinessHours";
import { LocationCard } from "./LocationCard";

export function DirectContactCard() {
  const { language, t } = useLanguage();
  const isEn = language === "en";

  const [copiedField, setCopiedField] = useState<"phone" | "email" | null>(null);
  const [mobileTab, setMobileTab] = useState<"contact" | "location">("contact");

  const handleCopy = (text: string, field: "phone" | "email") => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2500);
    }
  };

  const whatsappMessage = encodeURIComponent(
    isEn
      ? "Hello Mr. Fakhrudin (Mr. Aming), I would like to inquire about sock manufacturing at PT. Sinlie Cahaya Matahari."
      : "Halo Pak Fakhrudin (Pak Aming), saya ingin berkonsultasi mengenai pemesanan manufaktur kaos kaki di PT. Sinlie Cahaya Matahari."
  );

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp.raw}?text=${whatsappMessage}`;
  const phoneCallUrl = `tel:+${COMPANY_INFO.contact.phone.raw}`;
  const emailMailtoUrl = `mailto:${COMPANY_INFO.contact.email}`;

  return (
    <div className="w-full">
      {/* Toast Notification for Screen Readers and Visual Confirmation */}
      <div
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 pointer-events-none ${
          copiedField
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-2 scale-95"
        }`}
      >
        <div className="bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold border border-slate-700">
          <Check className="size-4 text-accent" />
          <span>
            {copiedField === "phone"
              ? t.contact.directCard.copiedPhone
              : t.contact.directCard.copiedEmail}
          </span>
        </div>
      </div>

      {/* Unified Single Contact Card */}
      <div className="max-w-4xl mx-auto rounded-[20px] bg-white border border-slate-200/90 shadow-xl overflow-hidden transition-shadow hover:shadow-2xl">
        {/* Mobile-Only Segmented Tab Control (Hidden on Desktop) */}
        <div className="md:hidden p-2 bg-slate-100/90 border-b border-slate-200">
          <div className="grid grid-cols-2 p-1 bg-slate-200/70 rounded-xl gap-1">
            <button
              type="button"
              onClick={() => setMobileTab("contact")}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                mobileTab === "contact"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <MessageCircle className="size-3.5" />
              <span>{t.contact.directCard.tabContact}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileTab("location")}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                mobileTab === "location"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <MapPin className="size-3.5" />
              <span>{t.contact.directCard.tabLocation}</span>
            </button>
          </div>
        </div>

        {/* Card Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {/* Column 1: Direct Communication Desk (Always visible on desktop; visible when mobileTab === 'contact' on mobile) */}
          <div
            className={`p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6 flex-col justify-between ${
              mobileTab === "contact" ? "flex" : "hidden md:flex"
            }`}
          >
            {/* 1. Contact Person & Role */}
            <div>
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Avatar Circle with Initials and Active Indicator */}
                <div className="relative shrink-0">
                  <div className="size-12 sm:size-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white font-bold text-base sm:text-lg flex items-center justify-center shadow-md">
                    FA
                  </div>
                  <span
                    className="absolute -bottom-1 -right-1 size-3.5 sm:size-4 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-300"
                    title="Active Desk"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-primary block">
                    {t.contact.directCard.cardTitle}
                  </span>
                  <h2 className="text-base sm:text-xl font-bold text-slate-900 truncate">
                    {COMPANY_INFO.contact.person}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                    {t.contact.directCard.contactRole}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Big Primary WhatsApp Button + Secondary Call Button + Tap-to-Copy Phone */}
            <div className="space-y-2.5 sm:space-y-3">
              {/* Big Primary WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 sm:gap-2.5 shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[44px] sm:min-h-[48px]"
              >
                <MessageCircle className="size-4 sm:size-5 shrink-0" />
                <span>{t.contact.directCard.whatsappBtn}</span>
              </a>

              {/* Secondary Call Button & Phone Display */}
              <div className="flex items-center gap-2">
                <a
                  href={phoneCallUrl}
                  className="flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all hover:border-slate-300 min-h-[40px] sm:min-h-[44px]"
                >
                  <Phone className="size-3.5 sm:size-4 text-primary shrink-0" />
                  <span>{t.contact.directCard.callBtn}</span>
                </a>

                {/* Tap to copy phone number */}
                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_INFO.contact.phone.display, "phone")}
                  className="py-2 sm:py-2.5 px-3 sm:px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium flex items-center gap-1.5 transition-all hover:border-slate-300 min-h-[40px] sm:min-h-[44px] cursor-pointer"
                  title={t.contact.directCard.copyPhone}
                  aria-label={t.contact.directCard.copyPhone}
                >
                  {copiedField === "phone" ? (
                    <>
                      <Check className="size-3.5 sm:size-4 text-emerald-600 shrink-0" />
                      <span className="font-bold text-emerald-700 text-xs">
                        {t.contact.directCard.copiedPhone}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3 sm:size-3.5 text-slate-500 shrink-0" />
                      <span className="font-sans font-medium text-slate-800 text-xs sm:text-sm">
                        {COMPANY_INFO.contact.phone.display}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 3. Official Business Email */}
            <div className="p-3 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <div className="flex items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="size-8 sm:size-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0">
                    <Mail className="size-3.5 sm:size-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      {t.contact.directCard.officialEmailLabel}
                    </span>
                    <a
                      href={emailMailtoUrl}
                      className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-primary transition-colors block truncate"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_INFO.contact.email, "email")}
                  className="p-2 sm:p-2.5 rounded-xl hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all shrink-0 min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center cursor-pointer"
                  title={t.contact.directCard.copyEmail}
                  aria-label={t.contact.directCard.copyEmail}
                >
                  {copiedField === "email" ? (
                    <Check className="size-3.5 sm:size-4 text-emerald-600" />
                  ) : (
                    <Copy className="size-3.5 sm:size-4" />
                  )}
                </button>
              </div>
            </div>

            {/* 4. Business Hours Row with Live Open/Closed Status */}
            <div className="pt-2 border-t border-slate-100">
              <BusinessHours />
            </div>

            {/* Mobile Teaser to switch to location tab (Hidden on desktop) */}
            <div className="md:hidden pt-1">
              <button
                type="button"
                onClick={() => setMobileTab("location")}
                className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-semibold flex items-center justify-between border border-slate-200/70 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-1.5 truncate">
                  <MapPin className="size-3.5 text-primary shrink-0" />
                  <span className="truncate">Ciamis & Bandung Barat, Jawa Barat</span>
                </span>
                <span className="text-primary font-bold inline-flex items-center gap-1 shrink-0">
                  <span>{t.contact.directCard.tabLocation}</span>
                  <ArrowRight className="size-3" />
                </span>
              </button>
            </div>
          </div>

          {/* Column 2: Physical Facility Location & Preparation Tips (Always visible on desktop; visible when mobileTab === 'location' on mobile) */}
          <div
            className={`p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6 flex-col justify-between bg-slate-50/40 ${
              mobileTab === "location" ? "flex" : "hidden md:flex"
            }`}
          >
            {/* 5. Factory Address with Google Maps Preview */}
            <LocationCard />

            {/* 6. What to include when contacting us */}
            <div className="pt-3 sm:pt-4 border-t border-slate-200/80 space-y-2 sm:space-y-2.5">
              <div className="flex items-center gap-1.5 text-slate-700">
                <Sparkles className="size-3.5 text-primary shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {t.contact.checklistTitle}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {t.contact.checklistItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-1.5 p-2 rounded-lg bg-white border border-slate-200/80 text-slate-600 shadow-2xs"
                  >
                    <CheckCircle2 className="size-3 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 text-[11px] truncate">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-slate-500 truncate">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Back to Contact button (Hidden on desktop) */}
            <div className="md:hidden pt-1">
              <button
                type="button"
                onClick={() => setMobileTab("contact")}
                className="w-full py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary/15 text-primary text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <MessageCircle className="size-3.5" />
                <span>{t.contact.directCard.tabContact}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
