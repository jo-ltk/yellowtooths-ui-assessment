"use client";

import { useCart, type CartProduct } from "@/context/CartContext";

type AddToCartButtonProps = {
  product: CartProduct;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="mt-4 cursor-pointer self-start border-b border-gray-900 pb-1 font-geist text-[10px] font-light uppercase tracking-[0.2em] text-gray-900 sm:text-xs"
    >
      Add to Cart
    </button>
  );
}
