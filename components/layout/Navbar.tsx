"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { t } = useLanguage();

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const sectionIds = [
      "about",
      "markets",
      "products",
      "capabilities",
      "process",
      "quality",
      "gallery",
      "faq",
      "contact",
    ];

    const handleScroll = () => {
      if (window.scrollY < 180) {
        setActiveSection("");
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when section top is at or above navbar threshold and bottom is still visible
          if (rect.top <= 150 && rect.bottom > 80) {
            setActiveSection(`#${id}`);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.markets, href: "#markets" },
    { label: t.nav.products, href: "#products" },
    { label: t.nav.capabilities, href: "#capabilities" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.quality, href: "#quality" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/95 backdrop-blur-md border-b border-border shadow-xs transition-colors">
      <Container size="default">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-4">
          {/* Logo - Razor-Sharp Monogram + Vector Typography */}
          <Link
            href="/"
            className="flex flex-col items-center justify-center shrink-0 rounded-lg py-1 px-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary transition-opacity hover:opacity-90"
            aria-label={`${COMPANY_INFO.name} Homepage`}
          >
            <Image
              src="/images/scm-mark.webp"
              alt={COMPANY_INFO.name}
              width={1962}
              height={670}
              priority
              unoptimized
              className="h-8 sm:h-9.5 w-auto object-contain"
            />
            <span className="text-[7.5px] sm:text-[8.5px] font-extrabold tracking-[0.22em] text-text-primary uppercase whitespace-nowrap leading-none mt-1">
              PT. SINLIE CAHAYA MATAHARI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-4.5 2xl:gap-6 shrink-0" aria-label="Main Navigation">
            {navItems.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs xl:text-sm font-semibold transition-colors py-2 whitespace-nowrap relative group",
                    isActive ? "text-primary" : "text-text-primary hover:text-primary"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions: Refined Language Toggle & Contact CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <LanguageToggle />
            <Button
              href="#contact"
              variant="primary"
              size="default"
              className="group gap-2 cursor-pointer shadow-xs whitespace-nowrap text-xs xl:text-sm px-3.5 xl:px-4.5 h-8.5 xl:h-9.5"
            >
              <span>{t.nav.quote}</span>
              <ArrowRight className="size-3.5 xl:size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile Actions: Language Toggle & Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <LanguageToggle size="sm" />
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="text-xs px-2.5 py-1.5 cursor-pointer whitespace-nowrap"
            >
              Quote
            </Button>
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-md text-text-primary hover:text-primary hover:bg-surface-muted transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-surface px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-border">
            <span className="text-xs font-mono text-text-secondary font-bold uppercase">
              Pilih Bahasa / Language
            </span>
            <LanguageToggle size="sm" />
          </div>

          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navItems.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    "px-3 py-2 text-base rounded-md transition-colors whitespace-nowrap flex items-center justify-between",
                    isActive
                      ? "bg-secondary-light/70 text-primary font-semibold"
                      : "font-medium text-text-primary hover:bg-surface-muted hover:text-primary"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="size-1.5 rounded-full bg-primary" />}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-border flex flex-col gap-2.5 mt-2">
              <Button
                href="#contact"
                variant="primary"
                size="default"
                className="w-full justify-center"
                onClick={closeMenu}
              >
                <span>{t.nav.quote}</span>
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
