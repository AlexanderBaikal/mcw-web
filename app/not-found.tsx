import Link from 'next/link'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center px-[10%]">
        <h1 className="mb-6 text-6xl font-semibold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-medium">Page Not Found</h2>
        <p className="mb-8 text-center text-lg">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="rounded bg-primary px-6 py-3 text-white no-underline transition-colors hover:bg-[#1976D2]"
        >
          Go Back Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
