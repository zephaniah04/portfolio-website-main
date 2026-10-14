"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";

function subscribePointer(onChange: () => void) {
  const query = window.matchMedia(FINE_POINTER);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

// A dot that follows the pointer and grows over anything marked [data-cursor].
// The value of data-cursor (e.g. "View") is shown inside the enlarged cursor.
export function Cursor() {
  const enabled = useSyncExternalStore(
    subscribePointer,
    () => window.matchMedia(FINE_POINTER).matches,
    () => false,
  );
  const [label, setLabel] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: PointerEvent) => {
      const el = e.target as HTMLElement;
      // Opt a subtree out of the grow-on-hover effect with data-cursor-plain.
      const target = el.closest<HTMLElement>("[data-cursor-plain]")
        ? null
        : el.closest<HTMLElement>("a, button, [data-cursor]");
      setHovering(Boolean(target));
      setLabel(target?.dataset.cursor || null);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = label ? 96 : hovering ? 48 : 12;

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none fixed top-0 left-0 z-100 flex items-center justify-center rounded-full text-ink ${
        label ? "bg-lime" : "bg-paper mix-blend-difference"
      }`}
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: size, height: size }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {label && (
        <span className="font-mono text-[11px] tracking-widest uppercase">
          {label}
        </span>
      )}
    </motion.div>
  );
}
