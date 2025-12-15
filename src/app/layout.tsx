// app/layout.tsx
import { ScrollProvider } from "./ScrollProvider";
import Navbar from "./component/Navbar";

import "./globals.css"; // your global CSS

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollProvider>
        <Navbar />

          {children}
          
          
          </ScrollProvider>
      </body>
    </html>
  );
}
