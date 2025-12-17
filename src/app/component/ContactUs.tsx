"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "../ScrollProvider";
import styles from "../projects/contact.module.css";

export default function ContactUs() {
  const ref = useRef<HTMLElement | null>(null);
  const { register } = useScroll();

  useEffect(() => {
    register("ContactUs", ref.current);
  }, [register]);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT – DIGITAL CARD */}
        <div className={styles.card}>
          <img
            src="/images/logo.png"
            alt="Company Logo"
            className={styles.logo}
          />

          {/* <h3 className={styles.companyName}>WasteCare Solutions</h3> */}

          <div className={styles.cardInfo}>
            <p>📍 Accra, Ghana</p>
            <p>📧 brianbaahnana7@gmail.com</p>
            <p>📞 +233244276881</p>
          </div>
        </div>

        {/* RIGHT – CONTACT FORM */}
        <form className={styles.form}>
          <h2>Send Us a Message</h2>

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            required
          />

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}
