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
              <span>Request a Quote</span>
            </Button>
          )
        }
      />
      <DialogContent className="max-w-lg p-6 sm:p-8 bg-surface border border-border shadow-2xl rounded-2xl">
        <DialogHeader className="pb-4 border-b border-border">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-surface-muted border border-border text-[11px] font-bold text-primary tracking-wider uppercase mb-1">
            <FileText className="size-3 text-secondary-brand" />
            <span>Formulir RFQ Resmi B2B</span>
          </div>
          <DialogTitle className="text-xl font-bold text-text-primary">
            Permintaan Penawaran Manufaktur
          </DialogTitle>
          <DialogDescription className="text-xs text-text-secondary">
            Tim teknis SCM akan menghubungi Anda untuk estimasi harga, MOQ, dan jadwal sampling.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center flex flex-col items-center gap-4">
            <div className="size-12 rounded-full bg-primary text-text-inverse flex items-center justify-center">
              <CheckCircle2 className="size-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-primary">
                Permintaan RFQ Berhasil Dicatat!
              </h4>
              <p className="text-xs text-text-secondary mt-1.5 max-w-sm leading-relaxed">
                Terima kasih atas minat Anda bermitra dengan {COMPANY_INFO.name}. Kami akan segera merespons via nomor WhatsApp / Email yang Anda cantumkan.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Button variant="default" size="sm" onClick={handleReset}>
                Selesai
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-text-primary mb-1">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Budi Santoso"
                  className="w-full px-3 py-2 text-xs rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-text-primary mb-1">
                  Nama Perusahaan / Brand *
                </label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  placeholder="PT / Brand Fashion"
                  className="w-full px-3 py-2 text-xs rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-text-primary mb-1">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="0812-xxxx-xxxx"
                  className="w-full px-3 py-2 text-xs rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-text-primary mb-1">
                  Kategori Kaus Kaki
                </label>
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                  className="w-full px-3 py-2 text-xs rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                >
                  <option value="">Pilih Kategori</option>
                  {PRODUCT_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                  <option value="Custom OEM">Pesanan Kustom Khusus</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-text-primary mb-1">
                Estimasi Kuantitas & Catatan Tambahan
              </label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Contoh: Estimasi 100 lusin kaus kaki sekolah, bahan katun combed..."
                className="w-full px-3 py-2 text-xs rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-y"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <Button
                type="submit"
                variant="primary"
                size="default"
                className="w-full sm:flex-1 justify-center"
              >
                <Send className="size-3.5 mr-1.5" />
                <span>Kirim Permintaan</span>
              </Button>
              <a
                href={`https://wa.me/6281200000000?text=${encodeURIComponent(
                  "Halo PT. Sinlie Cahaya Matahari, saya ingin berkonsultasi mengenai pemesanan manufaktur kaus kaki."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto px-4 py-2.5 text-xs font-semibold rounded-lg bg-surface-muted border border-border text-primary hover:bg-secondary-light transition-colors"
              >
                <Phone className="size-3.5 text-secondary-brand" />
                <span>Chat WA</span>
              </a>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
