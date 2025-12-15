"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";

// import { ref as dbRef, push } from "firebase/database";
// import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage, database } from "../firebase";
import styles from "../Landing/Home.module.css";
import Link from "next/link";
import { useScroll } from "../ScrollProvider";

export default function LandingPage() {

  const ref = useRef<HTMLElement | null>(null);
  const { register } = useScroll();

  useEffect(() => {
    register("home", ref.current);
  }, []);

  const images: string[] = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
  ];

  const [index, setIndex] = useState(0);


  // Auto-change hero images
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, [images.length]);




  

  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt=" Logo" />
        </div>
        <ul className={styles.navlinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <section className={styles.hero}>
        {images.map((src, i) => (
          <div
            key={i}
            className={styles.heroImage}
            style={{ backgroundImage: `url(${src})`, opacity: i === index ? 1 : 0 }}
          />
        ))}

        <div className={styles.overlay}>
          <div className={styles.left}>
            <h1>We Build Dreams </h1>
            <p>Your Dream Our Mission</p>

        
             
                
        
          </div>
        </div>
      </section>
    </main>
  );
}
