import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CompanyStats } from "@/components/sections/CompanyStats";
import { AboutSection } from "@/components/sections/AboutSection";
import { MarketsSection } from "@/components/sections/MarketsSection";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { ManufacturingSection } from "@/components/sections/ManufacturingSection";
import { ProductionProcess } from "@/components/sections/ProductionProcess";
import { QualitySection } from "@/components/sections/QualitySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary selection:bg-secondary-light selection:text-primary relative">
      {/* Anchor top */}
      <div id="top" />

      {/* A. Navbar with Language Toggle & Quote CTA */}
      <Navbar />

      <main className="flex-1 overflow-x-clip">
        {/* B. Hero Section - Smooth Cinematic Entrance */}
        <ScrollReveal id="hero" variant="fade-up" duration={750} once={false}>
          <HeroSection />
        </ScrollReveal>

        {/* C. Company at a Glance - Punchy Scale Burst Pop-In */}
        <ScrollReveal variant="pop-in" duration={650} once={false}>
          <CompanyStats />
        </ScrollReveal>

        {/* D. About Us - Bold Slide-Right Convergence */}
        <ScrollReveal id="about" variant="slide-right" duration={700} once={false}>
          <AboutSection />
        </ScrollReveal>

        {/* E. Markets Section - 3D Perspective Depth Tilt */}
        <ScrollReveal id="markets" variant="perspective-tilt" duration={700} once={false}>
          <MarketsSection />
        </ScrollReveal>

        {/* F. Product Categories - Staggered Waterfall Card Cascade */}
        <ScrollReveal id="products" variant="cascade-card" duration={700} once={false}>
          <ProductCategories />
        </ScrollReveal>

        {/* G. Manufacturing Capabilities - Bold Mechanical Slide-Left */}
        <ScrollReveal id="capabilities" variant="slide-left" duration={700} once={false}>
          <ManufacturingSection />
        </ScrollReveal>

        {/* H. Production Process - Assembly Line Timeline Step */}
        <ScrollReveal id="process" variant="timeline-step" duration={700} once={false}>
          <ProductionProcess />
        </ScrollReveal>

        {/* I. Quality Assurance - Precision Stamp Lock-In */}
        <ScrollReveal id="quality" variant="badge-stamp" duration={700} once={false}>
          <QualitySection />
        </ScrollReveal>

        {/* K. B2B Procurement FAQ - Smooth Vertical Unfold */}
        <ScrollReveal id="faq" variant="unfold-up" duration={700} once={false}>
          <FaqSection />
        </ScrollReveal>

        {/* L. Business Inquiry / Contact Section - High-Contrast Elevated Card Glow */}
        <ScrollReveal id="contact" variant="elevate-glow" duration={700} once={false}>
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* M. Footer */}
      <Footer />
    </div>
  );
}
