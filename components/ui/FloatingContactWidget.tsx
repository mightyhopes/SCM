"use client";

import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function FloatingContactWidget() {
  const { t } = useLanguage();
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
      <a
        href="#contact"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-text-inverse font-bold text-xs sm:text-sm shadow-xl hover:bg-primary-hover border border-secondary-brand/40 transition-all hover:scale-105 cursor-pointer"
        aria-label={t.widget.quoteBtn}
      >
        <span className="relative flex size-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full size-2 bg-accent" />
        </span>
        <Mail className="size-4 text-accent" />
        <span className="hidden sm:inline">{t.widget.quoteBtn}</span>
        <span className="sm:hidden">Kontak</span>
      </a>
    </div>
  );
}
