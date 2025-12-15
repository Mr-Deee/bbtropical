"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "../ScrollProvider";

export default function Portfolio() {
  const ref = useRef<HTMLElement | null>(null);
  const { register } = useScroll();

  useEffect(() => {
    register("projects", ref.current);
  }, []);

  return (
    <section ref={ref} className="section">
      <h2>projects</h2>
    </section>
  );
}
