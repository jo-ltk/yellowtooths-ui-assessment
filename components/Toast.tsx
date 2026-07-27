"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

type ToastItem = {
  id: number;
  message: string;
};

type ToastContextValue = {
  toast: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const DISMISS_MS = 2600;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = useCallback((message: string) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev.slice(-2), { id, message }]);
  }, []);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-6 left-1/2 z-[100] flex w-[min(92vw,22rem)] -translate-x-1/2 flex-col gap-2"
      >
        {toasts.map((item) => (
          <ToastCard
            key={item.id}
            message={item.message}
            onDone={() => dismiss(item.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastCard({
  message,
  onDone,
}: {
  message: string;
  onDone: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = requestAnimationFrame(() => setVisible(true));
    const hide = window.setTimeout(() => setVisible(false), DISMISS_MS - 320);
    const remove = window.setTimeout(onDone, DISMISS_MS);
    return () => {
      cancelAnimationFrame(show);
      window.clearTimeout(hide);
      window.clearTimeout(remove);
    };
  }, [onDone]);

  return (
    <div
      role="status"
      className={cn(
        "pointer-events-auto flex items-center gap-3 rounded-full bg-gray-900 px-4 py-3 text-white shadow-lg transition-all duration-300 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0",
      )}
    >
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/15">
        <Check className="size-3.5" strokeWidth={2.5} />
      </span>
      <p className="font-geist text-sm font-medium tracking-tight">{message}</p>
    </div>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
