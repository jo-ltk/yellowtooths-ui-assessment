"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { RevealText } from "@/components/motion/Reveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const chips = gsap.utils.toArray<HTMLElement>("[data-statement-chip]");
      if (!chips.length || !contextSafe) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.from(chips, {
        scale: 0,
        opacity: 0,
        y: 28,
        rotation: (i: number) => (i % 2 === 0 ? -12 : 12),
        duration: 0.9,
        stagger: 0.18,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      const cleanups = chips.map((chip) => {
        const img = chip.querySelector("img");

        const onEnter = contextSafe(() => {
          gsap.to(chip, {
            scale: 1.12,
            y: -6,
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
          });
          if (img) {
            gsap.to(img, {
              scale: 1.15,
              duration: 0.55,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        });

        const onLeave = contextSafe(() => {
          gsap.to(chip, {
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            overwrite: "auto",
          });
          if (img) {
            gsap.to(img, {
              scale: 1,
              duration: 0.55,
              ease: "power3.out",
              overwrite: "auto",
            });
          }
        });

        chip.addEventListener("pointerenter", onEnter);
        chip.addEventListener("pointerleave", onLeave);

        return () => {
          chip.removeEventListener("pointerenter", onEnter);
          chip.removeEventListener("pointerleave", onLeave);
        };
      });

      return () => cleanups.forEach((fn) => fn());
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-center font-display text-[2.1rem] font-light leading-none tracking-tight text-gray-900 sm:gap-x-4 sm:text-6xl lg:gap-x-5 lg:text-7xl">
        <RevealText text="WHERE EVERY" mode="words" stagger={0.08} />

        {/* Drop chip — oval portrait */}
        <span
          data-statement-chip
          className="relative inline-block h-10 w-16 shrink-0 cursor-pointer overflow-hidden rounded-full align-middle will-change-transform sm:h-14 sm:w-24 lg:h-16 lg:w-28"
        >
          <Image
            src="/statement/drop-v2.png"
            alt=""
            fill
            sizes="112px"
            className="object-cover will-change-transform"
          />
        </span>

        <RevealText text="DROP IS A" mode="words" stagger={0.08} delay={0.1} />
      </p>

      <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-center font-display text-[2.1rem] font-light leading-none tracking-tight text-gray-900 sm:mt-6 sm:gap-x-4 sm:text-6xl lg:gap-x-5 lg:text-7xl">
        <RevealText text="PORTAL" mode="chars" stagger={0.04} />

        {/* Portal chip — arched */}
        <span
          data-statement-chip
          className="relative inline-block h-12 w-9 shrink-0 cursor-pointer overflow-hidden rounded-t-full rounded-b-md align-middle will-change-transform sm:h-16 sm:w-12 lg:h-[4.5rem] lg:w-14"
        >
          <Image
            src="/statement/portal-v2.png"
            alt=""
            fill
            sizes="56px"
            className="object-cover will-change-transform"
          />
        </span>

        <RevealText
          text="TO A HIDDEN"
          mode="words"
          stagger={0.08}
          delay={0.08}
        />

        {/* Hidden world chip — perfume bottle */}
        <span
          data-statement-chip
          className="relative inline-block h-10 w-10 shrink-0 cursor-pointer overflow-hidden rounded-2xl align-middle will-change-transform sm:h-14 sm:w-14 lg:h-16 lg:w-16"
        >
          <Image
            src="/statement/hidden-v2.png"
            alt=""
            fill
            sizes="64px"
            className="object-cover will-change-transform"
          />
        </span>

        <RevealText text="WORLD" mode="chars" stagger={0.05} delay={0.12} />
      </p>
    </section>
  );
}
