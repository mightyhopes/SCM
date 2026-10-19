"use client";

import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function InquiryChecklist() {
  const { t } = useLanguage();

  return (
    <div className="mt-10 pt-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <Sparkles className="size-4 text-accent" />
          <span className="text-xs sm:text-sm font-bold text-slate-200">
            {t.contact.checklistTitle}
          </span>
        </div>

        {/* 4 Slim Inline Chips */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 flex-1 max-w-4xl">
          {t.contact.checklistItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs hover:bg-white/10 transition-colors"
            >
              <CheckCircle2 className="size-3.5 text-accent shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="font-bold text-white truncate">{item.title}</p>
                <p className="text-[11px] text-slate-300 truncate">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
