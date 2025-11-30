import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Terms of Service - Megacarwash',
  description: 'Terms of service and user agreement',
}

export default function Terms() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <div className="min-h-screen bg-white py-20">
          <div className="mx-auto max-w-4xl px-[10%]">
            <h1 className="mb-8 text-5xl font-bold text-gray-800">
              Terms of Service
            </h1>
            <p className="mb-8 text-gray-600">
              Last updated: November 30, 2025
            </p>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using Megacarwash's services, you accept and
                  agree to be bound by these Terms of Service. If you do not agree
                  to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  2. Service Description
                </h2>
                <p>
                  Megacarwash provides a platform that connects users with
                  professional car wash service providers. We facilitate bookings
                  but do not directly provide car wash services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  3. User Accounts
                </h2>
                <p>
                  You are responsible for maintaining the confidentiality of your
                  account credentials and for all activities that occur under your
                  account. You must notify us immediately of any unauthorized use
                  of your account.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  4. Booking and Cancellation
                </h2>
                <p>
                  Bookings can be cancelled up to 2 hours before the scheduled
                  service time without charge. Late cancellations or no-shows may
                  result in fees as specified in your subscription plan.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  5. Payment Terms
                </h2>
                <p>
                  Subscription fees are billed monthly in advance. You authorize us
                  to charge your payment method for all fees. All fees are
                  non-refundable except as required by law.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  6. Service Quality
                </h2>
                <p>
                  While we strive to ensure high-quality service from our partner
                  locations, Megacarwash is not liable for the quality of service
                  provided by individual partners. Please report any issues through
                  our app for resolution.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  7. Limitation of Liability
                </h2>
                <p>
                  Megacarwash shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages resulting from your
                  use of our services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  8. Contact Information
                </h2>
                <p>
                  For questions about these Terms of Service, contact us at{' '}
                  <a
                    href="mailto:legal@megacarwash.com"
                    className="text-primary underline hover:text-[#1976D2]"
                  >
                    legal@megacarwash.com
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
