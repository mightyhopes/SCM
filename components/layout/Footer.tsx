import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO, NAV_LINKS, PRODUCT_CATEGORIES } from "@/data/companyData";

export function Footer() {
  const currentYear = "2026";

  return (
    <footer className="bg-primary-dark text-text-inverse border-t border-secondary/20">
      <div className="py-16 sm:py-20">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Col 1: Brand & Bio */}
            <div className="lg:col-span-4 space-y-5">
              <div className="bg-surface p-3 rounded-lg inline-block shadow-sm">
                <div className="relative h-12 w-40">
                  <Image
                    src="/images/logo.png"
                    alt={COMPANY_INFO.name}
                    fill
                    className="object-contain object-left"
                    sizes="160px"
                  />
                </div>
              </div>
              <p className="text-secondary-light/90 text-sm leading-relaxed max-w-sm">
                Manufaktur kaus kaki spesialis B2B di Indonesia. Menghadirkan
                standar kerapatan rajutan presisi, durabilitas benang, dan
                kapasitas produksi terpercaya untuk mitra bisnis lokal maupun
                nasional.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs text-accent font-medium tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Modern Industrial Sock Manufacturing
                </span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-accent">
                Navigasi
              </h3>
              <ul className="space-y-2.5 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
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
                Kategori Produk
              </h3>
              <ul className="space-y-2.5 text-sm">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href="#products"
                      className="text-secondary-light/80 hover:text-text-inverse transition-colors flex items-center gap-1 group"
                    >
                      <span>{cat.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="#capabilities"
                    className="text-secondary-light/80 hover:text-text-inverse transition-colors flex items-center gap-1 group"
                  >
                    <span>Custom OEM / Private Label</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Factory Info */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-accent">
                Kontak & Pabrik
              </h3>
              <ul className="space-y-3 text-sm text-secondary-light/90">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-text-inverse">Lokasi Pabrik:</span>
                    <p className="text-xs text-secondary-light/70 mt-0.5">
                      {COMPANY_INFO.contact.address} (Tersedia untuk kunjungan bisnis B2B via reservasi)
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm font-mono">{COMPANY_INFO.contact.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm font-mono">{COMPANY_INFO.contact.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs">{COMPANY_INFO.contact.operatingHours}</span>
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
              &copy; {currentYear} {COMPANY_INFO.name}. Seluruh Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-secondary-light/60">
                Precision Sock Manufacturing Partner
              </span>
              <a
                href="#top"
                className="hover:text-accent transition-colors underline"
              >
                Kembali ke Atas ↑
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
