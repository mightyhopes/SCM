"use client";

import React, { useEffect, useRef } from "react";

export type ScrollRevealVariant =
  | "fade-up"
  | "fade-down"
  | "slide-right"
  | "slide-left"
  | "pop-in"
  | "perspective-tilt"
  | "cascade-card"
  | "timeline-step"
  | "badge-stamp"
  | "blur-in"
  | "unfold-up"
  | "elevate-glow"
  | "none";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: ScrollRevealVariant;
  /** Backward compatibility with previous direction prop */
  direction?: "up" | "none";
  threshold?: number;
  once?: boolean;
  id?: string;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration,
  variant,
  direction,
  threshold = 0.08,
  once = false,
  id,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const activeVariant: ScrollRevealVariant =
    variant || (direction === "up" ? "fade-up" : direction === "none" ? "none" : "fade-up");

  useEffect(() => {
    const el = elementRef.current;
    if (!el || activeVariant === "none") return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("reveal-revealed");
      return;
    }

    // Set variant data attribute
    el.setAttribute("data-variant", activeVariant);

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }
    if (duration) {
      el.style.transitionDuration = `${duration}ms`;
    }

    // Check if element is already within the visible screen view on load
    const rect = el.getBoundingClientRect();
    const isInitiallyInView = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInitiallyInView) {
      // Element is right at initial screen view (e.g. Hero Section)
      el.classList.add("reveal-init");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.add("reveal-revealed");
        });
      });
      if (once) return;
    } else {
      // Below fold: initialize ready for entrance animation
      el.classList.add("reveal-init");
    }

    // Observer triggers reveal on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-revealed");
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          // CRITICAL FIX: Only reset animation when element is BELOW the viewport
          // (user scrolled UP past it). NEVER hide elements that are ABOVE the viewport
          // so scrolling up remains completely stable without blank white spaces or layout collapse!
          if (entry.boundingClientRect.top > 0) {
            el.classList.remove("reveal-revealed");
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    // Support force reveal when navigating via anchor link
    const handleForceReveal = (e: Event) => {
      const customEvt = e as CustomEvent<{ targetId?: string }>;
      if (!customEvt.detail?.targetId || (id && customEvt.detail.targetId === id)) {
        el.classList.add("reveal-revealed");
      }
    };
    window.addEventListener("scm-reveal", handleForceReveal);

    return () => {
      observer.disconnect();
      window.removeEventListener("scm-reveal", handleForceReveal);
    };
  }, [activeVariant, delay, duration, threshold, once, id]);

  return (
    <div
      ref={elementRef}
      id={id}
      className={`motion-reduce:!opacity-100 motion-reduce:!transform-none motion-reduce:!filter-none ${className}`}
    >
      {children}
    </div>
  );
}

