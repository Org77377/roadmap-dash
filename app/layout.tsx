import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MagicCursor } from "@/components/magic-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Full Stack Developer Mastery Roadmap | Built by Omkar RG",
  description: "A comprehensive 6-month roadmap from intermediate to advanced full stack developer. Built and created by Omkar RG",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={inter.className}>
        <MagicCursor />
        {children}
      </body>
    </html>
  )
}

