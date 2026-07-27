"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const { items } = useWishlist();
  const { itemCount } = useCart();
  const count = items.length;
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 8);
  });

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          className={`relative w-full border-b border-gray-100 bg-white transition-shadow duration-300 ${
            isScrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.06)]" : "shadow-none"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-8 lg:px-10"
          >
            {/* Left: hamburger + search */}
            <div className="flex items-center gap-6">
              <button aria-label="Open menu" className="text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>

              <button
                aria-label="Search"
                className="hidden items-center gap-2 text-gray-700 sm:flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-4 w-4"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                </svg>
                <span className="text-sm">Search</span>
              </button>
            </div>

            {/* Center: logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link
                href="/"
                className="font-serif text-2xl tracking-[0.15em] text-gray-900 sm:text-3xl"
              >
                PARFS
              </Link>
            </div>

            {/* Right: wishlist + bag + profile */}
            <div className="flex items-center gap-6">
              <Link
                href="/wishlist"
                aria-label={
                  count > 0 ? `Wishlist, ${count} items` : "Wishlist"
                }
                className="relative text-gray-900"
              >
                <Heart className="h-5 w-5" strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gray-900 px-1 text-[10px] font-light leading-none text-white">
                    {count > 99 ? "99+" : count}
                  </span>
                )}
              </Link>

              <Link
                href="/cart"
                aria-label={
                  itemCount > 0 ? `Bag, ${itemCount} items` : "Bag"
                }
                className="relative text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 8h12l-1 12H7L6 8Z"
                  />
                  <path strokeLinecap="round" d="M9 8V6a3 3 0 0 1 6 0v2" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gray-900 px-1 text-[10px] font-light leading-none text-white">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </Link>
              <button aria-label="Account" className="text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="8" r="3.5" />
                  <path
                    strokeLinecap="round"
                    d="M4.5 20c1.4-3.6 4.3-5.5 7.5-5.5s6.1 1.9 7.5 5.5"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </nav>
      </header>

      {/* Spacer so page content isn't covered by the fixed nav */}
      <div className="h-[73px] sm:h-[77px]" aria-hidden="true" />
    </>
  );
}
