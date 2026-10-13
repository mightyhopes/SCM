"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

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
}

export function ImageLightbox({ isOpen, onClose, image }: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Lock background scroll
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Pratinjau gambar: ${image.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-surface-muted/95 border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-surface border-b border-border">
          <div className="flex items-center gap-3">
            {image.category && (
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary bg-secondary-light px-2.5 py-0.5 rounded-full">
                {image.category}
              </span>
            )}
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

        {/* Image Preview Container */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black/40 flex items-center justify-center p-2">
          <Image
            src={image.src}
            alt={image.alt || image.title}
            fill
            className="object-contain p-2"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Bottom Details Bar */}
        <div className="px-5 py-3 bg-surface border-t border-border flex items-center justify-between text-xs text-text-secondary">
          <span className="font-mono">
            {image.dimensions ? `Dimensi Rekomendasi: ${image.dimensions}` : "Aset Pratinjau Manufaktur SCM"}
          </span>
          <span className="text-[11px] text-text-secondary/80">
            Tekan <kbd className="px-1.5 py-0.5 rounded bg-surface-muted border border-border font-mono text-[10px]">Esc</kbd> atau klik luar untuk menutup
          </span>
        </div>
      </div>
    </div>
  );
}
