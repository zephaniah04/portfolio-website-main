"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { work } from "@/lib/content";

// Vertical scroll drives a horizontal track while the section is pinned.
export function WorkGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-paper text-ink"
      style={{ height: `calc(100svh + ${distance}px)` }}
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="flex items-center justify-between px-4 pb-6 font-mono text-[11px] tracking-widest uppercase md:px-8">
          <span>(02) Selected Work</span>
          <span>Scroll →</span>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex w-max items-center gap-4 px-4 md:gap-8 md:px-8">
          <div className="flex w-[80vw] shrink-0 flex-col justify-center md:w-[40vw]">
            <h2 className="font-display text-[18vw] leading-[0.85] uppercase md:text-[10vw]">
              Frames
              <br />
              <span className="text-orange">&amp; Films</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/70">
              A handful of favourite frames. Every shot is a story about light,
              timing and the people in front of the lens.
            </p>
          </div>

          {work.map((item, i) => (
            <article
              key={item.title}
              data-cursor="Open"
              className={`group relative shrink-0 ${i % 2 ? "md:mt-24" : "md:-mt-24"}`}
            >
              <div className="relative aspect-4/5 w-[70vw] overflow-hidden rounded-sm md:w-[26vw]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 26vw, 70vw"
                  className="object-cover grayscale transition duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl uppercase md:text-3xl">{item.title}</h3>
                <span className="font-mono text-[10px] tracking-widest text-ink/60 uppercase">
                  {item.category} — {item.year}
                </span>
              </div>
              <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-paper mix-blend-difference">
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          ))}

          <div className="flex w-[60vw] shrink-0 items-center justify-center md:w-[25vw]">
            <a
              href="#contact"
              className="flex aspect-square w-48 items-center justify-center rounded-full bg-ink text-center font-display text-2xl text-paper uppercase transition-colors hover:bg-orange md:w-56"
            >
              Book
              <br />a shoot ↗
            </a>
          </div>
        </motion.div>

        <div className="mx-4 mt-8 h-px bg-ink/15 md:mx-8">
          <motion.div className="h-full origin-left bg-ink" style={{ scaleX: progress }} />
        </div>
      </div>
    </section>
  );
}
