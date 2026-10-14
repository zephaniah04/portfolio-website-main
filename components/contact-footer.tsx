"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useLenis } from "lenis/react";
import { VelocityMarquee } from "@/components/velocity-marquee";
import { Reveal } from "@/components/reveal";
import { site, socials } from "@/lib/content";

export function ContactFooter() {
  const ref = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], ["4rem", "0rem"]);

  return (
    <motion.footer
      id="contact"
      ref={ref}
      style={{ scale, borderTopLeftRadius: radius, borderTopRightRadius: radius }}
      className="relative origin-bottom overflow-hidden bg-lime text-ink"
    >
      <div className="px-4 pt-20 md:px-8 md:pt-32">
        <div className="flex items-center justify-between font-mono text-[11px] tracking-widest uppercase">
          <span>(05) Contact</span>
          <span>Let&apos;s talk</span>
        </div>
      </div>

      <VelocityMarquee
        items={["Let's create", "Book a shoot", "Say hello"]}
        baseVelocity={3}
        invert
        className="mt-10 py-4 font-display text-[18vw] leading-none uppercase md:text-[12vw]"
      />

      <div className="grid gap-12 px-4 pt-12 pb-8 md:grid-cols-12 md:px-8 md:pt-20">
        <Reveal className="md:col-span-6">
          <p className="max-w-md text-lg leading-snug md:text-2xl">
            Have a shoot, a short film or a design in mind? Let&apos;s make
            something worth looking at twice.
          </p>
          <a
            href={`mailto:${site.email}`}
            data-cursor="Email"
            className="group mt-8 inline-flex items-center gap-4 rounded-full bg-ink px-8 py-5 font-display text-xl text-paper uppercase transition-colors hover:bg-orange hover:text-ink md:text-3xl"
          >
            {site.email}
            <span className="transition-transform duration-500 group-hover:rotate-45">↗</span>
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-8 font-mono text-xs tracking-widest uppercase md:col-span-5 md:col-start-8">
          <div>
            <p className="mb-4 text-ink/50">Socials</p>
            <ul className="flex flex-col gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="hover:underline">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-ink/50">Services</p>
            <ul className="flex flex-col gap-2">
              <li>Photography</li>
              <li>Videography</li>
              <li>Design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-ink/20 px-4 py-6 font-mono text-[11px] tracking-widest uppercase md:flex-row md:items-center md:justify-between md:px-8">
        <span>© 2026 {site.name}</span>
        <span>Photography · Videography · Design</span>
        <button
          type="button"
          onClick={() => lenis?.scrollTo(0, { duration: 2 })}
          className="text-left hover:underline md:text-right"
        >
          Back to top ↑
        </button>
      </div>
    </motion.footer>
  );
}
