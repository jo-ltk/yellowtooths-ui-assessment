"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";

export type WishlistItem = {
  id: string;
  name: string;
  price: string;
  image: string;
};

type WishlistState = {
  items: WishlistItem[];
  hydrated: boolean;
};

type WishlistAction =
  | { type: "HYDRATE"; items: WishlistItem[] }
  | { type: "ADD"; item: WishlistItem }
  | { type: "REMOVE"; id: string };

type WishlistContextValue = {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
};

const STORAGE_KEY = "parfs-wishlist";

const WishlistContext = createContext<WishlistContextValue | null>(null);

function wishlistReducer(
  state: WishlistState,
  action: WishlistAction,
): WishlistState {
  switch (action.type) {
    case "HYDRATE":
      return { items: action.items, hydrated: true };
    case "ADD":
      if (state.items.some((item) => item.id === action.item.id)) {
        return state;
      }
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

function readStoredItems(): WishlistItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as WishlistItem[]) : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, {
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

  const value: WishlistContextValue = {
    items: state.items,
    addToWishlist: (item) => dispatch({ type: "ADD", item }),
    removeFromWishlist: (id) => dispatch({ type: "REMOVE", id }),
    isWishlisted: (id) => state.items.some((item) => item.id === id),
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
