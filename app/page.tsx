import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CompanyStats } from "@/components/sections/CompanyStats";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { ManufacturingSection } from "@/components/sections/ManufacturingSection";
import { ProductionProcess } from "@/components/sections/ProductionProcess";
import { QualitySection } from "@/components/sections/QualitySection";
import { FactoryGallery } from "@/components/sections/FactoryGallery";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary selection:bg-secondary-light selection:text-primary">
      {/* Anchor top */}
      <div id="top" />

      {/* A. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* B. Hero Section */}
        <HeroSection />

        {/* C. Company at a Glance */}
        <CompanyStats />

        {/* D. About Us */}
        <AboutSection />

        {/* E. Product Categories */}
        <ProductCategories />

        {/* F. Manufacturing Capabilities */}
        <ManufacturingSection />

        {/* G. Production Process */}
        <ProductionProcess />

        {/* H. Quality Assurance */}
        <QualitySection />

        {/* I. Factory Gallery */}
        <FactoryGallery />

        {/* J. Business Inquiry / Contact */}
        <ContactSection />
      </main>

      {/* K. Footer */}
      <Footer />
    </div>
  );
}
