'use client';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

export function LenisSmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Ensure lenis is initialized only on client
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2,              // Slower, smoother scroll
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smoother easing
      smoothWheel: true,
      wheelMultiplier: 0.8,       // More natural feel
      touchMultiplier: 1.5,
      infinite: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Reset scroll position on route change
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
export default LenisSmoothScroll;
