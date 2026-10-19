"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Clock, ArrowUpRight, Phone, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO, PRODUCT_CATEGORIES } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t, language } = useLanguage();
  const isEn = language === "en";
  const currentYear = "2026";

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.markets, href: "#markets" },
    { label: t.nav.products, href: "#products" },
    { label: t.nav.capabilities, href: "#capabilities" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.quality, href: "#quality" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-primary-dark text-text-inverse border-t border-secondary-brand/20 relative overflow-hidden">
      {/* Subtle background wave texture */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-luminosity pointer-events-none">
        <Image
          src="/images/dummy/26_background_wave.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="py-16 sm:py-20 relative z-10">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Col 1: Brand & Bio */}
            <div className="lg:col-span-4 space-y-5">
              <div className="bg-surface px-4 py-3 rounded-xl inline-flex flex-col items-center shadow-sm border border-border/40">
                <Image
                  src="/images/scm-mark.webp"
                  alt={COMPANY_INFO.name}
                  width={1962}
                  height={670}
                  unoptimized
                  className="h-10 sm:h-11 w-auto object-contain"
                />
                <span className="text-[8px] sm:text-[9px] font-extrabold tracking-[0.22em] text-text-primary uppercase whitespace-nowrap leading-none mt-1.5">
                  PT. SINLIE CAHAYA MATAHARI
                </span>
              </div>
              <p className="text-secondary-light/90 text-sm leading-relaxed max-w-sm">
                {t.footer.bio}
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs text-accent font-medium tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  {t.footer.subBio}
                </span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-accent">
                {t.footer.navTitle}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {navItems.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-secondary-light/80 hover:text-text-inverse hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Product Categories */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-accent">
                {t.footer.catTitle}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {PRODUCT_CATEGORIES.map((cat) => {
                  const title = isEn ? cat.titleEn : cat.title;
                  return (
                    <li key={cat.id}>
                      <Link
                        href="#products"
                        className="text-secondary-light/80 hover:text-text-inverse transition-colors flex items-center gap-1 group"
                      >
                        <span>{title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Col 4: Contact & Factory Info */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-accent">
                {t.footer.contactTitle}
              </h3>
              <ul className="space-y-3 text-sm text-secondary-light/90">
                <li className="flex items-start gap-3">
                  <User className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-medium text-text-inverse block">
                      Contact Person
                    </span>
                    <span className="text-secondary-light/80">
                      {COMPANY_INFO.contact.person}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div className="text-xs space-y-0.5">
                    <span className="font-medium text-text-inverse block">
                      Phone / WhatsApp
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:+${COMPANY_INFO.contact.phone.raw}`}
                        className="font-medium hover:underline text-text-inverse"
                      >
                        {COMPANY_INFO.contact.phone.display}
                      </a>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.contact.whatsapp.raw}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-accent hover:underline"
                      >
                        (WhatsApp)
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <span className="font-medium text-text-inverse block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="font-medium hover:underline block text-text-inverse break-all"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-text-inverse">
                      {t.footer.locationLabel}
                    </span>
                    <p className="text-xs text-secondary-light/70 mt-0.5 leading-relaxed">
                      {COMPANY_INFO.contact.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs">
                    {isEn ? COMPANY_INFO.contact.operatingHoursEn : COMPANY_INFO.contact.operatingHours}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-secondary/20 py-6 bg-primary-dark/80">
        <Container size="default">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-light/75">
            <p>
              &copy; {currentYear} {t.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              <span className="text-secondary-light/60">
                {t.footer.partnerTag}
              </span>
              <a
                href="#top"
                className="hover:text-accent transition-colors underline cursor-pointer"
              >
                {t.footer.backToTop}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
