"use client";

import React, { useState } from "react";
import { MapPin, ExternalLink, CalendarClock, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";

export function LocationCard() {
  const { language, t } = useLanguage();
  const isEn = language === "en";

  const [activeFacilityId, setActiveFacilityId] = useState<"ciamis" | "bandung-barat">("ciamis");

  const activeFacility =
    COMPANY_INFO.facilities.find((f) => f.id === activeFacilityId) ||
    COMPANY_INFO.facilities[0];

  const isMain = activeFacility.id === "ciamis";
  const facilityLabel = isMain
    ? t.contact.directCard.addressLabel
    : t.contact.directCard.otherAddressLabel;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    activeFacility.googleMapsQuery
  )}`;

  // Clean Google Maps embed URL
  const embedMapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    activeFacility.embedQuery
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="space-y-3">
      {/* Facility Switcher Tabs */}
      <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl gap-1 border border-slate-200/80">
        <button
          type="button"
          onClick={() => setActiveFacilityId("ciamis")}
          className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center ${
            activeFacilityId === "ciamis"
              ? "bg-white text-primary shadow-xs border border-slate-200/70"
              : "text-slate-600 hover:text-slate-900"
          }`}
          aria-label={t.contact.directCard.tabMainLocation}
        >
          <Building2 className="size-3.5 shrink-0" />
          <span className="truncate">{t.contact.directCard.tabMainLocation}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveFacilityId("bandung-barat")}
          className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center ${
            activeFacilityId === "bandung-barat"
              ? "bg-white text-primary shadow-xs border border-slate-200/70"
              : "text-slate-600 hover:text-slate-900"
          }`}
          aria-label={t.contact.directCard.tabOtherLocation}
        >
          <MapPin className="size-3.5 shrink-0" />
          <span className="truncate">{t.contact.directCard.tabOtherLocation}</span>
        </button>
      </div>

      {/* Selected Location Address Details */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5 sm:gap-3">
          <div className="size-8 sm:size-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
            <MapPin className="size-4 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                {facilityLabel}
              </span>
              <span className="px-1.5 py-0.2 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">
                {isMain ? (isEn ? "Main Plant" : "Pabrik Utama") : (isEn ? "Other Location" : "Lokasi Lainnya")}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug mt-0.5">
              {activeFacility.address}
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Map Preview */}
      <div className="relative w-full h-28 sm:h-32 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner group">
        <iframe
          key={activeFacility.id}
          title={`SCM ${activeFacility.name} Map`}
          src={embedMapsUrl}
          className="w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={`Google Maps ${activeFacility.name}`}
        />
        {/* Click-through overlay to open Google Maps */}
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
