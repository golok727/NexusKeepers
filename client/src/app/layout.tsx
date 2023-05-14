import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NexusKeepers',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="eAn" className="dark">
      <body className={`min-h-screen relative`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
