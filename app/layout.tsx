import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Geounity App',
  description: 'Cooming soon',
  generator: 'https://sebastiancardoso.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
