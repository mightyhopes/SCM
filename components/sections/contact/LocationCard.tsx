"use client";

import React from "react";
import { MapPin, ExternalLink, CalendarClock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";

export function LocationCard() {
  const { t } = useLanguage();

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    COMPANY_INFO.contact.address
  )}`;

  // Clean Google Maps embed URL
  const embedMapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    COMPANY_INFO.contact.address
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5 sm:gap-3">
          <div className="size-8 sm:size-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
            <MapPin className="size-4 text-primary" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              {t.contact.directCard.addressLabel}
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug mt-0.5">
              {COMPANY_INFO.contact.address}
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Map Preview */}
      <div className="relative w-full h-28 sm:h-32 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner group">
        <iframe
          title="SCM Factory Location Map"
          src={embedMapsUrl}
          className="w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Maps Factory Location"
        />
        {/* Subtle click-through overlay to open Google Maps */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-transparent"
          aria-label={t.contact.directCard.getDirections}
        />
      </div>

      {/* Action Row & Appointment Note */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-0.5 text-xs">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover group cursor-pointer transition-colors"
        >
          <span>{t.contact.directCard.getDirections}</span>
          <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="inline-flex items-center gap-1.5 text-slate-500">
          <CalendarClock className="size-3.5 text-slate-400 shrink-0" />
          <span>{t.contact.directCard.appointmentNotice}</span>
        </div>
      </div>
    </div>
  );
}
