import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-[1200px] px-[10%] py-12">
        {/* Top Section */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="mb-4 flex cursor-pointer items-center text-2xl text-white no-underline"
            >
              <Image
                src="/assets/megacarwash.svg"
                alt="Megacarwash Logo"
                width={40}
                height={40}
                className="pr-3"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              Megacarwash
            </Link>
            <p className="text-sm text-gray-400">
              Professional car wash services at your fingertips.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@megacarwash.com"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
          <small className="mb-4 text-gray-400 md:mb-0">
            © {currentYear} Megacarwash. All rights reserved.
          </small>
          <div className="flex w-24 items-center justify-between">
            <a
              href="https://github.com/AlexanderBaikal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="text-2xl text-white transition-colors hover:text-primary"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aleksandr-baikalov/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-2xl text-white transition-colors hover:text-primary"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
