"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

// Fades and lifts its children into place the first time they scroll into view.
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ delay, duration: 0.9, ease }}
    >
      {children}
    </motion.div>
  );
}

// Slides a single line of text up from behind a mask. The in-view check runs on
// the mask itself, since the fully clipped text never intersects the viewport.
export function MaskText({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.span
      className={`block overflow-hidden ${className ?? ""}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-5% 0px" }}
    >
      <motion.span
        className="block"
        variants={{ hidden: { y: "105%" }, shown: { y: 0 } }}
        transition={{ delay, duration: 1, ease }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

type SectionLabelProps = {
  index: string;
  label: string;
};

export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <Reveal className="mb-10 flex items-center justify-between border-t border-line pt-4 font-mono text-[11px] tracking-widest text-mute uppercase md:mb-16">
      <span>
        ({index}) {label}
      </span>
      <span>Zephaniah Raika ©2026</span>
    </Reveal>
  );
}
