import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`mb-10 sm:mb-14 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 mb-3 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-sm border ${
            isDark
              ? "bg-primary text-accent border-secondary/40"
              : "bg-surface-muted text-primary border-border"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          isDark ? "text-text-inverse" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-secondary-light/90" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-12 bg-accent rounded-full ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
