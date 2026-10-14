"use client";

import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.09, anchors: { offset: 0 } }}>
      {children}
    </ReactLenis>
  );
}
