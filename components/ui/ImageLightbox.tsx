"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  title: string;
  category?: string;
  dimensions?: string;
  alt?: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: LightboxImage | null;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalImages?: number;
}

export function ImageLightbox({
  isOpen,
  onClose,
  image,
  onNext,
  onPrev,
  currentIndex,
  totalImages,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && onNext) {
        onNext();
      } else if (e.key === "ArrowLeft" && onPrev) {
        onPrev();
      }
    };

    // Lock background scroll
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Pratinjau gambar: ${image.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-surface-muted/95 border border-border/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-surface border-b border-border">
          <div className="flex items-center gap-3">
            {totalImages && currentIndex !== undefined ? (
              <span className="text-[11px] font-mono font-bold tracking-wider text-primary bg-secondary-light px-2.5 py-0.5 rounded-full">
                {currentIndex + 1} / {totalImages}
              </span>
            ) : image.category ? (
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary bg-secondary-light px-2.5 py-0.5 rounded-full">
                {image.category}
              </span>
            ) : null}
            <h3 className="text-sm font-bold text-text-primary truncate max-w-md">
              {image.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors cursor-pointer"
            aria-label="Tutup pratinjau gambar"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Image Preview Container with Next/Prev Chevrons */}
        <div className="relative w-full h-[60vh] sm:h-[72vh] bg-black/60 flex items-center justify-center p-2 group/nav">
          <Image
            src={image.src}
            alt={image.alt || image.title}
            fill
            className="object-contain p-2 sm:p-4 select-none"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />

          {/* Left Navigation Chevron */}
          {onPrev && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 size-10 sm:size-12 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="size-6" />
            </button>
          )}

          {/* Right Navigation Chevron */}
          {onNext && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 size-10 sm:size-12 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105"
              aria-label="Foto selanjutnya"
            >
              <ChevronRight className="size-6" />
            </button>
          )}
        </div>

        {/* Bottom Details Bar */}
        <div className="px-5 py-3 bg-surface border-t border-border flex items-center justify-between text-xs text-text-secondary">
          <span className="font-mono text-[11px] sm:text-xs">
            {image.dimensions ? `Dimensi: ${image.dimensions}` : "Portofolio Sampel Manufaktur SCM"}
          </span>
          <span className="text-[11px] text-text-secondary/80 hidden sm:inline">
            Gunakan tombol panah <kbd className="px-1.5 py-0.5 rounded bg-surface-muted border border-border font-mono text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-surface-muted border border-border font-mono text-[10px]">→</kbd> atau <kbd className="px-1.5 py-0.5 rounded bg-surface-muted border border-border font-mono text-[10px]">Esc</kbd>
          </span>
        </div>
      </div>
    </div>
  );
}
