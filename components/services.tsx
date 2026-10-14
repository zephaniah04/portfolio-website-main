import { MaskText, Reveal, SectionLabel } from "@/components/reveal";
import { accentClass, services } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="relative px-4 py-24 md:px-8 md:py-40"
    >
      <SectionLabel index="01" label="What I do" />

      <h2 className="mb-12 font-display text-[13vw] leading-none uppercase md:mb-20 md:text-[8vw]">
        <MaskText>I capture,</MaskText>
        <MaskText delay={0.1}>
          <span className="text-outline">I create</span>
          <span className="text-lime">.</span>
        </MaskText>
      </h2>

      <ul className="border-t border-line">
        {services.map((service, i) => {
          const accent = accentClass[service.accent];
          return (
            <li
              key={service.id}
              id={service.id}
              className="group relative overflow-hidden border-b border-line"
            >
              {/* Accent fill that wipes up on hover */}
              <span
                className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 ${accent.bg}`}
              />
              <Reveal
                delay={i * 0.08}
                className="relative grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 py-6 transition-colors duration-500 group-hover:text-ink md:grid-cols-[6rem_1fr_1fr_auto] md:gap-x-8 md:py-10"
              >
                <span className="font-mono text-xs text-mute transition-colors group-hover:text-ink/60">
                  {service.number}
                </span>
                <h3 className="font-display text-[12vw] leading-none uppercase transition-transform duration-500 group-hover:translate-x-4 md:text-[6vw]">
                  {service.title}
                </h3>
                <p className="col-span-2 max-w-sm text-sm leading-relaxed text-paper/70 transition-colors group-hover:text-ink md:col-span-1">
                  {service.description}
                </p>
                <div className="col-span-2 flex flex-wrap gap-2 md:col-span-1 md:flex-col md:items-end">
                  <span
                    className={`rounded-full border px-3 py-1 font-mono text-[10px] tracking-widest uppercase transition-colors group-hover:border-ink group-hover:text-ink ${accent.border} ${accent.text}`}
                  >
                    {service.level}
                  </span>
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-widest text-mute uppercase group-hover:text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
