"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/features/shared/contexts/LanguageContext";
import LenisSmoothScroll from "@/features/shared/components/global/LenisSmoothScroll";
import PageTransition from "@/features/shared/components/global/PageTransition";
import TranslationExecutor from "@/features/shared/components/global/TranslationExecutor";
import { GlobalSoundProvider } from "@/features/shared/components/global/GlobalSoundProvider";
import AnimatedFavicon from "@/features/shared/components/global/AnimatedFavicon";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <GlobalSoundProvider>
          <LenisSmoothScroll>
            <PageTransition>
              <TranslationExecutor />
              <AnimatedFavicon />
              {children}
            </PageTransition>
          </LenisSmoothScroll>
        </GlobalSoundProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
