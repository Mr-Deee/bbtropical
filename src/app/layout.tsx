// app/layout.tsx
"use client";

import { ScrollProvider, useScroll } from "./ScrollProvider";
import { SECTIONS } from "./sections";
import "./globals.css";

function Navbar() {
  const { scrollTo } = useScroll();

  return (
    <nav className="navbar">
      <img src="/images/logo.png" />
      <ul>
        {SECTIONS.map(s => (
          <li key={s.id}>
            <button onClick={() => scrollTo(s.id)}>
              {s.id.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
