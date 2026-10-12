"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, COMPANY_INFO } from "@/data/companyData";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/95 backdrop-blur-md border-b border-border shadow-xs transition-colors">
      <Container size="default">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-hidden focus:ring-2 focus:ring-primary rounded-md p-1"
            aria-label={`${COMPANY_INFO.name} Homepage`}
          >
            <div className="relative h-12 w-36 sm:h-14 sm:w-44">
              <Image
                src="/images/logo.png"
                alt={COMPANY_INFO.name}
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 144px, 176px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-primary hover:text-primary transition-colors py-2 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="group gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5"
            >
              Quote
            </Button>
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2.5 rounded-md text-text-primary hover:text-primary hover:bg-surface-muted transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-surface px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-2 text-base font-medium text-text-primary hover:bg-surface-muted hover:text-primary rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border flex flex-col gap-2.5">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={closeMenu}
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 py-2 text-sm text-text-secondary hover:text-primary transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-secondary" />
                <span>Konsultasi Cepat B2B</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
