"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (page: string, sectionId: string) => {
    if (pathname === page) {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(page); // navigate to page
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 200); // wait for page load
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className={styles.links}>
        <li onClick={() => scrollToSection("/", "home")}>Home</li>
        <li onClick={() => scrollToSection("/portfolio", "portfolio")}>Portfolio</li>
        <li onClick={() => scrollToSection("/projects", "projects")}>Projects</li>
        <li onClick={() => scrollToSection("/contact", "contact")}>Contact</li>
      </ul>
    </nav>
  );
}
