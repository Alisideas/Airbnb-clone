import { Nunito } from 'next/font/google';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar';
import RegisterModel from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hotel Gasht',
  description: 'By Techwise',
}

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModel />
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
