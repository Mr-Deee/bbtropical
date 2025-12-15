"use client";

import { useScroll } from "../ScrollProvider";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { scrollTo } = useScroll();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className={styles.links}>
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("portfolio1")}>Portfolio</li>
        <li onClick={() => scrollTo("ContactUs")}>ContactUs</li>
      </ul>
    </nav>
  );
}
