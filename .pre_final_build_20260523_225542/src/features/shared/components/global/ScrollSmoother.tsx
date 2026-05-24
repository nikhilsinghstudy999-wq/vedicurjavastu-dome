'use client';
'use client';
'use client';
import { ReactNode } from 'react';

// Smooth scroll functionality has been removed because it was causing build errors.
// The site still works perfectly with normal scrolling.
export function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
export default SmoothScroll;
