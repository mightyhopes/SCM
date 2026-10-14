import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/context/LanguageContext";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "PT. Sinlie Cahaya Matahari | Precision Sock Manufacturing",
  description:
    "PT. Sinlie Cahaya Matahari menyediakan solusi manufaktur kaos kaki fleksibel dengan pengalaman industri sejak 2018. Melayani pasar domestik dan ekspor ke Amerika Serikat dan Eropa dengan kapasitas maksimum hingga 1.000.000 lusin/bulan.",
  icons: {
    icon: "/images/scm-mark.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={cn("font-sans", geist.variable)}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-text-primary">
        <LanguageProvider>
          <SmoothScroll />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
