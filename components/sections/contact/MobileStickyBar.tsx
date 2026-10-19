"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";

export function MobileStickyBar() {
  const { language, t } = useLanguage();
  const isEn = language === "en";

  const whatsappMessage = encodeURIComponent(
    isEn
      ? "Hello Mr. Fakhrudin (Mr. Aming), I would like to inquire about sock manufacturing at PT. Sinlie Cahaya Matahari."
      : "Halo Pak Fakhrudin (Pak Aming), saya ingin berkonsultasi mengenai pemesanan manufaktur kaos kaki di PT. Sinlie Cahaya Matahari."
  );

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp.raw}?text=${whatsappMessage}`;
  const phoneCallUrl = `tel:+${COMPANY_INFO.contact.phone.raw}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-2.5 px-4 shadow-[0_-8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      {/* 1. Primary WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform min-h-[44px]"
        aria-label={t.contact.directCard.whatsappBtn}
      >
        <MessageCircle className="size-4 shrink-0" />
        <span>{t.contact.directCard.whatsappBtn}</span>
      </a>

      {/* 2. Direct Call Desk Button */}
      <a
        href={phoneCallUrl}
        className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform min-h-[44px]"
        aria-label={t.contact.directCard.callBtn}
      >
        <Phone className="size-4 shrink-0 text-accent" />
        <span>{t.contact.directCard.callBtn}</span>
      </a>
    </div>
  );
}
