"use client";

import { useRef, type ReactNode, type ElementType, type CSSProperties } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealVariant = "up" | "fade" | "scale" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  style?: CSSProperties;
};

const fromVars: Record<RevealVariant, gsap.TweenVars> = {
  up: { y: 48, opacity: 0 },
  fade: { opacity: 0 },
  scale: { scale: 0.92, opacity: 0 },
  left: { x: -40, opacity: 0 },
  right: { x: 40, opacity: 0 },
};

export function Reveal({
  children,
  className,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  duration = 0.9,
  once = true,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(el, { clearProps: "all" });
        return;
      }

      gsap.from(el, {
        ...fromVars[variant],
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      });
    },
    { dependencies: [variant, delay, duration, once] },
  );

  return (
    <Tag
      ref={ref}
      className={cn("will-change-transform", className)}
      style={style}
    >
      {children}
    </Tag>
  );
}

type RevealTextProps = {
  text: string;
  className?: string;
  as?: ElementType;
  mode?: "chars" | "words";
  delay?: number;
  stagger?: number;
};

/** Letter / word stagger reveal on scroll */
export function RevealText({
  text,
  className,
  as: Tag = "span",
  mode = "chars",
  delay = 0,
  stagger = 0.03,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const units = gsap.utils.toArray<HTMLElement>(
        el.querySelectorAll("[data-unit]"),
      );

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(units, { clearProps: "all" });
        return;
      }

      gsap.from(units, {
        yPercent: 110,
        opacity: 0,
        rotateX: -40,
        transformOrigin: "50% 100%",
        duration: 0.75,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    },
    { dependencies: [text, mode, delay, stagger] },
  );

  const parts =
    mode === "words"
      ? text.split(/(\s+)/).filter((p) => p.length > 0)
      : Array.from(text);

  return (
    <Tag
      ref={ref}
      className={cn("inline-block [perspective:600px]", className)}
      aria-label={text}
    >
      {parts.map((part, i) => {
        if (mode === "words" && /^\s+$/.test(part)) {
          return <span key={`sp-${i}`}>{"\u00A0"}</span>;
        }

        return (
          <span
            key={`${part}-${i}`}
            className="inline-block overflow-hidden align-bottom leading-[1.15]"
            aria-hidden="true"
          >
            <span data-unit className="inline-block will-change-transform">
              {part === " " ? "\u00A0" : part}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  selector?: string;
  stagger?: number;
};

/** Stagger children that match selector (default: direct children) */
export function RevealStagger({
  children,
  className,
  as: Tag = "div",
  selector,
  stagger = 0.12,
}: RevealStaggerProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const items = selector
        ? gsap.utils.toArray<HTMLElement>(root.querySelectorAll(selector))
        : (Array.from(root.children) as HTMLElement[]);

      if (!items.length) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(items, { clearProps: "all" });
        return;
      }

      gsap.from(items, {
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { dependencies: [selector, stagger] },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
