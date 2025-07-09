import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/index.css'
import ClientProviders from '@/components/ClientProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cairo - Lovable Design Template',
  description: 'A modern design template built with Next.js and shadcn/ui',
  icons: {
    icon: '/careairo-logo.png',
    shortcut: '/careairo-logo.png',
    apple: '/careairo-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/careairo-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/careairo-logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
} 