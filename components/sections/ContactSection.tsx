"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY_INFO, PRODUCT_CATEGORIES } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

export function ContactSection() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    estimatedVolume: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary-dark text-text-inverse relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-brand/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle decorative background pattern texture */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-luminosity pointer-events-none">
        <Image
          src="/images/dummy/25_background_pattern.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Direct Inquiries Info */}
          <ScrollReveal duration={600} direction="up" className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary border border-secondary/40 text-accent text-xs font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{t.contact.tag}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-inverse leading-tight">
                {t.contact.title}
              </h2>
              <p className="text-sm sm:text-base text-secondary-light/90 leading-relaxed">
                {t.contact.description}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-lg bg-primary/60 border border-secondary/30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-accent text-primary-dark flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="text-sm font-bold text-text-inverse mt-0.5">
                    {COMPANY_INFO.contact.phone}
                  </p>
                  <p className="text-xs text-secondary-light/70 mt-0.5">
                    {t.contact.phoneHours}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary/60 border border-secondary/30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-accent text-primary-dark flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {t.contact.emailLabel}
                  </p>
                  <p className="text-sm font-bold text-text-inverse mt-0.5">
                    {COMPANY_INFO.contact.email}
                  </p>
                  <p className="text-xs text-secondary-light/70 mt-0.5">
                    {t.contact.emailDesc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary/60 border border-secondary/30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-accent text-primary-dark flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {t.contact.visitLabel}
                  </p>
                  <p className="text-sm font-bold text-text-inverse mt-0.5">
                    {COMPANY_INFO.contact.address}
                  </p>
                  <p className="text-xs text-secondary-light/70 mt-0.5">
                    {t.contact.visitDesc}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Inquiry Form */}
          <ScrollReveal duration={600} delay={150} direction="up" className="lg:col-span-7">
            <div className="bg-surface text-text-primary p-6 sm:p-8 rounded-2xl shadow-xl border border-border">
              <div className="mb-6 pb-4 border-b border-border">
                <h3 className="text-xl font-bold text-text-primary">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs text-text-secondary mt-1">
                  {t.contact.formDesc}
                </p>
              </div>

              {status === "success" ? (
                <div className="p-6 rounded-xl bg-secondary-light/30 border border-primary/20 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary text-text-inverse mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">
                      {t.contact.successTitle}
                    </h4>
                    <p className="text-xs text-text-secondary mt-1.5 max-w-md mx-auto leading-relaxed">
                      {t.contact.successDesc}
                    </p>
                  </div>
                  <div className="p-3 bg-surface rounded-md border border-border text-xs text-left max-w-sm mx-auto font-mono text-text-secondary">
                    <p><strong>Pengirim / Name:</strong> {formData.name || "-"}</p>
                    <p><strong>Perusahaan / Company:</strong> {formData.company || "-"}</p>
                    <p><strong>Kategori / Category:</strong> {formData.category || "-"}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-xs font-semibold text-primary underline cursor-pointer"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-1.5">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-md border border-border bg-background text-text-primary text-sm focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-1.5">
                        {t.contact.companyLabel}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t.contact.companyPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-md border border-border bg-background text-text-primary text-sm focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-1.5">
                        {t.contact.emailInputLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.emailInputPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-md border border-border bg-background text-text-primary text-sm focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-1.5">
                        {t.contact.phoneInputLabel}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.phoneInputPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-md border border-border bg-background text-text-primary text-sm focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-1.5">
                        {t.contact.categoryLabel}
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-md border border-border bg-background text-text-primary text-sm focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      >
                        <option value="">{t.contact.categoryDefault}</option>
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={isEn ? cat.titleEn : cat.title}>
                            {isEn ? cat.titleEn : `${cat.title} (${cat.titleEn})`}
                          </option>
                        ))}
                        <option value="Custom OEM">{t.contact.categoryCustom}</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="estimatedVolume" className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-1.5">
                        {t.contact.volumeLabel}
                      </label>
                      <input
                        type="text"
                        id="estimatedVolume"
                        name="estimatedVolume"
                        value={formData.estimatedVolume}
                        onChange={handleChange}
                        placeholder={t.contact.volumePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-md border border-border bg-background text-text-primary text-sm focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-1.5">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-md border border-border bg-background text-text-primary text-sm focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-y"
                    />
                  </div>

                  {/* Backend transparency disclaimer */}
                  <div className="flex items-start gap-2 p-2.5 rounded-md bg-surface-muted text-[11px] text-text-secondary border border-border">
                    <AlertCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{t.contact.privacyNotice}</span>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center group cursor-pointer"
                  >
                    <span>{t.contact.submitBtn}</span>
                    <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
