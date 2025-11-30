import type { Metadata } from 'next'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
  title: 'Author - Megacarwash',
  description: 'About the author of Megacarwash',
}

export default function AuthorPage() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-[calc(100vh-160px)] items-center justify-center">
        <h1 className="text-center">Author</h1>
      </main>
      <Footer />
    </div>
  )
}
