"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "../ScrollProvider";
import styles from "../portfolio/portfolio.module.css";

export default function Portfolio() {
  const ref = useRef<HTMLElement | null>(null);
  const { register } = useScroll();

  useEffect(() => {
    register("portfolio", ref.current);
  }, []);

  return (
    <main className={styles.main}>

    
    <section ref={ref} className="section">
      <h2>Portfolio</h2>
    </section>



    </main>
  );
}
