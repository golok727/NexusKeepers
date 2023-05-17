import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter, Varela_Round } from 'next/font/google'
import ScrollProvider from '@/context/ScrollProvider'

const inter = Inter({ subsets: ['latin'] })
const varela = Varela_Round({ subsets: ['latin'], weight: '400' })
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
      <body className={`${inter.className} min-h-screen relative`}>
        <ScrollProvider>
          <Navbar />
          {children}
        </ScrollProvider>
      </body>
    </html>
  )
}
