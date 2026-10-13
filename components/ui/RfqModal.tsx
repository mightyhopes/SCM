"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Phone, FileText } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, PRODUCT_CATEGORIES } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

interface RfqModalProps {
  children?: React.ReactElement;
  defaultCategory?: string;
  triggerClassName?: string;
}

export function RfqModal({
  children,
  defaultCategory = "",
  triggerClassName = "",
}: RfqModalProps) {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    category: defaultCategory,
    volume: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setOpen(false);
    setForm({
      name: "",
      company: "",
      phone: "",
      category: defaultCategory,
      volume: "",
      message: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          children ? (
            children
          ) : (
            <Button variant="accent" size="default" className={triggerClassName}>
              <span>{t.nav.quote}</span>
            </Button>
          )
        }
      />
      <DialogContent className="max-w-lg p-6 sm:p-8 bg-surface border border-border shadow-2xl rounded-2xl">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-surface-muted border border-border text-[11px] font-bold text-primary tracking-wider uppercase mb-1">
            <FileText className="size-3 text-secondary-brand" />
            <span>{isEn ? "Official B2B RFQ Form" : "Formulir RFQ Resmi B2B"}</span>
          </div>
          <DialogTitle className="text-xl font-bold text-text-primary">
            {t.rfqModal.title}
          </DialogTitle>
          <DialogDescription className="text-xs text-text-secondary">
            {t.rfqModal.description}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center flex flex-col items-center gap-4">
            <div className="size-12 rounded-full bg-primary text-text-inverse flex items-center justify-center">
              <CheckCircle2 className="size-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-primary">
                {t.rfqModal.successTitle}
              </h4>
              <p className="text-xs text-text-secondary mt-1.5 max-w-sm leading-relaxed">
                {t.rfqModal.successDesc}
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Button variant="default" size="sm" onClick={handleReset} className="cursor-pointer">
                {t.rfqModal.closeBtn}
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-text-primary mb-1">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-3 py-2 text-xs rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-text-primary mb-1">
                  {t.contact.companyLabel}
                </label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  placeholder={t.contact.companyPlaceholder}
                  className="w-full px-3 py-2 text-xs rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-text-primary mb-1">
                  {t.contact.phoneInputLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder={t.contact.phoneInputPlaceholder}
                  className="w-full px-3 py-2 text-xs rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-text-primary mb-1">
                  {t.contact.categoryLabel}
                </label>
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                  className="w-full px-3 py-2 text-xs rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                >
                  <option value="">{t.contact.categoryDefault}</option>
                  {PRODUCT_CATEGORIES.map((c) => (
                    <option key={c.id} value={isEn ? c.titleEn : c.title}>
                      {isEn ? c.titleEn : c.title}
                    </option>
                  ))}
                  <option value="Custom OEM">{t.contact.categoryCustom}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-text-primary mb-1">
                {isEn ? "Estimated Quantity & Specifications" : "Estimasi Kuantitas & Catatan Tambahan"}
              </label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder={
                  isEn
                    ? "E.g., Estimated 100 dozen school socks, combed cotton, custom embroidered logo..."
                    : "Contoh: Estimasi 100 lusin kaus kaki sekolah, bahan katun combed..."
                }
                className="w-full px-3 py-2 text-xs rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-y"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <Button
                type="submit"
                variant="primary"
                size="default"
                className="w-full sm:flex-1 justify-center cursor-pointer"
              >
                <Send className="size-3.5 mr-1.5" />
                <span>{t.rfqModal.submitBtn}</span>
              </Button>
              <a
                href={`https://wa.me/6281200000000?text=${encodeURIComponent(
                  isEn
                    ? "Hello PT. Sinlie Cahaya Matahari, I would like to consult on custom sock manufacturing."
                    : "Halo PT. Sinlie Cahaya Matahari, saya ingin berkonsultasi mengenai pemesanan manufaktur kaus kaki."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto px-4 py-2.5 text-xs font-semibold rounded-lg bg-surface-muted border border-border text-primary hover:bg-secondary-light transition-colors cursor-pointer"
              >
                <Phone className="size-3.5 text-secondary-brand" />
                <span>{isEn ? "WhatsApp Chat" : "Chat WA"}</span>
              </a>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
