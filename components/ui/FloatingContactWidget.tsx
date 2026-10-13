"use client";

import React, { useState, useEffect } from "react";
import { FileText, Phone } from "lucide-react";
import { RfqModal } from "@/components/ui/RfqModal";
import { useLanguage } from "@/context/LanguageContext";

export function FloatingContactWidget() {
  const { t, language } = useLanguage();
  const isEn = language === "en";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!scrolled) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* RFQ Modal Trigger Button */}
      <RfqModal>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-text-inverse font-bold text-xs sm:text-sm shadow-xl hover:bg-primary-hover border border-secondary-brand/40 transition-all hover:scale-105 cursor-pointer"
        >
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-accent" />
          </span>
          <FileText className="size-4 text-accent" />
          <span className="hidden sm:inline">{t.widget.rfqBtn}</span>
          <span className="sm:hidden">RFQ</span>
        </button>
      </RfqModal>

      {/* WhatsApp Quick Direct Button */}
      <a
        href={`https://wa.me/6281200000000?text=${encodeURIComponent(
          isEn
            ? "Hello PT. Sinlie Cahaya Matahari, I would like to consult on custom sock manufacturing."
            : "Halo PT. Sinlie Cahaya Matahari, saya ingin berkonsultasi mengenai pemesanan manufaktur kaus kaki."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.widget.callNow}
        className="size-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
      >
        <Phone className="size-5 fill-white stroke-none" />
      </a>
    </div>
  );
}
