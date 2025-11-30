'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const previewImages = ['1.png', '2.png', '3.png', '4.png', '5.png']

export default function PreviewSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % previewImages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="px-[10%]">
      <div className="mb-8 flex max-[1200px]:flex-col">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex w-1/3 flex-col justify-center pb-20 max-[1200px]:w-full max-[1200px]:items-center max-[1200px]:pb-10 max-[1200px]:text-center"
        >
          <h1 className="mb-5 text-[63px] font-semibold text-primary max-[960px]:text-[40px]">
            Preview
          </h1>
          <div className="mb-9 max-w-[calc(100%-40px)] text-[15px] font-medium leading-[1.75] max-[1200px]:max-w-[500px]">
            See how thousands of users are transforming their car care routine.
            Watch our demo video to explore the features that make car washing
            effortless.
          </div>
          <a
            href="https://www.youtube.com/watch?v=ZonTNczrThM"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-fit w-fit items-center justify-center bg-[#FF0000] px-5 py-2.5 text-[17px] font-medium text-white no-underline hover:bg-[#F00000]"
          >
            Live demo
          </a>
        </motion.div>

        {/* Center - Image Carousel */}
        <div className="pointer-events-none flex h-[560px] w-1/3 justify-center overflow-hidden max-[1200px]:w-full">
          <div className="relative flex h-full w-[300px] items-center justify-center">
            <AnimatePresence>
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute"
              >
                <Image
                  src={`/previews/${previewImages[currentImage]}`}
                  alt={`Preview ${currentImage + 1}`}
                  width={300}
                  height={560}
                  className="object-contain"
                  priority={currentImage === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex w-1/3 flex-col items-end justify-center pb-20 text-right max-[1200px]:w-full max-[1200px]:items-center max-[1200px]:pb-8 max-[1200px]:pt-10 max-[1200px]:text-center max-[600px]:pb-0"
        >
          <div className="mb-5 text-[15px] font-semibold text-primary">
            Anywhere, Anytime Access
          </div>
          <div className="mb-9 max-w-[calc(100%-40px)] text-[15px] font-medium leading-[1.75] max-[1200px]:max-w-[500px]">
            Say goodbye to long queues and scheduling hassles! With our app,
            you can register for a carwash from the comfort of your home or
            office. No need to waste time driving to a carwash center
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="flex w-full flex-wrap justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-0 w-1/2 max-w-[calc(50%-40px)] text-[15px] font-medium leading-[1.75] max-[600px]:min-w-full max-[600px]:max-w-full max-[600px]:text-center"
        >
          Book your car wash in seconds from anywhere. Manage multiple vehicles,
          choose from hundreds of partner locations, and enjoy seamless service
          with real-time updates and personalized recommendations.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-0 w-1/2 max-w-[calc(50%-40px)] text-right text-[15px] font-medium italic leading-[1.75] max-[600px]:min-w-full max-[600px]:max-w-full max-[600px]:pb-10 max-[600px]:text-center"
        >
          Built from the ground up with customer experience in mind. Every
          feature has been carefully designed to save you time and deliver
          exceptional car care service at your convenience.
        </motion.div>
      </div>
    </div>
  )
}
