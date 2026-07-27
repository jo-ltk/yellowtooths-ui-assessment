"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";

export type CartProduct = {
  id: string;
  name: string;
  price: string;
  image: string;
};

export type CartItem = CartProduct & {
  quantity: number;
};

type CartState = {
  items: CartItem[];
  hydrated: boolean;
};

type CartAction =
  | { type: "HYDRATE"; items: CartItem[] }
  | { type: "ADD"; product: CartProduct }
  | { type: "REMOVE"; id: string }
  | { type: "UPDATE_QUANTITY"; id: string; quantity: number };

type CartContextValue = {
  items: CartItem[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  itemCount: number;
  cartTotal: number;
};

const STORAGE_KEY = "parfs-cart";

const CartContext = createContext<CartContextValue | null>(null);

export function parsePrice(price: string): number {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE": {
      // Keep any items added before localStorage finished loading
      if (state.items.length === 0) {
        return { items: action.items, hydrated: true };
      }

      const merged = new Map(
        action.items.map((item) => [item.id, { ...item }]),
      );
      for (const item of state.items) {
        const existing = merged.get(item.id);
        if (existing) {
          merged.set(item.id, {
            ...existing,
            quantity: existing.quantity + item.quantity,
          });
        } else {
          merged.set(item.id, item);
        }
      }
      return { items: Array.from(merged.values()), hydrated: true };
    }
    case "ADD": {
      const existing = state.items.find((item) => item.id === action.product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.product, quantity: 1 }],
      };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "UPDATE_QUANTITY": {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.id),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: action.quantity }
            : item,
        ),
      };
    }
    default:
      return state;
  }
}

function readStoredItems(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is CartItem =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as CartItem).id === "string" &&
        typeof (item as CartItem).quantity === "number",
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    hydrated: false,
  });

  useEffect(() => {
    dispatch({ type: "HYDRATE", items: readStoredItems() });
  }, []);

  useEffect(() => {
    if (!state.hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items, state.hydrated]);

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = state.items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0,
  );

  const value: CartContextValue = {
    items: state.items,
    addToCart: (product) => dispatch({ type: "ADD", product }),
    removeFromCart: (id) => dispatch({ type: "REMOVE", id }),
    updateQuantity: (id, quantity) =>
      dispatch({ type: "UPDATE_QUANTITY", id, quantity }),
    itemCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
