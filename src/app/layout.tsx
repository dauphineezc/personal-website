// src/app/layout.tsx
import './globals.css'
import './experience-styles.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Zoë Dauphinee • Portfolio',
  description: 'Full Stack Software Engineer — About, Experience, Contact',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="page-container">
          {children}
        </main>
      </body>
    </html>
  )
}
