"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion } from "motion/react";
import { useLenis } from "lenis/react";

// Total time the preloader stays on screen; the hero times its entrance to this.
export const INTRO_DELAY = 2.1;

export function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: INTRO_DELAY - 0.4,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (done) {
      lenis.start();
    } else {
      lenis.scrollTo(0, { immediate: true });
      lenis.stop();
    }
  }, [lenis, done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-90 flex flex-col justify-between bg-ink p-4 md:p-8"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex justify-between font-mono text-xs tracking-widest text-mute uppercase">
            <span>Zephaniah Raika</span>
            <span className="font-jp">写真家</span>
          </div>
          <div className="flex items-end justify-between">
            <span className="font-mono text-xs tracking-widest text-mute uppercase">
              Loading the frame
            </span>
            <span className="font-display text-[22vw] leading-[0.8] text-paper md:text-[14vw]">
              {count}
              <span className="text-lime">%</span>
            </span>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-lime"
            style={{ width: `${count}%` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
