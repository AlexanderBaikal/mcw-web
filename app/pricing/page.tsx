import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import PricingSection from '@/components/pricing/PricingSection'

export const metadata = {
  title: 'Pricing - Megacarwash',
  description: 'Choose the perfect plan for your car care needs',
}

export default function Pricing() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
