"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { RfqModal } from "@/components/ui/RfqModal";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.products, href: "#products" },
    { label: t.nav.capabilities, href: "#capabilities" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/95 backdrop-blur-md border-b border-border shadow-xs transition-colors">
      <Container size="default">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-4">
          {/* Logo - Exact Intrinsic Ratio (1962:802), Tight Bounding Box */}
          <Link
            href="/"
            className="flex items-center shrink-0 rounded-lg p-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary transition-opacity hover:opacity-90"
            aria-label={`${COMPANY_INFO.name} Homepage`}
          >
            <Image
              src="/images/logo.png"
              alt={COMPANY_INFO.name}
              width={1962}
              height={802}
              priority
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Clean, Single-line, No Wrapping */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-7 shrink-0" aria-label="Main Navigation">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-text-primary hover:text-primary transition-colors py-2 whitespace-nowrap relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions: Refined Language Toggle & RFQ Button */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <LanguageToggle />
            <RfqModal>
              <Button
                variant="primary"
                size="default"
                className="group gap-2 cursor-pointer shadow-xs whitespace-nowrap text-xs xl:text-sm px-3.5 xl:px-4.5 h-8.5 xl:h-9.5"
              >
                <span>{t.nav.quote}</span>
                <ArrowRight className="size-3.5 xl:size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </RfqModal>
          </div>

          {/* Mobile Actions: Language Toggle & Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <LanguageToggle size="sm" />
            <RfqModal>
              <Button
                variant="primary"
                size="sm"
                className="text-xs px-2.5 py-1.5 cursor-pointer whitespace-nowrap"
              >
                Quote
              </Button>
            </RfqModal>
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
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-2 text-base font-medium text-text-primary hover:bg-surface-muted hover:text-primary rounded-md transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border flex flex-col gap-2.5 mt-2">
              <RfqModal>
                <Button
                  variant="primary"
                  size="default"
                  className="w-full justify-center"
                  onClick={closeMenu}
                >
                  <span>{t.nav.quote}</span>
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </RfqModal>
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 py-2 text-sm text-text-secondary hover:text-primary transition-colors"
              >
                <PhoneCall className="size-4 text-secondary-brand" />
                <span>{t.nav.quickConsult}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
