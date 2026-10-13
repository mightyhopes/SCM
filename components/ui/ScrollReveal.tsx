"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "none";
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 500,
  direction = "up",
  threshold = 0.15,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect user's motion preferences
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        setIsVisible(true);
        return;
      }
    }

    const currentElement = elementRef.current;
    if (!currentElement) return;

    // Check if element is already within viewport
    const rect = currentElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const transformStyle = direction === "up" && !isVisible ? "translateY(16px)" : "translateY(0)";

  return (
    <div
      ref={elementRef}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: transformStyle,
      }}
      className={`motion-reduce:!opacity-100 motion-reduce:!transform-none ${className}`}
    >
      {children}
    </div>
  );
}
