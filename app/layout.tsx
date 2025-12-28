import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mia Chen | UGC Creator & Model',
  description: 'Korean-European model specializing in lifestyle, beauty, and fashion UGC content for Instagram',
  keywords: 'UGC creator, model, Instagram, Korean-European, fashion, beauty, lifestyle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
