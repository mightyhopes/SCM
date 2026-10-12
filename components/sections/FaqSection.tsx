"use client";

import React from "react";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { B2B_FAQS } from "@/data/companyData";
import { RfqModal } from "@/components/ui/RfqModal";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface border-b border-border">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Quick CTA */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="PERTANYAAN UMUM B2B"
              title="Transparansi Pengadaan & Layanan Maklon"
              description="Jawaban atas pertanyaan umum seputar MOQ, jadwal sampling, alur kerja maklon, dan kerahasiaan desain produk Anda."
            />

            <div className="p-6 rounded-xl bg-surface-muted border border-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary text-text-inverse flex items-center justify-center shrink-0">
                  <HelpCircle className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">
                    Punya Spesifikasi Khusus?
                  </h4>
                  <p className="text-xs text-text-secondary">
                    Konsultasikan langsung dengan tim teknis pabrik kami.
                  </p>
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">
                Setiap brand memiliki keunikan karakter bahan dan standar fitting. Kami siap mendiskusikan toleransi ukuran, komposisi benang, dan kemasan kustom sesuai kebutuhan Anda.
              </p>

              <div className="pt-1">
                <RfqModal>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover group cursor-pointer"
                  >
                    <span>Ajukan Konsultasi Kustom</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </RfqModal>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-xs">
            <Accordion className="w-full">
              {B2B_FAQS.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-b border-border py-2 last:border-b-0"
                >
                  <AccordionTrigger className="text-left font-bold text-sm sm:text-base text-text-primary hover:no-underline hover:text-primary transition-colors py-3">
                    <div className="flex flex-col items-start gap-1 pr-4">
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 font-mono">
                        {faq.tag}
                      </Badge>
                      <span className="mt-1">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-text-secondary leading-relaxed pt-1 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
