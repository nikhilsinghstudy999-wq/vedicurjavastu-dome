import type { Metadata } from "next";
import { fontSerif, fontSans, fontMono } from "@/styles/fonts";
import ClientProviders from "./ClientProviders";
import Footer from "@/features/shared/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "VedicVastuUrja - Best Vastu Consultant in India",
  description: "VedicVastuUrja offers expert Vastu consultations, remedies, and AI tools by India's most trusted Vastu consultant.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSerif.variable} ${fontSans.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/home/acharya-portrait.jpg" fetchPriority="high" />
        <link rel="preload" as="font" href="/fonts/cormorant-garamond.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-vastu-parchment text-nidra-indigo antialiased">
        <ClientProviders>{children}</ClientProviders>
        <Footer />
      </body>
    </html>
  );
}
