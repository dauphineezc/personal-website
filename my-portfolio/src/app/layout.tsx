// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Zoe Dauphinee • Portfolio',
  description: 'CS Student @ NYU — About, Experience, Contact',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* you can style your <main> via plain CSS classes in globals.css */}
        <main className="page-container">
          {children}
        </main>
      </body>
    </html>
  )
}
