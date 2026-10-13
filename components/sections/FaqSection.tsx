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
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { B2B_FAQS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export function FaqSection() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className="py-20 lg:py-28 bg-surface border-b border-border">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Quick CTA */}
          <ScrollReveal duration={600} variant="slide-right" className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow={t.faq.eyebrow}
              title={t.faq.title}
              description={t.faq.description}
            />

            <div className="p-6 rounded-xl bg-surface-muted border border-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary text-text-inverse flex items-center justify-center shrink-0">
                  <HelpCircle className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">
                    {t.faq.boxTitle}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {t.faq.boxSubtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">
                {t.faq.boxDesc}
              </p>

              <div className="pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover group cursor-pointer"
                >
                  <span>{t.faq.boxBtn}</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Accordion */}
          <ScrollReveal duration={600} delay={150} variant="unfold-up" className="lg:col-span-7 bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-xs">
            <Accordion className="w-full">
              {B2B_FAQS.map((faq, idx) => {
                const tag = isEn ? faq.tagEn : faq.tag;
                const question = isEn ? faq.questionEn : faq.question;
                const answer = isEn ? faq.answerEn : faq.answer;

                return (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b border-border py-2 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left font-bold text-sm sm:text-base text-text-primary hover:no-underline hover:text-primary transition-colors py-3">
                      <div className="flex flex-col items-start gap-1 pr-4">
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 font-mono bg-secondary-light text-primary">
                          {tag}
                        </Badge>
                        <span className="mt-1">{question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-text-secondary leading-relaxed pt-1 pb-4">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
