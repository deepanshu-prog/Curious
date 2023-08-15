import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster_provider'
import { CrispProvider } from '@/components/crisp-provider'
//  import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Curious',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
       <html lang="en">
        <CrispProvider/>
      <body className={inter.className}>{children}</body>
    <ModalProvider/>
    <ToasterProvider/>
    </html>
    </ClerkProvider>
 
  )
}
