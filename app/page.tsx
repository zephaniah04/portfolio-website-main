import { Preloader } from "@/components/preloader";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { VelocityMarquee } from "@/components/velocity-marquee";
import { Services } from "@/components/services";
import { WorkGallery } from "@/components/work-gallery";
import { About } from "@/components/about";
import { Journal } from "@/components/journal";
import { ContactFooter } from "@/components/contact-footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <SiteHeader />
      <main>
        <Hero />
        <VelocityMarquee
          items={["Photography", "Videography", "Design", "Fitness"]}
          className="border-y border-line py-6 font-display text-[14vw] leading-none uppercase md:text-[8vw]"
        />
        <Services />
        <WorkGallery />
        <About />
        <Journal />
      </main>
      <ContactFooter />
    </>
  );
}
