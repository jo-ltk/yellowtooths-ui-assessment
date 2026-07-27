"use client";

import type { ReactNode } from "react";

import SmoothScroll from "@/components/motion/SmoothScroll";
import { ToastProvider } from "@/components/Toast";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  );
}
