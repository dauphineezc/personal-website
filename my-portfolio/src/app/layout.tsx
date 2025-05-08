'use client';                          // ← need this to use usePathname
import './globals.css';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const path = usePathname();
  const isHome = path === '/';

  return (
    <html lang="en">
      <body>
        {/* main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
