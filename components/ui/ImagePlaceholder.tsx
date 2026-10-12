import React from "react";
import { Camera, FileCode2 } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  category?: string;
  dimensions?: string;
  assetPathHint?: string;
  aspectRatioClass?: string;
  className?: string;
}

export function ImagePlaceholder({
  label,
  category,
  dimensions = "800 x 600 px",
  assetPathHint,
  aspectRatioClass = "aspect-4/3",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border-2 border-dashed border-border bg-surface-muted/60 flex flex-col items-center justify-center p-6 text-center select-none group transition-colors hover:border-secondary ${aspectRatioClass} ${className}`}
    >
      {/* Background industrial weave texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none industrial-grid-bg" />

      {/* Decorative corner markers */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-secondary/60" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-secondary/60" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-secondary/60" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-secondary/60" />

      <div className="relative z-10 flex flex-col items-center max-w-sm">
        <div className="w-12 h-12 rounded-full bg-surface shadow-xs flex items-center justify-center text-primary mb-3 group-hover:scale-105 transition-transform">
          <Camera className="w-6 h-6 stroke-[1.75]" />
        </div>

        {category && (
          <span className="text-[11px] font-semibold tracking-wider uppercase text-secondary mb-1">
            {category}
          </span>
        )}

        <p className="text-sm sm:text-base font-semibold text-text-primary px-2 leading-snug">
          {label}
        </p>

        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-surface border border-border text-[11px] font-mono text-text-secondary">
          <FileCode2 className="w-3.5 h-3.5 text-secondary" />
          <span>Rekomendasi: {dimensions}</span>
        </div>

        {assetPathHint && (
          <span className="mt-1.5 text-[10px] font-mono text-text-secondary/70">
            Path: {assetPathHint}
          </span>
        )}
      </div>
    </div>
  );
}
