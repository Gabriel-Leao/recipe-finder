import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'

import { Navbar } from '@/components/navbar'

import './globals.css'

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
})

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Recipe finder',
  description: 'Find your favorite recipes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${nunitoSans.variable} ${nunito.variable} h-full antialiased`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
