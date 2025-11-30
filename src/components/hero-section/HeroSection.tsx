'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <div className="relative mb-8 h-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2196F3] via-[#1976D2] to-[#0D47A1]" />

      <div className="relative flex h-full items-center max-[1200px]:flex-col">
        {/* Left Content - Desktop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute z-[4] flex h-full max-w-[60%] py-[6vh] max-[1200px]:relative max-[1200px]:min-w-full max-[1200px]:max-w-full max-[1200px]:justify-center max-[1200px]:bg-primary"
        >
          <div className="flex max-w-full flex-col justify-center pl-[10vw] max-[1200px]:items-center max-[1200px]:pl-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-0 text-[72px] font-bold leading-[80px] tracking-tight text-white drop-shadow-lg max-[1200px]:text-center max-[960px]:text-[50px] max-[960px]:leading-[58px] max-[768px]:mb-4 max-[768px]:text-[56px] max-[768px]:leading-[64px] max-[400px]:text-[44px] max-[400px]:leading-[52px]"
            >
              <p>Car wash</p>
              <p className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                in an instant
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 text-2xl font-medium leading-[34px] text-white/95 drop-shadow-md max-[1200px]:text-center max-[1200px]:text-xl max-[1200px]:leading-[28px] max-[890px]:pt-5 max-[768px]:mb-4 max-[768px]:text-xl"
            >
              <p>No more long lines.</p>
              <p>Just sign up and come</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 pb-5 pt-[50px] max-[1280px]:pb-2.5 max-[1280px]:pt-10 max-[890px]:pt-8 max-[890px]:pb-0 max-[768px]:mb-4 max-[400px]:flex-col"
            >
              <a
                href="mailto:support@megacarwash.com?subject=Get Started with Megacarwash"
                className="inline-flex w-48 items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#2196F3] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl active:scale-95 max-[400px]:w-full"
                style={{ color: '#2196F3' }}
              >
                Get Started
              </a>
              <a
                href="mailto:support@megacarwash.com?subject=Request Demo"
                className="inline-flex w-48 items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-white hover:text-black hover:shadow-xl active:scale-95 max-[400px]:w-full"
              >
                Request Demo
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image - Desktop with 3D Phone Effect */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative top-0 z-0 flex w-full max-[1200px]:hidden"
        >
          <div className="relative h-full w-full">
            <Image
              src="/handbg.jpg"
              alt="Car wash"
              width={1920}
              height={1080}
              priority
              className="min-h-[calc(100vh-80px)] min-w-full max-w-full object-cover object-right"
            />
            {/* 3D Phone Mockup Effect Overlay */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute right-[10%] top-[50%] -translate-y-1/2"
            >
              <div
                className="relative rounded-[40px] shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))',
                }}
              >
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Image - Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative top-0 z-0 hidden w-full max-[1200px]:flex"
        >
          <Image
            src="/hand2.jpg"
            alt="Car wash"
            width={800}
            height={800}
            className="ml-[10%] min-h-full max-h-full min-w-[80%] max-w-[80%] max-[960px]:ml-0 max-[960px]:min-w-full max-[960px]:max-w-full"
          />
        </motion.div>
      </div>
    </div>
  )
}
