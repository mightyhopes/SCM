import React from "react";
import { FolderDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { GALLERY_ITEMS } from "@/data/companyData";

export function FactoryGallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-surface border-b border-border">
      <Container size="default">
        <SectionHeading
          eyebrow="GALERI FASILITAS"
          title="Kilasan Suasana Pabrik & Produksi"
          description="Transparansi lantai produksi PT. Sinlie Cahaya Matahari. Tempat di mana benang berkualitas diproses menjadi produk kaus kaki siap pakai."
          align="center"
        />

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Item 1 - Wide Landscape (col-span-8) */}
          <div className="lg:col-span-8 bg-surface p-3 rounded-xl border border-border shadow-2xs">
            <ImagePlaceholder
              label={GALLERY_ITEMS[0].title}
              category={GALLERY_ITEMS[0].category}
              dimensions={GALLERY_ITEMS[0].dimensions}
              assetPathHint="/public/images/gallery/machines-line.jpg"
              aspectRatioClass="aspect-16/10"
            />
          </div>

          {/* Item 2 - Portrait (col-span-4) */}
          <div className="lg:col-span-4 bg-surface p-3 rounded-xl border border-border shadow-2xs">
            <ImagePlaceholder
              label={GALLERY_ITEMS[1].title}
              category={GALLERY_ITEMS[1].category}
              dimensions={GALLERY_ITEMS[1].dimensions}
              assetPathHint="/public/images/gallery/yarn-detail.jpg"
              aspectRatioClass="aspect-4/5 lg:aspect-full h-full min-h-[300px]"
            />
          </div>

          {/* Item 3 - Standard Landscape (col-span-4) */}
          <div className="lg:col-span-4 bg-surface p-3 rounded-xl border border-border shadow-2xs">
            <ImagePlaceholder
              label={GALLERY_ITEMS[2].title}
              category={GALLERY_ITEMS[2].category}
              dimensions={GALLERY_ITEMS[2].dimensions}
              assetPathHint="/public/images/gallery/steam-boarding.jpg"
              aspectRatioClass="aspect-4/3"
            />
          </div>

          {/* Item 4 - Standard Landscape (col-span-4) */}
          <div className="lg:col-span-4 bg-surface p-3 rounded-xl border border-border shadow-2xs">
            <ImagePlaceholder
              label={GALLERY_ITEMS[3].title}
              category={GALLERY_ITEMS[3].category}
              dimensions={GALLERY_ITEMS[3].dimensions}
              assetPathHint="/public/images/gallery/qc-inspection.jpg"
              aspectRatioClass="aspect-4/3"
            />
          </div>

          {/* Item 5 - Standard Landscape (col-span-4) */}
          <div className="lg:col-span-4 bg-surface p-3 rounded-xl border border-border shadow-2xs">
            <ImagePlaceholder
              label={GALLERY_ITEMS[4].title}
              category={GALLERY_ITEMS[4].category}
              dimensions={GALLERY_ITEMS[4].dimensions}
              assetPathHint="/public/images/gallery/packaging-warehouse.jpg"
              aspectRatioClass="aspect-4/3"
            />
          </div>
        </div>

        {/* Client Asset Instruction Banner */}
        <div className="mt-10 p-4 rounded-lg bg-surface-muted border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <div className="flex items-center gap-2">
            <FolderDown className="w-4 h-4 text-secondary shrink-0" />
            <span>
              <strong>Panduan Penggantian Aset:</strong> Foto riil fasilitas pabrik dan produk SCM dapat langsung disalin ke folder <code>/public/images/gallery/</code> sesuai nama berkas di atas.
            </span>
          </div>
          <span className="font-mono text-primary text-[11px] shrink-0 font-semibold">
            Status: Menunggu foto resmi dari klien
          </span>
        </div>
      </Container>
    </section>
  );
}
