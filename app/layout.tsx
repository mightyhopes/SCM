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
    "PT. Sinlie Cahaya Matahari provides flexible sock manufacturing solutions with industry experience since 2018. Serving domestic markets and exporting to the United States and Europe with scalable production capacity.",
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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-text-primary">
        <LanguageProvider>
          <SmoothScroll />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
