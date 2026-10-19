"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BusinessStatus {
  isOpen: boolean;
  statusText: string;
  subtext: string;
}

export function BusinessHours() {
  const { language, t } = useLanguage();
  const isEn = language === "en";

  const [status, setStatus] = useState<BusinessStatus>(() => {
    // Initial safe defaults (matching SSR)
    return {
      isOpen: false,
      statusText: isEn ? "Mon–Fri · 08:00–17:00 WIB" : "Senin–Jumat · 08:00–17:00 WIB",
      subtext: isEn ? "Western Indonesia Time (UTC+7)" : "Waktu Indonesia Barat (UTC+7)",
    };
  });

  useEffect(() => {
    const calculateStatus = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Jakarta",
          weekday: "short",
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        });

        const parts = formatter.formatToParts(now);
        let weekday = "";
        let hour = 0;
        let minute = 0;

        for (const part of parts) {
          if (part.type === "weekday") weekday = part.value; // "Mon", "Tue", etc.
          if (part.type === "hour") hour = parseInt(part.value, 10);
          if (part.type === "minute") minute = parseInt(part.value, 10);
        }

        const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday);
        const timeInMinutes = hour * 60 + minute;
        const openTime = 8 * 60; // 08:00 WIB
        const closeTime = 17 * 60; // 17:00 WIB

        const isOpen = isWeekday && timeInMinutes >= openTime && timeInMinutes < closeTime;

        if (isOpen) {
          setStatus({
            isOpen: true,
            statusText: t.contact.directCard.openNow,
            subtext: isEn ? "Desk active until 17:00 WIB" : "Desk aktif hingga 17:00 WIB",
          });
          return;
        }

        let nextNotice = t.contact.directCard.reopensTomorrow;
        if (weekday === "Fri" && timeInMinutes >= closeTime) {
          nextNotice = t.contact.directCard.reopensMonday;
        } else if (weekday === "Sat" || weekday === "Sun") {
          nextNotice = t.contact.directCard.reopensMonday;
        } else if (isWeekday && timeInMinutes < openTime) {
          nextNotice = isEn ? "Opens today at 08:00 WIB" : "Buka hari ini pkl 08:00 WIB";
        }

        setStatus({
          isOpen: false,
          statusText: t.contact.directCard.closedNow,
          subtext: nextNotice,
        });
      } catch {
        // Fallback
        setStatus({
          isOpen: false,
          statusText: isEn ? "Mon–Fri · 08:00–17:00 WIB" : "Senin–Jumat · 08:00–17:00 WIB",
          subtext: isEn ? "Western Indonesia Time (UTC+7)" : "Waktu Indonesia Barat (UTC+7)",
        });
      }
    };

    calculateStatus();
    // Update every minute
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, [isEn, t]);

  return (
    <div className="py-4 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
          <Clock className="size-4 text-primary" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {t.contact.directCard.hoursLabel}
            </span>
            <span className="text-xs font-medium text-slate-400">·</span>
            <span className="text-xs font-semibold text-slate-700">
              {t.contact.directCard.hoursSchedule}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">{status.subtext}</p>
        </div>
      </div>

      {/* Live Badge */}
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 ${
          status.isOpen
            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
            : "bg-slate-100 text-slate-600 border border-slate-200"
        }`}
      >
        <span className="relative flex size-2">
          {status.isOpen && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex rounded-full size-2 ${
              status.isOpen ? "bg-emerald-500" : "bg-slate-400"
            }`}
          />
        </span>
        <span>{status.statusText}</span>
      </div>
    </div>
  );
}
