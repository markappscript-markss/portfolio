"use client";

import { ReactLenis } from 'lenis/react';
import "lenis/dist/lenis.css"; // Required for native-feeling scroll behavior

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    // 'root' tells Lenis to take over the document scroll
    // 'lerp' controls the friction/smoothness (lower = smoother/heavier)
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}