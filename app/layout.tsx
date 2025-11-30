import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Megacarwash - Car wash in an instant',
  description:
    'Professional car wash service at your fingertips. Download the Megacarwash app for iOS and Android.',
  keywords: ['car wash', 'mobile app', 'car cleaning', 'auto detailing'],
  authors: [{ name: 'Aleksandr Baikalov' }],
  icons: {
    icon: '/mcw_icon.png',
  },
  openGraph: {
    title: 'Megacarwash - Car wash in an instant',
    description:
      'Professional car wash service at your fingertips. Download the Megacarwash app for iOS and Android.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
