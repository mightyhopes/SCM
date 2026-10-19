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
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";
import { BusinessHours } from "./BusinessHours";
import { LocationCard } from "./LocationCard";

export function DirectContactCard() {
  const { language, t } = useLanguage();
  const isEn = language === "en";

  const [copiedField, setCopiedField] = useState<"phone" | "email" | null>(null);

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
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {/* Left Column: Direct Communication Desk */}
          <div className="p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            {/* 1. Contact Person & Role */}
            <div>
              <div className="flex items-center gap-4">
                {/* Avatar Circle with Initials and Active Indicator */}
                <div className="relative shrink-0">
                  <div className="size-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white font-bold text-lg flex items-center justify-center shadow-md">
                    FA
                  </div>
                  <span
                    className="absolute -bottom-1 -right-1 size-4 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-300"
                    title="Active Desk"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-primary block">
                    {t.contact.directCard.cardTitle}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 truncate">
                    {COMPANY_INFO.contact.person}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                    {t.contact.directCard.contactRole}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Big Primary WhatsApp Button + Secondary Call Button + Tap-to-Copy Phone */}
            <div className="space-y-3">
              {/* Big Primary WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[48px]"
              >
                <MessageCircle className="size-5 shrink-0" />
                <span>{t.contact.directCard.whatsappBtn}</span>
              </a>

              {/* Secondary Call Button & Phone Display */}
              <div className="flex items-center gap-2">
                <a
                  href={phoneCallUrl}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:border-slate-300 min-h-[44px]"
                >
                  <Phone className="size-4 text-primary shrink-0" />
                  <span>{t.contact.directCard.callBtn}</span>
                </a>

                {/* Tap to copy phone number */}
                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_INFO.contact.phone.display, "phone")}
                  className="py-2.5 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium flex items-center gap-1.5 transition-all hover:border-slate-300 min-h-[44px]"
                  title={t.contact.directCard.copyPhone}
                  aria-label={t.contact.directCard.copyPhone}
                >
                  {copiedField === "phone" ? (
                    <>
                      <Check className="size-4 text-emerald-600 shrink-0" />
                      <span className="font-bold text-emerald-700">
                        {t.contact.directCard.copiedPhone}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5 text-slate-500 shrink-0" />
                      <span className="font-sans font-medium text-slate-800">
                        {COMPANY_INFO.contact.phone.display}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 3. Official Business Email */}
            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="size-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0">
                    <Mail className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
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
                  className="p-2.5 rounded-xl hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all shrink-0 min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
                  title={t.contact.directCard.copyEmail}
                  aria-label={t.contact.directCard.copyEmail}
                >
                  {copiedField === "email" ? (
                    <Check className="size-4 text-emerald-600" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>
            </div>

            {/* 4. Business Hours Row with Live Open/Closed Status */}
            <div className="pt-2 border-t border-slate-100">
              <BusinessHours />
            </div>
          </div>

          {/* Right Column: Physical Facility Location & Preparation Tips */}
          <div className="p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-slate-50/40">
            {/* 5. Factory Address with Google Maps Preview */}
            <LocationCard />

            {/* 6. What to include when contacting us */}
            <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
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
                    className="flex items-start gap-1.5 p-2 rounded-lg bg-white border border-slate-200/80 text-slate-600"
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
          </div>
        </div>
      </div>
    </div>
  );
}
