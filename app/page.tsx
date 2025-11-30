import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import HeroSection from '@/components/hero-section/HeroSection'
import CompaniesSection from '@/components/companies/CompaniesSection'
import PreviewSection from '@/components/preview/PreviewSection'
import Technologies from '@/components/technologies/Technologies'
import Testimonials from '@/components/testimonials/Testimonials'
import FAQ from '@/components/faq/FAQ'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <CompaniesSection top={true} />
        <PreviewSection />
        <Technologies />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
