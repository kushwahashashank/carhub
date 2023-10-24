import type { Metadata } from 'next'

import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'Carhub',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative no-scrollbar">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
