import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "PT. Sinlie Cahaya Matahari | Indonesian Sock Manufacturer",
  description:
    "PT. Sinlie Cahaya Matahari (SCM) adalah mitra manufaktur kaus kaki terpercaya di Indonesia dengan kapabilitas produksi presisi tinggi untuk kategori bayi, anak, wanita, dan pria.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
