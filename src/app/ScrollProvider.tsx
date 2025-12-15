"use client";

import { createContext, useContext, useRef } from "react";

type ScrollContextType = {
  register: (id: string, el: HTMLElement | null) => void;
  scrollTo: (id: string) => void;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const sections = useRef<Record<string, HTMLElement | null>>({});

  const register = (id: string, el: HTMLElement | null) => {
    sections.current[id] = el;
  };

  const scrollTo = (id: string) => {
    const el = sections.current[id];
    if (el) {
      const yOffset = -80; // adjust if navbar height
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ register, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useScroll must be inside ScrollProvider");
  return ctx;
};
