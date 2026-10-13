"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    // Check if user prefers reduced motion
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
    }

    // Initialize Lenis for modern momentum smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential ease-out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    document.documentElement.classList.add("lenis");
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intercept clicks on anchor links (#about, #products, etc.) in the CAPTURE phase
    // so we handle scrolling before Next.js <Link> or browser jumps
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const hash = href.substring(hashIndex);
      if (hash.length <= 1) return;

      const targetElement = document.querySelector(hash);
      if (targetElement) {
        e.preventDefault();
        e.stopPropagation();

        // Update URL hash cleanly without jumping
        window.history.pushState(null, "", hash);

        // Pre-reveal target section so it is ready
        const targetId = hash.replace("#", "");
        window.dispatchEvent(
          new CustomEvent("scm-reveal", { detail: { targetId } })
        );

        const revealEl =
          targetElement.closest("[data-variant]") ||
          targetElement.querySelector("[data-variant]") ||
          targetElement;
        if (revealEl) {
          revealEl.classList.add("reveal-revealed");
        }

        // Scroll smoothly with Lenis with sticky header offset (-80px)
        lenis.scrollTo(targetElement as HTMLElement, {
          offset: -80, // Offset for sticky navbar
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          onComplete: () => {
            if (revealEl) {
              revealEl.classList.add("reveal-revealed");
            }
          },
        });
      }
    };

    // Use capture phase to intercept before Next.js Link
    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      document.documentElement.classList.remove("lenis");
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}

