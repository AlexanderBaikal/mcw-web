import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import AboutSection from '@/components/about/AboutSection'

export const metadata = {
  title: 'About Us - Megacarwash',
  description: 'Learn about our mission to revolutionize car care',
}

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
