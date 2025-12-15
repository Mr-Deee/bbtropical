"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "../ScrollProvider";

export default function ContactUs() {
  const ref = useRef<HTMLElement | null>(null);
  const { register } = useScroll();

  useEffect(() => {
    register("ContactUs", ref.current);
  }, []);

  return (
    <section ref={ref} className="section">
      <h2>ContactUs</h2>
    </section>
  );
}
