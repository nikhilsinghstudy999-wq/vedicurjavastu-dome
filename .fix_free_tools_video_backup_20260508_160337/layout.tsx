import Footer from '@/features/shared/components/Footer';
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/features/shared/contexts/LanguageContext";
import LenisSmoothScroll from "@/features/shared/components/global/LenisSmoothScroll";
import TranslationExecutor from "@/features/shared/components/global/TranslationExecutor";
import PageTransition from "@/features/shared/components/global/PageTransition";
import { GlobalSoundProvider } from "@/features/shared/components/global/GlobalSoundProvider";
import { fontSerif, fontSans, fontMono } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "VedicUrja | Ancient Wisdom, Modern Precision",
  description: "Global Vastu Consultancy rooted in authentic Vedic tradition.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSerif.variable} ${fontSans.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-vastu-parchment text-nidra-indigo antialiased">
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <GlobalSoundProvider>
              <LenisSmoothScroll>
                <PageTransition>
                  <TranslationExecutor />
                  {children}
                </PageTransition>
              </LenisSmoothScroll>
            </GlobalSoundProvider>
          </ThemeProvider>
        </LanguageProvider>
        <Footer />
      </body>
    </html>
  );
}
