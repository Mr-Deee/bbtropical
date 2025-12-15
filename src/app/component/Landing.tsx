"use client";

import { useState, useEffect, useRef } from "react";
import { useScroll } from "../ScrollProvider";
import styles from "../Landing/Home.module.css";

export default function Landing() {
  const ref = useRef<HTMLElement | null>(null);
  const { register } = useScroll();

  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    register("home", ref.current);
  }, [register]);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section ref={ref} className={styles.heroSection}>
      {images.map((src, i) => (
        <div
          key={i}
          className={styles.heroImage}
          style={{ backgroundImage: `url(${src})`, opacity: i === index ? 1 : 0 }}
        />
      ))}
      <div className={styles.overlay}>
        <div className={styles.left}>
          <h1>We Build Dreams</h1>
          <p>Your Dream, Our Mission</p>
        </div>
      </div>
    </section>
  );
}
