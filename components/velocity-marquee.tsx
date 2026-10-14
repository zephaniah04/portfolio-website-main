"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";

type Props = {
  items: string[];
  baseVelocity?: number;
  className?: string;
  /** Dark text for use on bright backgrounds. */
  invert?: boolean;
};

// Infinite text marquee that speeds up and flips direction with scroll velocity.
export function VelocityMarquee({ items, baseVelocity = -2, className = "", invert = false }: Props) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const direction = useRef(1);

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) direction.current = -1;
    else if (vf > 0) direction.current = 1;
    moveBy += direction.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  const row = (
    <>
      {/* Repeat so a single row is always wider than the viewport. */}
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center">
          <span className={i % 2 ? (invert ? "text-outline-ink" : "text-outline") : ""}>{item}</span>
          <span className={`mx-[3vw] text-[0.5em] ${invert ? "text-ink" : "text-lime"}`}>✦</span>
        </span>
      ))}
    </>
  );

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden>
      <motion.div className="flex w-max" style={{ x }}>
        <div className="flex">{row}</div>
        <div className="flex">{row}</div>
      </motion.div>
    </div>
  );
}
