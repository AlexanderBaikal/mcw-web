import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Privacy Policy - Megacarwash',
  description: 'Privacy policy and data protection information',
}

export default function Privacy() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <div className="min-h-screen bg-white py-20">
          <div className="mx-auto max-w-4xl px-[10%]">
            <h1 className="mb-8 text-5xl font-bold text-gray-800">
              Privacy Policy
            </h1>
            <p className="mb-8 text-gray-600">
              Last updated: November 30, 2025
            </p>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  1. Information We Collect
                </h2>
                <p>
                  We collect information you provide directly to us, including your
                  name, email address, phone number, vehicle information, and
                  payment details when you use our service.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  2. How We Use Your Information
                </h2>
                <p>
                  We use the information we collect to provide, maintain, and
                  improve our services, process your bookings, send you technical
                  notices and support messages, and communicate with you about
                  products, services, and events.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  3. Information Sharing
                </h2>
                <p>
                  We share your information with our partner car wash locations to
                  fulfill your service requests. We do not sell your personal
                  information to third parties. We may share information when
                  required by law or to protect our rights.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  4. Data Security
                </h2>
                <p>
                  We take reasonable measures to help protect your personal
                  information from loss, theft, misuse, unauthorized access,
                  disclosure, alteration, and destruction.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  5. Your Rights
                </h2>
                <p>
                  You have the right to access, update, or delete your personal
                  information at any time through your account settings or by
                  contacting us directly.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  6. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at{' '}
                  <a
                    href="mailto:privacy@megacarwash.com"
                    className="text-primary underline hover:text-[#1976D2]"
                  >
                    privacy@megacarwash.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
