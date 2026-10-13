"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface LanguageToggleProps {
  className?: string;
  size?: "sm" | "default";
}

export function LanguageToggle({ className = "", size = "default" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  const isSmall = size === "sm";

  return (
    <div
      role="group"
      aria-label="Pilih bahasa / Select language"
      className={`inline-flex items-center rounded-full bg-surface-muted/60 hover:bg-surface-muted border border-border/80 p-0.5 transition-colors ${
        isSmall ? "h-6.5 text-[10px]" : "h-8 text-xs"
      } ${className}`}
    >
      <div className={`${isSmall ? "pl-1.5 pr-0.5" : "pl-2 pr-1"} text-text-secondary/70 flex items-center shrink-0`} aria-hidden="true">
        <Globe className={isSmall ? "size-3" : "size-3.5 text-secondary-brand"} />
      </div>

      <button
        type="button"
        onClick={() => setLanguage("id")}
        aria-pressed={language === "id"}
        className={`rounded-full transition-all cursor-pointer font-mono font-bold leading-none ${
          isSmall ? "px-1.5 py-0.5 text-[10px]" : "px-2 py-1 text-[11px]"
        } ${
          language === "id"
            ? "bg-primary text-white shadow-2xs"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        ID
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-full transition-all cursor-pointer font-mono font-bold leading-none ${
          isSmall ? "px-1.5 py-0.5 text-[10px]" : "px-2 py-1 text-[11px]"
        } ${
          language === "en"
            ? "bg-primary text-white shadow-2xs"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        EN
      </button>
    </div>
  );
}
