"use client";

import { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { INTRO_DELAY } from "@/components/preloader";
import { site } from "@/lib/content";

const ease = [0.76, 0, 0.24, 1] as const;

function SplitLetters({ text, delay }: { text: string; delay: number }) {
  return (
    <span aria-hidden className="inline-flex overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ delay: delay + i * 0.045, duration: 0.9, ease }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

const formatTime = () =>
  new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  });

function subscribeClock(onTick: () => void) {
  const id = setInterval(onTick, 10_000);
  return () => clearInterval(id);
}

function LocalTime() {
  const time = useSyncExternalStore(subscribeClock, formatTime, () => "--:--");
  return <span>{time} IST</span>;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const firstX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const lastX = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const d = INTRO_DELAY;

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-4 pt-24 pb-6 md:px-8 md:pt-28"
    >
      <h1 className="sr-only">
        {site.name} — {site.role}
      </h1>

      <motion.div style={{ opacity: fade }}>
        <motion.div
          className="grid grid-cols-2 gap-4 font-mono text-[11px] tracking-widest text-mute uppercase md:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: d + 0.6, duration: 0.8 }}
        >
          <span>Portfolio ©2026</span>
          <span className="text-right md:text-left">Based in {site.location}</span>
          <span className="hidden md:block">
            <LocalTime />
          </span>
          <span className="hidden text-right md:block">Scroll to explore ↓</span>
        </motion.div>
      </motion.div>

      <div className="relative my-6 flex flex-1 flex-col justify-center">
        <motion.div
          style={{ x: firstX }}
          className="relative z-10 font-display text-[22vw] leading-[0.82] text-paper uppercase md:text-[21vw]"
        >
          <SplitLetters text={site.firstName} delay={d} />
        </motion.div>

        <div className="relative z-0 flex items-center justify-end gap-4 md:my-[-9vw]">
          <motion.div
            className="relative mr-auto ml-[6vw] hidden max-w-xs md:translate-y-[3vw] text-sm leading-relaxed text-paper/80 md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: d + 0.9, duration: 0.8, ease }}
          >
            <span className="font-jp mb-3 block text-xs text-lime">写真家 · 映像作家</span>
            A <em className="text-lime not-italic">creative photographer</em> and{" "}
            <em className="text-orange not-italic">amateur videographer</em> chasing
            light, movement and honest moments.
          </motion.div>

          <motion.div
            className="relative aspect-3/4 w-[46vw] overflow-hidden rounded-sm md:w-[19vw]"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ delay: d + 0.2, duration: 1.2, ease }}
            data-cursor="Hello"
          >
            <motion.div style={{ y: photoY, scale: photoScale }} className="absolute inset-0">
              <Image
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(min-width: 768px) 19vw, 46vw"
                className="object-cover grayscale-30"
              />
            </motion.div>
            <span className="absolute bottom-2 left-2 rounded-full bg-lime px-2 py-0.5 font-mono text-[10px] tracking-widest text-ink uppercase">
              That&apos;s me
            </span>
          </motion.div>

          <motion.span
            className="font-jp hidden text-xs tracking-[0.5em] text-mute [writing-mode:vertical-rl] md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: d + 1, duration: 0.8 }}
          >
            ゼファニア・ライカ
          </motion.span>
        </div>

        <motion.div
          style={{ x: lastX }}
          className="relative z-10 text-right font-display text-[22vw] leading-[0.82] uppercase md:text-[21vw]"
        >
          <span className="text-outline">
            <SplitLetters text={site.lastName} delay={d + 0.25} />
          </span>
          <span className="text-lime">
            <SplitLetters text="." delay={d + 0.6} />
          </span>
        </motion.div>
      </div>

      <motion.div
        className="flex items-end justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: d + 1.1, duration: 0.8, ease }}
      >
        <p className="max-w-[16rem] text-sm leading-relaxed text-paper/80 md:hidden">
          A <span className="text-lime">creative photographer</span> &{" "}
          <span className="text-orange">amateur videographer</span>.
        </p>
        <p className="hidden font-mono text-[11px] tracking-widest text-mute uppercase md:block">
          Photography / Videography / Design
        </p>
        <div className="flex h-12 w-7 shrink-0 justify-center rounded-full border border-paper/40 pt-2">
          <motion.span
            className="block h-2 w-0.5 rounded-full bg-lime"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
