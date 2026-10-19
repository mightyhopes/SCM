"use client";

import React from "react";
import { Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function BusinessHours() {
  const { language, t } = useLanguage();
  const isEn = language === "en";

  return (
    <div className="py-2.5 sm:py-3 flex items-center gap-3">
      <div className="size-8 sm:size-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
        <Clock className="size-4 text-primary" />
      </div>
      <div className="min-w-0">
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
          {t.contact.directCard.hoursLabel}
        </span>
        <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
          {t.contact.directCard.hoursSchedule}
        </p>
        <p className="text-[11px] text-slate-400 mt-0.5">
          {isEn ? "Western Indonesia Time (UTC+7)" : "Waktu Indonesia Barat (WIB)"}
        </p>
      </div>
    </div>
  );
}
