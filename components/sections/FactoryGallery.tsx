"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Factory,
  Cpu,
  Layers,
  ShieldCheck,
  Package,
  Truck,
  Maximize2,
  Info,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageLightbox, LightboxImage } from "@/components/ui/ImageLightbox";
import { GALLERY_ITEMS } from "@/data/companyData";
import { useLanguage } from "@/context/LanguageContext";

const GALLERY_ICONS: Record<string, typeof Factory> = {
  "gal-1": Factory,
  "gal-2": Layers,
  "gal-3": Cpu,
  "gal-4": ShieldCheck,
  "gal-5": Package,
  "gal-6": Layers,
  "gal-7": Package,
  "gal-8": Truck,
};

export function FactoryGallery() {
  const { t, language } = useLanguage();
  const isEn = language === "en";
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenLightbox = (item: (typeof GALLERY_ITEMS)[number]) => {
    const title = isEn ? item.titleEn : item.title;
    const category = isEn ? item.categoryEn : item.category;
    const caption = isEn ? item.captionEn : item.caption;

    setSelectedImage({
      src: item.image,
      title,
      category,
      dimensions: item.dimensions,
      alt: `${title} - ${caption}`,
    });
    setIsLightboxOpen(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-surface-muted/30 border-b border-border">
      <Container size="default">
        <ScrollReveal duration={600} direction="up">
          <SectionHeading
            eyebrow={t.gallery.eyebrow}
            title={t.gallery.title}
            description={t.gallery.description}
            align="center"
          />
        </ScrollReveal>

        {/* Dynamic Visual Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {GALLERY_ITEMS.map((item, idx) => {
            const Icon = GALLERY_ICONS[item.id] || Factory;
            const title = isEn ? item.titleEn : item.title;
            const category = isEn ? item.categoryEn : item.category;
            const caption = isEn ? item.captionEn : item.caption;

            return (
              <ScrollReveal
                key={item.id}
                duration={600}
                delay={idx * 60}
                variant="blur-in"
                className="h-full"
              >
                <div
                  onClick={() => handleOpenLightbox(item)}
                  className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-surface hover:border-secondary-brand hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Photo Canvas */}
                  <div className="relative h-56 sm:h-64 w-full bg-surface-muted overflow-hidden">
                    <Image
                      src={item.image}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                    {/* Top Status Badges */}
                    <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="text-[10px] font-mono px-2 py-0.5 bg-black/60 backdrop-blur-md text-white border border-white/20"
                      >
                        {category}
                      </Badge>
                      <div className="size-7 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="size-3.5" />
                      </div>
                    </div>

                    {/* Bottom Floating Metadata inside Photo */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 space-y-1">
                      <div className="flex items-center gap-1.5 text-accent text-[11px] font-mono font-bold">
                        <Icon className="size-3.5" />
                        <span className="uppercase tracking-wider">SCM Process</span>
                      </div>
                      <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 drop-shadow-xs">
                        {title}
                      </h3>
                    </div>
                  </div>

                  {/* Caption Strip */}
                  <div className="p-4 bg-surface flex-1 flex flex-col justify-between border-t border-border/80">
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                      {caption}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-border flex items-center justify-between text-[10px] font-mono text-text-secondary">
                      <span>{category}</span>
                      <span className="text-primary font-bold">{t.gallery.previewBadge}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Industrial Transparency Note */}
        <ScrollReveal duration={600} direction="up" className="mt-10">
          <div className="p-5 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary shadow-2xs">
            <div className="flex items-center gap-2.5">
              <Info className="size-4 text-primary shrink-0" />
              <span>{t.gallery.visitNotice}</span>
            </div>
            <span className="font-mono text-primary text-[11px] font-bold shrink-0">
              PT. Sinlie Cahaya Matahari
            </span>
          </div>
        </ScrollReveal>
      </Container>

      {/* Accessible Lightbox Modal */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        image={selectedImage}
      />
    </section>
  );
}
