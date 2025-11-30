'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { name: 'Features', href: '/#features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 z-[999] w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg'
          : 'bg-gradient-to-r from-primary/80 to-[#1976D2]/80 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-[5%]">
        {/* Logo */}
        <Link
          href="/"
          className={`flex cursor-pointer items-center text-2xl font-semibold no-underline transition-colors ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
        >
          <Image
            src="/assets/megacarwash.svg"
            alt="Megacarwash Logo"
            width={40}
            height={40}
            className="pr-3"
            style={{
              filter: scrolled
                ? 'brightness(0) saturate(100%) invert(52%) sepia(96%) saturate(2625%) hue-rotate(189deg) brightness(99%) contrast(101%)'
                : 'brightness(0) invert(1)',
            }}
          />
          <span className="max-[500px]:hidden">
            Mega<span className="font-bold">carwash</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium no-underline transition-colors pb-1 ${
                scrolled
                  ? 'text-gray-700 hover:text-primary hover:border-b-2 hover:border-primary'
                  : 'text-white hover:text-cyan-200 hover:border-b-2 hover:border-cyan-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="mailto:support@megacarwash.com"
            className={`inline-flex h-12 w-32 items-center justify-center rounded-lg border-2 text-base font-semibold transition-all active:scale-95 ${
              scrolled
                ? 'border-[#2196F3] bg-transparent text-[#2196F3] hover:border-black hover:text-black'
                : 'border-white bg-transparent text-white hover:bg-white hover:text-black'
            }`}
          >
            Contact
          </a>
          <a
            href="mailto:support@megacarwash.com?subject=Get Started with Megacarwash"
            className={`inline-flex h-12 w-32 items-center justify-center rounded-lg text-base font-semibold transition-all ${
              scrolled
                ? 'bg-[#2196F3] text-white hover:bg-black'
                : 'bg-white hover:bg-[#2196F3]'
            }`}
            style={!scrolled ? { color: '#2196F3' } : undefined}
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden text-2xl ${scrolled ? 'text-primary' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-white shadow-xl">
          <div className="flex flex-col px-[5%] py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-gray-100 py-4 font-medium text-gray-700 no-underline transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:support@megacarwash.com"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border-2 border-gray-300 bg-transparent text-base font-semibold text-gray-700 shadow-md transition-all hover:bg-gray-100 hover:text-black hover:shadow-lg active:scale-95"
            >
              Contact
            </a>
            <a
              href="mailto:support@megacarwash.com?subject=Get Started with Megacarwash"
              className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary text-base font-semibold text-white shadow-md transition-all hover:bg-blue-600 hover:shadow-lg active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
