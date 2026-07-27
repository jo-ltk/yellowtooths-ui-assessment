"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock, Package, RotateCcw, Truck } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/motion/Reveal";
import { parsePrice, useCart, type CartItem } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const BAG_HERO =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=85";

const DUMMY_ITEMS: CartItem[] = [
  {
    id: "dummy-amber-blaze-classic-tee",
    name: "Amber Blaze Classic Tee",
    price: "$250",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: "dummy-mystic-mauve-everyday-crew",
    name: "Mystic Mauve Everyday Crew",
    price: "$350",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
    quantity: 2,
  },
  {
    id: "dummy-amber-blaze-softwear-coat",
    name: "Amber Blaze Softwear Coat",
    price: "$500",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
];

const DUMMY_META: Record<string, { size: string; color: string }> = {
  "dummy-amber-blaze-classic-tee": { size: "M", color: "Amber Blaze" },
  "dummy-mystic-mauve-everyday-crew": { size: "L", color: "Mystic Mauve" },
  "dummy-amber-blaze-softwear-coat": { size: "S", color: "Amber Blaze" },
};

const SUGGESTIONS = [
  {
    id: "golden-hour-relaxed-tee",
    name: "Golden Hour Relaxed Tee",
    price: "$280",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "midnight-essential-hoodie",
    name: "Midnight Essential Hoodie",
    price: "$420",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "stone-path-wide-pant",
    name: "Stone Path Wide Pant",
    price: "$380",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
  },
];

const PERKS = [
  { icon: Truck, label: "Ships in 2–4 days" },
  { icon: RotateCcw, label: "30-day free returns" },
  { icon: Lock, label: "Secure checkout" },
  { icon: Package, label: "Gift-ready wrap" },
] as const;

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal, itemCount } =
    useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);

  const isDemo = items.length === 0;
  const displayItems = isDemo ? DUMMY_ITEMS : items;
  const displayCount = isDemo
    ? DUMMY_ITEMS.reduce((sum, item) => sum + item.quantity, 0)
    : itemCount;
  const displayTotal = isDemo
    ? DUMMY_ITEMS.reduce(
        (sum, item) => sum + parsePrice(item.price) * item.quantity,
        0,
      )
    : cartTotal;

  const shipping = displayTotal >= 500 ? 0 : 25;
  const tax = Math.round(displayTotal * 0.08);
  const discount = promoApplied ? Math.round(displayTotal * 0.1) : 0;
  const orderTotal = displayTotal + shipping + tax - discount;

  const freeShippingRemaining = useMemo(
    () => Math.max(0, 500 - displayTotal),
    [displayTotal],
  );
  const shippingProgress = Math.min(100, (displayTotal / 500) * 100);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#e8eaed]">
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.8)_0%,_transparent_52%),radial-gradient(ellipse_at_bottom_right,_rgba(70,85,100,0.12)_0%,_transparent_48%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        }}
      />

      <Navbar />

      {/* Editorial header — full-bleed image plane */}
      <section className="relative h-[42vh] min-h-[280px] max-h-[420px] w-full overflow-hidden sm:h-[48vh]">
        <Image
          src={BAG_HERO}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#e8eaed] via-[#e8eaed]/30 to-black/30" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,16,22,0.5)_0%,transparent_55%)]" />

        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1400px] flex-col justify-end px-6 pb-10 sm:px-8 sm:pb-12 lg:px-10">
          <Reveal variant="up" duration={1}>
            <p className="font-geist text-[10px] uppercase tracking-[0.28em] text-white/70 sm:text-xs">
              PARFS · Bag
            </p>
            <h1 className="mt-3 font-display text-5xl font-light leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Your Bag
            </h1>
            <p className="mt-4 max-w-md font-geist text-sm font-light leading-relaxed text-white/75 sm:text-base">
              {isDemo
                ? `${displayCount} sample pieces — preview how checkout feels.`
                : `${displayCount} ${displayCount === 1 ? "piece" : "pieces"} ready when you are.`}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14 lg:px-10">
        {/* Shipping progress */}
        <Reveal variant="up" delay={0.05}>
          <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white/55 px-5 py-5 backdrop-blur-sm sm:px-7 sm:py-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-geist text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  Shipping threshold
                </p>
                <p className="mt-2 font-geist text-sm font-light text-stone-700 sm:text-base">
                  {freeShippingRemaining > 0 ? (
                    <>
                      Add{" "}
                      <span className="font-medium text-stone-900">
                        ${freeShippingRemaining.toLocaleString()}
                      </span>{" "}
                      more for complimentary shipping.
                    </>
                  ) : (
                    <>You&apos;ve unlocked complimentary shipping.</>
                  )}
                </p>
              </div>
              {isDemo && (
                <span className="rounded-full border border-stone-300/80 bg-white/70 px-3 py-1 font-geist text-[10px] uppercase tracking-[0.18em] text-stone-500">
                  Preview UI
                </span>
              )}
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-stone-200/80">
              <div
                className="h-full rounded-full bg-stone-900 transition-[width] duration-700 ease-out"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14">
          {/* Line items */}
          <div>
            <Reveal variant="left" delay={0.08}>
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h2 className="font-geist text-xs uppercase tracking-[0.22em] text-stone-500">
                  / Items
                </h2>
                <span className="font-display text-2xl font-light tracking-tight text-stone-900 sm:text-3xl">
                  {displayCount}
                </span>
              </div>
            </Reveal>

            <ul className="space-y-4">
              {displayItems.map((item, index) => {
                const meta = DUMMY_META[item.id];
                const lineTotal =
                  parsePrice(item.price) * item.quantity;

                return (
                  <Reveal
                    key={item.id}
                    as="li"
                    variant="up"
                    delay={0.1 + index * 0.06}
                  >
                    <article className="group grid grid-cols-[96px_1fr] gap-4 overflow-hidden rounded-[1.5rem] border border-black/[0.05] bg-white/70 p-3 shadow-[0_1px_2px_rgba(20,16,12,0.04),0_18px_40px_-28px_rgba(20,16,12,0.35)] backdrop-blur-sm transition-transform duration-500 ease-out hover:-translate-y-0.5 sm:grid-cols-[140px_1fr] sm:gap-6 sm:p-4">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-stone-200">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="140px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        />
                      </div>

                      <div className="flex min-w-0 flex-col py-1 pr-1 sm:py-2 sm:pr-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-stone-900 sm:text-xl">
                              {item.name}
                            </h3>
                            {meta && (
                              <p className="mt-1.5 font-geist text-[10px] uppercase tracking-[0.16em] text-stone-500">
                                {meta.color} · Size {meta.size}
                              </p>
                            )}
                            <p className="mt-2 font-geist text-sm font-light text-stone-600">
                              {item.price}
                              <span className="mx-2 text-stone-300">·</span>
                              Line ${lineTotal.toLocaleString()}
                            </p>
                          </div>
                          <button
                            type="button"
                            disabled={isDemo}
                            onClick={() => removeFromCart(item.id)}
                            className="shrink-0 border-b border-stone-400 pb-0.5 font-geist text-[10px] uppercase tracking-[0.18em] text-stone-500 transition-colors hover:border-stone-900 hover:text-stone-900 disabled:cursor-default disabled:opacity-40"
                          >
                            Remove
                          </button>
                        </div>

                        <div className="mt-auto flex items-center gap-3 pt-4">
                          <div className="inline-flex items-center overflow-hidden rounded-full border border-stone-300/90 bg-white/80">
                            <button
                              type="button"
                              aria-label={`Decrease quantity of ${item.name}`}
                              disabled={isDemo}
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="flex h-9 w-9 items-center justify-center font-geist text-base font-light text-stone-900 transition-colors hover:bg-stone-100 disabled:cursor-default disabled:opacity-50"
                            >
                              −
                            </button>
                            <span className="min-w-8 text-center font-geist text-sm text-stone-900">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label={`Increase quantity of ${item.name}`}
                              disabled={isDemo}
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="flex h-9 w-9 items-center justify-center font-geist text-base font-light text-stone-900 transition-colors hover:bg-stone-100 disabled:cursor-default disabled:opacity-50"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          {/* Order summary */}
          <Reveal variant="right" delay={0.14} className="lg:sticky lg:top-28">
            <aside className="relative overflow-hidden rounded-[1.75rem] bg-[#12161c] p-6 text-[#e8eaed] shadow-[0_24px_60px_-28px_rgba(12,16,22,0.7)] sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(232,234,237,0.12)_0%,_transparent_70%)]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(90,120,150,0.2)_0%,_transparent_70%)]"
              />

              <p className="relative font-geist text-[10px] uppercase tracking-[0.24em] text-white/45">
                Order summary
              </p>
              <p className="relative mt-3 font-display text-3xl font-light tracking-tight sm:text-4xl">
                ${orderTotal.toLocaleString()}
              </p>
              <p className="relative mt-2 font-geist text-xs font-light text-white/45">
                Incl. estimated tax &amp; shipping
              </p>

              <dl className="relative mt-8 space-y-3 border-t border-white/10 pt-6 font-geist text-sm font-light text-white/60">
                <div className="flex items-center justify-between">
                  <dt>Subtotal</dt>
                  <dd className="text-white/90">
                    ${displayTotal.toLocaleString()}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Shipping</dt>
                  <dd className="text-white/90">
                    {shipping === 0 ? "Complimentary" : `$${shipping}`}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Estimated tax</dt>
                  <dd className="text-white/90">${tax.toLocaleString()}</dd>
                </div>
                {promoApplied && (
                  <div className="flex items-center justify-between text-sky-200/90">
                    <dt>Promo · 10%</dt>
                    <dd>−${discount.toLocaleString()}</dd>
                  </div>
                )}
              </dl>

              <form
                className="relative mt-8"
                onSubmit={(event) => {
                  event.preventDefault();
                  const valid =
                    promoCode.trim().toLowerCase() === "parfs10";
                  setPromoApplied(valid);
                  setPromoError(!valid && promoCode.trim().length > 0);
                }}
              >
                <label
                  htmlFor="promo"
                  className="font-geist text-[10px] uppercase tracking-[0.2em] text-white/40"
                >
                  Promo code
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    id="promo"
                    value={promoCode}
                    onChange={(event) => {
                      setPromoCode(event.target.value);
                      setPromoApplied(false);
                      setPromoError(false);
                    }}
                    placeholder="PARFS10"
                    className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 font-geist text-sm font-light text-white outline-none placeholder:text-white/30 focus:border-white/35"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full border border-white/25 px-4 py-2.5 font-geist text-[10px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <p className="mt-2 font-geist text-xs font-light text-sky-200/90">
                    Code applied — 10% off.
                  </p>
                )}
                {promoError && (
                  <p className="mt-2 font-geist text-xs font-light text-red-300/90">
                    Try PARFS10
                  </p>
                )}
              </form>

              <button
                type="button"
                className="relative mt-6 flex w-full items-center justify-between rounded-full bg-[#e8eaed] py-2 pl-6 pr-2 font-geist text-sm text-[#12161c] transition-transform duration-300 hover:scale-[1.015]"
              >
                <span className="uppercase tracking-[0.18em]">Checkout</span>
                <span className="flex size-10 items-center justify-center rounded-full bg-[#12161c] text-[#e8eaed]">
                  <ArrowUpRight className="size-4" strokeWidth={2} />
                </span>
              </button>

              <Link
                href="/?source=Cart Continue"
                className="relative mt-5 block text-center font-geist text-[10px] uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-white/80"
              >
                Continue shopping
              </Link>

              <ul className="relative mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
                {PERKS.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-start gap-2.5 font-geist text-[11px] font-light leading-snug text-white/50"
                  >
                    <Icon
                      className="mt-0.5 size-3.5 shrink-0 text-white/35"
                      strokeWidth={1.5}
                    />
                    {label}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>

        {/* Suggestions */}
        <div className="mt-20 border-t border-stone-900/10 pt-14 sm:mt-28 sm:pt-20">
          <Reveal variant="up">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-geist text-xs text-stone-400">/ Also like</p>
                <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                  Keep exploring
                </h2>
              </div>
              <Link
                href="/?source=Cart Suggestions"
                className="inline-flex items-center gap-2 border-b border-stone-900 pb-1 font-geist text-[10px] uppercase tracking-[0.2em] text-stone-900 sm:text-xs"
              >
                Discover Reimagined
                <ArrowUpRight className="size-3.5" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-7">
            {SUGGESTIONS.map((product, index) => (
              <Reveal
                key={product.id}
                as="li"
                variant="up"
                delay={0.08 + index * 0.07}
              >
                <article
                  className={cn(
                    "group overflow-hidden rounded-[1.75rem] bg-white/70 shadow-[0_1px_2px_rgba(20,16,12,0.04),0_18px_40px_-28px_rgba(20,16,12,0.3)] ring-1 ring-black/[0.04] backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1",
                  )}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <Link
                      href="/?source=Cart Suggestions"
                      aria-label={`View ${product.name}`}
                      className="absolute right-4 bottom-4 z-10 flex size-10 translate-y-2 items-center justify-center rounded-full bg-white text-stone-950 opacity-0 shadow-md transition-all duration-300 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <ArrowUpRight className="size-4" strokeWidth={2} />
                    </Link>
                  </div>
                  <div className="px-5 pt-4 pb-5">
                    <h3 className="font-display text-[15px] font-semibold leading-snug tracking-tight text-stone-900">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 font-geist text-sm font-light text-stone-500">
                      {product.price}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
