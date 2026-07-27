"use client";

import type { MouseEvent } from "react";
import { Heart } from "lucide-react";

import { useWishlist, type WishlistItem } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

type WishlistButtonProps = {
  product: WishlistItem;
  className?: string;
};

export default function WishlistButton({
  product,
  className,
}: WishlistButtonProps) {
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();
  const active = isWishlisted(product.id);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (active) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <button
      type="button"
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={active}
      onClick={handleClick}
      className={cn(
        "absolute top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full bg-white/90 text-gray-900 transition-colors hover:bg-white",
        className,
      )}
    >
      <Heart
        className={cn("size-4", active && "fill-current")}
        strokeWidth={1.5}
      />
    </button>
  );
}
