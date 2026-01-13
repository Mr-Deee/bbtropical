"use client";

import { useState } from "react";
import { useScroll } from "../ScrollProvider";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { scrollTo } = useScroll();
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollTo(id);
    setOpen(false); // close menu on mobile
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
      </div>
     
      <ul className={`${styles.links} ${open ? styles.active : ""}`}>

        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("portfolio1")}>Portfolio</li>
        <li onClick={() => handleScroll("ContactUs")}>ContactUs</li>
  
      </ul>
      

      <div
        className={styles.menuToggle}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}
