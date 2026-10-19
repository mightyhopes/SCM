"use client";

import React, { useState, useRef } from "react";
import {
  Send,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  FileText,
  X,
  Loader2,
  Mail,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  volume: string;
  timeline: string;
  material: string;
  packaging: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  category?: string;
}

export function ContactForm() {
  const { language, t } = useLanguage();
  const isEn = language === "en";

  const [formData, setFormData] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    volume: "",
    timeline: "",
    material: "",
    packaging: "",
    message: "",
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.errors.name;
    }
    if (!formData.company.trim()) {
      newErrors.company = t.contact.form.errors.company;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.errors.email;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      newErrors.phone = t.contact.form.errors.phone;
    }
    if (!formData.category) {
      newErrors.category = t.contact.form.errors.category;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate real network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      category: "",
      volume: "",
      timeline: "",
      material: "",
      packaging: "",
      message: "",
    });
    setUploadedFile(null);
    setErrors({});
    setIsSubmitted(false);
  };

  // Generate dynamic mailto url with whatever fields user typed
  const dynamicMailtoSubject = encodeURIComponent(
    formData.category
      ? `B2B Sock Inquiry - ${formData.category} - ${formData.company || "Buyer"}`
      : t.contact.quoteEmailSubject
  );

  const dynamicMailtoBody = encodeURIComponent(
    isEn
      ? `Dear PT. Sinlie Cahaya Matahari Team,\n\nI would like to inquire about sock manufacturing quotation with the following project details:\n\n- Name: ${formData.name || "[Your Name]"}\n- Company / Brand: ${formData.company || "[Company Name]"}\n- Email: ${formData.email || "[Email]"}\n- Phone / WhatsApp: ${formData.phone || "[Phone]"}\n- Sock Category: ${formData.category || "[Selected Category]"}\n- Estimated Volume: ${formData.volume || "[Volume in Dozens]"}\n- Target Timeline: ${formData.timeline || "[Timeline]"}\n- Yarn / Material Notes: ${formData.material || "[Notes]"}\n- Packaging Preference: ${formData.packaging || "[Packaging]"}\n- Project Details: ${formData.message || "[Additional Details]"}\n\nPlease provide quotation and technical consultation.\n\nBest regards,\n${formData.name || "[Your Name]"}`
      : `Kepada Tim PT. Sinlie Cahaya Matahari,\n\nSaya ingin mengajukan permintaan penawaran manufaktur kaos kaki dengan rincian berikut:\n\n- Nama Lengkap: ${formData.name || "[Nama Anda]"}\n- Perusahaan / Brand: ${formData.company || "[Nama Perusahaan]"}\n- Email: ${formData.email || "[Email]"}\n- WhatsApp / Telepon: ${formData.phone || "[Nomor Telepon]"}\n- Kategori Kaos Kaki: ${formData.category || "[Kategori]"}\n- Estimasi Volume: ${formData.volume || "[Volume Lusin]"}\n- Target Waktu Kirim: ${formData.timeline || "[Jadwal]"}\n- Catatan Bahan / Benang: ${formData.material || "[Catatan Bahan]"}\n- Kemasan: ${formData.packaging || "[Kemasan]"}\n- Rincian Spesifikasi: ${formData.message || "[Rincian Pesanan]"}\n\nMohon informasi penawaran harga dan jadwal konsultasi lebih lanjut.\n\nSalam,\n${formData.name || "[Nama Anda]"}`
  );

  const dynamicMailtoUrl = `mailto:${COMPANY_INFO.contact.email}?subject=${dynamicMailtoSubject}&body=${dynamicMailtoBody}`;

  const whatsappFollowupUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp.raw}?text=${encodeURIComponent(
    isEn
      ? `Hello Mr. Fakhrudin, I have submitted a quotation inquiry from ${formData.company || "my company"} for ${formData.category || "sock manufacturing"} (${formData.volume || "bulk order"}). Looking forward to your response.`
      : `Halo Pak Fakhrudin, saya telah mengirimkan formulir permintaan penawaran dari ${formData.company || "perusahaan kami"} untuk ${formData.category || "manufaktur kaos kaki"} (${formData.volume || "pesanan volume"}). Mohon bantuan peninjauannya.`
  )}`;

  return (
    <div
      id="inquiry-form"
      className="rounded-[20px] bg-white border border-slate-200/90 shadow-xl p-6 sm:p-8 lg:p-10 transition-shadow hover:shadow-2xl"
    >
      {isSubmitted ? (
        /* Success State */
        <div className="py-8 sm:py-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-400">
          <div className="size-16 sm:size-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner border border-emerald-100">
            <CheckCircle2 className="size-9 sm:size-11" />
          </div>

          <div className="max-w-lg mx-auto space-y-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
              ⚡ {t.contact.form.success.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.contact.form.success.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.contact.form.success.subtitle}
            </p>
          </div>

          {/* Submission Recap Card */}
          <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
            <div className="flex justify-between border-b border-slate-200 pb-1.5 font-semibold text-slate-700">
              <span>{t.contact.form.companyLabel}:</span>
              <span className="text-slate-900 font-bold">{formData.company}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5 font-semibold text-slate-700">
              <span>{t.contact.form.categoryLabel}:</span>
              <span className="text-slate-900 font-bold">{formData.category}</span>
            </div>
            {formData.volume && (
              <div className="flex justify-between border-b border-slate-200 pb-1.5 font-semibold text-slate-700">
                <span>{t.contact.form.volumeLabel}:</span>
                <span className="text-slate-900 font-bold">{formData.volume}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold text-slate-700 pt-0.5">
              <span>Email:</span>
              <span className="text-primary font-bold">{formData.email}</span>
            </div>
          </div>

          {/* Next Steps Checklist */}
          <div className="max-w-md mx-auto text-left p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-slate-700 space-y-2">
            <span className="font-bold text-emerald-900 uppercase tracking-wide block">
              {t.contact.form.success.nextStepsTitle}
            </span>
            <ul className="space-y-1.5">
              {t.contact.form.success.nextSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="size-4 rounded-full bg-emerald-200 text-emerald-900 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappFollowupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer"
            >
              <MessageCircle className="size-4" />
              <span>{t.contact.form.success.whatsappFollowupBtn}</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
            >
              <span>{t.contact.form.success.submitAnotherBtn}</span>
            </button>
          </div>
        </div>
      ) : (
        /* Form Inputs */
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="border-b border-slate-100 pb-5">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {t.contact.form.cardTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t.contact.form.cardSubtitle}
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* 1. Name */}
            <div>
              <label
                htmlFor="inquiry-name"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                {t.contact.form.nameLabel} <span className="text-red-500">*</span>
              </label>
              <input
                id="inquiry-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.form.namePlaceholder}
                aria-invalid={Boolean(errors.name)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border transition-all text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.name ? "border-red-400 bg-red-50/30" : "border-slate-200"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="size-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* 2. Company */}
            <div>
              <label
                htmlFor="inquiry-company"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                {t.contact.form.companyLabel} <span className="text-red-500">*</span>
              </label>
              <input
                id="inquiry-company"
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder={t.contact.form.companyPlaceholder}
                aria-invalid={Boolean(errors.company)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border transition-all text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.company ? "border-red-400 bg-red-50/30" : "border-slate-200"
                }`}
              />
              {errors.company && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="size-3.5 shrink-0" />
                  <span>{errors.company}</span>
                </p>
              )}
            </div>

            {/* 3. Business Email */}
            <div>
              <label
                htmlFor="inquiry-email"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                {t.contact.form.emailLabel} <span className="text-red-500">*</span>
              </label>
              <input
                id="inquiry-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.form.emailPlaceholder}
                aria-invalid={Boolean(errors.email)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border transition-all text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.email ? "border-red-400 bg-red-50/30" : "border-slate-200"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="size-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* 4. WhatsApp / Phone */}
            <div>
              <label
                htmlFor="inquiry-phone"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                {t.contact.form.phoneLabel} <span className="text-red-500">*</span>
              </label>
              <input
                id="inquiry-phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.contact.form.phonePlaceholder}
                aria-invalid={Boolean(errors.phone)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border transition-all text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.phone ? "border-red-400 bg-red-50/30" : "border-slate-200"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="size-3.5 shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* 5. Sock Category */}
            <div>
              <label
                htmlFor="inquiry-category"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                {t.contact.form.categoryLabel} <span className="text-red-500">*</span>
              </label>
              <select
                id="inquiry-category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                aria-invalid={Boolean(errors.category)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border transition-all text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.category ? "border-red-400 bg-red-50/30" : "border-slate-200"
                }`}
              >
                <option value="">{t.contact.form.categoryPlaceholder}</option>
                <option value="Baby Socks">{t.contact.form.categories.baby}</option>
                <option value="Kids & School Socks">{t.contact.form.categories.kids}</option>
                <option value="Ladies Socks">{t.contact.form.categories.ladies}</option>
                <option value="Men's Formal Socks">{t.contact.form.categories.mens}</option>
                <option value="Athletic & Sport Socks">{t.contact.form.categories.athletic}</option>
                <option value="Custom Specification">{t.contact.form.categories.custom}</option>
              </select>
              {errors.category && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="size-3.5 shrink-0" />
                  <span>{errors.category}</span>
                </p>
              )}
            </div>

            {/* 6. Estimated Volume (Dozens) */}
            <div>
              <label
                htmlFor="inquiry-volume"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                {t.contact.form.volumeLabel}
              </label>
              <select
                id="inquiry-volume"
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 transition-all text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t.contact.form.volumePlaceholder}</option>
                {t.contact.form.volumeOptions.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* 7. Target Timeline */}
            <div>
              <label
                htmlFor="inquiry-timeline"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                {t.contact.form.timelineLabel}
              </label>
              <select
                id="inquiry-timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 transition-all text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t.contact.form.timelinePlaceholder}</option>
                {t.contact.form.timelineOptions.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* 8. Packaging Preference */}
            <div>
              <label
                htmlFor="inquiry-packaging"
                className="block text-xs font-bold text-slate-700 mb-1.5"
              >
                {t.contact.form.packagingLabel}
              </label>
              <select
                id="inquiry-packaging"
                name="packaging"
                value={formData.packaging}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 transition-all text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t.contact.form.packagingPlaceholder}</option>
                {t.contact.form.packagingOptions.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 9. Yarn & Material Notes */}
          <div>
            <label
              htmlFor="inquiry-material"
              className="block text-xs font-bold text-slate-700 mb-1.5"
            >
              {t.contact.form.materialLabel}
            </label>
            <input
              id="inquiry-material"
              type="text"
              name="material"
              value={formData.material}
              onChange={handleChange}
              placeholder={t.contact.form.materialPlaceholder}
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 transition-all text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* 10. Message */}
          <div>
            <label
              htmlFor="inquiry-message"
              className="block text-xs font-bold text-slate-700 mb-1.5"
            >
              {t.contact.form.messageLabel}
            </label>
            <textarea
              id="inquiry-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.form.messagePlaceholder}
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 transition-all text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
            />
          </div>

          {/* 11. Optional File Upload for Tech Pack */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-700">
                {t.contact.form.fileUploadLabel}
              </label>
              <span className="text-[11px] text-slate-400">
                {t.contact.form.fileUploadHint}
              </span>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.ai,.psd,.png,.jpg,.jpeg,.zip"
              onChange={handleFileChange}
              className="hidden"
              id="tech-pack-file"
            />

            {uploadedFile ? (
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FileText className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-800 truncate">
                      {uploadedFile.name}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                  aria-label="Remove uploaded file"
                >
                  <X className="size-4" />
                </button>
              </div>
            ) : (
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`p-4 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-1.5 ${
                  dragActive
                    ? "border-primary bg-primary/5"
                    : "border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50"
                }`}
              >
                <UploadCloud className="size-5 text-slate-400" />
                <p className="text-xs font-medium text-slate-600">
                  {t.contact.form.fileUploadDrag}
                </p>
              </div>
            )}
          </div>

          {/* Submit Button & Open Email Draft Link */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl bg-accent hover:bg-accent-hover text-primary-dark font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 disabled:pointer-events-none cursor-pointer min-h-[50px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  <span>{t.contact.form.submittingBtn}</span>
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  <span>{t.contact.form.submitBtn}</span>
                </>
              )}
            </button>

            {/* Small secondary link "or open email draft" */}
            <div className="text-center">
              <a
                href={dynamicMailtoUrl}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-primary transition-colors hover:underline cursor-pointer py-1"
              >
                <Mail className="size-3.5" />
                <span>{t.contact.form.openEmailDraft}</span>
                <ArrowRight className="size-3" />
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
